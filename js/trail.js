/* Шлейф из символов за курсором: символы встают строго по клеткам сетки и гаснут. */
(function () {
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var CH = "@0DA/\\:.", CW = 9, CHT = 16, LIFE = 1000;
  var cv = document.createElement("canvas");
  cv.setAttribute("aria-hidden", "true");
  cv.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:90;mix-blend-mode:difference";
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

  var cells = {}, last = null, run = false;

  function put(col, row) {
    var k = col + "_" + row, now = performance.now();
    if (cells[k] && now - cells[k].t < LIFE * .35) return;
    cells[k] = { col: col, row: row, c: CH.charAt((Math.random() * CH.length) | 0), t: now };
  }

  addEventListener("pointermove", function (e) {
    if (e.pointerType && e.pointerType !== "mouse") return;
    var x = e.clientX, y = e.clientY;
    var x0 = last ? last.x : x, y0 = last ? last.y : y;
    var d = Math.max(Math.abs(x - x0) / CW, Math.abs(y - y0) / CHT), n = Math.max(1, Math.ceil(d));
    for (var i = 1; i <= n; i++) {
      var px = x0 + (x - x0) * i / n, py = y0 + (y - y0) * i / n;
      var col = Math.floor(px / CW), row = Math.floor(py / CHT);
      put(col, row);
      if (Math.random() < .45) put(col + (Math.random() < .5 ? -1 : 1), row);
      if (Math.random() < .2) put(col, row + (Math.random() < .5 ? -1 : 1));
    }
    last = { x: x, y: y };
    if (!run) { run = true; requestAnimationFrame(tick); }
  }, { passive: true });
  document.addEventListener("pointerleave", function () { last = null; });

  function tick(now) {
    cx.clearRect(0, 0, W, H);
    cx.textAlign = "center"; cx.textBaseline = "middle";
    cx.font = '400 13px "Pixelify Sans", ui-monospace, Menlo, Consolas, monospace';
    cx.fillStyle = "#ffffff";
    var any = false;
    for (var k in cells) {
      var p = cells[k], a = 1 - (now - p.t) / LIFE;
      if (a <= 0) { delete cells[k]; continue; }
      any = true;
      cx.globalAlpha = a * .9;
      cx.fillText(p.c, p.col * CW + CW / 2, p.row * CHT + CHT / 2);
    }
    cx.globalAlpha = 1;
    if (any) requestAnimationFrame(tick); else { run = false; cx.clearRect(0, 0, W, H); }
  }
})();
