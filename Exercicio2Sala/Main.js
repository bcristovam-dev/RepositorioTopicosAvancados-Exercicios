var minhaBiblioteca = require("./biblioteca");

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content=Type': 'text/html' });
  res.write("Nome: " + minhaBiblioteca.primeiroNome + "Sobrenome: " + minhaBiblioteca.sobreNome + "" + minhaBiblioteca.rgm);
  res.end();
}).listen(8080);

console.log("Primeiro Nome: " + minhaBiblioteca.primeiroNome + " Segundo Nome: " + minhaBiblioteca.sobreNome + " RGM: " + minhaBiblioteca.rgm);