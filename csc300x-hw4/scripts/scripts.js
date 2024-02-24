/* Will Hutcheon
Webpage that allows a user to play rock paper scissors against the computer. This file contains the javascript code for the index webpage. This code adds
game simulation functionality as well as keeping track of the results. */
let wins = 0;
let losses = 0;
let ties = 0;

function play(userChoice, element) {
    const images = document.querySelectorAll('.flex-container img');
    images.forEach(img => img.classList.remove('selected'));
    element.classList.add('selected');
    document.getElementById('user-choice').textContent = `YOUR THROW: ${userChoice.toUpperCase()}`;
    setTimeout(() => {
        const choices = ['rock', 'paper', 'scissors'];
        let index = 0;
        const shuffleInterval = setInterval(() => {
            const computerChoice = choices[index];
            document.getElementById('computer-choice-img').src = `images/${computerChoice}.PNG`;
            index++;
            if (index >= choices.length) {
                index = 0;
            }
        }, 500);
        setTimeout(() => {
            clearInterval(shuffleInterval);
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            document.getElementById('computer-choice-img').src = `images/${computerChoice}.PNG`;
            const result = determineWinner(userChoice, computerChoice);
            document.getElementById('result').textContent = result;
            updateOutcome(result);
        }, 3000);

    }, 0);
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        ties++;
        return "IT'S A TIE!";
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        wins++;
        return 'YOU WIN!';
    } else {
        losses++;
        return 'COMPUTER WINS!';
    }
}

function updateOutcome(result) {
    const outcomeElement = document.getElementById('result');
    if (result === "IT'S A TIE!") {
        outcomeElement.textContent = `RESULTS: ${result}`;
    } else if (result === 'YOU WIN!') {
        outcomeElement.textContent = `RESULTS: ${result}`;
    } else {
        outcomeElement.textContent = `RESULTS: ${result}`;
    }
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('ties').textContent = ties;
}



function reset() {
    const images = document.querySelectorAll('.flex-container img');
    images.forEach(img => img.classList.remove('selected'));

    document.getElementById('user-choice').textContent = 'YOUR THROW';
    document.getElementById('computer-choice-img').src = 'images/question-mark.PNG';
    document.getElementById('result').textContent = 'RESULTS:';
    document.getElementById('outcome').textContent = '';
}

function resetScore() {
    wins = 0;
    losses = 0;
    ties = 0;
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('ties').textContent = ties;
}
