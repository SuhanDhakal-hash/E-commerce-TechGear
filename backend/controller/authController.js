const db = require('../config/db');
const bcrypt = require('bcryptjs');

// REGISTER
exports.register = async (req, res) => {
  const { c_name, c_email, c_password, phone, address } = req.body;

  try {
    db.query(
      'SELECT * FROM customer WHERE c_email = ?',
      [c_email],
      async (err, results) => {
        if (err) return res.status(500).json({ message: 'Server error' });

        if (results.length > 0) {
          return res.status(400).json({ message: 'Email already registered' });
        }

        const hashedPassword = await bcrypt.hash(c_password, 10);

        db.query(
          'INSERT INTO customer (c_name, c_email, c_password, phone, address) VALUES (?, ?, ?, ?, ?)',
          [c_name, c_email, hashedPassword, phone, address],
          (err, result) => {
            if (err) return res.status(500).json({ message: 'Registration failed' });
            return res.status(201).json({ message: 'Registration successful' });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// LOGIN
exports.login = (req, res) => {
  const { c_email, c_password } = req.body;

  db.query(
    'SELECT * FROM customer WHERE c_email = ?',
    [c_email],
    async (err, results) => {
      if (err) return res.status(500).json({ message: 'Server error' });

      if (results.length === 0) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const customer = results[0];

      const isMatch = await bcrypt.compare(c_password, customer.c_password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      req.session.user = {
        c_id: customer.c_id,
        c_name: customer.c_name,
        c_email: customer.c_email
      };

      return res.status(200).json({
        message: 'Login successful',
        user: req.session.user
      });
    }
  );
};

// LOGOUT
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ message: 'Logout failed' });
    res.status(200).json({ message: 'Logged out successfully' });
  });
};