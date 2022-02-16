const plays = ["Paper", "Rock", "Scissors"];

function computerPlay() {

    const possiblePlays = plays.length;
    const random = Math.floor(Math.random() * possiblePlays);
    return plays[random];
}

function round (playerSelection, computerSelection)
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
        const player = plays.indexOf(playerSelection);
        const computer = plays.indexOf(computerSelection);
        if (player == computer){
            winner = "tie";
        }
        else if (player > computer) {
            winner = "palyer";
        }
        else {
            winner = "computer"
        }

        
    }
}