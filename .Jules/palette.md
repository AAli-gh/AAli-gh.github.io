## 2026-11-03 - Localized inline feedback on copy buttons
**Learning:** In RTL websites with bottom toasts, users' visual focus stays on the clicked button or icon rather than glancing at the bottom screen toast. Providing immediate inline visual (checkmark icon + label change) and accessibility (`aria-label`) feedback directly on the clicked trigger button removes ambiguity and reassures the user instantly.
**Action:** Always combine global toasts with temporary localized button state feedback (icon swap + aria update for ~2s) on interactive copy/action buttons.
