const express = require("express");
const stateGeoController = require("../controllers/stateGeoController");

const router = express.Router();

router.route("/:state").get(stateGeoController.getStateGeo);

module.exports = router;
