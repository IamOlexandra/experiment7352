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

const rpsResult = document.querySelectorAll(".rps-text"),
    rpsButtons = querySelectorAll(".rps-itembutton");
let pressedRpsButton = null;
fu