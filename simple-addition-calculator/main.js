
// Isaiah Emmons
// Simple Additon Calculator
// April 22nd, 2024

// INPUT
document.getElementById('btn').addEventListener("click",btnClicked);

function btnClicked(){


const num1 =parseFloat(document.getElementById('num1-in').value);
const num2 =parseFloat(document.getElementById('num2-in').value);

// PROCESS
const total = num1+num2

// OUTPUT
document.getElementById('output').innerHTML = total;
}