import * as http from 'http';
import * as url from 'url';
import * as net from 'net';

// http Server
{
    function reqListener(req: http.IncomingMessage, res: http.ServerResponse): void {}

    let server: http.Server = new http.Server();

    class MyIncomingMessage extends http.IncomingMessage {
        foo: number;
    }

    class MyServerResponse extends http.ServerResponse {
        foo: string;
    }

    server = new http.Server({ IncomingMessage: MyIncomingMessage});

    server = new http.Server({
        IncomingMessage: MyIncomingMessage,
        ServerResponse: MyServerResponse
    }, reqListener);

    server = http.createServer(reqListener);
    server = http.createServer({ IncomingMessage: MyIncomingMessage });
    server = http.createServer({ ServerResponse: MyServerResponse }, reqListener);
    server = http.createServer({ insecureHTTPParser: true }, reqListener);

    // test public props
    const maxHeadersCount: number | null = server.maxHeadersCount;
    const headersTimeout: number = server.headersTimeout;
    const timeout: number = server.timeout;
    const listening: boolean = server.listening;
    const keepAliveTimeout: number = server.keepAliveTimeout;
    const requestTimeout: number = server.requestTimeout;
    server.setTimeout().setTimeout(1000).setTimeout(() => {}).setTimeout(100, () => {});
}

// http IncomingMessage
// http ServerResponse
{
    // incoming
    const incoming: http.IncomingMessage = new http.IncomingMessage(new net.Socket());

    incoming.setEncoding('utf8');
    incoming.setTimeout(1000).setTimeout(100, () => {});

    // stream
    incoming.pause();
    incoming.resume();

    // response
    const res: http.ServerResponse = new http.ServerResponse(incoming);

    // test headers
    res.setHeader('Content-Type', 'text/plain');
    const bool: boolean = res.hasHeader('Content-Type');
    const headers: string[] = res.getHeaderNames();

    // trailers
    res.addTrailers([
        ['x-fOo', 'xOxOxOx'],
        ['x-foO', 'OxOxOxO'],
        ['X-fOo', 'xOxOxOx'],
        ['X-foO', 'OxOxOxO']
    ] as ReadonlyArray<[string, string]>);
    res.addTrailers({ 'x-foo': 'bar' });

    // writeHead
    res.writeHead(200, 'OK\r\nContent-Type: text/html\r\n').end();
    res.writeHead(200, { 'Transfer-Encoding': 'chunked' });
    res.writeHead(200, ['Transfer-Encoding', 'chunked']);
    res.writeHead(200);

    // writeProcessing
    res.writeProcessing();

    // write string
    res.write('Part of my res.');
    // write buffer
    const chunk = Buffer.alloc(16390, 'Й');
    res.write(chunk);
    res.write(chunk, 'hex');

    // end
    res.end("end msg");
    // without msg
    res.end();

    // flush
    res.flushHeaders();
}

// http ClientRequest
{
    let req: http.ClientRequest = new http.ClientRequest("https://www.google.com");
    req = new http.ClientRequest(new url.URL("https://www.google.com"));
    req = new http.ClientRequest({ path: 'http://0.0.0.0' });
    req = new http.ClientRequest({ setHost: false });

    // header
    req.setHeader('Content-Type', 'text/plain');
    const bool: boolean = req.hasHeader('Content-Type');
    const headers: string[] = req.getHeaderNames();
    req.removeHeader('Date');

    // write
    const chunk = Buffer.alloc(16390, 'Й');
    req.write(chunk);
    req.write('a');
    req.end();

    // abort
    req.abort();

    // connection
    req.connection?.on('pause', () => { });

    if (req.socket) {
        req.socket.on("connect", () => {});
    }

    // event
    req.on('data', () => { });

    // path
    const path: string = req.path;
    req.path = '/';

    // method
    const method: string = req.method;
}

{
    // Status codes
    let codeMessage: string = http.STATUS_CODES['400']!;
    codeMessage = http.STATUS_CODES[400]!;
}

{
    let agent: http.Agent = new http.Agent({
        keepAlive: true,
        keepAliveMsecs: 10000,
        maxSockets: Infinity,
        maxTotalSockets: Infinity,
        maxFreeSockets: 256,
        timeout: 15000,
        scheduling: 'lifo',
    });

    agent = http.globalAgent;

    let sockets: NodeJS.ReadOnlyDict<net.Socket[]> = agent.sockets;
    sockets = agent.freeSockets;

    http.request({ agent: false });
    http.request({ agent });
    http.request({ agent: undefined });
    // ensure compatibility with url.parse()
    http.request(url.parse("http://www.example.org/xyz"));
}

{
    http.get('http://www.example.com/xyz');
    http.request('http://www.example.com/xyz');

    http.get('http://www.example.com/xyz', (res: http.IncomingMessage): void => {});
    http.request('http://www.example.com/xyz', (res: http.IncomingMessage): void => {});

    http.get(new url.URL('http://www.example.com/xyz'));
    http.request(new url.URL('http://www.example.com/xyz'));

    http.get(new url.URL('http://www.example.com/xyz'), (res: http.IncomingMessage): void => {});
    http.request(new url.URL('http://www.example.com/xyz'), (res: http.IncomingMessage): void => {});

    const opts: http.RequestOptions = {
        path: '"/some/path'
    };
    http.get(new url.URL('http://www.example.com'), opts);
    http.request(new url.URL('http://www.example.com'), opts);
    http.get(new url.URL('http://www.example.com/xyz'), opts, (res: http.IncomingMessage): void => {});
    http.request(new url.URL('http://www.example.com/xyz'), opts, (res: http.IncomingMessage): void => {});
}

{
    // Make sure .listen() and .close() return a Server instance
    http.createServer().listen(0).close().address();
    net.createServer().listen(0).close().address();
}

{
    const request = http.request({ path: 'http://0.0.0.0' });
    request.once('error', () => { });
    request.setNoDelay(true);
    request.abort();
}

// http request options
{
    const requestOpts: http.RequestOptions = {
        timeout: 30000
    };

    const clientArgs: http.ClientRequestArgs = {
        timeout: 30000
    };
}

// http headers
{
    const headers: http.IncomingHttpHeaders = {
        'content-type': 'application/json',
        'set-cookie': [ 'type=ninja', 'language=javascript' ]
    };

    headers["access-control-request-headers"] = "content-type, x-custom-header";
    headers["access-control-request-method"] = "PUT";
    headers.origin = "https://example.com";
}

// statics
{
    const maxHeaderSize = http.maxHeaderSize;
}
