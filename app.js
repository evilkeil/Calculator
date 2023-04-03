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

  /* grab the display elements*/

  const ones = document.querySelector('#ones');
  const tens = document.querySelector('#tens');
  const hundreds = document.querySelector('#hundreds');
  const thousands = document.querySelector('#thousands');
  const tenThousands = document.querySelector('#tenThousands');
  const hundredThousands = document.querySelector('#hundredThousands');
  const millions = document.querySelector('#millions');
  const tenMillions = document.querySelector('#tenMillions');

  // const displayNode = document.querySelectorAll('.result');

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
    }{}

    if (displayArray.length ==1){
      ones.textContent = displayArray[0] ;
    }
    if (displayArray.length ==2){
      ones.textContent = displayArray[1];
      tens.textContent = displayArray[0];
    }
    if (displayArray.length ==3){
      ones.textContent = displayArray[2];
      tens.textContent = displayArray[1];
      hundreds.textContent= displayArray[0];
    }
    if (displayArray.length ==4){
      ones.textContent = displayArray[3];
      tens.textContent = displayArray[2];
      hundreds.textContent= displayArray[1];
      thousands.textContent = displayArray[0];
    }
    if (displayArray.length ==5){
      ones.textContent = displayArray[4];
      tens.textContent = displayArray[3];
      hundreds.textContent= displayArray[2];
      thousands.textContent = displayArray[1];
      tenThousands.textContent=displayArray[0];
    }
    if (displayArray.length ==6){
      ones.textContent = displayArray[5];
      tens.textContent = displayArray[4];
      hundreds.textContent= displayArray[3];
      thousands.textContent = displayArray[2];
      tenThousands.textContent=displayArray[1];
      hundredThousands.textContent=displayArray[0];
    }
    if (displayArray.length ==7){
      ones.textContent = displayArray[6];
      tens.textContent = displayArray[5];
      hundreds.textContent= displayArray[4];
      thousands.textContent = displayArray[3];
      tenThousands.textContent=displayArray[2];
      hundredThousands.textContent=displayArray[1];
      millions.textContent=displayArray[0];
    }
    if (displayArray.length ==8){
      ones.textContent = displayArray[7];
      tens.textContent = displayArray[6];
      hundreds.textContent= displayArray[5];
      thousands.textContent = displayArray[4];
      tenThousands.textContent=displayArray[3];
      hundredThousands.textContent=displayArray[2];
      millions.textContent=displayArray[1];
      tenMillions.textContent =displayArray[0];
    }
    // let display = parseInt(displayArray.join(""));
    // console.log(display);
  })


  
  //self notes

  /* >make it so that the array will be displayed in the dislay
  like index 0 is id ones index 1 is id tens etc
    > use tie the operator btns + - etc to the operate function and make it so that it will be calculated and displayed */