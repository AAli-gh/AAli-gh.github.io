## 2026-10-23 - Dynamic ARIA Label Sync on Theme Toggle & Card Links
**Learning:** Updating `title` alone on theme toggle icon buttons does not reliably update screen reader context; dynamically updating `aria-label` alongside `aria-pressed` ensures accurate screen reader state announcements.
**Action:** Always sync `aria-label` with state whenever updating button `title` or `aria-pressed` dynamically.
