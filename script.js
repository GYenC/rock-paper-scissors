
// Randomly select rock, paper, or scissors
function computerPlay(){

    const choices = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random()*choices.length);
    return choices[random];
}



function playRound(playerSelection, computerSelection){
let player = playerSelection.toLowerCase();
let computer = computerSelection.toLowerCase();

if (player == computer){
    return message = "Draw!"
}

// if p = rock
if (player == "rock"){
    if (computer == "paper"){
        return message = "You lose! Paper beats rock."
    }
    return message = "You win! Rock beats scissors."

}

// if p = paper
if (player == "paper"){
    if (computer == "rock"){
        return message = "You win! Paper beats rock."
    }
    return message = "You lose! Scissors beats paper."

}

// if p = scissors
if (player == "scissors"){
    if (computer == "paper"){
        return message = "You win! Scissors beats paper."
    }
    return message = "You lose! Rock beats scissors."

}
}

const playerSelection = prompt("Rock, paper, or scissors?");
const computerSelection(computerPlay());