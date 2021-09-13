import {playRound, computerPlay, announceWinner, PLAYER, COMPUTER} from "./game_engine.mjs"

let playerScore = 0;
let computerScore = 0;

const roundResultsMsg = document.getElementById("round_results");
const player_selection_buttons = document.querySelectorAll("button.player_selection");

player_selection_buttons.forEach((button) => {
    // play a round when player selects one of the choices
    button.addEventListener("click", () => {
        let playerSelection = button.value;
        let computerSelection = computerPlay();

        // play one round
        let winner = playRound(playerSelection, computerSelection);

        // display results
        roundResultsMsg.innerText = announceWinner(winner, playerSelection, computerSelection);

        // update scoreboard
        updateScoreboard(winner);
    });
});

function updateScoreboard(winner) {
    let playerScoreElement = document.getElementById("player_score");
    let computerScoreElement = document.getElementById("computer_score");

    // add point to winner's score and display new score
    if (winner === PLAYER){
        playerScore += 1;
        playerScoreElement.innerText = playerScore;
    } else if (winner === COMPUTER){
        computerScore += 1;
        computerScoreElement.innerText = computerScore;
    }

    // alert the player who won after 5 points scored then reset the scoreboard
    if (playerScore == 5) {
        alert("Player won!");
        resetScoreboard(playerScoreElement, computerScoreElement);
    } else if (computerScore == 5) {
        alert("Computer won!");
        resetScoreboard(playerScoreElement, computerScoreElement);
    }
}

function resetScoreboard(playerPoints, computerPoints) {
    playerScore = 0;
    computerScore = 0;

    playerPoints.innerText = 0;
    computerPoints.innerText = 0;
}
