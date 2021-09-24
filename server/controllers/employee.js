import EmployeeData from '../models/employee.js';

export const getEmployee = async(req, res) => {
    try {
        const allEmployee = await EmployeeData.find();

        res.status(200).json(allEmployee);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createEmployee = async(req, res) => {
    const employee = req.body;

    const newEmployee = new EmployeeData(employee);

    try {
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteEmployee = async(req, res) => {
    const id = req.params.id;

    try {
        await EmployeeData.findByIdAndRemove(id).exec();
        res.send('Successfully deleted!')
    } catch (error) {
        console.log(error);
    }
}


export const editEmployee = async(req, res) => {
        const id = req.params.id;

            await EmployeeData.findByIdAndUpdate(id,{
                empId: req.body.empId,
                employeeName: req.body.employeeName,
                birthDate: req.body.birthDate,
                gender: req.body.gender,
                salary: req.body.Salary,
              },
            function (err, docs) {
if (err){
console.log(err)
}
else{
    res.send('Successfully updated!')
    console.log("Updated User : ", docs);
}
});
}
