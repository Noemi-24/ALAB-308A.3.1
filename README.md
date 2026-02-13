# ALAB 308A.3.1: Promises and async/await

## 📋 Project Description

This project is a practical application of asynchronous JavaScript techniques, including Promises and async/await syntax. The goal is to demonstrate how to handle asynchronous operations efficiently, simulating a real-world scenario of accessing multiple databases in a large corporation environment.

The assignment showcases how to gather user data from multiple distributed databases while optimizing for performance through concurrent request handling. This mirrors real-world enterprise applications where data is split across multiple data sources for scalability, security, and compliance reasons.

## 🎯 Objectives

This lab assignment is designed to:

1. **Master Asynchronous JavaScript**: Gain hands-on experience with modern async patterns
2. **Understand Promise Mechanics**: Learn how Promises work and when to use them
3. **Implement Concurrent Operations**: Optimize performance through parallel request handling
4. **Handle Real-World Scenarios**: Simulate enterprise data access patterns
5. **Practice Error Handling**: Implement robust error handling for async operations
6. **Improve Code Efficiency**: Reduce execution time through smart async programming

## 🎓 Learning Outcomes

Upon completing this assignment, you will be able to:

- ✅ Write clean, efficient asynchronous JavaScript code
- ✅ Choose between Promise chaining and async/await syntax appropriately
- ✅ Implement `Promise.all()` for concurrent operations
- ✅ Handle errors in asynchronous code effectively
- ✅ Optimize async operations to meet performance requirements
- ✅ Understand the difference between sequential and parallel execution
- ✅ Debug asynchronous code using modern development tools
- ✅ Apply async patterns to real-world data fetching scenarios

## 🛠️ Technologies Used

### Core Technologies
- **JavaScript (ES6+)**: Modern JavaScript with async/await support
- **Node.js**: Runtime environment for executing JavaScript
- **Promises**: Native JavaScript Promise API

### Development Tools
- **Git**: Version control system
- **GitHub**: Code repository hosting
- **CodeSandbox**: Online development environment (optional)
- **VS Code**: Recommended code editor

### Key JavaScript Features
- `async/await` syntax
- `Promise.all()` for concurrent operations
- ES6 Modules (import/export)
- Arrow functions
- Template literals
- Object destructuring

## 📁 Project Structure

```
promises-async-await/
│
├── src/
│   ├── index.js           # Main implementation file
│   │                      # Contains getUserData() function
│   │── styles.css         # Contains html styles
│   └── database.js        # Simulated database system
│                          # Includes: central, db1, db2, db3, vault
│── index.htmml            
├── .gitignore             # Git ignore file
├── package.json           # Project dependencies
├── README.md              # Project documentation
└── sandbox.config.json    # CodeSandbox configuration (if applicable)
```

### File Descriptions

**`index.js`**
- Main entry point of the application
- Contains the `getUserData()` function implementation
- Imports database functions from `database.js`
- Implements the `dbs` object for dynamic database access

**`database.js`**
- Simulates a multi-database system
- Exports five database functions: `central`, `db1`, `db2`, `db3`, `vault`
- Each database has a 100ms simulated response time
- Contains mock user data for testing (10 users)



## 📦 Return Object Structure

```javascript
{
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}
```

## ⚡ Performance Requirements

- **Response time per database**: 100ms
- **Maximum execution time**: 200ms
- **Solution**: Use `Promise.all` to execute concurrent requests

> 💡 **Tip**: Promises only need to be sequential if they depend on the result of the previous Promise. Independent requests can be executed in parallel.

## 🚀 How to Run the Project

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git (for version control)
- Code editor (VS Code recommended)

### Option 1: Local Development

#### Step 1: Clone the Repository
```bash
# Clone the repository
git clone https://github.com/yourusername/promises-async-await.git

# Navigate to project directory
cd promises-async-await
```

#### Step 2: Install Dependencies
```bash
# Using npm
npm install

# OR using yarn
yarn install
```

#### Step 3: Run the Project
```bash
# Start the application
npm start

# OR with yarn
yarn start
```

#### Step 4: Test Your Implementation
```bash
# Run tests (if available)
npm test

# OR manually test by checking console output
node src/index.js
```

## 👨‍💻 Author

**Noemi Delgadillo Roldan**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
