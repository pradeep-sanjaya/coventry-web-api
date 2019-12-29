let http = require("http");
let fs = require("fs");
let dt = require("./custom-date-time");

let server = http.createServer((request, response) => {
    if (request.url == '/') {
        fs.readFile('index.html', function (err, data) {
            response.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
            response.write(data);
            response.end();
        });
    } else if (request.url == '/time') {
        fs.readFile('time.html', function (err, data) {
            response.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
            response.write(data);
            response.end();
        });
    } else if (request.url == '/get-time') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify(dt.dateTime()));
        response.end();
    }
});

server.listen(3000);

server.on("connection", () => {
    console.log("connection");
});
