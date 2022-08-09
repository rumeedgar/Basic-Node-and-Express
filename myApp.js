require('dotenv').config();
let express = require('express');
let app = express();


//Implement a Root-Level Request Logger Middleware
app.use(function(req, res, next) {
    console.log(req.method + " " + req.path + " -- " + req.ip);
    next();
});


console.log("Hello World");

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

//Serving static assets
app.use(express.static(__dirname + '/public/'));
app.use('/public', express.static(__dirname + '/public'));

// //Serve json on a specific route
// app.get(/json/, (req, res) => 
// {
//     res.json(
//         { "message" : "Hello json"}
//     );
// });


//Use the .env file
app.get(/json/, (req, res) => {
    console.log(process.env.MESSAGE_STYLE, " <= message style");
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json(
            { "message": "HELLO JSON"}
        )
    } else {
        res.json(
            { "message": "Hello json"}
        )
    }
});


//Chaining middleware. A time server.
function getTheCurrentTimeString() {
   return new Date().toString();
}

app.get("/now", function(req, res, next) {
    req.time = getTheCurrentTimeString();
    next();
}, function(req, res) {
    res.json({ time: req.time });
})

//Get Route Parameter Input from the Client
app.get("/:word/echo", (req, res) => {
    const { word} = req.params;
    res.json({
        echo: word
    });
});

























 module.exports = app;
