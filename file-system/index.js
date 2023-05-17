const fs = require("fs")

// console.log("first Log")
// fs.readFile("package.json", async(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data.toString());
//     }
// })
// console.log("second LOG")

console.log("first Log")

const data = fs.readFileSync("package.json","utf-8")

console.log(data)

console.log("second LOG")