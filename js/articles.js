/* Articles: home "latest" strip, filter + search listing, and the single-article renderer. */
(function () {
  "use strict";
  var S = window.SITE || {}, UI = window.UI;
  var all = (S.articles || []).slice().sort(function (a, b) { return b.date.localeCompare(a.date); });
  var $ = function (s) { return document.querySelector(s); };

  /* ----- Home: latest three ----- */
  var latest = $("#latest-articles");
  if (latest) latest.innerHTML = all.slice(0, 3).map(UI.articleCard).join("");

  /* ----- Listing page ----- */
  var grid = $("#articles-grid");
  if (grid) {
    var bar = $("#article-filters"), search = $("#article-search"), count = $("#articles-count"), empty = $("#articles-empty");
    var cats = ["همه"].concat(S.articleCategories || []);
    var current = "همه", q = "";

    bar.innerHTML = cats.map(function (c) {
      return '<button type="button" class="filter" data-cat="' + UI.esc(c) + '" aria-pressed="' + (c === current) + '"' +
        (c === "همه" ? "" : ' dir="auto"') + ">" + UI.esc(c) + "</button>";
    }).join("");

    var render = function () {
      var term = q.trim().toLowerCase();
      var list = all.filter(function (a) {
        var okCat = current === "همه" || a.category === current;
        var okQ = !term || (a.title + " " + a.excerpt + " " + a.category).toLowerCase().indexOf(term) > -1;
        return okCat && okQ;
      });
      grid.innerHTML = list.map(UI.articleCard).join("");
      grid.querySelectorAll(".reveal").forEach(function (el) { el.classList.remove("reveal"); el.classList.add("fade-in"); });
      count.textContent = UI.faNum(list.length) + " مقاله";
      empty.hidden = list.length > 0;
    };

    bar.addEventListener("click", function (e) {
      var b = e.target.closest("[data-cat]");
      if (!b) return;
      current = b.getAttribute("data-cat");
      bar.querySelectorAll(".filter").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      render();
    });
    var t;
    search.addEventListener("input", function () { clearTimeout(t); t = setTimeout(function () { q = search.value; render(); }, 120); });
    search.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && search.value) {
        search.value = "";
        q = "";
        render();
      }
    });

    // support deep links like articles.html?cat=Python
    var preset = new URLSearchParams(location.search).get("cat");
    if (preset && cats.indexOf(preset) > -1) {
      current = preset;
      bar.querySelectorAll(".filter").forEach(function (x) { x.setAttribute("aria-pressed", String(x.getAttribute("data-cat") === preset)); });
    }
    render();
    if (new URLSearchParams(location.search).get("focus") === "search") {
      search.scrollIntoView({ behavior: "smooth", block: "center" });
      search.focus();
    }
  }

  /* ----- Single article page ----- */
  var root = $("#article-root");
  if (root) {
    var id = new URLSearchParams(location.search).get("id");
    var a = UI.byId(all, id);

    if (!a) {
      document.title = "مقاله پیدا نشد | " + S.name;
      root.innerHTML =
        '<div class="container-x py-24 text-center"><p class="mono text-accent">404</p>' +
        '<h1 class="h1 mt-3">این مقاله پیدا نشد</h1><p class="sub mx-auto mt-3">ممکن است لینک اشتباه باشد یا مقاله حذف شده باشد.</p>' +
        '<a class="btn btn-primary mt-8" href="articles.html">بازگشت به مقالات <i class="fa-solid fa-arrow-left" aria-hidden="true"></i></a></div>';
    } else {
      document.title = a.title + " | " + S.name;
      var setMeta = function (sel, val) { var m = document.querySelector(sel); if (m) m.setAttribute("content", val); };
      setMeta('meta[name="description"]', a.excerpt);
      setMeta('meta[property="og:title"]', a.title + " | " + S.name);
      setMeta('meta[property="og:description"]', a.excerpt);
      var canon = document.querySelector('link[rel="canonical"]');
      if (canon) canon.setAttribute("href", S.siteUrl + "article.html?id=" + encodeURIComponent(a.id));
      setMeta('meta[property="og:url"]', S.siteUrl + "article.html?id=" + encodeURIComponent(a.id));

      var body = (a.body || []).map(function (b) {
        if (b.type === "h2") return "<h2>" + UI.esc(b.text) + "</h2>";
        if (b.type === "ul") return "<ul>" + b.items.map(function (i) { return "<li>" + UI.inline(i) + "</li>"; }).join("") + "</ul>";
        if (b.type === "quote") return "<blockquote>" + UI.inline(b.text) + "</blockquote>";
        if (b.type === "code") {
          return '<div class="codebox"><div class="codebox-bar"><span class="mono">python</span>' +
            '<button type="button" class="btn btn-ghost btn-sm" data-copy-code><i class="fa-regular fa-copy" aria-hidden="true"></i> کپی</button></div>' +
            "<pre><code>" + UI.esc(b.text) + "</code></pre></div>";
        }
        return "<p>" + UI.inline(b.text) + "</p>";
      }).join("");

      var related = all.filter(function (x) { return x.id !== a.id; })
        .sort(function (x, y) { return (y.category === a.category) - (x.category === a.category); })
        .slice(0, 2);

      root.innerHTML =
        '<header class="page-hero"><div class="container-x max-w-3xl">' +
        '<nav class="crumbs" aria-label="مسیر"><a href="index.html">خانه</a><span aria-hidden="true">/</span><a href="articles.html">مقالات</a><span aria-hidden="true">/</span>' +
        '<a href="articles.html?cat=' + encodeURIComponent(a.category) + '" class="ltr">' + UI.esc(a.category) + "</a></nav>" +
        '<h1 class="h1 mt-5">' + UI.esc(a.title) + "</h1>" +
        '<p class="lead mt-4">' + UI.esc(a.excerpt) + "</p>" +
        '<div class="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">' +
        '<span class="tag">' + UI.esc(a.category) + "</span>" +
        '<span><i class="fa-regular fa-calendar me-1.5" aria-hidden="true"></i>' + UI.fmtDate(a.date) + "</span>" +
        '<span><i class="fa-regular fa-clock me-1.5" aria-hidden="true"></i>' + UI.faNum(a.readTime) + " دقیقه مطالعه</span>" +
        '<span><i class="fa-regular fa-user me-1.5" aria-hidden="true"></i>' + UI.esc(S.name) + "</span></div></div></header>" +
        '<div class="container-x max-w-3xl"><div class="card card-static art !rounded-2xl">' + UI.artSvg(a.art, a.id) + "</div>" +
        '<article class="prose-fa mt-10">' + body + "</article>" +
        '<div class="mt-12 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">' +
        '<a class="btn btn-ghost" href="articles.html"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i> همه مقالات</a>' +
        '<button type="button" class="btn btn-ghost" data-copy="url"><i class="fa-solid fa-link" aria-hidden="true"></i> کپی لینک مقاله</button></div></div>' +
        '<section class="section"><div class="container-x"><h2 class="h2 mb-8">مقالات مرتبط</h2>' +
        '<div class="grid gap-6 md:grid-cols-2">' + related.map(UI.articleCard).join("") + "</div></div></section>";

      var bar = $("#read-progress");
      if (bar) {
        var upd = function () {
          var el = document.documentElement, max = el.scrollHeight - el.clientHeight;
          bar.style.transform = "scaleX(" + (max > 0 ? Math.min(1, el.scrollTop / max) : 0) + ")";
        };
        window.addEventListener("scroll", upd, { passive: true });
        upd();
      }
    }
  }

  if (UI.reveal) UI.reveal();
})();
