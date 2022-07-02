const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 50
    },
    age: {
        type: Number,
        min:10,
        max: 100
    }
});

module.exports = mongoose.model("Author", AuthorSchema);