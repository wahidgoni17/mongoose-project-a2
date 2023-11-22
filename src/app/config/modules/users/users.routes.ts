import { Router } from "express";
import { UserControllers } from "./users.controller";

const router = Router();

router.post("/", UserControllers.createAUser);

export const UserRoutes = router