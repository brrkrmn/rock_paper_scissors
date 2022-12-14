const buttons = document.querySelector(".buttons").children;
let playerSelection = null;
let playerScores = document.querySelector(".header").children; 

let you = 0, computer = 0;

function addClickEventToButtons() {
    for (const button of buttons) {
        button.addEventListener("click", (event) => {
            playerSelection = button.value;
            let winner = playRound(playerSelection);
            countScore(winner)
            announceWinner(you, computer);
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
    let winner
    if (playerSelection === computerSelection) {
        document.querySelector(".result").textContent = ("Tie!");
        winner = null;
    } else if (playerSelection === "rock" && computerSelection == "paper") {
        document.querySelector(".result").textContent = ("You Lose! Paper beats Rock");
        winner = "computer";
    } else if (playerSelection === "rock" && computerSelection == "scissors") {
        document.querySelector(".result").textContent = ("You win! Rock beats Scissors");
        winner = "you";
    } else if (playerSelection === "paper" && computerSelection == "rock") {
        document.querySelector(".result").textContent = ("You win! Paper beats rock");
        winner = "you";
    } else if (playerSelection === "paper" && computerSelection == "scissors") {
        document.querySelector(".result").textContent = ("You lose! Scissors beat paper");
        winner = "computer";
    } else if (playerSelection === "scissors" && computerSelection == "rock") {
        document.querySelector(".result").textContent = ("You lose! Rock beats scissors");
        winner = "computer";
    } else {
        document.querySelector(".result").textContent = ("You win! Scissors beat paper");
        winner = "you";
    }
    return winner;
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const winner = getWinner(playerSelection, computerSelection);
    return winner;
}

function countScore(winner) {
    if (winner === "you") {
        you ++;
        playerScores[0].textContent = ("You: " + you);
    } else if (winner === "computer") {
        computer ++;
        playerScores[1].textContent = ("Computer: " + computer);
    }
}

function announceWinner(you, computer) {
    if (you === 3 || computer === 3) {
        for (button of buttons) {
            button.setAttribute("disabled", "");
        }
        document.querySelector(".result").textContent = "Game Over";
    }
}

addClickEventToButtons();

