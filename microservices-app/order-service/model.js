const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ name: String, quantity: Number }],
});

module.exports = mongoose.model('Order', orderSchema);
