const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timezoneSchema = Schema(
  {
    code: String,
  },
  {
    timestamps: true,
  },
);

const Timezone = mongoose.model("Timezone", timezoneSchema);
module.exports = Timezone;
