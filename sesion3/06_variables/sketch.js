/*
Taller audiovisual y multimedia II
Jose Santorcuato
*/

var ancho = 100;

var alto = 50;

var grosor = 2.5;

var texto = "Podemos imprimir texto"



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
fill(0);
strokeWeight(grosor);
rect(100, 100, ancho, alto);
text(texto, 10, 30);
 

  


}