function randomChoice() {
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

function reportScore(playerScore, computerScore) {
    const finalScore = document.createElement('p');
    finalScore.textContent = `Final score - You: ${playerScore}, Computer: ${computerScore}`;

    score.appendChild(finalScore);

    const results = document.createElement('p');
    if (playerScore > computerScore) {
        results.textContent = "You won the game!";
    } else if (computerScore > playerScore) {
        results.textContent = "Computer won the game!";
    } else {
        results.textContent = "Tie game!";
    }

    score.appendChild(results);
}

function game(playerSelection) {
    // Clear the scores if end of round
    if (endRound) {
        score.innerHTML = '';
        endRound = false;
    }

    const computerSelection = randomChoice();
    const drawString = `It's a draw. Both chose ${playerSelection}.`;
    const loseString = `You lose! ${computerSelection} beats ${playerSelection}.`;
    const winString = `You win! ${playerSelection} beats ${computerSelection}.`;
    const content = document.createElement('p');
    const roundResult = playRound(playerSelection, computerSelection);

    switch (roundResult) {
        case 'win':
            content.textContent = winString;
            playerScore += 1;
            break;
        case 'lose':
            content.textContent = loseString;
            computerScore += 1;
            break;
        case 'draw':
            content.textContent = drawString;
            break;
        default:
            content.textContent = 'That round did not count';
    }

    score.appendChild(content);

    if (playerScore >= 5 || computerScore >= 5) {
        reportScore(playerScore, computerScore);
        endRound = true;
        playerScore = 0;
        computerScore = 0;
    }

}

let playerScore = 0;
let computerScore = 0;
let endRound = false;

const score = document.querySelector('#score');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {
    game(button.id);
  });
});
