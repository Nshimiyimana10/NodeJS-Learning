var http = require("http");

function getSum(num1,num2){
    return num1 + num2;
}

http.createServer((req, res) =>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(`The sum of the provided numbers is: ${getSum}`)
}).listen(7500)

//