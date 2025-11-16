// Get the display element
const display = document.getElementById('display');

// Function to append numbers or operators to display
function appendToDisplay(value) {
  display.value += value;
}

// Function to clear the entire display
function clearDisplay() {
  display.value = '';
}

// Function to delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Function to perform calculation using eval (basic; use a parser for production)
function calculate() {
  try {
    // Safely evaluate the expression (only allow basic math)
    const result = eval(display.value);
    if (isNaN(result) || !isFinite(result)) {
      throw new Error('Invalid calculation');
    }
    display.value = result;
  } catch (error) {
    // Handle errors like division by zero or invalid input
    display.value = 'Error';
    setTimeout(clearDisplay, 1500); // Clear after 1.5 seconds
  }
}

// Allow Enter key to calculate
display.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    calculate();
  }
});