/*
Taller audiovisual y multimedia II
Jose Santorcuato
*/


function setup() {
  //createCanvas(640, 480); ancho y alto
  createCanvas(innerWidth,innerHeight)
  //Con esto podemos comentar una linea
  /*Con esto
  podemos 
  comentar
  muchas 
  lineas
  */
  background(mouseX, mouseY,mouseX);//color de fondo, RGBA

}

function draw() {
  //background(0)
  //background(123,45,6);//color de fondo, RGB


  //background(mouseX, mouseY,mouseX);//color de fondo, RGB
  fill(255,255,55,64);
  ellipse(mouseX, mouseY, 80, 80);
}