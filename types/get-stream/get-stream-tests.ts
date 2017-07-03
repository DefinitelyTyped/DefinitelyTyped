import getStream = require("get-stream");

import * as fs from 'fs';

getStream(fs.createReadStream('foo'))
    .then(str => str.toLowerCase());

getStream.array<string>(fs.createReadStream('foo'))
    .then(values => values.join(', '));

getStream.buffer(fs.createReadStream('foo'))
    .then(buffer => buffer.byteLength);
