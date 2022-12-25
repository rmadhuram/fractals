var c = document.getElementById("drawing");
var ctx = c.getContext("2d");
ctx.strokeStyle = "#004400";
let nDiv = 8

function drawTree(x, y, len, angle, n) {
  if (n == 0) return

  let x1 = x + len * Math.cos(angle * Math.PI / 180)
  let y1 = y + len * Math.sin(angle * Math.PI / 180)
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);

  for (let i = 2; i <= nDiv; i++) {
    let l = i * len / nDiv
    x1 = x + l * Math.cos(angle * Math.PI / 180)
    y1 = y + l * Math.sin(angle * Math.PI / 180)
    drawTree(x1, y1, 0.5 * (len - l + len/nDiv), angle + 120, n-1)
    drawTree(x1, y1, 0.5 * (len - l + len/nDiv), angle - 120, n-1)
  }

  ctx.stroke()
}

drawTree(500, 700, 600, 270, 3);
