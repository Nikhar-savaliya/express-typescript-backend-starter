import express, { NextFunction, Request, Response } from "express";

import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

// routes
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: "hello world" });
});

// Global Error Handler
app.use(globalErrorHandler);

export default app;
