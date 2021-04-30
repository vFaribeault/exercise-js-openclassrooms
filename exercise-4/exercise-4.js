// Get code input, code validation and submit button elements
let inputCode = document.getElementById('code');
let codeValidation = document.getElementById('code-validation');
let submitButton = document.getElementById('submit-btn');

// Create the function to establish the regex
function isValid(value) {
  return /^CODE-/.test(value);
};

// Listen the event input
inputCode.addEventListener('input', function(event) {
  // Get the input value
  let value = event.target.value;
  // Check if the value input is true
  if (isValid(value) == true) {
    // Display that the code is true
    codeValidation.textContent = 'Code valide';
    // Activate the button "Submit"
    submitButton.removeAttribute('disabled');
  } else {
    // Display that the code is wrong
    codeValidation.textContent = 'Code invalide';
    // Deactivate the button "Submit"
    submitButton.setAttribute('disabled', 'true');
  }
});
