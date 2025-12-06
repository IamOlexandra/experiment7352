function closePopupWithButton(button, popup) {
    button.addEventListener("click", () => {
        popup.style.display = "none";
    });
}
const firstPopup = document.querySelector(".popup"),
    firstPopupClose = document.querySelector(".popup-close"),
    firstPopupForm = document.querySelector(".popup-form");
closePopupWithButton(firstPopupClose, firstPopup);
firstPopupForm.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.querySelector(".popup-input").value.trim();
    if(name !== "") {
        document.querySelector(".header-text").textContent = `Вітаємо, ${name}!`
    }
    firstPopup.style.display = "none";
});

const headerSublist = document.querySelector(".header-sublist");
let isHeaderSublistVisible = false;
document.getElementById("header-opening").addEventListener("click", () => {
    isHeaderSublistVisible ? headerSublist.style.display = "none" : headerSublist.style.display = "block";
    isHeaderSublistVisible = !isHeaderSublistVisible;
});

const yearResult = document.querySelector(".year-text");
document.querySelector(".year-button").addEventListener("click", () => {
    const year = Number(document.querySelector(".year-input").value.trim());
    if(isNaN(year)) {
        yearResult.textContent = "Введіть справжнє число число";
        yearResult.style.color = "var(--main)";
    }
    else if((year % 4) === 0) {
        yearResult.textContent = "Ви народилися у високосний рік!";
        yearResult.style.color = "var(--win)";
    } else {
        yearResult.textContent = "Ви народилися не у високосний рік!";
        yearResult.style.color = "var(--loss)";
    }
});

const rpsResult = document.querySelector(".rps-text"),
    rpsButtons = document.querySelectorAll(".rps-itembutton");
let pressedRpsButton = null,
    rpsComputerChose = null,
    rpsComputerWins = 0,
    rpsPlayerWins = 0;
rpsButtons.forEach((button, index) => button.addEventListener("click", () => {
    if(rpsComputerChose !== null) {
        rpsButtons[rpsComputerChose].classList.remove("rps-itembutton-computer");
    }
    if(pressedRpsButton !== null) {
        rpsButtons[pressedRpsButton].classList.remove("rps-itembutton-pressed");
    }
    pressedRpsButton = index;
    rpsButtons[pressedRpsButton].classList.add("rps-itembutton-pressed");
    rpsComputerChose = Math.floor(Math.random() * 3);
    if(rpsComputerChose - index === -1 || rpsComputerChose - index === 2) {
        rpsResult.textContent = "Комп’ютер виграв раунд!";
        rpsResult.style.color = "var(--loss)";
        rpsComputerWins++;
    } else if(rpsComputerChose - index === 1 || rpsComputerChose - index === -2) {
        rpsResult.textContent = "Ви виграли раунд!";
        rpsResult.style.color = "var(--win)";
        rpsPlayerWins++;
    } else if(rpsComputerChose === index) {
        rpsResult.textContent = "Нічія!";
        rpsResult.style.color = "var(--draw)";
    }
    document.querySelector(".rps-score").innerHTML = `Рахунок:<br>Комп’ютер - ${rpsComputerWins}<br>Ви - ${rpsPlayerWins}`;
}));
document.querySelector(".rps-button").addEventListener("click", () => {
    if(rpsComputerChose !== null) {
        rpsButtons[rpsComputerChose].classList.add("rps-itembutton-computer");
    }
});

const calculatorResult = document.querySelector(".calculator-text"),
    calculatorButtons = document.querySelectorAll(".calculator-actionbutton");
let pressedCalculatorButton = null;
calculatorButtons.forEach((button, index) => button.addEventListener("click", () => {
    if(pressedCalculatorButton !== null) {
        calculatorButtons[pressedCalculatorButton].classList.remove("calculator-button-pressed");
    }
    pressedCalculatorButton = index;
    calculatorButtons[pressedCalculatorButton].classList.add("calculator-button-pressed");
}));
document.querySelectorAll(".calculator-equals").addEventListener("click", () => {
    const number1 = Number(document.getElementById("calculator-number1").value.trim()),
        number2 = Number(document.getElementById("calculator-number2").value.trim());
});