let language = '';
let activity = '';

function setup() {
  let size = min(windowWidth, windowHeight) - min(windowWidth, windowHeight) / 10;
  createCanvas(size, windowHeight);
  let userName = localStorage.getItem("userName");

  textAlign(CENTER);
  textSize(20);
  text("Welcome back " + userName, width / 2, 50);

  let italianFlag = createImg('italian.png'); 
  let y = height / 7;
  italianFlag.class("flagClass");
  italianFlag.position(width / 2 - 80, y);
  italianFlag.mousePressed(chooseItalian);

  let polishFlag = createImg('polish.png'); 
  polishFlag.class("flagClass");
  polishFlag.position(width / 2 + 20, y);
  polishFlag.mousePressed(choosePolish);

  let buttonHeight = 50;
  let buttonWidth = 200;

  let listeningQ = createButton('Listening quiz');
  listeningQ.class("buttonClass");
  listeningQ.position(width / 2 - buttonWidth / 2, y + 100);
  listeningQ.size(buttonWidth, buttonHeight);
  listeningQ.mousePressed(chooseListeningQ);

  let hangman = createButton('Hangman');
  hangman.class("buttonClass");
  hangman.position(width / 2 - buttonWidth / 2, y + 160);
  hangman.size(buttonWidth, buttonHeight);
  hangman.mousePressed(choosehangman);

  let imagequiz = createButton('Image Quiz');
  imagequiz.class("buttonClass");
  imagequiz.position(width / 2 - buttonWidth / 2, y + 220);
  imagequiz.size(buttonWidth, buttonHeight);
  imagequiz.mousePressed(chooseimagequiz);

  let speaking = createButton('Speaking quiz');
  speaking.class("buttonClass");
  speaking.position(width / 2 - buttonWidth / 2, y + 280);
  speaking.size(buttonWidth, buttonHeight);
  speaking.mousePressed(choosespeaking);

  let progressTracker = createButton('Progress tracker');
  progressTracker.class("buttonClass");
  progressTracker.position(width / 2 - buttonWidth / 2, y + 340);
  progressTracker.size(buttonWidth, buttonHeight);
  progressTracker.mousePressed(openProgressTracker);
}

function draw() {}

function choosePolish() {
  language = 'Polish';
  localStorage.setItem('language', language);
}

function chooseItalian() {
  language = 'Italian';
  localStorage.setItem('language', language);
}

function chooseListeningQ() {
  activity = 'listeningQ';
  localStorage.setItem('activity', activity);
  window.open('listeningQ.html', "_self");
}

function chooseimagequiz() {
  activity = 'imagequiz';
  localStorage.setItem('activity', activity);
  window.open("imagequiz.html", "_self");
}

function choosehangman() {
  activity = 'hangman';
  localStorage.setItem('activity', activity);
  window.open("hangman.html", "_self");
}

function choosespeaking() {
  activity = 'speaking';
  localStorage.setItem('activity', activity);
  window.open('speaking.html', '_self');
}

function openProgressTracker() {
  window.open('progressTracker.html', '_self');
}