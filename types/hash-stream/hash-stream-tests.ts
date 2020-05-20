import getHash = require('hash-stream');
import { createReadStream } from 'fs';

getHash('image.png', 'sha256', (err, hash) => {
    err; // $ExpectType Error | null
    hash; // $ExpectType Buffer
    const str = hash.toString('hex');
});
getHash('image.png', 'sha256'); // $ExpectType Promise<Buffer>

getHash(createReadStream('image.png'), 'sha256', (err, hash) => {
    err; // $ExpectType any
    hash; // $ExpectType Buffer
});
getHash(createReadStream('image.png'), 'sha256'); // $ExpectType Promise<Buffer>
