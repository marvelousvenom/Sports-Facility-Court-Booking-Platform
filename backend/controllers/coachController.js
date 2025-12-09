import Coach from "../models/Coach.js";

export const getCoaches = async (req, res) => {
  try {
    const coaches = await Coach.find();
    res.json(coaches);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addCoach = async (req, res) => {
  try {
    const { name, sport } = req.body;
    const coach = new Coach({ name, sport });
    await coach.save();
    res.json({ message: "Coach added", coach });
  } catch (err) {
    res.status(500).json(err);
  }
};
