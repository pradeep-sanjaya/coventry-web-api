let http = require("http");
var fs = require('fs');

let server = http.createServer((request, response) => {
    if (request.url == '/') {
        fs.readFile('index.html', function (err, data) {
            response.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
            response.write(data);
            response.end();
        });
    } else if (request.url == '/home') {
        fs.readFile('home.html', function (err, data) {
            response.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
            response.write(data);
            response.end();
        });
    } else if (request.url == '/about') {
        fs.readFile('about.html', function (err, data) {
            response.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
            response.write(data);
            response.end();
        });
    } else {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.write("<p>Not found</p>");
        response.end();
    }
});

server.listen(3000);

server.on("connection", () => {
    console.log("connected");
})