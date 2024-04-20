import { config as envConfig } from "dotenv";

envConfig();

const _config = {
  port: process.env.PORT,
};

export const config = Object.freeze(_config);
