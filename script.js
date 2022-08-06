let canva = document.getElementById("canva");
let holst = canva.getContext("2d");
let btn = document.getElementById("btn");


let x = 900;
let y = 10;
let x1, y1;
let l = 5;
let acsiom = "F-F-F-F";
let rule = "FF-F-F-F-FF";

let n = 4;
let angle = 90;

let result = acsiom;

for (let i = 0; i < n; ++i) {
    result = result.replace(/F/g, rule);
    //alert(result);
}

function RotateLine(ang) {
    angle += ang;
    x1 = Math.cos(Math.PI / 180 * angle) * l + x;
    y1 = Math.sin(Math.PI / 180 * angle) * l + y;
}

btn.onclick = function () {

    alert(result.length);
    for (let i = 0; i < result.length; ++i) {

        if (result[i] == 'F') {
            RotateLine(0);
        }
        if (result[i] == '-') {
            RotateLine(90);
        }

        holst.strokeStyle="red";
        holst.beginPath();
        holst.moveTo(x, y);
        holst.lineTo(x1, y1);
        holst.closePath();
        holst.stroke();
        x = x1;
        y = y1;
    }
}
