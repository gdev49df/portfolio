/* Оценка стоимости. Тип и дополнения выбираются тегами, цена считается сразу по прайсу.
   Описание «для чего» уходит в ИИ (Groq через воркер gws-estimate) по кнопке «Уточнить с ИИ». */
(function () {
  "use strict";
  var host = document.getElementById("estimate");
  if (!host) return;

  var API = window.GWS_ESTIMATE_API || "https://gws-estimate.wsmp.workers.dev/";
  var t = window.t || function (x) { return x; };
  var lang = (window.I18N && window.I18N.lang) || "ru";
  var TG = "https://t.me/ddwwks";

  // прайс студии, доллары. те же числа в воркере и в карточках услуг
  var TYPES = [
    { id: "card", name: "Сайт-визитка", price: 70, days: 4 },
    { id: "land", name: "Лендинг", price: 80, days: 5 },
    { id: "multi", name: "Многостраничный сайт", price: 190, days: 7 },
    { id: "corp", name: "Корпоративный сайт", price: 190, days: 7 },
    { id: "shop", name: "Интернет-магазин", price: 310, days: 14 }
  ];
  var PWA = { name: "PWA-приложение", price: 130, days: 7 };
  var PWA_SITE = { name: "PWA-версия сайта", price: 50, days: 3, why: "Манифест, иконки, офлайн-режим через Service Worker и установка на экран телефона" }; // установка и офлайн для сайта
  var ADD = [
    { id: "pay", name: "Онлайн-оплата", price: 80, days: 3 },
    { id: "book", name: "Онлайн-запись", price: 60, days: 2 },
    { id: "acc", name: "Личный кабинет и вход", price: 120, days: 5 },
    { id: "adm", name: "Админ-панель", price: 100, days: 4 },
    { id: "lang", name: "Дополнительный язык", price: 30, days: 2 },
    { id: "push", name: "Push-уведомления", price: 40, days: 2 },
    { id: "ai", name: "ИИ-помощник", price: 90, days: 4 },
    { id: "des", name: "Сложный дизайн и анимации", price: 40, days: 2 },
    { id: "seo", name: "SEO-основы", price: 25, days: 1 }
  ];

  var st = { type: null, pwa: false, add: {} };
  var ai = null; // результат ИИ, пока выбор не менялся

  function calc() {
    var type = TYPES.filter(function (x) { return x.id === st.type; })[0];
    if (!type && !st.pwa) return null;
    var items = [], sum = 0, days = 0;
    function put(x) { items.push({ name: t(x.name), price: x.price, why: x.why ? t(x.why) : "" }); sum += x.price; days += x.days; }
    if (type) put(type);
    if (st.pwa) put(type ? PWA_SITE : PWA);
    ADD.forEach(function (a) { if (st.add[a.id]) put(a); });
    return { min: sum, max: Math.round(sum * 1.3 / 10) * 10, dmin: days, dmax: Math.ceil(days * 1.4), items: items, note: t("Цена зависит от объёма текстов, дизайна и числа страниц."), src: "price" };
  }

  function chips(list, cls) { return list.map(function (x) { return '<button type="button" data-k="' + x.id + '" aria-pressed="false">' + t(x.name) + "</button>"; }).join(""); }

  host.innerHTML =
    '<div class="est-in">' +
    '<label for="est-t">' + t("Для чего сайт или приложение") + '</label><textarea id="est-t" maxlength="500" placeholder="' + t("Например: барбершоп, нужна запись клиентов и заявки в WhatsApp") + '"></textarea>' +
    '<p class="est-lab">' + t("Тип") + '</p><div class="tags" id="est-types">' + chips(TYPES) + '<button type="button" data-k="pwa" aria-pressed="false">' + t(PWA.name) + "</button></div>" +
    '<p class="est-lab">' + t("Что добавить") + '</p><div class="tags" id="est-add">' + chips(ADD) + "</div>" +
    '<button class="btn ghost" type="button" id="est-ai">' + t("Уточнить с ИИ") + "</button></div>" +
    '<div class="est-out" id="est-out" aria-live="polite"></div>';

  var ta = host.querySelector("textarea"), out = host.querySelector("#est-out"), aiBtn = host.querySelector("#est-ai");

  function money(n) { return "$" + n; }

  var calm = !(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
  var shown = null, swapT = 0, tweenId = 0;

  function swap(html, then) { // плавная смена целого блока: гасим, меняем, показываем
    clearTimeout(swapT);
    if (!calm) { out.innerHTML = html; if (then) then(); return; }
    out.classList.add("fade");
    swapT = setTimeout(function () { out.innerHTML = html; if (then) then(); out.classList.remove("fade"); }, out.children.length ? 180 : 0);
  }

  function row(i) {
    var li = document.createElement("li");
    li.innerHTML = '<div class="e-row"><div class="e-in"><span></span><b></b></div></div>';
    li.setAttribute("data-n", i.name);
    if (calm) li.className = "off";
    return li;
  }
  function fillRow(li, i) {
    var sp = li.querySelector("span"); sp.textContent = i.name;
    if (i.why) { var w = document.createElement("small"); w.textContent = i.why; sp.appendChild(w); }
    li.querySelector("b").textContent = money(i.price);
  }
  function syncList(ul, items) {
    var keep = {};
    items.forEach(function (i) { keep[i.name] = true; });
    Array.prototype.forEach.call(ul.children, function (li) {
      if (!keep[li.getAttribute("data-n")] && !li.classList.contains("leaving")) {
        if (!calm) { li.remove(); return; }
        li.classList.add("leaving", "off");
        setTimeout(function () { li.remove(); }, 420);
      }
    });
    var prev = null;
    items.forEach(function (i) {
      var li = null;
      Array.prototype.forEach.call(ul.children, function (x) { if (x.getAttribute("data-n") === i.name && !x.classList.contains("leaving")) li = x; });
      var fresh = !li;
      if (fresh) li = row(i);
      fillRow(li, i);
      var at = prev ? prev.nextSibling : ul.firstChild;
      while (at && at.classList && at.classList.contains("leaving")) at = at.nextSibling;
      if (li !== at) ul.insertBefore(li, at);
      if (fresh && calm) { void li.offsetHeight; requestAnimationFrame(function () { li.classList.remove("off"); }); }
      prev = li;
    });
  }

  function show(d) {
    if (!d) {
      shown = null;
      swap(
        '<div class="est-top"><span>' + t("Ориентир") + "</span><span>—</span></div>" +
        '<div><div class="est-sum ghost">$— – $—</div><p class="est-days">' + t("Срок") + ": —</p></div>" +
        '<ol class="est-steps"><li>' + t("Выберите тип сайта или приложения") + "</li><li>" + t("Отметьте, что нужно добавить") + "</li><li>" + t("Опишите проект словами, и ИИ уточнит расчёт") + "</li></ol>"
      );
      return;
    }
    var unit = lang === "kk" ? "күн" : lang === "en" ? "days" : "дней";
    var tags = (st.type ? [t(TYPES.filter(function (x) { return x.id === st.type; })[0].name)] : []).concat(st.pwa ? [t(PWA.name)] : [], ADD.filter(function (a) { return st.add[a.id]; }).map(function (a) { return t(a.name); }));
    var msg = t("Здравствуйте! Хочу заказать:") + " " + (ta.value.trim() ? ta.value.trim() + ". " : "") + tags.join(", ") + " (" + t("ориентир") + " " + money(d.min) + "–" + money(d.max) + ")";
    var label = d.src === "ai" ? t("Расчёт ИИ") : t("Расчёт по прайсу") + (d.why ? " · " + d.why : "");
    var note = (d.note ? d.note + " " : "") + t("Это ориентир, не оферта. Точную цену назову после обсуждения.");
    var href = TG + "?text=" + encodeURIComponent(msg);

    function fill(from) {
      var f = from || { min: d.min, max: d.max };
      out.querySelector(".est-top span:last-child").textContent = label;
      var sum = out.querySelector(".est-sum"), a = f.min, b = f.max;
      if (from) {
        sum.dataset.tw = "1"; var id = ++tweenId, t0 = performance.now();
        (function step(now) {
          if (id !== tweenId) return;
          var k = calm ? Math.min(1, (now - t0) / 380) : 1, e = 1 - Math.pow(1 - k, 3);
          sum.textContent = money(Math.round(a + (d.min - a) * e)) + " – " + money(Math.round(b + (d.max - b) * e));
          if (k < 1) requestAnimationFrame(step);
        })(t0);
      } else sum.textContent = money(d.min) + " – " + money(d.max);
      out.querySelector(".est-days").textContent = t("Срок") + ": " + d.dmin + "–" + d.dmax + " " + unit;
      out.querySelector(".est-note").textContent = note;
      out.querySelector(".est-act .btn.light").setAttribute("href", href);
      syncList(out.querySelector(".est-list"), d.items);
    }

    if (shown && out.querySelector(".est-list")) { var from = shown; shown = { min: d.min, max: d.max }; fill(from); return; }
    shown = { min: d.min, max: d.max };
    swap(
      '<div class="est-top"><span>' + t("Ориентир") + "</span><span></span></div>" +
      '<div><div class="est-sum"></div><p class="est-days"></p></div>' +
      '<ul class="est-list"></ul><p class="est-note"></p>' +
      '<div class="est-act"><a class="btn light" target="_blank" rel="noopener">' + t("Обсудить в Telegram") + '</a><a class="btn ghost" href="/quiz">' + t("Пройти квиз") + "</a></div>",
      function () { fill(null); }
    );
  }

  // что с чем несовместимо: недоступное затемняем, а уже выбранное снимаем
  function blocked(id) {
    if (id === "push" && !st.pwa) return "Нужно PWA-приложение";
    if (st.type === "card" && ["pay", "acc", "adm", "ai"].indexOf(id) > -1) return "Недоступно для сайта-визитки";
    if (st.type === "land" && ["acc", "adm"].indexOf(id) > -1) return "Недоступно для лендинга";
    return "";
  }
  function applyRules() {
    Array.prototype.forEach.call(host.querySelectorAll("#est-add button"), function (b) {
      var k = b.getAttribute("data-k"), why = blocked(k);
      if (why && st.add[k]) { st.add[k] = false; b.setAttribute("aria-pressed", "false"); }
      b.disabled = !!why;
      if (why) b.title = t(why); else b.removeAttribute("title");
    });
  }
  function refresh() { ai = null; applyRules(); show(calc()); }

  host.addEventListener("click", function (e) {
    var b = e.target.closest(".tags button");
    if (!b) return;
    var k = b.getAttribute("data-k"), on = b.getAttribute("aria-pressed") !== "true";
    if (k === "pwa") st.pwa = on;
    else if (TYPES.some(function (x) { return x.id === k; })) {
      st.type = on ? k : null;
      Array.prototype.forEach.call(host.querySelectorAll("#est-types button"), function (x) { if (x.getAttribute("data-k") !== "pwa") x.setAttribute("aria-pressed", String(on && x === b)); });
      refresh(); return;
    } else st.add[k] = on;
    b.setAttribute("aria-pressed", String(on));
    refresh();
  });

  function ask(text) {
    var ctl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctl) ctl.abort(); }, 9000);
    return fetch(API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: text, lang: lang }), signal: ctl ? ctl.signal : undefined })
      .then(function (r) { clearTimeout(timer); if (!r.ok) return r.json().catch(function () { return {}; }).then(function (j) { throw new Error("http " + r.status + (j.error ? " " + j.error : "")); }); return r.json(); })
      .then(function (d) { if (d.error === "off_topic") return d; if (d.error || !d.min) throw new Error("bad"); d.src = "ai"; return d; });
  }

  aiBtn.addEventListener("click", function () {
    var purpose = ta.value.trim();
    if (purpose.length < 8) { ta.focus(); out.innerHTML = '<p class="est-empty">' + t("Опишите, для чего нужен проект, чтобы уточнить расчёт с ИИ.") + "</p>"; return; }
    var tg = [];
    if (st.type) tg.push("тип: " + TYPES.filter(function (x) { return x.id === st.type; })[0].name);
    if (st.pwa) tg.push("PWA-приложение");
    ADD.forEach(function (a) { if (st.add[a.id]) tg.push(a.name); });
    var text = purpose + (tg.length ? ". Выбрано: " + tg.join(", ") : "");
    aiBtn.disabled = true;
    out.innerHTML = '<div class="est-load"><i></i>' + t("Считаю…") + '</div><div class="est-sk" aria-hidden="true"><b></b><s></s><s></s><s></s></div>';
    ask(text).then(function (d) {
      if (d.error === "off_topic") { out.innerHTML = '<p class="est-empty">' + t("Я оцениваю только сайты и PWA-приложения. Опишите, что нужно сделать на сайте или в приложении.") + "</p>"; return; }
      ai = d; show(d);
    }).catch(function (e) {
      if (window.console) console.warn("estimate: ИИ недоступен,", e && e.message);
      var d = calc();
      if (d) { d.why = (e && e.message) || "error"; show(d); } else out.innerHTML = '<p class="est-empty">' + t("Не получилось уточнить с ИИ. Выберите тип, и я посчитаю по прайсу.") + "</p>";
    }).then(function () { aiBtn.disabled = false; });
  });

  applyRules();
  show(null);
})();
