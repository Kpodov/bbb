// A Simple Example Node.js Webserver Running on Port 5050

var http = require('http');  // require the http module
var server = http.createServer(
    function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hola from BBB!\n');
    });
server.listen(5050);
console.log('BBB Web Server running at http://192.168.7.2:5050/');
console.log('All running well so far...\n');

