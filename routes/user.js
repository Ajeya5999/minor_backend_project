const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

router.get('/sign-in', userController.signIn); //For Sign-In Request
router.get('/sign-up', userController.signUp); //For Sign-up Request
router.get('/profile', userController.userProfile); //For User-Profile Request

module.exports = router;