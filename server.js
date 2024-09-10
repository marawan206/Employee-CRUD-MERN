// Load env variables
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

// Import dependencies
const express = require('express');
const cors = require("cors");
const cookieParser = require('cookie-parser')
const connectToDB = require("./config/connectToDB");
const employeeController = require("./controllers/employeeController");
const usersController = require("./controllers/usersController");
const requireAuth = require('./middleware/requireAuth');


// Create an express app
const app = express();

// Configure express app
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true,
})); 

// Connect to Database
connectToDB();

// Routing
app.post('/signup', usersController.signup);
app.post('/login', usersController.login);
app.get('/logout', usersController.logout);
app.get('/check-auth', requireAuth, usersController.checkAuth);



app.get('/employee', requireAuth, employeeController.fetchEmployees);

app.get('/employee/:id', requireAuth, employeeController.fetchEmployee);

app.post('/employee', requireAuth, employeeController.addEmployee);

app.put('/employee/:id', requireAuth, employeeController.updateEmployee);

app.delete('/employee/:id', requireAuth, employeeController.deleteEmployee);

// Start our server
app.listen(process.env.PORT);





