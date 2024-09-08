# Employee-CRUD-MERN

## Overview

Employee-CRUD-MERN is a project i'm working on for my MERN Stack journey, this is a only the backend built using MongoDB, ExpressJS, and NodeJS
It allows administrators to perform CRUD (Create, Read, Update, Delete) operations on employee records
This project makes sure that employee data can be efficiently managed, I will push the integration with a React frontend in a separate repo

## Goal
- **Develop** a web application that allows administrators to perform CRUD operations on employee records. 
- **Ensure** the system has proper validation and authentication mechanisms to protect sensitive employee data.

## Features

- **Create Employee**: Add new employee records with relevant details.
- **Read Employees**: Fetch all employees or get details of a specific employee by ID.
- **Update Employee**: Modify the data of an existing employee by ID.
- **Delete Employee**: Remove an employee record by ID.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Testing**: Postman for API requests
- **Frontend (to be added)**: React.js

## API Endpoints (Postman)
- You can find the <employeeID> in your MongoDB as `._id`
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

The next phase of this project will be the integration of the React frontend, completing the full-stack web application.
