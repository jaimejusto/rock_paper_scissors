const TIE = 0;
const PLAYER = 1;
const COMPUTER = 2;

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor((Math.random() * 10) % 3);
    const computerChoice = choices[randomIndex];
    return computerChoice;
};

function playRound(playerMove, computerMove) {
    let winner;

    // check for tie
    if (playerMove == computerMove) {
        winner = TIE;
    }

    if ((playerMove == "rock" && computerMove == "scissors") ||
        (playerMove == "paper" && computerMove == "rock") ||
        (playerMove == "scissors" && computerMove == "paper")) {
        winner = PLAYER;
    } else {
        winner = COMPUTER;
    }

    return winner;

};

function announceWinner(winner, playerSelection, computerSelection) {
    const playerTiedMsg = `You Tied! computer also chose ${playerSelection}`;
    const playerWonMsg = `You Win! ${playerSelection} beats ${computerSelection}`;
    const playerLostMsg = `You Lose! ${computerSelection} beats ${playerSelection}`;
    const announcementMsgs = [playerTiedMsg, playerWonMsg, playerLostMsg];

    return announcementMsgs[winner];
};

function validatePlayerInput(playerMove) {
    playerMove = playerMove.toLowerCase();

    if (playerMove != "rock" && playerMove != "paper" && playerMove != "scissors") {
        return null;
    }

    return playerMove;
};

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0;

    // play 5 rounds
    while (rounds < 5) {
        let playerSelection;
        let computerSelection = computerPlay();

        // get player's move
        do {
            let playerInput = prompt("Enter your choice of rock, paper, or scissors: ");
            playerSelection = validatePlayerInput(playerInput);
        } while (playerSelection === null);

        // play round
        let winner = playRound(playerSelection, computerSelection);        

        // announce winner
        console.log(announceWinner(winner, playerSelection, computerSelection));

        // add point to scoreboard
        if (winner === PLAYER) {
            playerScore += 1;
            rounds += 1;
        } else if (winner === COMPUTER) {
            computerScore += 1;
            rounds += 1;
        }

        // display scoreboard
        console.log(`Player score: ${playerScore}. Computer score: ${computerScore}`);
    }
    
    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else {
        console.log("Computer Wins!");
    }
};
