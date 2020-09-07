const mongoose = require("mongoose");

const countySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, "Data must include a date"],
  },
  state: {
    type: String,
    required: [true, "Data must include a state"],
    index: true,
  },
  county: {
    type: String,
    required: [true, "Data must include a county"],
  },
  cases: { type: Number, required: [true, "Data must include cases"] },
  deaths: { type: Number, required: [true, "Data must include deaths"] },
  caseIncrease: {
    type: Number,
    required: [true, "Data must have a case daily increase"],
  },
  deathIncrease: {
    type: Number,
    required: [true, "Data must have a death daily increase"],
  },
  casesRASeven: {
    type: Number,
    required: [true, "Data must have a cases rolling average"],
  },
  deathsRASeven: {
    type: Number,
    required: [true, "Data must have a deaths rolling average"],
  },
});

const County = mongoose.model("County", countySchema, "county_data");

module.exports = County;
