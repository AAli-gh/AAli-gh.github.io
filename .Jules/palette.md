# Palette's Journal - Critical Learnings Only

## 2026-11-02 - Inline Micro-Feedback on Copy Buttons
**Learning:** In RTL and responsive web apps, floating toasts at viewport edges (bottom-center) can be easily missed on desktop wide viewports or when mobile soft keyboards/touch positions draw focus. Providing localized inline feedback directly on the button (checkmark icon + temporary label swap + updating aria-label) guarantees immediate tactile confirmation for both visual and screen reader users without disrupting layout.
**Action:** When adding copy-to-clipboard interactions, pair peripheral toasts with localized in-button feedback and temporary ARIA status updates.
