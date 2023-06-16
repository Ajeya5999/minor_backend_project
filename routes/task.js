const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task_controller');

router.post('/create', taskController.create); //For Adding a Task
router.post('/remove', taskController.remove); //For Deleting Tasks
router.post('/mark', taskController.mark) //For Marking Tasks as Done 

module.exports = router;