"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const User_model_1 = require("./models/User.model");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/users", async (req, res) => {
    const users = await User_model_1.User.find();
    return res.json(users);
});
app.get("/users/:userId", async (req, res) => {
    const { userId } = req.params;
    const user = await User_model_1.User.findById(userId);
    return res.json(user);
});
app.post("/users", async (req, res) => {
    const body = req.body;
    const user = await User_model_1.User.create(body);
    res.status(201).json({
        message: "User created!",
        data: user,
    });
});
app.put("/users/:userId", async (req, res) => {
    const { userId } = req.params;
    const user = req.body;
    const updatedUser = await User_model_1.User.updateOne({ _id: userId }, { ...user });
    res.status(200).json({
        message: "User updated",
        data: updatedUser,
    });
});
app.delete("/users/:userId", async (req, res) => {
    const { userId } = req.params;
    await User_model_1.User.deleteOne({ _id: userId });
    res.status(200).json({
        message: "User deleted",
    });
});
app.get("/welcome", (req, res) => {
    res.send("WELCOME");
});
const PORT = 5100;
app.listen(PORT, () => {
    mongoose_1.default.connect("mongodb://127.0.0.1:27017/mongoDb");
    console.log(`Server has started on PORT ${PORT} 🚀🚀🚀`);
});
