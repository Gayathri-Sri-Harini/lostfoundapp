const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: String,
  date: { type: Date, default: Date.now },
  location: String,
  contactInfo: String,
  status: { type: String, enum: ['lost', 'found'], required: true }
});

module.exports = mongoose.model('Item', itemSchema);
