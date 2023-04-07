// grabbing the dom

const display = document.querySelector('.result');
const numberKey = document.querySelectorAll('.btn');
// const addition = document.querySelector('.add');
// const subtract = document.querySelector('.subtract');
// const multiply = document.querySelector('.multiply');
// const divide = document.querySelector('.divide');
const decimal = document.querySelector('.decimal');
const percentage = document.querySelector('.percentage');
const plusMinus = document.querySelector('.plusMinus');
const equal = document.querySelector('.equals');
const clear = document.querySelector('.clear')
const operators = document.querySelectorAll('.operator');


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

//handle number inputs
numberKey.forEach(key => {
  key.addEventListener('click', () => {
      if (currentOperator) {
          if (secondOperand.length < 8) {
              secondOperand += key.textContent;
          }
          updateSecondDisplay();
      } else {
          if (firstOperand.length < 8) {
              firstOperand += key.textContent;
          }
          updateDisplay();
      }
  });
});

//handle operator inputs 

operators.forEach(operator =>{
  operator.addEventListener('click',()=>{
    if(operator.classList.contains('add')){
      currentOperator = "+";
    }else if (operator.classList.contains('subtract')){
      currentOperator = "-";
    }else if (operator.classList.contains('multiply')){
      currentOperator = "x";
    }else if (operator.classList.contains('divide')){
      currentOperator= "/";
    }

  });
});

//handle the math calculations 

equal.addEventListener('click',()=>{
  if(currentOperator === "+"){
    firstOperand =  parseFloat(firstOperand) + parseFloat(secondOperand);
    firstOperand = firstOperand.toString();
    updateDisplay();
  }else if(currentOperator === "-"){
    firstOperand = parseFloat(firstOperand) - parseFloat(secondOperand);
    firstOperand = firstOperand.toString();
    updateDisplay()
  }else if(currentOperator === "x"){
    firstOperand = parseFloat(firstOperand) * parseFloat(secondOperand);
    firstOperand = firstOperand.toString();
    updateDisplay()
  }else if(currentOperator === "/"){
    firstOperand = parseFloat(firstOperand) / parseFloat(secondOperand);
    firstOperand = firstOperand.toString();
    updateDisplay()
  }{}
  secondOperand = "";
  currentOperator = null;
});

//the clear btn 

clear.addEventListener('click',()=>{
 firstOperand =""; 
 secondOperand =""; 
 currentOperator = null;
 updateDisplay()
})