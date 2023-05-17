const fs = require("fs")
const data = "hello world\n"
fs.writeFile("write.txt",data,{flag:"a",encoding:"utf-8"},(err)=>{
    console.log(err);
})