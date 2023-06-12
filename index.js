// Setting up to Express Server

const express = require("express");
const app = express();
const port = 8000;

// Setting up Layouts

const expressLayouts = require('express-ejs-layouts');

// Setting up Database

const db = require('./config/mongoose');

// Using Express Sessions, Middlewares and mongoStore for Sessions

const session = require('express-session');
const mongoStore = require('connect-mongodb-session')(session);
const authentication = require('./config/authentication');

//Using Layouts and seeting up our assets directory to be served

app.use(expressLayouts);
app.use(express.static('./assets'));
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//Setting up EJS

app.set('view engine', 'ejs');
app.set('views', './views');

//For sending Data to the server

app.use(express.urlencoded());

// Setting up Express Session

app.use(session({
    secret: "abc",
    resave: false,
    saveUninitialized: false,
    store: new mongoStore({ 
        uri: 'mongodb://localhost/to_do_list',
        collection: 'sessions'
    }),

    // Cookie Options
    cookie: {
        maxAge: 30 * 60 * 1000 // 30 minutes
    }
    
}));
app.use(authentication.setAuthenticatedUser);

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