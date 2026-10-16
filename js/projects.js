/* Projects: home "featured" strip, filterable grid, and "more projects" on the detail page. */
(function () {
  "use strict";
  var S = window.SITE || {}, UI = window.UI;
  var all = S.projects || [];
  var $ = function (s) { return document.querySelector(s); };

  var featured = $("#featured-projects");
  if (featured) featured.innerHTML = all.slice(0, 3).map(UI.projectCard).join("");

  var grid = $("#projects-grid");
  if (grid) {
    var bar = $("#project-filters"), count = $("#projects-count"), empty = $("#projects-empty");
    var cats = ["همه"].concat(S.projectCategories || []);
    var current = "همه";

    bar.innerHTML = cats.map(function (c) {
      return '<button type="button" class="filter" data-cat="' + UI.esc(c) + '" aria-pressed="' + (c === current) + '">' + UI.esc(c) + "</button>";
    }).join("");

    function render() {
      var list = all.filter(function (p) { return current === "همه" || (p.categories || []).indexOf(current) > -1; });
      grid.innerHTML = list.map(function (p) { return UI.projectCard(p, all.indexOf(p)); }).join("");
      grid.querySelectorAll(".reveal").forEach(function (el) { el.classList.remove("reveal"); el.classList.add("fade-in"); });
      count.textContent = UI.faNum(list.length) + " پروژه";
      empty.hidden = list.length > 0;
    }
    bar.addEventListener("click", function (e) {
      var b = e.target.closest("[data-cat]");
      if (!b) return;
      current = b.getAttribute("data-cat");
      bar.querySelectorAll(".filter").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      render();
    });
    render();
  }

  var more = $("#more-projects");
  if (more) {
    var here = more.getAttribute("data-exclude");
    more.innerHTML = all.filter(function (p) { return p.id !== here; }).slice(0, 2).map(function (p) {
      return UI.projectCard(p, all.indexOf(p));
    }).join("");
  }

  /* ----- Generic detail page: project.html?id=<id> ----- */
  var root = $("#project-root");
  if (root) {
    var pid = new URLSearchParams(location.search).get("id");
    var p = UI.byId(all, pid);
    if (!p) {
      document.title = "پروژه پیدا نشد | " + S.name;
      root.innerHTML = '<div class="container-x py-24 text-center"><p class="mono text-accent">404</p><h1 class="h1 mt-3">این پروژه پیدا نشد</h1>' +
        '<a class="btn btn-primary mt-8" href="projects.html">همه پروژه‌ها</a></div>';
    } else {
      document.title = p.title + " | " + S.name;
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", p.summary);
      var canon = document.querySelector('link[rel="canonical"]');
      if (canon) canon.setAttribute("href", S.siteUrl + "project.html?id=" + encodeURIComponent(p.id));
      var links = "";
      if (p.demo) links += '<a class="btn btn-primary" href="' + UI.esc(p.demo) + '"' + (/^https?:/.test(p.demo) ? ' target="_blank" rel="noopener noreferrer"' : "") + '><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> مشاهده دمو</a>';
      if (p.github && !p.private) links += '<a class="btn btn-ghost" href="' + UI.esc(p.github) + '" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i> GitHub</a>';
      if (p.github && p.private) links += '<span class="btn btn-ghost is-disabled" aria-disabled="true"><i class="fa-solid fa-lock" aria-hidden="true"></i> مخزن خصوصی</span>';
      var hero = p.cover
        ? '<img src="' + UI.esc(p.cover) + '" alt="' + UI.esc(p.title) + '" class="block w-full h-auto">'
        : UI.artSvg(p.art, p.id);
      var gallery = (p.images || []).length
        ? '<section class="mt-14" aria-labelledby="gal"><h2 id="gal" class="h2">گالری</h2><div class="mt-6 grid gap-4 grid-cols-2 md:grid-cols-3">' +
          p.images.map(function (im, i) {
            return '<button type="button" class="card card-static text-start cursor-zoom-in" data-zoom="' + i + '" aria-label="بزرگ‌نمایی: ' + UI.esc(im.alt) + '">' +
              '<img src="' + UI.esc(im.src) + '" alt="' + UI.esc(im.alt) + '" loading="lazy" decoding="async" class="block w-full object-cover object-top" style="aspect-ratio:4/3"></button>';
          }).join("") + "</div></section>"
        : "";
      root.innerHTML =
        '<header class="page-hero"><div class="container-x">' +
        '<nav class="crumbs" aria-label="مسیر"><a href="index.html">خانه</a><span aria-hidden="true">/</span><a href="projects.html">پروژه‌ها</a><span aria-hidden="true">/</span><span aria-current="page" dir="auto">' + UI.esc(p.title) + "</span></nav>" +
        '<div class="mt-6 flex flex-wrap items-center gap-3"><span class="status status--' + UI.esc((p.status || {}).type || "draft") + '">' + UI.esc((p.status || {}).label || "") + "</span>" +
        (p.categories || []).map(function (c) { return '<span class="tag">' + UI.esc(c) + "</span>"; }).join("") + "</div>" +
        '<h1 class="h1 mt-3" dir="auto">' + UI.esc(p.title) + '</h1><p class="lead mt-4">' + UI.esc(p.summary) + "</p>" +
        (links ? '<div class="mt-7 flex flex-wrap gap-3">' + links + "</div>" : "") + "</div></header>" +
        '<div class="container-x pb-20 grid gap-10 lg:grid-cols-12"><div class="lg:col-span-8">' +
        '<div class="card card-static art !rounded-2xl">' + hero + "</div>" +
        ((p.description || []).length ? '<div class="prose-fa mt-10 text-muted">' + p.description.map(function (t) { return "<p>" + UI.esc(t) + "</p>"; }).join("") + "</div>" : "") +
        ((p.highlights || []).length ? '<h2 class="h2 mt-12">ویژگی‌های کلیدی</h2><ul class="prose-fa mt-4">' + p.highlights.map(function (t) { return "<li>" + UI.esc(t) + "</li>"; }).join("") + "</ul>" : "") +
        gallery + '</div><aside class="lg:col-span-4"><div class="card card-static p-5 lg:sticky lg:top-24"><h2 class="font-bold">تکنولوژی‌ها</h2>' +
        '<ul class="mt-4 flex flex-wrap gap-1.5">' + (p.stack || []).map(function (t) { return '<li class="chip">' + UI.esc(t) + "</li>"; }).join("") + "</ul></div></aside></div>" +
        '<dialog id="lightbox" class="dialog" style="max-width:56rem"><div class="relative"><button type="button" class="icon-btn absolute top-2 end-2 z-10 bg-surface border border-line" data-close aria-label="بستن" title="بستن"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>' +
        '<img id="lightbox-img" alt="" class="block w-full h-auto object-contain" style="max-height:85vh"></div></dialog>';

      var lb = document.getElementById("lightbox"), lbImg = document.getElementById("lightbox-img");
      root.addEventListener("click", function (e) {
        var z = e.target.closest("[data-zoom]");
        if (z && lb.showModal) {
          var im = p.images[Number(z.getAttribute("data-zoom"))];
          lbImg.src = im.src; lbImg.alt = im.alt; lb.showModal();
        }
      });
      lb.addEventListener("click", function (e) { if (e.target === lb || e.target.closest("[data-close]")) lb.close(); });
    }
  }

  if (UI.reveal) UI.reveal();
})();
