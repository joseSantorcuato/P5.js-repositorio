/*
Taller audiovisual y multimedia II
Jose Santorcuato
*/


function setup() {
  //createCanvas(640, 480); ancho y alto
  createCanvas(innerWidth,innerHeight)
  strokeWeight(10)
  stroke(100,100)
  print("Imprimo una vez");
  //Con esto podemos comentar una linea
  /*Con esto
  podemos 
  comentar
  muchas 
  lineas
  */
}

function draw() {
   print("Imprimo siempre");
   line(mouseX,mouseY,pmouseX,pmouseY)

}