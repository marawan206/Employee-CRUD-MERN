const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    address: String,
    title: String
  });

  const Employee = mongoose.model('Employee', employeeSchema);

  module.exports = Employee;