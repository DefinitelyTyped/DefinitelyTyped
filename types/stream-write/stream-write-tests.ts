import write = require('stream-write');
import { createWriteStream, createReadStream } from 'fs';

write(createWriteStream('file'), 'hi'); // $ExpectType Promise<boolean>

write(createWriteStream('file'), new Uint8Array()); // $ExpectType Promise<boolean>

write(createReadStream('file'), new Uint8Array()); // $ExpectError

write(createWriteStream('file')); // $ExpectError
