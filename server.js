/*const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

const http = require('http');
const port = 5500;
const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader('contentType', 'text/plain');
    res.end('This is just the beginning of my NodeJS journey in backend')
})
server.listen(port,()=>{
    console.log(`The server is running at ${port}`);
})