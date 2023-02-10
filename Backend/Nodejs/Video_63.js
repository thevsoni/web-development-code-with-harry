console.log("hello world");

//if we click tab 2 times then get all variable and methods name which are globally available in node js

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain'); //here we can write html inplace of plain
  res.end('Hello World');//here i can give my html file or html content
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

