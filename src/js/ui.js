import { gameState } from "./game.js";


const resultText = document.getElementById("result")
const playerScore = document.getElementById("playerScore")
const machineScore = document.getElementById("machineScore")
const resultDisplay = document.getElementById("resultDisplay")
const optionsDisplay = document.getElementById("optionsContainer")
const rulesModal = document.getElementById("rulesModal")
const machineChoiceImg = document.getElementById("machineChoice")
const playerChoiceImg = document.getElementById("playerChoice")


export function updateResult() {
    resultText.classList.remove("text-green-600", "text-red-600")
    
    playerChoiceImg.src = `assets/${gameState.playerChoice}.svg`
    machineChoiceImg.src = `assets/${gameState.machineChoice}.svg`

    if (gameState.result === "PLAYER WINS") {
        resultText.textContent = gameState.result
        resultText.classList.add("text-green-600")
    } else if (gameState.result === "PLAYER LOSES") {
        resultText.textContent = gameState.result
        resultText.classList.add("text-red-600")
    } else {
        resultText.textContent = gameState.result
    }
}

export function updateScoreboard() {
    playerScore.textContent = gameState.playerScore
    machineScore.textContent = gameState.machineScore
}

export function toggleGameView() {
    if (resultDisplay.classList.contains("hidden")) {
        resultDisplay.classList.remove("hidden")
        optionsDisplay.classList.add("hidden")
    } else {
        resultDisplay.classList.add("hidden")
        optionsDisplay.classList.remove("hidden")
    }
}

