/*
Taller audiovisual y multimedia II
Jose Santorcuato
*/
var ojo;



function preload() {
  ojo = loadImage("imagenes/ojo.gif");//gif, jpg, png


  
 
}
function setup() {
  frameRate(60);
 
  createCanvas(innerWidth,innerHeight);

}



function draw() {

  imageMode(CENTER);

  image(ojo, width/2, height/2, 100,100); //x,y,ancho y alto

  

}
