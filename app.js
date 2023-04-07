// grabbing the dom

const display = document.querySelector('.result');
const numberKey = document.querySelectorAll('.btn');
const addition = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const decimal = document.querySelector('.decimal');
const percentage = document.querySelector('.percentage');
const plusMinus = document.querySelector('.plusMinus');
const equal = document.querySelector('.equals');
const clear = document.querySelector('.clear')


let firstOperand =""; //a
let secondOperand =""; //b
let currentOperator = null;

function updateDisplay() {
  if (firstOperand.length > 8) {
    firstOperand = firstOperand.slice(0, 8);
  }
  display.textContent = firstOperand;
}
function updateSecondDisplay() {
  if (secondOperand.length > 8) {
      secondOperand = secondOperand.slice(0, 8);
  }
  display.textContent = secondOperand;
}
