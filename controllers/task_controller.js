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

// For Deleting Tasks 

module.exports.remove = async function(req, res) {
    if(!Array.isArray(req.body.tasks)) { 
        req.body.tasks = [req.body.tasks];
    }
    if(req.body.tasks) {
        for(task of req.body.tasks) {
            try {
                await Task.findByIdAndDelete(task);
            } catch(err) {
                console.log(err);
                res.redirect('back');
            }
        }
    }
    console.log("deleted successfully");
    res.redirect('/');
}

// For Making as Done 

module.exports.mark = async function(req, res) {
    if(!Array.isArray(req.body.tasks)) { 
        req.body.tasks = [req.body.tasks];
    }
    if(req.body.tasks) {
        for(task of req.body.tasks) {
            try {
                await Task.findByIdAndUpdate(task, {done: true});
            } catch(err) {
                console.log(err);
                res.redirect('back');
            }
        }
    }
    console.log("marked successfully");
    res.redirect('/');
}