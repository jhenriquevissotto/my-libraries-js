// framework
const express = require("express");
const app = express();

// CORS
const cors = require("cors");
app.use(cors());

// public
const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));

// server
const http = require("http");
const server = http.createServer(app);
server.listen(process.env.PORT || 3005);
