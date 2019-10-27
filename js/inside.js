// global
var curX = 50;
var curY = 50;
var unit = 30;

// function

// function newValue(z) {
//     return (unit * z);
// }

function horizontal(x, y, nb) {
    for (i = 0; i < nb; i++) {
        console.log("x: "+x+" / y: "+y);
        ctx.moveTo(x, y);
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fill();
        x += unit;
    }
    return x;
}

function vertical(x, y, nb) {
    for (i = 0; i < nb; i++) {
        console.log("x: "+x+" / y: "+y);
        ctx.moveTo(x, y);
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fill();
        y += unit;
    }
    return y;
}

function copy() {
    var imgData = ctx.getImageData(10, 10, 50, 50);
    ctx.putImageData(imgData, 10, 70);
}

// canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#cef410";

console.log("curX: "+curX+" / curY: "+curY);
curX= horizontal(curX, curY, 12);
curX+= (unit * 2);
curX= horizontal(curX, curY, 12);
curX-= (unit * 26);
curY+= (unit * 4);
curX= horizontal(curX, curY, 25);
curY-= (unit * 4);
curY= vertical(curX, curY, 8);


