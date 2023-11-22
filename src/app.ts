import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRoutes } from "./app/config/modules/users/users.routes";

const app: Application = express();
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/users", UserRoutes)

const mainController = (req: Request, res: Response) => {
  res.send("Welcome to The 2nd Assignment");
};

app.get("/", mainController);

export default app;
