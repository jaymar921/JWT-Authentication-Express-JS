const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json()); // allow JSON to be in requests

const server = app.listen(3000, () => {
  console.log("API is running on port 3000");
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

// Export the server
module.exports = server;
