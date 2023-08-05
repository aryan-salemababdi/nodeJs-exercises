const path = require("path");

console.log("mongodv" + path.sep + "data" + path.sep + "users");

console.log("mongodv" + path.delimiter + "data" + path.delimiter + "users");

console.log(path.basename("mongodb/data/users/index.html",".html"));

console.log(path.extname("mongodb/data/users/index.html",".html"));

console.log(path.extname("mongodb/data/users/index.png"));

console.log(path.join("/","chapter","less-05","model","product.model.js"));

console.log(path.isAbsolute(path.join("/","chapter","less-05","model","product.model.js")));

console.log(path.parse("/chapter/less-05/model/product.model.js"));

console.log(path.normalize("c://chapter/less-05/model/product.model.js"));

console.log(__dirname);
console.log(__filename);