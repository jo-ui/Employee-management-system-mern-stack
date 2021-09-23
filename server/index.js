import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import employeeRoutes from './routes/employee.js';

const app = express();

app.use(cors());
app.use(bodyparser.json({ limit: "20mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "20mb", extended: true }));
app.use('/employee', employeeRoutes);

const CONNCTION_URL = 'mongodb+srv://jo_b:jhonny21@cluster0.bi5vu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNCTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
    console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));

//mongoose.set('useFindAndModify', false);