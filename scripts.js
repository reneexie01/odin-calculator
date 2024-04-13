const operandBtns = document.querySelectorAll(".operand");
const operatorBtns = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const signBtn = document.querySelector(".sign");
const percentBtn = document.querySelector(".percent");
const decimalBtn = document.querySelector(".decimal");
const equalsBtn = document.querySelector(".equals");

const display = document.querySelector("#display");

let value1 = "";
let operator = "";
let value2 = "";
let result = "";
let input1 = "";
let input2 = "";

operatorBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === "") {
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
        } else {
            operate(value1, operator, value2);
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
        }
    })
})

operandBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator == "") {
            input1 += button.textContent;
            display.innerText = input1;
            value1 = Number(input1);
            console.log("value1: ", value1);
        } else if (value2 !== "") {
            let input2 = "";
            value1 = result;
            input2 += button.textContent;
            display.innerText = input2;
            value2 = Number(input2);
            console.log("value1: ", value1)
            console.log("value2: ", value2);
            operate(value1, operator, value2);
        } else if (operator !== "") {
            input2 += button.textContent;
            display.innerText = input2;
            value2 = Number(input2);
            console.log("value2: ", value2);
        }
    })
})

clearBtn.addEventListener("click", () => {
    value1 = 0;
    operator = "";
    value2 = 0;
    result = 0;
    input1 = "";
    input2 = "";
    display.innerText = 0;
})

equalsBtn.addEventListener("click", () => operate(value1, operator, value2));

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

function operate(value1, operator, value2) {
    if (operator === "+") {
        result = sum(value1, value2);
    } else if (operator === "-") {
        result = subtract(value1, value2);
    } else if (operator === "*") {
        result = multiply(value1, value2);
    } else if (operator === "/") {
        result = divide(value1, value2);
    } else {
        return console.log("Invalid operator input");
    }
    console.log("result: ", result);
    display.innerText = result;
}
