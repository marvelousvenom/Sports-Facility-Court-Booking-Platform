import Court from "../models/Court.js";

export const getCourts = async (req, res) => {
  try {
    const courts = await Court.find();
    res.json(courts);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addCourt = async (req, res) => {
  try {
    const { name, type, basePrice } = req.body;
    const court = new Court({ name, type, basePrice });
    await court.save();
    res.json({ message: "Court added", court });
  } catch (err) {
    res.status(500).json(err);
  }
};
