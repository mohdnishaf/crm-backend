const mongoose = require('mongoose');

const vacationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    vacation: { type: Number, default: 0 },
    sick: { type: Number, default: 0 },
    remote: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Vacation', vacationSchema);


