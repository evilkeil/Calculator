const calculator = document.querySelector('.calculator');
//the display 
const ones = document.querySelector('#ones');
const tens = document.querySelector('#tens');
const hundreds = document.querySelector('#hundreds');
const thousands = document.querySelector('#thousands');
const tenThousands = document.querySelector('#tenThousands');
const hundredThousands = document.querySelector('#hundredThousands');
const millions = document.querySelector('#millions');
const tenMillions = document.querySelector('#tenMillions');
// the operators
const plus = document.querySelector('.add');

//function for eventlister of buttons 
let displayArray =[];
let secondDisplayarr = [];
let firstArray = [];
let secondArray = [];
let a = 0;
let b = 0;
let operator = "";
let displayValue = 0;
let secondDisplayValue = 0;
let first;

const add = (a,b) => a + b ;  //addition 

const subtract = (a,b) => a - b; //subtraction

const multiply = (a,b) => a * b; //multiplication

const divide = (a,b) => a/b ;  //division

function operate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "x") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    throw new Error("Unsupported operator");
  }
}
function updateDisplay() {
     displayArray = displayValue.toString().split("");
  
    // remove leading zeros
    while (displayArray[0] === '0') {
      displayArray.shift();
    }
  
   
   
  
    ones.textContent = displayArray[displayArray.length - 1];
    tens.textContent = displayArray[displayArray.length - 2];
    hundreds.textContent = displayArray[displayArray.length - 3];
    thousands.textContent = displayArray[displayArray.length - 4];
    tenThousands.textContent = displayArray[displayArray.length - 5];
    hundredThousands.textContent = displayArray[displayArray.length - 6];
    millions.textContent = displayArray[displayArray.length - 7];
    tenMillions.textContent = displayArray[displayArray.length - 8];
  }
function updateSecondDisplay(){
  secondDisplayarr = secondDisplayValue.toString().split("");

   // remove leading zeros
   while (secondDisplayarr[0] === '0') {
    secondDisplayarr.shift();
  }

  ones.textContent = secondDisplayarr[secondDisplayarr.length - 1];
  tens.textContent = secondDisplayarr[secondDisplayarr.length - 2];
  hundreds.textContent = secondDisplayarr[secondDisplayarr.length - 3];
  thousands.textContent = secondDisplayarr[secondDisplayarr.length - 4];
  tenThousands.textContent = secondDisplayarr[secondDisplayarr.length - 5];
  hundredThousands.textContent = secondDisplayarr[secondDisplayarr.length - 6];
  millions.textContent = secondDisplayarr[secondDisplayarr.length - 7];
  tenMillions.textContent = secondDisplayarr[secondDisplayarr.length - 8];
}
  
