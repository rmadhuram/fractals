
var c = document.getElementById("drawing");
var ctx = c.getContext("2d");
ctx.strokeStyle = "#188c37";
let nDiv = 7

function rnd(n) {
  return Math.random()*2*n - n
  //return 0
}

function drawTree(x, y, len, angle, n) {
  if (n == 0) return

 
  let x1 = x + len * Math.cos(angle * Math.PI / 180)
  let y1 = y + len * Math.sin(angle * Math.PI / 180)
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);

  for (let i = 1; i <= nDiv; i++) {
    let l = i * len / nDiv
    x1 = x + l * Math.cos(angle * Math.PI / 180)
    y1 = y + l * Math.sin(angle * Math.PI / 180)
    drawTree(x1, y1, 0.7 * (len - l + len/nDiv) + rnd(5), angle + 130 + rnd(5), n-1)
    drawTree(x1, y1, 0.7 * (len - l + len/nDiv) + rnd(5), angle - 130 + rnd(5), n-1)
  }

  //ctx.lineWidth = (n == 4) ? 2 : 1;

  ctx.stroke()
}

ctx.fillStyle = "#735019";
ctx.beginPath();
ctx.moveTo(450, 750);
ctx.lineTo(550, 750);
ctx.lineTo(500, 50);
ctx.fill();

drawTree(500, 600, 500, 270, 4);
