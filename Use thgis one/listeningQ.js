let words = {
  polish: [
      { word: 'water', image: 'water.jpg' },
      { word: 'coffee', image: 'coffee.jpg' },
      { word: 'sugar', image: 'sugar.jpg' },
      { word: 'salt', image: 'salt.jpg' },
      { word: 'latte', image: 'latte.jpg' }
  ],
  italian: [
      { word: 'water', image: 'water.jpg' },
      { word: 'coffee', image: 'coffee.jpg' },
      { word: 'sugar', image: 'sugar.jpg' },
      { word: 'salt', image: 'salt.jpg' },
      { word: 'latte', image: 'latte.jpg' }
  ]
};

let selectedLanguage;
let selectedWord;
let score = 0;
let startTime;

function setLanguage(language) {
  selectedLanguage = language;
  document.querySelector('.game-container').style.display = 'block';
  loadNewWord();
}

function loadNewWord() {
  let wordObject = words[selectedLanguage][Math.floor(Math.random() * words[selectedLanguage].length)];
  selectedWord = wordObject.word;
  let imagesContainer = document.querySelector('.images-container');
  imagesContainer.innerHTML = '';

  words[selectedLanguage].forEach(item => {
      let img = document.createElement('img');
      img.src = item.image;
      img.alt = item.word;
      img.onclick = () => checkAnswer(item.word);
      imagesContainer.appendChild(img);
  });

  startTime = new Date().getTime();
  document.getElementById('message').textContent = '';
}

function speakWord() {
  let msg = new SpeechSynthesisUtterance(selectedWord);
  msg.lang = selectedLanguage === 'polish' ? 'pl-PL' : 'it-IT';
  window.speechSynthesis.speak(msg);
}

function checkAnswer(word) {
  let endTime = new Date().getTime();
  let reactionTime = (endTime - startTime) / 1000; // Reaction time in seconds
  if (word === selectedWord) {
      score += 1;
      document.getElementById('message').textContent = `Correct! Time: ${reactionTime.toFixed(2)}s`;
  } else {
      document.getElementById('message').textContent = 'Wrong! Try again.';
  }
  document.getElementById('score').textContent = `Score: ${score}`;
  loadNewWord();
}

