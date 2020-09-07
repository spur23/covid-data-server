const express = require("express");
const stateController = require("../controllers/countyController");

const router = express.Router();

router.route("/:state").get(stateController.getState);

module.exports = router;
