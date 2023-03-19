const http = require("http");

http.createServer((req,res)=>{
    console.log(req);
    res.writeHead(200,{"content-type":"text/plain"})
    res.end("Hello NodeJs Hello")
}).listen(3000,()=>{
    console.log("server run on port 3000 : http://localhost:3000");
});