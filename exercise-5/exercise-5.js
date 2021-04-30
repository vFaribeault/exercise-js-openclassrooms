// Get value, result and form elements from DOM
let value = document.getElementById('value');
let result = document.getElementById('result');
let form = document.getElementById('form');

// Listen the 'submit' event on form and call a 'send' function on it
form.addEventListener('submit', send() {
  // Create a new AJAX object
  let request = new XMLHttpRequest();
  // POST THE ELEMENT
  // Create the request POST
  request.open("POST", "https://mockbin.com/request");
  // Prevent the web service that JSON will be send
  request.setRequestHeader("Content-Type", "application/json");
  // Send the content to the web service
  request.send(JSON.stringify(value.value));
  // GET THE ELEMENT  
  request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      result.textContent = postData.text;
    }
  };
  request.open("GET", "https://mockbin.com/request");
  request.send();
});
