document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guessForm');
    const input = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const result = document.getElementById('result');
    const maxTries = 10;
    let randomNumber = Math.floor((Math.random()*10)+1);
    console.log(randomNumber);
    let tries = 0;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const userGuess = parseInt(input.value, 10);
        tries++;

        if (userGuess === randomNumber) {
            result.textContent = "Congratulations! You guessed the number ${randomNumber} in ${tries} tries.";
            result.style.color = 'green';
            resetGame();
        } else if (tries >= maxTries) {
            result.textContent = "Sorry, you've reached the maximum number of tries. The number was ${randomNumber}.";
            result.style.color = 'red';
            resetGame();
        } else if (userGuess > randomNumber) {
            message.textContent = 'Too high! Try again.';
        } else {
            message.textContent = 'Too low! Try again.';
        }

        input.value = '';
        input.focus();
    });

    function resetGame() {
        randomNumber = Math.floor(Math.random() * 10) + 1;
        tries = 0;
        message.textContent = 'Guess a number between 1 and 100';
        input.value='';}
});