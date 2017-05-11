import getStdin = require("get-stdin");

getStdin().then(str => {
    console.log(str.toLowerCase());
});

getStdin.buffer().then(buffer => {
    console.log("Length " + buffer.length + buffer.toString());
});
