const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ipSchema = Schema(
  {
    ip: String,
  },
  {
    timestamps: true,
  },
);

const IP = mongoose.model("IP", ipSchema);
module.exports = IP;
