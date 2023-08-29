const express = require("express");
const app = express();

app.get("/",(req,res)=>{
        console.log ("welcome to route");
        // res.send("hello expressjs")
        // res.send("<h2>hello expressjs</h2>")
        res.status =200
        res.send({messgae:"hello expressjs"})
})

app.get("/users",function(req,res){
    res.status =200
    res.json({
         users:[
            {
                id:1,   
                name:"aryan"
            },
            {
                id:2,   
                name:"sobhan"
            }
         ]
    })
})

app.listen(3000,()=>{
    console.log("server run on port 3000");
}) 