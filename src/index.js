
let secretNumber = Math.floor(Math.random() * 9) + 1;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const guessMessage = document.getElementById('guessMessage');
const guessResetBtn = document.getElementById('guessResetBtn');

function showGuessMessage(text, color) {
    guessMessage.style.color = color;
    guessMessage.textContent = text;
}


guessBtn.addEventListener('click', () => {
    const raw = guessInput.value;
    const num = Number(raw);

    if (raw.trim() === '' || isNaN(num)) {
        showGuessMessage('Введіть число бистрее', 'red');
        return;
    }

    if (num < 1 || num > 9) {
        showGuessMessage('Тільки від 1 до 9', 'red');
        return;
    }

    if (num === secretNumber) {
        showGuessMessage('Повезло', 'green');
    } else {
        showGuessMessage('Не вгадали', 'red');
    }
});

guessResetBtn.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random() * 9) + 1;
    guessInput.value = '';
    showGuessMessage('', ''); 
    guessInput.focus();
});



const timeInput = document.getElementById('timeInput');
const timeBtn = document.getElementById('timeBtn');
const timeMessage = document.getElementById('timeMessage');

timeBtn.addEventListener('click', () => {
    const raw = timeInput.value;
    const minutes = Number(raw);

    if (raw.trim() === '' || isNaN(minutes) || minutes < 0) {
        timeMessage.style.color = 'red';
        timeMessage.textContent = 'Введіть коректне число хвилин!';
        return;
    }

    const hours = Math.floor(minutes / 60);
    const minsLeft = minutes % 60;

    timeMessage.style.color = 'green';
    timeMessage.textContent = `${hours} годин ${String(minsLeft).padStart(2,'0')} хвилин`;
});

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const dinoMsg = document.getElementById("dinoMessage");

let isAlive = true;
let cactusX = 600; 


function jump() {
    if (dino.classList.contains("jump")) return;
    dino.classList.add("jump");
    setTimeout(() => dino.classList.remove("jump"), 450);
}


document.addEventListener("keydown", function(e) {
    if (e.code === "Space" || e.code === "ArrowUp") {
        if (!isAlive) restartGame();
        else jump();
    }
});


function gameLoop() {
    if (!isAlive) return;

    cactusX -= 5; 

    if (cactusX < -50) cactusX = 600; 

    cactus.style.right = (600 - cactusX) + "px";

    let dinoBottom = parseInt(getComputedStyle(dino).bottom);

    if (cactusX < 60 && cactusX > 25 && dinoBottom < 40) {
        isAlive = false;
        dinoMsg.style.color = "red";
        dinoMsg.textContent = "GG ez";
        return;
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();


function restartGame() {
    cactusX = 600;
    isAlive = true;
    dinoMsg.textContent = "";
    gameLoop();
}