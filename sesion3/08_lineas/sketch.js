/*
Taller audiovisual y multimedia II
Jose Santorcuato
*/


function setup() {
  //createCanvas(640, 480); ancho y alto
  createCanvas(innerWidth,innerHeight);
  strokeWeight(10);
  stroke(100,100);
  
}

function draw() {
   var distancia = dist(mouseX,mouseY,pmouseX,pmouseY);
   strokeWeight(distancia);
   line(mouseX,mouseY,pmouseX,pmouseY)//posicion actual del mouse x1,y1  posicion anterior x2,y2

}