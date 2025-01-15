import { WordHandler } from './WordHandler.js';
import { InputHandler } from './InputHandler.js';

export const Game = {
    randomWord: "",
    loseCount: 0,
    winCount: 0,
    lives: 6,
    timeLeft: 30,
    timer: null,

    startGame() {
        this.resetGame();
        const category = document.getElementById("category").value;
        this.randomWord = WordHandler.getRandomWord(category);

        WordHandler.displayWord(this.randomWord);
        InputHandler.createLetterButtons((letter, button) => this.handleGuess(letter, button));
        this.updateLives();
        this.startTimer();
    },

    handleGuess(letter, button) {
        clearInterval(this.timer);
        this.timeLeft = 30;

        if (this.randomWord.includes(letter)) {
            button.style.backgroundColor = "green";
            this.winCount += WordHandler.revealLetter(this.randomWord, letter);
        } else {
            button.style.backgroundColor = "red";
            this.loseCount++;
            this.lives--;
            this.updateLives();
        }

        if (this.winCount === this.randomWord.length) {
            this.endGame(true);
        } else if (this.loseCount === 6) {
            this.endGame(false);
        } else {
            this.startTimer();
        }
    },

    startTimer() {
        const timerDisplay = document.getElementById("timer");
        timerDisplay.innerText = `Time Left: ${this.timeLeft}s`;

        this.timer = setInterval(() => {
            this.timeLeft--;
            timerDisplay.innerText = `Time Left: ${this.timeLeft}s`;

            if (this.timeLeft === 0) {
                clearInterval(this.timer);
                this.loseCount++;
                this.lives--;
                this.updateLives();

                if (this.loseCount === 6) {
                    this.endGame(false);
                } else {
                    this.startTimer();
                }
            }
        }, 1000);
    },

    updateLives() {
        const livesDisplay = document.getElementById("lives");
        livesDisplay.innerText = `Lives Remaining: ${this.lives}`;
    },

    endGame(won) {
        clearInterval(this.timer);
        const resultText = document.getElementById("result-text");
        resultText.innerText = won
            ? `You Win! The word was ${this.randomWord}.`
            : `You Lose! The word was ${this.randomWord}.`;
        InputHandler.disableAllButtons();
        document.getElementById("restart").style.display = "block";
    },

    resetGame() {
        this.randomWord = "";
        this.loseCount = 0;
        this.winCount = 0;
        this.lives = 6;
        this.timeLeft = 30;

        clearInterval(this.timer);
        document.getElementById("result-text").innerText = "";
        document.getElementById("restart").style.display = "none";
        document.getElementById("word-display").innerHTML = "";
        document.getElementById("letter-container").innerHTML = "";
        document.getElementById("timer").innerText = "";
        this.updateLives();
    }
};
