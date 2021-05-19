// Get value, result and form elements from DOM
let value = document.getElementById('value');
let result = document.getElementById('result');
let form = document.getElementById('form');

var send = (e) => {
  // Cancel default behaviour
  e.preventDefault();

  fetch("https://mockbin.com/request", {
    method: "POST",
    headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify({value: value.value})
  })

  // Get the response and transform it into json
  .then(response => response.json())
  // Parse the response and put it inside result element
  .then(data => {
    result.textContent = JSON.parse(data)
  })
};

// Listen the 'submit' event on form and call a 'send' function on it
form.addEventListener('submit', send);
