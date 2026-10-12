/* Resume page: fills each [data-resume] list from SITE.resume / SITE.skills / SITE.projects. */
(function () {
  "use strict";
  var S = window.SITE || {}, UI = window.UI, R = S.resume || {};
  var root = document.querySelector("[data-resume-root]");
  if (!root) return;

  function entry(e) {
    return '<li class="tl-item"><div class="flex flex-wrap items-baseline justify-between gap-x-4">' +
      '<h3 class="font-bold">' + UI.esc(e.title) + '</h3><span class="mono text-xs text-accent">' + UI.esc(e.period || "") + "</span></div>" +
      '<p class="text-sm text-muted">' + UI.esc(e.place || "") + "</p>" +
      (e.note ? '<p class="mt-1 text-sm leading-7">' + UI.esc(e.note) + "</p>" : "") +
      (e.points ? '<ul class="mt-2 grid gap-1 text-sm leading-7 list-disc ps-5 marker:text-accent">' +
        e.points.map(function (p) { return "<li>" + UI.esc(p) + "</li>"; }).join("") + "</ul>" : "") + "</li>";
  }
  function list(name, html) {
    var el = root.querySelector('[data-resume="' + name + '"]');
    if (el) el.innerHTML = html;
  }

  list("summary", UI.esc(R.summary || ""));
  list("education", (R.education || []).map(entry).join(""));
  list("experience", (R.experience || []).map(entry).join(""));
  list("certificates", (R.certificates || []).map(entry).join(""));
  list("research", (R.research || []).map(entry).join(""));

  list("skills", (S.skills || []).map(function (g) {
    return '<div><h3 class="text-sm font-bold ltr" dir="ltr">' + UI.esc(g.group) + '</h3><ul class="mt-2 flex flex-wrap gap-1.5">' +
      g.items.map(function (i) { return '<li class="chip">' + UI.esc(i.name) + "</li>"; }).join("") + "</ul></div>";
  }).join(""));

  list("projects", (S.projects || []).map(function (p) {
    var href = p.page || p.github || "";
    return '<li class="tl-item"><div class="flex flex-wrap items-baseline justify-between gap-x-4">' +
      '<h3 class="font-bold" dir="auto">' + (href ? '<a class="hover:text-accent transition-colors" href="' + UI.esc(href) + '"' + (p.page ? "" : ' target="_blank" rel="noopener noreferrer"') + ">" + UI.esc(p.title) + "</a>" : UI.esc(p.title)) + "</h3>" +
      '<span class="text-xs text-muted">' + UI.esc((p.status || {}).label || "") + "</span></div>" +
      '<p class="text-sm leading-7">' + UI.esc(p.summary) + "</p>" +
      '<ul class="mt-2 flex flex-wrap gap-1.5">' + (p.stack || []).map(function (t) { return '<li class="chip">' + UI.esc(t) + "</li>"; }).join("") + "</ul></li>";
  }).join(""));

  if (UI.reveal) UI.reveal();
})();
