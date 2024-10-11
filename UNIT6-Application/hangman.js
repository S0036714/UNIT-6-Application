let word = "hangman";
let guesses = [];
let maxWrong = 6;
let wrongGuesses = 0;
let guessInput, guessButton;

function setup() {
  createCanvas(400, 400);
  background(255);
  guessInput = createInput();
  guessInput.position(20, height - 70);
  guessButton = createButton("Guess");
  guessButton.position(guessInput.x + guessInput.width, height - 70);
  guessButton.mousePressed(makeGuess);
}

function makeGuess() {
  let letter = guessInput.value().toLowerCase();
  if (!guesses.includes(letter)) {
    guesses.push(letter);
    if (!word.includes(letter)) {
      wrongGuesses++;
    }
  }
  guessInput.value("");
}

function drawHangman() {
  if (wrongGuesses > 0) {
    line(50, height - 50, 150, height - 50);
  }
  if (wrongGuesses > 1) {
    line(100, height - 50, 100, height - 200);
  }
  if (wrongGuesses > 2) {
    line(100, height - 200, 150, height - 250);
  }
  if (wrongGuesses > 3) {
    line(100, height - 200, 50, height - 250);
  }
  if (wrongGuesses > 4) {
    ellipse(100, height - 275, 50, 50);
  }
  if (wrongGuesses > 5) {
    line(100, height - 250, 100, height - 175);
  }
}

function draw() {
  background(220);
  textSize(32);
  textAlign(CENTER);
  text("Hangman Game", width / 2, 50);

  let displayWord = "";
  for (let i = 0; i < word.length; i++) {
    if (guesses.includes(word[i])) {
      displayWord += word[i];
    } else {
      displayWord += "_";
    }
  }

  textSize(64);
  text(displayWord, width / 2, height / 2);

  textSize(32);
  textAlign(LEFT, TOP);
  text("Wrong Guesses: ", 10, 100);
  for (let i = 0; i < guesses.length; i++) {
    text(guesses[i], 10 + i * 20, 200);
  }

  drawHangman();

  if (displayWord === word) {
    text("You Win!", width / 2, 150);
  } else if (wrongGuesses >= maxWrong) {
    text("You Lose!", width / 2, 150);
  }
}