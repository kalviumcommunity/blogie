const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const Data = require("./schema.js");
const { UserRouter } = require("../../blogie/server/routes/user");

const app = express()
app.use(express.json())
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
  }));

app.post("/data", async (req,res) => {
    const {author, email, heading, blog} = req.body;
    const newBlog = new Data({
        author, 
        email,
        heading,
        blog
    })
    await newBlog.save()
    return res.json({status: true, message: "Blog is stored in database"})
})

module.exports = { UserRouter: app};