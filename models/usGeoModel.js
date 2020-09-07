const mongoose = require("mongoose");

const usSchema = new mongoose.Schema({});

const US = mongoose.model("US", usSchema, "us_county_geo_data");

module.exports = US;
