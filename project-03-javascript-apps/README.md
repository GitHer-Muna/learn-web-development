# Project 3: JavaScript Apps

> Time to make your websites interactive! Build calculators, forms, and dynamic content.

## What you'll learn
- JavaScript fundamentals (variables, functions, loops)
- DOM manipulation (changing web page content)
- Event handling (responding to user clicks)
- Form validation
- Error handling

## Project Preview
![JavaScript Apps Preview](preview.png)

## Getting Started

### What you need
- Completed Projects 1 & 2 (or basic HTML/CSS knowledge)
- Understanding of basic programming concepts
- 3-4 hours to work through examples

### Apps you'll build
```
project-03-javascript-apps/
├── calculator/
│   ├── index.html          # Basic calculator
│   ├── style.css
│   └── script.js
├── temperature-converter/
│   ├── index.html          # Fahrenheit ↔ Celsius
│   ├── style.css
│   └── script.js
├── time-converter/
│   ├── index.html          # Minutes ↔ Seconds
│   ├── style.css
│   └── script.js
├── form-validator/
│   ├── index.html          # Form with validation
│   ├── style.css
│   └── script.js
└── README.md               # This guide
```

## JavaScript Fundamentals

### Variables and Data Types
```javascript
// Numbers
let age = 20;
let price = 19.99;

// Strings
let name = "John";
let message = "Hello World!";

// Booleans
let isStudent = true;
let isOnline = false;

// Arrays
let colors = ["red", "blue", "green"];
let numbers = [1, 2, 3, 4, 5];
```

### Functions
```javascript
// Basic function
function greetUser(name) {
    return "Hello, " + name + "!";
}

// Using the function
let greeting = greetUser("Sarah");
console.log(greeting); // "Hello, Sarah!"

// Arrow function (modern way)
const addNumbers = (a, b) => {
    return a + b;
};
```

### DOM Manipulation
```javascript
// Get elements from HTML
const button = document.getElementById("myButton");
const output = document.querySelector(".result");

// Change content
output.textContent = "New text here!";
output.innerHTML = "<strong>Bold text!</strong>";

// Change styles
button.style.backgroundColor = "blue";
button.classList.add("active");
```

### Event Handling
```javascript
// Listen for button clicks
button.addEventListener("click", function() {
    alert("Button was clicked!");
});

// Listen for form submissions
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form from submitting
    // Your code here
});
```

## Project 1: Basic Calculator

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <h1>Calculator</h1>
        <div class="inputs">
            <input type="number" id="num1" placeholder="First number">
            <input type="number" id="num2" placeholder="Second number">
        </div>
        <div class="buttons">
            <button onclick="calculate('add')">+</button>
            <button onclick="calculate('subtract')">-</button>
            <button onclick="calculate('multiply')">×</button>
            <button onclick="calculate('divide')">÷</button>
        </div>
        <div id="result" class="result"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### JavaScript Logic
```javascript
function calculate(operation) {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');
    
    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = "Please enter valid numbers!";
        resultDiv.className = "result error";
        return;
    }
    
    let result;
    
    // Perform calculation based on operation
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultDiv.textContent = "Cannot divide by zero!";
                resultDiv.className = "result error";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultDiv.textContent = "Unknown operation!";
            return;
    }
    
    // Display result
    resultDiv.textContent = `Result: ${result}`;
    resultDiv.className = "result success";
}

// Clear function
function clearCalculator() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').textContent = '';
}
```

## Project 2: Temperature Converter

### The JavaScript
```javascript
function convertTemperature() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const celsius = parseFloat(document.getElementById('celsius').value);
    const resultDiv = document.getElementById('result');
    
    // Convert Fahrenheit to Celsius
    if (!isNaN(fahrenheit)) {
        const celsiusResult = (fahrenheit - 32) * 5/9;
        resultDiv.innerHTML = `
            <p>${fahrenheit}°F = ${celsiusResult.toFixed(2)}°C</p>
        `;
        document.getElementById('celsius').value = celsiusResult.toFixed(2);
    }
    // Convert Celsius to Fahrenheit  
    else if (!isNaN(celsius)) {
        const fahrenheitResult = (celsius * 9/5) + 32;
        resultDiv.innerHTML = `
            <p>${celsius}°C = ${fahrenheitResult.toFixed(2)}°F</p>
        `;
        document.getElementById('fahrenheit').value = fahrenheitResult.toFixed(2);
    }
    else {
        resultDiv.innerHTML = '<p class="error">Please enter a temperature!</p>';
    }
}

// Clear all fields
function clearFields() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
    document.getElementById('result').innerHTML = '';
}
```

