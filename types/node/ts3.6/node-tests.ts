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

import * as inspector from 'node:inspector';
import * as trace_events from 'node:trace_events';

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

///////////////////////////////////////////////////////////
/// Inspector Tests                                     ///
///////////////////////////////////////////////////////////

{
    {
        const b: inspector.Console.ConsoleMessage = {source: 'test', text: 'test', level: 'error' };
        inspector.open();
        inspector.open(0);
        inspector.open(0, 'localhost');
        inspector.open(0, 'localhost', true);
        inspector.close();
        const inspectorUrl: string | undefined = inspector.url();

        const session = new inspector.Session();
        session.connect();
        session.disconnect();

        // Unknown post method
        session.post('A.b', { key: 'value' }, (err, params) => {});
        // TODO: parameters are implicitly 'any' and need type annotation
        session.post('A.b', (err: Error | null, params?: {}) => {});
        session.post('A.b');
        // Known post method
        const parameter: inspector.Runtime.EvaluateParameterType = { expression: '2 + 2' };
        session.post('Runtime.evaluate', parameter,
            (err: Error | null, params: inspector.Runtime.EvaluateReturnType) => {});
        session.post('Runtime.evaluate', (err: Error, params: inspector.Runtime.EvaluateReturnType) => {
            const exceptionDetails: inspector.Runtime.ExceptionDetails = params.exceptionDetails!;
            const resultClassName: string = params.result.className!;
        });
        session.post('Runtime.evaluate');

        // General event
        session.on('inspectorNotification', message => {
            message; // $ExpectType InspectorNotification<{}>
        });
        // Known events
        session.on('Debugger.paused', (message: inspector.InspectorNotification<inspector.Debugger.PausedEventDataType>) => {
            const method: string = message.method;
            const pauseReason: string = message.params.reason;
        });
        session.on('Debugger.resumed', () => {});
    }
}

///////////////////////////////////////////////////////////
/// Trace Events Tests                                  ///
///////////////////////////////////////////////////////////

{
    const enabledCategories: string | undefined = trace_events.getEnabledCategories();
    const tracing: trace_events.Tracing = trace_events.createTracing({ categories: ['node', 'v8'] });
    const categories: string = tracing.categories;
    const enabled: boolean = tracing.enabled;
    tracing.enable();
    tracing.disable();
}

////////////////////////////////////////////////////
/// Node.js ESNEXT Support
////////////////////////////////////////////////////

{
    const s = 'foo';
    const s1: string = s.trimLeft();
    const s2: string = s.trimRight();
    const s3: string = s.trimStart();
    const s4: string = s.trimEnd();
}
