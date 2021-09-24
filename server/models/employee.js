import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
    empId: {
        type: Number,
        required:true,
    },
    employeeName: {
        type: String,
        required:true,
    },
    birthDate: {
        type: String,
        required:true,
    },
    gender: {
        type: String,
        required:true,
    },
    salary: {
        type: Number,
        required:true,
    },
});

const employee = mongoose.model('employee', employeeSchema);

export default employee;
