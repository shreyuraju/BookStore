import express, { request, response } from "express";
import { PORT, dbURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/bookRoute.js';
import cors from 'cors';

const app = express();

//middleware for parsing request body
app.use(express.json());

//Middleware fro handling CORS POLICY
//option 1: Allow All Origins with Default of cors(*)

app.use(cors());


//option 2: Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to MERN Stack');
});

app.use('/books', booksRoute);

mongoose
    .connect(dbURL)
    .then(() => {
        console.log('App is connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

