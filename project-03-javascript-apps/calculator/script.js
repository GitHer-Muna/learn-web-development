// Simple Calculator JavaScript
// This is beginner-friendly code with lots of comments!

function calculate(operation) {
    // Step 1: Get the input values from HTML
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');
    
    // Step 2: Check if the user entered valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        showError("Please enter valid numbers in both fields!");
        return; // Stop here if numbers are invalid
    }
    
    // Step 3: Perform the calculation based on what button was clicked
    let result;
    let operationSymbol;
    
    if (operation === 'add') {
        result = num1 + num2;
        operationSymbol = '+';
    } else if (operation === 'subtract') {
        result = num1 - num2;
        operationSymbol = '-';
    } else if (operation === 'multiply') {
        result = num1 * num2;
        operationSymbol = '×';
    } else if (operation === 'divide') {
        // Special check: can't divide by zero!
        if (num2 === 0) {
            showError("Cannot divide by zero! Please enter a different second number.");
            return;
        }
        result = num1 / num2;
        operationSymbol = '÷';
    } else {
        showError("Unknown operation! Something went wrong.");
        return;
    }
    
    // Step 4: Show the result to the user
    showSuccess(`${num1} ${operationSymbol} ${num2} = ${result}`);
    
    // Step 5: Log to console for debugging (you can see this in browser dev tools)
    console.log(`Calculation: ${num1} ${operationSymbol} ${num2} = ${result}`);
}

function showSuccess(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
    resultDiv.className = 'result success';
}

function showError(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
    resultDiv.className = 'result error';
}

function clearCalculator() {
    // Clear all input fields
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    
    // Clear the result display
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';
    resultDiv.className = 'result';
    
    // Focus on the first input for better user experience
    document.getElementById('num1').focus();
    
    console.log('Calculator cleared!');
}

// This runs when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Calculator app loaded successfully!');
    
    // Focus on first input when page loads
    document.getElementById('num1').focus();
    
    // Add Enter key support for better user experience
    document.getElementById('num1').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('num2').focus();
        }
    });
    
    document.getElementById('num2').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            // When user presses Enter on second input, do addition by default
            calculate('add');
        }
    });
});

// Extra: Function to demonstrate different number formatting
function formatResult(number) {
    // Round to 2 decimal places if result has many decimals
    if (number % 1 !== 0) { // If it's not a whole number
        return Math.round(number * 100) / 100; // Round to 2 decimal places
    }
    return number;
}
