// переводы интерфейса. ключ: русский текст, значение: [казахский, английский]
// язык хранится в localStorage ("gws-lang"), переключается кнопками в шапке или ссылкой ?lang=kk
(function () {
  "use strict";

  var T = {
    /* ---------- навигация и общие элементы ---------- */
    "Главная": ["Басты бет", "Home"],
    "Услуги": ["Қызметтер", "Services"],
    "Портфолио": ["Портфолио", "Portfolio"],
    "Обо мне": ["Мен туралы", "About"],
    "Контакты": ["Байланыс", "Contacts"],
    "Обсудить проект": ["Жобаны талқылау", "Discuss a project"],
    "Обсудить проект →": ["Жобаны талқылау →", "Discuss a project →"],
    "Меню": ["Мәзір", "Menu"],
    "Закрыть": ["Жабу", "Close"],
    "Открыть меню": ["Мәзірді ашу", "Open menu"],
    "Закрыть меню": ["Мәзірді жабу", "Close menu"],
    "Основное меню": ["Негізгі мәзір", "Main menu"],
    "Разделы": ["Бөлімдер", "Sections"],
    "Язык": ["Тіл", "Language"],
    "на главную": ["басты бетке", "home"],
    "Создано": ["Жасаған", "Created by"],
    "Политика конфиденциальности": ["Құпиялылық саясаты", "Privacy policy"],
    "Делаю современные сайты для бизнеса в Казахстане и России: от первой идеи до результата, который приводит клиентов и заявки.": [
      "Қазақстан мен Ресейдегі бизнеске арналған заманауи сайттар жасаймын: алғашқы идеядан клиенттер мен өтінімдер әкелетін нәтижеге дейін.",
      "I build modern websites for businesses in Kazakhstan and Russia: from the first idea to a result that brings in clients and leads."
    ],

    /* ---------- слова на фоне заголовков ---------- */
    "Работы": ["Жұмыстар", "Work"],
    "Вопросы": ["Сұрақтар", "FAQ"],
    "Навыки": ["Дағдылар", "Skills"],
    "Этапы": ["Кезеңдер", "Steps"],
    "Квиз": ["Квиз", "Quiz"],
    "Ошибка": ["Қате", "Error"],
    "Кейс": ["Кейс", "Case"],
    "Политика": ["Саясат", "Policy"],

    /* ---------- заголовки и описания страниц ---------- */
    "gDev — сайты и игры для Telegram Mini App": ["gDev — сайттар мен Telegram Mini App ойындары", "gDev — websites and Telegram Mini App games"],
    "Дизайнер и разработчик из Астаны. Делаю сайты на чистом коде, игры для Telegram Mini App и плагины для Minecraft.": [
      "Астанадан келген дизайнер және әзірлеуші. Таза кодпен сайттар, Telegram Mini App ойындарын және Minecraft плагиндерін жасаймын.",
      "Designer and developer from Astana. I build hand-coded websites, Telegram Mini App games and Minecraft plugins."
    ],
    "Услуги — gDev": ["Қызметтер — gDev", "Services — gDev"],
    "Услуги: лендинг от $80, многостраничный сайт от $160, визитка от $60, корпоративный сайт от $160, Telegram Mini App от $130, плагин для Minecraft от $12, доработка проекта от $30.": [
      "Қызметтер: лендинг $80 бастап, көпбетті сайт $160 бастап, визитка $60 бастап, корпоративтік сайт $160 бастап, Telegram Mini App $130 бастап, Minecraft плагині $12 бастап, жобаны жетілдіру $30 бастап.",
      "Services: landing page from $80, multi-page website from $160, business card site from $60, corporate website from $160, Telegram Mini App from $130, Minecraft plugin from $12, project rework from $30."
    ],
    "Портфолио — gDev": ["Портфолио — gDev", "Portfolio — gDev"],
    "Работы gDev: сайты для бизнеса, игры для Telegram Mini App, боты и плагины для Minecraft.": [
      "gDev жұмыстары: бизнеске арналған сайттар, Telegram Mini App ойындары, боттар және Minecraft плагиндері.",
      "gDev work: business websites, Telegram Mini App games, bots and Minecraft plugins."
    ],
    "Обо мне — gDev": ["Мен туралы — gDev", "About — gDev"],
    "gDev: дизайнер и разработчик из Астаны. Делаю сайты, игры для Telegram Mini App, боты и плагины.": [
      "gDev: Астанадан келген дизайнер және әзірлеуші. Сайттар, Telegram Mini App ойындары, боттар және плагиндер жасаймын.",
      "gDev: designer and developer from Astana. I make websites, Telegram Mini App games, bots and plugins."
    ],
    "Контакты — gDev": ["Байланыс — gDev", "Contacts — gDev"],
    "Связаться с gDev: Telegram, WhatsApp, Instagram и квиз для обсуждения проекта.": [
      "gDev-мен байланысу: Telegram, WhatsApp, Instagram және жобаны талқылауға арналған квиз.",
      "Contact gDev: Telegram, WhatsApp, Instagram and a quiz to discuss your project."
    ],
    "Обсудить проект — gDev": ["Жобаны талқылау — gDev", "Discuss a project — gDev"],
    "Ответьте на несколько вопросов, и я пойму, какой сайт, приложение или плагин вам нужен.": [
      "Бірнеше сұраққа жауап беріңіз, мен сізге қандай сайт, қосымша немесе плагин керек екенін түсінемін.",
      "Answer a few questions and I will understand what kind of website, app or plugin you need."
    ],
    "Страница не найдена — gDev": ["Бет табылмады — gDev", "Page not found — gDev"],
    "Политика конфиденциальности — gDev": ["Құпиялылық саясаты — gDev", "Privacy policy — gDev"],
    "Какие данные использует сайт gDev и как они хранятся.": [
      "gDev сайты қандай деректерді пайдаланады және олар қалай сақталады.",
      "What data the gDev website uses and how it is stored."
    ],

    /* ---------- главная ---------- */
    "Веб-студия из Астаны": ["Астанадағы веб-студия", "Web studio from Astana"],
    "Разработка сайтов, которые приводят клиентов": ["Клиент әкелетін сайттарды әзірлеу", "Websites that bring in clients"],
    "приводят клиентов": ["клиент әкелетін", "bring in clients"],
    "Дизайн и разработка · Астана": ["Дизайн және әзірлеу · Астана", "Design and development · Astana"],
    "Сайты и Telegram-игры, в которые хочется возвращаться": ["Қайта оралғың келетін сайттар мен Telegram ойындары", "Websites and Telegram games you want to come back to"],
    "Делаю сайты для бизнеса в Казахстане и России. Они не только хорошо выглядят, но и работают на результат: показывают, чем вы полезны, вызывают доверие и превращают посетителей в заявки.": [
      "Қазақстан мен Ресейдегі бизнеске сайттар жасаймын. Олар тек әдемі көрінбейді, нәтиже береді: сізге не үшін керек екенін көрсетеді, сенім тудырады және келушілерді өтінімге айналдырады.",
      "I build websites for businesses in Kazakhstan and Russia. They do not just look good, they deliver results: they show how you are useful, build trust and turn visitors into leads."
    ],
    "Смотреть работы": ["Жұмыстарды көру", "View work"],
    "Написать в Telegram": ["Telegram-ға жазу", "Message on Telegram"],
    "Принимаю проекты": ["Жобаларды қабылдаймын", "Open for projects"],
    "Астана, Казахстан": ["Астана, Қазақстан", "Astana, Kazakhstan"],
    "Избранные работы": ["Таңдаулы жұмыстар", "Selected work"],
    "Сайты, игры и плагины. Нажмите на проект, чтобы открыть подробный кейс.": [
      "Сайттар, ойындар және плагиндер. Толық кейсті ашу үшін жобаны басыңыз.",
      "Websites, games and plugins. Click a project to open the full case."
    ],
    "Всё портфолио": ["Барлық портфолио", "Full portfolio"],
    "Что вам нужно сделать?": ["Сізге не жасау керек?", "What do you need built?"],
    "Выберите формат под задачу: в карточке указаны цена и сроки. Если сомневаетесь, квиз поможет определиться.": [
      "Міндетке сай формат таңдаңыз: карточкада баға мен мерзім көрсетілген. Күмәндансаңыз, квиз таңдауға көмектеседі.",
      "Pick a format for your task: each card shows the price and timing. If you are unsure, the quiz will help you decide."
    ],
    "Все услуги": ["Барлық қызметтер", "All services"],
    "Частые вопросы": ["Жиі қойылатын сұрақтар", "Frequently asked questions"],
    "Не нашли ответа? Заполните квиз или напишите в Telegram.": [
      "Жауап таппадыңыз ба? Квизді толтырыңыз немесе Telegram-ға жазыңыз.",
      "Did not find an answer? Fill in the quiz or message me on Telegram."
    ],
    "Сколько стоит сайт?": ["Сайт қанша тұрады?", "How much does a website cost?"],
    "Зависит от типа сайта и задачи. Ориентиры «от» указаны в карточках услуг: например, сайт-визитка — от $60, лендинг — от $80. Точную стоимость называю после того, как обсудим проект.": [
      "Сайт түріне және міндетке байланысты. «Бастап» бағасы қызмет карточкаларында көрсетілген: мысалы, визитка-сайт — $60 бастап, лендинг — $80 бастап. Нақты құнын жобаны талқылағаннан кейін айтамын.",
      "It depends on the type of site and the task. Starting prices are shown on the service cards: for example, a business card site from $60, a landing page from $80. I give the exact price after we discuss the project."
    ],
    "Сколько времени занимает разработка?": ["Әзірлеу қанша уақыт алады?", "How long does development take?"],
    "Сайт-визитка — от 3 дней, лендинг и Telegram Mini App — от 5, многостраничный и корпоративный сайт — от 7. Точный срок называю после обсуждения задачи.": [
      "Визитка-сайт — 3 күннен бастап, лендинг және Telegram Mini App — 5 күннен, көпбетті және корпоративтік сайт — 7 күннен. Нақты мерзімді міндетті талқылағаннан кейін айтамын.",
      "A business card site takes from 3 days, a landing page and a Telegram Mini App from 5, a multi-page or corporate site from 7. I give the exact timing after we discuss the task."
    ],
    "На чём вы делаете сайты?": ["Сайттарды немен жасайсыз?", "What do you build websites with?"],
    "На чистом HTML, CSS и JavaScript, без конструкторов. Так сайт быстро открывается и его легко менять. Размещаю на GitHub Pages или Cloudflare.": [
      "Таза HTML, CSS және JavaScript-пен, конструкторларсыз. Сайт тез ашылады және оны өзгерту оңай. GitHub Pages немесе Cloudflare-де орналастырамын.",
      "With plain HTML, CSS and JavaScript, no site builders. This way the site opens fast and is easy to change. I host it on GitHub Pages or Cloudflare."
    ],
    "Смогу ли я вносить правки по ходу работы?": ["Жұмыс барысында түзетулер енгізе аламын ба?", "Can I request changes along the way?"],
    "Да. Сначала согласуем структуру, потом внешний вид, и вы видите результат на каждом шаге.": [
      "Иә. Алдымен құрылымды, содан кейін сыртқы түрін келісеміз, сіз нәтижені әр қадамда көресіз.",
      "Yes. First we agree on the structure, then on the look, and you see the result at every step."
    ],
    "Делаете ли вы игры для Telegram?": ["Telegram үшін ойындар жасайсыз ба?", "Do you make games for Telegram?"],
    "Да, это одно из моих основных направлений. Например, Нейм-рулетка: игра внутри Telegram с рейтингом, рефералами и покупками за Stars.": [
      "Иә, бұл менің негізгі бағыттарымның бірі. Мысалы, Нейм-рулетка: рейтингі, рефералдары және Stars арқылы сатып алулары бар Telegram ішіндегі ойын.",
      "Yes, it is one of my main directions. For example, Name Roulette: a game inside Telegram with a leaderboard, referrals and purchases with Stars."
    ],
    "Как с вами связаться?": ["Сізбен қалай байланысуға болады?", "How can I contact you?"],
    "Проще всего написать в Telegram: @ddwwks или в WhatsApp: +7 775 121 32 71. Можно также пройти квиз, и я получу готовое описание вашей задачи.": [
      "Ең оңайы Telegram-ға жазу: @ddwwks немесе WhatsApp-қа: +7 775 121 32 71. Сондай-ақ квизден өтуге болады, сонда мен тапсырманың дайын сипаттамасын аламын.",
      "The easiest way is Telegram: @ddwwks or WhatsApp: +7 775 121 32 71. You can also take the quiz and I will get a ready description of your task."
    ],

    /* ---------- услуги ---------- */
    "Что я могу сделать для вас": ["Мен сіз үшін не істей аламын", "What I can do for you"],
    "Беру проект целиком: придумываю структуру, рисую дизайн, пишу код и запускаю. В карточках указаны минимальная цена и срок, точную стоимость называю после обсуждения.": [
      "Жобаны толық алам: құрылымын ойлап табамын, дизайнын салам, код жазамын және іске қосамын. Карточкаларда ең төменгі баға мен мерзім көрсетілген, нақты құнын талқылағаннан кейін айтамын.",
      "I take the project end to end: I plan the structure, design it, write the code and launch it. Cards show the minimum price and timing; I give the exact cost after we talk."
    ],
    "Как проходит работа": ["Жұмыс қалай жүреді", "How the work goes"],
    "Пять шагов от первого сообщения до запуска.": ["Алғашқы хабарламадан іске қосуға дейінгі бес қадам.", "Five steps from the first message to launch."],
    "Бриф": ["Бриф", "Brief"],
    "Вы описываете задачу, я задаю уточняющие вопросы.": ["Сіз міндетті сипаттайсыз, мен нақтылайтын сұрақтар қоям.", "You describe the task, I ask clarifying questions."],
    "Структура": ["Құрылым", "Structure"],
    "Согласуем, какие страницы и блоки нужны.": ["Қандай беттер мен блоктар керек екенін келісеміз.", "We agree on which pages and blocks are needed."],
    "Дизайн": ["Дизайн", "Design"],
    "Показываю стиль и анимации, вносим правки.": ["Стиль мен анимацияларды көрсетемін, түзетулер енгіземіз.", "I show the style and animations, we make edits."],
    "Разработка": ["Әзірлеу", "Development"],
    "Пишу код и проверяю сайт на телефоне и компьютере.": ["Код жазамын және сайтты телефон мен компьютерде тексеремін.", "I write the code and test the site on phone and desktop."],
    "Запуск": ["Іске қосу", "Launch"],
    "Размещаю сайт, подключаю домен и передаю вам доступ.": ["Сайтты орналастырамын, доменді қосамын және қолжетімділікті тапсырамын.", "I publish the site, connect the domain and hand over access."],

    "Одностраничный лендинг": ["Бір беттік лендинг", "One-page landing"],
    "Для запуска услуги, акции или продукта. Ведёт посетителя к заявке.": ["Қызметті, акцияны немесе өнімді іске қосуға арналған. Келушіні өтінімге жетелейді.", "For launching a service, promotion or product. Leads the visitor to a request."],
    "Многостраничный сайт": ["Көпбетті сайт", "Multi-page website"],
    "Полноценный сайт компании с несколькими разделами. Вызывает доверие у клиентов.": ["Бірнеше бөлімі бар компанияның толыққанды сайты. Клиенттерде сенім тудырады.", "A full company website with several sections. Builds trust with clients."],
    "Сайт-визитка": ["Визитка-сайт", "Business card site"],
    "Компактное онлайн-представительство для специалиста или малого бизнеса.": ["Маманға немесе шағын бизнеске арналған шағын онлайн-өкілдік.", "A compact online presence for a specialist or small business."],
    "Корпоративный сайт": ["Корпоративтік сайт", "Corporate website"],
    "Представительный сайт компании: услуги, команда, проекты и контакты в одной системе.": ["Компанияның көрнекті сайты: қызметтер, команда, жобалар және байланыстар бір жүйеде.", "A representative company site: services, team, projects and contacts in one system."],
    "Telegram Mini App": ["Telegram Mini App", "Telegram Mini App"],
    "Игра или приложение, которое открывается прямо в Telegram, с рейтингом и оплатой через Stars.": ["Telegram ішінде тікелей ашылатын ойын немесе қосымша, рейтингпен және Stars арқылы төлеммен.", "A game or app that opens right inside Telegram, with a leaderboard and payments via Stars."],
    "Плагин для Minecraft": ["Minecraft плагині", "Minecraft plugin"],
    "Плагин под ваш сервер на Paper: вход, модерация, проверки и другие механики.": ["Paper-дегі сервериңізге арналған плагин: кіру, модерация, тексерулер және басқа механикалар.", "A plugin for your Paper server: login, moderation, checks and other mechanics."],
    "Доработка проекта": ["Жобаны жетілдіру", "Project rework"],
    "Исправлю ошибки, обновлю дизайн или добавлю новые функции в готовый сайт, приложение или бота.": ["Қателерді түзетемін, дизайнды жаңартамын немесе дайын сайтқа, қосымшаға не ботқа жаңа функциялар қосамын.", "I fix bugs, refresh the design or add new features to an existing site, app or bot."],
    "срок обсуждается": ["мерзімі талқыланады", "timing to be discussed"],
    "Не знаете, что выбрать?": ["Нені таңдарыңызды білмейсіз бе?", "Not sure what to choose?"],
    "Ответьте на несколько вопросов, и по ответам я подскажу подходящий формат.": ["Бірнеше сұраққа жауап беріңіз, жауаптарыңыз бойынша қолайлы форматты ұсынамын.", "Answer a few questions and I will suggest a suitable format."],
    "Пройти квиз": ["Квизден өту", "Take the quiz"],

    /* ---------- портфолио и кейсы ---------- */
    "Сайты, игры, боты и плагины. Нажмите на любую работу, чтобы открыть кейс с описанием, технологиями и ссылками.": [
      "Сайттар, ойындар, боттар және плагиндер. Сипаттамасы, технологиялары және сілтемелері бар кейсті ашу үшін кез келген жұмысты басыңыз.",
      "Websites, games, bots and plugins. Click any project to open the case with a description, technologies and links."
    ],
    "Все": ["Барлығы", "All"],
    "Сайты": ["Сайттар", "Websites"],
    "Telegram": ["Telegram", "Telegram"],
    "Minecraft": ["Minecraft", "Minecraft"],
    "Нейм-рулетка": ["Нейм-рулетка", "Name Roulette"],
    "Telegram Mini App · игра": ["Telegram Mini App · ойын", "Telegram Mini App · game"],
    "Игра в Telegram: крутишь рулетку и собираешь юзернеймы.": ["Telegram-дағы ойын: рулетканы айналдырып, юзернеймдер жинайсың.", "A Telegram game: spin the roulette and collect usernames."],
    "Telegram Mini App с рулеткой юзернеймов. В игре есть рейтинг игроков, реферальная система, мини-игра «Минное поле» и покупки за Telegram Stars. Прогресс сохраняется, серверная часть работает на Cloudflare Workers и D1.": [
      "Юзернейм рулеткасы бар Telegram Mini App. Ойында ойыншылар рейтингі, реферал жүйесі, «Минное поле» шағын ойыны және Telegram Stars арқылы сатып алулар бар. Прогресс сақталады, сервер бөлігі Cloudflare Workers және D1 негізінде жұмыс істейді.",
      "A Telegram Mini App with a username roulette. The game has a player leaderboard, a referral system, a Minesweeper mini-game and purchases with Telegram Stars. Progress is saved, and the server side runs on Cloudflare Workers and D1."
    ],
    "Рейтинг игроков": ["Ойыншылар рейтингі", "Player leaderboard"],
    "Реферальная система": ["Реферал жүйесі", "Referral system"],
    "Мини-игра «Минное поле»": ["«Минное поле» шағын ойыны", "“Minefield” mini-game"],
    "Покупки за Telegram Stars": ["Telegram Stars арқылы сатып алулар", "Purchases with Telegram Stars"],
    "Сохранение прогресса на Cloudflare Workers и D1": ["Cloudflare Workers және D1 арқылы прогресті сақтау", "Progress saved with Cloudflare Workers and D1"],
    "Открыть игру": ["Ойынды ашу", "Open the game"],
    "Бот в Telegram": ["Telegram-дағы бот", "Telegram bot"],
    "Канал игры": ["Ойын арнасы", "Game channel"],

    "WardenSMP": ["WardenSMP", "WardenSMP"],
    "Сайт и магазин сервера": ["Сервердің сайты мен дүкені", "Server website and store"],
    "Сайт Minecraft-сервера с магазином, мониторингом и паспортом игрока.": ["Дүкені, мониторингі және ойыншы паспорты бар Minecraft-сервер сайты.", "A Minecraft server website with a store, monitoring and a player passport."],
    "Сайт сервера WardenSMP: каталог привилегий с корзиной и пересчётом валют, страница мониторинга онлайна, правила, программа для медиа и паспорт игрока с рейтингом по времени игры и балансу. Дизайн в фирменном синем цвете сервера, страницы переходят друг в друга плавно.": [
      "WardenSMP сервері сайты: себеті мен валюта қайта есептеуі бар привилегиялар каталогы, онлайн мониторинг беті, ережелер, медиа бағдарламасы және ойын уақыты мен баланс бойынша рейтингі бар ойыншы паспорты. Дизайн сервердің фирмалық көк түсінде, беттер бір-біріне баяу ауысады.",
      "The WardenSMP server website: a privilege catalog with a cart and currency conversion, an online monitoring page, rules, a media program and a player passport with rankings by playtime and balance. The design uses the server's signature blue, and pages transition smoothly."
    ],
    "Каталог привилегий с корзиной и пересчётом валют": ["Себеті мен валюта қайта есептеуі бар привилегиялар каталогы", "Privilege catalog with a cart and currency conversion"],
    "Страница мониторинга онлайна": ["Онлайн мониторинг беті", "Online monitoring page"],
    "Правила и программа для медиа": ["Ережелер және медиа бағдарламасы", "Rules and a media program"],
    "Паспорт игрока с рейтингом по времени игры и балансу": ["Ойын уақыты мен баланс бойынша рейтингі бар ойыншы паспорты", "Player passport with rankings by playtime and balance"],
    "Открыть сайт": ["Сайтты ашу", "Open the site"],
    "Код на GitHub": ["GitHub-тағы код", "Code on GitHub"],
    "Telegram сервера": ["Сервер Telegram-ы", "Server Telegram"],

    "Study On": ["Study On", "Study On"],
    "Сайт языковой школы": ["Тіл мектебінің сайты", "Language school website"],
    "Сайт школы английского в Астане, заявки уходят в WhatsApp.": ["Астанадағы ағылшын тілі мектебінің сайты, өтінімдер WhatsApp-қа түседі.", "Website of an English school in Astana, requests go to WhatsApp."],
    "Сайт школы английского языка в Астане на чистых HTML, CSS и JavaScript. Данные взяты из карточки школы в 2ГИС, оформление повторяет стиль школы, заявки с сайта отправляются прямо в WhatsApp.": [
      "Астанадағы ағылшын тілі мектебінің таза HTML, CSS және JavaScript-те жасалған сайты. Деректер 2ГИС-тегі мектеп карточкасынан алынған, безендіру мектеп стилін қайталайды, сайттан өтінімдер тікелей WhatsApp-қа жіберіледі.",
      "A website for an English language school in Astana in plain HTML, CSS and JavaScript. The data comes from the school's 2GIS listing, the design follows the school's style, and requests from the site go straight to WhatsApp."
    ],
    "Данные из карточки школы в 2ГИС": ["Деректер 2ГИС-тегі мектеп карточкасынан", "Data from the school's 2GIS listing"],
    "Оформление в стиле школы": ["Мектеп стиліндегі безендіру", "Design in the school's style"],
    "Заявки с сайта уходят прямо в WhatsApp": ["Сайттан өтінімдер тікелей WhatsApp-қа түседі", "Requests from the site go straight to WhatsApp"],

    "Kotiko": ["Kotiko", "Kotiko"],
    "DDX Planner": ["DDX Planner", "DDX Planner"],
    "DDX AI": ["DDX AI", "DDX AI"],
    "Приложение для iPhone": ["iPhone қолданбасы", "iPhone app"],
    "ИИ-чат": ["ЖИ-чат", "AI chat"],
    "Приложения": ["Қолданбалар", "Apps"],
    "Тёмный планировщик для iPhone: задачи, заметки, привычки и ИИ-помощник.": ["iPhone-ға арналған қараңғы жоспарлаушы: тапсырмалар, жазбалар, әдеттер және ЖИ-көмекші.", "A dark planner for iPhone: tasks, notes, habits and an AI assistant."],
    "Личный ИИ-помощник: чат с историей, проектами, фото и голосом.": ["Жеке ЖИ-көмекші: тарихы, жобалары, фотосы және дауысы бар чат.", "A personal AI assistant: a chat with history, projects, photos and voice."],
    "DDX Planner — приложение-планировщик для iPhone, которое ставится на экран «Домой» без App Store. Задачи с датами и напоминаниями, заметки, привычки, финансы и фокус-режим, голосовой ввод и ИИ-помощник, который отвечает на вопросы и узнаёт еду по фото. Есть аккаунты, тарифы Pro, Max и Ultra и работа без интернета.": ["DDX Planner — «Үй» экранына App Store-сыз орнатылатын iPhone жоспарлау қолданбасы. Күндері мен ескертулері бар тапсырмалар, жазбалар, әдеттер, қаржы және фокус-режим, дауыспен енгізу және сұрақтарға жауап беріп, тамақты фото бойынша танитын ЖИ-көмекші. Аккаунттар, Pro, Max және Ultra тарифтері мен интернетсіз жұмыс бар.", "DDX Planner is a planner app for iPhone that is added to the Home Screen without the App Store. It has tasks with dates and reminders, notes, habits, finances and a focus mode, voice input and an AI assistant that answers questions and recognizes food from photos. It has accounts, Pro, Max and Ultra plans and works offline."],
    "DDX AI — личный ИИ-ассистент в виде приложения и Telegram Mini App. Чат на любые вопросы с форматированием ответов, фото и файлами, голосовым вводом и поиском. Есть история чатов, проекты-папки, персонализация, несколько моделей, тарифы и версия для компьютера.": ["DDX AI — қолданба және Telegram Mini App түріндегі жеке ЖИ-көмекші. Кез келген сұраққа арналған чат: жауаптарды пішімдеу, фото мен файлдар, дауыспен енгізу және іздеу. Чат тарихы, жоба-қалталар, жекелендіру, бірнеше модель, тарифтер және компьютер нұсқасы бар.", "DDX AI is a personal AI assistant as an app and a Telegram Mini App. A chat for any question with formatted answers, photos and files, voice input and search. It has chat history, project folders, personalization, several models, plans and a desktop version."],
    "Задачи, заметки, привычки, финансы и фокус-режим в одном приложении": ["Тапсырмалар, жазбалар, әдеттер, қаржы және фокус-режим бір қолданбада", "Tasks, notes, habits, finances and a focus mode in one app"],
    "Голосовой ввод, напоминания и ИИ-помощник DDX AI": ["Дауыспен енгізу, ескертулер және DDX AI көмекшісі", "Voice input, reminders and the DDX AI assistant"],
    "Аккаунты, тарифы Pro, Max и Ultra, работа без интернета": ["Аккаунттар, Pro, Max және Ultra тарифтері, интернетсіз жұмыс", "Accounts, Pro, Max and Ultra plans, offline use"],
    "Чат с фото, файлами, голосом и поиском по интернету": ["Фото, файлдар, дауыс және интернеттен іздеуі бар чат", "A chat with photos, files, voice and web search"],
    "История чатов, проекты-папки, закрепление и персонализация": ["Чат тарихы, жоба-қалталар, бекіту және жекелендіру", "Chat history, project folders, pinning and personalization"],
    "Три модели на выбор, тарифы, версия для телефона и компьютера": ["Таңдауға үш модель, тарифтер, телефон және компьютер нұсқасы", "Three models to choose from, plans, a phone and desktop version"],
    "Шаурма Ашота": ["Шаурма Ашота", "Shawarma Ashota"],
    "Сайт доставки еды": ["Тамақ жеткізу сайты", "Food delivery website"],
    "Сайт шаурмечной в Астане: меню, конструктор шаурмы и заказ через WhatsApp.": ["Астанадағы шаурмахана сайты: мәзір, шаурма конструкторы және WhatsApp арқылы тапсырыс.", "A shawarma shop website in Astana: menu, a build-your-own constructor and ordering via WhatsApp."],
    "Сайт шаурмечной «Шаурма Ашота» в Астане на чистых HTML, CSS и JavaScript. Яркий главный экран, меню с фильтрами, конструктор, где гость собирает шаурму сам, корзина и оформление заказа в WhatsApp, условия доставки и контакты. Статус «открыто / закрыто» считается автоматически по часам работы.": ["Астанадағы «Шаурма Ашота» шаурмаханасының таза HTML, CSS және JavaScript-те жасалған сайты. Жарқын басты экран, сүзгілері бар мәзір, қонақ шаурманы өзі құрастыратын конструктор, себет және WhatsApp-қа тапсырыс беру, жеткізу шарттары мен байланыстар. «Ашық / жабық» күйі жұмыс уақытына қарай автоматты түрде есептеледі.", "Website of the Shawarma Ashota shop in Astana, built with plain HTML, CSS and JavaScript. It has a bright main screen, a menu with filters, a constructor where guests build their own shawarma, a cart and ordering via WhatsApp, delivery terms and contacts. The open / closed status is calculated automatically from the opening hours."],
    "Меню с фильтрами и конструктор «Собери свою» с подсчётом цены": ["Сүзгілері бар мәзір және баға есептелетін «Собери свою» конструкторы", "A menu with filters and a build-your-own constructor that calculates the price"],
    "Корзина и оформление заказа через WhatsApp": ["Себет және WhatsApp арқылы тапсырыс беру", "A cart and checkout via WhatsApp"],
    "Статус «открыто / закрыто», условия доставки и контакты": ["«Ашық / жабық» күйі, жеткізу шарттары және байланыстар", "Open / closed status, delivery terms and contacts"],
    "Dinastiya Stom Clinic": ["Dinastiya Stom Clinic", "Dinastiya Stom Clinic"],
    "Сайт стоматологии": ["Стоматология сайты", "Dental clinic website"],
    "Сайт стоматологии в Астане: услуги, цены, рассрочка и запись на приём.": ["Астанадағы стоматология сайты: қызметтер, бағалар, бөліп төлеу және қабылдауға жазылу.", "A dental clinic website in Astana: services, prices, installments and booking."],
    "Сайт стоматологической клиники Dinastiya Stom Clinic в Астане на чистых HTML, CSS и JavaScript. Отдельные страницы для имплантации, брекетов, лечения, ортопедии и детской стоматологии, блок с ценами и рассрочкой, команда врачей, отзывы и быстрая запись на приём. Оформление выдержано в золотых тонах логотипа клиники.": ["Астанадағы Dinastiya Stom Clinic стоматологиялық клиникасының таза HTML, CSS және JavaScript-те жасалған сайты. Имплантация, брекеттер, емдеу, ортопедия және балалар стоматологиясына арналған бөлек беттер, бағалар мен бөліп төлеу блогы, дәрігерлер командасы, пікірлер және қабылдауға жылдам жазылу. Дизайн клиника логотипінің алтын түстерінде жасалған.", "Website of the Dinastiya Stom Clinic dental clinic in Astana, built with plain HTML, CSS and JavaScript. It has separate pages for implants, braces, treatment, prosthetics and children's dentistry, a block with prices and installments, the team of doctors, reviews and quick booking. The design follows the golden tones of the clinic logo."],
    "Страницы услуг: имплантация, брекеты, лечение, ортопедия, детская стоматология": ["Қызмет беттері: имплантация, брекеттер, емдеу, ортопедия, балалар стоматологиясы", "Service pages: implants, braces, treatment, prosthetics, children's dentistry"],
    "Цены, рассрочка 0-0-24, команда и отзывы с оценками из 2ГИС": ["Бағалар, 0-0-24 бөліп төлеу, команда және 2ГИС бағалары бар пікірлер", "Prices, 0-0-24 installments, the team and reviews with 2GIS ratings"],
    "Запись на приём и быстрая связь через WhatsApp": ["Қабылдауға жазылу және WhatsApp арқылы жылдам байланыс", "Booking an appointment and quick contact via WhatsApp"],
    "Сайт котокафе": ["Котокафе сайты", "Cat cafe website"],
    "Сайт котокафе в Астане.": ["Астанадағы котокафе сайты.", "A website for a cat cafe in Astana."],
    "Сайт котокафе Kotiko в Астане на чистых HTML, CSS и JavaScript.": ["Астанадағы Kotiko котокафесінің таза HTML, CSS және JavaScript-те жасалған сайты.", "A website for the Kotiko cat cafe in Astana in plain HTML, CSS and JavaScript."],
    "Сайт на чистых HTML, CSS и JavaScript": ["Таза HTML, CSS және JavaScript-те жасалған сайт", "A site in plain HTML, CSS and JavaScript"],
    "Работает на собственном домене": ["Өз доменінде жұмыс істейді", "Runs on its own domain"],

    "W-плагины": ["W-плагиндер", "W-plugins"],
    "Плагины для Minecraft": ["Minecraft плагиндері", "Minecraft plugins"],
    "Набор плагинов для Paper: вход, модерация, проверка на читы.": ["Paper-ге арналған плагиндер жиынтығы: кіру, модерация, чит тексеруі.", "A set of plugins for Paper: login, moderation, cheat checks."],
    "Свои плагины для Paper в едином стиле сообщений. W-Auth отвечает за регистрацию и вход, W-ModerCommands даёт ban, mute и warn с историей наказаний в SQLite, W-Check запускает ручную проверку игрока на читы с таймером до автобана.": [
      "Хабарламалардың бірыңғай стиліндегі Paper-ге арналған өз плагиндерім. W-Auth тіркелу мен кіруге жауап береді, W-ModerCommands SQLite-тағы жаза тарихымен ban, mute және warn береді, W-Check ойыншыны чит бойынша қолмен тексеруді автобанға дейінгі таймермен іске қосады.",
      "My own plugins for Paper with a consistent message style. W-Auth handles registration and login, W-ModerCommands provides ban, mute and warn with a punishment history in SQLite, W-Check starts a manual cheat check on a player with a timer before an automatic ban."
    ],
    "W-Auth: регистрация и вход": ["W-Auth: тіркелу және кіру", "W-Auth: registration and login"],
    "W-ModerCommands: ban, mute и warn с историей в SQLite": ["W-ModerCommands: SQLite-тағы тарихы бар ban, mute және warn", "W-ModerCommands: ban, mute and warn with a history in SQLite"],
    "W-Check: ручная проверка на читы с таймером до автобана": ["W-Check: автобанға дейінгі таймері бар чит бойынша қолмен тексеру", "W-Check: manual cheat check with a timer before an automatic ban"],

    "Что внутри": ["Ішінде не бар", "What is inside"],
    "Технологии": ["Технологиялар", "Technologies"],
    "Год": ["Жыл", "Year"],
    "Предыдущий проект": ["Алдыңғы жоба", "Previous project"],
    "Нужен похожий проект?": ["Осыған ұқсас жоба керек пе?", "Need a similar project?"],
    "Расскажите о задаче, и я предложу подходящий формат и следующий шаг.": ["Міндет туралы айтыңыз, мен қолайлы формат пен келесі қадамды ұсынамын.", "Tell me about your task and I will suggest a suitable format and the next step."],
    "Тип проекта": ["Жоба түрі", "Project type"],
    "Ссылки": ["Сілтемелер", "Links"],
    "Публичной ссылки пока нет.": ["Ашық сілтеме әзірге жоқ.", "There is no public link yet."],
    "Следующий проект": ["Келесі жоба", "Next project"],
    "Открыть проект": ["Жобаны ашу", "Open project"],
    "Потрогать сайт": ["Сайтты қолмен көру", "Try the site"],
    "Это живой сайт: листай и нажимай": ["Бұл тірі сайт: айналдырып, басып көр", "This is the live site: scroll and tap"],
    "Закрыть": ["Жабу", "Close"],
    "Загрузка…": ["Жүктелуде…", "Loading…"],
    "Идеален для запуска продукта, акции или услуги. Конвертирует трафик в заявки.": ["Өнімді, акцияны немесе қызметті іске қосуға өте қолайлы. Трафикті өтінімдерге айналдырады.", "Perfect for launching a product, a promotion or a service. Turns traffic into leads."],
    "Компактное онлайн-представительство. Подходит для специалистов и малого бизнеса.": ["Ықшам онлайн-өкілдік. Мамандар мен шағын бизнеске жарайды.", "A compact online presence. Suits specialists and small businesses."],
    "Интернет-магазин": ["Интернет-дүкен", "Online store"],
    "Полноценный магазин с корзиной, оплатой и каталогом. Продажи онлайн 24/7.": ["Себеті, төлемі және каталогы бар толыққанды дүкен. Онлайн сату 24/7.", "A full store with a cart, payments and a catalog. Online sales 24/7."],
    "Представительный сайт компании: услуги, команда, кейсы и контакты в одной системе.": ["Компанияның көрнекті сайты: қызметтер, команда, кейстер және байланыстар бір жүйеде.", "A company's showcase site: services, team, cases and contacts in one system."],
    "Tasqly": ["Tasqly", "Tasqly"],
    "Рабочее пространство": ["Жұмыс кеңістігі", "Workspace"],
    "Рабочее пространство для команд: задачи, заметки, чат, диск и ИИ.": ["Командаға арналған жұмыс кеңістігі: тапсырмалар, жазбалар, чат, диск және ЖИ.", "A workspace for teams: tasks, notes, chat, disk and AI."],
    "Tasqly — рабочее пространство для команд в духе ClickUp: проекты трёх типов, задачи, заметки, чат, диск, трекер времени, календарь и ИИ-помощник в боковой панели. Строгий монохромный дизайн с одним лаймовым акцентом, лендинг с тарифами и личный кабинет.": ["Tasqly — ClickUp рухындағы командаға арналған жұмыс кеңістігі: үш түрлі жоба, тапсырмалар, жазбалар, чат, диск, уақыт трекері, күнтізбе және бүйір панельдегі ЖИ-көмекші. Бір лайм акцентті қатаң монохром дизайн, тарифтері бар лендинг және жеке кабинет.", "Tasqly is a ClickUp-style workspace for teams: three project types, tasks, notes, chat, disk, a time tracker, a calendar and an AI assistant in a side panel. A strict monochrome design with a single lime accent, a landing page with pricing and a personal dashboard."],
    "Задачи, проекты, заметки, чат и диск в одном месте": ["Тапсырмалар, жобалар, жазбалар, чат және диск бір жерде", "Tasks, projects, notes, chat and disk in one place"],
    "Трекер времени, календарь и ИИ-помощник сбоку": ["Уақыт трекері, күнтізбе және бүйірдегі ЖИ-көмекші", "Time tracker, calendar and an AI assistant on the side"],
    "Строгий монохром с одним лаймовым акцентом": ["Бір лайм акцентті қатаң монохром", "Strict monochrome with a single lime accent"],
    "Поддержка после сдачи": ["Тапсырудан кейінгі қолдау", "Support after handover"],
    "Сроки — это обещание": ["Мерзім — бұл уәде", "Deadlines are a promise"],
    "Результат, не процесс": ["Нәтиже, процесс емес", "Results, not process"],
    "Честность в деталях": ["Әр детальда адалдық", "Honesty in the details"],
    "Сайт, который продаёт": ["Сатып беретін сайт", "A site that sells"],
    "Без шаблонов": ["Шаблонсыз", "No templates"],
    "Удобно на телефоне": ["Телефонда ыңғайлы", "Easy on a phone"],
    "Анимации без лишнего": ["Артық нәрсесіз анимация", "Animations without excess"],
    "Преимущества": ["Артықшылықтар", "Advantages"],
    "Мои принципы": ["Менің қағидаларым", "My principles"],
    "Плюсы": ["Плюстер", "Pros"],
    "Принципы": ["Қағидалар", "Principles"],
    "Быстрая разработка": ["Жылдам әзірлеу", "Fast development"],
    "Лендинг от 5 дней, многостраничный — от 7. Без затяжных сроков.": ["Лендинг 5 күннен, көпбетті сайт 7 күннен. Созбай.", "A landing page from 5 days, a multi-page site from 7. No dragging on."],
    "Фокус на конверсию": ["Конверсияға бағытталған", "Focus on conversion"],
    "Каждый элемент работает на то, чтобы посетитель стал клиентом.": ["Әрбір элемент келушінің клиентке айналуына жұмыс істейді.", "Every element works to turn a visitor into a client."],
    "100% адаптив": ["100% адаптив", "100% responsive"],
    "Все сайты идеально выглядят на телефоне, планшете и компьютере.": ["Барлық сайттар телефонда, планшетте және компьютерде тамаша көрінеді.", "All sites look right on a phone, a tablet and a computer."],
    "Сроки — это обещание": ["Мерзім — бұл уәде", "Deadlines are a promise"],
    "Если договорились на дату — сдам в срок. Никаких «ещё пару дней».": ["Күнге келіссек — уақытында тапсырамын. «Тағы бір-екі күн» болмайды.", "If we agree on a date, I deliver on it. No “just a couple more days”."],
    "Результат, не процесс": ["Нәтиже, процесс емес", "Results, not process"],
    "Сайт должен приносить заявки, а не просто красиво выглядеть.": ["Сайт тек әдемі көрінбей, өтінім әкелуі керек.", "A site should bring in leads, not just look good."],
    "Честность в деталях": ["Әр детальда адалдық", "Honesty in the details"],
    "Говорю о рисках заранее. Цена не растёт в процессе без причины.": ["Тәуекелдер туралы алдын ала айтамын. Баға себепсіз өспейді.", "I talk about risks up front. The price doesn't grow without a reason."],
    "Поддержка после сдачи": ["Тапсырудан кейінгі қолдау", "Support after handover"],
    "Помогаю разобраться с сайтом. Не исчезаю после оплаты.": ["Сайтты түсінуге көмектесемін. Төлемнен кейін жоғалмаймын.", "I help you get to grips with the site. I don't vanish after payment."],
    "Вы описываете задачу, я задаю уточняющие вопросы. Разбираем цели сайта, аудиторию и примеры, которые вам нравятся. Обычно хватает одного созвона или переписки в Telegram.": ["Тапсырманы сіз сипаттайсыз, мен нақтылау сұрақтарын қоямын. Сайттың мақсатын, аудиторияны және ұнайтын мысалдарды талқылаймыз. Әдетте бір қоңырау немесе Telegram-дағы жазысу жеткілікті.", "You describe the task and I ask follow-up questions. We go over the goals of the site, the audience and examples you like. One call or a chat in Telegram is usually enough."],
    "Согласуем, какие страницы и блоки нужны. Собираю схему сайта и текстовый каркас: вы видите скелет заранее и говорите, что добавить или убрать.": ["Қандай беттер мен блоктар керек екенін келісеміз. Сайт сызбасы мен мәтін қаңқасын жинаймын: сіз қаңқаны алдын ала көріп, нені қосу немесе алып тастауды айтасыз.", "We agree on which pages and blocks are needed. I build a site map and a text outline: you see the skeleton in advance and tell me what to add or remove."],
    "Показываю стиль и анимации, вносим правки. Вы смотрите живой макет на телефоне и компьютере, и мы дорабатываем детали, пока результат не понравится.": ["Стиль мен анимацияны көрсетемін, түзетулер енгіземіз. Сіз тірі макетті телефонда және компьютерде қарайсыз, нәтиже ұнағанша детальдарды жетілдіреміз.", "I show the style and animations and we make edits. You look at a live mockup on a phone and a computer, and we refine the details until you like the result."],
    "Пишу код и проверяю сайт на телефоне и компьютере. Подключаю формы, заявки в Telegram или WhatsApp, ускоряю загрузку и настраиваю основы для поиска.": ["Код жазамын және сайтты телефонда мен компьютерде тексеремін. Формаларды, Telegram немесе WhatsApp-қа өтінімдерді қосамын, жүктелуді жылдамдатамын және іздеуге арналған негіздерді баптаймын.", "I write the code and test the site on a phone and a computer. I connect forms and leads to Telegram or WhatsApp, speed up loading and set up the search basics."],
    "Размещаю сайт, подключаю домен и передаю вам доступ. Объясняю, как всё устроено, и остаюсь на связи, если понадобится правка или помощь после сдачи.": ["Сайтты орналастырамын, доменді қосамын және сізге қолжетімділік беремін. Бәрі қалай жұмыс істейтінін түсіндіремін және түзету немесе тапсырудан кейінгі көмек керек болса, байланыста боламын.", "I publish the site, connect the domain and give you access. I explain how everything works and stay in touch in case you need a fix or help after handover."],
    "Есть задача? Давайте обсудим": ["Тапсырма бар ма? Талқылайық", "Got a task? Let's talk"],
    "Связаться": ["Байланысу", "Get in touch"],
    "Сайты, которые приводят клиентов": ["Клиент әкелетін сайттар", "Websites that bring in clients"],
    "Каждый проект открывается в живом окне. У каждого указан вес первой загрузки.": ["Әр жоба тірі терезеде ашылады. Әрқайсысында алғашқы жүктеу салмағы көрсетілген.", "Every project opens in a live window. Each one lists its first-load weight."],
    "Выберите формат под задачу: в строке указаны цена и сроки. Если сомневаетесь, квиз поможет определиться.": ["Тапсырмаға формат таңдаңыз: жолда баға мен мерзім көрсетілген. Күмәніңіз болса, квиз таңдауға көмектеседі.", "Pick a format for your task: each row shows the price and timeline. If you are unsure, the quiz will help."],
    "Беру проект целиком: придумываю структуру, рисую дизайн, пишу код и запускаю. В строках указаны минимальная цена и срок, точную стоимость называю после обсуждения.": ["Жобаны толық аламын: құрылымын ойлап табамын, дизайнын сызамын, код жазамын және іске қосамын. Жолдарда ең төмен баға мен мерзім көрсетілген, нақты құнын талқылаудан кейін айтамын.", "I take the project end to end: I plan the structure, design it, write the code and launch it. Rows show the minimum price and timeline; I quote the exact cost after we talk."],
    "Напишите в Telegram или WhatsApp либо ответьте на несколько вопросов в квизе. Я получу готовое описание проекта и отвечу по делу.": ["Telegram немесе WhatsApp-қа жазыңыз не квизде бірнеше сұраққа жауап беріңіз. Мен дайын жоба сипаттамасын алып, нақты жауап беремін.", "Message me on Telegram or WhatsApp, or answer a few questions in the quiz. I will get a ready project brief and reply to the point."],
    "Сайты, Telegram Mini App, боты": ["Сайттар, Telegram Mini App, боттар", "Websites, Telegram Mini Apps, bots"],
    "КБ": ["КБ", "KB"],
    "Проекты": ["Жобалар", "Projects"],
    "Экран живой: листайте и нажимайте. Рамку можно потянуть.": ["Экран тірі: айналдырып, басып көріңіз. Жақтауды тартуға болады.", "The screen is live: scroll and click. You can drag the frame."],
    "Вес первой загрузки": ["Алғашқы жүктеу салмағы", "First-load weight"],
    "Запросов": ["Сұраныстар", "Requests"],
    "Стек": ["Стек", "Stack"],
    "Открыть кейс": ["Кейсті ашу", "Open case"],
    "проектов": ["жоба", "projects"],
    "Паспорт проекта": ["Жоба паспорты", "Project passport"],
    "Тип": ["Түрі", "Type"],
    "Адаптив": ["Адаптив", "Responsive"],
    "Телефон, планшет, компьютер": ["Телефон, планшет, компьютер", "Phone, tablet, computer"],
    "Другие проекты": ["Басқа жобалар", "Other projects"],
    "Нажмите на любую работу, чтобы открыть кейс: описание, стек и живой сайт.": ["Кейсті ашу үшін кез келген жұмысты басыңыз: сипаттама, стек және тірі сайт.", "Click any project to open the case: description, stack and the live site."],
    "Два формата работы": ["Жұмыстың екі форматы", "Two ways to work"],
    "Сайт приводит клиентов, приложение удерживает их. Можно взять что-то одно или оба сразу.": ["Сайт клиент әкеледі, қосымша оларды ұстап тұрады. Біреуін немесе екеуін бірден алуға болады.", "A website brings clients, an app keeps them. Take one or both."],
    "Сайты и PWA-приложения": ["Сайттар мен PWA-қосымшалар", "Websites and PWA apps"],
    "Сайты и PWA-приложения на чистом коде": ["Таза кодта жазылған сайттар мен PWA-қосымшалар", "Websites and PWA apps in clean code"],
    "Делаю сайты для бизнеса и приложения, которые ставятся на экран телефона и открываются как обычные. Дизайн и разработка у одного человека, без конструкторов и шаблонов.": ["Бизнеске арналған сайттар мен телефон экранына орнатылатын, әдеттегідей ашылатын қосымшалар жасаймын. Дизайн мен әзірлеу бір адамда, конструкторларсыз және үлгілерсіз.", "I build websites for businesses and apps that install on the phone screen and open like regular ones. Design and development by one person, no builders or templates."],
    "Визитки, лендинги, многостраничные и корпоративные сайты, интернет-магазины. Быстро открываются, хорошо выглядят на телефоне и собирают заявки.": ["Визиткалар, лендингтер, көп беттік және корпоративтік сайттар, интернет-дүкендер. Тез ашылады, телефонда жақсы көрінеді және өтінімдер жинайды.", "Business cards, landing pages, multi-page and corporate sites, online stores. They load fast, look good on a phone and collect leads."],
    "Приложение, которое ставится на главный экран и открывается как обычное: без магазина приложений, с офлайн-режимом и уведомлениями.": ["Басты экранға орнатылатын және әдеттегідей ашылатын қосымша: қосымшалар дүкенінсіз, офлайн режимімен және хабарландырулармен.", "An app that installs on the home screen and opens like a regular one: no app store, with offline mode and notifications."],
    "PWA-приложения": ["PWA-қосымшалар", "PWA apps"],
    "Заявки в Telegram и WhatsApp": ["Telegram және WhatsApp-қа өтінімдер", "Leads to Telegram and WhatsApp"],
    "Основы для поиска": ["Іздеу жүйесіне арналған негіздер", "Search basics"],
    "Размещение и домен": ["Орналастыру және домен", "Hosting and domain"],
    "Установка на экран": ["Экранға орнату", "Install on the screen"],
    "Работает без сети": ["Желісіз жұмыс істейді", "Works offline"],
    "Уведомления": ["Хабарландырулар", "Notifications"],
    "Один код для iPhone, Android и компьютера": ["iPhone, Android және компьютерге арналған бір код", "One codebase for iPhone, Android and desktop"],
    "Все варианты": ["Барлық нұсқалар", "All options"],
    "Что даёт PWA": ["PWA не береді", "What PWA gives you"],
    "Один код вместо трёх приложений: сайт, который ведёт себя как приложение.": ["Үш қосымша орнына бір код: қосымшадай әрекет ететін сайт.", "One codebase instead of three apps: a website that behaves like an app."],
    "Устанавливается": ["Орнатылады", "Installs"],
    "Иконка на главном экране, без App Store и Google Play.": ["Басты экрандағы белгіше, App Store және Google Play-сіз.", "An icon on the home screen, no App Store or Google Play."],
    "Нужные данные хранятся на телефоне, интерфейс открывается даже без интернета.": ["Қажетті деректер телефонда сақталады, интерфейс интернетсіз де ашылады.", "Needed data is stored on the phone, the interface opens even without internet."],
    "Присылает уведомления": ["Хабарландыру жібереді", "Sends notifications"],
    "Напоминания и новости клиентам. На iPhone работают после установки на экран.": ["Клиенттерге еске салулар мен жаңалықтар. iPhone-да экранға орнатқаннан кейін жұмыс істейді.", "Reminders and news for clients. On iPhone they work after installing to the home screen."],
    "Обновляется сразу": ["Бірден жаңарады", "Updates instantly"],
    "Правки появляются у всех без ожидания проверки в магазине.": ["Өзгерістер дүкеннің тексеруін күтпей, бәрінде бірден шығады.", "Changes reach everyone without waiting for store review."],
    "Примерная стоимость за минуту": ["Шамамен құны бір минутта", "A rough price in a minute"],
    "Опишите, что нужно сделать. ИИ посчитает ориентир по моему прайсу. Точную цену назову после обсуждения.": ["Не істеу керегін сипаттаңыз. ЖИ менің прайсым бойынша бағдар есептейді. Нақты бағаны талқылаудан кейін айтамын.", "Describe what you need. AI will estimate a figure from my price list. I'll give the exact price after we talk."],
    "Что нужно сделать": ["Не істеу керек", "What do you need"],
    "Например: сайт для барбершопа с онлайн-записью и заявками в WhatsApp": ["Мысалы: онлайн-жазылуы және WhatsApp-қа өтінімдері бар барбершоп сайты", "For example: a barbershop site with online booking and WhatsApp requests"],
    "Лендинг для барбершопа с онлайн-записью": ["Онлайн-жазылуы бар барбершопқа лендинг", "Barbershop landing page with online booking"],
    "PWA-приложение для записи клиентов с уведомлениями": ["Хабарландыруы бар клиенттерді жазуға арналған PWA-қосымша", "PWA app for booking clients with notifications"],
    "Интернет-магазин с онлайн-оплатой": ["Онлайн-төлемі бар интернет-дүкен", "Online store with online payment"],
    "Оценить стоимость": ["Құнын бағалау", "Estimate the price"],
    "Опишите проект слева, и здесь появится ориентир по цене и срокам.": ["Жобаны сол жақта сипаттаңыз, мұнда баға мен мерзім бағдары шығады.", "Describe the project on the left and a price and time estimate will appear here."],
    "Опишите проект хотя бы в нескольких словах.": ["Жобаны кем дегенде бірнеше сөзбен сипаттаңыз.", "Describe the project in at least a few words."],
    "Я оцениваю только сайты и PWA-приложения. Опишите, что нужно сделать на сайте или в приложении.": ["Мен тек сайттар мен PWA-қосымшаларды бағалаймын. Сайтта немесе қосымшада не істеу керегін сипаттаңыз.", "I only estimate websites and PWA apps. Describe what you need on a site or in an app."],
    "Считаю…": ["Есептеп жатырмын…", "Calculating…"],
    "Ориентир": ["Бағдар", "Estimate"],
    "ориентир": ["бағдар", "estimate"],
    "Расчёт ИИ": ["ЖИ есебі", "AI estimate"],
    "Расчёт по прайсу": ["Прайс бойынша есеп", "Price list estimate"],
    "Срок": ["Мерзімі", "Time"],
    "Обсудить в Telegram": ["Telegram-да талқылау", "Discuss in Telegram"],
    "Здравствуйте! Хочу заказать:": ["Сәлеметсіз бе! Тапсырыс бергім келеді:", "Hello! I want to order:"],
    "Это ориентир, не оферта. Точную цену назову после обсуждения.": ["Бұл бағдар, оферта емес. Нақты бағаны талқылаудан кейін айтамын.", "This is an estimate, not an offer. I'll give the exact price after we talk."],
    "Цена зависит от объёма текстов, дизайна и числа страниц.": ["Баға мәтін көлеміне, дизайнға және беттер санына байланысты.", "The price depends on the amount of text, design and number of pages."],
    "Админ-панель": ["Админ-панель", "Admin panel"],
    "Анимации": ["Анимациялар", "Animations"],
    "Дополнительный язык": ["Қосымша тіл", "Extra language"],
    "ИИ-помощник": ["ЖИ-көмекші", "AI assistant"],
    "Личный кабинет и вход": ["Жеке кабинет және кіру", "Account and sign-in"],
    "Онлайн-запись": ["Онлайн-жазылу", "Online booking"],
    "Онлайн-оплата": ["Онлайн-төлем", "Online payment"],
    "Сложный дизайн и анимации": ["Күрделі дизайн және анимациялар", "Complex design and animations"],
    "SEO-основы": ["SEO негіздері", "SEO basics"],
    "Push-уведомления": ["Push-хабарландырулар", "Push notifications"],
    "PWA-приложение": ["PWA-қосымша", "PWA app"],
    "Интерфейс": ["Интерфейс", "Interface"],
    "Манифест и установка": ["Манифест және орнату", "Manifest and install"],
    "Офлайн-режим": ["Офлайн режим", "Offline mode"],
    "Домен и SSL": ["Домен және SSL", "Domain and SSL"],
    "Сервер и запуск": ["Сервер және іске қосу", "Server and launch"],
    "Варианты сайтов": ["Сайт нұсқалары", "Website options"],
    "Двенадцать форматов, из них собирается почти любой проект.": ["Он екі формат, олардан кез келген жоба құралады.", "Twelve formats that cover almost any project."],
    "Варианты PWA-приложений": ["PWA-қосымша нұсқалары", "PWA app options"],
    "Одиннадцать форматов. Всё работает на iPhone, Android и компьютере.": ["Он бір формат. Бәрі iPhone, Android және компьютерде жұмыс істейді.", "Eleven formats. All work on iPhone, Android and desktop."],
    "Не нашли свой формат? Опишите задачу, подберём или соберём из этих частей.": ["Өз форматыңызды таппадыңыз ба? Тапсырманы сипаттаңыз, таңдаймыз немесе осы бөліктерден құраймыз.", "Didn't find your format? Describe the task and we'll pick one or combine these parts."],
    "Лендинг": ["Лендинг", "Landing page"],
    "Сайт услуг": ["Қызметтер сайты", "Services site"],
    "Сайт-портфолио": ["Портфолио-сайт", "Portfolio site"],
    "Каталог или меню": ["Каталог немесе мәзір", "Catalog or menu"],
    "Сайт с онлайн-записью": ["Онлайн-жазылуы бар сайт", "Site with online booking"],
    "Сайт мероприятия или курса": ["Іс-шара немесе курс сайты", "Event or course site"],
    "Блог или база знаний": ["Блог немесе білім базасы", "Blog or knowledge base"],
    "Сайт школы или клуба": ["Мектеп немесе клуб сайты", "School or club site"],
    "Один экран о вас: услуги, контакты, карта": ["Сіз туралы бір экран: қызметтер, байланыс, карта", "One screen about you: services, contacts, map"],
    "Одна страница под услугу или акцию с формой заявки": ["Қызмет немесе акцияға арналған өтінім формасы бар бір бет", "One page for a service or promo with a request form"],
    "Страница на каждую услугу: клиника, салон, мастерская": ["Әр қызметке бір бет: клиника, салон, шеберхана", "A page for each service: clinic, salon, workshop"],
    "О компании, команда, кейсы, новости": ["Компания туралы, команда, кейстер, жаңалықтар", "About the company, team, cases, news"],
    "Несколько разделов с общей навигацией": ["Ортақ навигациясы бар бірнеше бөлім", "Several sections with shared navigation"],
    "Работы, процесс и отзывы для студий и фрилансеров": ["Студиялар мен фрилансерлерге арналған жұмыстар, процесс және пікірлер", "Work, process and reviews for studios and freelancers"],
    "Позиции с фильтрами и заказом в WhatsApp": ["Сүзгілері бар және WhatsApp-қа тапсырыс беретін позициялар", "Items with filters and ordering via WhatsApp"],
    "Корзина, оплата и личный кабинет покупателя": ["Себет, төлем және сатып алушының жеке кабинеті", "Cart, payment and a customer account"],
    "Выбор времени, подтверждение и напоминание": ["Уақытты таңдау, растау және еске салу", "Time selection, confirmation and a reminder"],
    "Программа, спикеры и регистрация": ["Бағдарлама, спикерлер және тіркеу", "Program, speakers and registration"],
    "Статьи, рубрики и поиск": ["Мақалалар, айдарлар және іздеу", "Articles, categories and search"],
    "Расписание, преподаватели и заявки": ["Кесте, оқытушылар және өтінімдер", "Schedule, teachers and requests"],
    "PWA-версия вашего сайта": ["Сайтыңыздың PWA-нұсқасы", "PWA version of your site"],
    "Установка на экран и офлайн-режим для готового сайта": ["Дайын сайтқа арналған экранға орнату және офлайн режим", "Install to screen and offline mode for an existing site"],
    "Приложение для записи": ["Жазылуға арналған қосымша", "Booking app"],
    "Клиенты записываются и получают напоминания": ["Клиенттер жазылады және еске салу алады", "Clients book and get reminders"],
    "Каталог и заказы": ["Каталог және тапсырыстар", "Catalog and orders"],
    "Меню, корзина и статус заказа": ["Мәзір, себет және тапсырыс күйі", "Menu, cart and order status"],
    "Личный кабинет": ["Жеке кабинет", "Account area"],
    "Вход, профиль и история": ["Кіру, профиль және тарих", "Sign-in, profile and history"],
    "Задачи, заметки и чат, как в Tasqly": ["Tasqly сияқты тапсырмалар, жазбалар және чат", "Tasks, notes and chat, like in Tasqly"],
    "ИИ-ассистент": ["ЖИ-ассистент", "AI assistant"],
    "Чат с историей и голосовым вводом, как в DDX AI": ["DDX AI сияқты тарихы және дауыспен енгізуі бар чат", "Chat with history and voice input, like in DDX AI"],
    "Приложение для сотрудников": ["Қызметкерлерге арналған қосымша", "App for employees"],
    "График, чек-листы и отчёты, работает без сети": ["График, чек-парақтар және есептер, желісіз жұмыс істейді", "Schedule, checklists and reports, works offline"],
    "Трекер или дневник": ["Трекер немесе күнделік", "Tracker or journal"],
    "Привычки, расходы и заметки, данные хранятся в телефоне": ["Әдеттер, шығындар және жазбалар, деректер телефонда сақталады", "Habits, expenses and notes, data stays on the phone"],
    "Образовательное приложение": ["Білім беру қосымшасы", "Learning app"],
    "Уроки, тесты и прогресс, доступны офлайн": ["Сабақтар, тесттер және прогресс, офлайн қолжетімді", "Lessons, tests and progress, available offline"],
    "Приложение клуба или сообщества": ["Клуб немесе қауымдастық қосымшасы", "Club or community app"],
    "События, участники и уведомления": ["Оқиғалар, қатысушылар және хабарландырулар", "Events, members and notifications"],
    "Меню и бонусы по QR": ["QR бойынша мәзір және бонустар", "Menu and bonuses via QR"],
    "Гость сканирует код и получает меню, купоны и бонусы": ["Қонақ кодты сканерлеп, мәзір, купондар және бонустар алады", "The guest scans a code and gets the menu, coupons and bonuses"],
    "Приложение, которое ставится на экран телефона, работает без сети и открывается как обычное.": ["Телефон экранына орнатылатын, желісіз жұмыс істейтін және әдеттегідей ашылатын қосымша.", "An app that installs on the phone screen, works offline and opens like a regular one."],
    "Приложение, которое ставится на экран телефона": ["Телефон экранына орнатылатын қосымша", "An app that installs on the phone screen"],
    "Личный кабинет или сервис": ["Жеке кабинет немесе сервис", "Account area or service"],
    "Вход, данные пользователя, от $130": ["Кіру, пайдаланушы деректері, $130 бастап", "Sign-in, user data, from $130"],
    "Каталог или заказы": ["Каталог немесе тапсырыстар", "Catalog or orders"],
    "Меню, корзина, оформление, от $130": ["Мәзір, себет, рәсімдеу, $130 бастап", "Menu, cart, checkout, from $130"],
    "Инструмент или чат": ["Құрал немесе чат", "Tool or chat"],
    "Рабочий помощник с историей, от $130": ["Тарихы бар жұмыс көмекшісі, $130 бастап", "A work assistant with history, from $130"],
    "Продумаем экраны и логику вместе": ["Экрандар мен логиканы бірге ойластырамыз", "We'll plan screens and logic together"],
    "Есть описание функций": ["Функциялар сипаттамасы бар", "I have a feature description"],
    "Есть сайт, нужно превратить в приложение": ["Сайт бар, қосымшаға айналдыру керек", "I have a site to turn into an app"],
    "Добавлю установку и офлайн-режим": ["Орнату мен офлайн режимді қосамын", "I'll add install and offline mode"],
    "Простое приложение или сервис": ["Қарапайым қосымша немесе сервис", "A simple app or service"],
    "Вход, база данных, уведомления": ["Кіру, дерекқор, хабарландырулар", "Sign-in, database, notifications"],
    "Сложная логика и крупный проект": ["Күрделі логика және ірі жоба", "Complex logic and a large project"],
    "От $500": ["$500 бастап", "From $500"],
    "Например: приложение для записи клиентов с уведомлениями и работой без сети": ["Мысалы: хабарландыруы бар және желісіз жұмыс істейтін клиенттерді жазуға арналған қосымша", "For example: a client booking app with notifications that works offline"],
    "Что такое PWA и чем оно лучше обычного приложения?": ["PWA деген не және ол әдеттегі қосымшадан несімен жақсы?", "What is a PWA and how is it better than a regular app?"],
    "PWA — это сайт, который ставится на экран телефона и работает как приложение: открывается без адресной строки, хранит данные без сети и присылает уведомления. Не нужно проходить проверку в App Store и Google Play, а один код работает на iPhone, Android и компьютере. Из ограничений: в магазинах приложений такое приложение не появится, а часть возможностей iPhone, например фоновые задачи, урезана.": ["PWA — телефон экранына орнатылатын және қосымша сияқты жұмыс істейтін сайт: мекенжай жолынсыз ашылады, деректерді желісіз сақтайды және хабарландыру жібереді. App Store мен Google Play тексеруінен өтудің қажеті жоқ, ал бір код iPhone, Android және компьютерде жұмыс істейді. Шектеулері: мұндай қосымша қосымшалар дүкенінде шықпайды, ал iPhone-ның кейбір мүмкіндіктері, мысалы фондық тапсырмалар, шектелген.", "A PWA is a website that installs on the phone screen and works like an app: it opens without an address bar, stores data offline and sends notifications. There's no App Store or Google Play review, and one codebase works on iPhone, Android and desktop. Limits: it won't appear in app stores, and some iPhone features, such as background tasks, are restricted."],
    "Зависит от типа сайта и задачи. Ориентиры «от» указаны в карточках услуг: например, сайт-визитка — от $70, лендинг — от $80, PWA-приложение — от $130. Точную стоимость называю после того, как обсудим проект. Быструю прикидку даёт блок оценки выше.": ["Сайт түріне және тапсырмаға байланысты. «Бастап» бағдарлары қызмет карточкаларында көрсетілген: мысалы, визитка сайт — $70 бастап, лендинг — $80 бастап, PWA-қосымша — $130 бастап. Нақты құнын жобаны талқылағаннан кейін айтамын. Жылдам болжамды жоғарыдағы бағалау блогы береді.", "It depends on the site type and task. 'From' prices are on the service cards: for example, a business card site from $70, a landing page from $80, a PWA app from $130. I give the exact price after we discuss the project. The estimate block above gives a quick figure."],
    "Сайт-визитка — от 4 дней, лендинг — от 5, PWA-приложение, многостраничный и корпоративный сайт — от 7, интернет-магазин — от 14. Точный срок называю после обсуждения задачи.": ["Визитка сайт — 4 күннен, лендинг — 5-тен, PWA-қосымша, көп беттік және корпоративтік сайт — 7-ден, интернет-дүкен — 14-тен. Нақты мерзімді тапсырманы талқылағаннан кейін айтамын.", "A business card site takes from 4 days, a landing page from 5, a PWA app, multi-page and corporate site from 7, an online store from 14. I give the exact time after we discuss the task."],
    "Я Ғалым, мне 14 лет. Дизайнер и разработчик из Астаны, делаю сайты и PWA-приложения. Мне нравится, когда у проекта есть свой характер, поэтому я не беру готовые шаблоны: сам подбираю цвета, шрифты и анимации под каждую тему.": ["Мен Ғалымын, 14 жастамын. Астанадан келген дизайнер және әзірлеушімін, сайттар мен PWA-қосымшалар жасаймын. Жобаның өз мінезі болғанын ұнатамын, сондықтан дайын үлгілерді алмаймын: әр тақырыпқа түстерді, қаріптерді және анимацияларды өзім таңдаймын.", "I'm Galym, I'm 14. A designer and developer from Astana, I build websites and PWA apps. I like a project to have its own character, so I don't use ready-made templates: I pick colors, fonts and animations for each topic myself."],
    "DDX AI — личный ИИ-ассистент в виде PWA-приложения, которое устанавливается на экран телефона. Чат на любые вопросы с форматированием ответов, фото и файлами, голосовым вводом и поиском. Есть история чатов, проекты-папки, персонализация, несколько моделей, тарифы и версия для компьютера.": ["DDX AI — телефон экранына орнатылатын PWA-қосымша түріндегі жеке ЖИ-ассистент. Жауаптарды пішімдейтін, фото мен файлдарды, дауыспен енгізуді және іздеуді қолдайтын кез келген сұраққа арналған чат. Чат тарихы, жоба-папкалар, жекелендіру, бірнеше модель, тарифтер және компьютерге арналған нұсқа бар.", "DDX AI is a personal AI assistant as a PWA app that installs on the phone screen. A chat for any question with formatted answers, photos and files, voice input and search. It has chat history, project folders, personalization, several models, plans and a desktop version."],
    "Варианты": ["Нұсқалар", "Options"],
    "Оценка": ["Бағалау", "Estimate"],
    "Делаю сайты и PWA-приложения для бизнеса в Казахстане и России. Они не только хорошо выглядят, но и работают на результат: показывают, чем вы полезны, вызывают доверие и превращают посетителей в заявки.": ["Қазақстан мен Ресейдегі бизнеске сайттар мен PWA-қосымшалар жасаймын. Олар тек әдемі көрінбейді, нәтиже береді: сізге не үшін керек екенін көрсетеді, сенім тудырады және келушілерді өтінімге айналдырады.", "I build websites and PWA apps for businesses in Kazakhstan and Russia. They do not just look good, they deliver results: they show how you are useful, build trust and turn visitors into leads."],
    "Сайты и PWA-приложения. Нажмите на проект, чтобы открыть подробный кейс.": ["Сайттар мен PWA-қосымшалар. Толық кейсті ашу үшін жобаны басыңыз.", "Websites and PWA apps. Click a project to open the full case."],
    "Сайты и PWA-приложения. Нажмите на любую работу, чтобы открыть кейс с описанием, технологиями и ссылками.": ["Сайттар мен PWA-қосымшалар. Сипаттамасы, технологиялары және сілтемелері бар кейсті ашу үшін кез келген жұмысты басыңыз.", "Websites and PWA apps. Click any work to open a case with a description, technologies and links."],
    "Для чего сайт или приложение": ["Сайт немесе қосымша не үшін", "What is the site or app for"],
    "Например: барбершоп, нужна запись клиентов и заявки в WhatsApp": ["Мысалы: барбершоп, клиенттерді жазу және WhatsApp-қа өтінімдер керек", "For example: a barbershop, needs client booking and WhatsApp requests"],
    "Что добавить": ["Не қосу керек", "What to add"],
    "Уточнить с ИИ": ["ЖИ-мен нақтылау", "Refine with AI"],
    "Выберите тип и дополнения, и здесь появится ориентир по цене и срокам.": ["Түрін және қосымшаларды таңдаңыз, мұнда баға мен мерзім бағдары шығады.", "Pick a type and extras and a price and time estimate will appear here."],
    "Опишите, для чего нужен проект, чтобы уточнить расчёт с ИИ.": ["Есепті ЖИ-мен нақтылау үшін жобаның не үшін керегін сипаттаңыз.", "Describe what the project is for to refine the estimate with AI."],
    "Не получилось уточнить с ИИ. Выберите тип, и я посчитаю по прайсу.": ["ЖИ-мен нақтылау болмады. Түрін таңдаңыз, мен прайс бойынша есептеймін.", "Couldn't refine with AI. Pick a type and I'll calculate from the price list."],
    "PWA-версия сайта": ["Сайттың PWA-нұсқасы", "PWA version of the site"],
    "Выберите тип и дополнения, цена посчитается сразу. Опишите проект словами, и ИИ уточнит расчёт. Точную цену назову после обсуждения.": ["Түрін және қосымшаларды таңдаңыз, баға бірден есептеледі. Жобаны сөзбен сипаттаңыз, ЖИ есепті нақтылайды. Нақты бағаны талқылаудан кейін айтамын.", "Pick a type and extras and the price is calculated instantly. Describe the project in words and AI will refine the estimate. I'll give the exact price after we talk."],
    "Нужно PWA-приложение": ["PWA-қосымша керек", "Needs the PWA app"],
    "Недоступно для сайта-визитки": ["Визитка сайт үшін қолжетімсіз", "Not available for a business card site"],
    "Недоступно для лендинга": ["Лендинг үшін қолжетімсіз", "Not available for a landing page"],
    "Манифест, иконки, офлайн-режим через Service Worker и установка на экран телефона": ["Манифест, белгішелер, Service Worker арқылы офлайн-режим және телефон экранына орнату", "Manifest, icons, offline mode via a Service Worker and installing to the phone home screen"],
    "Если договорились на дату — сдам в срок. Лендинг от 5 дней, многостраничный от 7.": ["Күнге келіссек — уақытында тапсырамын. Лендинг 5 күннен, көпбетті сайт 7 күннен.", "If we agree on a date, I deliver on time. A landing page from 5 days, a multi-page site from 7."],
    "Разработано": ["Әзірлеген", "Developed by"],
    "Открыть приложение": ["Қосымшаны ашу", "Open the app"],
    "Чат с историей и голосовым вводом": ["Тарихы және дауыспен енгізуі бар чат", "Chat with history and voice input"],
    "Мои проекты: сайты для школы английского, стоматологии и шаурмечной, рабочее пространство Tasqly.": ["Менің жобаларым: ағылшын мектебі, стоматология және шаурмахана сайттары, Tasqly жұмыс кеңістігі.", "My projects: sites for an English school, a dental clinic and a shawarma place, and the Tasqly workspace."],
    "Только реальные": ["Тек нақты жобалар", "Real projects only"],
    "Выберите тип сайта или приложения": ["Сайт немесе қосымша түрін таңдаңыз", "Pick the type of site or app"],
    "Отметьте, что нужно добавить": ["Не қосу керегін белгілеңіз", "Mark what you want to add"],
    "Опишите проект словами, и ИИ уточнит расчёт": ["Жобаны сөзбен сипаттаңыз, ИИ есепті нақтылайды", "Describe the project in words and the AI will refine the estimate"],
    "Опишите проект словами, оно попадёт в вашу заявку": ["Жобаны сөзбен сипаттаңыз, ол өтінішіңізге түседі", "Describe the project in words, it goes into your request"],
    "Выберите тип и дополнения, цена посчитается сразу. Точную цену назову после обсуждения.": ["Түрі мен қосымшаларды таңдаңыз, баға бірден есептеледі. Нақты бағаны талқылаудан кейін айтамын.", "Pick the type and extras and the price is calculated right away. I'll name the exact price after we talk."],
    "Где работаю": ["Қайда жұмыс істеймін", "Based in"],
    "Астана, удалённо по СНГ": ["Астана, ТМД бойынша қашықтан", "Astana, remote across CIS"],
    "Что делаю": ["Не істеймін", "What I do"],
    "от 4 дней": ["4 күннен", "from 4 days"],
    "Обзор": ["Шолу", "Overview"],
    "Ғалым — дизайнер и разработчик из Астаны": ["Ғалым — Астанадан келген дизайнер және әзірлеуші", "Galym, a designer and developer from Astana"],
    "Выбор стиля": ["Стиль таңдау", "Style"],
    "Тёмный": ["Қараңғы", "Dark"],
    "Светлый": ["Жарық", "Light"],
    "Сайт, который приносит заявки вашему бизнесу": ["Бизнесіңізге өтінім әкелетін сайт", "A website that brings leads to your business"],
    "приносит заявки": ["өтінім әкелетін", "brings leads"],
    "Проектирую, рисую и запускаю сайты и PWA-приложения для бизнеса в Казахстане и России. Один исполнитель на весь проект: без посредников, с понятными сроком и ценой заранее.": ["Қазақстан мен Ресейдегі бизнес үшін сайттар мен PWA-қосымшаларды жобалаймын, сызамын және іске қосамын. Бүкіл жобаға бір орындаушы: делдалсыз, мерзімі мен бағасы алдын ала белгілі.", "I plan, design and launch websites and PWA apps for businesses in Kazakhstan and Russia. One person for the whole project: no middlemen, with the timeline and price clear upfront."],
    "Что получаете": ["Не аласыз", "What you get"],
    "Сайт под ключ: дизайн, код, запуск": ["Кілтке дейін сайт: дизайн, код, іске қосу", "A turnkey site: design, code, launch"],
    "Первая версия": ["Бірінші нұсқа", "First version"],
    "Что я уже сделал для бизнеса": ["Бизнес үшін не жасадым", "What I have built for businesses"],
    "Проекты для клиники, школы и шаурмечной, а также свой продукт. Откройте кейс: задача, решение и ссылки.": ["Клиника, мектеп және шаурмахана жобалары, сондай-ақ өз өнімім. Кейсті ашыңыз: міндет, шешім және сілтемелер.", "Projects for a clinic, a school and a shawarma shop, plus my own product. Open a case: the task, the solution and links."],
    "Все проекты": ["Барлық жобалар", "All projects"],
    "С чего начнём?": ["Неден бастаймыз?", "Where do we start?"],
    "Выберите формат под задачу: в карточке сразу цена и срок. Не уверены — пройдите короткий квиз.": ["Міндетке сай форматты таңдаңыз: карточкада баға мен мерзім бірден көрсетілген. Сенімсіз болсаңыз — қысқа квизден өтіңіз.", "Pick a format for your task: each card shows the price and timeline. Not sure? Take the short quiz."],
    "Все форматы": ["Барлық форматтар", "All formats"],
    "Вопросы перед стартом": ["Бастамас бұрын сұрақтар", "Questions before we start"],
    "Нет вашего вопроса? Напишите в Telegram или пройдите квиз.": ["Сұрағыңыз жоқ па? Telegram-ға жазыңыз немесе квизден өтіңіз.", "Your question is not here? Write on Telegram or take the quiz."],
    "Что вы получите на выходе": ["Нәтижесінде не аласыз", "What you get in the end"],
    "Беру проект целиком: структура, дизайн, код и запуск. Цена и срок указаны в карточках, точную сумму называю после короткого разговора.": ["Жобаны толық аламын: құрылым, дизайн, код және іске қосу. Баға мен мерзім карточкаларда көрсетілген, нақты соманы қысқа әңгімеден кейін айтамын.", "I take the whole project: structure, design, code and launch. The price and timeline are on the cards; I name the exact amount after a short conversation."],
    "Из чего собирается проект": ["Жоба неден құралады", "What a project is made of"],
    "Нужного формата нет? Опишите задачу, соберём её из этих частей.": ["Қажетті формат жоқ па? Міндетті сипаттаңыз, оны осы бөліктерден құрастырамыз.", "Your format is not here? Describe the task and we will assemble it from these parts."],
    "Путь от сообщения до запуска": ["Хабарламадан іске қосуға дейінгі жол", "From the first message to launch"],
    "Пять шагов. На каждом вы видите результат и можете вносить правки.": ["Бес қадам. Әр қадамда нәтижені көресіз және түзетулер енгізе аласыз.", "Five steps. At each one you see the result and can ask for changes."],
    "Как я работаю с клиентами": ["Клиенттермен қалай жұмыс істеймін", "How I work with clients"],
    "Ғалым: дизайн и код в одних руках": ["Ғалым: дизайн мен код бір қолда", "One person for the whole project: Ғалым, designer and developer"],
    "Из чего я собираю ваш сайт": ["Сайтыңызды неден құрастырамын", "What I build your site from"],
    "Технологии, на которых сделаны проекты из портфолио.": ["Портфолиодағы жобалар жасалған технологиялар.", "The technologies behind the projects in the portfolio."],
    "Я Ғалым, дизайнер и разработчик из Астаны. Делаю сайты и PWA-приложения для бизнеса. Готовые шаблоны не беру: стиль, структуру и анимации подбираю под ваш проект.": ["Мен Ғалыммын, Астанадан дизайнер және әзірлеушімін. Бизнес үшін сайттар мен PWA-қосымшалар жасаймын. Дайын үлгілерді алмаймын: стильді, құрылымды және анимацияны жобаңызға қарай таңдаймын.", "I am Ғalym, a designer and developer from Astana. I build websites and PWA apps for business. I do not use ready-made templates: I choose the style, structure and animation for your project."],
    "Работы для бизнеса": ["Бизнеске арналған жұмыстар", "Work for businesses"],
    "Клиника, школа, шаурмечная и свой продукт. Откройте кейс: описание, технологии и ссылки.": ["Клиника, мектеп, шаурмахана және өз өнімім. Кейсті ашыңыз: сипаттама, технологиялар және сілтемелер.", "A clinic, a school, a shawarma shop and my own product. Open a case: description, technologies and links."],
    "Расскажите о задаче": ["Міндетіңіз туралы айтыңыз", "Tell me about your task"],
    "Напишите в Telegram или WhatsApp либо пройдите квиз: я получу готовое описание задачи и вернусь с ценой и сроком.": ["Telegram немесе WhatsApp-қа жазыңыз немесе квизден өтіңіз: мен міндеттің дайын сипаттамасын аламын және баға мен мерзіммен қайтып келемін.", "Write on Telegram or WhatsApp, or take the quiz: I will get a ready description of your task and come back with a price and timeline."],
    "Нужен сайт для бизнеса?": ["Бизнеске сайт керек пе?", "Need a website for your business?"],
    "Все работы": ["Барлық жұмыстар", "All work"],

    /* ---------- обо мне ---------- */
    "Я дизайнер и разработчик": ["Мен дизайнер және әзірлеушімін", "I am a designer and developer"],
    "Астана": ["Астана", "Astana"],
    "Я Ғалым, мне 14 лет. Дизайнер и разработчик из Астаны, делаю сайты и игры для Telegram. Мне нравится, когда у проекта есть свой характер, поэтому я не беру готовые шаблоны: сам подбираю цвета, шрифты и анимации под каждую тему.": [
      "Мен Ғалыммын, 14 жастамын. Астанадан келген дизайнер және әзірлеушімін, сайттар мен Telegram ойындарын жасаймын. Жобаның өз мінезі болғаны ұнайды, сондықтан дайын шаблондарды алмаймын: түстерді, қаріптерді және анимацияларды әр тақырыпқа өзім таңдаймын.",
      "I am Galym, I am 14. A designer and developer from Astana, making websites and Telegram games. I like a project to have its own character, so I do not use ready-made templates: I choose colors, fonts and animations for each topic myself."
    ],
    "Работаю и в дизайне, и в разработке, поэтому не теряю время на передачу задачи между людьми. Вы общаетесь с одним человеком, который отвечает за результат целиком.": [
      "Дизайнда да, әзірлеуде де жұмыс істеймін, сондықтан міндетті адамдар арасында беруге уақыт жоғалтпаймын. Сіз нәтижеге толық жауап беретін бір адаммен сөйлесесіз.",
      "I work in both design and development, so no time is lost handing the task between people. You talk to one person who is responsible for the whole result."
    ],
    "Мои проекты: сайты для школы английского и стоматологии, ИИ-чат DDX AI и рабочее пространство Tasqly.": [
      "Менің жобаларым: ағылшын тілі мектебі мен стоматологияға арналған сайттар, DDX AI ЖИ-чаты және Tasqly жұмыс кеңістігі.",
      "My projects: websites for an English school and a dental clinic, the DDX AI chat and the Tasqly workspace."
    ],
    "Роль": ["Рөлі", "Role"],
    "Дизайнер и разработчик": ["Дизайнер және әзірлеуші", "Designer and developer"],
    "Город": ["Қала", "City"],
    "Направления": ["Бағыттар", "Focus"],
    "Сайты, Telegram Mini App, боты, плагины": ["Сайттар, Telegram Mini App, боттар, плагиндер", "Websites, Telegram Mini App, bots, plugins"],
    "Instagram и TikTok": ["Instagram және TikTok", "Instagram and TikTok"],
    "Чем я работаю": ["Мен немен жұмыс істеймін", "What I work with"],
    "Инструменты, которыми собраны проекты из портфолио.": ["Портфолиодағы жобалар құрастырылған құралдар.", "The tools behind the projects in the portfolio."],
    "HTML и CSS": ["HTML және CSS", "HTML and CSS"],
    "JavaScript": ["JavaScript", "JavaScript"],
    "Адаптивная вёрстка": ["Адаптивті верстка", "Responsive layout"],
    "GitHub Pages": ["GitHub Pages", "GitHub Pages"],
    "Telegram и серверы": ["Telegram және серверлер", "Telegram and servers"],
    "Telegram-боты": ["Telegram-боттар", "Telegram bots"],
    "Ссылка": ["Сілтеме", "Link"],
    "Telegram-боты и Stars": ["Telegram-боттар және Stars", "Telegram bots and Stars"],
    "Cloudflare Workers": ["Cloudflare Workers", "Cloudflare Workers"],
    "Базы D1": ["D1 базалары", "D1 databases"],
    "Java": ["Java", "Java"],
    "Paper и Maven": ["Paper және Maven", "Paper and Maven"],
    "SQLite": ["SQLite", "SQLite"],
    "Сайты для серверов": ["Серверлерге арналған сайттар", "Websites for servers"],

    /* ---------- контакты ---------- */
    "Давайте обсудим ваш проект": ["Жобаңызды талқылайық", "Let us discuss your project"],
    "Напишите мне в Telegram или WhatsApp, либо ответьте на несколько вопросов в квизе, и я получу готовое описание задачи.": [
      "Маған Telegram немесе WhatsApp-қа жазыңыз, не болмаса квизде бірнеше сұраққа жауап беріңіз, сонда мен міндеттің дайын сипаттамасын аламын.",
      "Message me on Telegram or WhatsApp, or answer a few questions in the quiz, and I will get a ready description of your task."
    ],
    "Семь коротких вопросов о вашем проекте": ["Жобаңыз туралы жеті қысқа сұрақ", "Seven short questions about your project"],

    /* ---------- 404 ---------- */
    "Такой страницы нет. Возможно, ссылка устарела.": ["Мұндай бет жоқ. Мүмкін, сілтеме ескірген.", "This page does not exist. The link may be out of date."],
    "На главную": ["Басты бетке", "Back to home"],

    /* ---------- политика конфиденциальности ---------- */
    "Эта страница объясняет, какие данные использует сайт gDev и как они хранятся. Обновлено 8 ноября 2026.": [
      "Бұл бет gDev сайты қандай деректерді пайдаланатынын және олардың қалай сақталатынын түсіндіреді. 2026 жылғы 8 қарашада жаңартылды.",
      "This page explains what data the gDev website uses and how it is stored. Updated November 8, 2026."
    ],
    "Кто отвечает за сайт": ["Сайт үшін кім жауап береді", "Who runs the site"],
    "Сайт ведёт gDev (Астана, Казахстан). По вопросам о данных пишите в Telegram @ddwwks или в WhatsApp +7 775 121 32 71.": [
      "Сайтты gDev жүргізеді (Астана, Қазақстан). Деректер туралы сұрақтар бойынша Telegram @ddwwks немесе WhatsApp +7 775 121 32 71 нөміріне жазыңыз.",
      "The site is run by gDev (Astana, Kazakhstan). For questions about data, write on Telegram @ddwwks or WhatsApp +7 775 121 32 71."
    ],
    "Какие данные есть на сайте": ["Сайтта қандай деректер бар", "What data the site has"],
    "На сайте нет аккаунтов, форм с отправкой на сервер, рекламных трекеров и аналитики. Сайт не сохраняет ваши данные на своих серверах.": [
      "Сайтта аккаунттар, серверге жіберілетін формалар, жарнамалық трекерлер және аналитика жоқ. Сайт сіздің деректеріңізді өз серверлерінде сақтамайды.",
      "The site has no accounts, no forms that send data to a server, no advertising trackers and no analytics. The site does not store your data on its own servers."
    ],
    "Квиз и заявка": ["Квиз және өтінім", "Quiz and request"],
    "В квизе вы вводите имя, контакт и описание проекта. Эти ответы остаются в вашем браузере. Когда вы нажимаете «Отправить», сайт собирает текст сообщения и открывает Telegram с этим текстом. Сообщение попадает ко мне, только если вы сами отправите его в Telegram или WhatsApp.": [
      "Квизде сіз атыңызды, байланысты және жоба сипаттамасын енгізесіз. Бұл жауаптар браузеріңізде қалады. «Жіберу» түймесін басқанда, сайт хабарлама мәтінін жинап, Telegram-ды осы мәтінмен ашады. Хабарлама маған тек сіз оны Telegram немесе WhatsApp-қа өзіңіз жіберсеңіз ғана түседі.",
      "In the quiz you enter your name, contact and a project description. These answers stay in your browser. When you press “Send”, the site assembles the message text and opens Telegram with it. The message reaches me only if you send it yourself in Telegram or WhatsApp."
    ],
    "Что сохраняется в браузере": ["Браузерде не сақталады", "What is saved in your browser"],
    "Для работы сайта используется память браузера: выбранный язык интерфейса, отметка о том, что вы уже видели заставку при первом заходе, и ваш рекорд в мини-игре. Это не персональные данные, их можно удалить в настройках браузера.": [
      "Сайт жұмысы үшін браузер жады қолданылады: таңдалған интерфейс тілі, алғашқы кіргенде қосылу экранын көргеніңіз туралы белгі және шағын ойындағы рекордыңыз. Бұл жеке деректер емес, оларды браузер баптауларында жоюға болады.",
      "The site uses browser storage for the interface language you chose, a mark that you have already seen the intro screen on your first visit, and your best score in the mini-game. This is not personal data and you can delete it in your browser settings."
    ],
    "Сторонние сервисы": ["Үшінші тарап сервистері", "Third-party services"],
    "Шрифты загружаются с Google Fonts, поэтому браузер обращается к серверам Google. Сайт размещён на GitHub Pages, и хостинг может записывать технические данные запросов, например IP-адрес. Ссылки на Telegram, WhatsApp, Instagram, TikTok и GitHub ведут на сторонние сайты со своими правилами.": [
      "Қаріптер Google Fonts-тан жүктеледі, сондықтан браузер Google серверлеріне жүгінеді. Сайт GitHub Pages-те орналасқан, хостинг сұраулардың техникалық деректерін, мысалы IP-мекенжайды жазуы мүмкін. Telegram, WhatsApp, Instagram, TikTok және GitHub-қа сілтемелер өз ережелері бар үшінші тарап сайттарына апарады.",
      "Fonts are loaded from Google Fonts, so your browser contacts Google servers. The site is hosted on GitHub Pages, and the host may record technical request data such as the IP address. Links to Telegram, WhatsApp, Instagram, TikTok and GitHub lead to third-party sites with their own rules."
    ],
    "Как использую данные из заявки": ["Өтінімдегі деректерді қалай қолданамын", "How I use request data"],
    "Информацию из сообщения использую только для того, чтобы ответить вам и обсудить проект. Не передаю её третьим лицам и не использую для рассылок.": [
      "Хабарламадағы ақпаратты тек сізге жауап беру және жобаны талқылау үшін қолданамын. Оны үшінші тұлғаларға бермеймін және тарату үшін пайдаланбаймын.",
      "I use the information from your message only to reply and discuss the project. I do not share it with third parties or use it for mailings."
    ],
    "Ваши права": ["Сіздің құқықтарыңыз", "Your rights"],
    "Вы можете попросить удалить переписку или уточнить, какие данные у меня есть: напишите в Telegram или WhatsApp. Если на сайте появится аналитика, эта страница будет обновлена.": [
      "Сіз жазбаны жоюды немесе менде қандай деректер бар екенін нақтылауды сұрай аласыз: Telegram немесе WhatsApp-қа жазыңыз. Сайтта аналитика пайда болса, бұл бет жаңартылады.",
      "You can ask me to delete our conversation or tell you what data I have: write on Telegram or WhatsApp. If analytics appears on the site, this page will be updated."
    ],

    /* ---------- квиз ---------- */
    "Несколько вопросов, и я пойму, что вам нужно": ["Бірнеше сұрақ, сонда сізге не керек екенін түсінемін", "A few questions and I will understand what you need"],
    "Шаг": ["Қадам", "Step"],
    "Направление": ["Бағыт", "Direction"],
    "Формат": ["Формат", "Format"],
    "Что уже есть": ["Не дайын", "What you have"],
    "Сроки": ["Мерзім", "Timing"],
    "Бюджет": ["Бюджет", "Budget"],
    "О проекте": ["Жоба туралы", "About the project"],
    "Что вам нужно?": ["Сізге не керек?", "What do you need?"],
    "Выберите направление, его можно поменять в любой момент.": ["Бағытты таңдаңыз, оны кез келген сәтте өзгертуге болады.", "Choose a direction; you can change it at any time."],
    "Какой формат подойдёт?": ["Қандай формат сәйкес келеді?", "Which format fits?"],
    "Если не уверены, выберите «Пока не знаю».": ["Сенімді болмасаңыз, «Әзірге білмеймін» дегенді таңдаңыз.", "If you are not sure, choose “Not sure yet”."],
    "Что у вас уже готово?": ["Сізде не дайын?", "What do you already have?"],
    "Так проще понять, с чего начинать.": ["Осылай неден бастау керегін түсіну оңай.", "This makes it easier to see where to start."],
    "Когда нужен результат?": ["Нәтиже қашан керек?", "When do you need the result?"],
    "Минимальные сроки указаны в карточках услуг.": ["Ең аз мерзімдер қызмет карточкаларында көрсетілген.", "Minimum timing is shown on the service cards."],
    "На какой бюджет рассчитываете?": ["Қандай бюджетке сүйенесіз?", "What budget do you have in mind?"],
    "Это ориентир, итоговую стоимость назову после обсуждения.": ["Бұл бағдар, соңғы құнды талқылағаннан кейін айтамын.", "This is a guide; I will give the final price after we talk."],
    "Расскажите о проекте": ["Жоба туралы айтыңыз", "Tell me about the project"],
    "Пара предложений: чем занимаетесь и чего хотите добиться. Этот шаг можно пропустить.": ["Екі-үш сөйлем: немен айналысасыз және неге жеткіңіз келеді. Бұл қадамды өткізіп жіберуге болады.", "A couple of sentences: what you do and what you want to achieve. You can skip this step."],
    "Отвечу в том мессенджере, который вы укажете.": ["Сіз көрсеткен мессенджерде жауап беремін.", "I will reply in the messenger you specify."],

    "Сайт": ["Сайт", "Website"],
    "Лендинг, многостраничный сайт, визитка, корпоративный сайт": ["Лендинг, көпбетті сайт, визитка, корпоративтік сайт", "Landing page, multi-page site, business card, corporate site"],
    "Игра или приложение внутри Telegram": ["Telegram ішіндегі ойын немесе қосымша", "A game or app inside Telegram"],
    "Плагин под ваш сервер на Paper": ["Paper-дегі сервериңізге арналған плагин", "A plugin for your Paper server"],
    "Доработка существующего проекта": ["Бар жобаны жетілдіру", "Rework of an existing project"],
    "Правки и улучшения готового сайта или приложения": ["Дайын сайтқа немесе қосымшаға түзетулер мен жақсартулар", "Edits and improvements to a finished site or app"],
    "Другое / не определился": ["Басқа / әлі шешпедім", "Other / undecided"],
    "Помогу выбрать формат": ["Форматты таңдауға көмектесемін", "I will help you pick a format"],

    "Запуск услуги, акции или продукта, от $80": ["Қызметті, акцияны немесе өнімді іске қосу, $80 бастап", "Launching a service, promotion or product, from $80"],
    "Несколько разделов, от $160": ["Бірнеше бөлім, $160 бастап", "Several sections, from $160"],
    "Компактное представительство, от $60": ["Шағын өкілдік, $60 бастап", "A compact presence, from $60"],
    "Услуги, команда, проекты и контакты, от $160": ["Қызметтер, команда, жобалар және байланыстар, $160 бастап", "Services, team, projects and contacts, from $160"],
    "Пока не знаю": ["Әзірге білмеймін", "Not sure yet"],
    "Подскажу подходящий вариант": ["Қолайлы нұсқаны ұсынамын", "I will suggest a suitable option"],
    "Игра": ["Ойын", "Game"],
    "Рейтинг, награды, оплата через Stars, от $130": ["Рейтинг, сыйлықтар, Stars арқылы төлем, $130 бастап", "Leaderboard, rewards, payment via Stars, from $130"],
    "Приложение или сервис": ["Қосымша немесе сервис", "App or service"],
    "Полезный инструмент внутри Telegram, от $130": ["Telegram ішіндегі пайдалы құрал, $130 бастап", "A useful tool inside Telegram, from $130"],
    "Новый плагин": ["Жаңа плагин", "New plugin"],
    "Под ваш сервер на Paper, от $12": ["Paper-дегі сервериңізге арналған, $12 бастап", "For your Paper server, from $12"],
    "Доработка существующего плагина": ["Бар плагинді жетілдіру", "Rework of an existing plugin"],
    "Исправить или добавить функции": ["Түзету немесе функция қосу", "Fix or add features"],
    "Исправить ошибки": ["Қателерді түзету", "Fix bugs"],
    "Что-то работает не так, от $30": ["Бір нәрсе дұрыс жұмыс істемейді, $30 бастап", "Something is not working right, from $30"],
    "Обновить дизайн": ["Дизайнды жаңарту", "Refresh the design"],
    "Новый стиль и анимации": ["Жаңа стиль және анимациялар", "New style and animations"],
    "Добавить функции": ["Функциялар қосу", "Add features"],
    "Новые разделы, формы, оплата": ["Жаңа бөлімдер, формалар, төлем", "New sections, forms, payment"],
    "Разберёмся вместе": ["Бірге түсінеміз", "We will figure it out together"],
    "Нужна консультация": ["Кеңес керек", "I need a consultation"],
    "Расскажу, что подойдёт под вашу задачу": ["Міндетіңізге не сәйкес келетінін айтамын", "I will tell you what suits your task"],
    "Опишу задачу на одном из следующих шагов": ["Міндетті келесі қадамдардың бірінде сипаттаймын", "I will describe the task in one of the next steps"],

    "Ничего нет": ["Ештеңе жоқ", "Nothing yet"],
    "Начинаем с нуля": ["Нөлден бастаймыз", "We start from scratch"],
    "Есть тексты и фото": ["Мәтіндер мен фото бар", "I have texts and photos"],
    "Нужно собрать их в готовый вид": ["Оларды дайын түрге келтіру керек", "They need to be put together into a finished site"],
    "Есть логотип и фирменный стиль": ["Логотип және фирмалық стиль бар", "I have a logo and brand style"],
    "Дизайн сделаю в вашем стиле": ["Дизайнды сіздің стильде жасаймын", "I will design it in your style"],
    "Есть макет или пример сайта": ["Макет немесе сайт үлгісі бар", "I have a mockup or an example site"],
    "Сделаю по образцу": ["Үлгі бойынша жасаймын", "I will build it from the example"],
    "Только идея": ["Тек идея", "Just an idea"],
    "Продумаем механику вместе": ["Механиканы бірге ойластырамыз", "We will work out the mechanics together"],
    "Есть описание и правила": ["Сипаттама мен ережелер бар", "I have a description and rules"],
    "Опишу, как это будет работать": ["Бұл қалай жұмыс істейтінін сипаттаймын", "I will describe how it will work"],
    "Есть дизайн или референсы": ["Дизайн немесе референстер бар", "I have a design or references"],
    "Сделаю в нужном стиле": ["Қажетті стильде жасаймын", "I will build it in the needed style"],
    "Есть бот или часть кода": ["Бот немесе код бөлігі бар", "I have a bot or part of the code"],
    "Доработаю и подключу Mini App": ["Жетілдіріп, Mini App қосамын", "I will finish it and connect the Mini App"],
    "Продумаем команды и механику вместе": ["Командалар мен механиканы бірге ойластырамыз", "We will work out commands and mechanics together"],
    "Есть список функций и команд": ["Функциялар мен командалар тізімі бар", "I have a list of features and commands"],
    "Сделаю по вашему описанию": ["Сіздің сипаттамаңыз бойынша жасаймын", "I will build it from your description"],
    "Есть сервер, нужна версия ядра": ["Сервер бар, ядро нұсқасы керек", "I have a server, need a core version"],
    "Укажите ядро и версию в описании": ["Сипаттамада ядро мен нұсқаны көрсетіңіз", "Specify the core and version in the description"],
    "Есть готовый плагин или исходники": ["Дайын плагин немесе бастапқы код бар", "I have a ready plugin or source code"],
    "Доработаю существующий код": ["Бар кодты жетілдіремін", "I will improve the existing code"],
    "Есть исходники и доступ": ["Бастапқы код пен қолжетімділік бар", "I have the source code and access"],
    "Можно сразу приступать": ["Бірден бастауға болады", "We can start right away"],
    "Есть список правок": ["Түзетулер тізімі бар", "I have a list of changes"],
    "Оценю объём и сроки": ["Көлемі мен мерзімін бағалаймын", "I will estimate the scope and timing"],
    "Есть только готовый сайт или приложение": ["Тек дайын сайт немесе қосымша бар", "I only have a finished site or app"],
    "Разберусь в коде сам": ["Кодты өзім түсінемін", "I will figure out the code myself"],
    "Не знаю, что именно улучшить": ["Нені жақсарту керегін білмеймін", "I do not know what exactly to improve"],
    "Проведу короткий разбор": ["Қысқа талдау жасаймын", "I will run a short review"],
    "Начинаем с обсуждения": ["Талқылаудан бастаймыз", "We start with a discussion"],
    "Есть описание задачи": ["Міндет сипаттамасы бар", "I have a task description"],
    "Расскажите на следующем шаге": ["Келесі қадамда айтып беріңіз", "Tell me in the next step"],
    "Есть примеры или референсы": ["Мысалдар немесе референстер бар", "I have examples or references"],
    "Покажите, что нравится": ["Не ұнайтынын көрсетіңіз", "Show me what you like"],

    "Срочно, в течение недели": ["Шұғыл, бір апта ішінде", "Urgent, within a week"],
    "Подберём самый быстрый вариант": ["Ең жылдам нұсқаны таңдаймыз", "We will pick the fastest option"],
    "В течение месяца": ["Бір ай ішінде", "Within a month"],
    "Спокойный темп без спешки": ["Асықпай, сабырлы қарқын", "A calm pace without rushing"],
    "Не горит": ["Асықпаймын", "No rush"],
    "Важнее качество, чем скорость": ["Сапа жылдамдықтан маңыздырақ", "Quality matters more than speed"],
    "Назовите ориентир, когда обсудим задачу": ["Міндетті талқылағанда бағдарды айтыңыз", "Give me a rough guide once we discuss the task"],

    "До $100": ["$100 дейін", "Up to $100"],
    "Визитка или небольшой лендинг": ["Визитка немесе шағын лендинг", "A business card site or small landing page"],
    "$100 – $200": ["$100 – $200", "$100 – $200"],
    "Лендинг или многостраничный сайт": ["Лендинг немесе көпбетті сайт", "A landing page or multi-page site"],
    "$200 – $400": ["$200 – $400", "$200 – $400"],
    "Сайт с дополнительными функциями": ["Қосымша функциялары бар сайт", "A site with extra features"],
    "От $400": ["$400 бастап", "From $400"],
    "Крупный проект": ["Ірі жоба", "A large project"],
    "Подскажу, во что вложиться в первую очередь": ["Алдымен неге салым салу керегін ұсынамын", "I will suggest what to invest in first"],
    "$130 – $200": ["$130 – $200", "$130 – $200"],
    "Простая игра или сервис": ["Қарапайым ойын немесе сервис", "A simple game or service"],
    "Рейтинг, награды, оплата через Stars": ["Рейтинг, сыйлықтар, Stars арқылы төлем", "Leaderboard, rewards, payment via Stars"],
    "Сложная механика и крупный проект": ["Күрделі механика және ірі жоба", "Complex mechanics and a large project"],
    "Оценю после обсуждения": ["Талқылағаннан кейін бағалаймын", "I will estimate after we talk"],
    "$12 – $30": ["$12 – $30", "$12 – $30"],
    "Простая команда или механика": ["Қарапайым команда немесе механика", "A simple command or mechanic"],
    "$30 – $60": ["$30 – $60", "$30 – $60"],
    "Несколько функций и база данных": ["Бірнеше функция және дерекқор", "Several features and a database"],
    "От $60": ["$60 бастап", "From $60"],
    "Большой плагин со сложной логикой": ["Күрделі логикасы бар үлкен плагин", "A large plugin with complex logic"],
    "Небольшие правки": ["Шағын түзетулер", "Small edits"],
    "$60 – $120": ["$60 – $120", "$60 – $120"],
    "Несколько изменений или новый раздел": ["Бірнеше өзгеріс немесе жаңа бөлім", "Several changes or a new section"],
    "От $120": ["$120 бастап", "From $120"],
    "Крупная переработка": ["Ірі қайта өңдеу", "A major rework"],
    "Оценю после разбора": ["Талдаудан кейін бағалаймын", "I will estimate after the review"],
    "$100 – $300": ["$100 – $300", "$100 – $300"],
    "Небольшая задача": ["Шағын міндет", "A small task"],
    "Задача средней сложности": ["Орташа күрделі міндет", "A task of medium complexity"],
    "От $300": ["$300 бастап", "From $300"],

    "Например: сайт для кофейни, нужны меню, карта и заявки в WhatsApp": ["Мысалы: кофеханаға арналған сайт, мәзір, карта және WhatsApp-қа өтінімдер керек", "For example: a website for a coffee shop with a menu, a map and requests to WhatsApp"],
    "Например: игра-рулетка с рейтингом и наградами за приглашённых друзей": ["Мысалы: рейтингі және шақырылған достар үшін сыйлықтары бар рулетка-ойын", "For example: a roulette game with a leaderboard and rewards for invited friends"],
    "Например: плагин авторизации для Paper 1.21 с командами /register и /login": ["Мысалы: /register және /login командалары бар Paper 1.21 авторизация плагині", "For example: an authorization plugin for Paper 1.21 with /register and /login commands"],
    "Например: на сайте не отправляется форма, нужно починить и обновить дизайн": ["Мысалы: сайтта форма жіберілмейді, түзету және дизайнды жаңарту керек", "For example: the form on the site does not submit, it needs a fix and a design refresh"],
    "Расскажите, что нужно сделать и какого результата хотите": ["Не істеу керегін және қандай нәтиже қалайтыныңызды айтыңыз", "Describe what needs to be done and the result you want"],
    "Как вас зовут": ["Атыңыз кім", "Your name"],
    "Telegram, WhatsApp или телефон": ["Telegram, WhatsApp немесе телефон", "Telegram, WhatsApp or phone"],
    "@username или номер": ["@username немесе нөмір", "@username or number"],
    "Ваша заявка": ["Сіздің өтініміңіз", "Your request"],
    "Обновляется по мере ответов. Любой пункт можно изменить: нажмите на него.": ["Жауап берген сайын жаңарады. Кез келген тармақты өзгертуге болады: оны басыңыз.", "Updates as you answer. You can change any item: just click it."],
    "Удобнее написать сразу?": ["Бірден жазған ыңғайлы ма?", "Prefer to write right away?"],
    "Назад": ["Артқа", "Back"],
    "Далее": ["Әрі қарай", "Next"],
    "Отправить": ["Жіберу", "Send"],
    "Заявка собрана": ["Өтінім жиналды", "Your request is ready"],
    "В Telegram открылся чат со мной с готовым сообщением. Нажмите «Отправить» в чате. Если текст не подставился, он уже скопирован: просто вставьте его. Удобнее WhatsApp? Нажмите кнопку ниже.": [
      "Telegram-да менімен чат дайын хабарламамен ашылды. Чатта «Жіберу» түймесін басыңыз. Мәтін қойылмаса, ол көшірілген: жай ғана қойыңыз. WhatsApp ыңғайлы ма? Төмендегі түймені басыңыз.",
      "A chat with me has opened in Telegram with a ready message. Press “Send” in the chat. If the text did not appear, it is already copied: just paste it. Prefer WhatsApp? Use the button below."
    ],
    "Заполнить заново": ["Қайта толтыру", "Start over"],
    "Открыть Telegram": ["Telegram-ды ашу", "Open Telegram"],
    "Открыть WhatsApp": ["WhatsApp-ты ашу", "Open WhatsApp"]
  };

  var LANGS = ["ru", "kk", "en"];
  var lang = "ru";
  try {
    var q = (location.search.match(/[?&]lang=(ru|kk|en)\b/) || [])[1];
    if (q) localStorage.setItem("gws-lang", q);
    var saved = localStorage.getItem("gws-lang");
    if (LANGS.indexOf(saved) > -1) lang = saved;
  } catch (e) {}
  var idx = LANGS.indexOf(lang) - 1; // 0 = kk, 1 = en

  function norm(s) { return String(s).replace(/\s+/g, " ").trim(); }

  // t("русский текст") -> перевод на выбранный язык (или тот же текст, если перевода нет)
  function t(s) {
    if (idx < 0 || s == null) return s;
    var k = norm(s);
    var v = T[k];
    return v && v[idx] ? v[idx] : s;
  }

  // «от $80» и «от 5 дней»
  function priceFrom(n) { return lang === "ru" ? "от $" + n : lang === "kk" ? "$" + n + " бастап" : "from $" + n; }
  function daysFrom(n) { return lang === "ru" ? "от " + n + " дней" : lang === "kk" ? n + " күннен бастап" : "from " + n + " days"; }

  window.I18N = { lang: lang, t: t, priceFrom: priceFrom, daysFrom: daysFrom, dict: T };
  window.t = t;
  document.documentElement.lang = lang === "kk" ? "kk" : lang;

  window.setLang = function (l) {
    try { localStorage.setItem("gws-lang", l); } catch (e) {}
    document.body.classList.add("leaving");
    setTimeout(function () { location.reload(); }, 240);
  };

  if (idx < 0) return;

  // перевод статичной разметки: текстовые узлы и несколько атрибутов
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
  var nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(function (n) {
    var p = n.parentNode;
    if (!p || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(p.nodeName)) return;
    var raw = n.nodeValue;
    if (!/[А-Яа-яЁё]/.test(raw)) return;
    var k = norm(raw);
    var v = T[k];
    if (!v || !v[idx]) return;
    n.nodeValue = raw.match(/^\s*/)[0] + v[idx] + raw.match(/\s*$/)[0];
  });
  document.querySelectorAll("[data-bg],[data-accent],[placeholder],[aria-label]").forEach(function (el) {
    ["data-bg", "data-accent", "placeholder", "aria-label"].forEach(function (a) {
      if (el.hasAttribute(a)) el.setAttribute(a, t(el.getAttribute(a)));
    });
  });
  var meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", t(meta.getAttribute("content")));
  document.title = t(document.title);
})();
