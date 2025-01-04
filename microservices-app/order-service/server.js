const express = require('express');
const mongoose = require('mongoose');
const Order = require('./model');
const app = express();
const PORT = 6000;

mongoose.connect('mongodb://mongo:27017/orders', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.post('/orders', async (req, res) => {
  const { userId, products } = req.body;
  const order = new Order({ userId, products });
  await order.save();
  res.status(201).json({ message: 'Pedido creado con éxito', order });
});

app.listen(PORT, () => {
  console.log(`Order service running on port ${PORT}`);
});
