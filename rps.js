function computerPlay() {
	// Randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
	const choices = ['rock', 'paper', 'scissors'];
	const randomNumber = Math.floor(Math.random() * choices.length);
	return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {

	if (playerSelection === computerSelection) return 'tie';
	
	switch (playerSelection) {
		case 'rock':
			if (computerSelection === 'paper') return 'lose';
			return 'win';
			break;
		case 'paper':
			if (computerSelection === 'scissors') return 'lose';
			return 'win';
			break;
		case 'scissors':
			if (computerSelection === 'rock') return 'lose';
			return 'win';
			break;
		default:
			console.log('Please choose rock, paper or scissors');
	}
}

function game() {
	let playerScore = 0;
	let computerScore = 0;
	
	for (let i = 0; i < 5; i++) {
		let playerSelection = prompt(`Round ${i + 1}: Please choose rock, paper or scissors`);
		playerSelection = playerSelection.toLowerCase();
		const computerSelection = computerPlay();
		const tieString = `It's a tie. Both chose ${playerSelection}.`;
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
			case 'tie':
				console.log(tieString);
				break;
			default:
				console.log('That round did not count');
				i -= 1;
		}

	}
	
	console.log(`Final score - You: ${playerScore} Computer: ${computerScore}`);
	if (playerScore > computerScore) {
		console.log("You won the game!");
	} else if (computerScore > playerScore) {
		console.log("Computer won the game!");
	} else {
		console.log("Tie game!");
	}
}

game();
