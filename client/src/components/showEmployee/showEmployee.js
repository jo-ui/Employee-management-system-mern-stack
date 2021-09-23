import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { TiEdit } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
//import Button from '@mui/material/Button';

//import { makeStyles } from '@mui/material';
/*
const useStyles = makeStyles({
  table:{
    minWidth:650
  },
});
*/



const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}


export default function ShowEmployee() {



    const [employeeList, setEmployeeList]= useState([])


    const deleteEmployee = (id) => {
      axios.delete(`http://localhost:5000/employee/${id}`).then( () => {
        window.location.reload(false);
      })
    }

    const editEmployee = (id) => {
      axios.put(`http://localhost:5000/employee/${id}`).then( () => {
        window.location.reload(false);
      })
    }

    useEffect(() => {
        axios.get('http://localhost:5000/employee').then( (allEmployee) =>{
            setEmployeeList(allEmployee.data);
        })
    }, [])


  return (
    <>
    <h2>All Employees</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 640 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Date of Birth</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Salary</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeList.map((employee, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {employee.empId}
              </TableCell>
              <TableCell align="center">{employee.employeeName}</TableCell>
              <TableCell align="center">{employee.birthDate}</TableCell>
              <TableCell align="center">{employee.gender}</TableCell>
              <TableCell align="center">{employee.salary}</TableCell>
              <TableCell>
                <Button align="left" onClick={() => editEmployee(employee._id)}><TiEdit/></Button>
                <Button align="right" onClick={() => deleteEmployee(employee._id)}><MdDeleteForever/></Button>
              </TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}