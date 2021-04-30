// Define two asynchronous functions
async function getNumber1() {
  return 10;
}
async function getNumber2() {
  return 4;
}

// Get and return the result of the two asynchronous functions
async function compute() {
  const number1 = await getNumber1();
  const number2 = await getNumber2();
  let sumResult = number1 + number2
  return sumResult;
}

// Put the result inside 'result' element using the promise
compute()
  .then(function(sumResult) {
    let result = document.getElementById('result');
    result.innerText = sumResult;
  });
