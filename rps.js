function computerPlay() {
	// Randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
	const choices = ['rock', 'paper', 'scissors'];
	let randomNumber = Math.floor(Math.random() * choices.length);
	return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
	// Plays a single round of Rock Paper Scissors
	playerSelection = playerSelection.toLowerCase();
	console.log("You chose " + playerSelection + ".");
	console.log("Computer chose " + computerSelection + ".");
	
	if (playerSelection === computerSelection) return "It's a tie.";
	
	switch (playerSelection) {
		case 'rock':
			if (computerSelection === 'paper') return "You lose.";
			return "You win!";
			break;
		case 'paper':
			if (computerSelection === 'scissors') return "You lose.";
			return "You win!";
			break;
		case 'scissors':
			if (computerSelection === 'rock') return "You lose.";
			return "You win!";
			break;
		default:
			console.log('Please choose rock, paper or scissors');
	}
}

function game() {
	let playerScore = 0;
	let computerScore = 0;
	
	for (let i = 0; i < 5; i++) {
		const playerSelection = prompt("Round " + (i + 1) + ": Please choose rock, paper or scissors");
		const computerSelection = computerPlay();
		const roundResult = playRound(playerSelection, computerSelection);
		console.log(roundResult);
		
		switch (roundResult) {
			case "You win!":
				playerScore += 1;
				break;
			case "You lose.":
				computerScore += 1;
				break;
			default:
				console.log('No score for a tie.');
		}
	}
	
	console.log("Final score - You: " + playerScore + " Computer: " + computerScore);
	if (playerScore > computerScore) {
		console.log("You won the game!");
	} else if (computerScore > playerScore) {
		console.log("Computer won the game!");
	} else {
		console.log("Tie game!");
	}
}

game();
