import { PassThrough } from 'stream';
import cloneable = require('cloneable-readable');

const ps = new PassThrough(); // $ExpectType PassThrough<any>
const cl = cloneable(ps); // $ExpectType Cloneable<PassThrough<any>>

process.stdin.pipe(cl.clone()).pipe(process.stderr);
process.stdin.pipe(cl).pipe(process.stdout);

cloneable.isCloneable(ps); // $ExpectType boolean
cloneable.isCloneable(cl); // $ExpectType boolean
