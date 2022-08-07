require('dotenv').config();
let express = require('express');
let app = express();
console.log('Hello World');
// bGround.log('Hello World');

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






























 module.exports = app;
