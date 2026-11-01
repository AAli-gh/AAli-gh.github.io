# Palette's Journal

## 2026-11-01 - Clipboard Action In-Place Feedback
**Learning:** Toast notifications can be missed or appear distant from the user's focus point when interacting with inline actions like copy buttons. Providing in-place visual feedback (transforming the button icon to a checkmark, updating button text/labels, and maintaining accessibility labels) gives immediate confirmation exactly where the user is looking.
**Action:** When adding copy or trigger actions, pair global toasts with localized, temporary in-place button confirmation that restores its original label and ARIA attributes cleanly.
