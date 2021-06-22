import * as through2 from 'through2-concurrent';
import { Transform } from 'stream';

let str: Transform;

const transformFn = (err: any, data: any) => {};
function flushCb(this: Transform, cb: () => void) {
    cb();
}
const opts = {
    allowHalfOpen: false,
    maxConcurrency: 5
};

str = through2();
str = through2(opts);
str = through2(transformFn);
str = through2(opts, transformFn);
str = through2(transformFn, flushCb);
str = through2(opts, transformFn, flushCb);

str = through2.obj();
str = through2.obj(opts);
str = through2.obj(transformFn);
str = through2.obj(opts, transformFn);
str = through2.obj(transformFn, flushCb);
str = through2.obj(opts, transformFn, flushCb);
