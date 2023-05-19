const express = require("express");
const app = express();
const port = 8000;

app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log(`Error while starting the server : ${err}`);
        return;
    }
    console.log("Server is up and running");
    return;
})