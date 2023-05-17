const fs = require("fs")

fs.writeFile("write.txt","append data",{flag:"a",encoding:"utf-8"},(err)=>{
    console.log(err);
})