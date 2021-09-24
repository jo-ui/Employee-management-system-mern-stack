import React ,{ useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Create() {

    const [employee, setEmployee]= useState({
        empId:0,
        employeeName:'',
        birthDate:'',
        gender:'',
        salary:0
    });

    const createEmployee = () => {
        axios.post('http://localhost:5000/employee', employee).then(() => {
          window.location.reload(false);
        })
    }

  return (
    <>
    <h2>Employee Form</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Employee Id" variant="outlined" value={employee.empId} required= "ID Required" onChange={(event) =>{
          setEmployee({ ...employee, empId: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Full name" variant="outlined" value={employee.employeeName} required= "Name Required" onChange={(event) =>{
          setEmployee({ ...employee, employeeName: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Date of Birth(mm/dd/yy)" variant="outlined" value={employee.birthDate} required= "Birth date Required" onChange={(event) =>{
          setEmployee({ ...employee, birthDate: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Gender" variant="outlined" value={employee.gender} required= "Gender Required" onChange={(event) =>{
          setEmployee({ ...employee, gender: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Salary" variant="outlined" value={employee.salary} required= "Salary Required" onChange={(event) =>{
          setEmployee({ ...employee, salary: event.target.value})
      }}/>
      <Button variant="contained" onClick={createEmployee}>Submit</Button>
    </Box>
    </>
  );
}

