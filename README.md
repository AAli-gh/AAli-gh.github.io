# Portfolio — AI Engineer & Python Developer

وب‌سایت پورتفولیوی شخصی: فارسی، RTL، Light/Dark، کاملاً **Static** (HTML5 + Tailwind CSS + Vanilla JS) و آمادهٔ استقرار روی GitHub Pages.

## ساختار

```
├── index.html · about.html · projects.html · 
├── project.html           جزئیات عمومی پروژه‌ها (?id=)
├── articles.html · article.html · resume.html · contact.html
├── css/style.css            توکن‌های طراحی (Light/Dark) و کامپوننت‌ها
├── js/
│   ├── config.js            ★ همهٔ اطلاعات شخصی، پروژه‌ها، مقالات و رزومه
│   ├── components.js        Header / Footer / Cards / تصاویر تولیدی
│   ├── theme.js             Light / Dark + LocalStorage
│   ├── main.js              ناوبری موبایل، فرم، کپی، نمودار Hero، …
│   ├── projects.js          فیلتر و نمایش پروژه‌ها
│   ├── articles.js          فیلتر مقالات و صفحهٔ تک‌مقاله
│   ├── resume.js            پر کردن صفحهٔ رزومه
└── assets/{images,icons,fonts}
```

## شخصی‌سازی

فقط **`js/config.js`** را ویرایش کنید:

| بخش | توضیح |
| --- | --- |
| `name`, `role`, `tagline` | نام، عنوان و معرفی Hero |
| `email`, `github`, `linkedin`, `telegram` | لینک‌های ارتباطی (فعلاً Placeholder) |
| `siteUrl` | آدرس نهایی سایت (برای Canonical مقالات) |
| `projects` | پروژه‌ها؛ `cover` / `images` / `highlights` / `github` / `demo` — لینک خالی = دکمه نمایش داده نمی‌شود؛ جزئیات در `project.html?id=` |
| `articles` | مقالات؛ هر مقاله با `article.html?id=<id>` باز می‌شود |
| `skills`, `timeline`, `resume` | مهارت‌ها، مسیر حرفه‌ای و رزومه |
| `resumePdf` | مثلاً `"assets/resume.pdf"`؛ اگر خالی باشد دکمهٔ رزومه همان صفحه را چاپ/ذخیره به PDF می‌کند |
| `formEndpoint` | آدرس سرویس فرم (Formspree، Getform، Web3Forms، …) |

بعد از تعیین آدرس نهایی، در فایل‌های HTML عبارت `https://your-username.github.io/portfolio/` (تگ‌های `canonical` و `og:*`) را با آدرس واقعی جایگزین کنید. همچنین نام «علی» در `<title>` صفحات ثابت است و باید به‌دست تغییر کند.

### اتصال فرم تماس
در حالت پیش‌فرض ارسال فرم شبیه‌سازی می‌شود. برای اتصال واقعی، `formEndpoint` را مقداردهی کنید؛ فرم با `fetch` و `FormData` به آن `POST` می‌شود.

## اجرای محلی

سایت Build ندارد؛ هر سرور استاتیکی کافی است:

```bash
python -m http.server 8080
```

سپس `http://localhost:8080` را باز کنید. (باز کردن مستقیم فایل با `file://` نیز بیشتر قابلیت‌ها را نشان می‌دهد، اما کپی در کلیپ‌بورد و برخی APIها به `localhost` یا HTTPS نیاز دارند.)

## استقرار روی GitHub Pages

1. یک مخزن جدید بسازید و محتوای همین پوشه را در ریشهٔ آن Push کنید.
2. در GitHub: **Settings → Pages → Build and deployment**
   Source: `Deploy from a branch` · Branch: `main` · Folder: `/ (root)`
3. پس از چند دقیقه سایت روی `https://<username>.github.io/<repo>/` در دسترس است.

همهٔ مسیرها نسبی هستند، بنابراین هم روی آدرس زیرمسیر (`/<repo>/`) و هم روی دامنهٔ اختصاصی کار می‌کنند. فایل `.nojekyll` برای غیرفعال‌کردن پردازش Jekyll وجود دارد.

## نکات فنی

- **Tailwind** با CLI (نسخهٔ ۳٫۴٫۱۶) ساخته می‌شود و خروجی `css/tailwind.css` در مخزن Commit شده است؛ بنابراین GitHub Pages به هیچ Build نیاز ندارد. فقط وقتی کلاس‌های Tailwind را در HTML یا JS تغییر دادید، دوباره بسازید:

  ```bash
  npm install      # فقط بار اول
  npm run build    # خروجی کوچک‌شده در css/tailwind.css
  npm run watch    # حین توسعه
  ```
  تنظیمات در `tailwind.config.js` و ورودی در `src/input.css` است.
- **فونت**: Vazirmatn و JetBrains Mono از Google Fonts؛ برای میزبانی خودتان فایل‌ها را در `assets/fonts` بگذارید و `@font-face` اضافه کنید.
- **تصاویر پروژه/مقاله** به‌صورت SVG تولیدی ساخته می‌شوند (بدون فایل تصویری)؛ می‌توانید در `config.js` به‌جای آن تصویر واقعی قرار دهید.
- داده‌های نمودار Hero و معیارهای کنار آن **نمایشی** هستند.
