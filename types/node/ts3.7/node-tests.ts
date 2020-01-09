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

import assert from 'assert';

{
    const a: 0 | 1 | 2 | true | false | "" | "foo" | undefined | null = null;
    assert(a);
    const b: 1 | 2 | true | "foo" = a;
}
