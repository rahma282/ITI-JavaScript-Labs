export const InputHandler = {
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
