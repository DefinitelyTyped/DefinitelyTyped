import destroy = require('destroy');
import * as fs from 'fs';

const stream = fs.createReadStream('package.json');

// $ExpectType ReadStream
destroy(stream);
// $ExpectType WriteStream
destroy(process.stderr);
