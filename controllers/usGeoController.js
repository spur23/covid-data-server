const US = require("../models/usGeoModel");
const { capitalize } = require("../toolkit/utils");

exports.getUSGeo = async (req, res, next) => {
  try {
    const { state } = req.params;
    const stateModified = capitalize(state);
    console.log(stateModified);
    const filter = {
      "properties.STATE": { $eq: stateModified },
    };

    const query = await US.find(filter);

    res.status(200).json({
      status: "Success",
      results: query.length,
      data: {
        query,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
