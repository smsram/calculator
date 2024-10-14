/* Toggle Mode */

const body = document.body;

const themeSwitch = document.querySelector(".darkMode");
const calcContainer = document.querySelector(".calcContainer");
const bxs_moon = document.querySelector(".bxs-moon");
const bx_sun = document.querySelector(".bx-sun");
const calcContainerDiv = document.querySelector(".calcContainerDiv");
const Header = document.querySelector(".Header");

themeSwitch.addEventListener("click", () => {
    body.classList.toggle("background-color");
    calcContainer.classList.toggle("calc-container");
    bxs_moon.classList.toggle("bxsMoon");
    bx_sun.classList.toggle("bxSun");
    Header.classList.toggle("header");
});
/* Calculator */
const calcDisplay = document.querySelector("#calcDisplay");

function clearDisplay(){
    calcDisplay.value = "";
}
function showOnDisplay(value){
    calcDisplay.value += value;
}
function deleteLast(){
    calcDisplay.value = calcDisplay.value.slice(0, -1);
}
function equalTo(){
    try{
       let expression = calcDisplay.value
       .replace(/×/g, "*")
       .replace(/÷/g, "/")
       .replace(/\^/g, "**");
        calcDisplay.value = eval(expression);
    }
    catch{
        calcDisplay.value = "Error Bruh";
    }
}

document.querySelector(".calcBtn1").addEventListener("click", () => {
    showOnDisplay("1");
});
document.querySelector(".calcBtn2").addEventListener("click", () => {
    showOnDisplay("2");
});
document.querySelector(".calcBtn3").addEventListener("click", () => {
    showOnDisplay("3");
});
document.querySelector(".calcBtn4").addEventListener("click", () => {
    showOnDisplay("4");
});
document.querySelector(".calcBtn5").addEventListener("click", () => {
    showOnDisplay("5");
});
document.querySelector(".calcBtn6").addEventListener("click", () => {
    showOnDisplay("6");
});
document.querySelector(".calcBtn7").addEventListener("click", () => {
    showOnDisplay("7");
});
document.querySelector(".calcBtn8").addEventListener("click", () => {
    showOnDisplay("8");
});
document.querySelector(".calcBtn9").addEventListener("click", () => {
    showOnDisplay("9");
});
document.querySelector(".calcBtn0").addEventListener("click", () => {
    showOnDisplay("0");
});
document.querySelector(".calcClear").addEventListener("click", () => {
    clearDisplay();
});
document.querySelector(".calcDel").addEventListener("click", () => {
    deleteLast();
});
document.querySelector(".calcDot").addEventListener("click", () => {
    showOnDisplay(".");
});
document.querySelector(".calcEqual").addEventListener("click", () => {
    equalTo();
});
document.querySelector(".calcAddition").addEventListener("click", () => {
    showOnDisplay("+");
});
document.querySelector(".calcSubtraction").addEventListener("click", () => {
    showOnDisplay("-");
});
document.querySelector(".calcMultiplication").addEventListener("click", () => {
    showOnDisplay("×");
});
document.querySelector(".calcDivision").addEventListener("click", () => {
    showOnDisplay("÷");
});
document.querySelector(".calcPower").addEventListener("click", () => {
    showOnDisplay("^");
});
document.querySelector(".calcModulus").addEventListener("click", () => {
    showOnDisplay("%");
});