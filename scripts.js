
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
        if (result === "Haha try again") {
            clear();
            input1 += button.textContent;
            display.innerText = input1;
            value1 = Number(input1);
            console.log("value1: ", value1);
        } else if (operator == "") {
            input1 += button.textContent;
            display.innerText = input1;
            value1 = Number(input1);
            console.log("value1: ", value1);
        } else if (operator !== "" && result == "") {
            input2 += button.textContent;
            display.innerText = input2;
            value2 = Number(input2);
            console.log("value2: ", value2);
        } else if (result !== "") {
            input2 = "";
            value2 = "";
            input2 += button.textContent;
            display.innerText = input2;
            value1 = result;
            value2 = Number(input2);
            console.log("value1: ", value1)
            console.log("value2: ", value2);
            result = "";
        }
    })
})

clearBtn.addEventListener("click", () => clear());

function clear() {
    value1 = 0;
    operator = "";
    value2 = 0;
    result = 0;
    input1 = "";
    input2 = "";
    display.innerText = 0;
}

equalsBtn.addEventListener("click", () => operate(value1, operator, value2));

function sum(a, b) {
    let sum = a + b
    return result = Number(sum.toFixed(4));
}

function subtract(a, b) {
    let subtract = a - b;
    return result = Number(subtract.toFixed(4));
}

function multiply(a, b) {
    let multiply = a * b;
    return result = Number(multiply.toFixed(4));
}

function divide(a, b) {
    if (b == 0) {
        let result = "Haha try again";
        return result;
    } else {
        let divide = a / b;
        return result = Number(divide.toFixed(4));
    }
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
