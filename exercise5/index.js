'use strict';
var http = require('http');

(() => {
    console.log("execute a anonymous function");
})();

var server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("root route");
    } else if (req.url == "/animals") {
        res.write("animals route");
    } else {
        res.write("another route")
    }
    res.end();
});

server.listen(3000, "127.0.0.1");

server.on("connection", function (socket) {
    console.log("connecting");
});

console.log("Started on 3000");