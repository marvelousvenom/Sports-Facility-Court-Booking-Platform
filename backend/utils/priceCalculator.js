export const calculatePrice = (basePrice, rules, startTime) => {
  let total = basePrice;
  let breakdown = {
    basePrice,
    peakFee: 0,
    weekendFee: 0,
    equipmentFee: 0,
    total: 0
  };

  const hour = startTime.getHours();
  const day = startTime.getDay();

  rules.forEach(rule => {
    if (rule.type === "weekend" && (day === 0 || day === 6)) {
      total += rule.surcharge;
      breakdown.weekendFee = rule.surcharge;
    }

    if (rule.type === "peakHour") {
      if (hour >= rule.startHour && hour < rule.endHour) {
        const fee = basePrice * rule.multiplier;
        total += fee;
        breakdown.peakFee = fee;
      }
    }
  });

  breakdown.total = total;
  return breakdown;
};
