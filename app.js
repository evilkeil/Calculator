const add = (a,b) => a + b ;  //addition 

const subtact = (a,b) => a - b; //subtraction

const multiply = (a,b) => a * b; //multiplication

const divide = (a,b) => a/b ;  //division

function operate(a, b, operator = "+") {
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

  const calculator = document.querySelector('.calculator');

  calculator.addEventListener('click',(e)=>{
    if (event.target.closest('.one') != null) {
      console.log('1');
    }
  })