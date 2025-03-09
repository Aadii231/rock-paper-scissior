let yourScore = 0;
let computerScore = 0;
let matchDraw = 0;

// 1. Get the Userchoices
const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
    const userChoice = choice.getAttribute("id");
    choice.addEventListener('click', () => playGame(userChoice));
});

// 2. Get the Computerchoices
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// 3. Play the Game
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice);
            break;
    }
}

// 4. Win the Game
function win(userChoice) {
    const userChoice_div = document.getElementById(userChoice);
    yourScore++;
    document.getElementById('yourScore').innerHTML = yourScore;
    const msg = document.getElementById('msg');
    msg.innerHTML = "You Win!";
    msgCon=document.getElementById('msg-container');
    msgCon.style.backgroundColor = "green"; 
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

// 5. Lose the Game
function lose(userChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    document.getElementById('computerScore').innerHTML = computerScore;
    const msg = document.getElementById('msg');
    msg.innerHTML = "You Lose!";
    msgCon=document.getElementById('msg-container');
    msgCon.style.backgroundColor = "red"; 
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

// 6. Draw the Game
function draw(userChoice) {
    const userChoice_div = document.getElementById(userChoice);
    matchDraw++;
    document.getElementById('matchDraw').innerHTML = matchDraw;
    const msg = document.getElementById('msg');
    msg.innerHTML = "MATCH DRAW!";
    msgCon=document.getElementById('msg-container');
    msgCon.style.backgroundColor = "#081b31"; 
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

// 7. Restart the Game
const restart = document.getElementById('reset');
restart.addEventListener('click', () => {
    yourScore = 0;
    computerScore = 0;
    matchDraw = 0;
    document.getElementById('yourScore').innerHTML = yourScore;
    document.getElementById('computerScore').innerHTML = computerScore;
    document.getElementById('matchDraw').innerHTML = matchDraw;
    document.getElementById('msg').innerHTML = "Let's Play Again!";
    msgCon=document.getElementById('msg-container');
    msgCon.style.backgroundColor = "#081b31"; 
    document.getElementById('msg').style.backgroundColor = ""; // Reset background color
});