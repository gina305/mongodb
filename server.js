//Import dotenv and load environment variables
require('dotenv').config()


//Import express library
const express = require('express');
const { default: mongoose } = require('mongoose');

//Create an app using the library
const app = express();


//
app.use(express.json())

//ROUTES

const notesRouter = require('./routes/notes');

app.use(('/notes'), notesRouter);


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser:true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));

db.once('open',()=> console.log('Connected to database'));

app.listen(3000, () => console.log('Server Started'));

// Route for database


//Route to ZAP Scanner

