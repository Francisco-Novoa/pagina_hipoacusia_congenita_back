const config = require("./utils/config");
const http = require("http");

require("./models/database");

const app = require("./app");

const { info } = require("./utils/logger");

const server = http.createServer(app);

server.listen(config.PORT, () => {
  info(`SERVER RUNNING ON PORT ${config.PORT}`);
  info("-----");
});
