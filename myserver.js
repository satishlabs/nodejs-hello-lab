const express = require("express"); //use to build the rest API
//const mongoose = require("mongoose"); //connect with database mongodb
const dotenv = require("dotenv"); //load the env file

//Load the enviornment from .env.jlc file
dotenv.config({path: ".env.jlc"});


const app = express(); //creating express object
const PORT = process.env.PORT || 5500;


//Set Response for requestURI -/hello

app.get("/hello", (req,res)=>{
    console.log("Request for - /hello");
    return res.send("Hello Satish -- App is ready for use");
});


//Start express server on port 5500
app.listen(PORT, () =>{
    console.log("Express server is running at http://localhost:5500");
    console.log("Press CTRL -C to stop \n");
});