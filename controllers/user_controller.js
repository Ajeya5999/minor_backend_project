const User = require('../models/user');
const Task = require('../models/task');

//For Sign-In Page

module.exports.signIn = function(req, res) {
    return res.render('sign_in', {
        title: "Sign In"
    });
};

// For Sign-Up Page

module.exports.signUp = function(req, res) {
    return res.render('sign_up', {
        title: "Sign Up"
    });
}

// For User-Profile Page

module.exports.userProfile = async function(req, res) {
    try {
        var tasks = [];
        if(req.session.user) {
            tasks = await Task.find({email: req.session.user.email}).exec();
        }
        return res.render('user_profile', {
            title: "User Profile",
            tasks: tasks
        });
    } catch(err) {
        console.log("error", err);
    }
}

//For Signing Up / Creating a User

module.exports.create = async function(req, res) {
    let temp1 = req.body;
    if(temp1.password != temp1.confirm_password) {
        console.log("The password is not confirmed");
        return res.redirect('back');
    }
    try {
        let user = await User.findOne({email: temp1.email});
        if(!user) {
            let temp2 = await User.create(temp1);
            return res.redirect('/user/sign-in');
        }
        else {
            console.log("User already exists!");
            return res.redirect('back');
        }
    } catch(err) {
        console.log("error", err);
    }
}

//For Signing In / Creating a Session for User

module.exports.createSession = async function(req, res) {
    let temp1 = req.body;
    try {
        let user = await User.findOne({email: temp1.email});
        if(user && temp1.password == user.password) {
            req.session.user = {
                name: user.name,
                email: user.email
            };
            req.session.isAuth = true;
            return res.redirect('/');
        }
        else {
            console.log("email or password is wrong");
            return res.redirect('back');
        }
    } catch(err) {
        console.log("error", err);
        return res.redirect('back');
    }
}

// For Loging Out

module.exports.destroySession = function(req, res) {
    if(req.session.isAuth) {
        req.session.destroy(function(err) {
            if(err) {
                console.log("error", err);
                return res.redirect('back');
            }
            console.log("logged out successfully");
            return res.redirect('/');
        });
    }
    else {
        console.log("You are not logged in");
        return res.redirect('back');
    }
}