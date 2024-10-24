let userScore = 0;
let computerScore = 0;

let userName = prompt("Введіть своє ім'я:");

document.getElementById('welcome-message').textContent = `Вітаємо, ${userName}!`;

document.getElementById('user-name').textContent = `${userName}: `;

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

document.getElementById('play-button').addEventListener('click', function() {
    let userNumber = getRandomNumber();
    let computerNumber = getRandomNumber();
    
    if (userNumber > computerNumber) {
        userScore++;
        document.getElementById('result-message').textContent = `${userName} виграв цей раунд! (${userNumber} проти ${computerNumber})`;
    } else if (computerNumber > userNumber) {
        computerScore++;
        document.getElementById('result-message').textContent = `Комп'ютер виграв цей раунд! (${computerNumber} проти ${userNumber})`;
    } else {
        document.getElementById('result-message').textContent = `Нічия! (${userNumber} проти ${computerNumber})`;
    }

    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;

    if (userScore === 3) {
        document.getElementById('result-message').textContent = `${userName} виграв гру!`;
        resetGame();
    } else if (computerScore === 3) {
        document.getElementById('result-message').textContent = `Комп'ютер виграв гру!`;
        resetGame();
    }
});

function resetGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
}
