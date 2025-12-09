import express from "express";
import { getCoaches, addCoach } from "../controllers/coachController.js";

const router = express.Router();

router.get("/", getCoaches);
router.post("/", addCoach);

export default router;
