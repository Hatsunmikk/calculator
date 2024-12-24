# calculator

This my first attempt at making a simple calculator. I ran into a lot of bugs while making it but
it was a great learning experience (especially in state management).

<br>

A breakdown of the code:

1. I made the structure of the calculator in html by using a lot of nested divs and I styled it
using CSS Flexbox.

2. As for the javascript logic, I had to understand how the calculator was expected to work to start
working on the code. I followed the Odin Project's guidelines while making this. This calculator 
can handle operations on only two numbers at a time. If I have to make evaluations for more than two
numbers, then the result of the first two numbers will act as the next first number that will evaluate
a result with the next number that is entered (acting as the second number) and so on.

3. A variable called currentInput is initialized to an empty string to keep track of the number being considered
at a given point of time. A variable called resultDisplayed initialized to false is used to handle new inputs after an evaluation.

4. Functions for addition, subtraction, multiplication and division are made. A function called operate() is also made which accepts three
parameters - operator, firstNum and secondNum - computes the result using any of the above functions as required and returns it. A function
called roundResult() always rounds decimal results to two decimal places. A function called updateDisplay() does the job of displaying the digits
entered and the subsequent result on the display screen of the calculator.

5. Event listeners are attached to the digit buttons which are triggered when these buttons are clicked. The resultDisplayed variable comes handy here.
In case the result of a previous evaluation is displayed, any digits entered will be for a fresh calculation. Thus if resultDisplayed is true, the display will
be updated to the text content of the button that is pressed and resultDisplayed then becomes false. Once it is false, any more digits pressed will get appended to the
currentInput or number until an operator is pressed.

6. Coding the logic for the event listeners attached to the operator buttons was a bit tricky for me. If any of the operator buttons are pressed while the currentInput is empty,
the function will return.
If resultDisplayed is true and the operator is pressed, then it is the case of a continued evaluation where we use the result of the evaluation of two numbers as the new first number.
The result which is the currentInput is stored as the first number and the operator is also stored. currentInput is then turned into an empty string again to allow the user to enter the 
second number. resultDisplayed is set to false as the new evaluation is going on.
If resultDisplayed is false, then we simply perform the calculation. Once the result is calculated, it is stored as the new first number (for further calculations if required) and also as the 
currentInput. Since the result is displayed, displayResult is set to true.

7. Event listener attached to the 'equals' button is such that it will function only if the first number, the operator and the currentInput are all non-empty. Otherwise, it will return an error.
It computes the result using operate(), rounds the result, updates the display and sets resultDisplayed to true. It also sets the result as the first number and the currentInput for further 
calculations.

8. The Clear Button, when clicked, simply resets the variables to their default values that they had been initialized with. It sets the display to '0' and resultDisplayed to false.

9. The decimal button adds a decimal to the currentInput only if it does not already have a '.' and updates the display accordingly. This is to make sure that for a given number, only one
decimal point can be added.

10. The backspace button, with each press, removes a digit from the right. This is done by splicing the currentInput starting from index 0 to -1. Since the .splice() method does not include the ending index, in this case, it removes the the digit at the last index with every click.

11. Finally, I added keyboard support by attaching event listeners to the keys that get triggered on 'keydown'. Helper functions called handleOperator(), handleEquals() and handleClear() are
used, bearing the same logic as the previous event listeners mentioned in points 6, 7 and 8 but with slight differences to incorporate keyboard support.

<br>

The biggest problem I faced was making the operator and digit buttons functional. I kept running into a bug where after computing an evaluation of two numbers, when I pressed an operator to perform
an extended calculation by using the result as the first number, the number would automatically be evaluated on to provide a different number without even entering a second number. It took me a while to fix this issue until I realized that the currentInput would have to be turned into an empty string after the result is considered as the first number, so that the second number can be entered (I mention this in point 6).

<br>

In all, this project is a small milestone but one that is very significant to me. Thanks for going through this!