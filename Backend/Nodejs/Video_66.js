
// console.log("vishal soni");

/*
const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("i am at the end now in this server");
});
server.listen(80,"127.0.0.1",()=>{ 
    console.log("i am listening 8000 port here at local server");
});
*/


const http = require("http");
const fs = require("fs");

const fileContent = fs.readFileSync('Video_66.html');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fileContent);
});

server.listen(80,"127.0.0.1",()=>{
    console.log("listening at 80 post");
    
});
