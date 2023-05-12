const display = document.getElementById('display');
const keyboard = document.getElementById('keyboard');
const del = document.getElementById('delete');
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = 0;
display.textContent = format(result);


/* ---------- AUXILIAR (number to string) ---------- */
function format(number) {
  return number.toString().replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/* ---------- OPERATIONS ---------- */
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function percent(num1, perc, operator) {
  let result;
  if (operator === '*') {
    result = num1 * perc / 100;
  } else if (operator === '+') {
    result = num1 + (num1 * perc / 100);
  } else {
    result = num1 - (num1 * perc / 100);
  }
  return result;
}

/* ---------- DELETE ---------- */
function backspace() {
  display.textContent = display.textContent.substring(0, display.textContent.length - 1);
}

// function sup () {
//   let number = display.textContent;
//   if (number.length > 1) {
//     number = number.substring(0, number.length - 1);
//   } else {
//     number = number.substring(0, number.length - 1);
//     number = '0';
//   }
// }


del.addEventListener('click', (e) => {
  console.log(e);
  if (display.textContent.length > 1) {
    backspace();
  } else {
    backspace();
    display.textContent = '0';
  }
});

document.addEventListener('keydown', (e) => {
  console.log(e);
  if (e.key === 'Backspace' || e.key === 'Delete') {
    if (display.textContent.length > 1) {
      backspace();
    } else {
      backspace();
      display.textContent = '0';
    }
  }
  if (numbers.includes(parseInt(e.key, 10))) {
    display.textContent += e.key;
  }
});

keyboard.addEventListener('click', (e) => {
  const key = e.target.textContent;
  switch (key) {
    case '+':
      result = add(parseFloat(display.textContent), result);
      console.log(result)
      break;
    case '-':
      result = subtract(parseFloat(display.textContent), result);
      break;
    case '×':
      result = multiply(parseFloat(display.textContent), result);
      break;
    case '÷':
      result = divide(parseFloat(display.textContent), result);
      break;
    case '%':
      result = percent(parseFloat(display.textContent), result);
      break;
    case '=':
      console.log(display.textContent)
      display.textContent = format(result);
      console.log(result)
      break;  
    default:
      break;
  }
  result > 0 || display.textContent == '0' ? display.textContent = key : display.textContent += key;
  // display.textContent = format(display.textContent);
});
