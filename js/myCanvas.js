// global

var curX = 20;
var curY = 20;
var unit= 30;

// function

function newValue (nb, z) {
  return (nb * unit * z);
}

function horizontal(x, y, nb, z) {
  // var a= (nb * unit * z);
  x+= newValue(nb, z);
  ctx.lineTo(x, y);
  return x;
}

function vertical(x, y, nb, z) {
  // var a= (nb * unit);
  y+= newValue(nb, z);
  ctx.lineTo(x, y);
  return y;
}

// canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// tour
ctx.beginPath();
ctx.lineWidth = "1";
ctx.strokeStyle = "blue";
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 13,1);
curY = vertical(curX, curY, 4,1);
curX = horizontal(curX, curY, 1,1);
curY = vertical(curX, curY, 4,-1);
curX = horizontal(curX, curY, 13,1);
curY = vertical(curX, curY, 9,1);
curX = horizontal(curX, curY, 5,-1);
curY = vertical(curX, curY, 4,1);
curX = horizontal(curX, curY, 5,1);
ctx.stroke(); // Draw it

curY+= newValue(2,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 5,-1);
curY = vertical(curX, curY, 4,1);
curX = horizontal(curX, curY, 5,1);
curY = vertical(curX, curY, 5,1);
curX = horizontal(curX, curY, 2,-1);
curY = vertical(curX, curY, 1,1);
curX = horizontal(curX, curY, 2,1);
curY = vertical(curX, curY, 5,1);
curX = horizontal(curX, curY, 27,-1);
curY = vertical(curX, curY, 5,-1);
curX = horizontal(curX, curY, 2,1);
curY = vertical(curX, curY, 1,-1);
curX = horizontal(curX, curY, 2,-1);
curY = vertical(curX, curY, 5,-1);
curX = horizontal(curX, curY, 5,1);
curY = vertical(curX, curY, 4,-1);
curX = horizontal(curX, curY, 5,-1);
ctx.stroke(); // Draw it

curY+= newValue(2,-1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 5,1);
curY = vertical(curX, curY, 4,-1);
curX = horizontal(curX, curY, 5,-1);
curY = vertical(curX, curY, 9,-1);
ctx.stroke(); // Draw it

curX+= newValue(2,1);
curY+= newValue(2,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 3,1);
curY = vertical(curX, curY, 2,1);
curX = horizontal(curX, curY, 3,-1);
curY = vertical(curX, curY, 2,-1);
ctx.stroke(); // Draw it

curX+= newValue(5,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 4,1);
curY = vertical(curX, curY, 2,1);
curX = horizontal(curX, curY, 4,-1);
curY = vertical(curX, curY, 2,-1);
ctx.stroke(); // Draw it

curX+= newValue(9,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 4,1);
curY = vertical(curX, curY, 2,1);
curX = horizontal(curX, curY, 4,-1);
curY = vertical(curX, curY, 2,-1);
ctx.stroke(); // Draw it

curX+= newValue(6,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 3,1);
curY = vertical(curX, curY, 2,1);
curX = horizontal(curX, curY, 3,-1);
curY = vertical(curX, curY, 2,-1);
ctx.stroke(); // Draw it

curX+= newValue(20,-1);
curY+= newValue(4,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 3,1);
curY = vertical(curX, curY, 1,1);
curX = horizontal(curX, curY, 3,-1);
curY = vertical(curX, curY, 1,-1);
ctx.stroke(); // Draw it

curX+= newValue(5,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 1,1);
curY = vertical(curX, curY, 3,1);
curX = horizontal(curX, curY, 3,1);
curY = vertical(curX, curY, 1,1);
curX = horizontal(curX, curY, 3,-1);
curY = vertical(curX, curY, 3,1);
curX = horizontal(curX, curY, 1,-1);
curY = vertical(curX, curY, 7,-1);
ctx.stroke(); // Draw it

curX+= newValue(3,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 7,1);
curY = vertical(curX, curY, 1,1);
curX = horizontal(curX, curY, 3,-1);
curY = vertical(curX, curY, 3,1);
curX = horizontal(curX, curY, 1,-1);
curY = vertical(curX, curY, 3,-1);
curX = horizontal(curX, curY, 3,-1);
curY = vertical(curX, curY, 1,-1);
ctx.stroke(); // Draw it

curX+= newValue(9,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 1,1);
curY = vertical(curX, curY, 7,1);
curX = horizontal(curX, curY, 1,-1);
curY = vertical(curX, curY, 3,-1);
curX = horizontal(curX, curY, 3,-1);
curY = vertical(curX, curY, 1,-1);
curX = horizontal(curX, curY, 3,1);
curY = vertical(curX, curY, 3,-1);
ctx.stroke(); // Draw it

curX+= newValue(3,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 3,1);
curY = vertical(curX, curY, 1,1);
curX = horizontal(curX, curY, 3,-1);
curY = vertical(curX, curY, 1,-1);
ctx.stroke(); // Draw it

curX+= newValue(15,-1);
curY+= newValue(13,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 1,1);
curY = vertical(curX, curY, 4,-1);
curX = horizontal(curX, curY, 1,-1);
curY = vertical(curX, curY, 4,1);
ctx.stroke(); // Draw it

