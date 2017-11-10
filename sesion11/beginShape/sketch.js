/*
Taller audiovisual y multimedia II
Jose Santorcuato
*/



function setup() {
  //createCanvas(640, 480); ancho y alto
  createCanvas(innerWidth,innerHeight);
  //Con esto podemos comentar una linea
  /*Con esto
  podemos
  comentar
  muchas
  lineas
  */

}

function draw() {
background(255);

//Con PI
strokeWeight(8);
beginShape();
vertex(30, 20);
vertex(80, 20);
vertex(80, 70);
vertex(30, 70);
endShape(CLOSE);

}
