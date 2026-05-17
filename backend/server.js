const express = require('express');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Session
app.use(session({
  secret: process.env.SESSION_SECRET || 'techstore_secret',
  resave: false,
  saveUninitialized: false
}));

// Routes
app.use('/auth', authRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('TechStore Backend Running ✅');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 3000}`);
});