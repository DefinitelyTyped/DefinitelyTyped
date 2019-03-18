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

//////////////////////////////////////////////////////////
/// Global Tests : https://nodejs.org/api/global.html  ///
//////////////////////////////////////////////////////////
{
    {
        const hrtimeBigint: bigint = process.hrtime.bigint();
    }
}

////////////////////////////////////////////////////////////
/// Process Tests : https://nodejs.org/api/process.html ////
////////////////////////////////////////////////////////////
{
    process.allowedNodeEnvironmentFlags.has('asdf');
}
