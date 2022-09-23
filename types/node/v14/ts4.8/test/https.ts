import * as http from 'node:http';
import * as https from 'node:https';
import * as net from 'node:net';
import * as stream from 'node:stream';
import * as tls from 'node:tls';
import * as url from 'node:url';
import * as dns from 'node:dns';

// https tests
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

// https Server (with custom IncomingMessage and ServerResponse)

{
    let foo: 'foo';
    let bar: 'bar';

    class MyIncomingMessage extends http.IncomingMessage {
        foo: typeof foo;
    }

    class MyServerResponse extends http.ServerResponse {
        bar: typeof bar;
    }

    function reqListener(req: MyIncomingMessage, res: MyServerResponse): void {}

    let server = new https.Server({ IncomingMessage: MyIncomingMessage, ServerResponse: MyServerResponse });
    server = new https.Server({ IncomingMessage: MyIncomingMessage, ServerResponse: MyServerResponse }, (req, res) => {
        foo = req.foo;
        bar = res.bar;
    });
    server = new https.Server({ IncomingMessage: MyIncomingMessage, ServerResponse: MyServerResponse }, reqListener);

    server.addListener('checkContinue', (req, res) => {
        foo = req.foo;
        bar = res.bar;
    });
    server.addListener('checkExpectation', (req, res) => {
        foo = req.foo;
        bar = res.bar;
    });
    server.addListener('connect', req => {
        foo = req.foo;
    });
    server.addListener('request', (req, res) => {
        foo = req.foo;
        bar = res.bar;
    });
    server.addListener('upgrade', req => {
        foo = req.foo;
    });

    server.on('checkContinue', (req, res) => {
        foo = req.foo;
        bar = res.bar;
    });
    server.on('checkExpectation', (req, res) => {
        foo = req.foo;
        bar = res.bar;
    });
    server.on('connect', req => {
        foo = req.foo;
    });
    server.on('request', (req, res) => {
        foo = req.foo;
        bar = res.bar;
    });
    server.on('upgrade', req => {
        foo = req.foo;
    });

    server.once('checkContinue', (req, res) => {
        foo = req.foo;
        bar = res.bar;
    });
    server.once('checkExpectation', (req, res) => {
        foo = req.foo;
        bar = res.bar;
    });
    server.once('connect', req => {
        foo = req.foo;
    });
    server.once('request', (req, res) => {
        foo = req.foo;
        bar = res.bar;
    });
    server.once('upgrade', req => {
        foo = req.foo;
    });

    server.prependListener('checkContinue', (req, res) => {
        foo = req.foo;
        bar = res.bar;
    });
    server.prependListener('checkExpectation', (req, res) => {
        foo = req.foo;
        bar = res.bar;
    });
    server.prependListener('connect', req => {
        foo = req.foo;
    });
    server.prependListener('request', (req, res) => {
        foo = req.foo;
        bar = res.bar;
    });
    server.prependListener('upgrade', req => {
        foo = req.foo;
    });

    server.prependOnceListener('checkContinue', (req, res) => {
        foo = req.foo;
        bar = res.bar;
    });
    server.prependOnceListener('checkExpectation', (req, res) => {
        foo = req.foo;
        bar = res.bar;
    });
    server.prependOnceListener('connect', req => {
        foo = req.foo;
    });
    server.prependOnceListener('request', (req, res) => {
        foo = req.foo;
        bar = res.bar;
    });
    server.prependOnceListener('upgrade', req => {
        foo = req.foo;
    });
}

// net server events

