import { playGame, resetScores } from "./game.js"
import { 
    updateResult, 
    updateScoreboard, 
    toggleGameView, 
    showRulesModal, 
} from "./ui.js"


const rulesBtn = document.getElementById("rulesBtn")
const playAgainBtn = document.getElementById("playAgainBtn")
const choiceButtons = document.querySelectorAll(".choice-button")
const resetBtn = document.getElementById("resetBtn")
const closeBtn = document.getElementById("closeBtn")

choiceButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const playerChoice = event.currentTarget.dataset.choice

        playGame(playerChoice)
        updateResult()
        updateScoreboard()
        toggleGameView()
    })
})

rulesBtn.addEventListener("click", showRulesModal)
closeBtn.addEventListener("click", showRulesModal)
playAgainBtn.addEventListener("click", toggleGameView)
resetBtn.addEventListener("click", () => {
    resetScores()
    updateScoreboard()
})