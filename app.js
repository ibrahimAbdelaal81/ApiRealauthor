require('dotenv').config();
const Server = require("./src/server");

const { mongo } = require("./src/database");
const config = require("./src/config");
const { api } = config;
const instance = new Server({
  name: api.name,
  port: api.port,
  onStart: async () => {
    await mongo.initialize(config.mongo);
  },
  onEnd: async () => {
    await mongo.close();
  },
});

instance.start();
