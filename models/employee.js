const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true,
    trim: true
  },

  mail: {
    type: String,
    required: false,
    lowercase: true,
    trim: true
  },

  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: false,
    lowercase: true
  },

  birthday: {
    type: Date,
    required: false
  },

  position: {
    type: String,
    required: false,
    trim: true
  },

  level: {
    type: String,
    enum: ["junior", "mid", "senior"],
    required: false,
    lowercase: true
  }
},

);


module.exports = mongoose.model("Employee", employeeSchema);