{
    let server = new https.Server();
    let _socket = new stream.Duplex();
    let _err = new Error();
    let _bool = true;

    server = server.addListener("close", () => {});
    server = server.addListener("connection", (socket) => {
      _socket = socket;
    });
    server = server.addListener("error", (err) => {
      _err = err;
    });
    server = server.addListener("listening", () => {});

    _bool = server.emit("close");
    _bool = server.emit("connection", _socket);
    _bool = server.emit("error", _err);
    _bool = server.emit("listening");

    server = server.on("close", () => {});
    server = server.on("connection", (socket) => {
      _socket = socket;
    });
    server = server.on("error", (err) => {
      _err = err;
    });
    server = server.on("listening", () => {});

    server = server.once("close", () => {});
    server = server.once("connection", (socket) => {
      _socket = socket;
    });
    server = server.once("error", (err) => {
      _err = err;
    });
    server = server.once("listening", () => {});

    server = server.prependListener("close", () => {});
    server = server.prependListener("connection", (socket) => {
      _socket = socket;
    });
    server = server.prependListener("error", (err) => {
      _err = err;
    });
    server = server.prependListener("listening", () => {});

    server = server.prependOnceListener("close", () => {});
    server = server.prependOnceListener("connection", (socket) => {
      _socket = socket;
    });
    server = server.prependOnceListener("error", (err) => {
      _err = err;
    });
    server = server.prependOnceListener("listening", () => {});
}

// tls server events

{
    let server = new https.Server();
    let _socket = new tls.TLSSocket(new net.Socket());
    let _buffer = Buffer.from("");
    let _err = new Error();
    let _boolean = true;
    let sessionCallback = (err: Error, resp: Buffer) => {};
    let ocspRequestCallback = (err: Error | null, resp: Buffer) => {};

    server = server.addListener("keylog", (ln, tlsSocket) => {
        _buffer = ln;
        _socket = tlsSocket;
    });
    server = server.addListener("newSession", (sessionId, sessionData, callback) => {
        _buffer = sessionId;
        _buffer = sessionData;
        sessionCallback = callback;
    });
    server = server.addListener("OCSPRequest", (certificate, issuer, callback) => {
        _buffer = certificate;
        _buffer = issuer;
        ocspRequestCallback = callback;
    });
    server = server.addListener("resumeSession", (sessionId, callback) => {
        _buffer = sessionId;
        sessionCallback = callback;
    });
    server = server.addListener("secureConnection", (tlsSocket) => {
        _socket = tlsSocket;
    });
    server = server.addListener("tlsClientError", (err, tlsSocket) => {
        _err = err;
        _socket = tlsSocket;
    });

    _boolean = server.emit("keylog", _buffer, _socket);
    _boolean = server.emit("newSession", _buffer, _buffer, sessionCallback);
    _boolean = server.emit("OCSPRequest", _buffer, _buffer, ocspRequestCallback);
    _boolean = server.emit("resumeSession", _buffer, sessionCallback);
    _boolean = server.emit("secureConnection", _socket);
    _boolean = server.emit("tlsClientError", _err, _socket);

    server = server.on("keylog", (ln, tlsSocket) => {
        _buffer = ln;
        _socket = tlsSocket;
    });
    server = server.on("newSession", (sessionId, sessionData, callback) => {
        _buffer = sessionId;
        _buffer = sessionData;
        sessionCallback = callback;
    });
    server = server.on("OCSPRequest", (certificate, issuer, callback) => {
        _buffer = certificate;
        _buffer = issuer;
        ocspRequestCallback = callback;
    });
    server = server.on("resumeSession", (sessionId, callback) => {
        _buffer = sessionId;
        sessionCallback = callback;
    });
    server = server.on("secureConnection", (tlsSocket) => {
        _socket = tlsSocket;
    });
    server = server.on("tlsClientError", (err, tlsSocket) => {
        _err = err;
        _socket = tlsSocket;
    });

    server = server.once("keylog", (ln, tlsSocket) => {
        _buffer = ln;
        _socket = tlsSocket;
    });
    server = server.once("newSession", (sessionId, sessionData, callback) => {
        _buffer = sessionId;
        _buffer = sessionData;
        sessionCallback = callback;
    });
    server = server.once("OCSPRequest", (certificate, issuer, callback) => {
        _buffer = certificate;
        _buffer = issuer;
        ocspRequestCallback = callback;
    });
    server = server.once("resumeSession", (sessionId, callback) => {
        _buffer = sessionId;
        sessionCallback = callback;
    });
    server = server.once("secureConnection", (tlsSocket) => {
        _socket = tlsSocket;
    });
    server = server.once("tlsClientError", (err, tlsSocket) => {
        _err = err;
        _socket = tlsSocket;
    });

    server = server.prependListener("keylog", (ln, tlsSocket) => {
        _buffer = ln;
        _socket = tlsSocket;
    });
    server = server.prependListener("newSession", (sessionId, sessionData, callback) => {
        _buffer = sessionId;
        _buffer = sessionData;
        sessionCallback = callback;
    });
    server = server.prependListener("OCSPRequest", (certificate, issuer, callback) => {
        _buffer = certificate;
        _buffer = issuer;
        ocspRequestCallback = callback;
    });
    server = server.prependListener("resumeSession", (sessionId, callback) => {
        _buffer = sessionId;
        sessionCallback = callback;
    });
    server = server.prependListener("secureConnection", (tlsSocket) => {
        _socket = tlsSocket;
    });
    server = server.prependListener("tlsClientError", (err, tlsSocket) => {
        _err = err;
        _socket = tlsSocket;
    });

    server = server.prependOnceListener("keylog", (ln, tlsSocket) => {
        _buffer = ln;
        _socket = tlsSocket;
    });
    server = server.prependOnceListener("newSession", (sessionId, sessionData, callback) => {
        _buffer = sessionId;
        _buffer = sessionData;
        sessionCallback = callback;
    });
    server = server.prependOnceListener("OCSPRequest", (certificate, issuer, callback) => {
        _buffer = certificate;
        _buffer = issuer;
        ocspRequestCallback = callback;
    });
    server = server.prependOnceListener("resumeSession", (sessionId, callback) => {
        _buffer = sessionId;
        sessionCallback = callback;
    });
    server = server.prependOnceListener("secureConnection", (tlsSocket) => {
        _socket = tlsSocket;
    });
    server = server.prependOnceListener("tlsClientError", (err, tlsSocket) => {
        _err = err;
        _socket = tlsSocket;
    });
}

