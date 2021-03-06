const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = Schema(
  {
    country: String,
  },
  {
    timestamps: true,
  },
);

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
