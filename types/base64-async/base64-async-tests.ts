import b64 = require('base64-async');
import * as fs from 'fs';

const buffer: Buffer = fs.readFileSync('somehugefile.jpg');
const b64String = 'aGkgbXVt...';

b64.encode(buffer).then(b64String => {
    b64String; // $ExpectType string
});
b64.encode(buffer, { chunkSize: 10 }).then(b64String => {
    b64String; // $ExpectType string
});

b64.decode(b64String).then(buffer => {
    buffer; // $ExpectType Buffer
});
b64.decode(b64String, { chunkSize: 10 }).then(buffer => {
    buffer; // $ExpectType Buffer
});

b64(buffer); // $ExpectType Promise<string>
b64(buffer, { chunkSize: 10 }); // $ExpectType Promise<string>
b64(b64String); // $ExpectType Promise<Buffer>
b64(b64String, { chunkSize: 10 }); // $ExpectType Promise<Buffer>
