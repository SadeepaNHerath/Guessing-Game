document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guessForm');
    const input = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const result = document.getElementById('result');
    const attemptCount = document.getElementById('attemptCount');
    const winCount = document.getElementById('winCount');
    const newGameBtn = document.getElementById('newGameBtn');
    const maxTries = 5;
    let randomNumber;
    let tries = 0;
    let wins = 0;
    
    initGame();
    
    function initGame() {
        randomNumber = Math.floor(Math.random() * 10) + 1;
        tries = 0;
        attemptCount.textContent = tries;
        message.innerHTML = '1 සිට 10 දක්වා අංකයක් අනුමාන කරන්න';
        message.className = 'fs-5';
        input.value = '';
        result.innerHTML = '';
        result.className = 'result-message';
        input.disabled = false;
        form.querySelector('button').disabled = false;
        input.focus();
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const userGuess = parseInt(input.value, 10);
        tries++;
        attemptCount.textContent = tries;

        if (userGuess === randomNumber) {
            wins++;
            winCount.textContent = wins;
            result.innerHTML = "සුභ පැතුම්! ඔබ ජයග්‍රහණය කළා <i class='bi bi-trophy-fill'></i>";
            result.className = 'result-message text-success animate-success';
            disableInputs();
            setTimeout(initGame, 3000);
        } else if (tries >= maxTries) {
            result.innerHTML = `සමාවෙන්න, ඔබ උපරිම උත්සාහයන් ගණන කරා ළඟා වී ඇත. අංකය වූයේ ${randomNumber} <i class="bi bi-emoji-frown-fill"></i>`;
            result.className = 'result-message text-danger';
            disableInputs();
            setTimeout(initGame, 3000);
        } else if (userGuess > randomNumber) {
            message.innerHTML = 'ඉතා වැඩියි! නැවත උත්සාහ කරන්න. <i class="bi bi-arrow-down"></i>';
            message.className = 'fs-5 text-warning';
        } else {
            message.innerHTML = 'ඉතා අඩුයි! නැවත උත්සාහ කරන්න. <i class="bi bi-arrow-up"></i>';
            message.className = 'fs-5 text-warning';
        }

        input.value = '';
        input.focus();
    });
    
    newGameBtn.addEventListener('click', initGame);
    
    function disableInputs() {
        input.disabled = true;
        form.querySelector('button').disabled = true;
    }
});
