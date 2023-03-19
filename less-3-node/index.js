const http = require("http");

http.createServer((req,res)=>{
    console.log(req);
    // res.writeHead(200,{"content-type":"text/plain"})
    // res.writeHead(200,{"content-type":"text/html"})
    // res.writeHead(200,{"content-type":"text/application/json"})
    res.writeHead(200,{"content-type":"text/xml"})
    // res.end("Hello NodeJs Hello")
    // res.end("<h1>hello NodeJs</h1>")
    // res.write(JSON.stringify({
    //     name:"aryan",
    //     age: "22",
    // }))
    // res.end()
    res.write("<XML><KEY>i am a key</KEY></XML>")
    res.end()
}).listen(3000,()=>{
    console.log("server run on port 3000 : http://localhost:3000");
});