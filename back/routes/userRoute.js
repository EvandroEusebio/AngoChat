const express = require("express");
const router = express.Router();
const { User } = require("../models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();
//const authenticateToken = require("../middlewares/auth");

const JWT_SECRET = process.env.JWT_SECRET_KEY;

// Create a new user
router.post("/signin", async (req, res) => {
  try {
    const { name, lastName, phone, about, age, picture, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await User.create({
      name,
      lastName,
      phone,
      about,
      age,
      picture,
      password: hashedPassword,
    });

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
      console.error("Server Error:", error.message);
      res.status(500).json({
        message: "Failed to create Client try later!" + error.message,
      });
    }
  }
});

router.post("/login", async (req, res) => {
  const { phone, password } = req.body;
  try {
    const user = await User.findOne({ where: { phone } });

    // Verify if user exists
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Verify if password is valid
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
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
