const mongoose = require('mongoose');

const promoSchema = new mongoose.Schema({
  _id: String,
  name: String,
  period: Number,
  daily_sales: [Number],
  discount_percentage: Number,
  active: Boolean
}, { _id: false });

module.exports = mongoose.model('Promo', promoSchema);
