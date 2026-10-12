/**
 * ============================================================
 *  تنظیمات سایت — تنها فایلی که برای شخصی‌سازی نیاز دارید.
 *  Site configuration — edit this file to personalise the site.
 * ============================================================
 *  همهٔ مقدارهای زیر Placeholder هستند؛ آن‌ها را با اطلاعات واقعی خودتان جایگزین کنید.
 */
window.SITE = {
  /* ---------- هویت ---------- */
  name: "علی",                                   // نام نمایشی (فارسی)
  nameEn: "Ali",                                 // نام لاتین
  role: "AI Engineer & Python Developer",
  tagline:
    "در زمینه هوش مصنوعی، یادگیری ماشین، Python و توسعه سیستم‌های هوشمند فعالیت می‌کنم و روی ساخت پروژه‌های واقعی و قابل استفاده تمرکز دارم.",
  location: "ایران",
  available: true,                               // نمایش نشان «آماده همکاری»

  /* ---------- لینک‌ها (Placeholder — جایگزین کنید) ---------- */
  email: "your-email@example.com",
  github: "https://github.com/AAli-gh",
  linkedin: "https://www.linkedin.com/in/your-username",
  telegram: "https://t.me/your-username",

  /* ---------- دیپلوی ---------- */
  siteUrl: "https://aali-gh.github.io/",
  resumePdf: "",            // مثال: "assets/resume.pdf" — اگر خالی باشد، دکمه همین صفحه را به‌صورت PDF چاپ می‌کند
  formEndpoint: "",         // مثال: "https://formspree.io/f/xxxxxxx" — اگر خالی باشد ارسال فرم شبیه‌سازی می‌شود

  /* ---------- درباره من ---------- */
  about: {
    lead:
      "من یک مهندس هوش مصنوعی و توسعه‌دهنده پایتون هستم؛ مسیر داده را از جمع‌آوری و پاک‌سازی تا مدل‌سازی و استقرار دنبال می‌کنم.",
    paragraphs: [
      "علاقه من به هوش مصنوعی از کنجکاوی دربارهٔ این‌که چطور می‌توان از داده‌های خام، تصمیم‌های قابل اتکا ساخت شروع شد. امروز بیشتر وقتم صرف طراحی پایپ‌لاین‌های داده، مهندسی ویژگی و ساخت مدل‌هایی می‌شود که فقط در نوت‌بوک نمی‌مانند و به محصول تبدیل می‌شوند.",
      "معتقدم یک مدل خوب بدون یک سیستم خوب ارزشی ندارد. به همین دلیل علاوه بر یادگیری ماشین، روی بک‌اند، API و کیفیت کد هم وقت می‌گذارم تا نتیجهٔ کار قابل نگه‌داری، تست‌پذیر و قابل استفادهٔ دیگران باشد.",
    ],
    facts: [
      { label: "تمرکز", value: "ML · Backend" },
      { label: "زبان اصلی", value: "Python" },
      { label: "موقعیت", value: "ایران" },
      { label: "زبان‌ها", value: "فارسی · English" },
    ],
  },

  /* ---------- حوزه‌های تخصصی (صفحه اصلی) ---------- */
  expertise: [
    {
      icon: "fa-solid fa-brain",
      title: "هوش مصنوعی",
      en: "Artificial Intelligence",
      desc: "طراحی، آموزش و ارزیابی مدل‌های یادگیری ماشین و یادگیری عمیق و تبدیل آن‌ها به سیستم‌های هوشمند.",
      tags: ["Machine Learning", "Deep Learning", "AI Systems"],
    },
    {
      icon: "fa-brands fa-python",
      title: "توسعه پایتون",
      en: "Python Development",
      desc: "نوشتن کد تمیز، قابل تست و مقیاس‌پذیر برای سرویس‌ها، ابزارها و خودکارسازی.",
      tags: ["Python", "Django", "REST API"],
    },
    {
      icon: "fa-solid fa-chart-column",
      title: "داده",
      en: "Data",
      desc: "پاک‌سازی، تحلیل و مهندسی ویژگی روی داده‌های واقعی؛ از CSV تا پایگاه‌داده.",
      tags: ["Pandas", "NumPy", "Scikit-learn", "Data Processing"],
    },
    {
      icon: "fa-solid fa-server",
      title: "بک‌اند",
      en: "Backend",
      desc: "ساخت API و سرویس‌های پایدار که مدل‌ها و داده‌ها را به محصول وصل می‌کنند.",
      tags: ["Django", "REST API", "PostgreSQL"],
    },
  ],

  /* ---------- مهارت‌ها ---------- */
  skills: [
    {
      group: "AI / ML",
      icon: "fa-solid fa-brain",
      items: [
        { name: "Machine Learning", icon: "fa-solid fa-diagram-project", hint: "مدل‌های کلاسیک و ارزیابی" },
        { name: "Deep Learning", icon: "fa-solid fa-network-wired", hint: "شبکه‌های عصبی" },
        { name: "Scikit-learn", icon: "fa-solid fa-flask", hint: "Pipeline و Model Selection" },
        { name: "Feature Engineering", icon: "fa-solid fa-sliders", hint: "ساخت ویژگی از داده خام" },
      ],
    },
    {
      group: "Programming",
      icon: "fa-solid fa-code",
      items: [
        { name: "Python", icon: "fa-brands fa-python", hint: "زبان اصلی کار روزمره" },
        { name: "SQL", icon: "fa-solid fa-database", hint: "کوئری و تحلیل" },
        { name: "JavaScript", icon: "fa-brands fa-js", hint: "فرانت‌اند سبک و Vanilla" },
      ],
    },
    {
      group: "Backend",
      icon: "fa-solid fa-server",
      items: [
        { name: "Django", icon: "fa-solid fa-cubes", hint: "ساخت وب‌اپ و ORM" },
        { name: "Django REST Framework", icon: "fa-solid fa-plug", hint: "Serializer و ViewSet" },
        { name: "REST API", icon: "fa-solid fa-right-left", hint: "طراحی و مستندسازی API" },
      ],
    },
    {
      group: "Data",
      icon: "fa-solid fa-chart-column",
      items: [
        { name: "Pandas", icon: "fa-solid fa-table", hint: "پردازش داده جدولی" },
        { name: "NumPy", icon: "fa-solid fa-calculator", hint: "محاسبات برداری" },
        { name: "PostgreSQL", icon: "fa-solid fa-database", hint: "مدل‌سازی و ایندکس" },
      ],
    },
    {
      group: "Tools",
      icon: "fa-solid fa-screwdriver-wrench",
      items: [
        { name: "Git", icon: "fa-brands fa-git-alt", hint: "کنترل نسخه و Branching" },
        { name: "GitHub", icon: "fa-brands fa-github", hint: "همکاری و CI" },
        { name: "Docker", icon: "fa-brands fa-docker", hint: "محیط قابل تکرار" },
      ],
    },
  ],

  /* ---------- مسیر یادگیری / تحصیلی (نمونه — ویرایش شود) ---------- */
  timeline: [
    {
      period: "امروز",
      title: "مهندس هوش مصنوعی / توسعه‌دهنده پایتون",
      place: "پروژه‌های شخصی و فریلنس",
      desc: "ساخت سیستم‌های ML، پایپ‌لاین داده و API با تمرکز بر پروژه‌های قابل استفاده در دنیای واقعی.",
    },
    {
      period: "۱۴۰۳ — ۱۴۰۴",
      title: "تمرکز عمیق روی یادگیری ماشین",
      place: "خودآموزی و پروژه‌محور",
      desc: "مهندسی ویژگی، ارزیابی مدل، سری زمانی و ساخت اولین پروژه‌های پیش‌بینی.",
    },
    {
      period: "۱۴۰۱ — ۱۴۰۳",
      title: "توسعه بک‌اند با Django",
      place: "پروژه‌های عملی",
      desc: "یادگیری Django، REST Framework و PostgreSQL و ساخت چند سرویس کامل.",
    },
    {
      period: "۱۳۹۹ — ۱۴۰۳",
      title: "کارشناسی مهندسی کامپیوتر",
      place: "[نام دانشگاه]",
      desc: "پایه‌های ساختمان داده، الگوریتم، پایگاه‌داده و آمار و احتمال.",
    },
  ],

  goals: [
    { icon: "fa-solid fa-rocket", title: "از مدل تا محصول", desc: "ساخت سیستم‌های هوشمندی که واقعاً استقرار می‌یابند و استفاده می‌شوند." },
    { icon: "fa-solid fa-graduation-cap", title: "ادامه تحصیل و پژوهش", desc: "ورود به یک مسیر پژوهشی جدی در حوزه یادگیری ماشین کاربردی." },
    { icon: "fa-solid fa-people-group", title: "همکاری در تیم‌های قوی", desc: "کار در کنار مهندسان باتجربه برای رشد سریع و تأثیرگذاری بیشتر." },
  ],

  interests: [
    { icon: "fa-solid fa-chart-line", name: "سری زمانی و پیش‌بینی" },
    { icon: "fa-solid fa-magnifying-glass-chart", name: "تشخیص ناهنجاری" },
    { icon: "fa-solid fa-gears", name: "MLOps و استقرار مدل" },
    { icon: "fa-solid fa-language", name: "پردازش زبان طبیعی" },
    { icon: "fa-solid fa-code-branch", name: "متن‌باز" },
    { icon: "fa-solid fa-book-open", name: "مقاله‌خوانی" },
  ],

  /* ---------- پروژه‌ها (مخزن‌های GitHub) ---------- */
  // cover / images: تصاویر واقعی؛ در غیر این صورت art (chart | graph | bars | logs | wave) تولید می‌شود
  // private: true → مخزن خصوصی است؛ به‌جای لینک، نشان «Private» دیده می‌شود (بعد از عمومی‌کردن مخزن، حذفش کنید)
  // demo: لینک دموی زنده (خالی = مخفی)
  projects: [
    {
      id: "testmind",
      title: "TestMind — AI-Powered Software Testing Platform",
      summary:
        "پلتفرم تست نرم‌افزار با هوش مصنوعی: تحلیل ریپازیتوری، تولید و اعتبارسنجی تست، اجرای ایزوله، پوشش کد، Mutation Testing و گزارش کیفیت.",
      description: [
        "TestMind یک لایهٔ هوشمند روی ابزارهای استاندارد تست (pytest، coverage.py، git، Playwright) است، نه جایگزین آن‌ها. هر کاری که ابزارهای قطعی می‌توانند انجام دهند به آن‌ها سپرده می‌شود و LLM فقط جایی استفاده می‌شود که ارزش واقعی دارد: نوشتن تست، حدس علت ریشه‌ای خطا و خلاصه‌سازی یافته‌ها.",
        "هر خروجی هوش مصنوعی همراه با شواهد و سطح اطمینان ارائه می‌شود. محدودیت‌های راستی‌آزمایی‌نشده (مثل نبود تماس زنده با API) در مستندات به‌صراحت ذکر شده‌اند.",
      ],
      highlights: [
        "تحلیل ساختار مخزن و تشخیص Django، FastAPI، Flask، pytest و unittest",
        "تولید تست با AI و اعتبارسنجی در Sandbox",
        "اجرای ایزوله تست‌ها، پوشش کد و Mutation Testing",
        "تحلیل خطا و Regression، تست API و GitHub App",
        "داشبورد وب (React) + API با FastAPI + مانیتورینگ و Docker",
      ],
      categories: ["AI Systems", "Backend"],
      stack: ["Python", "FastAPI", "React", "Docker", "pytest", "Anthropic API"],
      status: { label: "نسخه ۱٫۰", type: "done" },
      cover: "assets/projects/testmind/dashboard-overview.jpg",
      images: [
        { src: "assets/projects/testmind/dashboard-overview.jpg", alt: "نمای کلی داشبورد" },
        { src: "assets/projects/testmind/dashboard-project.jpg", alt: "صفحه پروژه" },
        { src: "assets/projects/testmind/dashboard-api-coverage.jpg", alt: "پوشش API" },
      ],
      github: "https://github.com/AAli-gh/AI-Powered-Software-Testing-Platform",
      private: true,
      demo: "",
    },
    {
      id: "perfume",
      title: "عطر مجد — Majd Perfume",
      summary:
        "فروشگاه اینترنتی عطر روی یک پلتفرم White-Label چندفروشگاهی؛ جست‌وجوی هوشمند فارسی، مقایسه عطرها و استودیوی بدون‌کد.",
      description: [
        "یک Modular Monolith با Django 5.2، PostgreSQL، Celery + Redis و HTMX. ظاهر و صفحهٔ اصلی بدون کدنویسی از «استودیو» تغییر می‌کنند و داده‌ها آمادهٔ چندفروشگاهی (Multi-tenant) هستند.",
      ],
      highlights: [
        "جست‌وجوی هوشمند فارسی: «عطر خنک زیر سه تومن» به فیلتر دقیق قیمت، رایحه و فصل تبدیل می‌شود",
        "مقایسهٔ تا ۴ عطر، پیشنهاد بر اساس نت‌ها و «عطر مناسب من را پیدا کن»",
        "پرداخت زرین‌پال، کارت‌به‌کارت یا درمحل؛ کد تخفیف و علاقه‌مندی‌ها",
        "استودیو: ویرایش صفحه، تم و رنگ، پیش‌نمایش و انتشار/بازگردانی",
        "عملیات روزانه: چاپ گروهی فاکتور و برچسب، هشدار موجودی، ورود/خروج Excel",
        "تست‌های E2E با Chromium و Docker",
      ],
      categories: ["Backend", "Web & Design"],
      stack: ["Python", "Django", "PostgreSQL", "Celery", "Redis", "HTMX", "Tailwind", "Docker"],
      status: { label: "تکمیل‌شده", type: "done" },
      cover: "assets/projects/perfume/home-hero.jpg",
      images: [
        { src: "assets/projects/perfume/home-hero.jpg", alt: "صفحه اصلی" },
        { src: "assets/projects/perfume/shop.jpg", alt: "فروشگاه و فیلترها" },
        { src: "assets/projects/perfume/product.jpg", alt: "صفحه محصول" },
        { src: "assets/projects/perfume/smart-search-results.jpg", alt: "جست‌وجوی هوشمند" },
        { src: "assets/projects/perfume/compare.jpg", alt: "مقایسه عطرها" },
        { src: "assets/projects/perfume/finder-results.jpg", alt: "عطر مناسب من را پیدا کن" },
        { src: "assets/projects/perfume/studio-dashboard.jpg", alt: "استودیو" },
        { src: "assets/projects/perfume/studio-ops-dashboard.jpg", alt: "پیشخوان عملیات" },
        { src: "assets/projects/perfume/m-home.jpg", alt: "نسخه موبایل" },
      ],
      github: "https://github.com/AAli-gh/perfume",
      private: true,
      demo: "",
    },
    {
      id: "it-magazine",
      title: "IT Magazine — مجله فناوری",
      summary:
        "مجلهٔ فارسی (RTL) برای مقاله، خبر و آموزش در حوزهٔ هوش مصنوعی، برنامه‌نویسی و DevOps؛ با Django، PostgreSQL، Redis و Claude API.",
      description: [
        "یک سیستم مجله‌ای کامل با ۱۳ دسته‌بندی و ۱۱ نوع محتوا، پنل مدیریت، خبرنامه، فید پادکست و ابزارهای هوش مصنوعی برای تولید و مدیریت محتوا.",
      ],
      highlights: [
        "۱۱ نوع محتوا: مقاله، خبر، آموزش، بررسی، ابزار AI، مصاحبه، ویدئو، پادکست، AI Daily و …",
        "صفحهٔ مقاله با فهرست مطالب خودکار، رنگ‌آمیزی کد، تاریخ شمسی و نوار پیشرفت",
        "ویدئو و پادکست با آپلود فایل و فید RSS پادکست",
        "کتابخانه تصاویر با کوچک‌سازی خودکار و نسخه‌های WebP",
        "ورود با GitHub و Google (django-allauth)، خبرنامه و تعامل کاربران",
      ],
      categories: ["Backend", "Web & Design", "AI Systems"],
      stack: ["Python", "Django", "DRF", "PostgreSQL", "Redis", "HTMX", "Tailwind", "Claude API"],
      status: { label: "تکمیل‌شده", type: "done" },
      art: "bars",
      github: "https://github.com/AAli-gh/IT-magazine",
      demo: "",
    },
    {
      id: "it-learning",
      title: "IT-learning",
      summary:
        "مخزن آموزش و یادگیری حوزه IT؛ در حال راه‌اندازی و تکمیل محتوا.",
      description: [
        "این مخزن برای نگه‌داری محتوا و تمرین‌های یادگیری IT ساخته شده و هنوز در مرحلهٔ آغازین است.",
      ],
      categories: ["Web & Design"],
      stack: ["Learning"],
      status: { label: "در آغاز راه", type: "draft" },
      art: "wave",
      github: "https://github.com/AAli-gh/IT-learning",
      private: true,
      demo: "",
    },
    {
      id: "shop2",
      title: "shop2 — فروشگاه اینترنتی با Django",
      summary:
        "فروشگاه محصولات فیزیکی با رابط فارسی و راست‌چین؛ Django 5 + DRF، لایهٔ سرویس، HTMX و Tailwind v4.",
      description: [
        "معماری لایه‌ای: منطق کسب‌وکار در services.py هر اپ، API با DRF و رابط سمت سرور با Django Templates و HTMX. آمادهٔ استقرار روی Liara با اسکریپت‌های بکاپ و انقضای سفارش.",
      ],
      highlights: [
        "Django 5.2 + DRF با لایهٔ سرویس در هر اپ",
        "Django Templates + HTMX 2 + Tailwind CSS v4 (Standalone CLI)",
        "SQLite در توسعه و PostgreSQL با یک متغیر محیطی",
        "درگاه پرداخت شبیه‌ساز با امکان جایگزینی با زرین‌پال",
        "اسکریپت‌های استقرار، بکاپ و زمان‌بندی",
      ],
      categories: ["Backend", "Web & Design"],
      stack: ["Python", "Django", "DRF", "HTMX", "Tailwind", "PostgreSQL"],
      status: { label: "در حال توسعه", type: "wip" },
      art: "graph",
      github: "https://github.com/AAli-gh/shop2",
      private: true,
      demo: "",
    },
    {
      id: "hamechi-shop",
      title: "بازارچه (Hamechi Shop)",
      summary:
        "فروشگاه اینترنتی فارسی و RTL با ویترین مشتری و پنل مدیریت؛ مونوریپوی TypeScript با Express، PostgreSQL و React.",
      description: [
        "یک مونوریپوی pnpm شامل سرور API، فروشگاه و پنل مدیریت. قرارداد API با OpenAPI نوشته می‌شود و هوک‌ها و اسکیماهای Zod به‌صورت خودکار تولید می‌شوند.",
      ],
      highlights: [
        "دسته‌بندی چندسطحی، جست‌وجوی فارسی، مقایسه و علاقه‌مندی‌ها",
        "سبد خرید، کد تخفیف، پیگیری سفارش، فاکتور و مرجوعی",
        "پنل مدیریت: محصولات، سفارش‌ها، موجودی، تخفیف‌ها و گزارش‌ها",
        "Express 5 + Drizzle ORM + PostgreSQL و React 19 + Vite + shadcn/ui",
      ],
      categories: ["Backend", "Web & Design"],
      stack: ["TypeScript", "React", "Express", "PostgreSQL", "Drizzle", "OpenAPI"],
      status: { label: "تکمیل‌شده", type: "done" },
      art: "chart",
      github: "https://github.com/AAli-gh/Hamechi_shop",
      private: true,
      demo: "",
    },
    {
      id: "persian-baby-shop",
      title: "کودک‌لند — Persian Baby Shop",
      summary:
        "فروشگاه اینترنتی فارسی و RTL پوشاک و لوازم نوزاد و کودک با پنل مدیریت کامل، وبلاگ و پیامک.",
      description: [
        "فروشگاه Full-stack با همان معماری مونوریپوی TypeScript: سرور API، ویترین مشتری و پنل مدیریت، با تست همزمانی برای رزرو موجودی انبار.",
      ],
      highlights: [
        "کاتالوگ محصولات، سبد خرید و تسویه‌حساب، لیست علاقه‌مندی و وبلاگ",
        "پنل مدیریت: محصولات، سفارش‌ها، موجودی، تخفیف‌ها، خبرنامه، گزارش‌ها و پیامک",
        "رزرو موجودی با تست همزمانی",
        "pnpm workspaces، OpenAPI، Drizzle ORM و PostgreSQL",
      ],
      categories: ["Backend", "Web & Design"],
      stack: ["TypeScript", "React", "Express", "PostgreSQL", "Drizzle", "Tailwind"],
      status: { label: "تکمیل‌شده", type: "done" },
      art: "bars",
      github: "https://github.com/AAli-gh/Persian-Baby-Shop",
      private: true,
      demo: "",
    },
    {
      id: "game-2042",
      title: "2048 — بازی پازل موبایلی",
      summary:
        "نسخهٔ موبایلی بازی ۲۰۴۸ با ظاهر شیشه‌ای، ۱۰۰ مرحله در پنج فصل و خروجی APK؛ نوشته‌شده با HTML/CSS/JS خالص.",
      description: [
        "بازی بدون هیچ وابستگی، با Service Worker برای حالت آفلاین، تست‌های Playwright، CI و ساخت APK اندروید.",
      ],
      highlights: [
        "۱۰۰ مرحله در پنج فصل با هدف و بودجهٔ حرکت یا زمان و سیستم ستاره",
        "منو، حالت‌های بازی، آمار و نشان‌ها، تم نئون و حالت افقی",
        "HTML/CSS/JS خالص بدون وابستگی؛ PWA با Service Worker",
        "تست‌های E2E با Playwright، CI و انتشار APK",
      ],
      categories: ["Game"],
      stack: ["JavaScript", "HTML", "CSS", "PWA", "Playwright", "Android"],
      status: { label: "تکمیل‌شده", type: "done" },
      cover: "assets/projects/2042-game/menu.jpg",
      images: [
        { src: "assets/projects/2042-game/menu.jpg", alt: "منو" },
        { src: "assets/projects/2042-game/game-neon.jpg", alt: "بازی — تم نئون" },
        { src: "assets/projects/2042-game/levels.jpg", alt: "مراحل" },
        { src: "assets/projects/2042-game/level-clear.jpg", alt: "پایان مرحله" },
        { src: "assets/projects/2042-game/modes.jpg", alt: "حالت‌ها" },
        { src: "assets/projects/2042-game/stats.jpg", alt: "آمار و نشان‌ها" },
        { src: "assets/projects/2042-game/landscape.jpg", alt: "حالت افقی" },
      ],
      github: "https://github.com/AAli-gh/2042-game",
      demo: "demos/2042-game/index.html",
    },
  ],

  projectCategories: ["AI Systems", "Backend", "Web & Design", "Game"],

  /* ---------- مقالات (نمونه) ---------- */
  articleCategories: [
    "Artificial Intelligence",
    "Machine Learning",
    "Python",
    "Data Science",
    "Backend",
    "Research",
  ],

  articles: [
    {
      id: "time-series-data-leakage",
      title: "چرا Data Leakage بزرگ‌ترین دشمن مدل‌های پیش‌بینی سری زمانی است",
      excerpt:
        "نشت اطلاعات آینده به آموزش مدل، ساده‌ترین راه برای ساخت مدلی است که روی کاغذ عالی و در عمل بی‌فایده است. منبع‌های رایج و راه‌حل‌های عملی.",
      category: "Machine Learning",
      date: "2026-09-28",
      readTime: 7,
      art: "chart",
      body: [
        { type: "p", text: "در پروژه‌های پیش‌بینی سری زمانی، ساده‌ترین راه برای ساخت مدلی که روی کاغذ عالی است اما در دنیای واقعی شکست می‌خورد، نشت داده (Data Leakage) است. نشت زمانی رخ می‌دهد که اطلاعاتی از آینده، مستقیم یا غیرمستقیم، وارد فرایند آموزش شود." },
        { type: "h2", text: "سه منبع رایج نشت" },
        { type: "ul", items: [
          "تقسیم تصادفی داده به train/test به‌جای تقسیم زمانی",
          "محاسبهٔ Scaler یا میانگین‌های متحرک روی کل دیتاست پیش از تقسیم",
          "استفاده از ویژگی‌هایی که در لحظهٔ پیش‌بینی هنوز در دسترس نیستند",
        ] },
        { type: "h2", text: "راه‌حل عملی" },
        { type: "p", text: "اعتبارسنجی را همیشه به‌صورت زمانی انجام دهید. در Scikit-learn کلاس `TimeSeriesSplit` هر بار یک بازهٔ جلوتر را به‌عنوان تست در نظر می‌گیرد و هیچ‌وقت از آینده برای آموزش گذشته استفاده نمی‌کند." },
        { type: "code", text: "from sklearn.model_selection import TimeSeriesSplit\n\ntscv = TimeSeriesSplit(n_splits=5)\nfor train_idx, test_idx in tscv.split(X):\n    model.fit(X.iloc[train_idx], y.iloc[train_idx])\n    score = model.score(X.iloc[test_idx], y.iloc[test_idx])" },
        { type: "quote", text: "اگر نتیجهٔ مدل بیش از حد خوب به نظر می‌رسد، اول به خود پایپ‌لاین شک کنید، نه به مدل." },
      ],
    },
    {
      id: "feature-engineering-financial-data",
      title: "اصول Feature Engineering برای داده‌های مالی",
      excerpt:
        "از بازده و نوسان تا میانگین‌های متحرک؛ چطور از قیمت خام، ویژگی‌هایی بسازیم که مدل بتواند از آن‌ها یاد بگیرد.",
      category: "Data Science",
      date: "2026-09-14",
      readTime: 6,
      art: "bars",
      body: [
        { type: "p", text: "قیمت خام به‌ندرت ورودی مناسبی برای مدل است؛ مقیاس آن در طول زمان تغییر می‌کند و ایستا (Stationary) نیست. اولین قدم، تبدیل قیمت به کمیت‌هایی است که رفتار نسبی بازار را نشان می‌دهند." },
        { type: "h2", text: "ویژگی‌های پایه" },
        { type: "ul", items: [
          "بازده درصدی و لگاریتمی در بازه‌های مختلف",
          "نوسان (انحراف معیار بازده) در پنجره‌های متحرک",
          "میانگین‌های متحرک و فاصلهٔ قیمت از آن‌ها",
          "ویژگی‌های تقویمی مثل روز هفته",
        ] },
        { type: "h2", text: "یک نکتهٔ مهم" },
        { type: "p", text: "هر ویژگی باید فقط با اطلاعات تا لحظهٔ `t` ساخته شود. استفاده از `shift` و پنجره‌های متحرک رو به عقب، ساده‌ترین راه برای جلوگیری از نشت اطلاعات است." },
      ],
    },
    {
      id: "django-rest-framework-production",
      title: "ساخت REST API پایدار با Django REST Framework",
      excerpt:
        "ساختار پروژه، Serializerها، صفحه‌بندی و مدیریت خطا؛ الگوهایی که API را از یک دمو به یک سرویس قابل اتکا تبدیل می‌کنند.",
      category: "Backend",
      date: "2026-08-30",
      readTime: 8,
      art: "graph",
      body: [
        { type: "p", text: "Django REST Framework بسیاری از کارهای تکراری ساخت API را حل می‌کند؛ اما پایدار بودن یک API به تصمیم‌های معماری شما بستگی دارد، نه صرفاً به ابزار." },
        { type: "h2", text: "چند اصل کاربردی" },
        { type: "ul", items: [
          "منطق کسب‌وکار را در لایهٔ Service نگه دارید، نه داخل View",
          "برای ورودی و خروجی از Serializerهای جداگانه استفاده کنید",
          "صفحه‌بندی را از ابتدا فعال کنید",
          "خطاها را با یک فرمت یکسان برگردانید",
        ] },
        { type: "code", text: "class PredictionSerializer(serializers.Serializer):\n    symbol = serializers.CharField(max_length=10)\n    horizon_days = serializers.IntegerField(min_value=1, max_value=30)" },
        { type: "p", text: "با همین چند اصل، تست‌نویسی و تغییر مدل‌ها بدون شکستن کلاینت‌ها بسیار ساده‌تر می‌شود." },
      ],
    },
    {
      id: "pandas-patterns",
      title: "Pandas کارآمد: پنج الگوی کاربردی برای پردازش داده",
      excerpt:
        "از برداری‌سازی تا `groupby` و `merge` درست؛ تغییرهای کوچکی که سرعت پردازش را چند برابر می‌کنند.",
      category: "Python",
      date: "2026-08-12",
      readTime: 5,
      art: "wave",
      body: [
        { type: "p", text: "بیشتر کندی‌ها در Pandas از حلقه‌های غیرضروری می‌آیند. در این یادداشت چند الگوی ساده را مرور می‌کنیم که کد را هم کوتاه‌تر و هم سریع‌تر می‌کنند." },
        { type: "h2", text: "الگوها" },
        { type: "ul", items: [
          "عملیات برداری به‌جای `apply` و حلقه",
          "استفاده از نوع‌های `category` برای ستون‌های تکراری",
          "`groupby` + `agg` به‌جای چند فیلتر پشت‌سرهم",
          "کنترل نوع داده هنگام `read_csv`",
          "ادغام با کلید ایندکس‌شده",
        ] },
        { type: "code", text: "df[\"ret\"] = df[\"close\"].pct_change()\nsummary = df.groupby(\"month\").agg(mean_ret=(\"ret\", \"mean\"), vol=(\"ret\", \"std\"))" },
      ],
    },
    {
      id: "beyond-accuracy",
      title: "ارزیابی مدل‌ها فراتر از Accuracy",
      excerpt:
        "Precision، Recall، ROC-AUC و معیارهای رگرسیون؛ هر کدام چه چیزی را می‌گویند و کِی گمراه‌کننده‌اند.",
      category: "Artificial Intelligence",
      date: "2026-07-25",
      readTime: 6,
      art: "bars",
      body: [
        { type: "p", text: "Accuracy ساده‌ترین معیار است و هم‌زمان یکی از گمراه‌کننده‌ترین‌ها؛ مخصوصاً وقتی کلاس‌ها نامتوازن‌اند. مدلی که همیشه «خطا نیست» را پیش‌بینی می‌کند ممکن است ۹۹٪ دقت داشته باشد و بی‌فایده باشد." },
        { type: "h2", text: "چه چیزی را اندازه می‌گیریم؟" },
        { type: "ul", items: [
          "Precision: از بین مواردی که مثبت گفتیم، چند تا واقعاً مثبت بودند",
          "Recall: از بین مثبت‌های واقعی، چند تا را پیدا کردیم",
          "ROC-AUC: توانایی رتبه‌بندی بدون وابستگی به آستانه",
          "MAE و RMSE: خطا در واحد خود مسئله، برای رگرسیون",
        ] },
        { type: "quote", text: "معیار ارزیابی را از روی هزینهٔ واقعی خطا انتخاب کنید، نه از روی عادت." },
      ],
    },
    {
      id: "log-anomaly-detection",
      title: "تحلیل هوشمند Log: از Regex تا Anomaly Detection",
      excerpt:
        "مروری بر رویکردهای تحلیل Log؛ از قواعد دستی تا خوشه‌بندی و مدل‌های تشخیص ناهنجاری و محدودیت‌های هر کدام.",
      category: "Research",
      date: "2026-07-05",
      readTime: 9,
      art: "logs",
      body: [
        { type: "p", text: "Logها حجم عظیمی از اطلاعات دارند، اما بیشتر آن‌ها نویز است. تحلیل دستی با Regex تا جایی کار می‌کند که الگوها شناخته‌شده باشند؛ خطاهای تازه معمولاً از همان‌جا که انتظارش را نداریم می‌رسند." },
        { type: "h2", text: "سه سطح رویکرد" },
        { type: "ul", items: [
          "قاعده‌محور: سریع و قابل توضیح اما شکننده",
          "Log Parsing و خوشه‌بندی: تبدیل پیام‌ها به قالب‌های ثابت و گروه‌بندی",
          "تشخیص ناهنجاری: یادگیری رفتار عادی و گزارش انحراف‌ها",
        ] },
        { type: "p", text: "در عمل، ترکیب این سه سطح بهترین نتیجه را می‌دهد: قواعد برای موارد شناخته‌شده، و مدل برای کشف چیزهایی که هنوز نامی ندارند." },
      ],
    },
  ],

  /* ---------- رزومه (نمونه — ویرایش شود) ---------- */
  resume: {
    summary:
      "مهندس هوش مصنوعی و توسعه‌دهنده پایتون با تمرکز بر یادگیری ماشین کاربردی، مهندسی داده و توسعه بک‌اند. علاقه‌مند به ساخت سیستم‌هایی که از داده به تصمیم می‌رسند.",
    education: [
      { title: "کارشناسی مهندسی کامپیوتر", place: "[نام دانشگاه]", period: "۱۳۹۹ — ۱۴۰۳", note: "گرایش نرم‌افزار؛ پروژهٔ پایانی در حوزهٔ یادگیری ماشین." },
    ],
    experience: [
      {
        title: "توسعه‌دهنده پایتون / مهندس ML",
        place: "فریلنس و پروژه‌های شخصی",
        period: "۱۴۰۲ — اکنون",
        points: [
          "طراحی پایپ‌لاین داده و مدل پیش‌بینی برای داده‌های سری زمانی",
          "توسعهٔ API با Django REST Framework و PostgreSQL",
          "مستندسازی و استقرار با Docker",
        ],
      },
    ],
    certificates: [
      { title: "[عنوان گواهی ۱]", place: "[صادرکننده]", period: "۱۴۰۳" },
      { title: "[عنوان گواهی ۲]", place: "[صادرکننده]", period: "۱۴۰۲" },
    ],
    research: [
      { title: "[عنوان مقاله یا گزارش پژوهشی]", place: "[نام کنفرانس / ژورنال]", period: "۱۴۰۴", note: "توضیح کوتاه دربارهٔ موضوع و نقش شما." },
    ],
  },
};
