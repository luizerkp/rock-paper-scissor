const plays = ["Paper", "Rock", "Scissors"];
const losingPlays = {
    Scissors: "Rock", 
    Paper: "Scissors", 
    Rock: "Paper"
};

function computerPlay() {

    const possiblePlays = plays.length;
    const random = Math.floor(Math.random() * possiblePlays);
    return plays[random];
}

function playRound (playerSelection, computerSelection)
{

    // stores the winner or tie 
    let winner = "";

    // sets first char toUpperCase and the rest of the string toLowerCase
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase(); 

    // if players play is not in the plays arr computer wins by default
    if (!plays.includes(playerSelection)) {

        winner = "Computer";
    }
    else {

        if (playerSelection === computerSelection){
            winner = "tie";
        }
        // checks if playerSelection is equal to the losing play value for computerSeclection in the losingPlays object 
        else if (playerSelection === losingPlays[computerSelection]) { 
            winner = "player";
        }
        else {
            winner = "computer"
        }
    }

    return `${winner} ${"computer: " + computerSelection} ${ "player: " + playerSelection}`;
}

const playerSelection = "RoCk";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));