var wordCategories = { 
    animals: ["Lion", "Rabbit", "Cat", "Dog", "Tiger", "Cow", "Bear", "Koala", "Deer", "Raccoon"],
    countries: ["Egypt", "Korea", "Qatar", "USA", "China", "Japan", "Brazil", "Iraq", "Oman", "United Kingdom"],
    movies: ["Spider Man", "Mulan", "Avatar", "Zootopia", "Hercules", "Aladdin", "Tarzan", "Peter Pan", "Home Alone", "Hulk"]
};

// get a random word based on the selected category
function getRandomWord() {
    const category = document.getElementById("category").value;  
    const wordList = wordCategories[category];          
    return wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
}

let randomWord = "";
let loseCount = 0;
let winCount = 0;
let lives = 6;
let timer;
let timeLeft = 30;

// start a new game
document.getElementById("start").addEventListener("click", function () {
    resetGame();
    randomWord = getRandomWord();
    displayWord();
    inputGuesses();
    updateLives();
});

// display the word as dashes
function displayWord() {
    const wordDisplay = document.getElementById("word-display");             
    wordDisplay.innerHTML = "";                                              //innerHTML property is used to set or get the HTML content of an element
    wordDisplay.innerHTML = randomWord.replace(/./g, function() {            
        return '<span class="dashes">_</span>';                              
    }); 
}

// generate letter buttons and handle guesses
function inputGuesses() {
    const letterContainer = document.getElementById("letter-container");          //identifies the area in the HTML where the letter buttons will be displayed.
    letterContainer.innerHTML = "";                                              // ensures that the container is empty before creating new buttons.

    for (let i = 65; i <= 90; i++) {
        //creating button element
        const button = document.createElement("button");  
        button.innerText = String.fromCharCode(i);  //convert i into its corresponding character and sets it as the button’s text.
        button.classList.add("letters"); 

        button.addEventListener("click", function () {
            //handling button click
            const letter = this.innerText;
            this.disabled = true;                       
            clearInterval(timer);                        // clearInterval is a built-in JavaScript method that stops a timer that was previously started using setInterval
            timeLeft = 30;                             

            if (randomWord.includes(letter)) {                             
                this.style.backgroundColor = "green";                   
                revealLetter(letter);
            } else {
                this.style.backgroundColor = "red";
                loseCount++;
                lives--;
                updateLives();
                if (loseCount === 6) {
                    endGame(false);
                }
            }
            if (lives > 0){
                startTimer();                           // start timer for the next guess
            }
        });

        letterContainer.appendChild(button);                             //The .appendChild() method in JavaScript is used to add a new child node (usually an element) to a parent node (another element). this method appends the child to the end of the parent's list of children.
    }
    startTimer();                                // start the timer for the first guess
}

// reveal function takes a guessed letter as input and checks whether it exists in the randomWord
function revealLetter(letter) {
    const dashes = document.getElementsByClassName("dashes");
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === letter) {
            dashes[i].innerText = letter;                      
            winCount++;
        }
    }

    if (winCount === randomWord.length) {
        endGame(true);
    }
}

// update lives display
function updateLives() {
    const livesDisplay = document.getElementById("lives");
    livesDisplay.innerText = `Lives Remaining: ${lives}`;
}

// timer for each guess
function startTimer() {
    const timerDisplay = document.getElementById("timer");
    timerDisplay.innerText = `Time Left: ${timeLeft}s`;                     //innerText -->sets the text content of an element, replacing any existing text.

    timer = setInterval(function () {  
        timeLeft--;
        timerDisplay.innerText = `Time Left: ${timeLeft}s`;

        if (timeLeft === 0) {
            clearInterval(timer);
            loseCount++;
            lives--;
            updateLives();
            if (loseCount === 6) {
                endGame(false);
            } else {
                startTimer();                       // start the timer for the next guess
            }
        }
    }, 1000);
}

// end the game and display the result
function endGame(won) {
    clearInterval(timer); 
    const resultText = document.getElementById("result-text");
    resultText.innerText = won ? `You Win! The word was ${randomWord}.` : `You Lose! The word was ${randomWord}.`;
    disableAllButtons();
}

/*
disableAllButtons function ensures the game properly ends by:
    -preventing the user from making further guesses.
    -showing a clear option (restart button) to start over.
 */
function disableAllButtons() {
    const buttons = document.querySelectorAll(".letters");           ///the querySelectorAll method in JavaScript is used to select all elements in the DOM that match a specified CSS selector-> it returns a static (snapshot)NodeList, which is similar to an array but doesn't update if the DOM changes after the call it does not automatically update if elements are added or removed later.
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
    document.getElementById("restart").style.display = "block";
}

// reset the game state
function resetGame() {
    randomWord = "";
    loseCount = 0;
    winCount = 0;
    lives = 6;
    timeLeft = 30;
    clearInterval(timer);
    document.getElementById("result-text").innerText = "";                  
    document.getElementById("restart").style.display = "none";              
    document.getElementById("word-display").innerHTML = "";                
    document.getElementById("letter-container").innerHTML = "";           
    document.getElementById("timer").innerText = "";                     
    updateLives();
}

// restart button functionality
document.getElementById("restart").addEventListener("click", function () {
    resetGame();
    document.getElementById("start").click();
});
