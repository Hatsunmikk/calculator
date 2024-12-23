
let firstNum = null;
let secondNum = null;
let operator = null;
let currentInput = ''; //variable to store the current input
let resultDisplayed = false; //to handle new inputs after an evaluation
const display = document.getElementById("display");

function updateDisplay(value){
    display.textContent = value;
};

function roundResult(result){
    return Math.round(result * 100) / 100;
}

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
document.querySelectorAll('.operator').forEach(button => 
    button.addEventListener('click', () => {
        // If the user has not entered a number yet, return
        if (currentInput === '') {
            return;
        };

        // If there's already a result displayed and the operator is pressed, treat it as a new calculation
        if (resultDisplayed) {
            firstNum = parseFloat(currentInput); // Treat current input as the first number
            operator = button.textContent; // Store the new operator
            currentInput = ''; // Clear current input for the second number
            resultDisplayed = false; // Reset resultDisplayed flag
        } else {
            // Perform the calculation
            if (firstNum !== null && operator !== null) {
                secondNum = parseFloat(currentInput);
                const result = operate(operator, firstNum, secondNum);
                const roundedResult = roundResult(result);
                updateDisplay(roundedResult);
                firstNum = roundedResult; // Use the result as the first number for the next operation
                currentInput = roundedResult.toString(); // Display the result as the new current input
                resultDisplayed = true; // Mark that a result is displayed
            }
            // Store the operator and prepare for the next number
            operator = button.textContent;
            firstNum = parseFloat(currentInput); // Save the current input as the first number
            currentInput = ''; // Reset current input for the next number
        }
        
    })
);


//'Equals' button functionality
document.getElementById("equals").addEventListener("click", () => {
    if(firstNum !== null && operator !== null && currentInput !== ''){
        secondNum = parseFloat(currentInput);
        const result = operate(operator, firstNum, secondNum);
        const roundedResult = roundResult(result);
        updateDisplay(roundedResult);
        firstNum = roundedResult;
        currentInput = roundedResult.toString();
        resultDisplayed = true;
    } else {
        updateDisplay("Error");
    };
});

//'Clear' button functionality
document.getElementById("clear").addEventListener("click", () => {
  firstNum = null;
  secondNum = null;
  operator = null;
  currentInput = '';
  updateDisplay('0');
  resultDisplayed = false;
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