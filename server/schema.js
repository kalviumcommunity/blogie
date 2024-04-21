const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    blog: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Data", dataSchema);
