import express from "express";
import { addContactDetail } from "../controllers/contactController.js";
const router = express.Router();

router.post("/", addContactDetail); //add auth middleware

export default router;
