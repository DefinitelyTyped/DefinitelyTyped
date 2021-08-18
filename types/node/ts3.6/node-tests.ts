import '../test/assert';
import '../test/async_hooks';
import '../test/child_process';
import '../test/cluster';
import '../test/constants';
import '../test/console';
import '../test/crypto';
import '../test/dgram';
import '../test/diagnostics_channel';
import '../test/dns';
import '../test/events';
import '../test/fs';
import '../test/globals';
import '../test/http';
import '../test/http2';
import '../test/https';
import '../test/inspector';
import '../test/module';
import '../test/net';
import '../test/os';
import '../test/path';
import '../test/perf_hooks';
import '../test/process';
import '../test/readline';
import '../test/repl';
import '../test/stream';
import '../test/timers';
import '../test/timers_promises';
import '../test/trace_events';
import '../test/string_decoder';
import '../test/tls';
import '../test/tty';
import '../test/util';
import '../test/util_types';
import '../test/v8';
import '../test/vm';
import '../test/wasi';
import '../test/worker_threads';
import '../test/zlib';

/////////////////////////////////////////////////////
/// WASI tests : https://nodejs.org/api/wasi.html ///
/////////////////////////////////////////////////////

import { WASI } from 'node:wasi';

const wasi = new WASI({
  args: process.argv,
  env: process.env,
  preopens: {
    '/sandbox': '/some/real/path/that/wasm/can/access'
  },
  returnOnExit: false,
});
const importObject = { wasi_unstable: wasi.wasiImport };
(async () => {
  const wasm = await WebAssembly.compile(Buffer.from('dummy'));
  const instance = await WebAssembly.instantiate(wasm, importObject);
  wasi.start(instance);
})();

/////////////////////////////////////////////////////////
/// Errors Tests : https://nodejs.org/api/errors.html ///
/////////////////////////////////////////////////////////

{
    {
        Error.stackTraceLimit = Infinity;
    }
    {
        const myObject = {};
        Error.captureStackTrace(myObject);
    }
    {
        const frames: NodeJS.CallSite[] = [];
        Error.prepareStackTrace!(new Error(), frames);
    }
    {
        const frame: NodeJS.CallSite = null!;
        const frameThis: unknown = frame.getThis();
        const typeName: string | null  = frame.getTypeName();
        const func: Function | undefined  = frame.getFunction();
        const funcName: string | null = frame.getFunctionName();
        const meth: string | null  = frame.getMethodName();
        const fname: string | null  = frame.getFileName();
        const lineno: number | null  = frame.getLineNumber();
        const colno: number | null  = frame.getColumnNumber();
        const evalOrigin: string | undefined  = frame.getEvalOrigin();
        const isTop: boolean = frame.isToplevel();
        const isEval: boolean = frame.isEval();
        const isNative: boolean = frame.isNative();
        const isConstr: boolean = frame.isConstructor();
    }
}

///////////////////////////////////////////////////////////
/// Console Tests : https://nodejs.org/api/console.html ///
///////////////////////////////////////////////////////////

/*****************************************************************************
 *                                                                           *
 * The following tests are the modules not mentioned in document but existed *
 *                                                                           *
 *****************************************************************************/

////////////////////////////////////////////////////
/// ArrayLike.at() support
////////////////////////////////////////////////////

{
    const typedArr: NodeJS.TypedArray | number[] = new Uint8Array();
    typedArr.at(1); // $ExpectType number | undefined
    'asd'.at(1); // $ExpectType string | undefined
    new BigInt64Array(123).at(1); // $ExpectType bigint | undefined
    new BigUint64Array(123).at(1); // $ExpectType bigint | undefined
}
