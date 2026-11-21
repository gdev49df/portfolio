/* Оценка стоимости: ИИ на Groq через воркер gws-estimate. Если воркер недоступен, считаем сами по прайсу. */
(function () {
  "use strict";
  var host = document.getElementById("estimate");
  if (!host) return;

  var API = window.GWS_ESTIMATE_API || "https://gws-estimate.wsmp.workers.dev/";
  var t = window.t || function (x) { return x; };
  var lang = (window.I18N && window.I18N.lang) || "ru";
  var TG = "https://t.me/ddwwks";

  // прайс студии (доллары) и дополнения. те же числа в воркере и в карточках услуг
  var BASE = [
    { re: /магазин|shop|store/i, name: "Интернет-магазин", price: 310, days: 14 },
    { re: /pwa|приложен|app\b|кабинет|офлайн|без сети|установ/i, name: "PWA-приложение", price: 130, days: 7 },
    { re: /многостранич|корпоратив|компани|клиник|школ|студи/i, name: "Многостраничный сайт", price: 190, days: 7 },
    { re: /визитк/i, name: "Сайт-визитка", price: 70, days: 4 },
    { re: /./, name: "Одностраничный лендинг", price: 80, days: 5 }
  ];
  var ADD = [
    { re: /запис|бронир|booking/i, name: "Онлайн-запись", price: 60, days: 2 },
    { re: /оплат|payment|kaspi|stripe/i, name: "Онлайн-оплата", price: 80, days: 3 },
    { re: /кабинет|авториз|логин|регистрац|вход/i, name: "Личный кабинет и вход", price: 120, days: 5 },
    { re: /админ|cms|панел/i, name: "Админ-панель", price: 100, days: 4 },
    { re: /язык|многоязыч|english|двух языках/i, name: "Дополнительный язык", price: 30, days: 2 },
    { re: /уведомлен|push|пуш/i, name: "Push-уведомления", price: 40, days: 2 },
    { re: /\bии\b|\bai\b|нейросет|ассистент/i, name: "ИИ-помощник", price: 90, days: 4 },
    { re: /анимац|3d|уникальн|сложный дизайн/i, name: "Сложный дизайн и анимации", price: 40, days: 2 },
    { re: /seo|поисков/i, name: "SEO-основы", price: 25, days: 1 }
  ];

  function local(text) {
    var b = BASE.filter(function (x) { return x.re.test(text); })[0];
    var items = [{ name: t(b.name), price: b.price }], sum = b.price, days = b.days;
    ADD.forEach(function (a) { if (a.re.test(text)) { items.push({ name: t(a.name), price: a.price }); sum += a.price; days += a.days; } });
    return { min: sum, max: Math.round(sum * 1.3 / 10) * 10, dmin: days, dmax: Math.ceil(days * 1.4), items: items, note: t("Цена зависит от объёма текстов, дизайна и числа страниц."), src: "price" };
  }

  function ask(text) {
    var ctl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctl) ctl.abort(); }, 9000);
    return fetch(API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: text, lang: lang }), signal: ctl ? ctl.signal : undefined })
      .then(function (r) { clearTimeout(timer); if (!r.ok) throw new Error("http " + r.status); return r.json(); })
      .then(function (d) { if (d.error === "off_topic") return d; if (d.error || !d.min) throw new Error("bad"); d.src = "ai"; return d; });
  }

  var EX = ["Лендинг для барбершопа с онлайн-записью", "PWA-приложение для записи клиентов с уведомлениями", "Интернет-магазин с онлайн-оплатой"];
  host.innerHTML =
    '<div class="est-in"><label for="est-t">' + t("Что нужно сделать") + '</label><textarea id="est-t" maxlength="700" placeholder="' + t("Например: сайт для барбершопа с онлайн-записью и заявками в WhatsApp") + '"></textarea>' +
    '<div class="est-ex">' + EX.map(function (x) { return '<button type="button">' + t(x) + "</button>"; }).join("") + "</div>" +
    '<button class="btn light" type="button" id="est-go">' + t("Оценить стоимость") + '</button></div>' +
    '<div class="est-out" id="est-out" aria-live="polite"><p class="est-empty">' + t("Опишите проект слева, и здесь появится ориентир по цене и срокам.") + "</p></div>";

  var ta = host.querySelector("textarea"), out = host.querySelector("#est-out"), go = host.querySelector("#est-go");
  Array.prototype.forEach.call(host.querySelectorAll(".est-ex button"), function (b) { b.addEventListener("click", function () { ta.value = b.textContent; ta.focus(); }); });

  function money(n) { return "$" + n; }
  function show(d, text) {
    if (d.error === "off_topic") { out.innerHTML = '<p class="est-empty">' + t("Я оцениваю только сайты и PWA-приложения. Опишите, что нужно сделать на сайте или в приложении.") + "</p>"; return; }
    var unit = lang === "kk" ? "күн" : lang === "en" ? "days" : "дней";
    var msg = t("Здравствуйте! Хочу заказать:") + " " + text + " (" + t("ориентир") + " " + money(d.min) + "–" + money(d.max) + ")";
    out.innerHTML =
      '<div class="est-top"><span>' + t("Ориентир") + "</span><span>" + (d.src === "ai" ? t("Расчёт ИИ") : t("Расчёт по прайсу")) + "</span></div>" +
      "<div><div class=\"est-sum\">" + money(d.min) + " – " + money(d.max) + '</div><p class="est-days">' + t("Срок") + ": " + d.dmin + "–" + d.dmax + " " + unit + "</p></div>" +
      '<ul class="est-list">' + d.items.map(function (i) { return "<li><span></span><b>" + money(i.price) + "</b></li>"; }).join("") + "</ul>" +
      '<p class="est-note"></p>' +
      '<div class="est-act"><a class="btn light" target="_blank" rel="noopener" href="' + TG + "?text=" + encodeURIComponent(msg) + '">' + t("Обсудить в Telegram") + '</a><a class="btn ghost" href="/quiz">' + t("Пройти квиз") + "</a></div>";
    var spans = out.querySelectorAll(".est-list li span");
    d.items.forEach(function (i, k) { spans[k].textContent = i.name; }); // текст ИИ вставляем как текст, не как разметку
    out.querySelector(".est-note").textContent = (d.note ? d.note + " " : "") + t("Это ориентир, не оферта. Точную цену назову после обсуждения.");
  }

  go.addEventListener("click", function () {
    var text = ta.value.trim();
    if (text.length < 8) { out.innerHTML = '<p class="est-empty">' + t("Опишите проект хотя бы в нескольких словах.") + "</p>"; ta.focus(); return; }
    go.disabled = true;
    out.innerHTML = '<div class="est-load"><i></i>' + t("Считаю…") + '</div><div class="est-sk" aria-hidden="true"><b></b><s></s><s></s><s></s></div>';
    ask(text).catch(function () { return local(text); }).then(function (d) { show(d, text); go.disabled = false; });
  });
})();
