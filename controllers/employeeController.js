const Employee = require('../config/models/employee');


// Get Employees
const fetchEmployees = async (req, res) => {
    try { 
    // Find Employees
    const employee = await Employee.find({user: req.user._id});
    // Respond with them
    res.json({ employee });
} catch(err) {
    console.log(err);
    res.sendStatus(400);
}

}

// Get Employee by ID
const fetchEmployee = async (req, res) => {
    try {
    // Get ID off the URL
    const employeeId = req.params.id;
    // Find the employee using id
    const employee = await Employee.findOne({_id: employeeId, user: req.user._id})
    // Respond with the Employee
    res.json({employee})
} catch(err) {
    console.log(err);
    res.sendStatus(400);
}
}


// Create Employee
const addEmployee = async (req, res) => { 
    try {
    // Get the sent in data off request body
    const { name, title, age, gender, address } = req.body;
    
    // Create an Employee with it
    const employee = await Employee.create({
        name,
        title,
        age,
        gender,
        address,
        user: req.user._id,
    });
    // Respond with the new note
    res.json({employee});
} catch(err) {
    console.log(err);
    res.sendStatus(400);
}

}

// Update Employee
const updateEmployee = async (req, res) => {
    try {
    // Get the ID off the URL
    const employeeId = req.params.id;

    // Get the data off the req body
    const { name, title, age, gender, address } = req.body;

    // Find and Update the record
    await Employee.findOneAndUpdate(
        {_id: employeeId, user: req.user._id},
        {
            title,
            age,
            gender,
            address,
            name,
        },

    {new: true}); // need to add {new: true} to return the updated objects

    // Find updated note
    const employee = await Employee.findById(employeeId);

    // Respond with it
    res.json({ employee});
} catch(err) {
    console.log(err);
    res.sendStatus(400);
}
}

// Delete Employee
const deleteEmployee = async (req, res) => {
    try {
    // get ID off url
    const employeeId = req.params.id;

    // Delete the record
    await Employee.deleteOne({ _id: employeeId, user: req.user._id }); 

    // respond
    res.json({success: "Record deleted."})
} catch(err) {
    console.log(err);
    res.sendStatus(400);
}
}

// We cannot export multiple modules at the same time so we do this instead
module.exports = { 
    fetchEmployees,
    fetchEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee,
}





