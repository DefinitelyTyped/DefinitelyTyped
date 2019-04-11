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

import { types } from 'util';

//////////////////////////////////////////////////////////
/// Global Tests : https://nodejs.org/api/global.html  ///
//////////////////////////////////////////////////////////
{
    const hrtimeBigint: bigint = process.hrtime.bigint();

    process.allowedNodeEnvironmentFlags.has('asdf');
}

//////////////////////////////////////////////////////////
/// Util Tests                                         ///
//////////////////////////////////////////////////////////
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
}
