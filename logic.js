
let firstNum = null;
let secondNum = null;
let operator = null;
let currentInput = ''; //variable to store the current input
const display = document.getElementById("display");

function updateDisplay(value){
    display.textContent = value;
};

//Addig event listeners to the buttons

document.querySelectorAll(".digit").forEach(button =>
    button.addEventListener("click", () => {
        if(currentInput === '' || currentInput === "0"){
            currentInput = button.textContent;
        } else {
            currentInput += button.textContent;
        };

        updateDisplay(currentInput);
    }

    
   )
);

function add (a, b){
    return a + b;
};

function subtract (a, b){
    return a - b;
};

function multiply (a,b) {
    return a * b;
};

function divide (a, b) {

    if(b === 0) return "Cannot divide a number by 0.";
    return a / b;
};


function operate (operator, num1, num2) {

    switch(operator){

        case '+':
            return add(num1, num2);

        case '-':
            return subtract(num1, num2);

        case 'x':
            return multiply(num1, num2);

        case '/':
            return divide(num1, num2);

        default:
            return null;

    };
};