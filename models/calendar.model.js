const mongoose = require("mongoose");

const calendarSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  duration: {
    type: String,
    required: true
  }

},
{ timestamps: true }
);

module.exports = mongoose.model("Calendar", calendarSchema);