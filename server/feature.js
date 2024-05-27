const express = require("express")
const bcrypt = require("bcrypt");
const { User } = require("../models/User.js");
const router = express.Router();
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
