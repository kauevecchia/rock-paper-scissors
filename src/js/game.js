export const gameState = {
    playerScore: 0,
    machineScore: 0,
    playerChoice: "",
    machineChoice: "",
    result: ""
}

export function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"]
    const machineChoice = choices[Math.floor(Math.random() * choices.length)]

    gameState.playerChoice = playerChoice
    gameState.machineChoice = machineChoice

    if (playerChoice === machineChoice) {
        gameState.result = "IT'S A TIE"
    } else {
        switch (playerChoice) {
            case "rock":
                gameState.result = (machineChoice === "scissors") ? "PLAYER WINS" : "PLAYER LOSES"
                break
            case "paper":
                gameState.result = (machineChoice === "rock") ? "PLAYER WINS" : "PLAYER LOSES"
                break
            case "scissors":
                gameState.result = (machineChoice === "paper") ? "PLAYER WINS" : "PLAYER LOSES"
                break
        }
    }

    if (gameState.result === "PLAYER WINS") {
        gameState.playerScore++
    } else if (gameState.result === "PLAYER LOSES") {
        gameState.machineScore++
    }

    return gameState
}

