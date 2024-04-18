const appendBtns = document.querySelectorAll(".append");
const operatorBtns = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const equalsBtn = document.querySelector(".equals");
const display = document.querySelector("#display");

let value1 = 0;
let operator = "";
let value2 = "";
let result = "";
let input1 = "";
let input2 = "";

/* Keyboard support */

window.addEventListener("keydown", (event) => {

    if (event.key === "+") {
        operator = "+";
        console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
    } else if (event.key === "-") {
        operator = "-";
        console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
    } else if (event.key === "x") {
        operator = "*";
        console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
    } else if (event.key === "/") {
        operator = "/";
        console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
    } 

    if (event.key === "Enter") {
        enter();
    }

    if (event.key === "." && display.innerText.includes(".")) {
        console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
        return;
    } else if (event.key === "Backspace") {
        if (operator === "" && value1 === 0 && value2 === "") {
            display.innerText = 0;
        } else if (operator == "" && value2 == "" && result !== "" && value1 !== 0) { 
            clear();
        } else if (result === "Haha try again") {
            clear();
            input1 = input1.slice(0, -1);
            display.innerText = input1;
            value1 = Number(input1);
            console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
        } else if (operator === "") {
            input1 = input1.slice(0, -1);
            display.innerText = input1;
            value1 = Number(input1);
            console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
        } else if (operator !== "" && result === "") {
            input2 = input2.slice(0, -1);
            display.innerText = input2;
            value2 = Number(input2);
            console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
        } else if (result !== "") {
            input2 = "";
            value2 = "";
            input2 = input2.slice(0, -1);
            display.innerText = input2;
            value1 = result;
            value2 = Number(input2);
            result = "";
            console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
        }
    } else {
        if (event.key >= 0 || event.key <= 9 || event.key === ".") {
            if (result === "Haha try again") {
                clear();
                input1 += event.key;
                display.innerText = input1;
                value1 = Number(input1);
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            } else if (operator === "") {
                input1 += event.key;
                display.innerText = input1;
                value1 = Number(input1);
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            } else if (operator !== "" && result === "") {
                input2 += event.key;
                display.innerText = input2;
                value2 = Number(input2);
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            } else if (result !== "") {
                input2 = "";
                value2 = "";
                input2 += event.key;
                display.innerText = input2;
                value1 = result;
                value2 = Number(input2);
                result = "";
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            }
        }
    }
});

/* Manual buttons */

operatorBtns.forEach((button) => {

    button.addEventListener("click", () => {
        if (operator === "") {
            if (button.textContent === "+") {
                operator = "+";
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            } else if (button.textContent === "-") {
                operator = "-";
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            } else if (button.textContent === "x") {
                operator = "*";
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            } else if (button.textContent === "/") {
                operator = "/";
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            }
        } else {
            operate(value1, operator, value2);
            if (button.textContent === "+") {
                operator = "+";
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            } else if (button.textContent === "-") {
                operator = "-";
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            } else if (button.textContent === "x") {
                operator = "*";
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            } else if (button.textContent === "/") {
                operator = "/";
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            }
        }
    })
})

appendBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent === "." && display.innerText.includes(".")) {
            return;
        } else if (button.textContent === "Delete") {
            if (operator === "" && value1 === 0 && value2 === "") {
                display.innerText = 0;
            } else if (operator == "" && value2 == "" && result !== "" && value1 !== 0) { 
                clear();
            } else if (result === "Haha try again") {
                clear();
                input1 = input1.slice(0, -1);
                display.innerText = input1;
                value1 = Number(input1);
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            } else if (operator === "") {
                input1 = input1.slice(0, -1);
                display.innerText = input1;
                value1 = Number(input1);
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            } else if (operator !== "" && result === "") {
                input2 = input2.slice(0, -1);
                display.innerText = input2;
                value2 = Number(input2);
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            } else if (result !== "") {
                input2 = "";
                value2 = "";
                input2 = input2.slice(0, -1);
                display.innerText = input2;
                value1 = result;
                value2 = Number(input2);
                result = "";
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            }
        } else {
            if (result === "Haha try again") {
                clear();
                input1 += button.textContent;
                display.innerText = input1;
                value1 = Number(input1);
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            } else if (operator === "") {
                input1 += button.textContent;
                display.innerText = input1;
                value1 = Number(input1);
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            } else if (operator !== "" && result === "") {
                input2 += button.textContent;
                display.innerText = input2;
                value2 = Number(input2);
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            } else if (result !== "") {
                input2 = "";
                value2 = "";
                input2 += button.textContent;
                display.innerText = input2;
                value1 = result;
                value2 = Number(input2);
                result = "";
                console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
            }
        }
    })

})

clearBtn.addEventListener("click", () => clear());

function clear() {
    value1 = 0;
    operator = "";
    value2 = "";
    result = "";
    input1 = "";
    input2 = "";
    display.innerText = 0;
    console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
}

equalsBtn.addEventListener("click", () => enter());

function enter() {
    if (value1 !== 0 && operator !== "" && value2 !== "") {
        operate(value1, operator, value2);
        value1 = result;
        operator = "";
        value2 = "";
        input1 = "";
        input2 = "";
        console.log("v1: ", value1, "operator: ", operator, "v2: ", value2, "result: ", result)
    } else {
        clear();
    }
}

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
        return result = "Invalid operator input";
    }
    display.innerText = result;
}