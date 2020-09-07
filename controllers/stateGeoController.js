const StateGeo = require("../models/stateGeoModel");

exports.getStateGeo = async (req, res, next) => {
  try {
    const { state } = req.params;
    const stateModified = state.replace("-", " ");

    const filter = {
      state: { $eq: stateModified },
    };

    const query = await StateGeo.find(filter);

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
