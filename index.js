const express = require('express');
const path = require('path'); //deals with file paths
const members = require('./members');
const moment = require('moment');

const app = express(); //initializing app that contains express function

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}
    ${req.originalUrl}: 
    ${moment().format()}`
    );
    next();
}

// Initialize Middleware
app.use(logger);

// Gets All Members
app.get('/api/members', (req, res) => res.json(members));


//set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); //runs the web server



/* 4 HTTP Functions --

GET , PUT , POST , DELETE 

app.get( '/', function(req, res) {
    // Fetch from database
    // Load pages
    // Return JSON
    // FUll access to request and response

});

app.put()
app.post
app.delete


*/ 