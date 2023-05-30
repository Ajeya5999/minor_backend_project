const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log("Router has been loaded");

router.get('/', homeController.home); //For Home Page
router.use('/user', require('./user')); //For User Requests

module.exports = router;