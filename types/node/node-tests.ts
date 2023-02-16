import './test/assert';
import './test/async_hooks';
import './test/buffer';
import './test/child_process';
import './test/cluster';
import './test/console';
import './test/constants';
import './test/crypto';
import './test/dgram';
import './test/diagnostics_channel';
import './test/dns';
import './test/dom-events'; // dom-events behaves differently under lib-dom
import './test/events';
import './test/fs';
import './test/globals';
import './test/http';
import './test/http2';
import './test/https';
import './test/inspector';
import './test/module';
import './test/net';
import './test/os';
import './test/path';
import './test/perf_hooks';
import './test/process';
import './test/querystring';
import './test/readline';
import './test/repl';
import './test/stream';
import './test/string_decoder';
import './test/test';
import './test/timers_promises';
import './test/timers';
import './test/tls';
import './test/trace_events';
import './test/tty';
import './test/url';
import './test/util_types';
import './test/util';
import './test/v8';
import './test/vm';
import './test/wasi';
import './test/worker_threads';
import './test/zlib';

import * as url from 'node:url';
import * as http from 'node:http';
import * as https from 'node:https';
import * as net from 'node:net';
import * as inspector from 'node:inspector';
import * as trace_events from 'node:trace_events';

//////////////////////////////////////////////////////
/// Https tests : https://nodejs.org/api/https.html ///
//////////////////////////////////////////////////////

{
    let agent: https.Agent = new https.Agent({
        keepAlive: true,
        keepAliveMsecs: 10000,
        maxSockets: Infinity,
        maxFreeSockets: 256,
        maxCachedSessions: 100,
        timeout: 15000,
        family: 4,
    });

    agent = https.globalAgent;

    let sockets: NodeJS.ReadOnlyDict<net.Socket[]> = agent.sockets;
    sockets = agent.freeSockets;

    https.request({
        agent: false
    });
    https.request({
        agent
    });
    https.request({
        agent: undefined
    });

    https.get('http://www.example.com/xyz');
    https.request('http://www.example.com/xyz');

    https.get('http://www.example.com/xyz', (res: http.IncomingMessage): void => {});
    https.request('http://www.example.com/xyz', (res: http.IncomingMessage): void => {});

    https.get(new url.URL('http://www.example.com/xyz'));
    https.request(new url.URL('http://www.example.com/xyz'));

    https.get(new url.URL('http://www.example.com/xyz'), (res: http.IncomingMessage): void => {});
    https.request(new url.URL('http://www.example.com/xyz'), (res: http.IncomingMessage): void => {});

    const opts: https.RequestOptions = {
        path: '/some/path'
    };
    https.get(new url.URL('http://www.example.com'), opts);
    https.request(new url.URL('http://www.example.com'), opts);
    https.get(new url.URL('http://www.example.com/xyz'), opts, (res: http.IncomingMessage): void => {});
    https.request(new url.URL('http://www.example.com/xyz'), opts, (res: http.IncomingMessage): void => {});

    https.globalAgent.options.ca = [];

    {
        function reqListener(req: http.IncomingMessage, res: http.ServerResponse): void {}

        class MyIncomingMessage extends http.IncomingMessage {
            foo: number;
        }

        class MyServerResponse<Request extends http.IncomingMessage = http.IncomingMessage> extends http.ServerResponse<Request> {
            foo: string;
        }

        let server: https.Server;

        server = new https.Server();
        server = new https.Server(reqListener);
        server = new https.Server({ IncomingMessage: MyIncomingMessage});

        server = new https.Server({
            IncomingMessage: MyIncomingMessage,
            ServerResponse: MyServerResponse
        }, reqListener);

        server = https.createServer();
        server = https.createServer(reqListener);
        server = https.createServer({ IncomingMessage: MyIncomingMessage });
        server = https.createServer({ ServerResponse: MyServerResponse }, reqListener);

        const timeout: number = server.timeout;
        const listening: boolean = server.listening;
        const keepAliveTimeout: number = server.keepAliveTimeout;
        const maxHeadersCount: number | null = server.maxHeadersCount;
        const headersTimeout: number = server.headersTimeout;
        server.setTimeout().setTimeout(1000).setTimeout(() => {}).setTimeout(100, () => {});
    }
}

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
