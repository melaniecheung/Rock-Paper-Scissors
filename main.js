let playerScore = 0;
let computerScore = 0;
const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return(choice[Math.floor(Math.random()*3)]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Draw");
    }
    else if (    
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            playerScore ++;
            console.log("You win!");
    }
    else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
        ) {
            computerScore ++;
            console.log("You lose!");
        }
    else {
        console.log("Typo! Try again");
    }
}

// const playerPrompt = prompt("Enter rock, paper, or scissors!");
// let playerSelection = playerPrompt.toLowerCase();

// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerPrompt = prompt("Enter rock, paper, or scissors!");
        let playerSelection = playerPrompt.toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
        console.log("You won the game");
    } else if (playerScore < computerScore) {
        console.log("You lost the game");
    } else {
        console.log("Tied");
    }
}

console.log(game());