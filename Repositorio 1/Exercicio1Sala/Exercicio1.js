var http = require('http');

  function clienteReservas(){
      return "modulo de identificacao de cliente originados no site de reservas.";
  }

  function clientePagamentos(){
      return "modulo de identificacao de clientes originados no processamento de pagamentos.";
  }

  function milhagensService(){
      return "micro servico de programa de milhagens.";
  }

  function pagamentoService(){
      return "micro servico de processamento de pagamento.";
  }

  function reservaService(){
      return "micro servico de reservas.";
  }

  function vendaService(){
      return "micro servico de vendas.";
  }

http.createServer(function(req, res){
  var registerServices = 
                          clienteReservas() + "\n" + clientePagamentos() + "\n"
                        + milhagensService() + "\n"
                        + pagamentoService() + "\n"
                        + reservaService() + "\n"
                        + vendaService() + "\n"
  res.write(registerServices);
  res.end();
}).listen(8080);


function acionaMicroServicoConsulta() {
  request('http://localhost:8081', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      requestMicroServico = body;
      console.log(body)
      }
    }
  )
  return requestMicroServico;
}

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("microservico de atendimento.");
  res.end();
}).listen(8081);