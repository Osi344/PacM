const spritePacmanX= 850;
const taillePacman= 45;
var indPacman= 0;
var spritePacmanLeft= new Array(350,400,450);
var pacman= {
    posX: "450",
    posY: "720",
    caseX: "",
    caseY: "",
};
var img= new Image();

function centerPacman(a) {
    a-= (taillePacman-1) / 2;
    return a;
}

window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("sprite");

    //    ctx.drawImage(img, 10, 10);
    var x= centerPacman(pacman.posX);
    var y= centerPacman(pacman.posY);
    console.log("spritePacmanX: "+spritePacmanX);
    console.log("indPacman" + spritePacmanLeft[1]);
    ctx.drawImage(img, spritePacmanX, spritePacmanLeft[1], 45, 45, x, y, 45, 45);
};

function showCoords(event) {  
    var canvas = document.getElementById("myCanvas");
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX;
    var y = event.clientY; 
    x-= rect.x;
    y-= rect.y;
    var caseX= Math.round((x/30),0);
    var caseY= Math.round((y/30),0);
    var coords = "X: " + x + " - caseX: " + caseX + " --*-- Y: " + y + " - caseY: "+ caseY;
    document.getElementById("coordText").innerHTML = coords;
    console.log("coords: "+coords);
 }  

 function clearCoords() {  
    document.getElementById("coordText").innerHTML = "";
 }  