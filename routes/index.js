const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log("Router has been loaded");

router.use('/', homeController.home);

module.exports = router;