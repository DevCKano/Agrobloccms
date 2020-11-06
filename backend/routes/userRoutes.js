import express from "express";
import { registerUser, authuser } from "../controllers/userController.js";
const router = express.Router();

router.post("/", registerUser);
router.post("/login", authuser);

export default router;
