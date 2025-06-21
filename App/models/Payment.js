const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  _id: String,
  amount: Number,
  payment_method: String,
  transaction_date: Date,
  customer_id: String
}, { _id: false });

module.exports = mongoose.model('Payment', paymentSchema);
