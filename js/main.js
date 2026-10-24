/* Global interactions: data binding, header, mobile nav, back-to-top, copy, hero chart, contact form. */
(function () {
  "use strict";

  var S = window.SITE || {};
  var UI = window.UI || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Bind config → DOM ---------- */
  $$("[data-bind]").forEach(function (el) {
    var v = S[el.getAttribute("data-bind")];
    if (v != null) el.textContent = v;
  });
  $$("[data-href]").forEach(function (el) {
    var href = UI.resolveHref(el.getAttribute("data-href"));
    if (href) {
      el.setAttribute("href", href);
      if (/^https?:/.test(href)) { el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener noreferrer"); }
    } else {
      el.removeAttribute("href");
      el.setAttribute("aria-disabled", "true");
      el.classList.add("is-disabled");
    }
  });
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().toLocaleDateString("fa-IR-u-ca-persian", { year: "numeric" }); });

  /* ---------- Toast ---------- */
  var toastEl, toastTimer;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 2200);
  }
  UI.toast = toast;

  /* ---------- Sticky header + back to top ---------- */
  var header = $("#site-header");
  var toTop = document.createElement("button");
  toTop.type = "button";
  toTop.className = "to-top no-print";
  toTop.setAttribute("aria-label", "بازگشت به بالای صفحه");
  toTop.innerHTML = '<i class="fa-solid fa-arrow-up" aria-hidden="true"></i>';
  document.body.appendChild(toTop);
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }); });

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY || document.documentElement.scrollTop;
      if (header) header.classList.toggle("is-stuck", y > 8);
      toTop.classList.toggle("show", y > 700);
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile navigation ---------- */
  var navBtn = $("#nav-toggle"), navPanel = $("#mobile-nav");
  function setNav(open) {
    if (!navBtn || !navPanel) return;
    navPanel.hidden = !open;
    navBtn.setAttribute("aria-expanded", String(open));
    navBtn.setAttribute("aria-label", open ? "بستن منو" : "باز کردن منو");
    navBtn.firstElementChild.className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    document.body.classList.toggle("nav-open", open);
    if (header && open) header.classList.add("is-stuck");
  }
  if (navBtn) {
    navBtn.addEventListener("click", function () { setNav(navPanel.hidden); });
    navPanel.addEventListener("click", function (e) { if (e.target.closest("a")) setNav(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !navPanel.hidden) { setNav(false); navBtn.focus(); } });
    window.addEventListener("resize", function () { if (window.innerWidth >= 1024 && !navPanel.hidden) setNav(false); });
  }

  /* ---------- Card spotlight (cheap pointer-follow glow) ---------- */
  var raf = 0;
  document.addEventListener("pointermove", function (e) {
    var card = e.target.closest && e.target.closest(".card");
    if (!card || raf) return;
    raf = requestAnimationFrame(function () {
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - r.left + "px");
      card.style.setProperty("--my", e.clientY - r.top + "px");
      raf = 0;
    });
  }, { passive: true });

  /* ---------- Copy to clipboard ---------- */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy") ? resolve() : reject(); } catch (err) { reject(err); }
      ta.remove();
    });
  }
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-copy], [data-copy-code]");
    if (!btn) return;
    var text;
    if (btn.hasAttribute("data-copy-code")) {
      var pre = btn.closest(".codebox").querySelector("pre");
      text = pre ? pre.textContent : "";
    } else {
      var v = btn.getAttribute("data-copy");
      text = v === "email" ? S.email : v === "url" ? location.href : v;
    }
    copyText(text).then(
      function () {
        toast(btn.hasAttribute("data-copy-code") ? "کد کپی شد" : "کپی شد ✓");
        if (btn._copyResetTimer) clearTimeout(btn._copyResetTimer);
        if (!btn._origHTML) btn._origHTML = btn.innerHTML;
        var icon = btn.querySelector("i");
        if (icon) {
          icon.className = "fa-solid fa-check text-ok";
        } else {
          btn.innerHTML = '<i class="fa-solid fa-check text-ok" aria-hidden="true"></i> کپی شد';
        }
        btn.classList.add("is-copied");
        btn._copyResetTimer = setTimeout(function () {
          if (btn._origHTML) {
            btn.innerHTML = btn._origHTML;
            delete btn._origHTML;
          }
          btn.classList.remove("is-copied");
        }, 2000);
      },
      function () { toast("کپی انجام نشد؛ لطفاً دستی کپی کنید"); }
    );
  });

  /* ---------- Resume PDF button ---------- */
  $$("[data-resume-download]").forEach(function (el) {
    if (S.resumePdf) {
      el.setAttribute("href", S.resumePdf);
      el.setAttribute("download", "");
    } else {
      el.setAttribute("href", "resume.html");
      el.addEventListener("click", function (e) {
        e.preventDefault();
        if (location.pathname.split("/").pop().replace(/\.html$/, "") === "resume") window.print();
        else location.href = "resume.html#print";
      });
    }
  });
  if (location.hash === "#print" && $("[data-resume-download]")) {
    window.addEventListener("load", function () { setTimeout(function () { window.print(); }, 400); });
  }

  /* ---------- Hero chart (illustrative data) ---------- */
  var chartHost = $("[data-hero-chart]");
  if (chartHost && UI.rng) {
    var W = 480, H = 230, N = 30, SPLIT = 21;
    var r = UI.rng(2026), X = UI.xs(N, 14, W - 14);
    var base = UI.walk(r, N, 40, 175);
    var actual = X.slice(0, SPLIT).map(function (x, i) { return [x, base[i]]; });
    var pred = X.map(function (x, i) {
      var noise = (r() - 0.5) * (i < SPLIT ? 10 : 18);
      return [x, base[i] + noise - (i >= SPLIT ? (i - SPLIT) * 1.4 : 0)];
    });
    var band = "";
    var up = [], lo = [];
    for (var i = SPLIT - 1; i < N; i++) {
      var w = 6 + (i - SPLIT + 1) * 2.4;
      up.push([pred[i][0], pred[i][1] - w]);
      lo.push([pred[i][0], pred[i][1] + w]);
    }
    band = UI.smooth(up) + "L" + lo[lo.length - 1][0].toFixed(1) + "," + lo[lo.length - 1][1].toFixed(1) +
      UI.smooth(lo.slice().reverse()).replace(/^M[^C]*/, "") + "Z";
    var grid = "";
    for (var g = 1; g < 5; g++) grid += '<line class="a-grid" x1="14" x2="' + (W - 14) + '" y1="' + g * 42 + '" y2="' + g * 42 + '"/>';
    var sx = X[SPLIT - 1];
    var last = pred[N - 1];
    chartHost.innerHTML =
      '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="نمودار نمونه: مقدار واقعی و پیش‌بینی مدل، همراه با بازه اطمینان">' +
      '<defs><linearGradient id="hb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="rgb(var(--accent))" stop-opacity=".22"/><stop offset="1" stop-color="rgb(var(--accent))" stop-opacity=".04"/></linearGradient></defs>' +
      grid +
      '<rect x="' + sx.toFixed(1) + '" y="8" width="' + (W - 14 - sx).toFixed(1) + '" height="' + (H - 38) + '" rx="6" style="fill:rgb(var(--accent)/.05)"/>' +
      '<text x="' + (sx + 8).toFixed(1) + '" y="24" style="font:500 9px JetBrains Mono,monospace;fill:rgb(var(--muted))">FORECAST</text>' +
      '<path d="' + band + '" fill="url(#hb)" class="fade-late"/>' +
      '<path class="a-line draw" pathLength="1" style="stroke:rgb(var(--ink));stroke-width:2.2" d="' + UI.smooth(actual) + '"/>' +
      '<path class="a-line-2 fade-late" style="stroke-width:2;stroke-dasharray:5 5" d="' + UI.smooth(pred) + '"/>' +
      '<circle class="a-acc fade-late" cx="' + last[0].toFixed(1) + '" cy="' + last[1].toFixed(1) + '" r="4.5"/>' +
      '<line class="xhair" data-xh x1="0" x2="0" y1="8" y2="' + (H - 30) + '"/>' +
      '<circle data-xd r="4" opacity="0" style="fill:rgb(var(--surface));stroke:rgb(var(--accent-2));stroke-width:2"/>' +
      '<line class="a-grid" x1="14" x2="' + (W - 14) + '" y1="' + (H - 30) + '" y2="' + (H - 30) + '"/>' +
      '<g style="font:400 9px JetBrains Mono,monospace;fill:rgb(var(--muted))"><text x="14" y="' + (H - 12) + '">t-20</text><text x="' + (sx - 12).toFixed(1) + '" y="' + (H - 12) + '">now</text><text x="' + (W - 40) + '" y="' + (H - 12) + '">t+9</text></g></svg>' +
      '<div class="mono text-[0.68rem] flex gap-4 px-3 pt-1 pb-2 text-muted" dir="ltr">' +
      '<span class="inline-flex items-center gap-1.5"><i class="inline-block w-3 h-0.5" style="background:rgb(var(--ink))"></i>actual</span>' +
      '<span class="inline-flex items-center gap-1.5"><i class="inline-block w-3 h-0.5" style="background:rgb(var(--accent-2))"></i>predicted</span></div>';

    var svg = chartHost.firstElementChild, xh = $("[data-xh]", svg), xd = $("[data-xd]", svg);
    function track(e) {
      var rect = svg.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width) * W, best = 0, bd = 1e9;
      for (var k = 0; k < N; k++) { var d = Math.abs(pred[k][0] - x); if (d < bd) { bd = d; best = k; } }
      xh.setAttribute("x1", pred[best][0]); xh.setAttribute("x2", pred[best][0]);
      xd.setAttribute("cx", pred[best][0]); xd.setAttribute("cy", pred[best][1]);
      xh.style.opacity = 1; xd.setAttribute("opacity", 1);
    }
    svg.addEventListener("pointermove", track);
    svg.addEventListener("pointerleave", function () { xh.style.opacity = 0; xd.setAttribute("opacity", 0); });
  }

  /* ---------- Contact form ---------- */
  var form = $("#contact-form");
  if (form) {
    var dialog = $("#success-dialog");
    var rules = {
      name: function (v) { return v.trim().length < 2 ? "لطفاً نام خود را وارد کنید." : ""; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "یک ایمیل معتبر وارد کنید."; },
      subject: function (v) { return v.trim().length < 3 ? "موضوع پیام را بنویسید." : ""; },
      message: function (v) { return v.trim().length < 10 ? "پیام باید حداقل ۱۰ نویسه باشد." : ""; },
    };
    function check(field) {
      var el = form.elements[field], msg = rules[field](el.value);
      el.setAttribute("aria-invalid", msg ? "true" : "false");
      $("#err-" + field).textContent = msg;
      return !msg;
    }
    Object.keys(rules).forEach(function (f) {
      var el = form.elements[f];
      el.addEventListener("blur", function () { check(f); });
      el.addEventListener("input", function () { if (el.getAttribute("aria-invalid") === "true") check(f); });
    });
    var counter = $("#msg-count");
    form.elements.message.addEventListener("input", function (e) { if (counter) counter.textContent = UI.faNum(e.target.value.length); });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.elements.website && form.elements.website.value) return; // honeypot
      var ok = Object.keys(rules).map(check).every(Boolean);
      if (!ok) {
        var bad = form.querySelector('[aria-invalid="true"]');
        if (bad) bad.focus();
        return;
      }
      var btn = form.querySelector('[type="submit"]'), label = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin" aria-hidden="true"></i> در حال ارسال…';

      var send;
      if (S.formEndpoint) {
        send = fetch(S.formEndpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
          .then(function (res) { if (!res.ok) throw new Error("bad status"); });
      } else {
        // No backend configured yet: simulate a request. Set SITE.formEndpoint to connect a real service.
        send = new Promise(function (resolve) { setTimeout(resolve, 900); });
      }
      send.then(function () {
        form.reset();
        if (counter) counter.textContent = UI.faNum(0);
        if (dialog && dialog.showModal) dialog.showModal(); else toast("پیام شما ثبت شد ✓");
      }).catch(function () {
        toast("ارسال ناموفق بود؛ لطفاً دوباره تلاش کنید یا ایمیل بزنید.");
      }).then(function () {
        btn.disabled = false;
        btn.innerHTML = label;
      });
    });
    if (dialog) dialog.addEventListener("click", function (e) {
      if (e.target === dialog || e.target.closest("[data-close]")) dialog.close();
    });
  }

  /* ---------- Start reveal last so injected content is included ---------- */
  if (UI.reveal) UI.reveal();
})();
