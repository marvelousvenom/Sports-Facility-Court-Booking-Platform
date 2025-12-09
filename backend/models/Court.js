import mongoose from "mongoose";

const CourtSchema = new mongoose.Schema({
  name: String,
  type: { type: String, enum: ["indoor", "outdoor"] },
  basePrice: Number
});

export default mongoose.model("Court", CourtSchema);
