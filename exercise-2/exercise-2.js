// Listen name choice event, to know if text field change
// Display the content into result
const inputName = document.querySelector('input');
let resultName = document.getElementById('res-name');

inputName.addEventListener('change', function(event) {
	resultName.textContent = event.target.value;
});

// Listen gender choice event, to know if choice change
// Display the content into result
const selectGender = document.getElementById('gender');
let resultGender = document.getElementById('res-gender');

selectGender.addEventListener('change', function(event) {
  resultGender.textContent = event.target.value;
});

// Display mouse coordinates into "result" element, relatives to top left corner
const mouseCoordinatesIntoResult = document.getElementById('result');
let mouseCoordinatesX = document.getElementById('mouse-x');
let mouseCoordinatesY = document.getElementById('mouse-y');

mouseCoordinatesIntoResult.addEventListener('mousemove', function(event) {
  mouseCoordinatesX.textContent = event.offsetX;
  mouseCoordinatesY.textContent = event.offsetY;
});