## Project 3: Form Validation

### HTML Form
```html
<form id="registrationForm">
    <div class="form-group">
        <label for="name">Full Name:</label>
        <input type="text" id="name" required>
        <span class="error" id="nameError"></span>
    </div>
    
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" required>
        <span class="error" id="emailError"></span>
    </div>
    
    <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" required>
        <span class="error" id="passwordError"></span>
    </div>
    
    <button type="submit">Register</button>
</form>
```

### Validation JavaScript
```javascript
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop form submission
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    
    let isValid = true;
    
    // Clear previous errors
    clearErrors();
    
    // Validate name
    if (name.length < 2) {
        showError('nameError', 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate password
    if (password.length < 8) {
        showError('passwordError', 'Password must be at least 8 characters long');
        isValid = false;
    }
    
    // If all valid, show success
    if (isValid) {
        alert('Registration successful!');
        // Here you would normally send data to a server
    }
});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
}
```

## Common JavaScript Patterns

### Input Validation
```javascript
function validateInput(value, type) {
    switch(type) {
        case 'number':
            return !isNaN(value) && value !== '';
        case 'email':
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        case 'phone':
            return /^\d{10}$/.test(value.replace(/\D/g, ''));
        default:
            return value.trim() !== '';
    }
}
```

### Error Handling
```javascript
function safeCalculation(a, b, operation) {
    try {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);
        
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Invalid numbers provided');
        }
        
        switch(operation) {
            case 'divide':
                if (num2 === 0) throw new Error('Division by zero');
                return num1 / num2;
            case 'add':
                return num1 + num2;
            default:
                throw new Error('Unknown operation');
        }
    } catch (error) {
        console.error('Calculation error:', error.message);
        return 'Error: ' + error.message;
    }
}
```

## Debugging Tips

### Using Console
```javascript
// Debug your code with console.log
console.log('Value of variable:', myVariable);
console.error('Something went wrong:', error);
console.warn('This is a warning message');

// Check if element exists
const element = document.getElementById('myId');
if (element) {
    console.log('Element found:', element);
} else {
    console.error('Element not found!');
}
```

### Common Mistakes
1. **Forgetting to prevent form submission**
   ```javascript
   form.addEventListener('submit', function(e) {
       e.preventDefault(); // Don't forget this!
   });
   ```

2. **Not checking if elements exist**
   ```javascript
   const button = document.getElementById('myButton');
   if (button) {
       button.addEventListener('click', handleClick);
   }
   ```

3. **Incorrect data types**
   ```javascript
   // Wrong: '5' + '3' = '53' (string concatenation)
   // Right: parseInt('5') + parseInt('3') = 8
   ```

## Exercises to Try

### Easy
- [ ] Add a "Clear" button to the calculator
- [ ] Create a tip calculator  
- [ ] Build a simple counter (increment/decrement)
- [ ] Make a random number generator

### Medium
- [ ] Create a todo list with add/remove functions
- [ ] Build a simple stopwatch
- [ ] Make a color palette generator
- [ ] Create a BMI calculator

### Hard
- [ ] Build a simple quiz app
- [ ] Create a password strength checker
- [ ] Make a unit converter (length, weight, etc.)
- [ ] Build a simple drawing app

## Resources

### JavaScript Learning
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [freeCodeCamp JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)

### Practice Sites
- [Codewars](https://www.codewars.com/)
- [HackerRank](https://www.hackerrank.com/domains/javascript)
- [LeetCode](https://leetcode.com/)

### Tools
- Browser Developer Tools (F12)
- [JSFiddle](https://jsfiddle.net/) - Online code playground
- [CodePen](https://codepen.io/) - Front-end playground

## What's Next?
1. **Move to Project 4** - Dynamic Web Applications
2. **Practice more** - Build variations of these apps
3. **Learn APIs** - Connect to external data sources
4. **Explore frameworks** - React, Vue, Angular (after mastering vanilla JS)

---
**Time to complete:** 6-8 hours  
**Difficulty:** Intermediate ⭐⭐⭐  
**Skills gained:** JavaScript fundamentals, DOM manipulation, Event handling, Form validation
