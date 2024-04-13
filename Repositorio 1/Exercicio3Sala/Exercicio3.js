var http = require('http'); //bibliotecas/modules
var fs = require('fs')
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Primeiro executavel com html embutido/inline</</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}).listen(8080);


var http = require('http'); //bibliotecas/modules
http.createServer(function (req, res) {

    fs.readFile('BryanCristovamSilvaRGM5933103241.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });

}).listen(8081);