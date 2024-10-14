let answers = [
  'mineral water', 'black coffee', 'tea with lemon', 'sugar', 'milk', 'salt', 'pepper', 'a table for two', 'menu', 'order'
];

let pictures = [];
let picturesNames = ['water.jpg', 'coffee.jpg', 'lemontea.jpg', 'sugar.jpg', 'milk.jpg', 'salt.jpg', 'pepper.jpg', 'tablefortwo.jpg', 'menu.jpg', 'order.jpg'];

let answerBox;
let counter = 0;
let score = 0;
let submitButton;

function preload() {
  for (let i = 0; i < picturesNames.length; i++) {
    let p = loadImage(picturesNames[i]);
    pictures.push(p);
  }
}

function setup() {
  createCanvas(375, 667); 
  background(220, 230, 240);

  let imageY = 150;
  let imageHeight = 200;
  let inputY = imageY + imageHeight + 20;

  answerBox = createInput();
  answerBox.position(50, inputY);
  answerBox.size(200, 30);

  submitButton = createButton('submit');
  submitButton.size(100, 30);
  submitButton.position(50 + answerBox.width + 20, inputY);
  submitButton.mousePressed(submitAnswer);
}

function draw() {
  background(220, 230, 240);
  textSize(24);
  fill(0);
  textAlign(LEFT);
  text("Score: " + score, 50, 50);
  textAlign(CENTER);
  text("Image " + (counter + 1), width / 2, 120);
  if (counter < pictures.length) {
    image(pictures[counter], (width - 200) / 2, 150, 200, 200);
  } else {
    textSize(32);
    text("Quiz completed!", width / 2, 300);
  }
}

function submitAnswer() {
  if (answerBox.value().toLowerCase() === answers[counter].toLowerCase()) {
    score += 1;
  }
  counter += 1;
  answerBox.value("");
  if (counter >= pictures.length) {
    noLoop();
  }
}