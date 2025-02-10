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
const port = 7100;
const server = http.createServer((req,res) =>{

    if(req.url ==='/'){
        res.statusCode = 200;
        res.setHeader('contentType', 'text/html');
        res.end('<h1>Home Page</h1>')
    }
    else if(req.url ==='/About'){
        res.statusCode = 200;
        res.setHeader('contentType', 'text/html');
        res.end('<h1>About Page</h1>')  
    }
    else{
        res.statusCode = 404;
        res.setHeader('contentType', 'text/html');
        res.end('Not found')   
    }
    
})
server.listen(port,()=>{
    console.log(`The server is running at ${port}`);
})

