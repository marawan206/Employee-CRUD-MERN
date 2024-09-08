const Employee = require('../config/models/employee');


// Get Employees
const fetchEmployees = async (req, res) => {

    // Find Employees
    const employee = await Employee.find();
    // Respond with them
    res.json({ employee });

}

// Get Employee by ID
const fetchEmployee = async (req, res) => {
    // Get ID off the URL
    const employeeId = req.params.id;
    // Find the employee using id
    const employee = await Employee.findById(employeeId)
    // Respond with the Employee
    res.json({employee})
}


// Create Employee
const addEmployee = async (req, res) => { 
    // Get the sent in data off request body
    const { name, title, age, gender, address } = req.body;
    
    // Create an Employee with it
    const employee = await Employee.create({
        name,
        title,
        age,
        gender,
        address,
    });
    // Respond with the new note
    res.json({employee});

}

// Update Employee
const updateEmployee = async (req, res) => {
    // Get the ID off the URL
    const employeeId = req.params.id;

    // Get the data off the req body
    const { name, title, age, gender, address } = req.body;

    // Find and Update the record
    await Employee.findByIdAndUpdate(employeeId, {
        name,
        title,
        age,
        gender,
        address
    }, {new: true}); // need to add {new: true} to return the updated objects

    // Find updated note
    const employee = await Employee.findById(employeeId);

    // Respond with it
    res.json({ employee});
}

// Delete Employee
const deleteEmployee = async (req, res) => {
    // get ID off url
    const employeeId = req.params.id;

    // Delete the record
    await Employee.deleteOne({ _id: employeeId }); 

    // respond
    res.json({success: "Record deleted."})
}

// We cannot export multiple modules at the same time so we do this instead
module.exports = { 
    fetchEmployees,
    fetchEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee,
}





