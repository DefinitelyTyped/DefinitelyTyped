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
import './test/events';
import './test/fs';
import './test/global';
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

import assert = require('assert');
import * as fs from 'fs';
import * as url from 'url';
import * as util from 'util';
import * as http from 'http';
import * as https from 'https';
import * as console2 from 'console';
import * as timers from 'timers';
import * as dns from 'dns';
import * as inspector from 'inspector';
import * as trace_events from 'trace_events';
import * as dgram from 'dgram';
import Module = require('module');

////////////////////////////////////////////////////
/// Url tests : https://nodejs.org/api/url.html
////////////////////////////////////////////////////

{
    {
        url.format(url.parse('http://www.example.com/xyz'));

        url.format('http://www.example.com/xyz');

        // https://google.com/search?q=you're%20a%20lizard%2C%20gary
        url.format({
            protocol: 'https',
            host: "google.com",
            pathname: 'search',
            query: { q: "you're a lizard, gary" }
        });

        const myURL = new url.URL('https://a:b@你好你好?abc#foo');
        url.format(myURL, { fragment: false, unicode: true, auth: false });
    }

    {
        const helloUrl = url.parse('http://example.com/?hello=world', true);
        let helloQuery = helloUrl.query['hello'];
        assert.equal(helloUrl.query['hello'], 'world');

        let strUrl = url.parse('http://example.com/?hello=world');
        let queryStr: string = strUrl.query!;

        strUrl = url.parse('http://example.com/?hello=world', false);
        queryStr = strUrl.query!;

        function getBoolean(): boolean { return false; }
        const urlUrl = url.parse('http://example.com/?hello=world', getBoolean());
        if (typeof(urlUrl.query) === 'string') {
            queryStr = urlUrl.query;
        } else if (urlUrl.query) {
            helloQuery = urlUrl.query['hello'];
        }
    }

    {
        const ascii: string = url.domainToASCII('español.com');
        const unicode: string = url.domainToUnicode('xn--espaol-zwa.com');
    }

    {
        let myURL = new url.URL('https://theuser:thepwd@example.org:81/foo/path?query=string#bar');
        assert.equal(myURL.hash, '#bar');
        assert.equal(myURL.host, 'example.org:81');
        assert.equal(myURL.hostname, 'example.org');
        assert.equal(myURL.href, 'https://theuser:thepwd@example.org:81/foo/path?query=string#bar');
        assert.equal(myURL.origin, 'https://example.org:81');
        assert.equal(myURL.password, 'thepwd');
        assert.equal(myURL.username, 'theuser');
        assert.equal(myURL.pathname, '/foo/path');
        assert.equal(myURL.port, "81");
        assert.equal(myURL.protocol, "https:");
        assert.equal(myURL.search, "?query=string");
        assert.equal(myURL.toString(), 'https://theuser:thepwd@example.org:81/foo/path?query=string#bar');
        assert(myURL.searchParams instanceof url.URLSearchParams);

        myURL.host = 'example.org:82';
        myURL.hostname = 'example.com';
        myURL.href = 'http://other.com';
        myURL.hash = 'baz';
        myURL.password = "otherpwd";
        myURL.username = "otheruser";
        myURL.pathname = "/otherPath";
        myURL.port = "82";
        myURL.protocol = "http";
        myURL.search = "a=b";
        assert.equal(myURL.href, 'http://otheruser:otherpwd@other.com:82/otherPath?a=b#baz');

        myURL = new url.URL('/foo', 'https://example.org/');
        assert.equal(myURL.href, 'https://example.org/foo');
        assert.equal(myURL.toJSON(), myURL.href);
    }

    {
        const searchParams = new url.URLSearchParams('abc=123');

        assert.equal(searchParams.toString(), 'abc=123');
        searchParams.forEach((value: string, name: string, me: url.URLSearchParams): void => {
            assert.equal(name, 'abc');
            assert.equal(value, '123');
            assert.equal(me, searchParams);
        });

        assert.equal(searchParams.get('abc'), '123');

        searchParams.append('abc', 'xyz');

        assert.deepEqual(searchParams.getAll('abc'), ['123', 'xyz']);

        const entries = searchParams.entries();
        assert.deepEqual(entries.next(), { value: ["abc", "123"], done: false });
        assert.deepEqual(entries.next(), { value: ["abc", "xyz"], done: false });
        assert.deepEqual(entries.next(), { value: undefined, done: true });

        const keys = searchParams.keys();
        assert.deepEqual(keys.next(), { value: "abc", done: false });
        assert.deepEqual(keys.next(), { value: "abc", done: false });
        assert.deepEqual(keys.next(), { value: undefined, done: true });

        const values = searchParams.values();
        assert.deepEqual(values.next(), { value: "123", done: false });
        assert.deepEqual(values.next(), { value: "xyz", done: false });
        assert.deepEqual(values.next(), { value: undefined, done: true });

        searchParams.set('abc', 'b');
        assert.deepEqual(searchParams.getAll('abc'), ['b']);

        searchParams.delete('a');
        assert(!searchParams.has('a'));
        assert.equal(searchParams.get('a'), null);

        searchParams.sort();
    }

    {
        const searchParams = new url.URLSearchParams({
            user: 'abc',
            query: ['first', 'second'] as ReadonlyArray<string>
        });

        assert.equal(searchParams.toString(), 'user=abc&query=first%2Csecond');
        assert.deepEqual(searchParams.getAll('query'), ['first,second']);
    }

    {
        // Using an array
        const params = new url.URLSearchParams([
            ['user', 'abc'],
            ['query', 'first'],
            ['query', 'second'],
        ] as ReadonlyArray<[string, string]>);
        assert.equal(params.toString(), 'user=abc&query=first&query=second');
    }

    {
        let path: string = url.fileURLToPath('file://test');
        path = url.fileURLToPath(new url.URL('file://test'));
    }

    {
        const path: url.URL = url.pathToFileURL('file://test');
    }
}

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
    async function testPromisify() {
        const setTimeout = util.promisify(timers.setTimeout);
        let v: void = await setTimeout(100); // tslint:disable-line no-void-expression void-return
        let s: string = await setTimeout(100, "");

        const setImmediate = util.promisify(timers.setImmediate);
        v = await setImmediate();
        s = await setImmediate("");
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

/*****************************************************************************
 *                                                                           *
 * The following tests are the modules not mentioned in document but existed *
 *                                                                           *
 *****************************************************************************/

///////////////////////////////////////////////////////////
/// Constants Tests                                     ///
///////////////////////////////////////////////////////////

import * as constants from 'constants';
{
    let str: string;
    let num: number;
    num = constants.SIGHUP;
    num = constants.SIGINT;
    num = constants.SIGQUIT;
    num = constants.SIGILL;
    num = constants.SIGTRAP;
    num = constants.SIGABRT;
    num = constants.SIGIOT;
    num = constants.SIGBUS;
    num = constants.SIGFPE;
    num = constants.SIGKILL;
    num = constants.SIGUSR1;
    num = constants.SIGSEGV;
    num = constants.SIGUSR2;
    num = constants.SIGPIPE;
    num = constants.SIGALRM;
    num = constants.SIGTERM;
    num = constants.SIGCHLD;
    num = constants.SIGSTKFLT;
    num = constants.SIGCONT;
    num = constants.SIGSTOP;
    num = constants.SIGTSTP;
    num = constants.SIGTTIN;
    num = constants.SIGTTOU;
    num = constants.SIGURG;
    num = constants.SIGXCPU;
    num = constants.SIGXFSZ;
    num = constants.SIGVTALRM;
    num = constants.SIGPROF;
    num = constants.SIGWINCH;
    num = constants.SIGIO;
    num = constants.SIGPOLL;
    num = constants.SIGPWR;
    num = constants.SIGSYS;
    num = constants.SIGUNUSED;
    num = constants.O_RDONLY;
    num = constants.O_WRONLY;
    num = constants.O_RDWR;
    num = constants.S_IFMT;
    num = constants.S_IFREG;
    num = constants.S_IFDIR;
    num = constants.S_IFCHR;
    num = constants.S_IFBLK;
    num = constants.S_IFIFO;
    num = constants.S_IFLNK;
    num = constants.S_IFSOCK;
    num = constants.O_CREAT;
    num = constants.O_EXCL;
    num = constants.O_NOCTTY;
    num = constants.O_TRUNC;
    num = constants.O_APPEND;
    num = constants.O_DIRECTORY;
    num = constants.O_NOATIME;
    num = constants.O_NOFOLLOW;
    num = constants.O_SYNC;
    num = constants.O_DSYNC;
    num = constants.O_DIRECT;
    num = constants.O_NONBLOCK;
    num = constants.S_IRWXU;
    num = constants.S_IRUSR;
    num = constants.S_IWUSR;
    num = constants.S_IXUSR;
    num = constants.S_IRWXG;
    num = constants.S_IRGRP;
    num = constants.S_IWGRP;
    num = constants.S_IXGRP;
    num = constants.S_IRWXO;
    num = constants.S_IROTH;
    num = constants.S_IWOTH;
    num = constants.S_IXOTH;
    num = constants.F_OK;
    num = constants.R_OK;
    num = constants.W_OK;
    num = constants.X_OK;
    num = constants.SSL_OP_ALL;
    num = constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION;
    num = constants.SSL_OP_CIPHER_SERVER_PREFERENCE;
    num = constants.SSL_OP_CISCO_ANYCONNECT;
    num = constants.SSL_OP_COOKIE_EXCHANGE;
    num = constants.SSL_OP_CRYPTOPRO_TLSEXT_BUG;
    num = constants.SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS;
    num = constants.SSL_OP_EPHEMERAL_RSA;
    num = constants.SSL_OP_LEGACY_SERVER_CONNECT;
    num = constants.SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER;
    num = constants.SSL_OP_MICROSOFT_SESS_ID_BUG;
    num = constants.SSL_OP_MSIE_SSLV2_RSA_PADDING;
    num = constants.SSL_OP_NETSCAPE_CA_DN_BUG;
    num = constants.SSL_OP_NETSCAPE_CHALLENGE_BUG;
    num = constants.SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG;
    num = constants.SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG;
    num = constants.SSL_OP_NO_COMPRESSION;
    num = constants.SSL_OP_NO_QUERY_MTU;
    num = constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION;
    num = constants.SSL_OP_NO_SSLv2;
    num = constants.SSL_OP_NO_SSLv3;
    num = constants.SSL_OP_NO_TICKET;
    num = constants.SSL_OP_NO_TLSv1;
    num = constants.SSL_OP_NO_TLSv1_1;
    num = constants.SSL_OP_NO_TLSv1_2;
    num = constants.SSL_OP_PKCS1_CHECK_1;
    num = constants.SSL_OP_PKCS1_CHECK_2;
    num = constants.SSL_OP_SINGLE_DH_USE;
    num = constants.SSL_OP_SINGLE_ECDH_USE;
    num = constants.SSL_OP_SSLEAY_080_CLIENT_DH_BUG;
    num = constants.SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG;
    num = constants.SSL_OP_TLS_BLOCK_PADDING_BUG;
    num = constants.SSL_OP_TLS_D5_BUG;
    num = constants.SSL_OP_TLS_ROLLBACK_BUG;
    num = constants.ENGINE_METHOD_RSA;
    num = constants.ENGINE_METHOD_DSA;
    num = constants.ENGINE_METHOD_DH;
    num = constants.ENGINE_METHOD_RAND;
    num = constants.ENGINE_METHOD_ECDH;
    num = constants.ENGINE_METHOD_ECDSA;
    num = constants.ENGINE_METHOD_CIPHERS;
    num = constants.ENGINE_METHOD_DIGESTS;
    num = constants.ENGINE_METHOD_STORE;
    num = constants.ENGINE_METHOD_PKEY_METHS;
    num = constants.ENGINE_METHOD_PKEY_ASN1_METHS;
    num = constants.ENGINE_METHOD_ALL;
    num = constants.ENGINE_METHOD_NONE;
    num = constants.DH_CHECK_P_NOT_SAFE_PRIME;
    num = constants.DH_CHECK_P_NOT_PRIME;
    num = constants.DH_UNABLE_TO_CHECK_GENERATOR;
    num = constants.DH_NOT_SUITABLE_GENERATOR;
    num = constants.ALPN_ENABLED;
    num = constants.RSA_PKCS1_PADDING;
    num = constants.RSA_SSLV23_PADDING;
    num = constants.RSA_NO_PADDING;
    num = constants.RSA_PKCS1_OAEP_PADDING;
    num = constants.RSA_X931_PADDING;
    num = constants.RSA_PKCS1_PSS_PADDING;
    num = constants.POINT_CONVERSION_COMPRESSED;
    num = constants.POINT_CONVERSION_UNCOMPRESSED;
    num = constants.POINT_CONVERSION_HYBRID;
    str = constants.defaultCoreCipherList;
    str = constants.defaultCipherList;
}

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
/// module tests : https://nodejs.org/api/modules.html
////////////////////////////////////////////////////
import moduleModule = require('module');

{
    require.extensions[".ts"] = () => "";

    Module.runMain();
    const s: string = Module.wrap("some code");

    const m1: Module = new Module("moduleId");
    const m2: Module = new Module.Module("moduleId");
    const b: string[] = Module.builtinModules;
    let paths: string[] = module.paths;
    const path: string = module.path;
    paths = m1.paths;

    const customRequire1 = moduleModule.createRequireFromPath('./test');
    const customRequire2 = moduleModule.createRequire('./test');

    customRequire1('test');
    customRequire2('test');

    const resolved1: string = customRequire1.resolve('test');
    const resolved2: string = customRequire2.resolve('test');

    const paths1: string[] | null  = customRequire1.resolve.paths('test');
    const paths2: string[] | null  = customRequire2.resolve.paths('test');

    const cachedModule1: Module = customRequire1.cache['/path/to/module.js'];
    const cachedModule2: Module = customRequire2.cache['/path/to/module.js'];

    const main1: Module | undefined = customRequire1.main;
    const main2: Module | undefined = customRequire2.main;
}

/////////////////////////////////////////////////////////
/// stream tests : https://nodejs.org/api/stream.html ///
/////////////////////////////////////////////////////////
import stream = require('stream');
import tty = require('tty');

{
    const writeStream = fs.createWriteStream('./index.d.ts');
    const _wom = writeStream.writableObjectMode; // $ExpectType boolean

    const readStream = fs.createReadStream('./index.d.ts');
    const _rom = readStream.readableObjectMode; // $ExpectType boolean

    const x: stream.Readable = process.stdin;
    const stdin: tty.ReadStream = process.stdin;
    const stdout: tty.WriteStream = process.stdout;
    const stderr: tty.WriteStream = process.stderr;
}

/////////////////////////////////////////////////////////
/// dgram tests : https://nodejs.org/api/dgram.html ///
/////////////////////////////////////////////////////////
{
    let sock: dgram.Socket = dgram.createSocket("udp4");
    sock = dgram.createSocket({ type: "udp4" });
    sock = dgram.createSocket({
        type: "udp4",
        reuseAddr: true,
        ipv6Only: false,
        recvBufferSize: 4096,
        sendBufferSize: 4096,
        lookup: dns.lookup,
    });
    sock = dgram.createSocket("udp6", (msg, rinfo) => {
        msg; // $ExpectType Buffer
        rinfo; // $ExpectType RemoteInfo
    });
    sock.addMembership("233.252.0.0");
    sock.addMembership("233.252.0.0", "192.0.2.1");
    sock.address().address; // $ExpectType string
    sock.address().family; // $ExpectType string
    sock.address().port; // $ExpectType number
    sock.bind();
    sock.bind(() => undefined);
    sock.bind(8000);
    sock.bind(8000, () => undefined);
    sock.bind(8000, "192.0.2.1");
    sock.bind(8000, "192.0.2.1", () => undefined);
    sock.bind({}, () => undefined);
    sock.bind({ port: 8000, address: "192.0.2.1", exclusive: true });
    sock.bind({ fd: 7, exclusive: true });
    sock.close();
    sock.close(() => undefined);
    sock.connect(8000);
    sock.connect(8000, "192.0.2.1");
    sock.connect(8000, () => undefined);
    sock.connect(8000, "192.0.2.1", () => undefined);
    sock.disconnect();
    sock.dropMembership("233.252.0.0");
    sock.dropMembership("233.252.0.0", "192.0.2.1");
    sock.getRecvBufferSize(); // $ExpectType number
    sock.getSendBufferSize(); // $ExpectType number
    sock = sock.ref();
    sock.remoteAddress().address; // $ExpectType string
    sock.remoteAddress().family; // $ExpectType string
    sock.remoteAddress().port; // $ExpectType number
    sock.send("datagram");
    sock.send(new Uint8Array(256), 8000, (err) => {
        err; // $ExpectType Error | null
    });
    sock.send(Buffer.alloc(256), 8000, "192.0.2.1");
    sock.send(new Uint8Array(256), 128, 64);
    sock.send("datagram", 128, 64, (err) => undefined);
    sock.send(new Uint8Array(256), 128, 64, 8000);
    sock.send(new Uint8Array(256), 128, 64, 8000, (err) => undefined);
    sock.send(Buffer.alloc(256), 128, 64, 8000, "192.0.2.1");
    sock.send("datagram", 128, 64, 8000, "192.0.2.1", (err) => undefined);
    sock.setBroadcast(true);
    sock.setMulticastInterface("192.0.2.1");
    sock.setMulticastLoopback(false);
    sock.setMulticastTTL(128);
    sock.setRecvBufferSize(4096);
    sock.setSendBufferSize(4096);
    sock.setTTL(128);
    sock = sock.unref();

    sock.on("close", () => undefined);
    sock.on("connect", () => undefined);
    sock.on("error", (exception) => {
        exception; // $ExpectType Error
    });
    sock.on("listening", () => undefined);
    sock.on("message", (msg, rinfo) => {
        msg; // $ExpectType Buffer
        rinfo.address; // $ExpectType string
        rinfo.family; // $ExpectType "IPv4" | "IPv6"
        rinfo.port; // $ExpectType number
        rinfo.size; // $ExpectType number
    });
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
    if (util.types.isBigInt64Array(value)) {
        // $ExpectType BigInt64Array
        const b = value;
    } else if (util.types.isBigUint64Array(value)) {
        // $ExpectType BigUint64Array
        const b = value;
    } else {
        // $ExpectType number
        const b = value;
    }

    const arg1UnknownError: (arg: string) => Promise<number> = util.promisify((arg: string, cb: (err: unknown, result: number) => void): void => { });
    const arg1AnyError: (arg: string) => Promise<number> = util.promisify((arg: string, cb: (err: any, result: number) => void): void => { });
}

// FS Tests
{
    const bigStats: fs.BigIntStats = fs.statSync('.', { bigint: true });
    const anyStats: fs.Stats | fs.BigIntStats = fs.statSync('.', { bigint: Math.random() > 0.5 });
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

//////////////////////////////////////////////////////////////////////////
/// `globalThis` Tests: https://node.green/#ES2020-features-globalThis ///
//////////////////////////////////////////////////////////////////////////

const isGlobal: NodeJS.Global = global;
const isGlobalThis: typeof globalThis = global;
