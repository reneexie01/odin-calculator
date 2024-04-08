// const container = document.querySelector('#container');

// function printCalculator() {
//     for (let i = 0; i < 4; i++) {
//         const column = document.createElement('div');
//         column.setAttribute('id', `column-${i}`);
//         column.setAttribute('class', 'columns');
//         for (let j = 0; j < 6; j++) {
//             const row = document.createElement('div');
//             row.setAttribute('id', `row-${i}`);
//             row.setAttribute('class', 'rows');
//             column.appendChild(row);
//         }
//         container.appendChild(column);
//     }
// }

// printCalculator();

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
let operator = '+';
let secondValue = 1;

function operate(firstValue, operator, secondValue) {
    if (operator === '+') {
        return sum(firstValue, secondValue);
    } else if (operator === '-') {
        return subtract(firstValue, secondValue);
    } else if (operator === '*') {
        return multiply(firstValue, secondValue);
    } else if (operator === '/') {
        divide(firstValue, secondValue);
    } else {
        return 'Invalid operator input';
    }
}

