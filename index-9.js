const path = require("path")

console.log(path.sep); //separetor

const filePath = path.join("/content/" , "sub-content" , "index.js")
console.log(filePath);

const base = path.basename(filePath)

const absolute = path.resolve(__dirname , "content" , "sub-folder" , "index.js")

console.log(absolute)