const express = require("express");
const router = express.Router();

router.post("/data", async (req, res) => {
    const { author, email, heading, blog } = req.body;
    const newBlog = new Data({
        author,
        email,
        heading,
        blog
    });
    await newBlog.save();
    return res.json({ status: true, message: "Blog is stored in database" });
});

module.exports = router;
