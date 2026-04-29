require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');

// middlwares
app.use(express.json()); 

app.use('/products',productRoutes);

connectDB().then(()=>{
    app.listen(3000,()=>{
        console.log("Listening On Port 3000");
    });
});
