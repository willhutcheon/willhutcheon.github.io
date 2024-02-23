function play(userChoice, element) {
    // Remove border from all images
    const images = document.querySelectorAll('.flex-container img');
    images.forEach(img => img.classList.remove('selected'));

    // Add border to the clicked image
    element.classList.add('selected');

    document.getElementById('user-choice').textContent = `YOUR THROW: ${userChoice.toUpperCase()}`;
    
    // Start the timeout for the computer's throw
    setTimeout(() => {
        const choices = ['rock', 'paper', 'scissors'];
        let index = 0;

        // Shuffle images every half second
        const shuffleInterval = setInterval(() => {
            const computerChoice = choices[index];
            document.getElementById('computer-choice-img').src = `images/${computerChoice}.PNG`;
            index++;
            if (index >= choices.length) {
                index = 0;
            }
        }, 500);

        // Stop shuffling after 3 seconds
        setTimeout(() => {
            clearInterval(shuffleInterval);
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            document.getElementById('computer-choice-img').src = `images/${computerChoice}.PNG`;
            const result = determineWinner(userChoice, computerChoice);
            document.getElementById('result').textContent = result;
            updateOutcome(result); // Update the outcome section
        }, 3000);

    }, 0);
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "IT'S A TIE!";
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        return 'YOU WIN!';
    } else {
        return 'COMPUTER WINS!';
    }
}

function updateOutcome(result) {
    const outcomeElement = document.getElementById('outcome');
    if (result === "IT'S A TIE!") {
        outcomeElement.textContent = "IT'S A TIE!";
    } else if (result === 'YOU WIN!') {
        outcomeElement.textContent = 'YOU WIN THE GAME!';
    } else {
        outcomeElement.textContent = 'COMPUTER WINS THE GAME!';
    }
}

function reset() {
    // Remove border from all images
    const images = document.querySelectorAll('.flex-container img');
    images.forEach(img => img.classList.remove('selected'));

    document.getElementById('user-choice').textContent = 'YOUR THROW';
    document.getElementById('computer-choice-img').src = 'images/question-mark.PNG'; // Reset the computer's choice image
    document.getElementById('result').textContent = 'RESULTS:';
    document.getElementById('outcome').textContent = ''; // Reset the outcome section
}
