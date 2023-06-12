module.exports.checkAuthentication = function(req, res, next) {
    if(req.session.isAuth) {
        return next();
    } else {
        console.log("You can't access this page");
        return res.redirect('back');
    }
}

module.exports.setAuthenticatedUser = function(req, res, next) {
    if(req.session.isAuth) {
        res.locals.user = req.session.user;
    }
    next();
}