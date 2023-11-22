import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
app.use(express.json());
app.use(cors());

//application routes

const mainController = (req: Request, res: Response) => {
  res.send("Welcome to The 2nd Assignment");
};

app.get("/", mainController);

export default app;
