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

module.exports.userProfile = function(req, res) {
    return res.render('user_profile', {
        title: "User Profile"
    });
}