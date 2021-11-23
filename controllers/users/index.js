const bcrypt = require("bcrypt");
const config = require("../../utils/config");
const jwt = require("jsonwebtoken");

const User = require("../../models/users");

const usersRouter = require("express").Router();

usersRouter.post("/", async (request, response) => {
  const { password, username } = request.body;
  if (!password || !username)
    return response.status(400).send({ error: "password or username missing" });
  if (password.length <= 6)
    return response.status(400).send({ error: "password length is too short" });
  if (username.length <= 6)
    return response.status(400).send({ error: "username length is too short" });
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const user = new User({ username, passwordHash });
  await user.save();

  const token = jwt.sign(
    { username: user.username, id: user._id },
    config.SECRET
  );

  response.status(201).json({ token, user: user.username, id: user.id });
});

module.exports = usersRouter;
