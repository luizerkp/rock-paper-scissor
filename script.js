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

function playRound(playerSelection, computerSelection) {

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

    // keeps track of scores 
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

            player = window.prompt("Choose Rock, Paper, Scissors: ");

            if (player != null) {
                // sets first char toUpperCase and the rest of the string toLowerCase
                player = player.charAt(0).toUpperCase() + player.substring(1).toLowerCase();
                
            }
            else {
                break;
            }
        }
        while(!plays.includes(player));

        if (player == null) {
            computerScore = 5;
            break;
        }

        // chooses the computers hand 
        computer = computerPlay();

        console.log(`${"Round #"} ${i + 1}`);

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

    return `${"The result of the game is..."} ${winner}`; 
}

console.log(game());