curX+= newValue(3,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 3,1);
curY = vertical(curX, curY, 3,1);
curX = horizontal(curX, curY, 1,1);
curY = vertical(curX, curY, 3,-1);
curX = horizontal(curX, curY, 3,1);
curY = vertical(curX, curY, 1,-1);
curX = horizontal(curX, curY, 7,-1);
curY = vertical(curX, curY, 1,1);
ctx.stroke(); // Draw it

curX+= newValue(9,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 1,1);
curY = vertical(curX, curY, 4,-1);
curX = horizontal(curX, curY, 1,-1);
curY = vertical(curX, curY, 4,1);
ctx.stroke(); // Draw it

curX+= newValue(17,-1);
curY+= newValue(2,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 3,1);
curY = vertical(curX, curY, 4,1);
curX = horizontal(curX, curY, 1,-1);
curY = vertical(curX, curY, 3,-1);
curX = horizontal(curX, curY, 2,-1);
curY = vertical(curX, curY, 1,-1);
ctx.stroke(); // Draw it

curX+= newValue(5,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 4,1);
curY = vertical(curX, curY, 1,1);
curX = horizontal(curX, curY, 4,-1);
curY = vertical(curX, curY, 1,-1);
ctx.stroke(); // Draw it

curX+= newValue(9,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 4,1);
curY = vertical(curX, curY, 1,1);
curX = horizontal(curX, curY, 4,-1);
curY = vertical(curX, curY, 1,-1);
ctx.stroke(); // Draw it

curX+= newValue(6,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 3,1);
curY = vertical(curX, curY, 1,1);
curX = horizontal(curX, curY, 2,-1);
curY = vertical(curX, curY, 3,1);
curX = horizontal(curX, curY, 1,-1);
curY = vertical(curX, curY, 4,-1);
ctx.stroke(); // Draw it

curX+= newValue(20,-1);
curY+= newValue(7,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 9,1);
curY = vertical(curX, curY, 1,-1);
curX = horizontal(curX, curY, 3,-1);
curY = vertical(curX, curY, 3,-1);
curX = horizontal(curX, curY, 1,-1);
curY = vertical(curX, curY, 3,1);
curX = horizontal(curX, curY, 5,-1);
curY = vertical(curX, curY, 1,1);
ctx.stroke(); // Draw it

curX+= newValue(11,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 1,1);
curY = vertical(curX, curY, 3,-1);
curX = horizontal(curX, curY, 3,1);
curY = vertical(curX, curY, 1,-1);
curX = horizontal(curX, curY, 7,-1);
curY = vertical(curX, curY, 1,1);
curX = horizontal(curX, curY, 3,1);
curY = vertical(curX, curY, 3,1);
ctx.stroke(); // Draw it

curX+= newValue(3,1);
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 9,1);
curY = vertical(curX, curY, 1,-1);
curX = horizontal(curX, curY, 5,-1);
curY = vertical(curX, curY, 3,-1);
curX = horizontal(curX, curY, 1,-1);
curY = vertical(curX, curY, 3,1);
curX = horizontal(curX, curY, 3,-1);
curY = vertical(curX, curY, 1,1);
ctx.stroke(); // Draw it

curX= 380;
curY= 380;
ctx.beginPath();
ctx.moveTo(curX, curY);
curX = horizontal(curX, curY, 2,-1);
curY = vertical(curX, curY, 4,1);
curX = horizontal(curX, curY, 7,1);
curY = vertical(curX, curY, 4,-1);
curX = horizontal(curX, curY, 2,-1);
ctx.stroke(); // Draw it

// cornerTR
// ctx.quadraticCurveTo(100, 20, 100, 25);
// cornerBR
// ctx.quadraticCurveTo(100, 120, 95, 120);
// cornerBL
// ctx.quadraticCurveTo(20, 120, 20, 115);
// cornerTL
// ctx.quadraticCurveTo(20, 20, 25, 20);
// fin de chemin

// cercle
// ctx.beginPath();
// ctx.arc(200, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();

// image 
// var img = document.createElement('img');
// img.src = '../net-logo-world-of-warships.png';
// var img = document.getElementById("WoWS");
// ctx.drawImage(img, 10, 10, 40, 40);

// var imgData = ctx.createImageData(200, 200);
// var i;
// for (i = 0; i < imgData.data.length; i += 4) {
  //   imgData.data[i + 0] = 0;
  //   imgData.data[i + 1] = 255;
  //   imgData.data[i + 2] = 0;
  //   imgData.data[i + 3] = 255;
  // }
  // ctx.putImageData(imgData, 10, 10);

  // ombre / a mettre avant le rectangle par exemple

  // ctx.shadowBlur = 20;
  // ctx.shadowColor = "black";

  // rectangle plein

  // ctx.fillStyle = "#FF0000";
  // ctx.fillRect(2, 2, 100, 100);

  // test gradient

  // var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
  // my_gradient.addColorStop(0, "black");
  // my_gradient.addColorStop(1, "white");
  // ctx.fillStyle = my_gradient;
  // ctx.fillRect(10, 10, 200, 400);

  // rectangle vide

  // ctx.strokeStyle = "000000";
  // ctx.lineWidth = 1;
  // ctx.strokeRect(10, 10, 50, 50);