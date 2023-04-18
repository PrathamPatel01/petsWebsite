const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors')
const app = express();

// const User = require('./model/user');

// Connect to MongoDB
mongoose.connect('mongodb+srv://pnp220502:prathampatel@petshop.hek1flg.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// User schema
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});

// User model
const User = mongoose.model('User', userSchema);

// Middleware
app.use(express.json(),cors());

// Registration route
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    // Create JWT token
    const token = jwt.sign({ email }, 'secret');

    res.status(201).json({ message: 'User registered', token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign({ email }, 'secret');

    res.status(200).json({ message: 'Logged in', token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start server
const PORT = 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
