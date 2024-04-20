import { config as envConfig } from "dotenv";

envConfig();

const _config = {
  port: process.env.PORT,
  mongodbURL: process.env.MONGO_CONNECTION_STRING,
  env: process.env.NODE_ENV,
};

export const config = Object.freeze(_config);
