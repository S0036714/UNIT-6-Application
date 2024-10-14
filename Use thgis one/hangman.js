let words = {
    polish: [
        { word: 'mineral water', hint: 'woda mineralna' },
        { word: 'black coffee', hint: 'czarna kawa' },
        { word: 'tea with lemon', hint: 'herbata z cytryną' },
        { word: 'sugar', hint: 'zukier' },
        { word: 'milk', hint: 'mleko' }
    ],
    italian: [
        { word: 'mineral water', hint: 'acqua minerale' },
        { word: 'black coffee', hint: 'caffè nero' },
        { word: 'tea with lemon', hint: 'tè con limone' },
        { word: 'sugar', hint: ' zucchero' },
        { word: 'milk', hint: 'latte' }
    ]
};

let selectedLanguage;
let selectedWord;
let displayWord;
let wrongGuesses;
let maxWrongGuesses = 6;
let hint;

function setLanguage(language) {
    selectedLanguage = language;
    let selected = words[language][Math.floor(Math.random() * words[language].length)];
    selectedWord = selected.word;
    hint = selected.hint;
    displayWord = '_'.repeat(selectedWord.length);
    wrongGuesses = [];
    document.querySelector('.game-container').style.display = 'block';
    document.getElementById('wordDisplay').textContent = displayWord.split('').join(' ');
    document.getElementById('wrongGuesses').textContent = '';
    document.getElementById('message').textContent = '';
    document.getElementById('hintDisplay').textContent = `Hint: ${hint}`;
    document.getElementById('guessInput').value = '';
}

function makeGuess() {
    let guess = document.getElementById('guessInput').value.toLowerCase();
    if (guess.length !== 1 || !/[a-ząćęłńóśźż]/i.test(guess)) {
        document.getElementById('message').textContent = 'Please enter a valid letter.';
        return;
    }

    document.getElementById('message').textContent = '';
    if (selectedWord.includes(guess)) {
        let newDisplayWord = '';
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === guess) {
                newDisplayWord += guess;
            } else {
                newDisplayWord += displayWord[i];
            }
        }
        displayWord = newDisplayWord;
        document.getElementById('wordDisplay').textContent = displayWord.split('').join(' ');
        if (displayWord === selectedWord) {
            document.getElementById('message').textContent = 'You won!';
            document.querySelector('.game-container').style.display = 'none';
        }
    } else {
        if (!wrongGuesses.includes(guess)) {
            wrongGuesses.push(guess);
            document.getElementById('wrongGuesses').textContent = wrongGuesses.join(' ');
            if (wrongGuesses.length >= maxWrongGuesses) {
                document.getElementById('message').textContent = `You lost! The word was ${selectedWord}.`;
                document.querySelector('.game-container').style.display = 'none';
            }
        }
    }
    document.getElementById('guessInput').value = '';
}