import {
    Settings,
    Http2Session,
    Http2Stream,
    ClientSessionRequestOptions,
    ClientHttp2Session,
    SessionState,
    StreamState,
    ClientHttp2Stream,
    IncomingHttpStatusHeader,
    ServerHttp2Stream,
    ServerStreamResponseOptions,
    ServerStreamFileResponseOptions,
    StatOptions,
    ServerStreamFileResponseOptionsWithError,
    Http2Server,
    Http2SecureServer,
    createSecureServer,
    Http2ServerRequest,
    Http2ServerResponse,
    SecureServerOptions,
    ClientSessionOptions,
    SecureClientSessionOptions,
    ServerHttp2Session,
    connect,
    getDefaultSettings,
    getPackedSettings,
    getUnpackedSettings,
    IncomingHttpHeaders,
    OutgoingHttpHeaders,
    createServer,
    constants,
    ServerOptions
} from "http2";
import { EventEmitter } from "events";
import { Stats } from "fs";
import { Socket, Server } from "net";
import { TLSSocket } from "tls";
import { Duplex, Readable } from "stream";
import { URL } from 'url';

// Headers & Settings
{
    const headers: OutgoingHttpHeaders = {
        ':status': 200,
        'content-type': 'text-plain',
        ABC: ['has', 'more', 'than', 'one', 'value'],
        undef: undefined
    };

    const settings: Settings = {
        headerTableSize: 0,
        enablePush: true,
        initialWindowSize: 0,
        maxFrameSize: 0,
        maxConcurrentStreams: 0,
        maxHeaderListSize: 0
    };
}

// Http2Session
{
    const http2Session: Http2Session = {} as any;
    const ee: EventEmitter = http2Session;

    http2Session.on('close', () => {});
    http2Session.on('connect', (session: Http2Session, socket: Socket) => {});
    http2Session.on('error', (err: Error) => {});
    http2Session.on('frameError', (frameType: number, errorCode: number, streamID: number) => {});
    http2Session.on('goaway', (errorCode: number, lastStreamID: number, opaqueData: Buffer) => {});
    http2Session.on('localSettings', (settings: Settings) => {});
    http2Session.on('remoteSettings', (settings: Settings) => {});
    http2Session.on('stream', (stream: Http2Stream, headers: IncomingHttpHeaders, flags: number) => {});
    http2Session.on('timeout', () => {});
    http2Session.on('ping', () => {});

    http2Session.destroy();

    const alpnProtocol: string | undefined = http2Session.alpnProtocol;
    const destroyed: boolean | undefined = http2Session.destroyed;
    const encrypted: boolean | undefined = http2Session.encrypted;
    const originSet: string[] | undefined = http2Session.originSet;
    const pendingSettingsAck: boolean = http2Session.pendingSettingsAck;
    let settings: Settings = http2Session.localSettings;
    const closed: boolean = http2Session.closed;
    const connecting: boolean = http2Session.connecting;
    settings = http2Session.remoteSettings;

    http2Session.ref();
    http2Session.unref();

    const headers: OutgoingHttpHeaders = {};
    const options: ClientSessionRequestOptions = {
        endStream: true,
        exclusive: true,
        parent: 0,
        weight: 0,
        waitForTrailers: true
    };
    (http2Session as ClientHttp2Session).request();
    (http2Session as ClientHttp2Session).request(headers);
    (http2Session as ClientHttp2Session).request(headers, options);

    const stream: Http2Stream = {} as any;
    http2Session.setTimeout(100, () => {});
    http2Session.close(() => {});

    const socket: Socket | TLSSocket = http2Session.socket;
    let state: SessionState = http2Session.state;
    state = {
        effectiveLocalWindowSize: 0,
        effectiveRecvDataLength: 0,
        nextStreamID: 0,
        localWindowSize: 0,
        lastProcStreamID: 0,
        remoteWindowSize: 0,
        outboundQueueSize: 0,
        deflateDynamicTableSize: 0,
        inflateDynamicTableSize: 0
    };

    http2Session.settings(settings);

    http2Session.ping((err: Error | null, duration: number, payload: Buffer) => {});
    http2Session.ping(Buffer.from(''), (err: Error | null, duration: number, payload: Buffer) => {});
    http2Session.ping(new DataView(new Int8Array(1).buffer), (err: Error | null, duration: number, payload: Buffer) => {});
}

