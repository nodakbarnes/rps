function randomChoice() {
    // Randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    let result = 'default';
    
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                result = 'draw';
            } else if (computerSelection === 'paper') {
                result = 'lose';
            } else {
                result = 'win';
            }
            break;
        case 'paper':
            if (computerSelection === 'paper') {
                result = 'draw';
            } else if (computerSelection === 'scissors') {
                result = 'lose';
            } else {
                result = 'win';
            }
            break;
        case 'scissors':
            if (computerSelection === 'scissors') {
                result = 'draw';
            } else if (computerSelection === 'rock') {
                result = 'lose';
            } else {
                result = 'win';
            }
            break;
        default:
            console.log('Please choose rock, paper or scissors');
    }

    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        // let playerSelection = prompt(`Round ${i + 1}: Please choose rock, paper or scissors`, randomChoice());
        // playerSelection = playerSelection.toLowerCase();
        const playerSelection = randomChoice();
        const computerSelection = randomChoice();
        const drawString = `It's a draw. Both chose ${playerSelection}.`;
        const loseString = `You lose! ${computerSelection} beats ${playerSelection}.`;
        const winString = `You win! ${playerSelection} beats ${computerSelection}.`;
        const roundResult = playRound(playerSelection, computerSelection);

        switch (roundResult) {
            case 'win':
                console.log(winString);
                playerScore += 1;
                break;
            case 'lose':
                console.log(loseString);
                computerScore += 1;
                break;
            case 'draw':
                console.log(drawString);
                break;
            default:
                console.log('That round did not count');
                i -= 1;
        }

    }
    
    console.log(`Final score - You: ${playerScore}, Computer: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > playerScore) {
        console.log("Computer won the game!");
    } else {
        console.log("Tie game!");
    }
}

game();
