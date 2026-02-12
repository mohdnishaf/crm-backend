const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mail: { type: String, required: true, unique: true },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    dob: { type: Date },
    designation: { type: String },
    level: { type: String, default: "Middle" }, // UI shows Middle
    status: { type: String, default: "Active" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
