/* Шлейф из символов за курсором. Только для мыши, без анимации при «уменьшить движение». */
(function () {
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var CH = "@0DA/\\:.";
  var cv = document.createElement("canvas");
  cv.setAttribute("aria-hidden", "true");
  cv.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:90";
  document.body.appendChild(cv);
  var cx = cv.getContext("2d"), dpr = 1, W = 0, H = 0;

  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    cx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  size();
  addEventListener("resize", size);

  var P = [], last = null, run = false, acc = 0, LIFE = 1100;

  function spawn(x, y) {
    P.push({ x: x + (Math.random() - .5) * 10, y: y + (Math.random() - .5) * 10, vx: (Math.random() - .5) * .25, vy: .1 + Math.random() * .3, c: CH.charAt((Math.random() * CH.length) | 0), t: performance.now(), s: 14 + ((Math.random() * 5) | 0) });
    if (P.length > 220) P.shift();
  }

  addEventListener("pointermove", function (e) {
    if (e.pointerType && e.pointerType !== "mouse") return;
    var x = e.clientX, y = e.clientY;
    if (last) {
      var dx = x - last.x, dy = y - last.y, d = Math.sqrt(dx * dx + dy * dy);
      acc += d;
      while (acc >= 9) { acc -= 9; var k = 1 - acc / (d || 1); spawn(last.x + dx * k, last.y + dy * k); }
    }
    last = { x: x, y: y };
    if (!run) { run = true; requestAnimationFrame(tick); }
  }, { passive: true });
  document.addEventListener("pointerleave", function () { last = null; });

  function tick(now) {
    cx.clearRect(0, 0, W, H);
    cx.textAlign = "center"; cx.textBaseline = "middle";
    for (var i = P.length - 1; i >= 0; i--) {
      var p = P[i], a = 1 - (now - p.t) / LIFE;
      if (a <= 0) { P.splice(i, 1); continue; }
      p.x += p.vx; p.y += p.vy;
      cx.globalAlpha = a * .95;
      cx.fillStyle = "#c4b5fd";
      cx.font = "400 " + p.s + 'px "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace';
      cx.fillText(p.c, p.x, p.y);
    }
    cx.globalAlpha = 1;
    if (P.length) requestAnimationFrame(tick); else { run = false; cx.clearRect(0, 0, W, H); }
  }
})();
