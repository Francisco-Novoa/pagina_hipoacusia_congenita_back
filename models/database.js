const { MONGOPASS, MONGOUSER, MONGOHOST } = require("../utils/config");

const mongoose = require("mongoose");

const { info, error } = require("../utils/logger");

const connection = (async function () {
  info("connecting to ", "mongoDB");
  info("-----");
  const mongoURI = `mongodb+srv://${MONGOUSER}:${MONGOPASS}@${MONGOHOST}`;
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    info("connected to MongoDB!");
    info("-----");
  } catch (e) {
    error("error connecting to MongoDB", e.message);
  }
})();
