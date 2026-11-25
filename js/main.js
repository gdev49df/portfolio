(function () {
  "use strict";

  // адрес без .html: /services.html -> /services, /index.html -> /
  (function cleanUrl() {
    var p = location.pathname;
    if (/\.html$/.test(p) && window.history && history.replaceState) {
      var c = p.replace(/index\.html$/, "").replace(/\.html$/, "");
      history.replaceState(null, "", (c || "/") + location.search + location.hash);
    }
  })();

  var TG = "https://t.me/ddwwks";
  var IG = "https://www.instagram.com/bauyrzhanov_12_/";
  var MAIL = "mailto:work@gdev.uk";
  var WA = "https://wa.me/77751213271";
  var t = window.t || function (x) { return x; };
  var LABEL = { tg: "Telegram", wa: "WhatsApp", ig: "Instagram", mail: "Email" };
  var LINK = { tg: TG, wa: WA, ig: IG, mail: MAIL };
  function soc(key, i) {
    return '<a href="' + LINK[key] + '"' + (i == null ? "" : ' style="--i:' + i + '"') + ' target="_blank" rel="noopener" aria-label="' + LABEL[key] + '">' + window.ICONS[key] + "</a>";
  }
  var page = document.body.getAttribute("data-page") || "";

  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  var LOGO = 'g<i>Dev</i>';

  var NAV = [
    ["home", "/", t("Главная")],
    ["services", "/services", t("Услуги")],
    ["portfolio", "/portfolio", t("Портфолио")],
    ["about", "/about", t("Обо мне")],
    ["contacts", "/contacts", t("Контакты")]
  ];

  /* ---------- шапка и подвал ---------- */
  function buildLayout() {
    var hdr = document.getElementById("site-header");
    if (hdr) {
      var items = NAV.filter(function (n) { return n[0] !== "contacts"; }).concat([["quiz", "/quiz", t("Обсудить проект")]]);
      var mlinks = items.map(function (n, i) {
        return '<a href="' + n[1] + '" style="--i:' + i + '"' + (n[0] === page ? ' aria-current="page"' : "") + ">" + n[2] + "</a>";
      }).join("");
      var cur = (window.I18N && window.I18N.lang) || "ru";
      var langs = [["ru", "RU"], ["kk", "KZ"], ["en", "EN"]].map(function (l) {
        return '<button type="button" data-l="' + l[0] + '" aria-pressed="' + (l[0] === cur) + '" lang="' + l[0] + '">' + l[1] + "</button>";
      }).join("");
      hdr.innerHTML =
        '<div class="aurora" aria-hidden="true"><i class="orb o1"></i><i class="orb o2"></i><i class="orb o3"></i></div>' +
        '<header class="hdr">' +
        '<a class="logo" href="/" aria-label="gDev, ' + t("на главную") + '">' + LOGO + "</a>" +
        '<div class="lang" role="group" aria-label="' + t("Язык") + '">' + langs + "</div>" +
        '<a class="btn light hdr-cta" href="/quiz">' + t("Обсудить проект") + "</a>" +
        '<button class="menu-btn" type="button" aria-label="' + t("Открыть меню") + '" aria-expanded="false"><span class="lbl">' + t("Меню") + '</span><span class="lines"><i></i><i></i></span></button>' +
        "</header>" +
        '<nav class="mnav" aria-label="' + t("Основное меню") + '" aria-hidden="true">' + mlinks +
        '<div class="soc">' + soc("tg", items.length) + soc("wa", items.length + 1) + soc("ig", items.length + 2) + soc("mail", items.length + 3) + "</div></nav>";
      hdr.querySelectorAll(".lang button").forEach(function (b) {
        b.addEventListener("click", function () {
          if (b.getAttribute("data-l") !== cur) window.setLang(b.getAttribute("data-l"));
        });
      });
    }

    var ftr = document.getElementById("site-footer");
    if (ftr) {
      var flinks = NAV.map(function (n) { return '<a href="' + n[1] + '">' + n[2] + "</a>"; }).join("");
      var cons = [["Telegram", TG], ["WhatsApp", WA], ["Instagram", IG], ["work@gdev.uk", MAIL]].map(function (c) { return '<a href="' + c[1] + '" target="_blank" rel="noopener">' + c[0] + "</a>"; }).join("");
      ftr.innerHTML =
        '<footer class="ftr"><div class="wrap">' +
        '<div class="ftr-top"><h2>' + t("Нужен сайт для бизнеса?") + '</h2><a class="btn light" href="/quiz">' + t("Обсудить проект") + "</a></div>" +
        '<div class="ftr-grid">' +
        '<div class="ftr-brand"><a class="ftr-mark" href="/" aria-label="gDev, ' + t("на главную") + '">' + LOGO + "</a><p>" + t("Делаю современные сайты для бизнеса в Казахстане и России: от первой идеи до результата, который приводит клиентов и заявки.") + "</p></div>" +
        '<nav class="ftr-col" aria-label="' + t("Разделы") + '"><h4>' + t("Разделы") + "</h4>" + flinks + "</nav>" +
        '<div class="ftr-col"><h4>' + t("Связаться") + "</h4>" + cons + "</div></div>" +
        '<div class="ftr-bot"><span>© <span id="y"></span> ' + t("Разработано") + ' gDev</span>' +
        '<a href="/privacy">' + t("Политика конфиденциальности") + "</a></div>" +
        "</div></footer>";
      var y = document.getElementById("y");
      if (y) y.textContent = new Date().getFullYear();
    }

    var veil = document.createElement("div");
    veil.className = "veil";
    document.body.appendChild(veil);
  }

  /* ---------- меню ---------- */
  function initMenu() {
    var b = document.querySelector(".menu-btn");
    var m = document.querySelector(".mnav");
    var h = document.querySelector(".hdr");
    if (!b) return;
    var lbl = b.querySelector(".lbl");
    function set(open) {
      document.body.classList.toggle("menu-open", open);
      b.setAttribute("aria-expanded", open ? "true" : "false");
      b.setAttribute("aria-label", open ? t("Закрыть меню") : t("Открыть меню"));
      if (lbl) lbl.textContent = open ? t("Закрыть") : t("Меню");
      if (m) m.setAttribute("aria-hidden", open ? "false" : "true");
      document.body.style.overflow = open ? "hidden" : "";
    }
    b.addEventListener("click", function () { set(!document.body.classList.contains("menu-open")); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") set(false); });
    function onScroll() { if (h) h.classList.toggle("scrolled", window.scrollY > 24); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // время астаны (UTC+5) и москвы (UTC+3)
    function tick() {
      var now = Date.now();
      document.querySelectorAll(".clock b").forEach(function (el) {
        var d = new Date(now + Number(el.getAttribute("data-tz")) * 3600000);
        el.textContent = String(d.getUTCHours()).padStart(2, "0") + ":" + String(d.getUTCMinutes()).padStart(2, "0");
      });
    }
    tick();
    setInterval(tick, 15000);
  }

  /* ---------- плавный переход между страницами ---------- */
  function initTransitions() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a[href]");
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (a.target === "_blank" || a.hasAttribute("download")) return;
      var url;
      try { url = new URL(a.href, location.href); } catch (err) { return; }
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname && url.search === location.search) return;
      e.preventDefault();
      document.body.classList.add("leaving");
      setTimeout(function () { location.href = a.href; }, 360);
    });
    window.addEventListener("pageshow", function (e) {
      if (e.persisted) {
        document.body.classList.remove("leaving", "menu-open");
        document.body.style.overflow = "";
      }
    });
  }

  /* ---------- появление при прокрутке ---------- */
  function splitWords() {
    document.querySelectorAll("[data-split]").forEach(function (el) {
      var text = el.textContent.trim();
      var words = text.split(/\s+/);
      var acc = (el.getAttribute("data-accent") || "").toLowerCase();
      var from = acc ? text.toLowerCase().indexOf(acc) : -1;
      var to = from > -1 ? from + acc.length : -1;
      var pos = 0;
      el.setAttribute("aria-label", text);
      el.innerHTML = words.map(function (w, i) {
        var start = text.indexOf(w, pos);
        pos = start + w.length;
        var on = from > -1 && start >= from && start < to;
        return '<span class="w' + (on ? " acc" : "") + '" aria-hidden="true" style="--i:' + i + '">' + w + "</span>";
      }).join(" ");
      el.classList.add("split");
    });
  }


  function initReveal() {
    var els = document.querySelectorAll("[data-reveal], .split, [data-bg]");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0, rootMargin: "0px 0px -4% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- услуги ---------- */
  function renderServices() {
    var host = document.getElementById("svc-grid");
    if (!host || !window.SERVICES) return;
    host.className = "sv-grid";
    var go = '<span class="go" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>';
    var cards = window.SERVICES.map(function (s, i) {
      var n = i + 1 < 10 ? "0" + (i + 1) : "" + (i + 1);
      return '<a class="sv" href="/quiz" data-reveal style="--d:' + ((i % 3) * 0.1) + 's"><span class="n">' + n + "</span>" +
        "<h3>" + t(s.title) + "</h3><p>" + t(s.text) + "</p>" +
        '<div class="foot"><div class="meta"><b>' + window.I18N.priceFrom(s.price) + "</b><span>" + (s.days ? window.I18N.daysFrom(s.days) : t("срок обсуждается")) + "</span></div>" + go + "</div></a>";
    }).join("");
    var quiz = '<a class="sv sv-quiz" href="/quiz" data-reveal style="--d:.2s"><span class="n">?</span>' +
      "<h3>" + t("Не знаете, что выбрать?") + "</h3><p>" + t("Ответьте на несколько вопросов, и по ответам я подскажу подходящий формат.") + "</p>" +
      '<div class="foot"><div class="meta"><b class="q">' + t("Пройти квиз") + "</b></div>" + go + "</div></a>";
    host.innerHTML = cards + quiz;
    host.querySelectorAll(".sv").forEach(function (c) {
      c.addEventListener("pointermove", function (e) {
        if (e.pointerType !== "mouse") return;
        var r = c.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        c.style.transform = "perspective(900px) rotateX(" + (-py * 5).toFixed(2) + "deg) rotateY(" + (px * 6).toFixed(2) + "deg)";
      });
      c.addEventListener("pointerleave", function () { c.style.transform = ""; });
    });
  }

  /* ---------- проекты ---------- */
  var coverHTML = function (p, big) {
    var src = big && p.hero ? p.hero : p.img;
    return '<div class="cover" style="--c1:' + p.c1 + ";--c2:" + p.c2 + '">' +
      (src ? '<img src="/' + src + '" alt="' + t(p.title) + '" loading="lazy">' : '<span class="glyph" aria-hidden="true">' + p.glyph + "</span>") +
      "</div>";
  };

  /* главная: одна большая работа, остальные маленькие; клик по маленькой открывает её в большой карточке */
  function renderShowcase(host) {
    var all = window.PROJECTS, cur = (all.filter(function (x) { return x.id === "tasqly"; })[0] || all[0]).id, busy = false;
    host.innerHTML = '<div class="sc-main" id="sc-main" data-reveal></div><div class="sc-grid" id="sc-grid" data-reveal style="--d:.1s"></div>';
    var main = document.getElementById("sc-main"), grid = document.getElementById("sc-grid");
    function cv(p) { return '<div class="cover" style="--c1:' + p.c1 + ";--c2:" + p.c2 + '">' + (p.hero || p.img ? '<img src="/' + (p.hero || p.img) + '" alt="' + t(p.title) + '" loading="lazy">' : '<span class="glyph" aria-hidden="true">' + p.glyph + "</span>") + "</div>"; }
    function draw() {
      var p = all.filter(function (x) { return x.id === cur; })[0];
      main.innerHTML = '<a class="sc-pic" href="/work/' + p.id + '" aria-label="' + t(p.title) + '">' + cv(p) + "</a>" +
        '<div class="sc-info"><p class="sc-type">' + t(p.type) + "</p><h3>" + t(p.title) + "</h3><p class=\"sc-text\">" + t(p.short) + '</p><a class="btn" href="/work/' + p.id + '">' + t("Открыть проект") + " " + ARROW + "</a></div>";
      var rest = all.filter(function (x) { return x.id !== cur; });
      grid.style.setProperty("--cols", Math.min(rest.length, 4));
      grid.innerHTML = rest.map(function (x) {
        return '<button type="button" class="sc-card" data-id="' + x.id + '">' + cv(x) + '<span class="sc-name">' + t(x.title) + '</span><span class="sc-sub">' + t(x.type) + "</span></button>";
      }).join("");
    }
    draw();
    grid.addEventListener("click", function (e) {
      var b = e.target.closest(".sc-card");
      if (!b) return;
      if (busy) return;
      busy = true;
      main.classList.add("swap"); grid.classList.add("swap");
      if (window.innerWidth < 900) main.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(function () {
        cur = b.getAttribute("data-id");
        draw();
        void main.offsetWidth;
        main.classList.remove("swap"); grid.classList.remove("swap");
        setTimeout(function () { busy = false; }, 450);
      }, 300);
    });
  }

  function renderWorks() {
    var host = document.getElementById("works");
    if (!host || !window.PROJECTS) return;
    if (host.hasAttribute("data-showcase")) { renderShowcase(host); return; }
    var list = window.PROJECTS.filter(function (p) { return host.hasAttribute("data-featured") ? p.featured : true; });
    host.innerHTML = list.map(function (p, i) {
      return '<a class="work" href="/work/' + p.id + '" data-cat="' + p.cat + '" data-real="' + (p.real ? 1 : 0) + '" data-reveal style="--d:' + ((i % 2) * 0.12) + 's">' +
        coverHTML(p) +
        '<div class="work-info"><div class="t">' + t(p.type) + "</div><h3>" + t(p.title) + ARROW + "</h3><p>" + t(p.short) + "</p></div></a>";
    }).join("");

    var f = document.getElementById("filters");
    if (f) {
      var cat = "all", real = false;
      var apply = function () {
        host.querySelectorAll(".work").forEach(function (w) {
          var hide = (cat !== "all" && w.getAttribute("data-cat") !== cat) || (real && w.getAttribute("data-real") !== "1");
          w.classList.toggle("hide", hide);
        });
      };
      f.addEventListener("click", function (e) {
        var sw = e.target.closest(".sw");
        if (sw) { real = sw.getAttribute("aria-checked") !== "true"; sw.setAttribute("aria-checked", String(real)); apply(); return; }
        var c = e.target.closest(".chip");
        if (!c) return;
        f.querySelectorAll(".chip").forEach(function (x) { x.setAttribute("aria-pressed", x === c ? "true" : "false"); });
        cat = c.getAttribute("data-cat");
        apply();
      });
    }
  }

  /* ---------- страница кейса ---------- */
  var CAT = { web: "Сайты", telegram: "Telegram", app: "Приложения", minecraft: "Minecraft" };
  function renderCase() {
    var host = document.getElementById("case-body");
    if (!host || !window.PROJECTS) return;
    var id = document.body.getAttribute("data-id");
    var list = window.PROJECTS;
    var i = list.map(function (x) { return x.id; }).indexOf(id);
    if (i < 0) return;
    var p = list[i];
    var prev = list[(i + list.length - 1) % list.length];
    var next = list[(i + 1) % list.length];
    document.title = t(p.title) + " — " + t("Кейс") + " — gDev";

    var crumbs = document.getElementById("case-crumbs");
    if (crumbs) crumbs.innerHTML = '<a href="/">' + t("Главная") + '</a><i>/</i><a href="/portfolio">' + t("Портфолио") + "</a><i>/</i><span>" + t(p.type) + "</span>";
    var kick = document.getElementById("case-type");
    var h1 = document.getElementById("case-title");
    if (kick) kick.textContent = t(p.type);
    if (h1) h1.textContent = t(p.title);
    var act = document.getElementById("case-actions");
    if (act) {
      act.innerHTML = (p.links[0] ? '<a class="btn light" href="' + p.links[0].url + '" target="_blank" rel="noopener">' + t(p.links[0].label) + ARROW.replace("<svg", '<svg width="16" height="16"') + "</a>" : "") +
        '<a class="btn ghost" href="/portfolio">' + t("Все работы") + "</a>";
    }

    var host0 = p.links[0] ? p.links[0].url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "";
    var facts = [
      [t("Тип проекта"), t(p.type)],
      [t("Направление"), t(CAT[p.cat] || p.cat)],
      [t("Год"), "2026"],
      [t("Разработано"), "gDev"],
      [t("Технологии"), p.stack.join(", ")]
    ];
    if (host0) facts.push([t("Ссылка"), '<a href="' + p.links[0].url + '" target="_blank" rel="noopener">' + host0 + "</a>"]);
    var more = p.links.slice(1).map(function (l) {
      return '<a class="btn ghost" href="' + l.url + '" target="_blank" rel="noopener">' + t(l.label) + ARROW.replace("<svg", '<svg width="16" height="16"') + "</a>";
    }).join("");

    var chips = p.stack.map(function (s) { return "<em>" + s + "</em>"; }).join("");
    var did = p.points.map(function (x) { return "<li>" + t(x) + "</li>"; }).join("");
    var cyr = /[А-Яа-я]/.test(t(p.title));
    if (h1 && !cyr) h1.classList.add("px");
    host.innerHTML =
      '<div class="cmeta" data-reveal>' +
      '<div><dl><dt>' + t("Тип проекта") + "</dt><dd>" + t(p.type) + "</dd><dt>" + t("Направление") + "</dt><dd>" + t(CAT[p.cat] || p.cat) + "</dd></dl></div>" +
      '<div><dl><dt>' + t("Год") + "</dt><dd>2026</dd><dt>" + t("Разработано") + "</dt><dd>gDev</dd>" + (host0 ? "<dt>" + t("Ссылка") + '</dt><dd><a href="' + p.links[0].url + '" target="_blank" rel="noopener">' + host0 + "</a></dd>" : "") + "</dl></div>" +
      '<div><dl><dt>' + t("Технологии") + '</dt><dd class="chips">' + chips + "</dd></dl></div></div>" +
      '<div class="ctwo"><div class="ctabs" data-reveal><div class="ctab-list" role="tablist">' +
      '<button type="button" role="tab" aria-selected="true" data-t="o">' + t("Обзор") + "</button>" +
      '<button type="button" role="tab" aria-selected="false" data-t="d">' + t("Что внутри") + "</button>" +
      '<button type="button" role="tab" aria-selected="false" data-t="s">' + t("Ссылки") + "</button></div>" +
      '<div class="ctab-body" data-p="o"><p class="case-desc">' + t(p.desc) + "</p></div>" +
      '<div class="ctab-body" data-p="d" hidden><ul class="pts">' + did + "</ul></div>" +
      '<div class="ctab-body" data-p="s" hidden><div class="sheet-links">' + (p.links[0] ? '<a class="btn light" href="' + p.links[0].url + '" target="_blank" rel="noopener">' + t(p.links[0].label) + "</a>" : "") + more + "</div></div></div>" +
      '<div class="case-pic" data-reveal style="--d:.12s">' + ((p.img || p.hero) ? '<img src="/' + (p.img || p.hero) + '" alt="' + t(p.title) + '">' : "") + "</div></div>" +
      '<div class="cnav" data-reveal><a class="cn-back" href="/portfolio">‹ ' + t("Все работы") + '</a><a class="cn-next" href="/work/' + next.id + '">' + t("Следующий проект") + ": " + t(next.title) + "</a></div>"
    host.querySelector(".ctab-list").addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      host.querySelectorAll(".ctab-list button").forEach(function (x) { x.setAttribute("aria-selected", String(x === b)); });
      host.querySelectorAll(".ctab-body").forEach(function (x) { x.hidden = x.getAttribute("data-p") !== b.getAttribute("data-t"); });
    });
  }

  /* живой предпросмотр: сайт открывается прямо в рамке ноутбука или телефона */
  function initDemo(cover, p) {
    if (!cover) return;
    var phone = p.demo.device === "phone";
    var live = null;
    function fit() {
      if (!live) return;
      var w = phone ? 390 : 1280, h = phone ? 780 : 800, box = live.querySelector(".demo-fit");
      var k = Math.min(1, box.clientWidth / w);
      var fr = live.querySelector("iframe");
      fr.style.width = w + "px"; fr.style.height = h + "px"; fr.style.transform = "scale(" + k + ")";
      box.style.height = Math.round(h * k) + "px";
    }
    (function () {
      live = document.createElement("div");
      live.className = "demo " + (phone ? "demo-phone" : "demo-laptop");
      live.innerHTML = '<div class="demo-top"><span class="demo-hint">' + t("Это живой сайт: листай и нажимай") + '</span></div>' +
        '<div class="demo-dev"><div class="demo-fit"><div class="demo-load">' + t("Загрузка…") + '</div><iframe title="' + t(p.title) + '" src="' + p.demo.url + '" loading="eager" referrerpolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe></div></div>' + (phone ? "" : '<div class="demo-base"></div>');
      cover.classList.add("demo-on");
      cover.appendChild(live);
      live.querySelector("iframe").addEventListener("load", function () { var l = live && live.querySelector(".demo-load"); if (l) l.remove(); });
      window.addEventListener("resize", fit); fit();
    })();
  }

  /* ---------- лента стека ---------- */
  function renderTicker() {
    var tk = document.getElementById("ticker");
    if (!tk || !window.STACK) return;
    var items = window.STACK.map(function (s) { return "<span>" + t(s) + "</span>"; }).join("");
    tk.innerHTML = '<div class="stack">' + items + "</div>";
  }

  /* ---------- faq ---------- */
  function initFaq() {
    var all = document.querySelectorAll(".qa");
    all.forEach(function (qa) {
      var b = qa.querySelector("button");
      b.setAttribute("aria-expanded", qa.classList.contains("open") ? "true" : "false");
      b.addEventListener("click", function () {
        var willOpen = !qa.classList.contains("open");
        // открыт только один вопрос: остальные закрываются
        all.forEach(function (o) {
          o.classList.remove("open");
          o.querySelector("button").setAttribute("aria-expanded", "false");
        });
        if (willOpen) {
          qa.classList.add("open");
          b.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* ---------- запуск ---------- */
  buildLayout();
  initMenu();
  initTransitions();
  renderServices();
  renderWorks();
  renderCase();
  renderTicker();
  initFaq();
  splitWords();
  // небольшая пауза, чтобы первая анимация успела проиграться после загрузки шрифтов
  var intro = document.querySelector(".intro");
  var wait = intro ? (window.matchMedia("(max-width: 680px)").matches ? 900 : 1250) : 120;
  if (intro) {
    intro.addEventListener("animationend", function (e) { if (e.animationName === "introOut") intro.remove(); });
    setTimeout(function () { if (intro.parentNode) intro.remove(); }, 4000);
  }
  var started = false;
  function startReveal() { if (started) return; started = true; setTimeout(initReveal, wait); }
  window.addEventListener("load", startReveal);
  if (document.readyState === "complete") startReveal();

  /* мягкая прокрутка колёсиком, лёгкое скольжение (только мышь/трекпад, на телефоне родная) */
  (function () {
    var target = window.scrollY, cur = target, raf = 0;
    function max() { return document.documentElement.scrollHeight - window.innerHeight; }
    function jump(y) { window.scrollTo({ top: y, left: 0, behavior: "instant" }); }
    function tick() {
      var d = target - cur;
      if (Math.abs(d) < 0.4) { cur = target; jump(cur); raf = 0; return; }
      cur += d * 0.065;
      jump(cur);
      raf = requestAnimationFrame(tick);
    }
    window.addEventListener("wheel", function (e) {
      if (e.ctrlKey || e.defaultPrevented || document.body.classList.contains("menu-open")) return;
      if (e.target.closest && e.target.closest("textarea, input, select, [data-native-scroll]")) return;
      e.preventDefault();
      if (!raf) { cur = window.scrollY; target = cur; }
      var dy = e.deltaMode === 1 ? e.deltaY * 32 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY;
      target = Math.max(0, Math.min(max(), target + dy * 0.8));
      if (!raf) raf = requestAnimationFrame(tick);
    }, { passive: false });
    // клавиши, якоря и перетаскивание ползунка двигают страницу сами: синхронизируемся
    window.addEventListener("scroll", function () {
      if (!raf) { cur = target = window.scrollY; }
      else if (Math.abs(window.scrollY - cur) > 60) { cancelAnimationFrame(raf); raf = 0; cur = target = window.scrollY; }
    }, { passive: true });
  })();

  /* карточки проектов: наклоняются за курсором, на телефоне вращаются от свайпа вбок */
  (function () {
    var SEL = ".sc-pic", cur = null, st = null, moved = 0, raf = 0;
    function cover(el) { return el.querySelector(".cover"); }
    function apply(c, rx, ry, gx, gy, k) {
      c.style.transform = "perspective(900px) rotateX(" + rx.toFixed(2) + "deg) rotateY(" + ry.toFixed(2) + "deg) scale(" + (1 + k * 0.01).toFixed(3) + ")";
      c.style.setProperty("--gx", gx + "%"); c.style.setProperty("--gy", gy + "%");
    }
    function reset(c) {
      if (!c) return;
      c.classList.remove("tilting"); c.classList.add("tilt-back");
      c.style.transform = ""; c.style.removeProperty("--gx"); c.style.removeProperty("--gy");
    }
    function move(c, e, el, drag) {
      var r = c.getBoundingClientRect();
      var px = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)), py = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
      var max = 5;
      if (drag) max *= 1.6;
      c.classList.remove("tilt-back"); c.classList.add("tilting");
      apply(c, (0.5 - py) * max, (px - 0.5) * max * 1.6, Math.round(px * 100), Math.round(py * 100), 1);
    }
    document.addEventListener("pointermove", function (e) {
      if (st && st.id === e.pointerId) {
        moved = Math.max(moved, Math.abs(e.clientX - st.x) + Math.abs(e.clientY - st.y));
        if (e.pointerType === "touch") { if (Math.abs(e.clientX - st.x) < 4) return; }
        move(st.c, e, st.el, true); return;
      }
      if (e.pointerType !== "mouse") return;
      var el = e.target.closest && e.target.closest(SEL);
      if (!el) { if (cur) { reset(cover(cur)); cur = null; } return; }
      if (cur && cur !== el) reset(cover(cur));
      cur = el; var c = cover(el); if (c) move(c, e, el, false);
    }, { passive: true });
    document.addEventListener("pointerdown", function (e) {
      var el = e.target.closest && e.target.closest(SEL);
      if (!el || (e.pointerType === "mouse" && e.button !== 0)) return;
      var c = cover(el); if (!c) return;
      st = { id: e.pointerId, x: e.clientX, y: e.clientY, el: el, c: c }; moved = 0;
    }, { passive: true });
    function up(e) {
      if (!st || st.id !== e.pointerId) return;
      var c = st.c; st = null;
      if (e.pointerType === "mouse" && cur) { return; }
      reset(c);
    }
    document.addEventListener("pointerup", up, { passive: true });
    document.addEventListener("pointercancel", up, { passive: true });
    document.addEventListener("click", function (e) {
      if (moved > 8 && e.target.closest && e.target.closest(SEL)) { e.preventDefault(); e.stopPropagation(); }
      moved = 0;
    }, true);
    document.addEventListener("dragstart", function (e) { if (e.target.closest && e.target.closest(SEL)) e.preventDefault(); });
  })();
})();

// этапы: раскрывается одна карточка, по наведению или нажатию
(function () {
  var box = document.querySelector(".steps");
  if (!box) return;
  var items = [].slice.call(box.querySelectorAll(".step"));
  function on(el) { items.forEach(function (s) { s.classList.toggle("on", s === el); }); }
  items.forEach(function (s) {
    s.addEventListener("mouseenter", function () { if (matchMedia("(hover: hover)").matches) on(s); });
    s.addEventListener("click", function () { on(s); });
  });
  on(items[0]);
})();
