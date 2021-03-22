import ncp = require('ncp');
import { ncp as ncpCB } from 'ncp';
import * as util from 'util';

/**
 * The `expectType` function from https://www.npmjs.com/package/tsd,
 * except instead of returning `void`, it returns `T`.
 */
declare function expectType<T>(t: T): T;

let opts: ncp.Options = {};
const errs = Buffer.alloc(4096);
const opts$StreamErr = (opts = { errs });
opts = { filter: /abc/ };
opts = { filter: (filename: string) => true };
opts = {
    transform: (read: NodeJS.ReadableStream, write: NodeJS.WritableStream, file: ncp.File) => {
        file; // $ExpectType File
        file.name; // $ExpectType string
        file.mode; // $ExpectType number
        file.atime; // $ExpectType Date
        file.mtime; // $ExpectType Date
    },
};
opts = { clobber: false };
opts = { dereference: false };
opts = { stopOnErr: false };
opts = { limit: 512 };

// $ExpectType Options
opts;

ncp('foo', 'bar', err => {
    err; // $ExpectType Error[] | null
});

ncp(
    'foo',
    'bar',
    {
        stopOnErr: true,
    },
    err => {
        err; // $ExpectType Error | null
    },
);

ncp(
    'foo',
    'bar',
    {
        errs,
        stopOnErr: true,
    },
    err => {
        err; // $ExpectType Error | null
    },
);

ncp('foo', 'bar', opts$StreamErr, err => {
    err; // $ExpectType WriteStream | null
});

ncp.ncp('foo', 'bar', err => {
    err; // $ExpectType Error[] | null
});

ncp.ncp('foo', 'bar', opts, err => {
    err; // $ExpectType Error | Error[] | WriteStream | null
});

// $ExpectType (source: string, destination: string, options?: Options | undefined) => Promise<void>
expectType<(source: string, destination: string, options?: ncp.Options) => Promise<void>>(util.promisify(ncp));

// $ExpectType (source: string, destination: string, options?: Options | undefined) => Promise<void>
expectType<(source: string, destination: string, options?: ncp.Options) => Promise<void>>(util.promisify(ncp.ncp));

// Both import forms are identical
expectType<typeof ncp.ncp>(ncpCB);
expectType<typeof ncpCB>(ncp.ncp);
