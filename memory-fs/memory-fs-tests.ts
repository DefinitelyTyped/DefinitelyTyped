/// <reference path="./index.d.ts" />

import MemoryFileSystem = require('memory-fs');

const fs = new MemoryFileSystem({});

fs.existsSync('./kd/sdkfj');

fs.writeFile('hello', 'hahahahah', function (err) {
    console.log(err.message);
});

fs.writeFile('hello', 'hahahahah', 'utf-8', function (err) {
    console.log(err.message);
});
