import { Request, Response, Router } from "express";

import { userController } from "../controllers/user.controller";
import { userMiddleware } from "../middlewares/user.middleware";
import { User } from "../models/User.model";

const router = Router();

router.get("/", userController.getAll);

router.get("/:userId", userMiddleware.getByIdAndThrow, userController.getById);

router.post("/", userController.create);

router.put("/:userId", userController.update);

router.delete("/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;

  await User.deleteOne({ _id: userId });

  res.status(200).json({
    message: "User deleted",
  });
});

export const userRouter = router;
