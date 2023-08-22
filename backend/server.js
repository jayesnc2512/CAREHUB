import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import cors from 'cors'
dotenv.config();


const app = express()
// databus.config
connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoutes);

// rest api
app.get('/', (req, res) => res.send('Hello World!'))

const port = process.env.PORT;
app.listen(port, () => console.log(`Example app listening on port ${port}!`.bgBlue.red))