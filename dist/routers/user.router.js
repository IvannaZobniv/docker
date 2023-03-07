"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const user_middleware_1 = require("../middlewares/user.middleware");
const User_model_1 = require("../models/User.model");
const router = (0, express_1.Router)();
router.get("/", user_controller_1.userController.getAll);
router.get("/:userId", user_middleware_1.userMiddleware.getByIdAndThrow, user_controller_1.userController.getById);
router.post("/", user_controller_1.userController.create);
router.put("/:userId", user_controller_1.userController.update);
router.delete("/:userId", async (req, res) => {
    const { userId } = req.params;
    await User_model_1.User.deleteOne({ _id: userId });
    res.status(200).json({
        message: "User deleted",
    });
});
exports.userRouter = router;
