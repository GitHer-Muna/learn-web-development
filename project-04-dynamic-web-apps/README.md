# Project 4: Dynamic Web Applications

> Advanced JavaScript features like real-time updates, local storage, and APIs!

## What you'll learn
- Advanced DOM manipulation
- Browser APIs (localStorage, geolocation, etc.)
- Asynchronous JavaScript (setTimeout, setInterval)
- Working with dates and time
- Dynamic content generation
- Performance optimization basics

## Project Preview
![Dynamic Apps Preview](preview.png)

## Apps You'll Build

### 1. Dynamic Greeting System 🌅
Real-time greeting that changes based on time of day with background images
- Date and time manipulation
- Dynamic styling
- Background image switching
- Real-time updates

### 2. Local Storage Todo App 📝
Todo list that remembers your tasks even after closing the browser
- localStorage API
- CRUD operations (Create, Read, Update, Delete)
- Event delegation
- Data persistence

### 3. Weather Dashboard 🌤️
Simple weather app using browser geolocation
- Geolocation API
- Fetch API for external data
- Error handling
- User permissions

### 4. Interactive Clock ⏰
Beautiful real-time clock with multiple time zones
- setInterval for real-time updates
- Date formatting
- Multiple time zone support
- Digital and analog displays

## Getting Started

### Files Structure
```
project-04-dynamic-web-apps/
├── dynamic-greeting/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── images/
├── todo-app/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── weather-dashboard/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── interactive-clock/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
```

## Key Concepts

### Working with Time
```javascript
// Get current time
const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();

// Format time nicely
const timeString = now.toLocaleTimeString();
const dateString = now.toLocaleDateString();

// Check time periods
if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
```

### Local Storage
```javascript
// Save data
localStorage.setItem('username', 'John');
localStorage.setItem('settings', JSON.stringify({theme: 'dark'}));

// Get data
const username = localStorage.getItem('username');
const settings = JSON.parse(localStorage.getItem('settings'));

// Remove data
localStorage.removeItem('username');
localStorage.clear(); // Remove all
```

### Real-time Updates
```javascript
// Update every second
setInterval(function() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString();
}, 1000);

// One-time delay
setTimeout(function() {
    alert("This appears after 3 seconds!");
}, 3000);
```

## Project 1: Dynamic Greeting System

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Greeting</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="greeting-container">
        <h1 id="greeting">Good Morning!</h1>
        <p id="time"></p>
        <p id="date"></p>
        <button onclick="updateGreeting()">Refresh</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### JavaScript Logic
```javascript
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    
    let greeting = '';
    let backgroundImage = '';
    
    if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning! ☀️';
        backgroundImage = 'url(images/morning.jpg)';
        document.body.style.backgroundColor = '#FFE135';
    } else if (hour >= 12 && hour < 17) {
        greeting = 'Good Afternoon! 🌤️';
        backgroundImage = 'url(images/afternoon.jpg)';
        document.body.style.backgroundColor = '#FF6B35';
    } else if (hour >= 17 && hour < 21) {
        greeting = 'Good Evening! 🌅';
        backgroundImage = 'url(images/evening.jpg)';
        document.body.style.backgroundColor = '#A8E6CF';
    } else {
        greeting = 'Good Night! 🌙';
        backgroundImage = 'url(images/night.jpg)';
        document.body.style.backgroundColor = '#2C3E50';
    }
    
    // Update content
    document.getElementById('greeting').textContent = greeting;
    document.getElementById('time').textContent = now.toLocaleTimeString();
    document.getElementById('date').textContent = now.toLocaleDateString();
    
    // Update background
    document.body.style.backgroundImage = backgroundImage;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
}

// Update immediately and then every minute
updateGreeting();
setInterval(updateGreeting, 60000); // 60000ms = 1 minute
```

## Project 2: Todo App with Local Storage

### Core Features
- Add new todos
- Mark todos as complete
- Delete todos
- Edit existing todos
- Save to localStorage
- Load from localStorage

