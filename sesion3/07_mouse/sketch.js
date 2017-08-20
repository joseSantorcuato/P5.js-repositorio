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
  background(255);//color de fondo, RGB

}

function draw() {
  background(0);
  //background(123,45,6);//color de fondo, RGB


  //background(mouseX, mouseY,mouseX);//color de fondo, RGB
  fill(122);
  rectMode(CENTER);
  rect(mouseX, mouseY, 20, 20);
}