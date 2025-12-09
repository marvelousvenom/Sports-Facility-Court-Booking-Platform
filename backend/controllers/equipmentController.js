import Equipment from "../models/Equipment.js";

export const getEquipment = async (req, res) => {
  try {
    const items = await Equipment.find();
    res.json(items);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addEquipment = async (req, res) => {
  try {
    const { name, totalStock } = req.body;
    const equip = new Equipment({ name, totalStock });
    await equip.save();
    res.json({ message: "Equipment added", equip });
  } catch (err) {
    res.status(500).json(err);
  }
};
