const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

mongoose.connect("mongodb://localhost:27017/blogie")

app.use(express.json())

app.listen(3001, () => {
    console.log("server is running")
})