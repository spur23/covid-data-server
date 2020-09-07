const mongoose = require("mongoose");

const stateGeoSchema = new mongoose.Schema({
  state: {
    type: String,
    required: [true, "Data must include a state"],
    index: true,
  },
  x: { type: Number, required: [true] },
  y: { type: Number, required: [true] },
  sqMile: { type: Number, required: [true] },
});

const StateGeo = mongoose.model("StateGeo", stateGeoSchema, "state_geo_data");

module.exports = StateGeo;
