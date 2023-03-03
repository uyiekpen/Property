import express, { Application, Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";

import connectDB from "./data/db";
import userRouter from "./routes/userroutes";
import propertyRouter from "./routes/propertyroutes";

const proc: any = config().parsed;

const port: Number = proc.PORT;

const app: Application = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use("/api", userRouter);
app.use("/api", propertyRouter);

const StartServer = async () => {
  try {
    connectDB(proc.MONGO_DB);

    app.listen(port, (): void => {
      console.log(`welcome to port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

StartServer();
