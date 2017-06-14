var http = require('http');
fs = require('fs');
express = require('express');
path = require('path');
url = require('url');

var app = express();

var hostname = '127.0.0.1';
var port = 3000;
var type = 'plain/text';




//Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function () {
    console.log("starting server in port " + port);
});


