// Get weather asking element from DOM
let clickAskWeather = document.getElementById('ask-weather');

// Get weather result element from DOM
let resultWeather = document.getElementById('weather-result');

// Create a new AJAX object
let askWeather = new XMLHttpRequest();

// Listen the event 
clickAskWeather.addEventListener('click', function() {
  // Call the property "onreadystatechange" and pass it a function
  askWeather.onreadystatechange = function() {
    // Check if the request status is done and without error
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      // If so, parse the JSON to transform JSON into JS objects
      let response = JSON.parse(this.responseText);
      // Access to the object "current_conditon" and its property "condition"
      // Display it into "resultWeather"
      resultWeather.innerText = response.current_condition.condition;
    }
  };
  // Ask to open a connection to the web service
  askWeather.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
  // Send the request to the web service
  askWeather.send();
});
