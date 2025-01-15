import { Game } from './Game.js';
// Event Listeners
document.getElementById("start").addEventListener("click", () => Game.startGame());
document.getElementById("restart").addEventListener("click", () => {
    Game.resetGame();
    Game.startGame();
});