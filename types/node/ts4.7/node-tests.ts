// NOTE: These tests are *not* actually for TS version 4.0 and below, this is
// a dummy directory used to run tests with a second `tsconfig.json` which
// includes `dom` in its `lib` collection.

// Tests that behave differently under lib-dom
import './test/dom-events';
import './test/perf_hooks';

// Tests that should pass unchanged under lib-dom
import '../ts4.8/test/assert';
import '../ts4.8/test/async_hooks';
import '../ts4.8/test/buffer';
import '../ts4.8/test/child_process';
import '../ts4.8/test/cluster';
import '../ts4.8/test/console';
import '../ts4.8/test/constants';
import '../ts4.8/test/crypto';
import '../ts4.8/test/dgram';
import '../ts4.8/test/diagnostics_channel';
import '../ts4.8/test/dns';
import '../ts4.8/test/events';
import '../ts4.8/test/fs';
import '../ts4.8/test/globals';
import '../ts4.8/test/http';
import '../ts4.8/test/http2';
import '../ts4.8/test/https';
import '../ts4.8/test/inspector';
import '../ts4.8/test/module';
import '../ts4.8/test/net';
import '../ts4.8/test/os';
import '../ts4.8/test/path';
import '../ts4.8/test/process';
import '../ts4.8/test/querystring';
import '../ts4.8/test/readline';
import '../ts4.8/test/repl';
import '../ts4.8/test/stream';
import '../ts4.8/test/string_decoder';
import '../ts4.8/test/test';
import '../ts4.8/test/timers_promises';
import '../ts4.8/test/timers';
import '../ts4.8/test/tls';
import '../ts4.8/test/trace_events';
import '../ts4.8/test/tty';
import '../ts4.8/test/url';
import '../ts4.8/test/util_types';
import '../ts4.8/test/util';
import '../ts4.8/test/v8';
import '../ts4.8/test/vm';
import '../ts4.8/test/wasi';
import '../ts4.8/test/worker_threads';
import '../ts4.8/test/zlib';

//// Global interfaces

{
    const ac = new AbortController();
    ac.abort();
    // @ts-expect-error - ensure constructor does not return a constructor
    new ac();

    const sig = new AbortSignal();
    sig.addEventListener("", () => {}, {once: true});
    // @ts-expect-error - ensure constructor does not return a constructor
    new sig();
    // @ts-expect-error - `timeout` method is not in lib-dom (yet?)
    AbortSignal.timeout(123);
}
