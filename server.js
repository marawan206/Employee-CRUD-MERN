// Load env variables
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

// Import dependencies
const express = require('express');
const cors = require("cors");
const connectToDB = require("./config/connectToDB");
const employeeController = require("./controllers/employeeController");

// Create an express app
const app = express();

// Configure express app
app.use(express.json());
app.use(cors()); 

// Connect to Database
connectToDB();

// Routing

app.get('/employee', employeeController.fetchEmployees);

app.get('/employee/:id', employeeController.fetchEmployee);

app.post('/employee', employeeController.addEmployee);

app.put('/employee/:id', employeeController.updateEmployee);

app.delete('/employee/:id', employeeController.deleteEmployee);

// Start our server
app.listen(process.env.PORT);





