const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutees');
const app = express();

app.use(express.json());
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/startoonlabs")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

    app.use('/', userRoutes);
   app.use('/admin',adminRoutes);
app.listen(5000,()=>{
    console.log("Server is runnig ");
})