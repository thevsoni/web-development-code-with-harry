const fs = require("fs");
let readAnddWrite = fs.readFileSync("Video_64_2_txt.txt","utf-8");
console.log(readAnddWrite);

readAnddWrite = readAnddWrite.replace("browser","vishal");
console.log(readAnddWrite);

//creating a new file || writing a new file
fs.writeFileSync("vishal_64_3.txt" , readAnddWrite);

readAnddWrite = fs.readFileSync("Video_64_2_txt.txt","utf-8");
console.log(readAnddWrite);

readAnddWrite = readAnddWrite.replace("browser" , "i am aging updating this file here");
fs.writeFileSync("vishal_64_3.txt" , readAnddWrite);
console.log(readAnddWrite);

readAnddWrite = fs.readFileSync("vishal_64_3.txt","utf-8");
console.log(readAnddWrite);


/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
