import Item from "../models/itemModel.js";

export const addItem = async (req, res) => {
  console.log("Received:", req.body); // Debug incoming data
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
