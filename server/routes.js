const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models/User.js");
const router = express.Router();
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv")

router.post("/data", async (req, res) => {
    const { author, email, heading, blog } = req.body;
    const newBlog = new Data({ 
        author,
        email,
        heading,
        blog
    });
    await newBlog.save();
    return res.json({ status: true, message: "Blog is stored in the database" }); // Corrected the message
});

router.post("/forgotpassword", async (req, res) => {
    const { email } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User is not registered" });
      }
      const token = jwt.sign({ id: user._id }, process.env.KEY, {
        expiresIn: "5m",
      });
  
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "blogiepost@gmail.com",
          pass: "vuvmzygkwombzvur",
        },
      });
      const mailOptions = {
        from: "blogiepost@gmail.com",
        to: email,
        subject: "Reset password",
        text: `Hello Blogie user
        
        we made a link to reset your password click here!
  
        http://localhost:5173/resetpass/${token}`,
      };
      await transporter.sendMail(mailOptions);
      return res.json({ status: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending password reset email:", error);
      return res
        .status(500)
        .json({ message: "Error sending password reset email" });
    }
});
module.exports = router;
