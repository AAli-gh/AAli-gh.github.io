# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-05-18 - Inline Copy Feedback on Action Buttons
**Learning:** Toast notifications provide helpful global status announcements for screen readers and general awareness, but inline feedback directly on the clicked copy button (such as transitioning the icon to a checkmark) provides immediate spatial confirmation for the user right where their gaze and pointer are focused.
**Action:** Always complement floating toast messages with temporary inline icon/state transitions on the triggering action element, and clean up timeout handles so rapid successive clicks do not leave stale states.
