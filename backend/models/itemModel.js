import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: String,
  date: { type: Date, default: Date.now },
  location: String,
  contactInfo: String,
  status: { type: String, enum: ["lost", "found"], required: true }
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
