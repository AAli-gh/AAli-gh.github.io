/* Light / Dark theme. The initial class is applied by a tiny inline script in <head> to avoid flashing. */
(function () {
  "use strict";
  var root = document.documentElement;

  function isDark() { return root.classList.contains("dark"); }

  function sync() {
    var dark = isDark();
    var label = dark ? "تغییر به تم روشن" : "تغییر به تم تاریک";
    document.querySelectorAll("[data-theme-toggle]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(dark));
      b.setAttribute("aria-label", label);
      b.setAttribute("title", label);
    });
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#080b12" : "#f7f8fb");
  }

  function set(theme) {
    root.classList.toggle("dark", theme === "dark");
    try { localStorage.setItem("theme", theme); } catch (e) { /* storage unavailable */ }
    sync();
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-theme-toggle]")) set(isDark() ? "light" : "dark");
  });

  sync();
})();
