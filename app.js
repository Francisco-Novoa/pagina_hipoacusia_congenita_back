const express = require("express");
require("express-async-errors");
const cors = require("cors");
const app = express();

const MainRouter = require("./controllers");

const { requestLogger } = require("./utils/requestlogger");
const { errorHandler } = require("./utils/errorHandler");
const { unknownEndpoint } = require("./utils/unknownEndPoint");

app.use(cors());

app.use(express.json());

app.use(requestLogger);

app.use("/api", MainRouter);

app.use(unknownEndpoint);

app.use(errorHandler);

module.exports = app;
