import express from "express";

import { createUser } from "../controllers/user";

const userRouter = express.Router();

// routes
userRouter.post("/register", createUser);

export default userRouter;