// https server events
{
    let server = new https.Server();
    let _socket = new stream.Duplex();
    let _req =  new http.IncomingMessage(new net.Socket());
    let _res = new http.ServerResponse(_req);
    let _err = new Error();
    let _head = Buffer.from("");
    let _bool = true;

    server = server.addListener("checkContinue", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.addListener("checkExpectation", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.addListener("clientError", (err, socket) => {
      _err = err;
      _socket = socket;
    });
    server = server.addListener("connect", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });
    server = server.addListener("request", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.addListener("upgrade", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });

    _bool = server.emit("checkContinue", _req, _res);
    _bool = server.emit("checkExpectation", _req, _res);
    _bool = server.emit("clientError", _err, _socket);
    _bool = server.emit("connect", _req, _socket, _head);
    _bool = server.emit("request", _req, _res);
    _bool = server.emit("upgrade", _req, _socket, _head);

    server = server.on("checkContinue", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.on("checkExpectation", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.on("clientError", (err, socket) => {
      _err = err;
      _socket = socket;
    });
    server = server.on("connect", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });
    server = server.on("request", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.on("upgrade", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });

    server = server.once("checkContinue", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.once("checkExpectation", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.once("clientError", (err, socket) => {
      _err = err;
      _socket = socket;
    });
    server = server.once("connect", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });
    server = server.once("request", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.once("upgrade", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });

    server = server.prependListener("checkContinue", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.prependListener("checkExpectation", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.prependListener("clientError", (err, socket) => {
      _err = err;
      _socket = socket;
    });
    server = server.prependListener("connect", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });
    server = server.prependListener("request", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.prependListener("upgrade", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });

    server = server.prependOnceListener("checkContinue", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.prependOnceListener("checkExpectation", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.prependOnceListener("clientError", (err, socket) => {
      _err = err;
      _socket = socket;
    });
    server = server.prependOnceListener("connect", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });
    server = server.prependOnceListener("request", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.prependOnceListener("upgrade", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });
}

{
  https.request({ lookup: undefined });
  https.request({ lookup: dns.lookup });
  https.request({ lookup: (hostname, options, cb) => { cb(null, '', 1); } });
}
