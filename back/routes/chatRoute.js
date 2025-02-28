const express = require("express");
const router = express.Router();
const {
  Conversations,
  Messages,
  Participants,
  User,
} = require("../models/index");

// Create a new chat
router.post("/create", async (req, res) => {
  try {
    const { senderId, receiveId, message } = req.body;

    // verify if sender and receiver are the same
    if (senderId === receiveId) {
      return res.status(400).json({ message: "You can't chat with yourself!" });
    }

    // verify if user (sender or received) exists
    const isSender = await User.findOne({ where: { id: senderId } });
    const isReceive = await User.findOne({ where: { id: receiveId } });

    if (!isSender || !isReceive) {
      return res.status(400).json({ message: "User not exist!" });
    }

    // Create a new chat
    const conversation = await Conversations.create();

    console.log(conversation);

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
    const { conversationId, senderId, message } = req.body;

    // verify if user (sender) exists
    const isSender = await User.findOne({ where: { id: senderId } });

    if (!isSender) {
      return res.status(400).json({ message: "User not exist!" });
    }

    // verify if conversation exists
    const isConversation = await Conversations.findOne({
      where: { id: conversationId },
    });

    if (!isConversation) {
      return res.status(400).json({ message: "Conversation not exist!" });
    }

    // Create a new message
    const newMessage = await Messages.create({
      conversationId: conversationId,
      senderId: senderId,
      content: message,
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

// show all messages of a chat
router.get("/messages/:chatId", async (req, res) => {
  try {
    const messages = await Messages.findAll({
      where: { conversationId: req.params.chatId },
      include: [
        {
          model: User,
          as: "sender",
          attributes: ["id", "name"],
        },
      ],
    });

    res.json({ messages });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to show messages try later!" });
  }
});
module.exports = router;
