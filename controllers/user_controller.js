//For Sign-In Page

module.exports.signIn = function(req, res){
    return res.render('sign_in', {
        title: "Sign In"
    });
};