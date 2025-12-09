import Booking from "../models/Booking.js";
import Court from "../models/Court.js";
import PricingRule from "../models/PricingRule.js";
import { checkCourtAvailability } from "../utils/availability.js";
import { calculatePrice } from "../utils/priceCalculator.js";

export const createBooking = async (req, res) => {
  try {
    const { courtId, coachId, equipmentCount, startTime, endTime } = req.body;

    const isFree = await checkCourtAvailability(courtId, startTime, endTime);
    if (!isFree) return res.status(400).json({ message: "Court unavailable" });

    const court = await Court.findById(courtId);
    const rules = await PricingRule.find();

    const breakdown = calculatePrice(court.basePrice, rules, new Date(startTime));
    breakdown.equipmentFee = equipmentCount * 5;  
    breakdown.total += breakdown.equipmentFee;

    const booking = new Booking({
      court: courtId,
      coach: coachId,
      equipmentCount,
      startTime,
      endTime,
      pricingBreakdown: breakdown
    });

    await booking.save();
    res.json({ message: "Booking confirmed", booking });

  } catch (err) {
    res.status(500).json(err);
  }
};