### JavaScript Implementation
```javascript
class TodoApp {
    constructor() {
        this.todos = this.loadTodos();
        this.todoList = document.getElementById('todoList');
        this.todoInput = document.getElementById('todoInput');
        this.addButton = document.getElementById('addButton');
        
        this.init();
    }
    
    init() {
        this.addButton.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });
        
        this.renderTodos();
    }
    
    addTodo() {
        const text = this.todoInput.value.trim();
        if (text === '') return;
        
        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        this.todos.push(todo);
        this.saveTodos();
        this.renderTodos();
        this.todoInput.value = '';
    }
    
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveTodos();
        this.renderTodos();
    }
    
    toggleTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.renderTodos();
        }
    }
    
    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    
    loadTodos() {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    }
    
    renderTodos() {
        this.todoList.innerHTML = '';
        
        this.todos.forEach(todo => {
            const todoElement = document.createElement('div');
            todoElement.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            todoElement.innerHTML = `
                <input type="checkbox" ${todo.completed ? 'checked' : ''} 
                       onchange="todoApp.toggleTodo(${todo.id})">
                <span class="todo-text">${todo.text}</span>
                <button onclick="todoApp.deleteTodo(${todo.id})" class="delete-btn">Delete</button>
            `;
            this.todoList.appendChild(todoElement);
        });
    }
}

// Initialize the app when page loads
const todoApp = new TodoApp();
```

## Advanced Concepts

### Error Handling
```javascript
function safeOperation() {
    try {
        // Code that might fail
        const data = JSON.parse(localStorage.getItem('data'));
        return data;
    } catch (error) {
        console.error('Failed to parse data:', error);
        return null; // Return safe default
    }
}
```

### Debouncing (Performance)
```javascript
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Usage: don't search on every keystroke, wait 300ms
const debouncedSearch = debounce(searchFunction, 300);
input.addEventListener('input', debouncedSearch);
```

### Event Delegation
```javascript
// Instead of adding listeners to many elements
document.getElementById('todoList').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        const todoId = e.target.dataset.id;
        deleteTodo(todoId);
    }
});
```

## Browser APIs to Explore

### Geolocation
```javascript
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
        position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            console.log(`Location: ${lat}, ${lon}`);
        },
        error => console.error('Location error:', error)
    );
}
```

### Notification API
```javascript
if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            new Notification('Hello!', {
                body: 'This is a browser notification',
                icon: 'icon.png'
            });
        }
    });
}
```

## Best Practices

### Code Organization
```javascript
// Use modules or classes to organize code
class WeatherApp {
    constructor() {
        this.apiKey = 'your-api-key';
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadSavedLocation();
    }
    
    setupEventListeners() {
        // All event listeners here
    }
    
    async fetchWeather(city) {
        // Weather fetching logic
    }
}
```

### Performance Tips
```javascript
// Cache DOM elements
const elements = {
    button: document.getElementById('myButton'),
    output: document.getElementById('output'),
    input: document.getElementById('input')
};

// Use document fragments for multiple DOM updates
const fragment = document.createDocumentFragment();
items.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item;
    fragment.appendChild(div);
});
container.appendChild(fragment);
```

## Challenges

### Beginner
- [ ] Add themes (dark/light mode) to todo app
- [ ] Create a simple stopwatch
- [ ] Build a random quote generator
- [ ] Make a color picker tool

### Intermediate
- [ ] Add categories to todo app
- [ ] Create a habit tracker
- [ ] Build a simple drawing app
- [ ] Make a password generator

### Advanced
- [ ] Add drag-and-drop to todo app
- [ ] Create a budget tracker
- [ ] Build a simple game (tic-tac-toe)
- [ ] Make a markdown editor

## Resources

### APIs to Practice With
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Fake REST API
- [OpenWeatherMap](https://openweathermap.org/api) - Weather data
- [Random Quotes API](https://quotable.io/) - Inspirational quotes

### Tools
- Browser DevTools (F12)
- [Postman](https://www.postman.com/) - API testing
- [JSONLint](https://jsonlint.com/) - JSON validator

### Learning Resources
- [MDN Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
- [JavaScript30](https://javascript30.com/) - 30 day challenge
- [Can I Use](https://caniuse.com/) - Browser compatibility

## What's Next?

After completing this project:
1. **Learn a JavaScript framework** (React, Vue, or Angular)
2. **Explore Node.js** for backend development
3. **Study databases** (Firebase, MongoDB)
4. **Build full-stack applications**
5. **Contribute to open source projects**

---
**Time to complete:** 8-12 hours  
**Difficulty:** Intermediate-Advanced ⭐⭐⭐⭐  
**Skills gained:** Advanced JavaScript, Browser APIs, Performance optimization, Real-time updates
