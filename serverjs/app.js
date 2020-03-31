//Busca a  bibioteca http
const http = require('http');
var request = require('request');

//seta o ip ou server que sera execultado
const hostname = '127.0.0.1';

//Seta a porta que sera usada
const port = 8080;

//cria uma constante que gurdara o server
const server = http.createServer((req, res) => {
    var cep = '86183877';

request('http://viacep.com.br/ws/'+ cep +'/json/', function (error, response, body) {
    console.log('error:', error); // Print o erro que ocorreu
    console.log('statusCode:', response && response.statusCode); // Imprima o código de status da resposta se uma resposta foi recebida
    console.log('body:', JSON.parse(body)); // imprime o Json recebido
    /*Lembra que eu disse que o JSON é uma string? Precisamos transformá-lo em um objeto.
    Para isso, temos que fazer o parse dessa string.
    O javascript já tem uma função que faz isso para nós: JSON.parse.
    Vamos fazer a chamada e atribuir esse objeto a uma variável. Agora,
    poderemos acessar os atributos do objeto normalmente. */
    var json = JSON.parse(body)
    cidade = json.localidade;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Faccar, teste!\n');

    });

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});