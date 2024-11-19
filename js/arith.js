// Get the elements by their IDs
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const resultElement = document.getElementById("result");

// Get the textContent of the elements and convert them to numbers
const num1 = parseFloat(num1Element.textContent.trim());
const num2 = parseFloat(num2Element.textContent.trim());

// Perform arithmetic operation (addition)
const sum = num1 + num2;

// Display the result in the "result" element
resultElement.textContent = sum;
