document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const result = document.querySelector('.result');
    let displayValue = result.textContent;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            let operator = '';
            if (btn.textContent.match(/\d/)) {
                if (displayValue === '0') {
                    if (btn.textContent === '0') return;
                    displayValue = btn.textContent;
                } else {
                    displayValue += btn.textContent;
                }
            } else if (btn.textContent.match(/[\+\-\*\/]/)) {
                if (displayValue.slice(-1).match(/[\+\-\*\/]/)) {
                    if (displayValue.slice(-1) === btn.textContent) return;
                    operator = btn.textContent;
                    displayValue = displayValue.slice(0, -1) + btn.textContent;
                } else {
                    operator = btn.textContent;
                    displayValue += btn.textContent;
                }
            } else {
                return;
            }
            result.textContent = displayValue;
        })
    });

    function operate(a, b, op) {
        function add(a, b) { return a + b; }
        function subtract(a, b) { return a - b; }
        function multiply(a, b) { return a * b; }
        function divide(a, b) { return a / b; }

        if (op === '+') return add(a, b);
        if (op === '-') return subtract(a, b);
        if (op === '*') return multiply(a, b);
        return divide(a, b);
    }
});