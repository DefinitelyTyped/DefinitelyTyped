import * as fs from "fs";
import * as url from "url";
import * as util from "util";
import * as http from "http";
import * as https from "https";
import * as console2 from "console";
import * as timers from "timers";
import * as dns from "dns";
import * as inspector from "inspector";
import * as trace_events from "trace_events";

//////////////////////////////////////////////////////
/// Https tests : http://nodejs.org/api/https.html ///
//////////////////////////////////////////////////////

{
    let agent: https.Agent = new https.Agent({
        keepAlive: true,
        keepAliveMsecs: 10000,
        maxSockets: Infinity,
        maxFreeSockets: 256,
        maxCachedSessions: 100,
        timeout: 15000
    });

    agent = https.globalAgent;

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

        class MyServerResponse extends http.ServerResponse {
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

/////////////////////////////////////////////////////
/// Timers tests : https://nodejs.org/api/timers.html
/////////////////////////////////////////////////////

{
    {
        const immediate = timers
            .setImmediate(() => {
                console.log('immediate');
            })
            .unref()
            .ref();
        const b: boolean = immediate.hasRef();
        timers.clearImmediate(immediate);
    }
    {
        const timeout = timers
            .setInterval(() => {
                console.log('interval');
            }, 20)
            .unref()
            .ref()
            .refresh();
        const b: boolean = timeout.hasRef();
        timers.clearInterval(timeout);
    }
    {
        const timeout = timers
            .setTimeout(() => {
                console.log('timeout');
            }, 20)
            .unref()
            .ref()
            .refresh();
        const b: boolean = timeout.hasRef();
        timers.clearTimeout(timeout);
    }
    async function testPromisify(doSomething: {
        (foo: any, onSuccessCallback: (result: string) => void, onErrorCallback: (reason: any) => void): void;
        [util.promisify.custom](foo: any): Promise<string>;
    }) {
        const setTimeout = util.promisify(timers.setTimeout);
        let v: void = await setTimeout(100); // tslint:disable-line no-void-expression void-return
        let s: string = await setTimeout(100, "");

        const setImmediate = util.promisify(timers.setImmediate);
        v = await setImmediate(); // tslint:disable-line no-void-expression
        s = await setImmediate("");

        // $ExpectType (foo: any) => Promise<string>
        const doSomethingPromise = util.promisify(doSomething);

        // $ExpectType string
        s = await doSomethingPromise('foo');
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
        console.table([{ foo: 'bar' }], ['foo']);
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
        console.markTimeline();
        console.markTimeline('label');
        console.profile();
        console.profile('label');
        console.profileEnd();
        console.profileEnd('label');
        console.timeStamp();
        console.timeStamp('label');
        console.timeline();
        console.timeline('label');
        console.timelineEnd();
        console.timelineEnd('label');
    }
}

///////////////////////////////////////////////////
/// DNS Tests : https://nodejs.org/api/dns.html ///
///////////////////////////////////////////////////

{
    dns.lookup("nodejs.org", (err, address, family) => {
        const _err: NodeJS.ErrnoException | null = err;
        const _address: string = address;
        const _family: number = family;
    });
    dns.lookup("nodejs.org", 4, (err, address, family) => {
        const _err: NodeJS.ErrnoException | null = err;
        const _address: string = address;
        const _family: number = family;
    });
    dns.lookup("nodejs.org", 6, (err, address, family) => {
        const _err: NodeJS.ErrnoException | null = err;
        const _address: string = address;
        const _family: number = family;
    });
    dns.lookup("nodejs.org", {}, (err, address, family) => {
        const _err: NodeJS.ErrnoException | null = err;
        const _address: string = address;
        const _family: number = family;
    });
    dns.lookup(
        "nodejs.org",
        {
            family: 4,
            hints: dns.ADDRCONFIG | dns.V4MAPPED,
            all: false
        },
        (err, address, family) => {
            const _err: NodeJS.ErrnoException | null = err;
            const _address: string = address;
            const _family: number = family;
        }
    );
    dns.lookup("nodejs.org", { all: true }, (err, addresses) => {
        const _err: NodeJS.ErrnoException | null = err;
        const _address: dns.LookupAddress[] = addresses;
    });
    dns.lookup("nodejs.org", { all: true, verbatim: true }, (err, addresses) => {
        const _err: NodeJS.ErrnoException | null = err;
        const _address: dns.LookupAddress[] = addresses;
    });

    function trueOrFalse(): boolean {
        return Math.random() > 0.5 ? true : false;
    }
    dns.lookup("nodejs.org", { all: trueOrFalse() }, (err, addresses, family) => {
        const _err: NodeJS.ErrnoException | null = err;
        const _addresses: string | dns.LookupAddress[] = addresses;
        const _family: number | undefined = family;
    });

    dns.lookupService("127.0.0.1", 0, (err, hostname, service) => {
        const _err: NodeJS.ErrnoException | null = err;
        const _hostname: string = hostname;
        const _service: string = service;
    });

    dns.resolve("nodejs.org", (err, addresses) => {
        const _addresses: string[] = addresses;
    });
    dns.resolve("nodejs.org", "A", (err, addresses) => {
        const _addresses: string[] = addresses;
    });
    dns.resolve("nodejs.org", "AAAA", (err, addresses) => {
        const _addresses: string[] = addresses;
    });
    dns.resolve("nodejs.org", "ANY", (err, addresses) => {
        const _addresses: dns.AnyRecord[] = addresses;
    });
    dns.resolve("nodejs.org", "MX", (err, addresses) => {
        const _addresses: dns.MxRecord[] = addresses;
    });

    dns.resolve4("nodejs.org", (err, addresses) => {
        const _addresses: string[] = addresses;
    });
    dns.resolve4("nodejs.org", { ttl: true }, (err, addresses) => {
        const _addresses: dns.RecordWithTtl[] = addresses;
    });
    {
        const ttl = false;
        dns.resolve4("nodejs.org", { ttl }, (err, addresses) => {
            const _addresses: string[] | dns.RecordWithTtl[] = addresses;
        });
    }

    dns.resolve6("nodejs.org", (err, addresses) => {
        const _addresses: string[] = addresses;
    });
    dns.resolve6("nodejs.org", { ttl: true }, (err, addresses) => {
        const _addresses: dns.RecordWithTtl[] = addresses;
    });
    {
        const ttl = false;
        dns.resolve6("nodejs.org", { ttl }, (err, addresses) => {
            const _addresses: string[] | dns.RecordWithTtl[] = addresses;
        });
    }
    {
        const resolver = new dns.Resolver();
        resolver.setServers(["4.4.4.4"]);
        resolver.resolve("nodejs.org", (err, addresses) => {
            const _addresses: string[] = addresses;
        });
        resolver.cancel();
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
}
