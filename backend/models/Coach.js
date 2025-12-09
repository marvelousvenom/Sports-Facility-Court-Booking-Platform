import mongoose from "mongoose";

const CoachSchema = new mongoose.Schema({
  name: String,
  sport: String,
  isAvailable: { type: Boolean, default: true }
});

export default mongoose.model("Coach", CoachSchema);
