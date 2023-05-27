const Task = require('../models/taskModel');

getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.status(200).send(tasks);
}

postTask = async (req, res) => {
    const text = req.body.text;
    if (!text || text.trim() == '') {
        res.status(400);
        throw new Error('text field in body cannot be empty');

    }

    const task = await Task.create({
        text: text,
    });

    res.status(200).send(task);
}

updateTask = async (req, res) => {
    const taskId = req.params.id;
    // todo: validate req.body
    const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, {new: true});
    if (!updatedTask) {
        res.status(404);
        throw new Error('Task not found');
      }

    res.status(200).send(updatedTask);
}

deleteTask = async (req, res) => {
    const taskId = req.params.id;
    // todo: validate req.body
    const deleteTask = await Task.findByIdAndDelete(taskId);
    if (!deleteTask) {
        res.status(404);
        throw new Error('Task not found');
      }

    res.status(200).send(deleteTask);
}

module.exports = {
    getTasks,
    postTask,
    updateTask,
    deleteTask
}