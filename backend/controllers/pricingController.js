import PricingRule from "../models/PricingRule.js";

export const getPricingRules = async (req, res) => {
  try {
    const rules = await PricingRule.find();
    res.json(rules);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addPricingRule = async (req, res) => {
  try {
    const { name, type, multiplier, surcharge, startHour, endHour } = req.body;

    const rule = new PricingRule({
      name,
      type,
      multiplier,
      surcharge,
      startHour,
      endHour
    });

    await rule.save();
    res.json({ message: "Pricing rule added", rule });
  } catch (err) {
    res.status(500).json(err);
  }
};
