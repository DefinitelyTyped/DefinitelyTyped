import fs = require('graceful-fs');
import * as fs2 from 'graceful-fs';
import * as nodeFs from 'fs';
import * as fse from 'fs-extra';
import { promisify } from 'util';

const str = '';
const buf = new Buffer('');

fs.renameSync(str, str);
fs2.chmodSync(buf, 1);

const gracefulified = fs.gracefulify(nodeFs);
gracefulified; // $ExpectType typeof "fs"
gracefulified.lutimes; // $ExpectType typeof lutimes

const fseGrace = fs.gracefulify(fse);
fseGrace.lutimes; // $ExpectType typeof lutimes

nodeFs.lutimes(buf, str, str);
nodeFs.lutimes(buf, str, str, err => {
    err; // $ExpectType ErrnoException | null
});
nodeFs.lutimesSync(buf, str, str);
promisify(nodeFs.lutimes); // $ExpectType (path: string | Buffer | URL, atime: string | number | Date, mtime: string | number | Date) => Promise<void>
