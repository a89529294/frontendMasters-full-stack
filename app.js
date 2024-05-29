const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url.startsWith("/api")) {
    const responseObject = { message: "This is a JSON response" };
    res.writeHead(200, {
      "Content-Type": "application/json",
      "access-control-allow-origin": "http://localhost:5173, http://acdev.lol",
    });
    res.end(JSON.stringify(responseObject));
  } else {
    res.write("On the way to being a fullstack engineer!");
    res.end();
  }
});

server.listen(3000);

console.log("server started");
