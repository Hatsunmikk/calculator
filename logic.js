
let firstNum = null;
let secondNum = null;
let operator = null;
let currentInput = ''; //variable to store the current input
let resultDisplayed = false; //to handle new inputs after an evaluation
const display = document.getElementById("display");

function updateDisplay(value){
    display.textContent = value;
};

//Adding event listeners to the buttons
document.querySelectorAll(".digit").forEach(button =>
    button.addEventListener("click", () => {
        if(resultDisplayed){
            currentInput = button.textContent;
            resultDisplayed = false;
        } else {
            currentInput += button.textContent;
        };

        updateDisplay(currentInput);
    }

    
   )
);

//Adding event listeners to the operator buttons
document.querySelectorAll(".operator").forEach(button =>
    button.addEventListener("click", () => {
        //if the first number and the operator are already selected, calculate the result first
        if(firstNum !== null && currentInput !== ''){
          secondNum = parseFloat(currentInput);
          const result = operate(operator, firstNum, secondNum);
          updateDisplay(result);
          firstNum = result; //using the result as th first number for the next operation or calculation
          currentInput = result.toString();
          resultDisplayed = true;
        }
         //Saving the operator and the current number as the first number for the next operation
        operator = button.textContent;
        firstNum = parseFloat(currentInput);
        currentInput = ''; //resetting the current input for the second number
    })
);

//'Equals' button functionality
document.getElementById("equals").addEventListener("click", () => {
    if(firstNum !== null && operator !== null && currentInput !== ''){
        secondNum = parseFloat(currentInput);
        const result = operate(operator, firstNum, secondNum);
        updateDisplay(result);
        firstNum = result;
        currentInput = result.toString();
        resultDisplayed = true;
    }
});

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