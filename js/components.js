/**
 * Shared "components": header, footer, cards, generated artwork and
 * data-driven section renderers. Everything is driven by window.SITE.
 */
(function () {
  "use strict";

  var S = window.SITE || {};
  var EXT = ' target="_blank" rel="noopener noreferrer"';
  var ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ESC[c]; });
  }
  /** Escape, then turn `code` into <code>. */
  function inline(s) {
    return esc(s).replace(/`([^`]+)`/g, "<code>$1</code>");
  }
  function faNum(n) { return Number(n).toLocaleString("fa-IR"); }
  function fmtDate(iso) {
    try {
      return new Date(iso).toLocaleDateString("fa-IR-u-ca-persian", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
    } catch (e) { return iso; }
  }
  function byId(list, id) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  /** "github" | "email" | "project:<id>:github|demo" → URL ('' if unavailable) */
  function resolveHref(key) {
    if (!key) return "";
    var m = String(key).split(":");
    if (m[0] === "project") {
      var p = byId(S.projects || [], m[1]);
      return (p && p[m[2]]) || "";
    }
    if (key === "email") return S.email ? "mailto:" + S.email : "";
    return S[key] || "";
  }

  /* ------------------------------------------------------------------ */
  /* Navigation                                                          */
  /* ------------------------------------------------------------------ */
  var NAV = [
    { key: "index", href: "index.html", label: "خانه", icon: "fa-house" },
    { key: "about", href: "about.html", label: "درباره من", icon: "fa-user" },
    { key: "projects", href: "projects.html", label: "پروژه‌ها", icon: "fa-layer-group" },
    { key: "articles", href: "articles.html", label: "مقالات", icon: "fa-pen-nib" },
    { key: "resume", href: "resume.html", label: "رزومه", icon: "fa-file-lines" },
    { key: "contact", href: "contact.html", label: "تماس", icon: "fa-envelope" },
  ];
  var ALIAS = { project: "projects", article: "articles", "": "index" };

  function currentKey() {
    var last = location.pathname.split("/").pop().replace(/\.html$/, "");
    return ALIAS[last] || last || "index";
  }

  var SOCIALS = [
    { key: "github", label: "GitHub", icon: "fa-brands fa-github" },
    { key: "linkedin", label: "LinkedIn", icon: "fa-brands fa-linkedin-in" },
    { key: "telegram", label: "Telegram", icon: "fa-brands fa-telegram" },
    { key: "email", label: "Email", icon: "fa-solid fa-envelope" },
  ];

  function socialLink(s, cls) {
    var href = resolveHref(s.key);
    if (!href) return "";
    var ext = /^https?:/.test(href) ? EXT : "";
    return '<a class="' + cls + '" href="' + esc(href) + '"' + ext +
      ' aria-label="' + s.label + '" title="' + s.label + '"><i class="' + s.icon + '" aria-hidden="true"></i></a>';
  }

  var LOGO =
    '<svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">' +
    '<rect width="32" height="32" rx="9" style="fill:rgb(var(--ink))"/>' +
    '<path d="M9 21l5-9 4 6 5-8" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" style="stroke:rgb(var(--bg))"/>' +
    '<circle cx="9" cy="21" r="2.4" style="fill:rgb(var(--accent))"/><circle cx="23" cy="10" r="2.4" style="fill:rgb(var(--accent))"/></svg>';

  function headerHTML() {
    var cur = currentKey();
    var links = NAV.map(function (n) {
      return '<a class="nav-link" href="' + n.href + '"' + (n.key === cur ? ' aria-current="page"' : "") + ">" + n.label + "</a>";
    }).join("");
    var mobile = NAV.map(function (n) {
      return '<a class="m-link" href="' + n.href + '"' + (n.key === cur ? ' aria-current="page"' : "") + ">" +
        '<span class="flex items-center gap-3"><i class="fa-solid ' + n.icon + ' w-5 text-muted" aria-hidden="true"></i>' + n.label + "</span>" +
        '<i class="fa-solid fa-arrow-left text-muted text-sm" aria-hidden="true"></i></a>';
    }).join("");
    var socials = SOCIALS.map(function (s) { return socialLink(s, "icon-btn"); }).join("");

    return (
      '<header class="site-header" id="site-header"><div class="container-x flex h-16 items-center justify-between gap-4">' +
      '<a href="index.html" class="logo" aria-label="' + esc(S.name) + ' — صفحه اصلی">' + LOGO +
      "<span>" + esc(S.name) + "</span><small>/ai</small></a>" +
      '<nav class="hidden lg:flex items-center gap-1" aria-label="ناوبری اصلی">' + links + "</nav>" +
      '<div class="flex items-center gap-1">' +
      '<span class="hidden sm:flex items-center">' + socialLink(SOCIALS[0], "icon-btn") + socialLink(SOCIALS[1], "icon-btn") + "</span>" +
      '<span class="hidden sm:block w-px h-5 bg-line mx-2" aria-hidden="true"></span>' +
      '<button type="button" class="theme-toggle" data-theme-toggle aria-label="تغییر تم روشن / تاریک" aria-pressed="false">' +
      '<span class="thumb"><i class="fa-solid fa-moon" aria-hidden="true"></i><i class="fa-solid fa-sun" aria-hidden="true"></i></span></button>' +
      '<button type="button" id="nav-toggle" class="icon-btn lg:hidden ms-1" aria-label="باز کردن منو" aria-expanded="false" aria-controls="mobile-nav">' +
      '<i class="fa-solid fa-bars" aria-hidden="true"></i></button>' +
      "</div></div>" +
      '<div id="mobile-nav" class="mobile-nav lg:hidden" hidden><div class="container-x py-3">' + mobile +
      '<div class="flex items-center gap-1 py-4">' + socials + "</div></div></div></header>"
    );
  }

  function footerHTML() {
    var cur = currentKey();
    var links = NAV.map(function (n) {
      return '<li><a class="text-muted hover:text-ink transition-colors" href="' + n.href + '"' +
        (n.key === cur ? ' aria-current="page"' : "") + ">" + n.label + "</a></li>";
    }).join("");
    var socials = SOCIALS.map(function (s) { return socialLink(s, "icon-btn border border-line"); }).join("");
    return (
      '<footer class="site-footer border-t border-line mt-8"><div class="container-x py-12">' +
      '<div class="grid gap-10 md:grid-cols-12">' +
      '<div class="md:col-span-6"><a href="index.html" class="logo">' + LOGO + "<span>" + esc(S.name) + "</span></a>" +
      '<p class="mt-4 max-w-md text-sm text-muted">' + esc(S.role) +
      " — ساخت سیستم‌های هوشمند با Python، یادگیری ماشین و مهندسی نرم‌افزار.</p></div>" +
      '<div class="md:col-span-3"><h2 class="text-sm font-bold mb-4">صفحات</h2><ul class="grid gap-2 text-sm">' + links + "</ul></div>" +
      '<div class="md:col-span-3"><h2 class="text-sm font-bold mb-4">ارتباط</h2><div class="flex gap-2">' + socials + "</div>" +
      '<p class="mt-4 text-sm text-muted ltr" dir="ltr">' + esc(S.email) + "</p></div></div>" +
      '<div class="mt-10 pt-6 border-t border-line flex flex-col sm:flex-row gap-2 justify-between text-xs text-muted">' +
      "<p>© <span data-year></span> " + esc(S.name) + " — تمامی حقوق محفوظ است.</p>" +
      "<p>HTML5 · Tailwind CSS · Vanilla JavaScript</p></div></div></footer>"
    );
  }

  /* ------------------------------------------------------------------ */
  /* Procedural artwork (no image files, tiny, themeable)                */
  /* ------------------------------------------------------------------ */
  function hash(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function f1(n) { return n.toFixed(1); }
  /** Catmull-Rom → cubic Bézier smooth path through points. */
  function smooth(p) {
    var d = "M" + f1(p[0][0]) + "," + f1(p[0][1]);
    for (var i = 0; i < p.length - 1; i++) {
      var p0 = p[i - 1] || p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] || p2;
      d += "C" + f1(p1[0] + (p2[0] - p0[0]) / 6) + "," + f1(p1[1] + (p2[1] - p0[1]) / 6) + " " +
        f1(p2[0] - (p3[0] - p1[0]) / 6) + "," + f1(p2[1] - (p3[1] - p1[1]) / 6) + " " + f1(p2[0]) + "," + f1(p2[1]);
    }
    return d;
  }
  function walk(r, n, lo, hi) {
    var v = 0.45, out = [];
    for (var i = 0; i < n; i++) {
      v += (r() - 0.46) * 0.3;
      v = Math.min(0.94, Math.max(0.06, v));
      out.push(lo + (hi - lo) * (1 - v));
    }
    return out;
  }
  function xs(n, x0, x1) {
    var a = [];
    for (var i = 0; i < n; i++) a.push(x0 + ((x1 - x0) * i) / (n - 1));
    return a;
  }

  function artSvg(kind, seedStr) {
    var seed = hash(String(seedStr || kind));
    var r = rng(seed), id = "g" + seed.toString(36), i, j, out = "";
    var W = 400, H = 220;

    if (kind === "graph") {
      var layers = [3, 5, 5, 3], pos = [];
      layers.forEach(function (n, li) {
        var col = [];
        for (var k = 0; k < n; k++) col.push([62 + li * 92, H / 2 + (k - (n - 1) / 2) * (H * 0.72 / Math.max(n - 1, 1)) * (n > 3 ? 1 : 1.2)]);
        pos.push(col);
      });
      for (i = 0; i < pos.length - 1; i++)
        for (var a = 0; a < pos[i].length; a++)
          for (var b = 0; b < pos[i + 1].length; b++)
            out += '<line class="' + (r() > 0.82 ? "a-edge-hi" : "a-edge") + '" x1="' + f1(pos[i][a][0]) + '" y1="' + f1(pos[i][a][1]) +
              '" x2="' + f1(pos[i + 1][b][0]) + '" y2="' + f1(pos[i + 1][b][1]) + '"/>';
      pos.forEach(function (col) { col.forEach(function (p) { out += '<circle class="a-node" cx="' + f1(p[0]) + '" cy="' + f1(p[1]) + '" r="6"/>'; }); });
    } else if (kind === "bars") {
      var hs = walk(r, 22, 40, 190);
      hs.forEach(function (y, k) {
        var x = 26 + k * 16.5;
        out += '<rect class="' + (k > 16 ? "a-acc" : "a-dim") + '" x="' + f1(x) + '" y="' + f1(y) + '" width="9" height="' + f1(205 - y) + '" rx="2.5"' + (k > 16 ? ' opacity="' + (0.5 + (k - 16) * 0.1).toFixed(2) + '"' : "") + "/>";
      });
      out += '<line class="a-grid" x1="16" y1="205" x2="384" y2="205"/>';
    } else if (kind === "logs") {
      for (i = 0; i < 11; i++) {
        var y = 24 + i * 17, hot = i === 4 || i === 8, warn = i === 6;
        out += '<circle class="' + (hot ? "a-acc" : warn ? "a-acc2" : "a-dim") + '" cx="34" cy="' + (y + 3) + '" r="3"/>';
        out += '<rect class="a-dim" x="48" y="' + y + '" width="' + Math.round(26 + r() * 40) + '" height="6" rx="3"/>';
        out += '<rect class="' + (hot ? "a-acc" : "a-dim") + '" x="' + (hot ? 122 : 128) + '" y="' + y + '" width="' + Math.round(70 + r() * (hot ? 190 : 150)) + '" height="6" rx="3"' + (hot ? "" : ' opacity=".7"') + "/>";
      }
      out += '<rect x="22" y="' + (24 + 4 * 17 - 7) + '" width="356" height="20" rx="6" fill="none" class="a-line" stroke-width="1" stroke-dasharray="3 4"/>';
    } else if (kind === "wave") {
      for (j = 0; j < 3; j++) {
        var amp = 26 + r() * 22, ph = r() * 6, fr = 0.018 + r() * 0.014, pts = [];
        for (i = 0; i <= 40; i++) { var x = 10 + i * 9.75; pts.push([x, H / 2 + Math.sin(x * fr * 2.6 + ph) * amp + (j - 1) * 24]); }
        out += '<path class="' + (j === 0 ? "a-line" : "a-line-2") + '" d="' + smooth(pts) + '"' + (j === 2 ? ' opacity=".6"' : "") + "/>";
      }
    } else {
      /* chart */
      for (i = 1; i < 5; i++) out += '<line class="a-grid" x1="16" y1="' + i * 40 + '" x2="384" y2="' + i * 40 + '"/>';
      var X = xs(14, 20, 380), Y = walk(r, 14, 40, 170), pts2 = X.map(function (x, k) { return [x, Y[k]]; });
      var pred = pts2.map(function (p) { return [p[0], p[1] + (r() - 0.5) * 14 - 6]; });
      out += '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="rgb(var(--accent))" stop-opacity=".22"/><stop offset="1" stop-color="rgb(var(--accent))" stop-opacity="0"/></linearGradient></defs>';
      out += '<path d="' + smooth(pts2) + "L380,205 L20,205Z" + '" fill="url(#' + id + ')"/>';
      out += '<path class="a-line-2" d="' + smooth(pred) + '"/><path class="a-line" d="' + smooth(pts2) + '"/>';
      out += '<circle class="a-acc" cx="380" cy="' + f1(pts2[13][1]) + '" r="4.5"/>';
    }
    return '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-hidden="true" focusable="false">' + out + "</svg>";
  }

  /* ------------------------------------------------------------------ */
  /* Cards                                                               */
  /* ------------------------------------------------------------------ */
  function projectCard(p, idx) {
    var primary = p.page || "project.html?id=" + encodeURIComponent(p.id);
    var view = '<a class="btn btn-primary btn-sm" href="' + esc(primary) + '">مشاهده پروژه <i class="fa-solid fa-arrow-left" aria-hidden="true"></i></a>';
    var gh = p.github
      ? (p.private
        ? '<span class="btn btn-ghost btn-sm is-disabled" aria-disabled="true" title="مخزن خصوصی است"><i class="fa-solid fa-lock" aria-hidden="true"></i> Private</span>'
        : '<a class="btn btn-ghost btn-sm" href="' + esc(p.github) + '"' + EXT + ' aria-label="GitHub — ' + esc(p.title) + '"><i class="fa-brands fa-github" aria-hidden="true"></i> GitHub</a>')
      : "";
    var demo = p.demo
      ? '<a class="btn btn-ghost btn-sm" href="' + esc(p.demo) + '"' + (/^https?:/.test(p.demo) ? EXT : "") + '><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Live Demo</a>'
      : "";
    var st = p.status || {};
    return (
      '<article class="card project-card flex flex-col reveal" data-categories="' + esc((p.categories || []).join("|")) + '">' +
      '<div class="art">' + (p.cover
        ? '<img src="' + esc(p.cover) + '" alt="' + esc(p.title) + '" loading="lazy" decoding="async" class="block w-full object-cover object-top" style="aspect-ratio:400/220">'
        : artSvg(p.art, p.id)) + "</div>" +
      '<div class="flex flex-col gap-3 p-5 flex-1">' +
      '<div class="flex items-center justify-between"><span class="status status--' + esc(st.type || "draft") + '">' + esc(st.label || "") +
      '</span><span class="num">' + String((idx || 0) + 1).padStart(2, "0") + "</span></div>" +
      '<h3 class="text-lg font-bold leading-snug" dir="auto">' + esc(p.title) + "</h3>" +
      '<p class="text-sm text-muted leading-7">' + esc(p.summary) + "</p>" +
      '<ul class="flex flex-wrap gap-1.5 mt-1" aria-label="تکنولوژی‌ها">' +
      (p.stack || []).map(function (t) { return '<li class="chip">' + esc(t) + "</li>"; }).join("") + "</ul>" +
      '<div class="flex flex-wrap gap-2 mt-auto pt-4">' + view + gh + demo + "</div></div></article>"
    );
  }

  function articleHref(a) { return "article.html?id=" + encodeURIComponent(a.id); }

  function articleCard(a) {
    return (
      '<article class="card flex flex-col reveal" data-category="' + esc(a.category) + '">' +
      '<a class="art block" href="' + articleHref(a) + '" tabindex="-1" aria-hidden="true">' + artSvg(a.art, a.id) + "</a>" +
      '<div class="flex flex-col gap-3 p-5 flex-1">' +
      '<div class="flex items-center justify-between gap-2"><span class="tag">' + esc(a.category) + "</span></div>" +
      '<h3 class="text-lg font-bold leading-snug"><a href="' + articleHref(a) + '" class="hover:text-accent transition-colors">' + esc(a.title) + "</a></h3>" +
      '<p class="text-sm text-muted leading-7">' + esc(a.excerpt) + "</p>" +
      '<div class="mt-auto pt-3 flex items-center justify-between text-xs text-muted">' +
      '<span class="flex items-center gap-3"><span><i class="fa-regular fa-calendar ms-0 me-1" aria-hidden="true"></i>' + fmtDate(a.date) +
      '</span><span><i class="fa-regular fa-clock me-1" aria-hidden="true"></i>' + faNum(a.readTime) + " دقیقه</span></span>" +
      '<a class="font-semibold text-ink hover:text-accent transition-colors" href="' + articleHref(a) + '">مطالعه <i class="fa-solid fa-arrow-left text-[0.7rem]" aria-hidden="true"></i></a>' +
      "</div></div></article>"
    );
  }

  /* ------------------------------------------------------------------ */
  /* Section renderers — <div data-render="name">                        */
  /* ------------------------------------------------------------------ */
  var RENDER = {
    expertise: function () {
      return (S.expertise || []).map(function (e, i) {
        return '<article class="card p-6 reveal"><div class="flex items-start justify-between"><span class="ex-icon"><i class="' + esc(e.icon) + '" aria-hidden="true"></i></span>' +
          '<span class="num">0' + (i + 1) + "</span></div>" +
          '<h3 class="mt-5 text-lg font-bold">' + esc(e.title) + '</h3><p class="mono text-xs text-muted ltr" dir="ltr">' + esc(e.en) + "</p>" +
          '<p class="mt-3 text-sm text-muted leading-7">' + esc(e.desc) + "</p>" +
          '<ul class="mt-4 flex flex-wrap gap-1.5">' + (e.tags || []).map(function (t) { return '<li class="chip">' + esc(t) + "</li>"; }).join("") + "</ul></article>";
      }).join("");
    },
    skills: function () {
      return (S.skills || []).map(function (g) {
        return '<article class="card card-static p-5 reveal"><h3 class="flex items-center gap-3 font-bold mb-4">' +
          '<span class="ex-icon !w-9 !h-9 !text-sm !rounded-lg"><i class="' + esc(g.icon) + '" aria-hidden="true"></i></span>' +
          '<span class="ltr" dir="ltr">' + esc(g.group) + "</span></h3>" +
          '<ul class="grid gap-2">' + g.items.map(function (it) {
            return '<li class="skill-tile"><span class="si"><i class="' + esc(it.icon) + '" aria-hidden="true"></i></span>' +
              '<span class="min-w-0"><span class="block text-sm font-semibold ltr" dir="ltr">' + esc(it.name) + "</span>" +
              '<span class="block text-xs text-muted">' + esc(it.hint) + "</span></span></li>";
          }).join("") + "</ul></article>";
      }).join("");
    },
    timeline: function () {
      return (S.timeline || []).map(function (t) {
        return '<li class="tl-item reveal"><p class="mono text-xs text-accent">' + esc(t.period) + "</p>" +
          '<h3 class="font-bold mt-1">' + esc(t.title) + '</h3><p class="text-sm text-muted">' + esc(t.place) + "</p>" +
          '<p class="mt-2 text-sm leading-7">' + esc(t.desc) + "</p></li>";
      }).join("");
    },
    goals: function () {
      return (S.goals || []).map(function (g) {
        return '<article class="card card-static p-5 reveal"><span class="ex-icon"><i class="' + esc(g.icon) + '" aria-hidden="true"></i></span>' +
          '<h3 class="mt-4 font-bold">' + esc(g.title) + '</h3><p class="mt-2 text-sm text-muted leading-7">' + esc(g.desc) + "</p></article>";
      }).join("");
    },
    interests: function () {
      return (S.interests || []).map(function (t) {
        return '<li class="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm reveal">' +
          '<i class="' + esc(t.icon) + ' text-accent" aria-hidden="true"></i>' + esc(t.name) + "</li>";
      }).join("");
    },
    bio: function () {
      return (S.about.paragraphs || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    },
    facts: function () {
      return (S.about.facts || []).map(function (f) {
        return '<div class="flex items-center justify-between gap-4 py-3 border-b border-line last:border-0"><dt class="text-sm text-muted">' +
          esc(f.label) + '</dt><dd class="text-sm font-semibold">' + esc(f.value) + "</dd></div>";
      }).join("");
    },
    channels: function () {
      var rows = [
        { k: "email", icon: "fa-solid fa-envelope", title: "ایمیل", val: S.email, copy: true },
        { k: "github", icon: "fa-brands fa-github", title: "GitHub", val: String(S.github || "").replace(/^https?:\/\//, "") },
        { k: "linkedin", icon: "fa-brands fa-linkedin-in", title: "LinkedIn", val: String(S.linkedin || "").replace(/^https?:\/\/(www\.)?/, "") },
        { k: "telegram", icon: "fa-brands fa-telegram", title: "Telegram", val: String(S.telegram || "").replace(/^https?:\/\//, "") },
      ];
      return rows.map(function (r) {
        var href = resolveHref(r.k), ext = /^https?:/.test(href) ? EXT : "";
        return '<div class="card flex items-center gap-4 p-4 reveal"><span class="ex-icon !w-11 !h-11"><i class="' + r.icon + '" aria-hidden="true"></i></span>' +
          '<a class="min-w-0 flex-1 after:absolute after:inset-0" href="' + esc(href) + '"' + ext + ">" +
          '<span class="block text-sm font-bold">' + r.title + '</span><span class="block text-sm text-muted truncate ltr" dir="ltr">' + esc(r.val) + "</span></a>" +
          (r.copy ? '<button type="button" class="icon-btn border border-line !relative z-10" data-copy="email" aria-label="کپی ایمیل" title="کپی ایمیل"><i class="fa-regular fa-copy" aria-hidden="true"></i></button>' : "") +
          "</div>";
      }).join("");
    },
  };

  function renderAll(root) {
    (root || document).querySelectorAll("[data-render]").forEach(function (el) {
      var fn = RENDER[el.getAttribute("data-render")];
      if (fn) el.innerHTML = fn();
    });
  }

  /* ------------------------------------------------------------------ */
  /* Scroll reveal                                                       */
  /* ------------------------------------------------------------------ */
  var io = "IntersectionObserver" in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var el = e.target;
          io.unobserve(el);
          el.classList.add("is-visible");
          // drop the helper classes afterwards so hover transforms on cards work normally
          setTimeout(function () { el.classList.remove("reveal", "is-visible"); el.style.removeProperty("--d"); }, 1200);
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" })
    : null;

  function reveal(root) {
    (root || document).querySelectorAll(".reveal:not([data-r])").forEach(function (el) {
      el.setAttribute("data-r", "");
      if (!io) { el.classList.add("is-visible"); return; }
      var idx = el.parentNode ? Array.prototype.indexOf.call(el.parentNode.children, el) : 0;
      el.style.setProperty("--d", (idx % 6) * 70 + "ms");
      io.observe(el);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Mount                                                               */
  /* ------------------------------------------------------------------ */
  var h = document.getElementById("header-mount");
  if (h) h.outerHTML = headerHTML();
  var f = document.getElementById("footer-mount");
  if (f) f.outerHTML = footerHTML();
  renderAll();

  window.UI = {
    esc: esc, inline: inline, faNum: faNum, fmtDate: fmtDate, byId: byId, resolveHref: resolveHref,
    artSvg: artSvg, smooth: smooth, rng: rng, hash: hash, walk: walk, xs: xs,
    projectCard: projectCard, articleCard: articleCard, articleHref: articleHref,
    reveal: reveal, renderAll: renderAll,
  };
})();
