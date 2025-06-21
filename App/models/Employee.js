const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  _id: String,
  emp_name: String,
  job_role: String,
  emp_age: Number,
  salary: Number,
  department: String
}, { _id: false });

module.exports = mongoose.model('Employee', employeeSchema);
