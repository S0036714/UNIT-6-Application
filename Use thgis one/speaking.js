let words = ['mineral water.', 'black coffee.', 'tea with lemon.', 'sugar.', 'milk.', 'salt.', 'can I have a menu please.'];
let detector;
let score = 0;
let counter = 0;
let currentWord = "";
let answerBttn;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);


  detector = new p5.SpeechRec('en-US', handleResult);
  detector.continuous = false;
  detector.interimResults = false;

  answerBttn = createButton('Check My Answer');
  answerBttn.size(150, 50);
  answerBttn.class('startBttn');
  answerBttn.position(100, 200);
  answerBttn.mousePressed(attemptAnswer);


  currentWord = words[counter];
  textSize(24);
  fill(0);
  text('Say: ' + currentWord, 20, 100);
}

function draw() {
  clear();
  background(255);
  textSize(24);
  fill(0);
  text('You have: ' + score + ' correct', 20, 50);
  text('Say: ' + currentWord, 20, 100);
}

function handleResult() {
  let recognizedWords = detector.resultString.split(' ');
  let firstWord = recognizedWords[0].toLowerCase(); 
  if (firstWord === currentWord) {
    score += 1;
    counter += 1;
    if (counter < words.length) {
      currentWord = words[counter]; 
    } else {
      currentWord = "Quiz Complete!"; 
      answerBttn.hide(); 
    }
    text('Correct!', width/2, height/2);
  } else {
    text('Incorrect. Try again.', width/2, height/2);
  }
  detector.stop();
}

function attemptAnswer() {

  if (!detector.started) {
    detector.start();
  } 
}