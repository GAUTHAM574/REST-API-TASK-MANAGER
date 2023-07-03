const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async');


const getTasks = asyncWrapper(async (req, res) => {
    //res.send('all tasks');
    const tasks = await Task.find({})
    res.status(200).json({
        tasks
    });
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({
        task
    });
})

const getTask = asyncWrapper(async (req, res, next) => {

    const {
        id: taskID
    } = req.params;
    const task = await Task.findOne({
        _id: taskID
    });
    if (!task) {
        const error = new Error('Not Found');
        error.status = 404;
        return next(error);
        // return res.status(404).json({
        //     errMsg: `No task with given id`
        // })
    }
    res.status(200).json({
        task
    });

})

const updateTask = asyncWrapper(async (req, res) => {
    const {
        id: taskID
    } = req.params;

    const task = await Task.findOneAndUpdate({
        _id: taskID
    }, req.body, {
        new: true,
        runValidators: true
    });
    if (!task) {
        return res.status(404).json({
            msg: "No task exists with that ID"
        });
    }
    res.status(200).json({
        task
    });
})

const deleteTask = asyncWrapper(async (req, res) => {
    const {
        id: taskID
    } = req.params;
    const task = await Task.findOneAndDelete({
        _id: taskID
    });
    if (!task) {
        return res.status(404).json({
            errMsg: `No task with given id`
        })
    }
    res.status(200).send();

})

module.exports = {
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}