//For the Home Page

module.exports.home = function(req, res) {
    return res.render('home', {
        title: "Home"
    });
};

//Not Found

module.exports.notFound = function(req, res) {
    return res.render('not_found', {
        title: "Not Found"
    })
}