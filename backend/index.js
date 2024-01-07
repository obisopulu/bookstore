import express, { request, response } from "express";
import mongoose from "mongoose";

import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./model/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors'

const app = express()

app.use(express.json());

// Allow all origins
app.use(cors());
// custom origins
//app.use(
//    cors({
//        origin: 'http://localhost:3000',
//        methods: ['GET', 'POST', 'PUT', 'DELETE'],
//        allowedHeaders: ['Content-Type'],
//    })
//);

app.get('/', (request, response) => {
    console.log('request')
    return response.status(234).send('welcome to mern stack')
})

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('app connected to database')
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })