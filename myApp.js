let express = require('express');
let app = express();
console.log('Hello World');
// bGround.log('Hello World');
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


































 module.exports = app;
