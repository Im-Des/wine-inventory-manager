const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your User Model

const userSchema = new mongoose.Schema({
	name: String,
	googleId: {
	  type: String,
	  required: true
	},
	email: String,
  }, {
	timestamps: true
  });

module.exports = mongoose.model('User', userSchema);