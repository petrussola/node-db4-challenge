const express = require("express");
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");
const receipesRouter = require("./data/helpers/recipesRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// ROUTER
server.use("/api/recipes", receipesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: `Hello from dummy endpoint` });
});

module.exports = server;
