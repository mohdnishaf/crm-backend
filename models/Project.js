const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    assignee: {
      type: String,
      required: true
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium"
    },

    description: {
      type: String,
      required: true
    },

    // ✅ ADD THIS FIELD
    status: {
      type: String,
      enum: ["To Do", "In Progress", "Done"],
      default: "To Do"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Project", projectSchema);