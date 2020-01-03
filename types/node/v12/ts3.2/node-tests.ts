// tslint:disable-next-line:no-bad-reference
import '../node-tests';
import '../assert';
import '../buffer';
import '../child_process';
import '../cluster';
import '../crypto';
import '../dgram';
import '../global';
import '../http';
import '../http2';
import '../net';
import '../os';
import '../path';
import '../perf_hooks';
import '../process';
import '../querystring';
import '../readline';
import '../repl';
import '../stream';
import '../tls';
import '../tty';
import '../util';
import '../worker_threads';
import '../zlib';

import { types, promisify } from 'util';
import { BigIntStats, statSync, Stats } from 'fs';

//////////////////////////////////////////////////////////
/// Global Tests : https://nodejs.org/api/global.html  ///
//////////////////////////////////////////////////////////
{
    const hrtimeBigint: bigint = process.hrtime.bigint();

    process.allowedNodeEnvironmentFlags.has('asdf');
}

// Util Tests
{
    const value: BigInt64Array | BigUint64Array | number = [] as any;
    if (types.isBigInt64Array(value)) {
        // $ExpectType BigInt64Array
        const b = value;
    } else if (types.isBigUint64Array(value)) {
        // $ExpectType BigUint64Array
        const b = value;
    } else {
        // $ExpectType number
        const b = value;
    }

    const arg1UnknownError: (arg: string) => Promise<number> = promisify((arg: string, cb: (err: unknown, result: number) => void): void => { });
    const arg1AnyError: (arg: string) => Promise<number> = promisify((arg: string, cb: (err: any, result: number) => void): void => { });
}

// FS Tests
{
    const bigStats: BigIntStats = statSync('.', { bigint: true });
    const anyStats: Stats | BigIntStats = statSync('.', { bigint: Math.random() > 0.5 });
}

// Global Tests

{
    const a = Buffer.alloc(1000);
    a.writeBigInt64BE(123n);
    a.writeBigInt64LE(123n);
    a.writeBigUInt64BE(123n);
    a.writeBigUInt64LE(123n);
    let b: bigint = a.readBigInt64BE(123);
    b = a.readBigInt64LE(123);
    b = a.readBigUInt64LE(123);
    b = a.readBigUInt64BE(123);
}
