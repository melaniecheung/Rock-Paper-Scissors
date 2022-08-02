let playerScore = 0;
let computerScore = 0;
const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return(choice[Math.floor(Math.random()*3)]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        result = "You both played rock. It's a draw!";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        result = "You both played paper. It's a draw!";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        result = "You both played scissors. It's a draw!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore ++;
        result = "Rock beats scissors. You win!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore ++;
        result = "Paper beats rock. You win!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore ++;
        result = "Scissors beats paper. You win!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore ++;
        result = "Paper beats rock. You lose!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore ++;
        result = "Scissors beats paper. You lose!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore ++;
        result = "Rock beats scissors. You lose!";
    } else {
        result = "Typo! Try again";
    }
}

// buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

        playerChoiceContainer.textContent = "You chose: " + playerSelection;
        computerChoiceContainer.textContent = "Computer chose: " + computerSelection;
        container.textContent = result;
        playerContainer.textContent = "Your score: " + playerScore;
        computerContainer.textContent = "Computer score: " + computerScore;

        checkForWinner(playerScore, computerScore);
    });
});

// player choice DOM
const playerChoiceContainer = document.querySelector('#player-choice');
document.body.appendChild(playerChoiceContainer);


// computer choice DOM
const computerChoiceContainer = document.querySelector('#computer-choice');
document.body.appendChild(computerChoiceContainer);

// display dom div = result
const container = document.querySelector('#result-container');
document.body.appendChild(container);

// playerScore DOM
const playerContainer = document.querySelector('#player-result');
document.body.appendChild(playerContainer);

// computerScore DOM
const computerContainer = document.querySelector('#computer-result');
document.body.appendChild(computerContainer);

// final result DOM
const gameContainer = document.querySelector('#game-result');
document.body.appendChild(gameContainer);

// winner of the game
const checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        gameResult = "Congrats! You win the game! Refresh the page to play again.";
        gameContainer.textContent = gameResult;
        disableButton();
    } else if (computerScore === 5) {
        gameResult = "Sorry! You lost the game. Better luck next time. Refresh the page to play again!";
        gameContainer.textContent = gameResult;
        disableButton();
    }
}

// disable buttons when scores reach 5
function disableButton () {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}