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

  if (UI.reveal) UI.reveal();
})();
