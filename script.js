let userName = prompt("Введіть своє ім'я:");
let userScore = 0;
let computerScore = 0;
const maxWins = 3;

document.getElementById('welcome').textContent = `Ласкаво просимо, ${userName}!`;

function playGame() {
    const userNumber = Math.floor(Math.random() * 10) + 1;
    const computerNumber = Math.floor(Math.random() * 100) + 1;

    let resultMessage;
    if (userNumber > computerNumber) {
        userScore++;
        resultMessage = `Ваше число: ${userNumber}, Комп'ютер: ${computerNumber}. Ви виграли цей раунд!`;
    } else if (userNumber < computerNumber) {
        computerScore++;
        resultMessage = `Ваше число: ${userNumber}, Комп'ютер: ${computerNumber}. Комп'ютер виграв цей раунд.`;
    } else {
        resultMessage = `Ваше число: ${userNumber}, Комп'ютер: ${computerNumber}. Нічия!`;
    }

    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('resultMessage').textContent = resultMessage;

	if (userScore === maxWins) {
        document.getElementById('resultMessage').textContent = "Вітаємо, ви перемогли!";
        document.getElementById('playButton').disabled = true;
    } else if (computerScore === maxWins) {
        document.getElementById('resultMessage').textContent = "Переміг комп'ютер";
        document.getElementById('playButton').disabled = true;
    }
}
