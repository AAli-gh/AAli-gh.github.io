## 2026-11-05 - Search input clear button and native WebKit cancellation collision in RTL
**Learning:** Adding a custom clear button to `<input type="search">` in RTL interfaces requires explicitly hiding `::-webkit-search-cancel-button`. Otherwise, Chromium browsers display a native cancel button on the opposite end or overlapping the custom clear icon. Furthermore, using RTL logical utilities (`pe-10`, `end-3`) ensures the custom button sits cleanly without overlapping input text.
**Action:** When adding custom clear actions to search inputs in RTL layouts, always suppress `::-webkit-search-cancel-button` via CSS and use logical padding (`pe-*`) and positioning (`end-*`).

## 2026-11-03 - Localized inline feedback on copy buttons
**Learning:** In RTL websites with bottom toasts, users' visual focus stays on the clicked button or icon rather than glancing at the bottom screen toast. Providing immediate inline visual (checkmark icon + label change) and accessibility (`aria-label`) feedback directly on the clicked trigger button removes ambiguity and reassures the user instantly.
**Action:** Always combine global toasts with temporary localized button state feedback (icon swap + aria update for ~2s) on interactive copy/action buttons.
