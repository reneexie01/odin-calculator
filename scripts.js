const operandBtns = document.querySelectorAll(".operand");
const operatorBtns = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const signBtn = document.querySelector(".sign");
const percentBtn = document.querySelector(".percent");
const decimalBtn = document.querySelector(".decimal");
const equalsBtn = document.querySelector(".equals");

const display = document.querySelector("#display");

let value1 = 0;
let operator = "";
let value2 = 0;

operatorBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent === "+") {
            operator = "+";
            console.log("operator: ", operator);
        } else if (button.textContent === "-") {
            operator = "-";
            console.log("operator: ", operator);
        } else if (button.textContent === "x") {
            operator = "*";
            console.log("operator: ", operator);
        } else if (button.textContent === "/") {
            operator = "/";
            console.log("operator: ", operator);
        }
    })
})

operandBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === "" || value1 == 0) {
            let input1 = "";
            input1 += button.textContent;
            display.innerText = input1;
            value1 = Number(input1);
            console.log("value1: ", value1);
        } else if (!value1 == 0) {
            let input2 = "";
            input2 += button.textContent;
            display.innerText = input2;
            value2 = Number(input2);
            console.log("value2: ", value2);
        }
    })
})

clearBtn.addEventListener("click", () => {
    value1 = 0;
    console.log("value1: ", value1);
    operator = "";
    console.log("operator: ", operator);
    value2 = 0;
    console.log("value2: ", value2);
    display.innerText = 0;
})

equalsBtn.addEventListener("click", () => operate(value1, operator, value2));

function sum(a, b) {
    let result = a + b
    console.log("result: ", result);
    display.innerText = result;
}

function subtract(a, b) {
    let result = a - b;
    console.log("result: ", result);
    display.innerText = result;
}

function multiply(a, b) {
    let result = a * b;
    console.log("result: ", result);
    display.innerText = result;
}

function divide(a, b) {
    let result = a / b;
    console.log("result: ", result);
    display.innerText = result;
}

function operate(value1, operator, value2) {
    if (operator === "+") {
        return sum(value1, value2);
    } else if (operator === "-") {
        return subtract(value1, value2);
    } else if (operator === "*") {
        return multiply(value1, value2);
    } else if (operator === "/") {
        divide(value1, value2);
    } else {
        return "Invalid operator input";
    }
}

