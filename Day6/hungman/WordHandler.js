import { wordCategories } from './wordCategories.js';

export const WordHandler = {
    getRandomWord(category) {
        const wordList = wordCategories[category];
        return wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
    },
    
    displayWord(randomWord) {
        const wordDisplay = document.getElementById("word-display");
        wordDisplay.innerHTML = randomWord.replace(/./g, () => '<span class="dashes">_</span>');
    },
    
    revealLetter(randomWord, letter) {
        const dashes = document.getElementsByClassName("dashes");
        let winCount = 0;

        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === letter) {
                dashes[i].innerText = letter;
                winCount++;
            }
        }

        return winCount;
    }
};
