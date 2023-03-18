// Modules
// CommonJs Module => require, module.export.foo, module.export =
// const myString = require("./common-module")
// const {add,name} = require("./common-module")
// console.log(myString);
// console.log(`${add(2,3)} and name is ${name}`)

// ES Module =>  import, export, export defult

import str, {add,name} from "./es-module.js"

console.log(add(3,4),name,str);