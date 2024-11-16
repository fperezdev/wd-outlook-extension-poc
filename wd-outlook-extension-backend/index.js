const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

const messages = require("./messages");

const configuration = {
  sla: [
    {
      label: "0 - 1 horas",
      value: 0,
    },
    {
      label: "1 - 2 horas",
      value: 60,
    },
    {
      label: "2+ horas",
      value: 120,
    },
  ],
};

io.on("connection", (socket) => {
  console.log("New client connected", socket.id);
  socket.emit("messages", { data: { messages, configuration } });

  socket.on("action", (msg) => {
    if (msg.action === "connect")
      socket.emit("messages", { data: { messages } });
    console.log("Received action:", msg);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
