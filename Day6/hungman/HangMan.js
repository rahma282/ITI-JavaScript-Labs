const wordCategories = { 
    animals: ["Lion", "Rabbit", "Cat", "Dog", "Tiger", "Cow", "Bear", "Koala", "Deer", "Raccoon"],
    countries: ["Egypt", "Korea", "Qatar", "USA", "China", "Japan", "Brazil", "Iraq", "Oman", "United Kingdom"],
    movies: ["Spider Man", "Mulan", "Avatar", "Zootopia", "Hercules", "Aladdin", "Tarzan", "Peter Pan", "Home Alone", "Hulk"]
};
const Game = {
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

// Event Listeners
document.getElementById("start").addEventListener("click", () => Game.startGame());
document.getElementById("restart").addEventListener("click", () => {
    Game.resetGame();
    Game.startGame();
});

const WordHandler = {
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

const InputHandler = {
    createLetterButtons(onGuess) {
        const letterContainer = document.getElementById("letter-container");
        letterContainer.innerHTML = "";

        for (let i = 65; i <= 90; i++) {
            const button = document.createElement("button");
            button.innerText = String.fromCharCode(i);
            button.classList.add("letters");

            button.addEventListener("click", function () {
                this.disabled = true;
                onGuess(this.innerText, this);
            });

            letterContainer.appendChild(button);
        }
    },

    disableAllButtons() {
        const buttons = document.querySelectorAll(".letters");
        buttons.forEach(button => (button.disabled = true));
    }
};
