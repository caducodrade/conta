//Busca a  bibioteca http
const http = require('http');

//seta o ip ou server que sera execultado
const hostname = '127.0.0.1';

//Seta a porta que sera usada
const port = 8080;

//cria uma constante que gurdara o server
const server = http.createServer((req, res) => {
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Faccar, teste!\n');

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});