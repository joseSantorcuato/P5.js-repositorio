/*
Taller audiovisual y multimedia II
Jose Santorcuato
*/
function setup() {
createCanvas(innerWidth,innerHeight);
}

function draw() {
background(255);
fill(0);
//IF ELSE. Si condicion se cumple hace x, si condicion no se cumple hace z
//IF puede ir solo, sin ELSE, hara x solo si se cumple la condicion
var valor = 3;

if (valor < 2){
  text("valor menor a 2 ", 5, 80);
}

else {
  text("valor mayor a 2 ", 5, 160);
}
}
