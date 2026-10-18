# Palette's Journal

## 2025-05-18 - Required Form Field Accessibility
**Learning:** Form fields without visual indicators (`*`) and `required`/`aria-required="true"` attributes rely solely on introductory text, which can lead to user confusion and poor screen reader announcements.
**Action:** Always include both visual required indicators (`<span class="text-red-500" aria-hidden="true">*</span>`) and `required` / `aria-required="true"` attributes on mandatory form inputs.
