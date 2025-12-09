import mongoose from "mongoose";

const PricingRuleSchema = new mongoose.Schema({
  name: String,
  type: { type: String, enum: ["weekend", "peakHour", "holiday"] },
  multiplier: Number,
  surcharge: Number,
  startHour: Number,
  endHour: Number
});

export default mongoose.model("PricingRule", PricingRuleSchema);
