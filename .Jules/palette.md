# Palette UX Journal

## 2026-03-30 - Live character counters in form inputs
**Learning:** Adding `aria-live="polite"` directly to character count elements that update on every keystroke causes screen readers to announce the updated character count on every keystroke, disrupting typing.
**Action:** Do not place `aria-live="polite"` on character count spans updated per keypress; instead use explicit threshold announcements or standard `maxlength` attributes with helper hints.
