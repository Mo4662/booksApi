const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

//Connect to  mongodb atlas

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true}).then(()=>{
    console.log("connected to mongodb atlas");
}).catch(error => {
    console.log("error connecting to mongodb atlas", error);
})

app.listen(PORT,()=>{
    console.log("Server is listening on port " + PORT);
}
)