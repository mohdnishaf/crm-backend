const mongoose = require('mongoose');

const vacationSchema = new mongoose.Schema({
  employeeName: String,
  fromDate: Date,
  toDate: Date,
  reason: String,
  status: {
    type: String,
    default: 'Pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('Vacation', vacationSchema);
