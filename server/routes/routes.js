const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models/User.js");
const router = express.Router();
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv")


router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body)
  try {
    const user = await User.findOne({ email:email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashPassword,
    });
    await newUser.save();
    return res.json({ status: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "Error registering user" });
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log(user)
    if (!user) {
      return res.status(400).json({ message: "User is not registered" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Password is incorrect" });
    }
    const token = jwt.sign({ username: user.username }, "JWTCODE", { expiresIn: "1h" });
    res.cookie('authToken', token, { maxAge: 3600000});
    res.cookie("username", user.username, {maxAge: 3600000})
    res.send("Login successfull")

  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ message: "Error logging in" });
  }
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

router.post("/resetpassword/:token", async (req, res) => {
  const token = req.params.token;
  const { password } = req.body;w
  try {
    const decoded = await jwt.verify(token, process.env.KEY);
    const id = decoded.id;
    const hashPassword = await bcrypt.hash(password, 10);
    await User.findByIdAndUpdate({ _id: id }, { password: hashPassword });
    return res.json({ status: true, message: "Your password is updated" });
  } catch (err) {
    console.error("Error occurred while resetting password:", err);
    return res.status(500).json({ message: "Error resetting password" });
  }
});

module.exports = { UserRouter: router };