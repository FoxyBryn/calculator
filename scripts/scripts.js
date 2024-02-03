const display = document.querySelector('.display');
const btnOperands = document.querySelectorAll('.operand');
const btnOperators = document.querySelectorAll('.operator');
const btnClear = document.querySelector('.clear');
const btnBack = document.querySelector('.back');
const btnChange = document.querySelector('.pos-neg');
const btnDecimal = document.querySelector('.decimal');
const btnEquals = document.querySelector('.equals');

let displayValue = '';


btnOperands.forEach(operand => {
    operand.addEventListener('click', () => {
        if (display.textContent.length <= 10) {
            displayValue += operand.textContent;
            displayValue = displayValue.replace(/^(-)?0+(0\.|\d)/, '$1$2');
            display.textContent = displayValue;
            console.log(operand.textContent)
        }
    })
});

btnOperators.forEach(operator => {
    operator.addEventListener('click', () => {

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
        displayValue = '0';
        display.textContent = displayValue;
    }
});

btnClear.addEventListener('click', () => {
    display.textContent = '0';
    displayValue = '';
    btnDecimal.disabled = false;
})

btnChange.addEventListener ('click', () => {
    if (displayValue < 0) {
        displayValue = String(-parseFloat(displayValue));
    } else {
        displayValue = String(parseFloat(displayValue) * -1);
    }
    display.textContent = displayValue;
});

btnDecimal.addEventListener ('click', () => {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        display.textContent = displayValue;
        btnDecimal.disabled = true;
    }
});

btnEquals.addEventListener ('click', () => {

});