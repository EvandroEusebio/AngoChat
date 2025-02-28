const express = require("express");
const router = express.Router();
const { User, Conversations, Messages } = require("../models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const { where } = require("sequelize");
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
      console.error("Server Error:", error);
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

// Show all chats of the user
router.get("/chats/:id", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
      attributes: ["id", "name"],
      include: [
        {
          model: Conversations,
          as: "chats",
          attributes: ["id", "type"],
          through: { attributes: [] },
          include: [
            {
              model: User,
              as: "participants",
              attributes: ["id", "name", "picture", "phone"],
              through: { attributes: [] }, // Oculta os dados da tabela pivot (Participants)
            },
            {
              model: Messages,
              as: "messages",
              attributes: ["id", "content", "senderId", "createdAt"],
              order: [["createdAt", "DESC"]], // Ordena por data de criação, pegando a mais recente primeiro
              limit: 1,
            },
          ],
        },
      ],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.json({userChats: user});
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve user." });
  }
});

module.exports = router;
