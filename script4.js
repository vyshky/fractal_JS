var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let acsiom = "F-F-F-F";
let rule = "FF-F-F-F-FF";

let n = 4;
let angle = -90;
let angleIncrement = 45;

function RotateLine(ang) {
  angle += ang;
  x1 = Math.cos((Math.PI / 180.0) * angle) * l + x;
  y1 = Math.sin((Math.PI / 180.0) * angle) * l + y;
}
