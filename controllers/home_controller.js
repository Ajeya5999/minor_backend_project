const Task = require('../models/task');

//For the Home Page

module.exports.home = async function(req, res) {
    try {
        var tasks = [];
        if(req.session.user) {
            tasks = await Task.find({email: req.session.user.email}).exec();
        }
        return res.render('home', {
            title: "Home",
            tasks: tasks
        });
    } catch(err) {
        console.log("error", err);
    }

};

//Not Found

module.exports.notFound = function(req, res) {
    return res.render('not_found', {
        title: "Not Found"
    })
}