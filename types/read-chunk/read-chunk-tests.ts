import readChunk = require('read-chunk');

let chunk: Buffer = readChunk.sync('foo.txt', 1, 3);

readChunk('foo.txt', 1, 3).then(value => {
    console.log(value);
}).catch(error => {
    console.log(error);
});
