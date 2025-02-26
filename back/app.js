const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("node:http");
const userRoute = require("./routes/userRoute");
const dotenv = require("dotenv");
dotenv.config();
let cors = require("cors");
let port = process.env.PORT || 5000;

const app = express();
const server = createServer(app);
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/user", userRoute);

const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
/*
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat", (msg) => {
    console.log("User message:  " + msg);
    io.emit("chat", msg);
  });

  socket.join("room1");

  io.to("room1").emit("chat", "Hello CONECTS");

  socket.leave("room1");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  })
});
;*/

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
