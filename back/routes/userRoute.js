const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
//const authenticateToken = require("../middlewares/auth");

const JWT_SECRET = process.env.APP_KEY;


// Create a new user
router.post("/signin", async (req, res) => {
  try {
    const user = await User.create(req.body);
    // Create an token JWT
    const token = jwt.sign(
      { userId: user.id, username: user.name },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ user, token });
  } catch (error) {
    console.log(error);
    if (error.name === "SequelizeValidationError") {
      error.errors.forEach((err) => {
        res.status(401).json({ message: err.message });
      });
    } else {
      console.error("Server Error:", error);
      res.status(500).json({ message: "Failed to create Client try later!" });
    }
  }
});

router.post("/login", async (req, res) => {
  const { phone, password } = req.body;
  try {
    const user = await User.findOne({ where: { phone } });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Verify if password is valid
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Create an token JWT
    const token = jwt.sign(
      { userId: user.id, username: user.name },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});

/*
router.get("/", async (req, res) => {
  try {
    const user = await User.findAll({
      include: {
        model: Pix,
        as: "pixs",
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed User not found." });
  }
});
*/


module.exports = router;
