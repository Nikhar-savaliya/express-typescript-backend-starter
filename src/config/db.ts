import mongoose from "mongoose";

import { config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("mongodb connected successfully")
    );
    mongoose.connection.on("error", () =>
      console.log("mongodb connection failed")
    );

    const connection = await mongoose.connect(config.mongodbURL as string);
  } catch (error) {
    console.log("mongoDB connection failed \n", error);
    process.exit(1);
  }
};

export default connectDB;
