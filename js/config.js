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

  /* ---------- پروژه‌ها ---------- */
  // art: نوع تصویر تولیدی (chart | graph | bars | logs | wave) — یا cover: مسیر تصویر واقعی
  // page: صفحه جزئیات اختصاصی (اختیاری)؛ در غیر این صورت project.html?id=<id>
  // images: گالری تصاویر · highlights: نکات کلیدی · github / demo: لینک‌ها (خالی = مخفی / غیرفعال)
  projects: [
    {
      id: "bitcoin-ai",
      title: "Bitcoin AI Prediction System",
      summary:
        "سیستم تحلیل و پیش‌بینی بازار بیت‌کوین با استفاده از داده‌های تاریخی، Feature Engineering و مدل‌های Machine Learning.",
      categories: ["Machine Learning", "Data Science"],
      stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Machine Learning"],
      status: { label: "در حال پژوهش", type: "wip" },
      art: "chart",
      page: "project-bitcoin-ai.html",
      github: "",
      demo: "",
    },
    {
      id: "ai-log-detective",
      title: "AI Log Detective",
      summary:
        "یک سیستم هوشمند برای تحلیل Logها و شناسایی خطاهای نرم‌افزاری؛ خوشه‌بندی خطاهای مشابه و تشخیص الگوهای غیرعادی.",
      categories: ["AI Systems", "Backend"],
      stack: ["Python", "Scikit-learn", "Django", "PostgreSQL"],
      status: { label: "در حال توسعه", type: "wip" },
      art: "logs",
      github: "",
      demo: "",
    },
    {
      id: "storefront",
      title: "VimaShop — فروشگاه لوازم یدکی خودرو",
      summary:
        "قالب کامل فروشگاه لوازم یدکی خودرو با ۲۲ صفحه فارسی و راست‌چین: جست‌وجوی قطعه، سبد خرید، تسویه‌حساب، پروفایل کاربر و وبلاگ.",
      description: [
        "یک قالب فروشگاهی بدون Build با HTML، Tailwind CSS و Alpine.js. تمام صفحات اصلی یک فروشگاه اینترنتی طراحی شده‌اند و می‌توانید همین حالا در مرورگر آن‌ها را مرور کنید.",
      ],
      highlights: [
        "۲۲ صفحه: خانه، محصولات، دسته‌بندی، جزئیات محصول، وبلاگ، سبد، تسویه‌حساب و …",
        "پنل کاربری: داشبورد، سفارش‌ها، آدرس‌ها، علاقه‌مندی‌ها و تنظیمات",
        "تعاملات سبک با Alpine.js بدون Build Step",
        "کاملاً RTL با فونت Vazirmatn",
      ],
      categories: ["Web & Design"],
      stack: ["HTML", "Tailwind CSS", "Alpine.js", "RTL"],
      status: { label: "تکمیل‌شده", type: "done" },
      art: "bars",
      github: "",
      demo: "demos/storefront/index.html",
    },
    {
      id: "kalameh",
      title: "کلمه (Kalameh) — قالب مجله فناوری وردپرس",
      summary:
        "قالب وردپرس فارسی و راست‌چین برای مجله‌های فناوری با طراحی شیشه‌ای، حالت تاریک و امکانات ویژهٔ محتوای فنی.",
      description: [
        "قالب کلاسیک وردپرس (PHP) برای مجله‌های فناوری؛ بدون Page Builder و بدون Build Step. داده‌های دمو ساختگی هستند.",
      ],
      highlights: [
        "طراحی Glassmorphism با حالت تاریک بدون پرش هنگام بارگذاری",
        "رنگ‌بندی کد با Prism (۲۱ زبان) و دکمه کپی",
        "انواع مطلب: خبر، آموزش و نقد و بررسی با امتیاز، نقاط قوت و ضعف",
        "سری‌های آموزشی، فهرست مطالب خودکار، تاریخ شمسی و خبرنامه",
        "فونت وزیرمتن به‌صورت محلی و کاملاً واکنش‌گرا",
      ],
      categories: ["Web & Design"],
      stack: ["WordPress", "PHP", "JavaScript", "CSS", "Prism.js"],
      status: { label: "تکمیل‌شده", type: "done" },
      cover: "assets/projects/kalameh/home.jpg",
      images: [
        { src: "assets/projects/kalameh/home-dark.jpg", alt: "صفحه اول — حالت تاریک" },
        { src: "assets/projects/kalameh/home.jpg", alt: "صفحه اول" },
        { src: "assets/projects/kalameh/tutorial.jpg", alt: "مطلب آموزشی" },
        { src: "assets/projects/kalameh/review.jpg", alt: "نقد و بررسی" },
        { src: "assets/projects/kalameh/mobile.jpg", alt: "نسخه موبایل" },
      ],
      github: "",
      demo: "",
    },
    {
      id: "shop2",
      title: "shop2 — فروشگاه اینترنتی با Django",
      summary:
        "فروشگاه محصولات فیزیکی با رابط فارسی و راست‌چین؛ Django 5 + DRF، لایه سرویس، HTMX و Tailwind v4.",
      description: [
        "یک فروشگاه اینترنتی کامل با معماری لایه‌ای: منطق کسب‌وکار در services.py هر اپ، API با DRF و رابط کاربری سمت سرور با Django Templates و HTMX.",
      ],
      highlights: [
        "Django 5.2 + Django REST Framework با لایه سرویس در هر اپ",
        "Django Templates + HTMX 2 + Tailwind CSS v4 (Standalone CLI)",
        "SQLite در توسعه و PostgreSQL با یک متغیر محیطی",
        "درگاه پرداخت شبیه‌ساز با امکان جایگزینی با زرین‌پال",
      ],
      categories: ["Backend", "Web & Design"],
      stack: ["Python", "Django", "DRF", "HTMX", "Tailwind", "PostgreSQL"],
      status: { label: "در حال توسعه", type: "wip" },
      art: "graph",
      github: "",
      demo: "",
    },
    {
      id: "electronics-shop",
      title: "Persian Electronics Shop",
      summary:
        "فروشگاه لوازم الکترونیکی فارسی و RTL با Django و Tailwind؛ شامل سبد خرید، سفارش‌ها، فروشندگان و داشبورد.",
      description: [
        "پروژهٔ فروشگاهی چندبخشی با اپ‌های جدا برای حساب کاربری، محصولات، سبد خرید، سفارش‌ها، فروشندگان و داشبورد مدیریتی.",
      ],
      highlights: [
        "اپ‌های مستقل: accounts، products، cart، orders، sellers، dashboard",
        "رابط RTL با Tailwind CSS و Build با PostCSS",
        "مدل داده و مهاجرت‌های Django",
      ],
      categories: ["Backend", "Web & Design"],
      stack: ["Python", "Django", "Tailwind CSS", "SQLite"],
      status: { label: "نمونه", type: "draft" },
      art: "wave",
      github: "",
      demo: "",
    },
    {
      id: "bazarcheh",
      title: "بازارچه (Bazarcheh) — فروشگاه Full-stack",
      summary:
        "فروشگاه اینترنتی فارسی و RTL با ویترین مشتری و پنل مدیریت؛ مونوریپوی TypeScript با Express، PostgreSQL و React.",
      description: [
        "یک مونوریپوی pnpm شامل سرور API، فروشگاه و پنل مدیریت. قرارداد API با OpenAPI نوشته می‌شود و هوک‌ها و اسکیماهای Zod به‌صورت خودکار تولید می‌شوند.",
      ],
      highlights: [
        "دسته‌بندی چندسطحی، جست‌وجوی فارسی، مقایسه و علاقه‌مندی‌ها",
        "سبد خرید، کد تخفیف، پیگیری سفارش، فاکتور و مرجوعی",
        "پنل مدیریت: محصولات، سفارش‌ها، موجودی، تخفیف‌ها و گزارش‌ها",
        "Express 5 + Drizzle ORM + PostgreSQL و React 19 + Vite",
      ],
      categories: ["Backend", "Web & Design"],
      stack: ["TypeScript", "React", "Express", "PostgreSQL", "Drizzle", "OpenAPI"],
      status: { label: "در حال توسعه", type: "wip" },
      art: "graph",
      github: "",
      demo: "",
    },
    {
      id: "itmag-errors",
      title: "ITMAG — صفحات خطای آینده‌نگر",
      summary:
        "مجموعه طراحی ۱۰ صفحه خطا (۴۰۱، ۴۰۳، ۴۰۴، ۴۲۹، ۵۰۰، ۵۰۳، ۵۰۴ و …) برای مجله فناوری با زبان بصری سایبرپانک.",
      description: [
        "طراحی یکپارچهٔ صفحات خطای HTTP برای یک مجلهٔ فناوری فارسی؛ هر صفحه با همان هویت بصری و لحن مجله.",
      ],
      highlights: ["۱۰ صفحه خطا با زبان بصری یکسان", "مناسب استفاده در قالب‌های وب و وردپرس"],
      categories: ["Web & Design"],
      stack: ["UI Design", "Visual Identity"],
      status: { label: "تکمیل‌شده", type: "done" },
      cover: "assets/projects/itmag-errors/error-01.jpg",
      images: [1,2,3,4,5,6,7,8,9,10].map(function (n) {
        return { src: "assets/projects/itmag-errors/error-" + (n < 10 ? "0" : "") + n + ".jpg", alt: "صفحه خطا " + n };
      }),
      github: "",
      demo: "",
    },
  ],

  projectCategories: ["Machine Learning", "AI Systems", "Data Science", "Backend", "Web & Design"],

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
