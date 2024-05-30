const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function (req, res) {
  if (req.url === "/favicon.ico") {
    const faviconPath = path.join(__dirname, "assets/favicon.ico");
    fs.readFile(faviconPath, function (err, data) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Internal Server Error");
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "image/x-icon" });
      res.write(data);
      res.end();
    });
  } else {
    res.write("On the way to being a fullstack engineer!");
    res.end();
  }
});

server.listen(3000);

console.log("server started");
