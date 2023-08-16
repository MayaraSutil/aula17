let cor;
let circuloX //horizontal
let circuloY //vertical

function setup() {
  createCanvas(400, 400);
  background(color(100, 0 ,0));
  
  cor = color(random(255), random(255), random(255));
  circuloX = [0, 0];
  circuloY = [random(height), random(height)];
    
  posicaoHorizontal = 0;
  posicaoVertical = random(height);
  
  posicaoHorizontal12 = 0;
  posicaoVertical12 = random(height);
}

function draw() {
  fill("blue");
  circle(posicaoHorizontal, posicaoVertical, 50);
  circle(posicaoHorizontal12, posicaoVertical12, 50);
  
  posicaoHorizontal+= random(0, 3);
  posicaoVertical+= random(-3, 3);
  
  posicaoHorizontal12+= random(0, 3);
  posicaoVertical12+= random(-3, 3);
  
   if(mouseIsPressed) {
  cor = color(random(0, 225), random(0, 225), random(0, 255), random(0, 100));}
}

