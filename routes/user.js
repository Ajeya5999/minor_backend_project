const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

router.get('/sign-in', userController.signIn); //For Sign-In Request

module.exports = router;