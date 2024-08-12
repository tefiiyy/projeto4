let imagem;
let musica; 

function setup() {
  createCanvas(1000, 800);
  palavra= empada ();
  musica.loop();
}

function preload(){
  imagem = loadImage("imagem.jog");
  musica = loadSound("musica.mp3");
}

function draw() {
  background("red");
  image(imagem,0,0,1000,800);
  batata();
  coxinha();
  empada();
}

 function batata(){
   let minimo = 0;
   let maximo = width;
   let seguir = map(mouseX, 0, width, 1, palavra.length);
   text(inicio,500,400);
 }
 function coxinha(){
   fill("lightblue");
   textSize(60);
   textAlign(CENTER, CENTER);
 }
 function empada (){
   let palavras = ["fisíca", "hamburguer", "escola", "batata frita"];
   return random(palavras);
 }