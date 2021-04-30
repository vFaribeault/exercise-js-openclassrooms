// Get the parent element
let parent = document.getElementById('parent');
// Get the parent-count element
let parentCountId = document.getElementById('parent-count');
// Get the string into parent-count element
let parentCountContent = parentCountId.textContent;
// Transform this string into integer
let parentCountInteger = parseInt(parentCountContent, 10);

// Get the child element
let child = document.getElementById('child');
// Get the child-count element
let childCountId = document.getElementById('child-count');
// Get the string into child-count element
let childCountContent = childCountId.textContent;
// Transform this string into integer
let childCountInteger = parseInt(childCountContent, 10);

// Listen to the click event on parent element
parent.addEventListener('click', function(event) {
  event.preventDefault();    // To not execute the default behaviour
  event.stopPropagation();   // Not really useful
  parentCountInteger += 1;   // Increment parent-count element for each click
  parentCountId.textContent = parentCountInteger;  // Display the new count
});

// Listen to the click event on child element
child.addEventListener('click', function(event) {
  event.preventDefault();    // To not execute the default behaviour
  event.stopPropagation();   // To stop propagation to the parent element
  childCountInteger += 1;    // Increment child-count element for each click
  childCountId.textContent = childCountInteger;  // Display the new count
});
