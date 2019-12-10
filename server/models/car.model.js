const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema(
  {
    make: String,
    model: String,
    year: Number,
    miles: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", CarSchema);
