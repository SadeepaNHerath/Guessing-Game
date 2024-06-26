document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guessForm');
    const input = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const result = document.getElementById('result');
    const maxTries = 5;
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let tries = 0;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const userGuess = parseInt(input.value, 10);
        tries++;

        if (userGuess === randomNumber) {
            result.innerHTML = "வாழ்த்துகள்! நீ வென்றாய் <i class='bi bi-trophy-fill'></i>";
            result.style.color = 'green';
            setTimeout(resetGame, 3000); // Delay of 3 seconds before resetting the game
        } else if (tries >= maxTries) {
            result.innerHTML = "மன்னிக்கவும், முயற்சிகளின் அதிகபட்ச எண்ணிக்கையை அடைந்துவிட்டீர்கள். எண் இருந்தது " + randomNumber;
            result.style.color = 'red';
            setTimeout(resetGame, 3000); // Delay of 3 seconds before resetting the game
        } else if (userGuess > randomNumber) {
            message.innerHTML = 'மிக அதிக! மீண்டும் முயற்சி செய். <i class="bi bi-emoji-frown-fill"></i>';
        } else {
            message.innerHTML = 'மிக குறைந்த! மீண்டும் முயற்சி செய். <i class="bi bi-emoji-frown-fill"></i>';
        }

        input.value = '';
        input.focus();
    });

    function resetGame() {
        randomNumber = Math.floor(Math.random() * 10) + 1;
        tries = 0;
        message.innerHTML = '1 முதல் 10 வரையிலான எண்ணை யூகிக்கவும்';
        input.value = '';
        result.innerHTML = '';
        result.style.color = '';
    }
});
