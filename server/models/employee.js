import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
    empId: Number,
    employeeName: String,
    birthDate: String,
    gender: String,
    salary: Number
});

const employee = mongoose.model('employee', employeeSchema);

export default employee;