/*
Taller audiovisual y multimedia II
Jose Santorcuato
*/
var mi_audio;
var mi_fuente;

function setup() {
  mi_audio = loadSound('sound.mp3');
  mi_fuente = loadFont('fonts/ALBA____.otf', drawText);
  
  createCanvas(1280, 800);
  background(122);
}

function drawText(fuente) {
  fill(0);
  textFont(fuente, 72);
}


function mousePressed() {
  if ( mi_audio.isPlaying() ) { // .isPlaying() returns a boolean
    mi_audio.stop();
    background(255,0,0);
    text('Detenido', width/3, height/3);
    
  } else {
    mi_audio.play();
    background(0,255,0);
    text('Reproduciendo', width/3, height/3);
    
  }
}
