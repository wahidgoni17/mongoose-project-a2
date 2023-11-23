import { Router } from "express";
import { UserControllers } from "./users.controller";

const router = Router();

router.post("/", UserControllers.createAUser);

router.get("/", UserControllers.getAllUsers);

router.get("/:userId", UserControllers.getAUser);

router.get("/:userId/orders", UserControllers.getAllOrdersOfAUser);

router.get("/:userId/orders/total-price", UserControllers.getTotalPriceOfAUserOrders);

router.put("/:userId", UserControllers.updateAUser);

router.delete("/:userId", UserControllers.deleteAUser);

export const UserRoutes = router;
