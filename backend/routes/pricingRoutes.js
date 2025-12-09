import express from "express";
import { getPricingRules, addPricingRule } from "../controllers/pricingController.js";

const router = express.Router();

router.get("/", getPricingRules);
router.post("/", addPricingRule);

export default router;
