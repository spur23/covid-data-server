const express = require("express");
const usController = require("../controllers/usGeoController");

const router = express.Router();

router.route("/:state").get(usController.getUSGeo);

module.exports = router;
