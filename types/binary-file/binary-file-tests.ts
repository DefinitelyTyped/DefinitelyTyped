import BinaryFile = require("binary-file");

const myBinaryFile = new BinaryFile("./file.bin", "r");
myBinaryFile.open().then(() => {
    console.log("File opened");
    return myBinaryFile.readUInt32();
}).then((stringLength) => {
    return myBinaryFile.readString(stringLength);
}).then(async (string) => {
    console.log(`File read: ${string}`);
    return (await myBinaryFile.read(8)).readDoubleLE();
}).then((num) => {
    console.log(`Read number at the end of file: ${num}`);
    return myBinaryFile.close();
}).then(() => {
    console.log("File closed");
}).catch((err) => {
    console.log(`There was an error: ${err}`);
});
