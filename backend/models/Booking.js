import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  court: { type: mongoose.Schema.Types.ObjectId, ref: "Court" },
  coach: { type: mongoose.Schema.Types.ObjectId, ref: "Coach", default: null },
  equipmentCount: Number,
  startTime: Date,
  endTime: Date,
  pricingBreakdown: {
    basePrice: Number,
    peakFee: Number,
    weekendFee: Number,
    equipmentFee: Number,
    total: Number
  }
});

export default mongoose.model("Booking", BookingSchema);
