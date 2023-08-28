const fs = require("fs");

const streamData = fs.createReadStream("./file.txt");

const writeStreamData = fs.createWriteStream("./write.txt");

let counter = 0;

let buff = [];

streamData.on("read", ()=>{
    console.log("data reaady to stream");
});

streamData.on("data",(chunk)=>{
    counter++
    console.log("#"+counter+"th chunk of the data received:");
    console.log(chunk);
    buff.push(chunk);

});

streamData.on("error",(err)=>{

    console.log(err);

});

streamData.on("end",()=>{

    console.log("action of read stream data: ");

    console.log(buff.toString());

})
