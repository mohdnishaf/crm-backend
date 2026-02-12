const mongoose = require("mongoose");

const calendarSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    startTime: { type: String },
    endTime: { type: String },
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Calendar", calendarSchema);
