const path = require("path");

//gets system seperator
console.log(path.sep)

//return normalized resulting path
const filePath = path.join('content','subfolder', 'test.txt');
console.log(filePath)

const base = path.basename(filePath);
console.log(base);

const abs = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(abs);