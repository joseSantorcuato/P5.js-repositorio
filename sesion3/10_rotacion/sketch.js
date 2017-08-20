/*
Taller audiovisual y multimedia II
Jose Santorcuato
*/


function setup() {
  createCanvas(innerWidth,innerHeight);
  angleMode(DEGREES);



}

function draw() {
  background(255);
  strokeWeight(10);  

  var velo = millis();

  push();

  translate(width/2,height/2);
  rectMode(CENTER);
  fill(255);
  rect(0,0,10,10); 
  smooth(10);
  fill(189,147,74);
  rotate(radians(1));
  //rect(0,0,100,0);// rota sobre su eje, coordenadas 0,0 y rectmodeCenter
  //rect(50,0,100,0);// lo corre 50 pixeles hacia afuera
  //rect(0,50,100,0);// lo corre hacia la tangente
  //rect(-100,0,100,0)//construye hacia la izquierda
  //rect(100,0,100,0)//construye hacia la derecha
  //rect(0,-100,100,0)//construye hacia arriba
  rect(0,100,100,0)//construye hacia abajo

  pop();  

}
