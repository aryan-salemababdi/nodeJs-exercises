
//TCP => RavvitMQ , WebSocket, Kafka, gRPC, FileSystem
// Let buff = Buffer.from("NodeJS");
let buff = Buffer.alloc(4);

buff.write("node");

console.log(buff);
console.log(buff[0]);
console.log("n".codePointAt(0));
console.log("n".charCodeAt(0));
console.log(buff.toString());

const buffer = Buffer.from("Aryan");

console.log(buff.toJSON());

console.log(typeof buffer);

const buff2 = Buffer.from([69,114,102,97,110],"hex");

console.log(buff2.toString("utf-8"));