const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add any additional fields if necessary
});

module.exports = mongoose.model('User', userSchema);
