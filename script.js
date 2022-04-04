
// Randomly select rock, paper, or scissors
function computerPlay(){

const choices = ["Rock", "Paper", "Scissors"];

const random = Math.floor(Math.random()*choices.length);
return choices[random];
}

console.log(computerPlay())