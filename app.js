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

  let displayArray =[];
  calculator.addEventListener('click',(e)=>{

    if (e.target.closest('.one') != null) {
      if (displayArray.length < 9) {
      displayArray.push('1');
      }     
    }
    if (e.target.closest('.two') != null) {
      if (displayArray.length < 9) {
      displayArray.push('2');
      }     
    }
    if (e.target.closest('.three') != null) {
      if (displayArray.length < 9) {
      displayArray.push('3');
      }     
    }
    if (e.target.closest('.four') != null) {
      if (displayArray.length < 9) {
      displayArray.push('4');
      }     
    }
    if (e.target.closest('.five') != null) {
      if (displayArray.length < 9) {
      displayArray.push('5');
      }     
    }
    if (e.target.closest('.six') != null) {
      if (displayArray.length < 9) {
      displayArray.push('6');
      }     
    }
    if (e.target.closest('.seven') != null) {
      if (displayArray.length < 9) {
      displayArray.push('7');
      }     
    }
    if (e.target.closest('.eight') != null) {
      if (displayArray.length < 9) {
      displayArray.push('8');
      }     
    }
    if (e.target.closest('.nine') != null) {
      if (displayArray.length < 9) {
      displayArray.push('9');
      }     
    }
    if (e.target.closest('.zero') != null) {
      if (displayArray.length < 9) {
      displayArray.push('0');
      }     
    }
    console.log(displayArray);
  })