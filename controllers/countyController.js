const County = require("../models/countyModel");
const moment = require("moment");
const { capitalize } = require("../toolkit/utils");

exports.getState = async (req, res, next) => {
  try {
    const yesterday = moment()
      .startOf("day")
      .subtract(5, "days")
      .toDate()
      .toDateString();

    const { state } = req.params;

    const stateFormatted = capitalize(state, "-");

    const filter = {
      state: { $eq: stateFormatted },
      date: {
        $gte: new Date(yesterday),
      },
    };

    const counties = await County.find(filter).sort({ date: -1 });

    const mostRecentDate = counties[0].date;

    const dataArray = counties.filter((el) => el.date >= mostRecentDate);

    res.status(200).json({
      status: "Success",
      results: dataArray.length,
      data: {
        counties: dataArray,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
