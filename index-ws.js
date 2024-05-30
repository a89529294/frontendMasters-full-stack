const express = require("express");
const server = require("http").createServer();
const app = express();

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: __dirname });
});

server.on("request", app);
server.listen(3000, function () {
  console.log("server started on port 3000");
});

/** web sockets */
const WebSocketServer = require("ws").Server;
const wss = new WebSocketServer({ server });

wss.on("connection", function (ws) {
  const numClients = wss.clients.size;

  console.log("clients connected: ", numClients);
  wss.broadcast(`Current visitor count: ${numClients}`);

  if (ws.readyState === ws.OPEN) ws.send("welcome to my server");
  ws.on("close", function () {
    wss.broadcast(`Current visitor count: ${numClients}`);
    console.log("a client has disconnected");
  });
});

wss.broadcast = (msg) => {
  wss.clients.forEach((ws) => ws.send(msg));
};
