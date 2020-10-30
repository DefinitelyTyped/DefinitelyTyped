import destroy = require('destroy');
import * as fs from 'fs';

const stream = fs.createReadStream('package.json');

// $ExpectType ReadStream
destroy(stream);
// $ExpectType WriteStream & { fd: 2; }
destroy(process.stderr);
