const operandBtns = document.querySelectorAll(".operand");
const operatorBtns = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const signBtn = document.querySelector(".sign");
const percentBtn = document.querySelector(".percent");
const decimalBtn = document.querySelector(".decimal");
const equalsBtn = document.querySelector(".equals");

const display = document.querySelector("#display");

let displayValue = "";
let firstValue = 0;
let operator = "";
let secondValue = 0;

// operandBtns.forEach((button) => {
//     button.addEventListener("click", () => {
//         displayValue += button.textContent;
//         display.innerText = displayValue;
//     })
// })

// operator function
operatorBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent === "+") {
            operator = "+";
            console.log("operator: ", operator);
        } else if (button.textContent === "-") {
            operator = "-";
            console.log("operator: ", operator);
        } else if (button.textContent === "*") {
            operator = "*";
            console.log("operator: ", operator);
        } else if (button.textContent === "/") {
            operator = "/";
            console.log("operator: ", operator);
        }
    })
})

// operand function
operandBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === "") {
            let firstInput = "";
            firstInput += button.textContent;
            display.innerText = firstInput;
            firstValue = Number(firstInput);
            console.log("firstValue: ", firstValue);
        } else {
            let secondInput = "";
            secondInput += button.textContent;
            display.innerText = secondInput;
            secondValue = Number(secondInput);
            console.log("secondValue: ", secondValue);
        }
    })
})

equalsBtn.addEventListener("click", () => operate(firstValue, operator, secondValue));

// if any of the operators are clicked and if firstValue is null store displayValue = firstValue;
// if any of the operators are clicked and firstValue is not null store displayValue = secondValue;
// for each operand do an if else statement that executes the respective functions

function sum(a, b) {
    let result = a + b
    console.log("result: ", result);
    return result;
}

function subtract(a, b) {
    let result = a - b;
    console.log("result: ", result);
    return result;
}

function multiply(a, b) {
    let result = a * b;
    console.log("result: ", result);
    return result;
}

function divide(a, b) {
    let result = a / b;
    console.log("result: ", result);
    return result;
}

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

