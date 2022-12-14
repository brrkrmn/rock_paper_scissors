//In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
    //For now, remove the logic that plays exactly five rounds.
    //Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
    //Add a div for displaying results and change all of your console.logs into DOM methods.
    //Display the running score, and announce a winner of the game once one player reaches 5 points.
    //You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
//Once you’re all done with your UI and made sure everything’s satisfactory, commit your changes to the rps-ui branch.

const buttons = document.querySelector(".buttons").children;
let playerSelection = null;

function addClickEventToButtons() {
    for (const button of buttons) {
        button.addEventListener("click", (event) => {
            playerSelection = button.value;
            console.log(playerSelection);
        });
    }
}

addClickEventToButtons();

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
    const playerSelection = addClickEventToButtons();
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

//game()
