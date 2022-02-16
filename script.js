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

    // winner is a temp var I am using to work through the logic 
    // it is likely to change later as I figure out how to 
    // print winning/losing msg
    let winner = "";
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase(); 

    if (!plays.includes(playerSelection))
    {
        winner = "Computer";
    }
    else {
        // const player = plays.indexOf(playerSelection);
        // const computer = plays.indexOf(computerSelection);
        if (playerSelection === computerSelection){
            winner = "tie";
        }
        else if (playerSelection == losingPlays[computerSelection]) {
            winner = "player";
        }
        else {
            winner = "computer"
        }
    }
    return `${winner} ${"computer: " + computerSelection} ${ "player: " + playerSelection}`;
}

const playerSelection = "PAPER";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));