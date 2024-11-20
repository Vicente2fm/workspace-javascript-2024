
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const resultElement = document.getElementById("result");


const num1 = parseFloat(num1Element.textContent.trim());
const num2 = parseFloat(num2Element.textContent.trim());

// Performs arithmetic operation (addition)
const sum = num1 + num2;

resultElement.textContent = sum;
