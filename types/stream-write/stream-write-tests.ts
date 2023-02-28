import write = require('stream-write');
import { createWriteStream, createReadStream } from 'fs';

write(createWriteStream('file'), 'hi'); // $ExpectType Promise<boolean>

write(createWriteStream('file'), new Uint8Array()); // $ExpectType Promise<boolean>

// @ts-expect-error
write(createReadStream('file'), new Uint8Array());

// @ts-expect-error
write(createWriteStream('file'));
