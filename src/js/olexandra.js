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
document.getElementById("calculator-equals").addEventListener("click", () => {
    const number1 = Number(document.getElementById("calculator-number1").value.trim()),
        number2 = Number(document.getElementById("calculator-number2").value.trim());
    if(!isNaN(number1) && !isNaN(number2) && pressedCalculatorButton !== null) {
        if(pressedCalculatorButton === 0) {
            calculatorResult.textContent = number1 + number2;
        } else if(pressedCalculatorButton === 1) {
            calculatorResult.textContent = number1 * number2;
        } else if(pressedCalculatorButton === 2) {
            calculatorResult.textContent = number1 - number2;
        } else if(pressedCalculatorButton === 3) {
            if(number2 !== 0) {
                calculatorResult.textContent = number1 / number2;
            } else {
                calculatorResult.textContent = "Помилка!"
            }
        } else {
            calculatorResult.textContent = "Помилка!";
        }
    } else {
        calculatorResult.textContent = "Помилка!";
    }
    if(calculatorResult.textContent.length > 15) {
        calculatorResult.textContent = "Число задовге";
    }
});

const footballBall = document.querySelector(".football-ball"),
    footballField = document.querySelector(".football-field");
footballField.addEventListener("click", event => {
    let x = event.clientX - footballField.getBoundingClientRect().x - 25,
        y = event.clientY - footballField.getBoundingClientRect().y - 25;
    if(x + 50 > footballField.getBoundingClientRect().width) {
        x = footballField.getBoundingClientRect().width - 52;
    }
    if(x < 0) {
        x = 0;
    }
    if(y + 50 > footballField.getBoundingClientRect().height) {
        y = footballField.getBoundingClientRect().height - 52;
    }
    if(y < 0) {
        y = 0;
    }
    if(x <= 5 && (y <= 5 || y >= footballField.getBoundingClientRect().height - 57)) {
        x += 6;
    }
    if(x >= footballField.getBoundingClientRect().width - 57 && (y <= 5 || y >= footballField.getBoundingClientRect().height - 57)) {
        x -= 6;
    }
    footballBall.style.left = x + "px";
    footballBall.style.top = y + "px";
});

const allScientists = [
    {firstName: "Albert", lastName: "Einstein", birth: 1879, death: 1955},
    {firstName: "Isaac", lastName: "Newton", birth: 1643, death: 1727},
    {firstName: "Marie", lastName: "Curie", birth: 1867, death: 1934},
    {firstName: "Charles", lastName: "Darwin", birth: 1809, death: 1882},
    {firstName: "Nikola", lastName: "Tesla", birth: 1856, death: 1943},
    {firstName: "Galileo", lastName: "Galilei", birth: 1564, death: 1642},
    {firstName: "Ada", lastName: "Lovelace", birth: 1815, death: 1852},
    {firstName: "Stephen", lastName: "Hawking", birth: 1942, death: 2018},
    {firstName: "Dmitri", lastName: "Mendeleev", birth: 1834, death: 1907},
    {firstName: "Johannes", lastName: "Kepler", birth: 1571, death: 1630},
    {firstName: "Rosalind", lastName: "Franklin", birth: 1920, death: 1958},
    {firstName: "Michael", lastName: "Faraday", birth: 1791, death: 1867},
],
    scientistsList = document.querySelector(".scientists-list"),
    scientistsButtons = document.querySelectorAll(".scientists-button");
let someScientists = allScientists;
function buildScientists(scientists) {
    let html = "";
    scientists.forEach(scientist => {
        html += `<li class="scientists-item"><h3 class="scientists-name">${scientist.firstName} ${scientist.lastName}</h3><p class="scientists-years">${scientist.birth}-${scientist.death}</p></li>`;
    });
    scientistsList.innerHTML = html;
}
buildScientists(someScientists);
scientistsButtons[0].addEventListener("click", () => {
    someScientists = someScientists.filter(scientist => scientist.birth > 1800 && scientist.birth <= 1900);
    buildScientists(someScientists);
});
scientistsButtons[1].addEventListener("click", () => {
    //Finish later
    buildScientists(someScientists);
});
scientistsButtons[2].addEventListener("click", () => {
    someScientists = someScientists.sort((a, b) => (b.death - b.birth) - (a.death - a.birth));
    buildScientists(someScientists);
});
scientistsButtons[3].addEventListener("click", () => {
    let latestBornScientist = {firstName: null, lastName: null, birth: 0, death: null};
    for(let scientist of someScientists) {
        if(scientist.birth > latestBornScientist.birth) {
            latestBornScientist = scientist;
        }
    }
    someScientists = [];
    someScientists.push(latestBornScientist);
    buildScientists(someScientists);
});
scientistsButtons[4].addEventListener("click", () => {
    const albert = allScientists.find(scientist => scientist.firstName === "Albert" && scientist.lastName === "Einstein");
    document.querySelector(".scientists-popup-text").textContent = `Рік народження ${albert.firstName} ${albert.lastName} - ${albert.birth}.`;
    document.querySelector(".scientists-popup").style.display = "block";
});
scientistsButtons[5].addEventListener("click", () => {
    someScientists = someScientists.filter(scientist => scientist.lastName[0] === "C");
    buildScientists(someScientists);
});
scientistsButtons[6].addEventListener("click", () => {
    someScientists = someScientists.filter(scientist => scientist.firstName[0] !== "A");
    buildScientists(someScientists);
});
scientistsButtons[7].addEventListener("click", () => {
    let mostLivedScientist = {firstName: null, lastName: null, birth: 0, death: 0};
    for(let scientist of someScientists) {
        if(scientist.death - scientist.birth > mostLivedScientist.death - mostLivedScientist.birth) {
            mostLivedScientist = scientist;
        }
    }
    let leastLeavedScientist = {firstName: null, lastName: null, birth: 0, death: 1000};
    for(let scientist of someScientists) {
        if(scientist.death - scientist.birth < leastLeavedScientist.death - leastLeavedScientist.birth) {
            leastLeavedScientist = scientist;
        }
    }
    someScientists = [];
    someScientists.push(mostLivedScientist);
    someScientists.push(leastLeavedScientist);
    buildScientists(someScientists);
});
scientistsButtons[8].addEventListener("click", () => {
    someScientists = someScientists.filter(scientist => scientist.firstName[0] === scientist.lastName[0]);
    buildScientists(someScientists);
});
document.querySelector(".scientists-popup-close").addEventListener("click", () => {
    document.querySelector(".scientists-popup").style.display = "none";
});