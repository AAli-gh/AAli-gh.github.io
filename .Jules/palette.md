## 2025-05-18 - Dynamic Accessible Names on Theme Toggle Buttons
**Learning:** In W3C Accessible Name Computation, an explicit `aria-label` attribute on a button takes precedence over its `title` attribute. When dynamic `title` updates are used for theme toggle buttons, `aria-label` must also be dynamically updated to ensure screen readers announce the state change accurately.
**Action:** Always update `aria-label` along with `title` and `aria-pressed` in UI sync functions.
