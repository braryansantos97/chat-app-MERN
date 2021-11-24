const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

dotenv.config();

connectDB();


app.get('/', (req,res) => {
    res.send("Apii is running")
})



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});