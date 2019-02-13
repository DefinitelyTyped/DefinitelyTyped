import * as http2 from 'http2';
import * as stream from 'stream';
import * as events from 'events';
import * as net from 'net';
import * as tls from 'tls';
import * as fs from 'fs';
import * as url from 'url';

// Headers & Settings
{
    const headers: http2.OutgoingHttpHeaders = {
        ':status': 200,
        'content-type': 'text-plain',
        ABC: ['has', 'more', 'than', 'one', 'value'],
        undef: undefined
    };

    const settings: http2.Settings = {
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
    const http2Session: http2.Http2Session = {} as any;
    const ee: events.EventEmitter = http2Session;

    http2Session.on('close', () => {});
    http2Session.on('connect', (session: http2.Http2Session, socket: net.Socket) => {});
    http2Session.on('error', (err: Error) => {});
    http2Session.on('frameError', (frameType: number, errorCode: number, streamID: number) => {});
    http2Session.on('goaway', (errorCode: number, lastStreamID: number, opaqueData: Buffer) => {});
    http2Session.on('localSettings', (settings: http2.Settings) => {});
    http2Session.on('remoteSettings', (settings: http2.Settings) => {});
    http2Session.on('stream', (stream: http2.Http2Stream, headers: http2.IncomingHttpHeaders, flags: number) => {});
    http2Session.on('timeout', () => {});
    http2Session.on('ping', () => {});

    http2Session.destroy();

    const alpnProtocol: string | undefined = http2Session.alpnProtocol;
    const destroyed: boolean | undefined = http2Session.destroyed;
    const encrypted: boolean | undefined = http2Session.encrypted;
    const originSet: string[] | undefined = http2Session.originSet;
    const pendingSettingsAck: boolean = http2Session.pendingSettingsAck;
    let settings: http2.Settings = http2Session.localSettings;
    const closed: boolean = http2Session.closed;
    const connecting: boolean = http2Session.connecting;
    settings = http2Session.remoteSettings;

    http2Session.ref();
    http2Session.unref();

    const headers: http2.OutgoingHttpHeaders = {};
    const options: http2.ClientSessionRequestOptions = {
        endStream: true,
        exclusive: true,
        parent: 0,
        weight: 0,
        getTrailers: (trailers: http2.OutgoingHttpHeaders) => {}
    };
    (http2Session as http2.ClientHttp2Session).request();
    (http2Session as http2.ClientHttp2Session).request(headers);
    (http2Session as http2.ClientHttp2Session).request(headers, options);

    const stream: http2.Http2Stream = {} as any;
    http2Session.rstStream(stream);
    http2Session.rstStream(stream, 0);

    http2Session.setTimeout(100, () => {});
    http2Session.close(() => {});

    const socket: net.Socket | tls.TLSSocket = http2Session.socket;
    let state: http2.SessionState = http2Session.state;
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

    http2Session.priority(stream, {
        exclusive: true,
        parent: 0,
        weight: 0,
        silent: true
    });

    http2Session.settings(settings);

    http2Session.ping((err: Error | null, duration: number, payload: Buffer) => {});
    http2Session.ping(Buffer.from(''), (err: Error | null, duration: number, payload: Buffer) => {});
    http2Session.ping(new DataView(new Int8Array(1).buffer), (err: Error | null, duration: number, payload: Buffer) => {});
}

// Http2Stream
{
    const http2Stream: http2.Http2Stream = {} as any;
    const duplex: stream.Duplex = http2Stream;

    http2Stream.on('aborted', () => {});
    http2Stream.on('error', (err: Error) => {});
    http2Stream.on('frameError', (frameType: number, errorCode: number, streamID: number) => {});
    http2Stream.on('streamClosed', (code: number) => {});
    http2Stream.on('timeout', () => {});
    http2Stream.on('trailers', (trailers: http2.IncomingHttpHeaders, flags: number) => {});
    http2Stream.on('wantTrailers', () => {});

    const aborted: boolean = http2Stream.aborted;
    const closed: boolean = http2Stream.closed;
    const destroyed: boolean = http2Stream.destroyed;
    const pending: boolean = http2Stream.pending;

    http2Stream.priority({
        exclusive: true,
        parent: 0,
        weight: 0,
        silent: true
    });

    const sesh: http2.Http2Session = http2Stream.session;

    http2Stream.setTimeout(100, () => {});

    let state: http2.StreamState = http2Stream.state;
    state = {
        localWindowSize: 0,
        state: 0,
        streamLocalClose: 0,
        streamRemoteClose: 0,
        sumDependencyWeight: 0,
        weight: 0
    };

    http2Stream.close();
    http2Stream.close(0);
    http2Stream.close(0, () => {});
    http2Stream.close(undefined, () => {});

    // ClientHttp2Stream
    const clientHttp2Stream: http2.ClientHttp2Stream = {} as any;
    clientHttp2Stream.on('headers', (headers: http2.IncomingHttpHeaders, flags: number) => {});
    clientHttp2Stream.on('push', (headers: http2.IncomingHttpHeaders, flags: number) => {});
    clientHttp2Stream.on('response', (headers: http2.IncomingHttpHeaders & http2.IncomingHttpStatusHeader, flags: number) => {
        const s: number = headers[':status']!;
    });

    // ServerHttp2Stream
    const serverHttp2Stream: http2.ServerHttp2Stream = {} as any;
    const headers: http2.OutgoingHttpHeaders = {};

    serverHttp2Stream.additionalHeaders(headers);
    const headerSent: boolean = serverHttp2Stream.headersSent;
    const pushAllowed: boolean = serverHttp2Stream.pushAllowed;
    serverHttp2Stream.pushStream(headers, (err: Error | null, pushStream: http2.ServerHttp2Stream, headers: http2.OutgoingHttpHeaders) => {});

    const options: http2.ServerStreamResponseOptions = {
        endStream: true,
        waitForTrailers: true,
    };
    serverHttp2Stream.respond();
    serverHttp2Stream.respond(headers);
    serverHttp2Stream.respond(headers, options);

    const options2: http2.ServerStreamFileResponseOptions = {
        statCheck: (stats: fs.Stats, headers: http2.OutgoingHttpHeaders, statOptions: http2.StatOptions) => {},
        getTrailers: (trailers: http2.OutgoingHttpHeaders) => {},
        offset: 0,
        length: 0
    };
    serverHttp2Stream.respondWithFD(0);
    serverHttp2Stream.respondWithFD(0, headers);
    serverHttp2Stream.respondWithFD(0, headers, options2);
    serverHttp2Stream.respondWithFD(0, headers, {statCheck: () => false});
    const options3: http2.ServerStreamFileResponseOptionsWithError = {
        onError: (err: NodeJS.ErrnoException) => {},
        statCheck: (stats: fs.Stats, headers: http2.OutgoingHttpHeaders, statOptions: http2.StatOptions) => {},
        getTrailers: (trailers: http2.OutgoingHttpHeaders) => {},
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
    const http2Server: http2.Http2Server = http2.createServer();
    const http2SecureServer: http2.Http2SecureServer = http2.createSecureServer();
    const s1: net.Server = http2Server;
    const s2: tls.Server = http2SecureServer;
    [http2Server, http2SecureServer].forEach((server) => {
        server.on('sessionError', (err: Error) => {});
        server.on('checkContinue', (stream: http2.ServerHttp2Stream, headers: http2.IncomingHttpHeaders, flags: number) => {});
        server.on('stream', (stream: http2.ServerHttp2Stream, headers: http2.IncomingHttpHeaders, flags: number) => {});
        server.on('request', (request: http2.Http2ServerRequest, response: http2.Http2ServerResponse) => {});
        server.on('timeout', () => {});
    });

    http2SecureServer.on('unknownProtocol', (socket: tls.TLSSocket) => {});
}

// Public API (except constants)
{
    let settings: http2.Settings = {
    };
    const serverOptions: http2.ServerOptions = {
        maxDeflateDynamicTableSize: 0,
        maxReservedRemoteStreams: 0,
        maxSendHeaderBlockLength: 0,
        paddingStrategy: 0,
        peerMaxConcurrentStreams: 0,
        selectPadding: (frameLen: number, maxFrameLen: number) => 0,
        settings,
        allowHTTP1: true
    };
    // tslint:disable-next-line prefer-object-spread (ts2.1 feature)
    const secureServerOptions: http2.SecureServerOptions = Object.assign({}, serverOptions);
    secureServerOptions.ca = '';
    const onRequestHandler = (request: http2.Http2ServerRequest, response: http2.Http2ServerResponse) => {
        // Http2ServerRequest

        const readable: stream.Readable = request;
        let incomingHeaders: http2.IncomingHttpHeaders = request.headers;
        incomingHeaders = request.trailers;
        const httpVersion: string = request.httpVersion;
        let method: string = request.method;
        let rawHeaders: string[] = request.rawHeaders;
        rawHeaders = request.rawTrailers;
        let socket: net.Socket | tls.TLSSocket = request.socket;
        let stream: http2.ServerHttp2Stream = request.stream;
        const url: string = request.url;
        const aborted: boolean = request.aborted;
        const authority: string = request.authority;

        request.setTimeout(0, () => {});
        request.on('aborted', (hadError: boolean, code: number) => {});

        // Http2ServerResponse

        let outgoingHeaders: http2.OutgoingHttpHeaders = {
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
        response.setHeader('some-list', ['', '']);
        const headersSent: boolean = response.headersSent;

        response.setTimeout(0, () => {});
        response.createPushResponse(outgoingHeaders, (err: Error | null, res: http2.Http2ServerResponse) => {});

        response.writeContinue();
        response.writeHead(200);
        response.writeHead(200, outgoingHeaders);
        response.writeHead(200, 'OK', outgoingHeaders);
        response.writeHead(200, 'OK');
        response.write('');
        response.write('', (err: Error | null | undefined) => {});
        response.write('', 'utf8');
        response.write('', 'utf8', (err: Error | null | undefined) => {});
        response.write(Buffer.from([]));
        response.write(Buffer.from([]), (err: Error | null | undefined) => {});
        response.write(Buffer.from([]), 'utf8');
        response.write(Buffer.from([]), 'utf8', (err: Error | null | undefined) => {});
        response.end();
        response.end(() => {});
        response.end('');
        response.end('', () => {});
        response.end('', 'utf8');
        response.end('', 'utf8', () => {});
        response.end(Buffer.from([]));
        response.end(Buffer.from([]), () => {});
        response.end(Buffer.from([]), 'utf8');
        response.end(Buffer.from([]), 'utf8', () => {});
        response.flushHeaders();

        request.on('aborted', (hadError: boolean, code: number) => {});
        request.on('close', () => {});
        request.on('drain', () => {});
        request.on('error', (error: Error) => {});
        request.on('finish', () => {});
    };

    let http2Server: http2.Http2Server;
    let http2SecureServer: http2.Http2SecureServer;

    http2Server = http2.createServer();
    http2Server = http2.createServer(serverOptions);
    http2Server = http2.createServer(onRequestHandler);
    http2Server = http2.createServer(serverOptions, onRequestHandler);

    http2SecureServer = http2.createSecureServer();
    http2SecureServer = http2.createSecureServer(secureServerOptions);
    http2SecureServer = http2.createSecureServer(onRequestHandler);
    http2SecureServer = http2.createSecureServer(secureServerOptions, onRequestHandler);

    const clientSessionOptions: http2.ClientSessionOptions = {
        maxDeflateDynamicTableSize: 0,
        maxReservedRemoteStreams: 0,
        maxSendHeaderBlockLength: 0,
        paddingStrategy: 0,
        peerMaxConcurrentStreams: 0,
        selectPadding: (frameLen: number, maxFrameLen: number) => 0,
        settings
    };
    // tslint:disable-next-line prefer-object-spread (ts2.1 feature)
    const secureClientSessionOptions: http2.SecureClientSessionOptions = Object.assign({}, clientSessionOptions);
    secureClientSessionOptions.ca = '';
    const onConnectHandler = (session: http2.Http2Session, socket: net.Socket) => {};

    const serverHttp2Session: http2.ServerHttp2Session = {} as any;

    serverHttp2Session.altsvc('', '');
    serverHttp2Session.altsvc('', 0);
    serverHttp2Session.altsvc('', new url.URL(''));
    serverHttp2Session.altsvc('', { origin: '' });
    serverHttp2Session.altsvc('', { origin: 0 });
    serverHttp2Session.altsvc('', { origin: new url.URL('') });

    let clientHttp2Session: http2.ClientHttp2Session;

    clientHttp2Session = http2.connect('');
    clientHttp2Session = http2.connect('', onConnectHandler);
    clientHttp2Session = http2.connect('', clientSessionOptions);
    clientHttp2Session = http2.connect('', clientSessionOptions, onConnectHandler);
    clientHttp2Session = http2.connect('', secureClientSessionOptions);
    clientHttp2Session = http2.connect('', secureClientSessionOptions, onConnectHandler);
    clientHttp2Session.on('altsvc', (alt: string, origin: string, number: number) => {});

    settings = http2.getDefaultSettings();
    settings = http2.getPackedSettings(settings);
    settings = http2.getUnpackedSettings(Buffer.from([]));
    settings = http2.getUnpackedSettings(Uint8Array.from([]));
}

// constants
{
    const constants = http2.constants;
    let num: number;
    let str: string;
    num = constants.NGHTTP2_SESSION_SERVER;
    num = constants.NGHTTP2_SESSION_CLIENT;
    num = constants.NGHTTP2_STREAM_STATE_IDLE;
    num = constants.NGHTTP2_STREAM_STATE_OPEN;
    num = constants.NGHTTP2_STREAM_STATE_RESERVED_LOCAL;
    num = constants.NGHTTP2_STREAM_STATE_RESERVED_REMOTE;
    num = constants.NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL;
    num = constants.NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE;
    num = constants.NGHTTP2_STREAM_STATE_CLOSED;
    num = constants.NGHTTP2_NO_ERROR;
    num = constants.NGHTTP2_PROTOCOL_ERROR;
    num = constants.NGHTTP2_INTERNAL_ERROR;
    num = constants.NGHTTP2_FLOW_CONTROL_ERROR;
    num = constants.NGHTTP2_SETTINGS_TIMEOUT;
    num = constants.NGHTTP2_STREAM_CLOSED;
    num = constants.NGHTTP2_FRAME_SIZE_ERROR;
    num = constants.NGHTTP2_REFUSED_STREAM;
    num = constants.NGHTTP2_CANCEL;
    num = constants.NGHTTP2_COMPRESSION_ERROR;
    num = constants.NGHTTP2_CONNECT_ERROR;
    num = constants.NGHTTP2_ENHANCE_YOUR_CALM;
    num = constants.NGHTTP2_INADEQUATE_SECURITY;
    num = constants.NGHTTP2_HTTP_1_1_REQUIRED;
    num = constants.NGHTTP2_ERR_FRAME_SIZE_ERROR;
    num = constants.NGHTTP2_FLAG_NONE;
    num = constants.NGHTTP2_FLAG_END_STREAM;
    num = constants.NGHTTP2_FLAG_END_HEADERS;
    num = constants.NGHTTP2_FLAG_ACK;
    num = constants.NGHTTP2_FLAG_PADDED;
    num = constants.NGHTTP2_FLAG_PRIORITY;
    num = constants.DEFAULT_SETTINGS_HEADER_TABLE_SIZE;
    num = constants.DEFAULT_SETTINGS_ENABLE_PUSH;
    num = constants.DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE;
    num = constants.DEFAULT_SETTINGS_MAX_FRAME_SIZE;
    num = constants.MAX_MAX_FRAME_SIZE;
    num = constants.MIN_MAX_FRAME_SIZE;
    num = constants.MAX_INITIAL_WINDOW_SIZE;
    num = constants.NGHTTP2_DEFAULT_WEIGHT;
    num = constants.NGHTTP2_SETTINGS_HEADER_TABLE_SIZE;
    num = constants.NGHTTP2_SETTINGS_ENABLE_PUSH;
    num = constants.NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS;
    num = constants.NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE;
    num = constants.NGHTTP2_SETTINGS_MAX_FRAME_SIZE;
    num = constants.NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE;
    num = constants.PADDING_STRATEGY_NONE;
    num = constants.PADDING_STRATEGY_MAX;
    num = constants.PADDING_STRATEGY_CALLBACK;
    num = constants.HTTP_STATUS_CONTINUE;
    num = constants.HTTP_STATUS_SWITCHING_PROTOCOLS;
    num = constants.HTTP_STATUS_PROCESSING;
    num = constants.HTTP_STATUS_OK;
    num = constants.HTTP_STATUS_CREATED;
    num = constants.HTTP_STATUS_ACCEPTED;
    num = constants.HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION;
    num = constants.HTTP_STATUS_NO_CONTENT;
    num = constants.HTTP_STATUS_RESET_CONTENT;
    num = constants.HTTP_STATUS_PARTIAL_CONTENT;
    num = constants.HTTP_STATUS_MULTI_STATUS;
    num = constants.HTTP_STATUS_ALREADY_REPORTED;
    num = constants.HTTP_STATUS_IM_USED;
    num = constants.HTTP_STATUS_MULTIPLE_CHOICES;
    num = constants.HTTP_STATUS_MOVED_PERMANENTLY;
    num = constants.HTTP_STATUS_FOUND;
    num = constants.HTTP_STATUS_SEE_OTHER;
    num = constants.HTTP_STATUS_NOT_MODIFIED;
    num = constants.HTTP_STATUS_USE_PROXY;
    num = constants.HTTP_STATUS_TEMPORARY_REDIRECT;
    num = constants.HTTP_STATUS_PERMANENT_REDIRECT;
    num = constants.HTTP_STATUS_BAD_REQUEST;
    num = constants.HTTP_STATUS_UNAUTHORIZED;
    num = constants.HTTP_STATUS_PAYMENT_REQUIRED;
    num = constants.HTTP_STATUS_FORBIDDEN;
    num = constants.HTTP_STATUS_NOT_FOUND;
    num = constants.HTTP_STATUS_METHOD_NOT_ALLOWED;
    num = constants.HTTP_STATUS_NOT_ACCEPTABLE;
    num = constants.HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED;
    num = constants.HTTP_STATUS_REQUEST_TIMEOUT;
    num = constants.HTTP_STATUS_CONFLICT;
    num = constants.HTTP_STATUS_GONE;
    num = constants.HTTP_STATUS_LENGTH_REQUIRED;
    num = constants.HTTP_STATUS_PRECONDITION_FAILED;
    num = constants.HTTP_STATUS_PAYLOAD_TOO_LARGE;
    num = constants.HTTP_STATUS_URI_TOO_LONG;
    num = constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE;
    num = constants.HTTP_STATUS_RANGE_NOT_SATISFIABLE;
    num = constants.HTTP_STATUS_EXPECTATION_FAILED;
    num = constants.HTTP_STATUS_TEAPOT;
    num = constants.HTTP_STATUS_MISDIRECTED_REQUEST;
    num = constants.HTTP_STATUS_UNPROCESSABLE_ENTITY;
    num = constants.HTTP_STATUS_LOCKED;
    num = constants.HTTP_STATUS_FAILED_DEPENDENCY;
    num = constants.HTTP_STATUS_UNORDERED_COLLECTION;
    num = constants.HTTP_STATUS_UPGRADE_REQUIRED;
    num = constants.HTTP_STATUS_PRECONDITION_REQUIRED;
    num = constants.HTTP_STATUS_TOO_MANY_REQUESTS;
    num = constants.HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE;
    num = constants.HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS;
    num = constants.HTTP_STATUS_INTERNAL_SERVER_ERROR;
    num = constants.HTTP_STATUS_NOT_IMPLEMENTED;
    num = constants.HTTP_STATUS_BAD_GATEWAY;
    num = constants.HTTP_STATUS_SERVICE_UNAVAILABLE;
    num = constants.HTTP_STATUS_GATEWAY_TIMEOUT;
    num = constants.HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED;
    num = constants.HTTP_STATUS_VARIANT_ALSO_NEGOTIATES;
    num = constants.HTTP_STATUS_INSUFFICIENT_STORAGE;
    num = constants.HTTP_STATUS_LOOP_DETECTED;
    num = constants.HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED;
    num = constants.HTTP_STATUS_NOT_EXTENDED;
    num = constants.HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED;
    str = constants.HTTP2_HEADER_STATUS;
    str = constants.HTTP2_HEADER_METHOD;
    str = constants.HTTP2_HEADER_AUTHORITY;
    str = constants.HTTP2_HEADER_SCHEME;
    str = constants.HTTP2_HEADER_PATH;
    str = constants.HTTP2_HEADER_ACCEPT_CHARSET;
    str = constants.HTTP2_HEADER_ACCEPT_ENCODING;
    str = constants.HTTP2_HEADER_ACCEPT_LANGUAGE;
    str = constants.HTTP2_HEADER_ACCEPT_RANGES;
    str = constants.HTTP2_HEADER_ACCEPT;
    str = constants.HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN;
    str = constants.HTTP2_HEADER_AGE;
    str = constants.HTTP2_HEADER_ALLOW;
    str = constants.HTTP2_HEADER_AUTHORIZATION;
    str = constants.HTTP2_HEADER_CACHE_CONTROL;
    str = constants.HTTP2_HEADER_CONNECTION;
    str = constants.HTTP2_HEADER_CONTENT_DISPOSITION;
    str = constants.HTTP2_HEADER_CONTENT_ENCODING;
    str = constants.HTTP2_HEADER_CONTENT_LANGUAGE;
    str = constants.HTTP2_HEADER_CONTENT_LENGTH;
    str = constants.HTTP2_HEADER_CONTENT_LOCATION;
    str = constants.HTTP2_HEADER_CONTENT_MD5;
    str = constants.HTTP2_HEADER_CONTENT_RANGE;
    str = constants.HTTP2_HEADER_CONTENT_TYPE;
    str = constants.HTTP2_HEADER_COOKIE;
    str = constants.HTTP2_HEADER_DATE;
    str = constants.HTTP2_HEADER_ETAG;
    str = constants.HTTP2_HEADER_EXPECT;
    str = constants.HTTP2_HEADER_EXPIRES;
    str = constants.HTTP2_HEADER_FROM;
    str = constants.HTTP2_HEADER_HOST;
    str = constants.HTTP2_HEADER_IF_MATCH;
    str = constants.HTTP2_HEADER_IF_MODIFIED_SINCE;
    str = constants.HTTP2_HEADER_IF_NONE_MATCH;
    str = constants.HTTP2_HEADER_IF_RANGE;
    str = constants.HTTP2_HEADER_IF_UNMODIFIED_SINCE;
    str = constants.HTTP2_HEADER_LAST_MODIFIED;
    str = constants.HTTP2_HEADER_LINK;
    str = constants.HTTP2_HEADER_LOCATION;
    str = constants.HTTP2_HEADER_MAX_FORWARDS;
    str = constants.HTTP2_HEADER_PREFER;
    str = constants.HTTP2_HEADER_PROXY_AUTHENTICATE;
    str = constants.HTTP2_HEADER_PROXY_AUTHORIZATION;
    str = constants.HTTP2_HEADER_RANGE;
    str = constants.HTTP2_HEADER_REFERER;
    str = constants.HTTP2_HEADER_REFRESH;
    str = constants.HTTP2_HEADER_RETRY_AFTER;
    str = constants.HTTP2_HEADER_SERVER;
    str = constants.HTTP2_HEADER_SET_COOKIE;
    str = constants.HTTP2_HEADER_STRICT_TRANSPORT_SECURITY;
    str = constants.HTTP2_HEADER_TRANSFER_ENCODING;
    str = constants.HTTP2_HEADER_TE;
    str = constants.HTTP2_HEADER_UPGRADE;
    str = constants.HTTP2_HEADER_USER_AGENT;
    str = constants.HTTP2_HEADER_VARY;
    str = constants.HTTP2_HEADER_VIA;
    str = constants.HTTP2_HEADER_WWW_AUTHENTICATE;
    str = constants.HTTP2_HEADER_HTTP2_SETTINGS;
    str = constants.HTTP2_HEADER_KEEP_ALIVE;
    str = constants.HTTP2_HEADER_PROXY_CONNECTION;
    str = constants.HTTP2_METHOD_ACL;
    str = constants.HTTP2_METHOD_BASELINE_CONTROL;
    str = constants.HTTP2_METHOD_BIND;
    str = constants.HTTP2_METHOD_CHECKIN;
    str = constants.HTTP2_METHOD_CHECKOUT;
    str = constants.HTTP2_METHOD_CONNECT;
    str = constants.HTTP2_METHOD_COPY;
    str = constants.HTTP2_METHOD_DELETE;
    str = constants.HTTP2_METHOD_GET;
    str = constants.HTTP2_METHOD_HEAD;
    str = constants.HTTP2_METHOD_LABEL;
    str = constants.HTTP2_METHOD_LINK;
    str = constants.HTTP2_METHOD_LOCK;
    str = constants.HTTP2_METHOD_MERGE;
    str = constants.HTTP2_METHOD_MKACTIVITY;
    str = constants.HTTP2_METHOD_MKCALENDAR;
    str = constants.HTTP2_METHOD_MKCOL;
    str = constants.HTTP2_METHOD_MKREDIRECTREF;
    str = constants.HTTP2_METHOD_MKWORKSPACE;
    str = constants.HTTP2_METHOD_MOVE;
    str = constants.HTTP2_METHOD_OPTIONS;
    str = constants.HTTP2_METHOD_ORDERPATCH;
    str = constants.HTTP2_METHOD_PATCH;
    str = constants.HTTP2_METHOD_POST;
    str = constants.HTTP2_METHOD_PRI;
    str = constants.HTTP2_METHOD_PROPFIND;
    str = constants.HTTP2_METHOD_PROPPATCH;
    str = constants.HTTP2_METHOD_PUT;
    str = constants.HTTP2_METHOD_REBIND;
    str = constants.HTTP2_METHOD_REPORT;
    str = constants.HTTP2_METHOD_SEARCH;
    str = constants.HTTP2_METHOD_TRACE;
    str = constants.HTTP2_METHOD_UNBIND;
    str = constants.HTTP2_METHOD_UNCHECKOUT;
    str = constants.HTTP2_METHOD_UNLINK;
    str = constants.HTTP2_METHOD_UNLOCK;
    str = constants.HTTP2_METHOD_UPDATE;
    str = constants.HTTP2_METHOD_UPDATEREDIRECTREF;
    str = constants.HTTP2_METHOD_VERSION_CONTROL;
}
