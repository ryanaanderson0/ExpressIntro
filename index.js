const express = require('express');
const path = require('path'); //deals with file paths

const app = express(); //initializing app that contains express function

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