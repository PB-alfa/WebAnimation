//https://icons8.com/icon/13692/dvd-logo
let img = []; 
let names = ["images/dvd_blue.png",
            "images/dvd_white.png",
            "images/dvd_cyan.png",
            "images/dvd_magenta.png",
            "images/dvd_red.png",
            "images/dvd_yellow.png",
            "images/dvd_green.png"];
let x = 100; let y = 100;
let dx = 2; let dy = 2;
let w = 100; h = 50;
let color;

function preload(){
  for (let i=0; i<names.length; i++){
    img[i] = loadImage(names[i]);
  }
}

function setup() {
  createCanvas(1920, 1080);
  color = floor(random(0, names.length));
}

function draw() {
  background(0);
  stroke(255);
  // rect(x, y+h/2, w, h);
  image(img[color], x, y);
  x = x + dx; 
  y = y + dy;
  edgeHandling();
}

function edgeHandling(){
  if (x <= 0 || x + w >= width) {
    dx = dx * -1;
    color = floor(random(0, names.length));
  }
  if (y + h/2 <= 0 || y + h/2 + h >= height) {
    dy = dy * -1;
    color = floor(random(0, names.length));
  }
}


