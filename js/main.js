(function () {
  "use strict";

  // адрес без .html: /services.html -> /services
  (function cleanUrl() {
    var p = location.pathname;
    if (/\.html$/.test(p) && window.history && history.replaceState) {
      var c = p.replace(/index\.html$/, "").replace(/\.html$/, "");
      history.replaceState(null, "", (c || "/") + location.search + location.hash);
    }
  })();

  var TG = "https://t.me/ddwwks";
  var IG = "https://www.instagram.com/bauyrzhanov_12_/";
  var TT = "https://www.tiktok.com/@bauyrzhanov_12_";
  var WA = "https://wa.me/77751213271";
  var t = window.t || function (x) { return x; };
  var page = document.body.getAttribute("data-page") || "";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  var CAT = { web: "Сайты", app: "Приложения" };
  var LOGO = "G<i>web</i>Studio";

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return [].slice.call((r || document).querySelectorAll(s)); }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function kb(p) { return p.spec ? p.spec.kb + " " + t("КБ") : ""; }

  /* ---------- шапка, меню, подвал ---------- */
  function buildLayout() {
    var NAV = [["portfolio", "/portfolio", t("Портфолио")], ["services", "/services", t("Услуги")], ["about", "/about", t("Обо мне")], ["contacts", "/contacts", t("Контакты")]];
    var cur = (window.I18N && window.I18N.lang) || "ru";
    var langs = [["ru", "RU"], ["kk", "KZ"], ["en", "EN"]].map(function (l) {
      return '<button type="button" data-l="' + l[0] + '" aria-pressed="' + (l[0] === cur) + '" lang="' + l[0] + '">' + l[1] + "</button>";
    }).join("");
    var hdr = $("#site-header");
    if (hdr) {
      var links = NAV.map(function (n) { return '<a href="' + n[1] + '"' + (n[0] === page ? ' aria-current="page"' : "") + ">" + n[2] + "</a>"; }).join("");
      var mlinks = NAV.concat([["quiz", "/quiz", t("Обсудить проект")]]).map(function (n) { return '<a class="m" href="' + n[1] + '">' + n[2] + ARROW + "</a>"; }).join("");
      var soc = [["tg", TG], ["wa", WA], ["ig", IG], ["tt", TT]].map(function (s) { return '<a href="' + s[1] + '" target="_blank" rel="noopener" aria-label="' + s[0] + '">' + window.ICONS[s[0]] + "</a>"; }).join("");
      hdr.innerHTML =
        '<header class="hdr"><a class="logo" href="/" aria-label="GwebStudio, ' + t("на главную") + '">' + LOGO + "</a>" +
        '<nav class="nav" aria-label="' + t("Основное меню") + '">' + links + "</nav>" +
        '<div class="clock" aria-hidden="true"><span>' + t("Астана") + '</span><b data-tz="5">--:--</b></div>' +
        '<div class="lang" role="group" aria-label="' + t("Язык") + '">' + langs + "</div>" +
        '<a class="btn light hdr-cta" href="/quiz">' + t("Обсудить проект") + "</a>" +
        '<button class="menu-btn" type="button" aria-label="' + t("Открыть меню") + '" aria-expanded="false"><i></i></button></header>' +
        '<nav class="mnav" aria-label="' + t("Основное меню") + '">' + mlinks + '<div class="lang" role="group">' + langs + '</div><div class="soc">' + soc + "</div></nav>";
      $$(".lang button", hdr).forEach(function (b) {
        b.addEventListener("click", function () { if (b.getAttribute("data-l") !== cur) window.setLang(b.getAttribute("data-l")); });
      });
      var btn = $(".menu-btn", hdr);
      function setMenu(o) {
        document.documentElement.classList.toggle("menu-open", o);
        btn.setAttribute("aria-expanded", o ? "true" : "false");
        document.body.style.overflow = o ? "hidden" : "";
      }
      btn.addEventListener("click", function () { setMenu(!document.documentElement.classList.contains("menu-open")); });
      $$(".mnav a", hdr).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
      var tick = function () {
        var d = new Date(), u = d.getTime() + d.getTimezoneOffset() * 60000;
        $$("[data-tz]", hdr).forEach(function (el) {
          var x = new Date(u + 3600000 * +el.getAttribute("data-tz"));
          el.textContent = pad(x.getHours()) + ":" + pad(x.getMinutes());
        });
      };
      tick();
      setInterval(tick, 15000);
    }

    var ftr = $("#site-footer");
    if (ftr) {
      var flinks = NAV.map(function (n) { return '<a href="' + n[1] + '">' + n[2] + "</a>"; }).join("");
      var cons = [["Telegram", TG], ["WhatsApp", WA], ["Instagram", IG], ["TikTok", TT]].map(function (c) { return '<a href="' + c[1] + '" target="_blank" rel="noopener">' + c[0] + "</a>"; }).join("");
      ftr.innerHTML =
        '<footer class="ftr"><div class="wrap"><div class="ftr-grid">' +
        '<div class="ftr-brand"><a class="logo" href="/" aria-label="GwebStudio, ' + t("на главную") + '">' + LOGO + "</a><p>" + t("Делаю современные сайты для бизнеса в Казахстане и России: от первой идеи до результата, который приводит клиентов и заявки.") + "</p></div>" +
        '<nav class="ftr-col" aria-label="' + t("Разделы") + '"><h4>' + t("Разделы") + "</h4>" + flinks + "</nav>" +
        '<div class="ftr-col"><h4>' + t("Связаться") + "</h4>" + cons + "</div></div>" +
        '<div class="ftr-bot"><span>© <span id="y"></span> GwebStudio. ' + t("Создано") + ' <a href="' + IG + '" target="_blank" rel="noopener">@bauyrzhanov_12_</a></span>' +
        '<a href="/privacy">' + t("Политика конфиденциальности") + "</a></div></div></footer>";
      $("#y").textContent = new Date().getFullYear();
    }
  }

  /* ---------- пружина: как у Apple, скорость передаётся из жеста ---------- */
  function spring(from, vel, to, response, damping, step, done) {
    var x = from, v = vel, w = 2 * Math.PI / response, k = w * w, c = 2 * damping * w, last = performance.now(), raf;
    function frame(now) {
      var dt = Math.max(0, Math.min((now - last) / 1000, 1 / 30));
      last = now;
      v += (-k * (x - to) - c * v) * dt;
      x += v * dt;
      if (Math.abs(x - to) < 0.01 && Math.abs(v) < 0.05) { step(to); if (done) done(); return; }
      step(x);
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return function cancel() { cancelAnimationFrame(raf); };
  }
  function rubber(over, dim) { var c = 0.55; return (over * dim * c) / (dim + c * Math.abs(over)); }

  /* ---------- устройство с живым сайтом: ноутбук и телефон ---------- */
  function buildDevice(host, list, startId, withMeta, phoneProj) {
    var solo = list.length === 1 && list[0].demo && list[0].demo.device === "phone";
    var cur = Math.max(0, list.map(function (p) { return p.id; }).indexOf(startId));
    var SB = "allow-scripts allow-same-origin allow-forms allow-popups";
    var phoneP = solo ? list[0] : phoneProj;
    var lap = solo ? "" : '<div class="dev-lid"><div class="dev-screen"><iframe title="" sandbox="' + SB + '" referrerpolicy="no-referrer" loading="lazy"></iframe><div class="dev-load">' + t("Загрузка…") + '</div></div></div><div class="dev-base"></div>';
    var ph = phoneP ? '<div class="ph"><div class="ph-body"><div class="ph-screen"><iframe title="' + phoneP.title + '" sandbox="' + SB + '" referrerpolicy="no-referrer" loading="lazy" src="' + phoneP.demo.url + '"></iframe></div></div><span class="ph-tag">PWA · ' + phoneP.title + "</span></div>" : "";
    host.innerHTML =
      '<div class="stage"><div class="dev' + (solo ? " solo" : "") + '">' + lap + ph + "</div></div>" +
      (withMeta ? '<div class="dev-meta"><div class="dev-tabs" role="group" aria-label="' + t("Проекты") + '"></div><div class="dev-spec"></div><p class="dev-hint">' + t("Экран живой: листайте и нажимайте. Рамку можно потянуть.") + "</p></div>" : "");
    var dev = $(".dev", host), screen = $(".dev-screen", host), frame = screen ? $("iframe", screen) : null, pscreen = $(".ph-screen", host);
    var tabs = $(".dev-tabs", host), specEl = $(".dev-spec", host);

    function fit() {
      if (screen) frame.style.transform = "scale(" + (screen.clientWidth / 1280) + ")";
      if (pscreen) $("iframe", pscreen).style.transform = "scale(" + (pscreen.clientWidth / 390) + ")";
    }
    if (window.ResizeObserver) { var ro = new ResizeObserver(fit); if (screen) ro.observe(screen); if (pscreen) ro.observe(pscreen); } else window.addEventListener("resize", fit);
    fit();

    function show(i, instant) {
      cur = i;
      var p = list[i];
      if (frame) {
        frame.title = p.title;
        screen.classList.remove("ready");
        var timer = setTimeout(function () { screen.classList.add("ready"); }, 7000);
        frame.onload = function () { clearTimeout(timer); screen.classList.add("ready"); };
        frame.src = p.demo.url;
      }
      if (tabs) $$("button", tabs).forEach(function (b, j) { b.setAttribute("aria-pressed", j === i); });
      if (specEl) {
        specEl.innerHTML = "<span>" + t("Вес первой загрузки") + "<b>" + kb(p) + "</b></span><span>" + t("Запросов") + "<b>" + p.spec.req + "</b></span><span>" + t("Стек") + "<b>" + p.stack.slice(0, 3).join(", ") + "</b></span>" +
          '<a class="link-arrow" href="/work/' + p.id + '">' + t("Открыть кейс") + "</a>";
      }
      if (!instant && !reduce) { pose.ry = -22; pose.rx = 8; render(); go(); }
    }
    if (tabs) {
      tabs.innerHTML = list.map(function (p) { return '<button type="button" aria-pressed="false">' + t(p.title) + "</button>"; }).join("");
      $$("button", tabs).forEach(function (b, i) { b.addEventListener("click", function () { if (i !== cur) show(i); }); });
    }

    /* наклон и бросок */
    var rest = solo ? { rx: 0, ry: 0 } : { rx: window.innerWidth < 900 ? 2 : 3, ry: window.innerWidth < 900 ? -5 : -9 };
    var pose = { rx: rest.rx, ry: rest.ry }, cancels = [];
    function render() { dev.style.setProperty("--rx", pose.rx.toFixed(2) + "deg"); dev.style.setProperty("--ry", pose.ry.toFixed(2) + "deg"); }
    function stop() { cancels.forEach(function (c) { c(); }); cancels = []; }
    function go(vx, vy) {
      stop();
      cancels.push(spring(pose.ry, vx || 0, rest.ry, 0.5, 0.78, function (v) { pose.ry = v; render(); }));
      cancels.push(spring(pose.rx, vy || 0, rest.rx, 0.5, 0.78, function (v) { pose.rx = v; render(); }));
    }
    var drag = null, hist = [];
    dev.addEventListener("pointerdown", function (e) {
      if (e.target.closest(".dev-screen, .ph-screen") || (e.pointerType === "mouse" && e.button !== 0)) return;
      stop();
      drag = { x: e.clientX, y: e.clientY, rx: pose.rx, ry: pose.ry };
      hist = [{ x: e.clientX, y: e.clientY, t: performance.now() }];
      try { dev.setPointerCapture(e.pointerId); } catch (_) {}
      dev.classList.add("drag");
    });
    window.addEventListener("pointermove", function (e) {
      if (!drag) return;
      var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      var ry = drag.ry + dx * 0.22, rx = drag.rx - dy * 0.18;
      var lim = 34;
      if (Math.abs(ry) > lim) ry = Math.sign(ry) * (lim + rubber(Math.abs(ry) - lim, 40));
      if (Math.abs(rx) > lim) rx = Math.sign(rx) * (lim + rubber(Math.abs(rx) - lim, 40));
      pose.ry = ry; pose.rx = rx; render();
      hist.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      if (hist.length > 6) hist.shift();
    });
    function release() {
      if (!drag) return;
      drag = null;
      dev.classList.remove("drag");
      var a = hist[0], b = hist[hist.length - 1], dt = Math.max((b.t - a.t) / 1000, 0.016);
      var recent = performance.now() - b.t < 80;
      go(recent ? ((b.x - a.x) / dt) * 0.22 : 0, recent ? (-(b.y - a.y) / dt) * 0.18 : 0);
    }
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
    window.addEventListener("blur", release);
    render();
    show(cur, true);
    return { show: show };
  }

  /* ---------- главная ---------- */
  function initHome() {
    var host = $("#device");
    if (!host || !window.PROJECTS) return;
    var sites = window.PROJECTS.filter(function (p) { return p.demo && p.demo.device !== "phone"; });
    var app = window.PROJECTS.filter(function (p) { return p.demo && p.demo.device === "phone"; })[0];
    var first = sites.map(function (p) { return p.id; }).indexOf("shawarma");
    buildDevice(host, sites, sites[first < 0 ? 0 : first].id, true, app);
  }

  function initFormats() {
    if (!window.SERVICES || !window.I18N) return;
    var pwa = window.SERVICES.filter(function (s) { return s.id === "pwa"; })[0];
    var web = window.SERVICES.filter(function (s) { return s.id !== "pwa"; });
    var minOf = function (arr, k) { return Math.min.apply(null, arr.map(function (s) { return s[k]; })); };
    $$("[data-from]").forEach(function (el) {
      var s = el.getAttribute("data-from") === "pwa" ? [pwa] : web;
      el.textContent = window.I18N.priceFrom(minOf(s, "price")) + " · " + window.I18N.daysFrom(minOf(s, "days"));
    });
  }

  function renderWorks() {
    var host = $("#works");
    if (!host || !window.PROJECTS) return;
    host.innerHTML = window.PROJECTS.map(function (p) {
      var pwa = p.stack.indexOf("PWA") > -1 ? '<span class="tag">PWA</span>' : "";
      return '<a class="bc" href="/work/' + p.id + '"><div class="pic"><img src="/' + p.img + '" alt="' + t(p.title) + '" loading="lazy" width="1280" height="800"></div><div class="cap"><h3>' + t(p.title) + '</h3><span class="ty">' + t(p.type) + '</span><span class="meta">' + pwa + "<span>" + kb(p) + "</span></span></div></a>";
    }).join("");
  }

  function renderServices() {
    var host = $("#svt");
    if (!host || !window.SERVICES) return;
    host.innerHTML = window.SERVICES.map(function (s) {
      return '<a class="svr" href="/quiz"><h3>' + t(s.title) + "</h3><p>" + t(s.text) + '</p><span class="pr">' + window.I18N.priceFrom(s.price) + '</span><span class="dy">' + (s.days ? window.I18N.daysFrom(s.days) : t("срок обсуждается")) + "</span>" + ARROW + "</a>";
    }).join("");
  }

  function initFaq() {
    var all = $$(".qa");
    all.forEach(function (qa) {
      var b = $("button", qa);
      b.setAttribute("aria-expanded", qa.classList.contains("open") ? "true" : "false");
      b.addEventListener("click", function () {
        var open = !qa.classList.contains("open");
        all.forEach(function (o) { o.classList.remove("open"); $("button", o).setAttribute("aria-expanded", "false"); });
        if (open) { qa.classList.add("open"); b.setAttribute("aria-expanded", "true"); }
      });
    });
  }

  /* ---------- портфолио ---------- */
  function renderPortfolio() {
    var host = $("#pgrid");
    if (!host || !window.PROJECTS) return;
    var fl = $("#filters");
    var cats = ["all"].concat(window.PROJECTS.map(function (p) { return p.cat; }).filter(function (c, i, a) { return CAT[c] && a.indexOf(c) === i; }));
    var cur = "all";
    function draw() {
      var items = window.PROJECTS.filter(function (p) { return cur === "all" || p.cat === cur; });
      host.innerHTML = items.map(function (p) {
        return '<a class="pcard" href="/work/' + p.id + '"><div class="pic"><img src="/' + p.img + '" alt="' + t(p.title) + '" loading="lazy" width="1280" height="800"></div><div class="row"><h3>' + t(p.title) + '</h3><span class="kb">' + kb(p) + "</span></div><p>" + t(p.short) + "</p></a>";
      }).join("");
    }
    if (fl) {
      fl.innerHTML = cats.map(function (c) { return '<button type="button" class="chip" data-c="' + c + '" aria-pressed="' + (c === cur) + '">' + t(c === "all" ? "Все" : CAT[c]) + "</button>"; }).join("");
      $$(".chip", fl).forEach(function (b) {
        b.addEventListener("click", function () {
          cur = b.getAttribute("data-c");
          $$(".chip", fl).forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
          draw();
        });
      });
    }
    draw();
  }

  /* ---------- кейс ---------- */
  function renderCase() {
    var host = $("#case");
    if (!host || !window.PROJECTS) return;
    var id = document.body.getAttribute("data-id"), list = window.PROJECTS;
    var i = list.map(function (x) { return x.id; }).indexOf(id);
    if (i < 0) return;
    var p = list[i], prev = list[(i + list.length - 1) % list.length], next = list[(i + 1) % list.length];
    document.title = t(p.title) + " — " + t("Кейс") + " — GwebStudio";
    host.innerHTML =
      '<div class="wrap"><div class="case-head"><nav class="crumbs" aria-label="breadcrumb"><a href="/">' + t("Главная") + "</a><i>/</i><a href=\"/portfolio\">" + t("Портфолио") + "</a><i>/</i><span>" + t(p.title) + "</span></nav>" +
      "<h1>" + t(p.title) + '</h1><p class="lead">' + t(p.short) + "</p></div>" +
      '<div class="case-layout"><aside class="passport"><h2>' + t("Паспорт проекта") + "</h2><dl>" +
      "<div><dt>" + t("Тип") + "</dt><dd>" + t(p.type) + "</dd></div>" +
      "<div><dt>" + t("Направление") + "</dt><dd>" + t(CAT[p.cat] || p.cat) + "</dd></div>" +
      "<div><dt>" + t("Вес первой загрузки") + '</dt><dd class="num">' + kb(p) + "</dd></div>" +
      "<div><dt>" + t("Запросов") + '</dt><dd class="num">' + p.spec.req + "</dd></div>" +
      "<div><dt>" + t("Стек") + "</dt><dd>" + p.stack.join(", ") + "</dd></div>" +
      "<div><dt>" + t("Адаптив") + "</dt><dd>" + t("Телефон, планшет, компьютер") + "</dd></div></dl></aside>" +
      '<div class="case-main"><div id="case-device"></div>' +
      '<div class="case-text"><div><h2>' + t("О проекте") + "</h2><p>" + t(p.desc) + '</p></div><div><h2>' + t("Что внутри") + '</h2><ul class="pts">' + p.points.map(function (x) { return "<li>" + t(x) + "</li>"; }).join("") + "</ul></div></div></div></div></div>" +
      '<div class="wrap"><nav class="case-nav" aria-label="' + t("Другие проекты") + '"><a href="/work/' + prev.id + '"><span>' + t("Предыдущий проект") + "</span><b>" + t(prev.title) + '</b></a><a href="/work/' + next.id + '"><span>' + t("Следующий проект") + "</span><b>" + t(next.title) + "</b></a></nav></div>";
    var dv = $("#case-device");
    if (p.demo) buildDevice(dv, [p], p.id, false);
    else dv.innerHTML = '<div class="case-cover"><img src="/' + (p.hero || p.img) + '" alt="' + t(p.title) + '"></div>';
  }

  /* ---------- запуск ---------- */
  buildLayout();
  initHome();
  renderWorks();
  renderServices();
  renderPortfolio();
  renderCase();
  initFormats();
  initFaq();
})();
