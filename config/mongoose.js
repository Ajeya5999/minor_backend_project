const mongoose = require('mongoose');

// Setting up the Database

mongoose.connect('mongodb://localhost/to_do_list');
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error connecting to mongoDB"));

db.once('open', function(){
    console.log("Connected to Database");
});

module.exports = db;