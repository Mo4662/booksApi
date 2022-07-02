const mongoose = require("mongoose");
const Author = require("./author");


//Book Schema
const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlenght: 50
    },
    author:Author.schema,
    genre: {
        type: String,
        required: true,
        minlenght: 3,
        maxlenght:50
    }
});

module.exports = mongoose.model("Book",BookSchema);