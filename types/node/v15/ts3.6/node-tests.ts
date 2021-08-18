import '../test/assert';
import '../test/async_hooks';
import '../test/child_process';
import '../test/cluster';
import '../test/constants';
import '../test/crypto';
import '../test/dgram';
import '../test/diagnostic_channel';
import '../test/dns';
import '../test/events';
import '../test/fs';
import '../test/global';
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

import * as fs from 'fs';
import * as console2 from 'console';
import * as inspector from 'inspector';
import * as trace_events from 'trace_events';

/////////////////////////////////////////////////////
/// WASI tests : https://nodejs.org/api/wasi.html ///
/////////////////////////////////////////////////////

import { WASI } from 'wasi';

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
        const frameThis: any = frame.getThis();
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

{
    {
        let _c: Console = console;
        _c = console2;
    }
    {
        const writeStream = fs.createWriteStream('./index.d.ts');
        let consoleInstance: Console = new console.Console(writeStream);

        consoleInstance = new console.Console(writeStream, writeStream);
        consoleInstance = new console.Console(writeStream, writeStream, true);
        consoleInstance = new console.Console({
            stdout: writeStream,
            stderr: writeStream,
            colorMode: 'auto',
            ignoreErrors: true
        });
        consoleInstance = new console.Console({
            stdout: writeStream,
            colorMode: false
        });
        consoleInstance = new console.Console({
            stdout: writeStream
        });
    }
    {
        console.assert('value');
        console.assert('value', 'message');
        console.assert('value', 'message', 'foo', 'bar');
        console.clear();
        console.count();
        console.count('label');
        console.countReset();
        console.countReset('label');
        console.debug();
        console.debug('message');
        console.debug('message', 'foo', 'bar');
        console.dir('obj');
        console.dir('obj', { depth: 1 });
        console.error();
        console.error('message');
        console.error('message', 'foo', 'bar');
        console.group();
        console.group('label');
        console.group('label1', 'label2');
        console.groupCollapsed();
        console.groupEnd();
        console.info();
        console.info('message');
        console.info('message', 'foo', 'bar');
        console.log();
        console.log('message');
        console.log('message', 'foo', 'bar');
        console.table({ foo: 'bar' });
        console.table([{ foo: 'bar' }]);
        console.table([{ foo: 'bar' }], ['foo'] as ReadonlyArray<string>);
        console.time();
        console.time('label');
        console.timeEnd();
        console.timeEnd('label');
        console.timeLog();
        console.timeLog('label');
        console.timeLog('label', 'foo', 'bar');
        console.trace();
        console.trace('message');
        console.trace('message', 'foo', 'bar');
        console.warn();
        console.warn('message');
        console.warn('message', 'foo', 'bar');

        // --- Inspector mode only ---
        console.profile();
        console.profile('label');
        console.profileEnd();
        console.profileEnd('label');
        console.timeStamp();
        console.timeStamp('label');
    }
}

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
        // Node Inspector events
        session.on('NodeTracing.dataCollected', (message: inspector.InspectorNotification<inspector.NodeTracing.DataCollectedEventDataType>) => {
          const value: Array<{}> = message.params.value;
        });
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