function setUpCalculator(){
    calculator.addEventListener('click',function(e){
      if (e.target.closest('.add') != null) {
        operator = "+";
        } {}
      if (e.target.closest('.subtract') != null) {
        operator = "-";
          } {}
      if (e.target.closest('.multiply') != null) {
        operator = "x";
          } {}
      
      if (operator === ""){
        if (e.target.closest('.one') != null) {
          if (displayArray.length < 8) {
          displayArray.push('1');
          displayValue= parseInt(displayArray.join(""));
          updateDisplay();
          }     
        }
        if (e.target.closest('.two') != null) {
          if (displayArray.length < 8) {
          displayArray.push('2');
          displayValue= parseInt(displayArray.join(""));
          updateDisplay();
          }     
        }
        if (e.target.closest('.three') != null) {
          if (displayArray.length < 8) {
          displayArray.push('3');
          displayValue= parseInt(displayArray.join(""));
          updateDisplay();
          }     
        }
        if (e.target.closest('.four') != null) {
          if (displayArray.length < 8) {
          displayArray.push('4');
          displayValue= parseInt(displayArray.join(""));
          updateDisplay();
          }     
        }
        if (e.target.closest('.five') != null) {
          if (displayArray.length < 8) {
          displayArray.push('5');
          displayValue= parseInt(displayArray.join(""));
          updateDisplay();
          }     
        }
        if (e.target.closest('.six') != null) {
          if (displayArray.length < 8) {
          displayArray.push('6');
          displayValue= parseInt(displayArray.join(""));
          updateDisplay();
          }     
        }
        if (e.target.closest('.seven') != null) {
          if (displayArray.length < 8) {
          displayArray.push('7');
          displayValue= parseInt(displayArray.join(""));
          updateDisplay();
          }     
        }
        if (e.target.closest('.eight') != null) {
          if (displayArray.length < 8) {
          displayArray.push('8');
          displayValue= parseInt(displayArray.join(""));
          updateDisplay();
          }     
        }
        if (e.target.closest('.nine') != null) {
          if (displayArray.length < 8) {
          displayArray.push('9');
          displayValue= parseInt(displayArray.join(""));
          updateDisplay();
          }     
        }
        if (e.target.closest('.zero') != null) {
          if (displayArray.length < 8) {
          displayArray.push('0');
          displayValue= parseInt(displayArray.join(""));
          updateDisplay();
          }     
        }{}
        firstArray = [...displayArray];
          let display = parseInt(firstArray.join(""));
          a = display;
      }else if(operator === "+"){
        
        if (e.target.closest('.one') != null) {
          if (secondDisplayarr.length < 8) {
          secondDisplayarr.push('1');
          secondDisplayValue= parseInt(secondDisplayarr.join(""));
          updateSecondDisplay();
          }     
        }
        if (e.target.closest('.two') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('2');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.three') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('3');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.four') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('4');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.five') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('5');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.six') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('6');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.seven') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('7');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.eight') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('8');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.nine') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('9');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.zero') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('0');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }{}

        secondArray = [...secondDisplayarr];
        let display2 = parseInt(secondArray.join(""));
        b = display2;

      
      }else if(operator === "-"){
        if (e.target.closest('.one') != null) {
          if (secondDisplayarr.length < 8) {
          secondDisplayarr.push('1');
          secondDisplayValue= parseInt(secondDisplayarr.join(""));
          updateSecondDisplay();
          }     
        }
        if (e.target.closest('.two') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('2');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.three') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('3');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.four') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('4');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.five') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('5');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.six') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('6');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.seven') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('7');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.eight') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('8');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.nine') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('9');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.zero') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('0');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }{}

        secondArray = [...secondDisplayarr];
        let display2 = parseInt(secondArray.join(""));
        b = display2;

      
      }else if (operator === "x"){
        if (e.target.closest('.one') != null) {
          if (secondDisplayarr.length < 8) {
          secondDisplayarr.push('1');
          secondDisplayValue= parseInt(secondDisplayarr.join(""));
          updateSecondDisplay();
          }     
        }
        if (e.target.closest('.two') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('2');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.three') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('3');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.four') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('4');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.five') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('5');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.six') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('6');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.seven') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('7');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.eight') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('8');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.nine') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('9');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.zero') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('0');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }{}

        secondArray = [...secondDisplayarr];
        let display2 = parseInt(secondArray.join(""));
        b = display2;

      }else if(operator === "/"){
        if (e.target.closest('.one') != null) {
          if (secondDisplayarr.length < 8) {
          secondDisplayarr.push('1');
          secondDisplayValue= parseInt(secondDisplayarr.join(""));
          updateSecondDisplay();
          }     
        }
        if (e.target.closest('.two') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('2');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.three') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('3');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.four') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('4');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.five') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('5');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.six') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('6');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.seven') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('7');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.eight') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('8');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.nine') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('9');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }
        if (e.target.closest('.zero') != null) {
          if (secondDisplayarr.length < 8) {
            secondDisplayarr.push('0');
            secondDisplayValue= parseInt(secondDisplayarr.join(""));
            updateSecondDisplay();
          }     
        }{}

        secondArray = [...secondDisplayarr];
        let display2 = parseInt(secondArray.join(""));
        b = display2;
      }{}

      if (e.target.closest('.equals') != null) {
        displayValue = operate(a,b,operator);
        updateDisplay();
        // a = displayValue;
        // b = 0;
        // operator="";

          } {}
       })
}

setUpCalculator();