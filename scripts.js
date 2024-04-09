const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");
let displayValue;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        displayValue = button.value;
        display.innerText = displayValue;
    })
})

function sum(a, b) {
    let result = a + b
    return result;
}

function subtract(a, b) {
    let result = a - b;
    return result;
}

function multiply(a, b) {
    let result = a * b;
    return result;
}

function divide(a, b) {
    let result = a / b;
    return result;
}

let firstValue = 1;
let operator = "+";
let secondValue = 1;

function operate(firstValue, operator, secondValue) {
    if (operator === "+") {
        return sum(firstValue, secondValue);
    } else if (operator === "-") {
        return subtract(firstValue, secondValue);
    } else if (operator === "*") {
        return multiply(firstValue, secondValue);
    } else if (operator === "/") {
        divide(firstValue, secondValue);
    } else {
        return "Invalid operator input";
    }
}

