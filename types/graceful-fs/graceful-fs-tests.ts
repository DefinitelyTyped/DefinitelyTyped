import gfs = require('graceful-fs');
import * as gfs2 from 'graceful-fs';
import * as fs from 'fs';
import * as fse from 'fs-extra';
import { promisify } from 'util';

const str = '';
const buf = Buffer.from('');

// verify that interfaces & types are correctly re-exported
const watcher: gfs.FSWatcher | null = null;

gfs.renameSync(str, str);
gfs2.chmodSync(buf, 1);

const gracefulified = gfs.gracefulify(fs);
const _fs: typeof fs = gracefulified;
gracefulified.lutimes; // $ExpectType typeof lutimes
promisify(gracefulified.lutimes); // $ExpectType (path: PathLike, atime: string | number | Date, mtime: string | number | Date) => Promise<void>

const fseGrace = gfs.gracefulify(fse);
fseGrace.lutimes; // $ExpectType typeof lutimes

fs.lutimes(buf, str, str, err => {
    err; // $ExpectType ErrnoException | null
});
fs.lutimesSync(buf, str, str);
promisify(fs.lutimes); // $ExpectType (path: PathLike, atime: string | number | Date, mtime: string | number | Date) => Promise<void>
