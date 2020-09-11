// tslint:disable-next-line:no-bad-reference
import '../ts3.1/node-tests';
import '../ts3.1/assert';
import '../ts3.1/buffer';
import '../ts3.1/child_process';
import '../ts3.1/cluster';
import '../ts3.1/crypto';
import '../ts3.1/dgram';
import '../ts3.1/global';
import '../ts3.1/http';
import '../ts3.1/http2';
import '../ts3.1/net';
import '../ts3.1/os';
import '../ts3.1/path';
import '../ts3.1/perf_hooks';
import '../ts3.1/process';
import '../ts3.1/querystring';
import '../ts3.1/readline';
import '../ts3.1/repl';
import '../ts3.1/stream';
import '../ts3.1/tls';
import '../ts3.1/tty';
import '../ts3.1/util';
import '../ts3.1/worker_threads';
import '../ts3.1/zlib';

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
