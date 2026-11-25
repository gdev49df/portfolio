// данные проектов. чтобы добавить скриншот, положи файл в img/ и впиши его в поле img, например img: "img/study-on.jpg"
window.PROJECTS = [
  {
    id: "study-on",
    spec: { kb: 116, req: 5 },
    demo: { url: "https://gdev49df.github.io/study-on/", device: "laptop" },
    img: "img/study-on.jpg",
    hero: "img/study-on-case.jpg",
    points: ["Данные из карточки школы в 2ГИС", "Оформление в стиле школы", "Заявки с сайта уходят прямо в WhatsApp"],
    title: "Study On",
    type: "Сайт языковой школы",
    cat: "web",
    glyph: "S",
    c1: "#1b7a6b",
    c2: "#0b2a3d",
    featured: true,
    short: "Сайт школы английского в Астане, заявки уходят в WhatsApp.",
    desc: "Сайт школы английского языка в Астане на чистых HTML, CSS и JavaScript. Данные взяты из карточки школы в 2ГИС, оформление повторяет стиль школы, заявки с сайта отправляются прямо в WhatsApp.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    links: [{ label: "Открыть сайт", url: "https://gdev49df.github.io/study-on/" }]
  },
  {
    id: "dinastiyastomclinic",
    real: true,
    reviews: "/reviews",
    spec: { kb: 135, req: 6 },
    demo: { url: "https://gdev49df.github.io/dinastiyastomclinic/", device: "laptop" },
    img: "img/dinastiyastomclinic.jpg",
    hero: "img/dinastiyastomclinic-case.jpg",
    points: ["Страницы услуг: имплантация, брекеты, лечение, ортопедия, детская стоматология", "Цены, рассрочка 0-0-24, команда и отзывы с оценками из 2ГИС", "Запись на приём и быстрая связь через WhatsApp"],
    title: "Dinastiya Stom Clinic",
    type: "Сайт стоматологии",
    cat: "web",
    glyph: "D",
    c1: "#c9a24a",
    c2: "#2a1f0b",
    featured: false,
    short: "Сайт стоматологии в Астане: услуги, цены, рассрочка и запись на приём.",
    desc: "Сайт стоматологической клиники Dinastiya Stom Clinic в Астане на чистых HTML, CSS и JavaScript. Отдельные страницы для имплантации, брекетов, лечения, ортопедии и детской стоматологии, блок с ценами и рассрочкой, команда врачей, отзывы и быстрая запись на приём. Оформление выдержано в золотых тонах логотипа клиники.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Открыть сайт", url: "https://gdev49df.github.io/dinastiyastomclinic/" }]
  },
  {
    id: "shawarma",
    spec: { kb: 301, req: 17 },
    demo: { url: "https://gdev49df.github.io/shawarma/", device: "laptop" },
    img: "img/shawarma.jpg",
    hero: "img/shawarma-case.jpg",
    points: ["Меню с фильтрами и конструктор «Собери свою» с подсчётом цены", "Корзина и оформление заказа через WhatsApp", "Статус «открыто / закрыто», условия доставки и контакты"],
    title: "Шаурма Ашота",
    type: "Сайт доставки еды",
    cat: "web",
    glyph: "Ш",
    c1: "#f26a00",
    c2: "#3a1600",
    featured: false,
    short: "Сайт шаурмечной в Астане: меню, конструктор шаурмы и заказ через WhatsApp.",
    desc: "Сайт шаурмечной «Шаурма Ашота» в Астане на чистых HTML, CSS и JavaScript. Яркий главный экран, меню с фильтрами, конструктор, где гость собирает шаурму сам, корзина и оформление заказа в WhatsApp, условия доставки и контакты. Статус «открыто / закрыто» считается автоматически по часам работы.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Открыть сайт", url: "https://gdev49df.github.io/shawarma/" }]
  },
  {
    id: "tasqly",
    real: true,
    spec: { kb: 411, req: 5 },
    demo: { url: "https://gdev49df.github.io/tasqly/", device: "laptop" },
    img: "img/tasqly.jpg",
    hero: "img/tasqly-case.jpg",
    points: ["Задачи, проекты, заметки, чат и диск в одном месте", "Трекер времени, календарь и ИИ-помощник сбоку", "Строгий монохром с одним лаймовым акцентом"],
    title: "Tasqly",
    type: "Рабочее пространство",
    cat: "web",
    glyph: "q",
    c1: "#a78bfa",
    c2: "#050608",
    featured: false,
    short: "Рабочее пространство для команд: задачи, заметки, чат, диск и ИИ.",
    desc: "Tasqly — рабочее пространство для команд в духе ClickUp: проекты трёх типов, задачи, заметки, чат, диск, трекер времени, календарь и ИИ-помощник в боковой панели. Строгий монохромный дизайн с одним лаймовым акцентом, лендинг с тарифами и личный кабинет.",
    stack: ["HTML", "CSS", "JavaScript", "Cloudflare Workers", "D1"],
    links: [{ label: "Открыть приложение", url: "https://gdev49df.github.io/tasqly/" }]
  }
];

window.SERVICES = [
  { id: "landing", title: "Одностраничный лендинг", text: "Идеален для запуска продукта, акции или услуги. Конвертирует трафик в заявки.", price: 80, days: 5 },
  { id: "multi", title: "Многостраничный сайт", text: "Полноценный сайт компании с несколькими разделами. Вызывает доверие у клиентов.", price: 190, days: 7 },
  { id: "card", title: "Сайт-визитка", text: "Компактное онлайн-представительство. Подходит для специалистов и малого бизнеса.", price: 70, days: 4 },
  { id: "shop", title: "Интернет-магазин", text: "Полноценный магазин с корзиной, оплатой и каталогом. Продажи онлайн 24/7.", price: 310, days: 14 },
  { id: "pwa", title: "PWA-приложение", text: "Приложение, которое ставится на экран телефона, работает без сети и открывается как обычное.", price: 130, days: 7 },
  { id: "corp", title: "Корпоративный сайт", text: "Представительный сайт компании: услуги, команда, кейсы и контакты в одной системе.", price: 190, days: 7 }
];

window.STACK = ["HTML", "CSS", "JavaScript", "PWA", "Service Worker", "Cloudflare Workers", "D1", "GitHub Pages"];

// иконки соцсетей
(function () {
  var s = function (inner, fill) { return '<svg viewBox="0 0 24 24" width="20" height="20" ' + (fill ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"') + ">" + inner + "</svg>"; };
  window.ICONS = {
    tg: s('<path d="M21 4 3 11l6 2.2L11 20l3-4.2 5 3.7L21 4Z"/><path d="m9 13.2 12-9.2"/>'),
    ig: s('<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor"/>'),
    wa: s('<path d="M3.5 20.5l1.4-4.6A8.5 8.5 0 1 1 8.2 19.2l-4.7 1.3Z"/><path d="M9.2 8.8c.2 2.2 2.8 4.8 5 5l1.2-1.2-1.7-1-.8.7c-.8-.3-1.4-.9-1.7-1.7l.7-.8-1-1.7-1.7 1.7Z"/>'),
    mail: s('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>')
  };
})();

/* Отзывы клиентов о работе gDev. Формат: { name: "Имя", project: "Название проекта", text: "Текст", rating: 5, date: "Ноябрь 2026", source: "2ГИС" } */
window.REVIEWS = [];
