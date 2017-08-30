/*
Taller audiovisual y multimedia II
Jose Santorcuato
*/
function setup() {
createCanvas(innerWidth,innerHeight);
}

function draw() {
var a = 10;
var b = 20;

if (a == b){
text("Son iguales ", 5, 80);
}
if (a != b){
text("No son iguales ", 5, 80);
}
if (a < b){
text("a es menor que b", 5, 80);
}
if (a > b){
text("a es mayor que b", 5, 80);
}
}
