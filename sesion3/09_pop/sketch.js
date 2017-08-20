/*
Taller audiovisual y multimedia II
Jose Santorcuato
*/


function setup() {
  createCanvas(innerWidth,innerHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
background(255);
  //background(123,45,6);//color de fondo, RGB

  var milisegundos = millis();
  text("Milisegundoss \ncorriendo: \n" + milisegundos, 5, 30);

  translate(width/2,height/2);// Nueva coordenada 0,0 a la mitad de ancho y alto
  rect(0,0,100,10);



  push();  


  strokeWeight(10);
  fill(123,45,67);

  rotate(milisegundos/6);
  rect(0,0,50,50);

  pop();  

  }

