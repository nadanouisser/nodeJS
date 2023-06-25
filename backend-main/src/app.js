const express = require("express");
const connection = require("./config/DatabaseConfig");
// Import Routes
const userRoute = require("./routes/user.route");
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/pi",()=>{
    console.log("Connected to Database");
});


//connection.getConnections();
const app = express();

// Route MiddleWares
app.use("/api/user", userRoute);

//test git

module.exports = app;
