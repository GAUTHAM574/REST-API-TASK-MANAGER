const express = require('express');
const router = express.Router();
const { getTasks, createTask,getTask, updateTask, deleteTask} = require('../controllers/tasks');

// /api/v1/tasks
router.route('/').get(getTasks).post(createTask);

// /api/v1/tasks:id
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;