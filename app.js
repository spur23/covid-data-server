const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const countyRouter = require("./routes/countyRoute");
const stateGeoRouter = require("./routes/stateGeoRoute");
const usGeoRouter = require("./routes/usGeoRoute");

//
//INITIALIZE EXPRESS/
const app = express();

// SET MORGAN IF IN DEV ENVIRONMENT
//1) MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(cors());
app.options("*", cors());

// MIDDLEWARE TO ADD TIMESTAMP
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES
app.use("/api/v1/home/", countyRouter); // county covid states
app.use("/api/v1/home/state/geodata", stateGeoRouter); // State map coordinates
app.use("/api/v1/home/us/county/geodata", usGeoRouter); // State county geo data

module.exports = app;
