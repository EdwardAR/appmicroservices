const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('./model');
const app = express();
const PORT = 5000;

mongoose.connect('mongodb://mongo:27017/users', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.post('/users/register', async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.status(201).json({ message: 'Usuario creado con éxito' });
});

app.post('/users/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (!user) {
    return res.status(400).json({ error: 'Usuario o contraseña incorrectos' });
  }

  const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
