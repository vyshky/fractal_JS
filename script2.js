var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// ctx.fillStyle = "green";
// ctx.fillRect(10, 10, 100, 100);
// ctx.fillRect(110, 110, 100, 100);

ctx.fillStyle = "yellow";

// // треугольник
// ctx.beginPath(); // начало
// ctx.moveTo(900, 900); // 1 тока
// ctx.lineTo(700, 900); // 2 тока
// ctx.lineTo(800, 700); // 1 тока
// ctx.lineTo(900, 900); // 1 тока
// ctx.fill(); // закрасить
// ctx.strokeStyle = "green";
// ctx.stroke(); // контур
// ctx.closePath(); // конец

// // круг
// ctx.beginPath(); // начало
// ctx.arc(400, 600, 100, 0, 2 * Math.PI, false);
// ctx.fill(); // закрасить
// ctx.strokeStyle = "green";
// ctx.stroke(); // контур
// ctx.closePath(); // конец


// sin cos
let x = 300, // координаты начальной точки
  y = 300;
let x1, y1;  // координаты конца линии

let acsiom = "F-F-F-F";
let rule = "FF-F--F-F";
let drawing = acsiom;
let drawingLenght = 3;
let lengh = 5;
let angle = 0;

getDrawing();

function getDrawing() {
  drawing = acsiom;
  for (let i = 0; i < drawingLenght; i++) {
    drawing = drawing.replace(/F/g, rule);    
  }  
}
alert(drawing);

let i = 0
for(;i < drawing.length; i++)
{  
  if (drawing[i] == "F") {
    right();
  }
  if (drawing[i] == "-") {
    down();
  }
  if (drawing[i] == "+") {
    left()
  }  
}
//alert(i);

function down() {  
  angle += 90;
  x1 = Math.cos((Math.PI / 180.0) * angle) * lengh + x;
  y1 = Math.sin((Math.PI / 180.0) * angle) * lengh + y;
  ctx.beginPath(); // начало
  ctx.moveTo(x, y); // 1 точка
  ctx.lineTo(x1, y1); // 2 точка
  ctx.strokeStyle = "green"; // цвет контура
  ctx.stroke(); // контур
  ctx.closePath(); // конец
  x = x1;
  y = y1;
}

function right() {
  angle += 0;
  x1 = Math.cos((Math.PI / 180.0) * angle) * lengh + x;
  y1 = Math.sin((Math.PI / 180.0) * angle) * lengh + y;
  ctx.beginPath(); // начало
  ctx.moveTo(x, y); // 1 точка
  ctx.lineTo(x1, y1); // 2 точка
  ctx.strokeStyle = "green";
  ctx.stroke(); // контур
  ctx.closePath(); // конец
  x = x1;
  y = y1;
}

function up() {  
  angle += 270;
  x1 = Math.cos((Math.PI / 180.0) * angle) * lengh + x;
  y1 = Math.sin((Math.PI / 180.0) * angle) * lengh + y;
  ctx.beginPath(); // начало
  ctx.moveTo(x, y); // 1 точка
  ctx.lineTo(x1, y1); // 2 точка
  ctx.strokeStyle = "green";
  ctx.stroke(); // контур
  ctx.closePath(); // конец
  x = x1;
  y = y1;
}

function left() {
  angle += 180;
  x1 = Math.cos((Math.PI / 180.0) * angle) * lengh + x;
  y1 = Math.sin((Math.PI / 180.0) * angle) * lengh + y;
  ctx.beginPath(); // начало
  ctx.moveTo(x, y); // 1 точка
  ctx.lineTo(x1, y1); // 2 точка
  ctx.strokeStyle = "green";
  ctx.stroke(); // контур
  ctx.closePath(); // конец
  x = x1;
  y = y1;
}
