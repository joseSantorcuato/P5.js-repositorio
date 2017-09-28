/*
Taller audiovisual y multimedia II
Jose Santorcuato
*/
function setup() {
createCanvas(innerWidth,innerHeight);
background(255);
}

function draw() {

var r = random(255);
var posix = random(1280);
var posiy = random(800);
var recta = random(10,50);
var evalua = 1000;
var i = 0;

while (i < evalua) {

dibujaRectangulos(r,posix,posiy,recta,recta);
i += 1;

}

}


function dibujaRectangulos(color,posx,posy,ancho,alto){

  fill(color);
  rect(posx,posy,ancho,alto);
  fill(color);
  rect(posx,posy,ancho,alto);
  fill(color);
  rect(posx,posy,ancho,alto);
}