// Http2Stream
{
    const http2Stream: Http2Stream = {} as any;
    const duplex: Duplex = http2Stream;

    http2Stream.on('aborted', () => {});
    http2Stream.on('error', (err: Error) => {});
    http2Stream.on('frameError', (frameType: number, errorCode: number, streamID: number) => {});
    http2Stream.on('streamClosed', (code: number) => {});
    http2Stream.on('timeout', () => {});
    http2Stream.on('trailers', (trailers: IncomingHttpHeaders, flags: number) => {});
    http2Stream.on('wantTrailers', () => {});

    const aborted: boolean = http2Stream.aborted;
    const bufferSize: number = http2Stream.bufferSize;
    const closed: boolean = http2Stream.closed;
    const destroyed: boolean = http2Stream.destroyed;
    const id: number | undefined = http2Stream.id;
    const pending: boolean = http2Stream.pending;

    http2Stream.priority({
        exclusive: true,
        parent: 0,
        weight: 0,
        silent: true
    });

    const sesh: Http2Session = http2Stream.session;

    http2Stream.setTimeout(100, () => {});
    const trailers: OutgoingHttpHeaders = {};
    http2Stream.sendTrailers(trailers);

    let state: StreamState = http2Stream.state;
    state = {
        localWindowSize: 0,
        state: 0,
        localClose: 0,
        remoteClose: 0,
        sumDependencyWeight: 0,
        weight: 0
    };

    http2Stream.close();
    http2Stream.close(0);
    http2Stream.close(0, () => {});
    http2Stream.close(undefined, () => {});

    // ClientHttp2Stream
    const clientHttp2Stream: ClientHttp2Stream = {} as any;
    clientHttp2Stream.on('headers', (headers: IncomingHttpHeaders, flags: number) => {});
    clientHttp2Stream.on('push', (headers: IncomingHttpHeaders, flags: number) => {});
    clientHttp2Stream.on('response', (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => {
        const s: number = headers[':status']!;
    });

    // ServerHttp2Stream
    const serverHttp2Stream: ServerHttp2Stream = {} as any;
    const headers: OutgoingHttpHeaders = {};

    serverHttp2Stream.additionalHeaders(headers);
    const headerSent: boolean = serverHttp2Stream.headersSent;
    const pushAllowed: boolean = serverHttp2Stream.pushAllowed;
    serverHttp2Stream.pushStream(headers, (err: Error | null, pushStream: ServerHttp2Stream, headers: OutgoingHttpHeaders) => {});

    const options: ServerStreamResponseOptions = {
        endStream: true,
        waitForTrailers: true,
    };
    serverHttp2Stream.respond();
    serverHttp2Stream.respond(headers);
    serverHttp2Stream.respond(headers, options);

    const options2: ServerStreamFileResponseOptions = {
        statCheck: (stats: Stats, headers: OutgoingHttpHeaders, statOptions: StatOptions) => {},
        waitForTrailers: true,
        offset: 0,
        length: 0
    };
    serverHttp2Stream.respondWithFD(0);
    serverHttp2Stream.respondWithFD(0, headers);
    serverHttp2Stream.respondWithFD(0, headers, options2);
    serverHttp2Stream.respondWithFD(0, headers, {statCheck: () => false});
    const options3: ServerStreamFileResponseOptionsWithError = {
        onError: (err: NodeJS.ErrnoException) => {},
        statCheck: (stats: Stats, headers: OutgoingHttpHeaders, statOptions: StatOptions) => {},
        waitForTrailers: true,
        offset: 0,
        length: 0
    };
    serverHttp2Stream.respondWithFile('');
    serverHttp2Stream.respondWithFile('', headers);
    serverHttp2Stream.respondWithFile('', headers, options3);
    serverHttp2Stream.respondWithFile('', headers, {statCheck: () => false});
}

// Http2Server / Http2SecureServer
{
    const http2Server: Http2Server = createServer();
    const http2SecureServer: Http2SecureServer = createSecureServer();
    const s1: Server = http2Server;
    const s2: Server = http2SecureServer;
    [http2Server, http2SecureServer].forEach((server) => {
        server.on('sessionError', (err: Error) => {});
        server.on('session', (session: ServerHttp2Session) => {});
        server.on('checkContinue', (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => {});
        server.on('stream', (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => {});
        server.on('request', (request: Http2ServerRequest, response: Http2ServerResponse) => {});
        server.on('timeout', () => {});
        server.setTimeout().setTimeout(5).setTimeout(5, () => {});
    });

    http2SecureServer.on('unknownProtocol', (socket: TLSSocket) => {});
}

// Public API (except constants)
{
    let settings: Settings = {
    };
    const serverOptions: ServerOptions = {
        maxDeflateDynamicTableSize: 0,
        maxSendHeaderBlockLength: 0,
        paddingStrategy: 0,
        peerMaxConcurrentStreams: 0,
        selectPadding: (frameLen: number, maxFrameLen: number) => 0,
        settings
    };
    // tslint:disable-next-line prefer-object-spread (ts2.1 feature)
    const secureServerOptions: SecureServerOptions = Object.assign({}, serverOptions);
    secureServerOptions.ca = '';
    const onRequestHandler = (request: Http2ServerRequest, response: Http2ServerResponse) => {
        // Http2ServerRequest

        const readable: Readable = request;
        const aborted: boolean = request.aborted;
        const authority: string = request.authority;
        let incomingHeaders: IncomingHttpHeaders = request.headers;
        incomingHeaders = request.trailers;
        const httpVersion: string = request.httpVersion;
        let method: string = request.method;
        let rawHeaders: string[] = request.rawHeaders;
        rawHeaders = request.rawTrailers;
        const scheme: string = request.scheme;
        let socket: Socket | TLSSocket = request.socket;
        let stream: ServerHttp2Stream = request.stream;
        const url: string = request.url;

        request.setTimeout(0, () => {});
        request.on('aborted', (hadError: boolean, code: number) => {});

        // Http2ServerResponse

        let outgoingHeaders: OutgoingHttpHeaders = {
        };
        response.addTrailers(outgoingHeaders);
        socket = response.connection;
        const finished: boolean = response.finished;
        response.sendDate = true;
        response.statusCode = 200;
        response.statusMessage = '';
        socket = response.socket;
        stream = response.stream;

        method = response.getHeader(':method');
        const headers: string[] = response.getHeaderNames();
        outgoingHeaders = response.getHeaders();
        const hasMethod = response.hasHeader(':method');
        response.removeHeader(':method');
        response.setHeader(':method', 'GET');
        response.setHeader(':status', 200);
        response.setHeader('some-list', ['', ''] as ReadonlyArray<string>);
        const headersSent: boolean = response.headersSent;

        response.setTimeout(0, () => {});
        response.createPushResponse(outgoingHeaders, (err: Error | null, res: Http2ServerResponse) => {});

        response.writeContinue();
        response.writeHead(200).end();
        response.writeHead(200, outgoingHeaders);
        response.writeHead(200, 'OK', outgoingHeaders);
        response.writeHead(200, 'OK');
        response.write('');
        response.write('', (err: Error) => {});
        response.write('', 'utf8');
        response.write('', 'utf8', (err: Error) => {});
        response.write(Buffer.from([]));
        response.write(Buffer.from([]), (err: Error) => {});
        response.write(Buffer.from([]), 'utf8');
        response.write(Buffer.from([]), 'utf8', (err: Error) => {});
        response.end();
        response.end(() => {});
        response.end('');
        response.end('', () => {});
        response.end('', 'utf8');
        response.end('', 'utf8', () => {});
        response.end(Buffer.from([]));
        response.end(Buffer.from([]), () => {});

        request.on('aborted', (hadError: boolean, code: number) => {});
        request.on('close', () => {});
        request.on('drain', () => {});
        request.on('error', (error: Error) => {});
        request.on('finish', () => {});
    };

    let http2Server: Http2Server;
    let http2SecureServer: Http2SecureServer;

    http2Server = createServer();
    http2Server = createServer(serverOptions);
    http2Server = createServer(onRequestHandler);
    http2Server = createServer(serverOptions, onRequestHandler);

    http2SecureServer = createSecureServer();
    http2SecureServer = createSecureServer(secureServerOptions);
    http2SecureServer = createSecureServer(onRequestHandler);
    http2SecureServer = createSecureServer(secureServerOptions, onRequestHandler);

    const clientSessionOptions: ClientSessionOptions = {
        maxDeflateDynamicTableSize: 0,
        maxReservedRemoteStreams: 0,
        maxSendHeaderBlockLength: 0,
        paddingStrategy: 0,
        peerMaxConcurrentStreams: 0,
        protocol: 'https:',
        selectPadding: (frameLen: number, maxFrameLen: number) => 0,
        settings
    };
    // tslint:disable-next-line prefer-object-spread (ts2.1 feature)
    const secureClientSessionOptions: SecureClientSessionOptions = Object.assign({}, clientSessionOptions);
    secureClientSessionOptions.ca = '';
    const onConnectHandler = (session: Http2Session, socket: Socket) => {};

    const serverHttp2Session: ServerHttp2Session = {} as any;

    serverHttp2Session.altsvc('', '');
    serverHttp2Session.altsvc('', 0);
    serverHttp2Session.altsvc('', new URL(''));
    serverHttp2Session.altsvc('', { origin: '' });
    serverHttp2Session.altsvc('', { origin: 0 });
    serverHttp2Session.altsvc('', { origin: new URL('') });
    serverHttp2Session.origin('https://example.com', new URL(''), { origin: 'https://foo.com' });

    let clientHttp2Session: ClientHttp2Session;

    clientHttp2Session = connect('');
    clientHttp2Session = connect('', onConnectHandler);
    clientHttp2Session = connect('', clientSessionOptions);
    clientHttp2Session = connect('', clientSessionOptions, onConnectHandler);
    clientHttp2Session = connect('', secureClientSessionOptions);
    clientHttp2Session = connect('', secureClientSessionOptions, onConnectHandler);
    clientHttp2Session.on('altsvc', (alt: string, origin: string, number: number) => {});

    settings = getDefaultSettings();
    const packet: Buffer = getPackedSettings(settings);
    settings = getUnpackedSettings(Buffer.from([]));
    settings = getUnpackedSettings(Uint8Array.from([]));
}

// Http2ServerRequest, Http2ServerResponse,
{
    class MyHttp2ServerRequest extends Http2ServerRequest {
        foo: number;
    }

    class MyHttp2ServerResponse extends Http2ServerResponse {
        bar: string;
    }

    function reqListener(req: Http2ServerRequest, res: Http2ServerResponse): void {}

    let server: Http2Server;

    server = createServer({
        Http2ServerRequest: MyHttp2ServerRequest,
        Http2ServerResponse: MyHttp2ServerResponse
    });
    server = createServer({
        Http2ServerRequest: MyHttp2ServerRequest,
        Http2ServerResponse: MyHttp2ServerResponse
    }, reqListener);

    server = createServer({ Http2ServerRequest: MyHttp2ServerRequest });
    server = createServer({ Http2ServerResponse: MyHttp2ServerResponse }, reqListener);

    server = createSecureServer({
        Http2ServerRequest: MyHttp2ServerRequest,
        Http2ServerResponse: MyHttp2ServerResponse
    });
    server = createSecureServer({
        Http2ServerRequest: MyHttp2ServerRequest,
        Http2ServerResponse: MyHttp2ServerResponse
    }, reqListener);
    server = createSecureServer({ Http2ServerRequest: MyHttp2ServerRequest });
    server = createSecureServer({ Http2ServerResponse: MyHttp2ServerResponse }, reqListener);
}

// constants
{
    const consts = constants;
    let num: number;
    let str: string;
    num = consts.NGHTTP2_SESSION_SERVER;
    num = consts.NGHTTP2_SESSION_CLIENT;
    num = consts.NGHTTP2_STREAM_STATE_IDLE;
    num = consts.NGHTTP2_STREAM_STATE_OPEN;
    num = consts.NGHTTP2_STREAM_STATE_RESERVED_LOCAL;
    num = consts.NGHTTP2_STREAM_STATE_RESERVED_REMOTE;
    num = consts.NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL;
    num = consts.NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE;
    num = consts.NGHTTP2_STREAM_STATE_CLOSED;
    num = consts.NGHTTP2_NO_ERROR;
    num = consts.NGHTTP2_PROTOCOL_ERROR;
    num = consts.NGHTTP2_INTERNAL_ERROR;
    num = consts.NGHTTP2_FLOW_CONTROL_ERROR;
    num = consts.NGHTTP2_SETTINGS_TIMEOUT;
    num = consts.NGHTTP2_STREAM_CLOSED;
    num = consts.NGHTTP2_FRAME_SIZE_ERROR;
    num = consts.NGHTTP2_REFUSED_STREAM;
    num = consts.NGHTTP2_CANCEL;
    num = consts.NGHTTP2_COMPRESSION_ERROR;
    num = consts.NGHTTP2_CONNECT_ERROR;
    num = consts.NGHTTP2_ENHANCE_YOUR_CALM;
    num = consts.NGHTTP2_INADEQUATE_SECURITY;
    num = consts.NGHTTP2_HTTP_1_1_REQUIRED;
    num = consts.NGHTTP2_ERR_FRAME_SIZE_ERROR;
    num = consts.NGHTTP2_FLAG_NONE;
    num = consts.NGHTTP2_FLAG_END_STREAM;
    num = consts.NGHTTP2_FLAG_END_HEADERS;
    num = consts.NGHTTP2_FLAG_ACK;
    num = consts.NGHTTP2_FLAG_PADDED;
    num = consts.NGHTTP2_FLAG_PRIORITY;
    num = consts.DEFAULT_SETTINGS_HEADER_TABLE_SIZE;
    num = consts.DEFAULT_SETTINGS_ENABLE_PUSH;
    num = consts.DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE;
    num = consts.DEFAULT_SETTINGS_MAX_FRAME_SIZE;
    num = consts.MAX_MAX_FRAME_SIZE;
    num = consts.MIN_MAX_FRAME_SIZE;
    num = consts.MAX_INITIAL_WINDOW_SIZE;
    num = consts.NGHTTP2_DEFAULT_WEIGHT;
    num = consts.NGHTTP2_SETTINGS_HEADER_TABLE_SIZE;
    num = consts.NGHTTP2_SETTINGS_ENABLE_PUSH;
    num = consts.NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS;
    num = consts.NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE;
    num = consts.NGHTTP2_SETTINGS_MAX_FRAME_SIZE;
    num = consts.NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE;
    num = consts.PADDING_STRATEGY_NONE;
    num = consts.PADDING_STRATEGY_MAX;
    num = consts.PADDING_STRATEGY_CALLBACK;
    num = consts.HTTP_STATUS_CONTINUE;
    num = consts.HTTP_STATUS_SWITCHING_PROTOCOLS;
    num = consts.HTTP_STATUS_PROCESSING;
    num = consts.HTTP_STATUS_OK;
    num = consts.HTTP_STATUS_CREATED;
    num = consts.HTTP_STATUS_ACCEPTED;
    num = consts.HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION;
    num = consts.HTTP_STATUS_NO_CONTENT;
    num = consts.HTTP_STATUS_RESET_CONTENT;
    num = consts.HTTP_STATUS_PARTIAL_CONTENT;
    num = consts.HTTP_STATUS_MULTI_STATUS;
    num = consts.HTTP_STATUS_ALREADY_REPORTED;
    num = consts.HTTP_STATUS_IM_USED;
    num = consts.HTTP_STATUS_MULTIPLE_CHOICES;
    num = consts.HTTP_STATUS_MOVED_PERMANENTLY;
    num = consts.HTTP_STATUS_FOUND;
    num = consts.HTTP_STATUS_SEE_OTHER;
    num = consts.HTTP_STATUS_NOT_MODIFIED;
    num = consts.HTTP_STATUS_USE_PROXY;
    num = consts.HTTP_STATUS_TEMPORARY_REDIRECT;
    num = consts.HTTP_STATUS_PERMANENT_REDIRECT;
    num = consts.HTTP_STATUS_BAD_REQUEST;
    num = consts.HTTP_STATUS_UNAUTHORIZED;
    num = consts.HTTP_STATUS_PAYMENT_REQUIRED;
    num = consts.HTTP_STATUS_FORBIDDEN;
    num = consts.HTTP_STATUS_NOT_FOUND;
    num = consts.HTTP_STATUS_METHOD_NOT_ALLOWED;
    num = consts.HTTP_STATUS_NOT_ACCEPTABLE;
    num = consts.HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED;
    num = consts.HTTP_STATUS_REQUEST_TIMEOUT;
    num = consts.HTTP_STATUS_CONFLICT;
    num = consts.HTTP_STATUS_GONE;
    num = consts.HTTP_STATUS_LENGTH_REQUIRED;
    num = consts.HTTP_STATUS_PRECONDITION_FAILED;
    num = consts.HTTP_STATUS_PAYLOAD_TOO_LARGE;
    num = consts.HTTP_STATUS_URI_TOO_LONG;
    num = consts.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE;
    num = consts.HTTP_STATUS_RANGE_NOT_SATISFIABLE;
    num = consts.HTTP_STATUS_EXPECTATION_FAILED;
    num = consts.HTTP_STATUS_TEAPOT;
    num = consts.HTTP_STATUS_MISDIRECTED_REQUEST;
    num = consts.HTTP_STATUS_UNPROCESSABLE_ENTITY;
    num = consts.HTTP_STATUS_LOCKED;
    num = consts.HTTP_STATUS_FAILED_DEPENDENCY;
    num = consts.HTTP_STATUS_UNORDERED_COLLECTION;
    num = consts.HTTP_STATUS_UPGRADE_REQUIRED;
    num = consts.HTTP_STATUS_PRECONDITION_REQUIRED;
    num = consts.HTTP_STATUS_TOO_MANY_REQUESTS;
    num = consts.HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE;
    num = consts.HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS;
    num = consts.HTTP_STATUS_INTERNAL_SERVER_ERROR;
    num = consts.HTTP_STATUS_NOT_IMPLEMENTED;
    num = consts.HTTP_STATUS_BAD_GATEWAY;
    num = consts.HTTP_STATUS_SERVICE_UNAVAILABLE;
    num = consts.HTTP_STATUS_GATEWAY_TIMEOUT;
    num = consts.HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED;
    num = consts.HTTP_STATUS_VARIANT_ALSO_NEGOTIATES;
    num = consts.HTTP_STATUS_INSUFFICIENT_STORAGE;
    num = consts.HTTP_STATUS_LOOP_DETECTED;
    num = consts.HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED;
    num = consts.HTTP_STATUS_NOT_EXTENDED;
    num = consts.HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED;
    str = consts.HTTP2_HEADER_STATUS;
    str = consts.HTTP2_HEADER_METHOD;
    str = consts.HTTP2_HEADER_AUTHORITY;
    str = consts.HTTP2_HEADER_SCHEME;
    str = consts.HTTP2_HEADER_PATH;
    str = consts.HTTP2_HEADER_ACCEPT_CHARSET;
    str = consts.HTTP2_HEADER_ACCEPT_ENCODING;
    str = consts.HTTP2_HEADER_ACCEPT_LANGUAGE;
    str = consts.HTTP2_HEADER_ACCEPT_RANGES;
    str = consts.HTTP2_HEADER_ACCEPT;
    str = consts.HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN;
    str = consts.HTTP2_HEADER_AGE;
    str = consts.HTTP2_HEADER_ALLOW;
    str = consts.HTTP2_HEADER_AUTHORIZATION;
    str = consts.HTTP2_HEADER_CACHE_CONTROL;
    str = consts.HTTP2_HEADER_CONNECTION;
    str = consts.HTTP2_HEADER_CONTENT_DISPOSITION;
    str = consts.HTTP2_HEADER_CONTENT_ENCODING;
    str = consts.HTTP2_HEADER_CONTENT_LANGUAGE;
    str = consts.HTTP2_HEADER_CONTENT_LENGTH;
    str = consts.HTTP2_HEADER_CONTENT_LOCATION;
    str = consts.HTTP2_HEADER_CONTENT_MD5;
    str = consts.HTTP2_HEADER_CONTENT_RANGE;
    str = consts.HTTP2_HEADER_CONTENT_TYPE;
    str = consts.HTTP2_HEADER_COOKIE;
    str = consts.HTTP2_HEADER_DATE;
    str = consts.HTTP2_HEADER_ETAG;
    str = consts.HTTP2_HEADER_EXPECT;
    str = consts.HTTP2_HEADER_EXPIRES;
    str = consts.HTTP2_HEADER_FROM;
    str = consts.HTTP2_HEADER_HOST;
    str = consts.HTTP2_HEADER_IF_MATCH;
    str = consts.HTTP2_HEADER_IF_MODIFIED_SINCE;
    str = consts.HTTP2_HEADER_IF_NONE_MATCH;
    str = consts.HTTP2_HEADER_IF_RANGE;
    str = consts.HTTP2_HEADER_IF_UNMODIFIED_SINCE;
    str = consts.HTTP2_HEADER_LAST_MODIFIED;
    str = consts.HTTP2_HEADER_LINK;
    str = consts.HTTP2_HEADER_LOCATION;
    str = consts.HTTP2_HEADER_MAX_FORWARDS;
    str = consts.HTTP2_HEADER_PREFER;
    str = consts.HTTP2_HEADER_PROXY_AUTHENTICATE;
    str = consts.HTTP2_HEADER_PROXY_AUTHORIZATION;
    str = consts.HTTP2_HEADER_RANGE;
    str = consts.HTTP2_HEADER_REFERER;
    str = consts.HTTP2_HEADER_REFRESH;
    str = consts.HTTP2_HEADER_RETRY_AFTER;
    str = consts.HTTP2_HEADER_SERVER;
    str = consts.HTTP2_HEADER_SET_COOKIE;
    str = consts.HTTP2_HEADER_STRICT_TRANSPORT_SECURITY;
    str = consts.HTTP2_HEADER_TRANSFER_ENCODING;
    str = consts.HTTP2_HEADER_TE;
    str = consts.HTTP2_HEADER_UPGRADE;
    str = consts.HTTP2_HEADER_USER_AGENT;
    str = consts.HTTP2_HEADER_VARY;
    str = consts.HTTP2_HEADER_VIA;
    str = consts.HTTP2_HEADER_WWW_AUTHENTICATE;
    str = consts.HTTP2_HEADER_HTTP2_SETTINGS;
    str = consts.HTTP2_HEADER_KEEP_ALIVE;
    str = consts.HTTP2_HEADER_PROXY_CONNECTION;
    str = consts.HTTP2_METHOD_ACL;
    str = consts.HTTP2_METHOD_BASELINE_CONTROL;
    str = consts.HTTP2_METHOD_BIND;
    str = consts.HTTP2_METHOD_CHECKIN;
    str = consts.HTTP2_METHOD_CHECKOUT;
    str = consts.HTTP2_METHOD_CONNECT;
    str = consts.HTTP2_METHOD_COPY;
    str = consts.HTTP2_METHOD_DELETE;
    str = consts.HTTP2_METHOD_GET;
    str = consts.HTTP2_METHOD_HEAD;
    str = consts.HTTP2_METHOD_LABEL;
    str = consts.HTTP2_METHOD_LINK;
    str = consts.HTTP2_METHOD_LOCK;
    str = consts.HTTP2_METHOD_MERGE;
    str = consts.HTTP2_METHOD_MKACTIVITY;
    str = consts.HTTP2_METHOD_MKCALENDAR;
    str = consts.HTTP2_METHOD_MKCOL;
    str = consts.HTTP2_METHOD_MKREDIRECTREF;
    str = consts.HTTP2_METHOD_MKWORKSPACE;
    str = consts.HTTP2_METHOD_MOVE;
    str = consts.HTTP2_METHOD_OPTIONS;
    str = consts.HTTP2_METHOD_ORDERPATCH;
    str = consts.HTTP2_METHOD_PATCH;
    str = consts.HTTP2_METHOD_POST;
    str = consts.HTTP2_METHOD_PRI;
    str = consts.HTTP2_METHOD_PROPFIND;
    str = consts.HTTP2_METHOD_PROPPATCH;
    str = consts.HTTP2_METHOD_PUT;
    str = consts.HTTP2_METHOD_REBIND;
    str = consts.HTTP2_METHOD_REPORT;
    str = consts.HTTP2_METHOD_SEARCH;
    str = consts.HTTP2_METHOD_TRACE;
    str = consts.HTTP2_METHOD_UNBIND;
    str = consts.HTTP2_METHOD_UNCHECKOUT;
    str = consts.HTTP2_METHOD_UNLINK;
    str = consts.HTTP2_METHOD_UNLOCK;
    str = consts.HTTP2_METHOD_UPDATE;
    str = consts.HTTP2_METHOD_UPDATEREDIRECTREF;
    str = consts.HTTP2_METHOD_VERSION_CONTROL;
}
