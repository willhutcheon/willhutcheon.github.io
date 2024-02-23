function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('user-choice').textContent = `YOUR THROW: ${userChoice.toUpperCase()}`;
    document.getElementById('computer-choice-img').src = `images/${computerChoice}.PNG`;

    const result = determineWinner(userChoice, computerChoice);
    document.getElementById('result').textContent = result;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function reset() {
    document.getElementById('user-choice').textContent = 'YOUR THROW';
    document.getElementById('computer-choice-img').src = 'images/question-mark.PNG'; // Reset the computer's choice image
    document.getElementById('result').textContent = 'RESULTS:';
}
