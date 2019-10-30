// global
var curX = 60;
var curY = 60;
// var unit = 30;

// function

// function newValue(z) {
//     return (unit * z);
// }

function drawPower(x, y, a) {
    ctx.arc(x, y, a, 0, 2 * Math.PI);
    return 1;
}

function horizontal(x, y, nb, z) {
    for (i = 0; i < nb; i++) {
        // console.log("x: "+x+" / y: "+y);
        ctx.moveTo(x, y);
        ctx.beginPath();
        if ((y == bottomY) && ((x == leftX) || (x == rightX))) {
            color= "#ff581a";
            var r= drawPower(x, y, 8);
            console.log("x: " + x + " / y: " + y);
        }
        else {
            color= "#cef410";
            var r= drawPower(x, y, 3);
        }
        ctx.fillStyle = color;
        ctx.fill();
        x += (unit * z);
    }
    return x;
}

function vertical(x, y, nb, z) {

    var color;
    for (i = 0; i < nb; i++) {
        ctx.moveTo(x, y);
        ctx.beginPath();
        if ((y == topY) && ((x == leftX) || (x == rightX))) {
            color= "#ff581a";
            var r= drawPower(x, y, 8);
            console.log("x: " + x + " / y: " + y);
        }
        else {
            color= "#cef410";
            var r= drawPower(x, y, 3);
        }
        ctx.fillStyle = color;
        ctx.fill();
        y += (unit * z);
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

curX = horizontal(curX, curY, 12, 1);
curX += (unit * 2);
curX = horizontal(curX, curY, 12, 1);
curX -= (unit * 26);
curY += (unit * 4);
curX = horizontal(curX, curY, 25, 1);
curY -= (unit * 3);
curY = vertical(curX, curY, 6, 1);
curX = horizontal(curX, curY, 5, -1);
curY -= (unit * 6);
curY = vertical(curX, curY, 24, 1);
curX = horizontal(curX, curY, 5, 1);
curY = vertical(curX, curY, 3, 1);
curX = horizontal(curX, curY, 25, -1);
curY = vertical(curX, curY, 3, -1);
curX = horizontal(curX, curY, 5, 1);
curY = vertical(curX, curY, 21, -1);
curY -= unit;
curY = vertical(curX, curY, 3, -1);
curX -= (unit * 5);
curY += unit;
curY = vertical(curX, curY, 3, 1);
curY += unit;
curY = vertical(curX, curY, 2, 1);
curX = horizontal(curX, curY, 5, 1);
curX += (unit * 6);
curY -= (unit * 6);
curY = vertical(curX, curY, 3, 1);
curX += (unit * 3);
curY -= unit;
// ctx.fillStyle = "#202020";
curY = vertical(curX, curY, 3, -1);
curX -= (unit * 6);
curY += (unit * 5);
curY = vertical(curX, curY, 2, 1);
curX = horizontal(curX, curY, 3, 1);
curY = vertical(curX, curY, 3, 1);
curX += (unit * 3);
curY -= unit;
curY = vertical(curX, curY, 2, -1);
curX = horizontal(curX, curY, 3, 1);
curY = vertical(curX, curY, 3, -1);
curX -= (unit * 13);
curY += (unit * 15);
curX = horizontal(curX, curY, 4, -1);
curY = vertical(curX, curY, 3, 1);
curX = horizontal(curX, curY, 2, 1);
curY = vertical(curX, curY, 3, 1);
curX += (unit * 4);
curY -= (unit * 6);
curX = horizontal(curX, curY, 5, 1);
curY = vertical(curX, curY, 3, 1);
curX += (unit * 3);
curY -= unit;
curY = vertical(curX, curY, 2, -1);
curX = horizontal(curX, curY, 6, 1);
curX -= unit;
curY += (unit * 3);
curX = horizontal(curX, curY, 14, -1);
curX += (unit * 3);
curY += unit;
curY = vertical(curX, curY, 2, 1);
curX = horizontal(curX, curY, 3, 1);
curY = vertical(curX, curY, 3, 1);
curX += (unit * 3);
curY -= unit;
curY = vertical(curX, curY, 2, -1);
curX = horizontal(curX, curY, 3, 1);
curY = vertical(curX, curY, 3, -1);
curX += (unit * 4);
curY -= (unit * 3);
curX = horizontal(curX, curY, 4, 1);
curY = vertical(curX, curY, 3, 1);
curX = horizontal(curX, curY, 2, -1);
curY = vertical(curX, curY, 3, 1);
