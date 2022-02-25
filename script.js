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
const win = "You Won!";
const lose = "You Lose!";

// Used to build tie message and announce game results 
const tie = "It's a Tie!";
const equal = "ties with";

// keeps track of scores 
let playerScore = 0;
let computerScore = 0;

function computerPlay() {

    const possiblePlays = plays.length;
    const random = Math.floor(Math.random() * possiblePlays);
    return plays[random];
}

// plays one round of the game
function playRound(playerSelection, computerSelection) {

    let match = "";
    let results = "";
    const beats = "beats"

    const resultsRound = document.querySelector('#round');
    const resultsDetails = document.querySelector('#details');

    // checks if playerSelection is equal to the losing play value for computerSeclection in the losingPlays object 
    if (playerSelection === computerSelection) {

        match = `${playerSelection} ${equal} ${computerSelection}`;
        results = `${tie}`;
    }
    else if (playerSelection === losingPlays[computerSelection]) {

        match = `${playerSelection} ${beats} ${computerSelection}`;
        results = `${win}`;
    }
    else {

        match = `${computerSelection} ${beats} ${playerSelection}`;
        results = `${lose}`;
    }

    resultsRound.textContent = results;
    resultsDetails.textContent = match;

    return results;
}

// keeps track of the game score and declares a winner
function game(results) {

    // displays current score
    let playerScoreContent = document.querySelector('#playerScore');
    let computerScoreContent = document.querySelector('#computerScore');

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

    playerScoreContent.textContent = playerScore;
    computerScoreContent.textContent = computerScore;

    return winner;
}

// Displays the winner of the game and the option to play again
function playAgain(gameResults) {

    const modal = document.querySelector('.modal');
    const playAgainBtn = document.querySelector('.playAgainBtn');
    
    let playAgainText = document.querySelector('.playAgainText');

    if (gameResults === "Player") {
        playAgainText.textContent = win;
    }
    else if (gameResults === "Computer") {
        playAgainText.textContent = lose;
    }
    else {
        playAgainText.textContent = gameResults;
    }

    modal.classList.toggle("show-modal");
    
    playAgainBtn.addEventListener('click', () => {
        location.reload();
    }); 
}

const btns = document.querySelectorAll(".btns");

btns.forEach(btn => btn.addEventListener('click', function (e) {

    const playerSelection = e.target.className;
    const computerSelection = computerPlay();
    let gameResults = "";

    gameResults = game(playRound(playerSelection, computerSelection));
    if (gameResults) {
        playAgain(gameResults);
    }

}));
