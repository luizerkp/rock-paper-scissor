const plays = ["Paper", "Rock", "Scissors"];
const losingPlays = {
    Scissors: "Rock", 
    Paper: "Scissors", 
    Rock: "Paper"
};

// Used to craft win/lose message and keep track when player wins/loses
const win = "You Win!";
const lose = "You Lose!";

function computerPlay() {

    const possiblePlays = plays.length;
    const random = Math.floor(Math.random() * possiblePlays);
    return plays[random];
}

function playRound(playerSelection, computerSelection)
{

    // stores the results of the match
    let match = ""; 
    
    const beats = "beats"

    // checks if playerSelection is equal to the losing play value for computerSeclection in the losingPlays object 
    if (playerSelection === losingPlays[computerSelection]) { 

        match = `${win} ${playerSelection} ${beats} ${computerSelection}`;
    }
    else {

        match = `${lose} ${computerSelection} ${beats} ${playerSelection}`;
    }

    return match;
}

function game() {

    // keeps treck of scores 
    let playerScore = 0;
    let computerScore = 0;

    // Used to build tie message and announce game results 
    const tie = "It's a Tie!";
    const equal = "is equal";

    let winner = "";

    for (let i = 0; i < 5; i++) {

        let player = "";
        let computer = "";  
        let roundResults = "";

        do {
            player = window.prompt("Choose Rock, Paper or Scissors: ");
        }
        while(!plays.includes(player));

        // sets first char toUpperCase and the rest of the string toLowerCase
        player = player.charAt(0).toUpperCase() + player.substring(1).toLowerCase();
        // chooses the computers hand 
        computer = computerPlay();

        if (player === computer) {
            roundResults = `${tie} ${player} ${equal} ${computer}`;
        }
        else {
            roundResults = playRound(player, computer);
        }

        console.log(roundResults);

        if (roundResults.includes(win)) {
            playerScore++;
        }
        else if (roundResults.includes(lose)) {
            computerScore++;
        }
    }

    // determine winner or tie
    if (playerScore > computerScore) {
        winner = win;
    }
    else if (playerScore === computerScore) {
        winner = tie;
    }
    else {
        winner = lose;
    }

    return `${"The results of the game is..."} ${winner}`; 

}

const playerSelection = "RoCk";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));