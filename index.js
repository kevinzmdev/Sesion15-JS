const http = require('http');
const hostname = '127.0.0.2';
const port = 3000;
const server = http.createServer((req,res) => {
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    res.end('Kevin Jhoel Zambrano Marrufo');
});

server.listen(port, hostname, () =>{
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);

});