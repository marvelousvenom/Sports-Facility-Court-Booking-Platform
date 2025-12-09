import Booking from "../models/Booking.js";

export const checkCourtAvailability = async (courtId, startTime, endTime) => {
  const conflict = await Booking.findOne({
    court: courtId,
    $or: [
      { startTime: { $lt: endTime, $gte: startTime } },
      { endTime: { $gt: startTime, $lte: endTime } }
    ]
  });

  return !conflict;
};
