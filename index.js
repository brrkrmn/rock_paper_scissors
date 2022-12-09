function getPlayerChoice() {
    let playerSelection = prompt("Your turn: ");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3) +1;
    if (computerSelection == 1) {
        computerSelection = "rock";
    } else if (computerSelection == 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors"
    }
    return computerSelection;
}

function getWinner(playerSelection, computerSelection) {
    let winner
    if (playerSelection === computerSelection) {
        alert("Tie!");
        winner = null;
    } else if (playerSelection === "rock" && computerSelection == "paper") {
        alert("You Lose! Paper beats Rock");
        winner = "computer";
    } else if (playerSelection === "rock" && computerSelection == "scissors") {
        alert("You win! Rock beats Scissors");
        winner = "you";
    } else if (playerSelection === "paper" && computerSelection == "rock") {
        alert("You win! Paper beats rock");
        winner = "you";
    } else if (playerSelection === "paper" && computerSelection == "scissors") {
        alert("You lose! Scissors beat paper");
        winner = "computer";
    } else if (playerSelection === "scissors" && computerSelection == "rock") {
        alert("You lose! Rock beats scissors");
        winner = "computer";
    } else {
        alert("You win! Scissors beat paper");
        winner = "you";
    }
    return winner;
}

function playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const winner = getWinner(playerSelection, computerSelection);
    return winner;
}

function announceWinner(player1, player2) {
    if (player1 > player2) {
        alert("Winner is you");
    } else if (player2 > player1) {
        alert("Winner is computer");
    } else {
        alert("No winner");
    } 
}

function game() {
    let you = 0, computer = 0;
    while (you != 3 && computer != 3) {
        const winner = playRound();

        if (winner == "you") {
            you = you + 1;
        } else if (winner == "computer") {
            computer = computer + 1;
        }
        
        console.log("You = " + you + " Computer = " + computer);
    }
    announceWinner(you, computer);
}

game()
