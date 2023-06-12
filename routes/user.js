const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
const authentication = require('../config/authentication');

router.get('/sign-in', userController.signIn); //For Sign-In Request
router.get('/sign-up', userController.signUp); //For Sign-up Request
router.get('/profile', authentication.checkAuthentication, userController.userProfile); //For User-Profile Request
router.post('/create', userController.create); //For Creating User
router.post('/create-session', userController.createSession); //For Creating Session
router.get('/destroy-session', userController.destroySession); // For Destorying Session

module.exports = router;