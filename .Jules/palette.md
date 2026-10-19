# Palette's UX & Accessibility Journal

## 2026-03-30 - Inline Visual Feedback on Clipboard Copy Actions
**Learning:** Toast notifications alone can be missed by users who are focused on the button they clicked (e.g. copy code block or copy email). Providing inline visual feedback (swapping the icon to a checkmark and updating text/aria-label) directly on the clicked element creates immediate micro-reassurance.
**Action:** Whenever implementing a copy-to-clipboard action, pair background toast messages with a temporary (1.5-2s) inline checkmark state and accessible status update on the trigger button.
