let buttonContainer = document.getElementById('buttonContainer');
let screen = document.getElementById('screen');
let container = document.getElementById('container');

// Function to calculate the result
function calculateResult() {
    try {
      // Evaluate the expression in the screen element
      const expression = screen.textContent;
      const result = eval(expression);
  
      // Display the result in the screen element
      screen.textContent = result;
    } catch (error) {
      // Handle any errors (e.g., division by zero)
      screen.textContent = 'Error';
    }
  }
  
  // Event listener for button clicks
  buttonContainer.addEventListener('click', function (event) {
    const clickedButton = event.target;
  
    if (clickedButton.id === '=') {
      // If the "=" button is clicked, calculate the result
      calculateResult();
    } else if (clickedButton.id === 'clear') {
      // If the "Clear" button is clicked, clear the screen
      screen.textContent = '';
    } else if (clickedButton.id === 'delete') {
      // If the "Delete" button is clicked, remove the last character from the screen
      screen.textContent = screen.textContent.slice(0, -1);
    } else {
      // For other buttons, append the button's text to the screen
      screen.textContent += clickedButton.textContent;
    }
  });