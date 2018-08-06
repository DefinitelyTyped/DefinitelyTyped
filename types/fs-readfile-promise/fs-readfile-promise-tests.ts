import readFile = require("fs-readfile-promise");

declare const path: string;
declare const encoding: string;
declare const nullable: null;
declare const options: { encoding: string, flag: string };

async function testPathOnly() {
    return readFile(path);
}
async function testPathEncoding() {
    return readFile(path, encoding);
}
async function testPathNull() {
    return readFile(path, nullable);
}
async function testPathOption() {
    return readFile(path, options);
}

testPathOnly()
    .then(console.log)
    .catch(console.log);
testPathEncoding()
    .then(console.log)
    .catch(console.log);
testPathNull()
    .then(console.log)
    .catch(console.log);
testPathOption()
    .then(console.log)
    .catch(console.log);
