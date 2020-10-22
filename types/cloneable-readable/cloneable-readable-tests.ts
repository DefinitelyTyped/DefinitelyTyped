import { PassThrough } from 'stream';
import cloneable = require('cloneable-readable');

const ps = new PassThrough(); // $ExpectType PassThrough
const cl = cloneable(ps); // $ExpectType Cloneable<PassThrough>

process.stdin.pipe(cl.clone()).pipe(process.stderr);
process.stdin.pipe(cl).pipe(process.stdout);

cloneable.isCloneable(ps); // $ExpectType boolean
cloneable.isCloneable(cl); // $ExpectType boolean

if (cloneable.isCloneable(ps)) {
    ps; // $ExpectType PassThrough & Readable & { clone(): Cloneable<Readable>; }
}
