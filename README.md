# Employee-CRUD-MERN

- Includes frontend as frontend.rar inside repo, unzip files open directory and use `npm start` to run the server
- I ran it on port 3001 since port 3000 was being used by the backend
- run the backend server with `npm run devStart`

## Overview

Employee-CRUD-MERN is a project i'm working on for my MERN Stack journey, this is a only the backend built using MongoDB, ExpressJS, and NodeJS
It allows administrators to perform CRUD (Create, Read, Update, Delete) operations on employee records
This project makes sure that employee data can be efficiently managed,
This is Task 2 for ProdigyInfoTech FSWD Internship
        
## Goal
- **Develop** a web application that allows administrators to perform CRUD operations on employee records. 
- **Ensure** the system has proper validation and authentication mechanisms to protect sensitive employee data.

## Features

- **Create Employee**: Add new employee records with relevant details.
- **Read Employees**: Fetch all employees or get details of a specific employee by ID.
- **Update Employee**: Modify the data of an existing employee by ID.
- **Delete Employee**: Remove an employee record by ID.

## Backend

### File Structure

- **`server.js`**: Main entry point for the Node.js application. Sets up the server and routes.
- **`WFQ68.jpg`**: Image explaining cookie checking sequence and SameSite: Lax setting.
  
#### `/config`
- **`connectToDB.js`**: Manages database connection logic.

#### `/models`
- **`employee.js`**: Defines the schema for employee records.
- **`user.js`**: Defines the schema for user records.

#### `/controllers`
- **`employeeController.js`**: Handles employee-related API requests.
- **`usersController.js`**: Handles user-related API requests.

#### `/middleware`
- **`requireAuth.js`**: Middleware to enforce authentication.

## Frontend

### File Structure

- **`src`**
  - **`index.js`**: Entry point of the React application.

- **`components`**
  - **`App.js`**: Main application component.
  - **`CreateForm.js`**: Form for creating new employee records.
  - **`Emp.js`**: Component for individual employee details.
  - **`Employees.js`**: Component for displaying a list of employees.
  - **`LoginForm.js`**: Form for user login.
  - **`RequireAuth.js`**: Utility for protecting routes that require authentication.
  - **`SignupForm.js`**: Form for user registration.
  - **`UpdateForm.js`**: Form for updating employee records.

- **`pages`**
  - **`EmpPage.js`**: Page for displaying employee details or lists.
  - **`LoginPage.js`**: Page for user login.
  - **`LogoutPage.js`**: Page for handling user logout.
  - **`SignupPage.js`**: Page for user registration.

- **`stores`**
  - **`authStore.js`**: Manages authentication state.
  - **`employeeStore.js`**: Manages employee data.


## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Testing**: Postman for API requests
- **Frontend (UPDATE: Added to repo)**: React.js

## API Endpoints (Postman)
- You can find the `<employeeID>` in your MongoDB as `._id`
### POST /employee
- **Description**: Create a new employee record.
- **Request URL**: `http://localhost:3000/employee`
- **Request Body**:
    ```json
    {
      "name": "John Doe",
      "age": 30,
      "gender": "Male",
      "address": "123 Main St",
      "title": "Software Engineer"
    }
    ```

### GET /employee
- **Description**: Fetch all employee records.
- **Request URL**: `http://localhost:3000/employee`

### GET /employee/:id
- **Description**: Fetch a specific employee by ID.
- **Request URL**: `http://localhost:3000/employee/<employeeID>`

### PUT /employee/:id
- **Description**: Update an employee record by ID.
- **Request URL**: `http://localhost:3000/employee/<employeeID>`
- **Request Body**:
    ```json
    {
      "name": "Jane Doe",
      "age": 28,
      "gender": "Female",
      "address": "456 Elm St",
      "title": "Project Manager"
    }
    ```

### DELETE /employee/:id
- **Description**: Delete an employee record by ID.
- **Request URL**: `http://localhost:3000/employee/<employeeID>`

## Postman Usage

- Created a **POST** request for creating an employee.
- Created a **GET** request to fetch all employees.
- Created a **GET** request to fetch an employee by their ID.
- Created a **PUT** request to update employee data.
- Created a **DELETE** request to remove an employee record.

## Lessons Learned

Throughout this project, I learned:

- Setting up a **RESTful API** using Node.js and Express.
- Handling **CRUD operations** with MongoDB and Mongoose.
- Implementing **API validation** and structuring routes.
- Using **Postman** for testing and debugging API requests.
- Managing **state and form data** for future frontend development.
- Properly managing sensitive environment variables with `.env` files.

## Next Steps

- The next phase of this project will be the integration of the React frontend, completing the full-stack web application. (8-Sep-2024)
- Next phase is to integrate css in the file
