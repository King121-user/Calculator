const btns = document.querySelectorAll("button");
const themeswap = document.querySelector(".theme");
const display = document.querySelector("#display");
const icon = document.querySelector(".fa-solid");
let firstNumber = "";
let operator = "";

const appendNumber = (number) => {
    if (display.innerHTML == "0" || waitingForSecondNumber) {
        display.innerHTML = number;
        waitingForSecondNumber = false;
    } else {
        display.innerHTML += number;
    }
};


function selectOperator(selectedOperator) {
    firstNumber = parseFloat(display.innerHTML);
    operator = selectedOperator;
    waitingForSecondNumber = true;
}


function reset() {
    display.innerHTML = 0;
    firstNumber = "";
    operator = "";
    waitingForSecondNumber = "";
}
function del() {
    if (display.innerHTML.length > 1) {
        display.innerHTML = display.innerHTML.slice(0, -1);
    } else {
        display.innerHTML = "0";
    }
}


function calc() {
    const secondNumber = parseFloat(display.innerHTML);
    let result = parseFloat(display.innerHTML);

    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "%":
            result = firstNumber % secondNumber;
            default:
            break;

    }
    display.innerHTML = result;
    operator = "";
    firstNumber = "";
    waitingForSecondNumber = false;

}


themeswap.addEventListener("click", () => {
    document.body.classList.toggle("light");

    icon.classList.toggle("fa-moon")
    icon.classList.toggle("fa-sun")
    icon.classList.toggle("dark")

})


