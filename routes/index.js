const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log("Router has been loaded");

router.get('/', homeController.home); //For Home Page
router.use('/user', require('./user')); //For User Requests
router.use('/task', require('./task')); //For Task Requests
router.all('*', homeController.notFound); //For Non Existant Routes  

module.exports = router;