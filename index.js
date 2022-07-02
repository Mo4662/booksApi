const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const booksRoute = require("./routes/books");

const app = express();

const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use("/api/books",booksRoute);

//Connect to  mongodb atlas
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true}).then(()=>{
    console.log("connected to mongodb atlas");
}).catch(error => {
    console.log("error connecting to mongodb atlas", error);
})

//Connect to server
app.listen(PORT,()=>{
    console.log("Server is listening on port " + PORT);
}
)