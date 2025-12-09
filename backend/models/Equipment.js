import mongoose from "mongoose";

const EquipmentSchema = new mongoose.Schema({
  name: String,
  totalStock: Number
});

export default mongoose.model("Equipment", EquipmentSchema);
