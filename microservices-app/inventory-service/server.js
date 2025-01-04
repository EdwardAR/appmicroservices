const express = require('express');
const mongoose = require('mongoose');
const Product = require('./model');
const app = express();
const PORT = 7000;

mongoose.connect('mongodb://mongo:27017/inventory', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Inventory service running on port ${PORT}`);
});
