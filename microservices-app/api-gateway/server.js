const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// API Routes
app.post('/users/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const response = await axios.post('http://user-service:5000/users/register', { username, password });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Error en el servicio de usuarios' });
  }
});

app.post('/users/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const response = await axios.post('http://user-service:5000/users/login', { username, password });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Error en el servicio de usuarios' });
  }
});

app.post('/orders', async (req, res) => {
  const { userId, products } = req.body;
  try {
    const response = await axios.post('http://order-service:6000/orders', { userId, products });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Error en el servicio de pedidos' });
  }
});

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
