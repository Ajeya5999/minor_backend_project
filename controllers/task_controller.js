const Task = require('../models/task');

// For Adding a Task

module.exports.create = async function(req, res) {
    let temp = req.body;
    try {
        let task = await Task.create({
            description: temp.description,
            category: temp.category,
            dueDate: temp.dueDate,
            email: req.session.user.email,
            done: false
        });
        console.log('task-added');
        return res.redirect('/');
    } catch(err) {
        console.log("error", err);
        return res.redirect('/');
    }
}