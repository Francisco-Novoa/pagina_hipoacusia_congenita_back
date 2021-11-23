//here go the imports
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../../utils/config");

// import user model
const User = require("../../models/users");

// creates the router
const loginRouter = require("express").Router();

loginRouter.post("/", async (request, response) => {
  try {
    const { username, password } = request.body;
    if (!username || !password)
      return response
        .status(401)
        .json({ error: "username or password missing" });
    const user = await User.findOne({ username: username });
    if (!user)
      return response
        .status(401)
        .json({ error: "invalid username or password" });
    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match)
      return response
        .status(401)
        .json({ error: "invalid username or password" });
    const token = jwt.sign(
      { username: user.username, id: user.id },
      config.SECRET
    );

    response.status(200).send({ token, username: user.username, id: user.id });
  } catch (error) {
    console.error(error);
  }
});

module.exports = loginRouter;
