// Setting up to Express Server

const express = require("express");
const app = express();
const port = 8000;

// Setting up Layouts

const expressLayouts = require('express-ejs-layouts');

//Using Layouts and seeting up our assets directory to be served

app.use(expressLayouts);
app.use(express.static('./assets'));
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//Setting up EJS

app.set('view engine', 'ejs');
app.set('views', './views');

//Setting up routes

app.use('/', require('./routes/index'));

//Running the server

app.listen(port, function(err){
    if(err){
        console.log(`Error while starting the server : ${err}`);
        return;
    }
    console.log("Server is up and running");
    return;
})