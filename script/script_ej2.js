// Ejercicio 2 *******************************************************************************************
document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentValue = "";
    let currentOperator = "";
    let pendingValue = null;

    function updateDisplay() {
        display.value = currentValue;
    }

    function handleNumberClick(number) {
        if (currentValue === "0" && number !== ".") {
            currentValue = number;
        } else {
            currentValue += number;
        }
        updateDisplay();
    }

    function handleOperatorClick(operator) {
        if (currentOperator !== "") {
            calculate();
        }
        currentOperator = operator;
        pendingValue = currentValue;
        currentValue = "";
    }

    function calculate() {
        const previousValue = parseFloat(pendingValue);
        const newValue = parseFloat(currentValue);
        switch (currentOperator) {
            case "+":
                currentValue = (previousValue + newValue).toString();
                break;
            case "-":
                currentValue = (previousValue - newValue).toString();
                break;
            case "*":
                currentValue = (previousValue * newValue).toString();
                break;
            case "/":
                if (newValue === 0) {
                    currentValue = "Error"; // Evitar la división por cero
                } else {
                    currentValue = (previousValue / newValue).toString();
                }
                break;
        }
        currentOperator = "";
        pendingValue = null;
        updateDisplay();
    }

    document.getElementById("clear").addEventListener("click", function () {
        currentValue = "0";
        currentOperator = "";
        pendingValue = null;
        updateDisplay();
    });

    document.getElementById("decimal").addEventListener("click", function () {
        if (!currentValue.includes(".")) {
            currentValue += ".";
            updateDisplay();
        }
    });

    document.getElementById("calculate").addEventListener("click", function () {
        if (currentOperator && pendingValue) {
            calculate();
        }
    });

    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");

    numberButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            handleNumberClick(button.textContent);
        });
    });

    operatorButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            handleOperatorClick(button.textContent);
        });
    });
});
