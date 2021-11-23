const express = require("express");
require("express-async-errors");
const cors = require("cors");
const app = express();

const MainRouter = require("./controllers");

const { requestLogger } = require("./utils/requestlogger");
const { errorHandler } = require("./utils/errorHandler");
const { unknownEndpoint } = require("./utils/unknownEndPoint");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  // intercept OPTIONS method
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
});

app.use(express.json());

app.use(requestLogger);

app.use("/api", MainRouter);

app.use(unknownEndpoint);

app.use(errorHandler);

module.exports = app;
