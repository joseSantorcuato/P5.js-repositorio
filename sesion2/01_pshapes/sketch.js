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
stroke(0,102);
}

function draw() {
background(255);

//Con PI
strokeWeight(8);
arc(50, 55, 50, 50, TWO_PI, TWO_PI);//x,y,ancho,alto,inicio, termino
arc(150, 55, 50, 50, PI, HALF_PI);//x,y,ancho,alto,inicio, termino
arc(250, 55, 50, 50, PI, HALF_PI);//x,y,ancho,alto,inicio, termino

//Con grados

arc(350, 55, 50, 50, radians(0), radians(180));//x,y,ancho,alto,inicio, termino

ellipse(50, 150, 50, 50);// x,y, ancho,alto
rectMode(CENTER);//rectMode(RADIUS);
rect(150, 150, 50, 50);
line(200,150, 300, 150);//x1,y1,x2,y2
quad(350,150,380,120,430,120,400,150);//x1,y1,x2,y2,x3,y3,x4,y4 similar a rectngulo
point(50, 250);
triangle(150, 250, 200, 200, 250, 250);//x1,y1,x2,y2,x3,y3

}