const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    // Clear screen
    if (value === 'C') {
      currentInput = '';
      display.textContent = '0';
      return;
    }

    // Backspace
    if (value === '←') {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || '0';
      return;
    }

    // Equals
    if (value === '=') {
      try {
        let evalResult = eval(currentInput);
        currentInput = evalResult.toString();
        display.textContent = currentInput;
        resultDisplayed = true;
      } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
      }
      return;
    }

    // Append number/operator
    if (resultDisplayed && !['+', '-', '*', '/'].includes(value)) {
      currentInput = '';
      resultDisplayed = false;
    }

    currentInput += value;
    display.textContent = currentInput;
  });
});
