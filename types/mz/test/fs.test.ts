import fs = require('mz/fs');

fs.stat(__filename); // $ExpectType Promise<Stats>
fs.stat(__filename, (err, stats) => {
    err; // $ExpectType ErrnoException | null
    stats; // $ExpectType Stats
});

fs.exists(__filename); // $ExpectType Promise<boolean>
fs.exists(__filename, (err, exists) => {
    err; // $ExpectType ErrnoException | null
    exists; // $ExpectType boolean
});

declare const path: fs.PathLike;
declare const stringEncoding: BufferEncoding;
declare const anyEncoding: string;

fs.realpath.native(path); // $ExpectType Promise<string>
fs.realpath.native(path, stringEncoding); // $ExpectType Promise<string>
fs.realpath.native(path, { encoding: stringEncoding }); // $ExpectType Promise<string>

fs.realpath.native(path, anyEncoding); // $ExpectType Promise<string | Buffer>
fs.realpath.native(path, { encoding: anyEncoding }); // $ExpectType Promise<string | Buffer>

fs.realpath.native(path, 'buffer'); // $ExpectType Promise<Buffer>
fs.realpath.native(path, { encoding: 'buffer' }); // $ExpectType Promise<Buffer>
