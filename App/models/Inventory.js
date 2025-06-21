const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  _id: String,
  name: String,
  quantity: Number,
  price: Number,
  category: [String],
  supplier: String
}, { _id: false });

module.exports = mongoose.model('Inventory', inventorySchema);
