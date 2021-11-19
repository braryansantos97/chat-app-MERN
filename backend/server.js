const express = require('express');
const app = express();
const dotenv = require('dotenv');
const PORT = process.env.PORT || 8000;

dotenv.config();


app.get('/', (req,res) => {
    res.send("Apii is running")
})



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});