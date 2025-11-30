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