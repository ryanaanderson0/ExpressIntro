import Express from "express"; //now able to use ES6 to import Express, instead of using require

const app = Express(); //initializing app that contains express function

app.get('/', (req, res) => {
    res.send( '<h1>Hello World</h1>')
});

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