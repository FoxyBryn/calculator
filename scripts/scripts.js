const display = document.querySelector('.current');
const previous = document.querySelector('.previous');
const btnOperands = document.querySelectorAll('.operand');
const btnOperators = document.querySelectorAll('.operator');
const btnClear = document.querySelector('.clear');
const btnBack = document.querySelector('.back');
const btnChange = document.querySelector('.pos-neg');
const btnDecimal = document.querySelector('.decimal');
const btnEquals = document.querySelector('.equals');

let displayValue = '';
let firstOperand = '';
let secondOperand = '';
let currentOperator = null;


btnOperands.forEach(operand => {
    operand.addEventListener('click', () => {
        if (display.textContent.length <= 10) {
            displayValue += operand.textContent;
            displayValue = displayValue.replace(/^(-)?0+(0\.|\d)/, '$1$2');
            display.textContent = displayValue;
        }
    })
});

btnOperators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (displayValue !== '') {
            firstOperand = displayValue;
            currentOperator = operator.textContent
            previous.textContent = firstOperand + currentOperator;
            displayValue = '';
            btnDecimal.disabled = false;
        }
    })
});

btnBack.addEventListener('click', () => {
    if (display.textContent.length > 1) {
        let lastChar = displayValue.slice(-1);
        if (lastChar === '.') {
            btnDecimal.disabled = false;
        }
        displayValue = displayValue.slice(0,-1);
        display.textContent = displayValue;
    } else {
        displayValue = '';
        display.textContent = '0';
    }
});

btnClear.addEventListener('click', () => {
    display.textContent = '0';
    displayValue = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
    previous.textContent = '';
    btnDecimal.disabled = false;
});

btnChange.addEventListener ('click', () => {
    if (displayValue < 0) {
        displayValue = String(-parseFloat(displayValue));
    } else if (displayValue > 0) {
        displayValue = String(parseFloat(displayValue) * -1);
    } else {
        return;
    }
    display.textContent = displayValue;
});

btnDecimal.addEventListener ('click', () => {
    if (!displayValue.includes('.') && displayValue > 0) {
        displayValue += '.';
        display.textContent = displayValue;
        btnDecimal.disabled = true;
    } else {
        displayValue += '0.';
        display.textContent = displayValue;
        btnDecimal.disabled = true;
    }
});

btnEquals.addEventListener ('click', () => {
    if (currentOperator !== null && displayValue !== '') {
        // account for dividing by 0
        // set displayValue as secondOperand
        // set previous to ${firstOperand} ${currentOperator} ${secondOperand} =
        // function to evaluate and produce answer
        // set displayValue and display.textContent to answer
        // set answer as firstOperand and clear current operator
    }
});

document.addEventListener('keydown', (keypress) => {
    switch (keypress.key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            if (display.textContent.length <= 10) {
                displayValue += keypress.key;
                displayValue = displayValue.replace(/^(-)?0+(0\.|\d)/, '$1$2');
                display.textContent = displayValue;
            }
            break;
        case '+':
        case '-':
        case '/':
        case '*':
            // copy code here and change operator to keypress.key
            break;
        case 'Enter':
            // copy code here
            break;
        case 'Backspace':
            if (display.textContent.length > 1) {
                let lastChar = displayValue.slice(-1);
                if (lastChar === '.') {
                    btnDecimal.disabled = false;
                }
                displayValue = displayValue.slice(0,-1);
                display.textContent = displayValue;
            } else {
                displayValue = '';
                display.textContent = '0';
            }
            break;
        case 'Escape':
            display.textContent = '0';
            displayValue = '';
            firstOperand = '';
            secondOperand = '';
            currentOperator = null;
            previous.textContent = '';
            btnDecimal.disabled = false;
            break;
        case '.':
            if (!displayValue.includes('.') && displayValue > 0) {
                displayValue += '.';
                display.textContent = displayValue;
                btnDecimal.disabled = true;
            } else {
                displayValue += '0.';
                display.textContent = displayValue;
                btnDecimal.disabled = true;
            }
            break;
        default:
            break;
    }
});