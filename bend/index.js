const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./router/userRoute');
require('dotenv').config();  // Load the environment variables from the .env file

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRoute);

// Use environment variables for MongoDB URI and port
const URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8000;  // Default to 8000 if PORT is not defined in .env

mongoose.connect(URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            console.log('MongoDB is connected successfully');
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
