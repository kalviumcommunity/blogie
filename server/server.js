const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Data = require("./schema.js");
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const {UserRouter} = require("./routes/user.js")
const app = express();
dotenv.config()
app.use(cors({
  origin : "http://localhost:5173",
  credentials : true
}));
app.use(cookieParser())
app.use(express.json());
app.use("/auth", UserRouter)

app.post("/data", async (req, res) => {
  const { author, email, heading, blog } = req.body;
  const newBlog = new Data({
    author,
    email,
    heading,
    blog,
  });
  await newBlog.save();
  return res.json({ status: true, message: "Blog is stored in DB" });
});

app.get("/getdata", async (req, res) => {
  Data.find()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("err is occured");
    });
});


app.listen(process.env.PORT || 3001, async () => {
  await mongoose.connect(
    "mongodb://127.0.0.1:27017/blogie"
  );
  console.log("server is running");
});
