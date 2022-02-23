const footer = document.querySelector('.footer');
const footerPara = document.createElement('p');
let date = new Date().getFullYear();
footerPara.textContent = `Copyright © ${date} Luis Tamarez All Rights Reserved`;
footer.appendChild(footerPara);

const plays = ["Paper", "Rock", "Scissors"];
const losingPlays = {
    Scissors: "Rock", 
    Paper: "Scissors", 
    Rock: "Paper"
};

// Used to craft win/lose message and keep track when player wins/loses
const win = "You Win!";
const lose = "You Lose!";

// Used to build tie message and announce game results 
const tie = "It's a Tie!";
const equal = "is equal";    

// keeps track of scores 
let playerScore = 0;
let computerScore = 0;

function computerPlay() {

    const possiblePlays = plays.length;
    const random = Math.floor(Math.random() * possiblePlays);
    return plays[random];
}

function playRound(playerSelection, computerSelection) {

    let match = ""; 
    const beats = "beats"

    const resultsContent = document.querySelector('.results'); 
    const resultsPara = document.createElement('p');
    const existingResults = resultsContent.querySelector('.results p');

    if (existingResults) {
        resultsContent.removeChild(existingResults);
    }
    

    // checks if playerSelection is equal to the losing play value for computerSeclection in the losingPlays object 
    if (playerSelection === computerSelection) {

        match = `${tie} ${playerSelection} ${equal} ${computerSelection}`;
    }                
    else if (playerSelection === losingPlays[computerSelection]) { 

        match = `${win} ${playerSelection} ${beats} ${computerSelection}`;
    }
    else {

        match = `${lose} ${computerSelection} ${beats} ${playerSelection}`;
    }

    resultsPara.textContent = match;
    resultsContent.appendChild(resultsPara);

    return match;
}

function game(results) {

    // displays current score
    const scoreContent = document.querySelector('.score');
    const scoreParaPlayer = document.createElement('p');
    const scoreParaComputer = document.createElement('p');
    scoreParaComputer.classList.add('computer');
    scoreParaPlayer.classList.add('player');
    const existingScore = scoreContent.querySelectorAll('.score p');

    let winner = "";

    if (results.includes(win)) {
        playerScore++;
    }
    else if (results.includes(lose)) {
        computerScore++;
    }


    // determine winner 
    if (playerScore === 5) {
        winner = "Player";
    }
    else if (computerScore === 5) {
        winner = "Computer";
    }    
    
    scoreParaPlayer.textContent = `Player Score: ${playerScore}`;
    scoreParaComputer.textContent = `Computer Score: ${computerScore}`;
    
    if (existingScore) {
        existingScore.forEach(score => {
            scoreContent.removeChild(score);
        });
    }

    scoreContent.appendChild(scoreParaPlayer);
    scoreContent.appendChild(scoreParaComputer);
    return winner; 
}

function playagain () {
    let tryAgay = window.confirm("Would you like to play again?");
    if (tryAgay) {
        window.location.reload();
    }
    else {
        alert("Thanks for playing!");
    }
}

const btns = document.querySelectorAll(".btns");

btns.forEach(btn => btn.addEventListener('click', function(e) {

    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    let gameResults = "";

    if (playerScore >= 5 || computerScore >= 5) {
        playagain();
    }
    else {
        gameResults = game(playRound(playerSelection, computerSelection));
        if (gameResults) {
            console.log(gameResults);
            
        }
        else {
            // console.log("No winner yet");
            return;
        }
    }
    
    
    // if (!gameResults) {
    //     return;
    // }
    // else {
        // const winner = document.querySelector('.winner');
        // const winnerPara = document.createElement('p');
        // const existingWinner = winner.querySelector('p');

        // if (existingWinner) {
        //     winner.removeChild(existingWinner);
        // }

        // winner.appendChild(winnerPara);
        // winnerPara.textContent = `${gameResults} is the winner!`;
        
        // // resets all game values to initial state
        // playagain();
    // }
    
    // if (gameResults) {
    //     resultsPara.textContent = `${gameResults} wins!`;
    // }

    // console.log(playerSelection);
}));

// console.log(game());