const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const schemaUser = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    min: 3,
    max: 32,
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Message',
    },
  ],
});

const User = mongoose.model('User', schemaUser);

module.exports = User;
