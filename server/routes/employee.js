import express from 'express'
import { getEmployee, createEmployee, deleteEmployee, editEmployee } from '../controllers/employee.js';
import employee from '../models/employee.js';

const router = express.Router();

router.get('/', getEmployee);
router.post('/', createEmployee);
router.delete('/:id', deleteEmployee);
router.put('/:id', editEmployee);

export default router;