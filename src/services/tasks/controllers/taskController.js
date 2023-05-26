getTasks = async (req, res) => {
    res.status(200);
    res.send("this are your tasks!")
}

postTask = async (req, res) => {
    const text = req.body.text;
    if (!text || text.trim() == '') {
        res.status(400);
        throw new Error('text field in body cannot be empty');

    }
    res.status(200);
    res.send("you posted a task!")
}

updateTask = async (req, res) => {
    res.status(200);
    res.send("you updated a task!")
}

deleteTask = async (req, res) => {
    res.status(200);
    res.send("you deleted a task!")
}

module.exports = {
    getTasks,
    postTask,
    updateTask,
    deleteTask
}