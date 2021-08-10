const express = require("express");
const cors = require("cors");

const testRouter = require("./components/TestRoute/test.router");
const filesRouter = require("./components/CHATFiles/chat_files.router");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const { API_TOKEN } = require("./config");

const app = express();
app.use(cors());
app.use(express.json());
app.use(function validateBearerToken(req, res, next) {
  const authToken = req.get("Authorization");
  if (!authToken || !API_TOKEN || authToken.split(" ")[1] !== API_TOKEN) {
    return res.status(401).json({ error: "Unauthorized access request" });
  }
  next();
});

app.use("/test", testRouter);
app.use("/files", filesRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
