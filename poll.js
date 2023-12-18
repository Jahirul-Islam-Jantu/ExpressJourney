const { Schema, model } = require("mongoose");

const pollSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  totalVote: {
    type: Number,
    default: 0,
  },
  options: [
    {
      name: String,
      vote: Number,
    },
  ],
});

const poll = model("poll", pollSchema);
module.exports = poll;
