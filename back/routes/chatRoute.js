const express = require("express");
const router = express.Router();
const { Conversations } = require("../models/index");
const { Messages } = require("../models/index");
const { Participants } = require("../models/index");

// Create a new chat
router.post("/create", async (req, res) => {
  try {
    const { senderId, receiveId, message } = req.body;

    // Create a new chat
    const conversation = await Conversations.create();

    // Create participants
    const participants = await Participants.bulkCreate([
      { conversationId: conversation.id, userId: senderId },
      { conversationId: conversation.id, userId: receiveId },
    ]);

    // Create a new message
    const newMessage = await Messages.create({
      conversationId: conversation.id,
      senderId: senderId,
      content: message,
    });

    res.json({ conversation, participants, newMessage });
  } catch (error) {
    console.log(error);
    if (error.name === "SequelizeValidationError") {
      error.errors.forEach((err) => {
        res.status(401).json({ message: err.message });
      });
    } else {
      console.error("Server Error:", error);
      res
        .status(500)
        .json({ message: "Failed to create a new chat try later!" });
    }
  }
});

// send message
router.post("/send", async (req, res) => {
  try {
    const { conversationId, senderID, message } = req.body;

    // Create a new message
    const newMessage = await Messages.create({
      conversationId,
      senderId: senderID,
      message,
    });

    res.json({ newMessage });
  } catch (error) {
    console.log(error);
    if (error.name === "SequelizeValidationError") {
      error.errors.forEach((err) => {
        res.status(401).json({ message: err.message });
      });
    } else {
      console.error("Server Error:", error);
      res.status(500).json({ message: "Failed to send message try later!" });
    }
  }
});
module.exports = router;
