const MainRouter = require("express").Router();
const UsersRouter = require("./users");
const LoginRouter = require("./login");
const SubjectRouter = require("./subject");
const { TokenValidation } = require("../utils/tokenValidation");

//login route
MainRouter.use("/login", LoginRouter);
MainRouter.use("/users", TokenValidation, UsersRouter);
MainRouter.use("/subject", TokenValidation, SubjectRouter);

module.exports = MainRouter;
