function addClickEventToButtons() {
    for (const button of buttons) {
        button.addEventListener("click", (event) => {
            const playerSelection = button.value;
            const winner = playRound(playerSelection);
            countScore(winner)
            announceWinner();
        });
    }
}

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3) +1;
    if (computerSelection == 1) {
        computerSelection = "rock";
    } else if (computerSelection == 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    return computerSelection;
}

function getWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.querySelector(".result").textContent = ("Tie!");
        return null;
    } else if (playerSelection === "rock" && computerSelection == "paper") {
        document.querySelector(".result").textContent = ("You Lose! Paper beats Rock");
        return "computer";
    } else if (playerSelection === "rock" && computerSelection == "scissors") {
        document.querySelector(".result").textContent = ("You win! Rock beats Scissors");
        return "you";
    } else if (playerSelection === "paper" && computerSelection == "rock") {
        document.querySelector(".result").textContent = ("You win! Paper beats rock");
        return "you";
    } else if (playerSelection === "paper" && computerSelection == "scissors") {
        document.querySelector(".result").textContent = ("You lose! Scissors beat paper");
        return "computer";
    } else if (playerSelection === "scissors" && computerSelection == "rock") {
        document.querySelector(".result").textContent = ("You lose! Rock beats scissors");
        return "computer";
    } else {
        document.querySelector(".result").textContent = ("You win! Scissors beat paper");
        return "you";
    }
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const winner = getWinner(playerSelection, computerSelection);
    return winner;
}

function countScore(winner) {
    const playerScores = document.querySelector(".header").children; 
    if (winner === "you") {
        you++;
        playerScores[0].textContent = ("You: " + you);
    } else if (winner === "computer") {
        computer++;
        playerScores[1].textContent = ("Computer: " + computer);
    }
}

function announceWinner() {
    if (you === 3 || computer === 3) {
        for (button of buttons) {
            button.setAttribute("disabled", "");
        }
        document.querySelector(".result").textContent = "Game Over";
    }
}

const buttons = document.querySelector(".buttons").children;
let you = 0, computer = 0;
addClickEventToButtons();

