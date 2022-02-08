// Type definitions for websocket 1.0
// Project: https://github.com/theturtle32/WebSocket-Node
// Definitions by: Paul Loyd <https://github.com/loyd>,
//                 Kay Schecker <https://github.com/flynetworks>,
//                 Zhao Lei <https://github.com/zhaoleimxd>
//                 Sheng Chen <https://github.com/jdneo>,
//                 Matthew Peveler <https://github.com/MasterOdin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import events = require('events');
import http = require('http');
import https = require('https');
import net = require('net');
import url = require('url');

export interface IStringified {
    toString: (...args: any[]) => string;
}

export interface IConfig {
    /**
     * The maximum allowed received frame size in bytes.
     * Single frame messages will also be limited to this maximum.
     * @default 1MiB
     */
    maxReceivedFrameSize?: number | undefined;

    /**
     * The maximum allowed aggregate message size (for fragmented messages) in bytes
     * @default 8MiB
     */
    maxReceivedMessageSize?: number | undefined;

    /**
     * Whether or not to fragment outgoing messages. If true, messages will be
     * automatically fragmented into chunks of up to `fragmentationThreshold` bytes.
     * @default true
     */
    fragmentOutgoingMessages?: boolean | undefined;

    /**
     * The maximum size of a frame in bytes before it is automatically fragmented.
     * @default 16KiB
     */
    fragmentationThreshold?: number | undefined;

    /**
     * If true, fragmented messages will be automatically assembled and the full
     * message will be emitted via a `message` event. If false, each frame will be
     * emitted on the `connection` object via a `frame` event and the application
     * will be responsible for aggregating multiple fragmented frames. Single-frame
     * messages will emit a `message` event in addition to the `frame` event.
     * @default true
     */
    assembleFragments?: boolean | undefined;

    /**
     * The number of milliseconds to wait after sending a close frame for an
     * `acknowledgement` to come back before giving up and just closing the socket.
     * @default 5000
     */
    closeTimeout?: number | undefined;

    /**
     * The Nagle Algorithm makes more efficient use of network resources by introducing a
     * small delay before sending small packets so that multiple messages can be batched
     * together before going onto the wire. This however comes at the cost of latency.
     * @default true
     */
    disableNagleAlgorithm?: boolean | undefined;
}

export interface IServerConfig extends IConfig {
    /** The http or https server instance(s) to attach to */
    httpServer: http.Server | https.Server | Array<http.Server | https.Server>;

    /**
     * The maximum allowed received frame size in bytes.
     * Single frame messages will also be limited to this maximum.
     * @default 64KiB
     */
    maxReceivedFrameSize?: number | undefined;

    /**
     * The maximum allowed aggregate message size (for fragmented messages) in bytes.
     * @default 1MiB
     */
    maxReceivedMessageSize?: number | undefined;

    /**
     * If true, the server will automatically send a ping to all clients every
     * `keepaliveInterval` milliseconds. Each client has an independent `keepalive`
     * timer, which is reset when any data is received from that client.
     * @default true
     */
    keepalive?: boolean | undefined;

    /**
     * The interval in milliseconds to send `keepalive` pings to connected clients.
     * @default 20000
     */
    keepaliveInterval?: number | undefined;

    /**
     * If true, the server will consider any connection that has not received any
     * data within the amount of time specified by `keepaliveGracePeriod` after a
     * `keepalive` ping has been sent. Ignored if `keepalive` is false.
     * @default true
     */
    dropConnectionOnKeepaliveTimeout?: boolean | undefined;

    /**
     * The amount of time to wait after sending a `keepalive` ping before closing
     * the connection if the connected peer does not respond. Ignored if `keepalive`
     * or `dropConnectionOnKeepaliveTimeout` are false. The grace period timer is
     * reset when any data is received from the client.
     * @default 10000
     */
    keepaliveGracePeriod?: number | undefined;

    /**
     * Whether to use native TCP keep-alive instead of WebSockets ping
     * and pong packets.  Native TCP keep-alive sends smaller packets
     * on the wire and so uses bandwidth more efficiently.  This may
     * be more important when talking to mobile devices.
     * If this value is set to true, then these values will be ignored:
     *   keepaliveGracePeriod
     *   dropConnectionOnKeepaliveTimeout
     * @default false
     */
    useNativeKeepalive?: boolean | undefined;

    /**
     * If this is true, websocket connections will be accepted regardless of the path
     * and protocol specified by the client. The protocol accepted will be the first
     * that was requested by the client.
     * @default false
     */
    autoAcceptConnections?: boolean | undefined;

    /**
     * Whether or not the X-Forwarded-For header should be respected.
     * It's important to set this to 'true' when accepting connections
     * from untrusted clients, as a malicious client could spoof its
     * IP address by simply setting this header.  It's meant to be added
     * by a trusted proxy or other intermediary within your own
     * infrastructure.
     * See:  http://en.wikipedia.org/wiki/X-Forwarded-For
     * @default false
     */
    ignoreXForwardedFor?: boolean | undefined;
}

export class server extends events.EventEmitter {
    config?: IServerConfig | undefined;
    connections: connection[];
    pendingRequests: request[];

    constructor(serverConfig?: IServerConfig);

    /** Send binary or UTF-8 message for each connection */
    broadcast(data: Buffer | IStringified): void;
    /** Send binary message for each connection */
    broadcastBytes(data: Buffer): void;
    /** Send UTF-8 message for each connection */
    broadcastUTF(data: IStringified): void;
    /** Attach the `server` instance to a Node http.Server instance */
    mount(serverConfig: IServerConfig): void;

    /**
     * Detach the `server` instance from the Node http.Server instance.
     * All existing connections are left alone and will not be affected,
     * but no new WebSocket connections will be accepted.
     */
    unmount(): void;

    /** Close all open WebSocket connections */
    closeAllConnections(): void;
    /** Close all open WebSocket connections and unmount the server */
    shutDown(): void;

    handleUpgrade(request: http.IncomingMessage, socket: net.Socket): void;
    handleRequestAccepted(connection: connection): void;
    handleConnectionClose(connection: connection, closeReason: number, description: string): void;
    handleRequestResolved(request: request): void;

    // Events
    on(event: 'request', cb: (request: request) => void): this;
    on(event: 'connect', cb: (connection: connection) => void): this;
    on(event: 'close', cb: (connection: connection, reason: number, desc: string) => void): this;
    addListener(event: 'request', cb: (request: request) => void): this;
    addListener(event: 'connect', cb: (connection: connection) => void): this;
    addListener(event: 'close', cb: (connection: connection, reason: number, desc: string) => void): this;
}

export interface ICookie {
    name: string;
    value: string;
    path?: string | undefined;
    domain?: string | undefined;
    expires?: Date | undefined;
    maxage?: number | undefined;
    secure?: boolean | undefined;
    httponly?: boolean | undefined;
}

export interface IExtension {
    name: string;
    value: string;
}

export class request extends events.EventEmitter {
    /** A reference to the original Node HTTP request object */
    httpRequest: http.IncomingMessage;
    /** This will include the port number if a non-standard port is used */
    host: string;
    /** A string containing the path that was requested by the client */
    resource: string;
    /** `Sec-WebSocket-Key` */
    key: string;
    /** Parsed resource, including the query string parameters */
    resourceURL: url.Url;

    /**
     * Client's IP. If an `X-Forwarded-For` header is present, the value will be taken
     * from that header to facilitate WebSocket servers that live behind a reverse-proxy
     */
    remoteAddress: string;
    remoteAddresses: string[];

    /**
     * If the client is a web browser, origin will be a string containing the URL
     * of the page containing the script that opened the connection.
     * If the client is not a web browser, origin may be `null` or "*".
     */
    origin: string;

    /** The version of the WebSocket protocol requested by the client */
    webSocketVersion: number;
    /** An array containing a list of extensions requested by the client */
    requestedExtensions: any[];

    cookies: ICookie[];
    socket: net.Socket;

    /**
     * List of strings that indicate the subprotocols the client would like to speak.
     * The server should select the best one that it can support from the list and
     * pass it to the `accept` function when accepting the connection.
     * Note that all the strings in the `requestedProtocols` array will have been
     * converted to lower case.
     */
    requestedProtocols: string[];
    protocolFullCaseMap: { [key: string]: string };

    serverConfig: IServerConfig;

    _resolved: boolean;
    _socketIsClosing: boolean;

    constructor(socket: net.Socket, httpRequest: http.IncomingMessage, config: IServerConfig);

    /**
     * After inspecting the `request` properties, call this function on the
     * request object to accept the connection. If you don't have a particular subprotocol
     * you wish to speak, you may pass `null` for the `acceptedProtocol` parameter.
     *
     * @param [acceptedProtocol] case-insensitive value that was requested by the client
     */
    accept(acceptedProtocol?: string | null, allowedOrigin?: string, cookies?: ICookie[]): connection;

    /**
     * Reject connection.
     * You may optionally pass in an HTTP Status code (such as 404) and a textual
     * description that will be sent to the client in the form of an
     * `X-WebSocket-Reject-Reason` header.
     * Optional extra http headers can be added via Object key/values on extraHeaders.
     */
    reject(httpStatus?: number, reason?: string, extraHeaders?: object): void;

    // Events
    on(event: 'requestResolved' | 'requestRejected', cb: (request: this) => void): this;
    on(event: 'requestAccepted', cb: (connection: connection) => void): this;
    addListener(event: 'requestResolved' | 'requestRejected', cb: (request: this) => void): this;
    addListener(event: 'requestAccepted', cb: (connection: connection) => void): this;

    readHandshake(): void;

    parseExtensions(extensionString: string): string[];

    parseCookies(str: string): ICookie[] | void;

    _handleSocketCloseBeforeAccept(): void;
    _removeSocketCloseListeners(): void;
    _verifyResolution(): void;
}

export interface IUtf8Message {
    type: 'utf8';
    utf8Data: string;
}

export interface IBinaryMessage {
    type: 'binary';
    binaryData: Buffer;
}

export type Message = IUtf8Message | IBinaryMessage;

export interface IBufferList extends events.EventEmitter {
    encoding: string;
    length: number;
    write(buf: Buffer): boolean;
    end(buf: Buffer): void;
    push(): void;

    /**
     * For each buffer, perform some action.
     * If fn's result is a true value, cut out early.
     */
    forEach(fn: (buf: Buffer) => boolean): void;

    /** Create a single buffer out of all the chunks */
    join(start: number, end: number): Buffer;

    /** Join all the chunks to existing buffer */
    joinInto(buf: Buffer, offset: number, start: number, end: number): Buffer;

    /**
     * Advance the buffer stream by `n` bytes.
     * If `n` the aggregate advance offset passes the end of the buffer list,
     * operations such as `take` will return empty strings until enough data is pushed.
     */
    advance(n: number): IBufferList;

    /**
     * Take `n` bytes from the start of the buffers.
     * If there are less than `n` bytes in all the buffers or `n` is undefined,
     * returns the entire concatenated buffer string.
     */
    take(n: number, encoding?: string): any;
    take(encoding?: string): any;

    toString(): string;

    // Events
    on(event: 'advance', cb: (n: number) => void): this;
    on(event: 'write', cb: (buf: Buffer) => void): this;
    addListener(event: 'advance', cb: (n: number) => void): this;
    addListener(event: 'write', cb: (buf: Buffer) => void): this;
}

export class connection extends events.EventEmitter {
    static CLOSE_REASON_NORMAL: number;
    static CLOSE_REASON_GOING_AWAY: number;
    static CLOSE_REASON_PROTOCOL_ERROR: number;
    static CLOSE_REASON_UNPROCESSABLE_INPUT: number;
    static CLOSE_REASON_RESERVED: number;
    static CLOSE_REASON_NOT_PROVIDED: number;
    static CLOSE_REASON_ABNORMAL: number;
    static CLOSE_REASON_INVALID_DATA: number;
    static CLOSE_REASON_POLICY_VIOLATION: number;
    static CLOSE_REASON_MESSAGE_TOO_BIG: number;
    static CLOSE_REASON_EXTENSION_REQUIRED: number;

    static CLOSE_DESCRIPTIONS: {[code: number]: string};

    /**
     * After the connection is closed, contains a textual description of the reason for
     * the connection closure, or `null` if the connection is still open.
     */
    closeDescription: string;

    /**
     * After the connection is closed, contains the numeric close reason status code,
     * or `-1` if the connection is still open.
     */
    closeReasonCode: number;

    /**
     * The subprotocol that was chosen to be spoken on this connection. This field
     * will have been converted to lower case.
     */
    protocol: string;

    config: IConfig;
    socket: net.Socket;
    maskOutgoingPackets: boolean;
    maskBytes: Buffer;
    frameHeader: Buffer;
    bufferList: IBufferList;
    currentFrame: frame;
    fragmentationSize: number;
    frameQueue: frame[];
    state: string;
    waitingForCloseResponse: boolean;
    receivedEnd: boolean;
    closeTimeout: number;
    assembleFragments: number;
    maxReceivedMessageSize: number;
    outputBufferFull: boolean;
    inputPaused: boolean;
    bytesWaitingToFlush: number;
    socketHadError: boolean;

    /** An array of extensions that were negotiated for this connection */
    extensions: IExtension[];

    /**
     * The IP address of the remote peer as a string. In the case of a server,
     * the `X-Forwarded-For` header will be respected and preferred for the purposes
     * of populating this field. If you need to get to the actual remote IP address,
     * `socket.remoteAddress` will provide it.
     */
    remoteAddress: string;

    /** The version of the WebSocket protocol requested by the client */
    webSocketVersion: number;
    /** Whether or not the connection is still connected. Read-only */
    connected: boolean;

    _pingListenerCount: number;

    constructor(socket: net.Socket, extensions: IExtension[], protocol: string,
        maskOutgoingPackets: boolean, config: IConfig);

    /**
     * Close the connection. A close frame will be sent to the remote peer indicating
     * that we wish to close the connection, and we will then wait for up to
     * `config.closeTimeout` milliseconds for an acknowledgment from the remote peer
     * before terminating the underlying socket connection.
     */
    close(reasonCode?: number, description?: string): void;

    /**
     * Send a close frame to the remote peer and immediately close the socket without
     * waiting for a response. This should generally be used only in error conditions.
     */
    drop(reasonCode?: number, description?: string, skipCloseFrame?: boolean): void;

    /**
     * Immediately sends the specified string as a UTF-8 WebSocket message to the remote
     * peer. If `config.fragmentOutgoingMessages` is true the message may be sent as
     * multiple fragments if it exceeds `config.fragmentationThreshold` bytes.
     */
    sendUTF(data: IStringified, cb?: (err?: Error) => void): void;

    /**
     * Immediately sends the specified Node Buffer object as a Binary WebSocket message
     * to the remote peer. If config.fragmentOutgoingMessages is true the message may be
     * sent as multiple fragments if it exceeds config.fragmentationThreshold bytes.
     */
    sendBytes(buffer: Buffer, cb?: (err?: Error) => void): void;

    /** Auto-detect the data type and send UTF-8 or Binary message */
    send(data: Buffer | IStringified, cb?: (err?: Error) => void): void;

    /** Sends a ping frame. Ping frames must not exceed 125 bytes in length. */
    ping(data: Buffer | IStringified): void;

    /**
     * Sends a pong frame. Pong frames may be sent unsolicited and such pong frames will
     * trigger no action on the receiving peer. Pong frames sent in response to a ping
     * frame must mirror the payload data of the ping frame exactly.
     * The `connection` object handles this internally for you, so there should
     * be no need to use this method to respond to pings.
     * Pong frames must not exceed 125 bytes in length.
     */
    pong(buffer: Buffer): void;

    /**
     * Serializes a `frame` object into binary data and immediately sends it to
     * the remote peer. This is an advanced function, requiring you to manually compose
     * your own `frame`. You should probably use sendUTF or sendBytes instead.
     */
    sendFrame(frame: frame, cb?: (err?: Error) => void): void;

    /** Set or reset the `keepalive` timer when data is received */
    setKeepaliveTimer(): void;
    clearKeepaliveTimer(): void;
    handleKeepaliveTimer(): void;
    setGracePeriodTimer(): void;
    clearGracePeriodTimer(): void;
    handleGracePeriodTimer(): void;
    handleSocketData(data: Buffer): void;
    processReceivedData(): void;
    handleSocketError(error: Error): void;
    handleSocketEnd(): void;
    handleSocketClose(hadError: boolean): void;
    handleSocketDrain(): void;
    handleSocketPause(): void;
    handleSocketResume(): void;
    pause(): void;
    resume(): void;

    setCloseTimer(): void;
    clearCloseTimer(): void;
    handleCloseTimer(): void;
    processFrame(frame: frame): void;
    fragmentAndSend(frame: frame, cb?: (err: Error) => void): void;
    sendCloseFrame(reasonCode?: number, reasonText?: string, cb?: (err?: Error) => void): void;

    _addSocketEventListeners(): void;

    // Events
    on(event: 'message', cb: (data: Message) => void): this;
    on(event: 'frame', cb: (frame: frame) => void): this;
    on(event: 'close', cb: (code: number, desc: string) => void): this;
    on(event: 'error', cb: (err: Error) => void): this;
    on(event: 'drain' | 'pause' | 'resume', cb: () => void): this;
    on(event: 'ping', cb: (cancel: () => void, binaryPayload: Buffer) => void): this;
    on(event: 'pong', cb: (binaryPayload: Buffer) => void): this;
    addListener(event: 'message', cb: (data: Message) => void): this;
    addListener(event: 'frame', cb: (frame: frame) => void): this;
    addListener(event: 'close', cb: (code: number, desc: string) => void): this;
    addListener(event: 'error', cb: (err: Error) => void): this;
    addListener(event: 'drain' | 'pause' | 'resume', cb: () => void): this;
    addListener(event: 'ping', cb: (cancel: () => void, binaryPayload: Buffer) => void): this;
    addListener(event: 'pong', cb: (binaryPayload: Buffer) => void): this;
}

export class frame {
    /** Whether or not this is last frame in a fragmentation sequence */
    fin: boolean;

    /**
     * Represents the RSV1 field in the framing. Setting this to true will result in
     * a Protocol Error on the receiving peer.
     */
    rsv1: boolean;

    /**
     * Represents the RSV1 field in the framing. Setting this to true will result in
     * a Protocol Error on the receiving peer.
     */
    rsv2: boolean;

    /**
     * Represents the RSV1 field in the framing. Setting this to true will result in
     * a Protocol Error on the receiving peer.
     */
    rsv3: boolean;

    /**
     * Whether or not this frame is (or should be) masked. For outgoing frames, when
     * connected as a client, this flag is automatically forced to true by `connection`.
     * Outgoing frames sent from the server-side of a connection are not masked.
     */
    mask: number;

    /**
     * Identifies which kind of frame this is.
     *
     * Hex  - Dec - Description
     * 0x00 -   0 - Continuation
     * 0x01 -   1 - Text Frame
     * 0x02 -   2 - Binary Frame
     * 0x08 -   8 - Close Frame
     * 0x09 -   9 - Ping Frame
     * 0x0A -  10 - Pong Frame
     */
    opcode: number;

    /**
     * Identifies the length of the payload data on a received frame.
     * When sending a frame, will be automatically calculated from `binaryPayload` object.
     */
    length: number;

    /**
     * The binary payload data.
     * Even text frames are sent with a Buffer providing the binary payload data.
     */
    binaryPayload: Buffer;

    maskBytes: Buffer;
    frameHeader: Buffer;
    config: IConfig;
    maxReceivedFrameSize: number;
    protocolError: boolean;
    dropReason: string;
    frameTooLarge: boolean;
    invalidCloseFrameLength: boolean;
    parseState: number;
    closeStatus: number;

    addData(bufferList: IBufferList): boolean;
    throwAwayPayload(bufferList: IBufferList): boolean;
    toBuffer(nullMask: boolean): Buffer;
    toString(): string;
}

export interface IClientConfig extends IConfig {
    /**
     * Which version of the WebSocket protocol to use when making the connection.
     * Currently supported values are 8 and 13. This option will be removed once the
     * protocol is finalized by the IETF It is only available to ease the transition
     * through the intermediate draft protocol versions. The only thing this affects
     * the name of the Origin header.
     * @default 13
     */
    webSocketVersion?: number | undefined;

    /**
     * Options to pass to `https.request` if connecting via TLS.
     * @see https://nodejs.org/api/https.html#https_https_request_options_callback
     */
    tlsOptions?: https.RequestOptions | undefined;
}

export class client extends events.EventEmitter {
    constructor(ClientConfig?: IClientConfig);

    /**
     * Establish a connection. The remote server will select the best subprotocol that
     * it supports and send that back when establishing the connection.
     *
     * @param requestUrl should be a standard websocket url
     * @param [requestedProtocols] list of subprotocols supported by the client.
     *     The remote server will select the best subprotocol that it supports and send that back when establishing the connection.
     * @param [origin] Used in user-agent scenarios to identify the page containing
     *     any scripting content that caused the connection to be requested.
     * @param [headers] additional arbitrary HTTP request headers to send along with the request.
     *     This may be used to pass things like access tokens, etc. so that the server can verify authentication/authorization
     *     before deciding to accept and open the full WebSocket connection.
     * @param [extraRequestOptions] additional configuration options to be passed to `http.request` or `https.request`.
     *     This can be used to pass a custom `agent` to enable `client` usage from behind an HTTP or HTTPS proxy server
     *     using {@link https://github.com/koichik/node-tunnel|koichik/node-tunnel} or similar.
     * @example client.connect('ws://www.mygreatapp.com:1234/websocketapp/')
     */
    connect(requestUrl: url.Url | string, requestedProtocols?: string | string[], origin?: string, headers?: http.OutgoingHttpHeaders, extraRequestOptions?: http.RequestOptions): void;

    /**
     * Will cancel an in-progress connection request before either the `connect` event or the `connectFailed` event has been emitted.
     * If the `connect` or `connectFailed` event has already been emitted, calling `abort()` will do nothing.
     */
    abort(): void;

    // Events
    on(event: 'connect', cb: (connection: connection) => void): this;
    on(event: 'connectFailed', cb: (err: Error) => void): this;
    on(event: 'httpResponse', cb: (response: http.IncomingMessage, client: client) => void): this;
    addListener(event: 'connect', cb: (connection: connection) => void): this;
    addListener(event: 'connectFailed', cb: (err: Error) => void): this;
    addListener(event: 'httpResponse', cb: (response: http.IncomingMessage, client: client) => void): this;
}

export interface IRouterRequest extends events.EventEmitter {
    webSocketRequest: request;
    protocol: string | null;

    /**
     * If the client is a web browser, origin will be a string containing the URL
     * of the page containing the script that opened the connection.
     * If the client is not a web browser, origin may be `null` or "*".
     */
    origin: string;

    /** A string containing the path that was requested by the client */
    resource: string;
    /** Parsed resource, including the query string parameters */
    resourceURL: url.Url;

    /** A reference to the original Node HTTP request object */
    httpRequest: http.IncomingMessage;

    /**
     * Client's IP. If an `X-Forwarded-For` header is present, the value will be taken
     * from that header to facilitate WebSocket servers that live behind a reverse-proxy
     */
    remoteAddress: string;

    /** The version of the WebSocket protocol requested by the client */
    webSocketVersion: number;
    /** An array containing a list of extensions requested by the client */
    requestedExtensions: any[];

    cookies: ICookie[];

    /**
     * After inspecting the `request` properties, call this function on the
     * request object to accept the connection. If you don't have a particular subprotocol
     * you wish to speak, you may pass `null` for the `acceptedProtocol` parameter.
     *
     * @param [acceptedProtocol] case-insensitive value that was requested by the client
     */
    accept(acceptedProtocol?: string, allowedOrigin?: string, cookies?: ICookie[]): connection;

    /**
     * Reject connection.
     * You may optionally pass in an HTTP Status code (such as 404) and a textual
     * description that will be sent to the client in the form of an
     * `X-WebSocket-Reject-Reason` header.
     */
    reject(httpStatus?: number, reason?: string): void;

    // Events
    on(event: 'requestAccepted', cb: (connection: connection) => void): this;
    on(event: 'requestRejected', cb: (request: this) => void): this;
    addListener(event: 'requestAccepted', cb: (connection: connection) => void): this;
    addListener(event: 'requestRejected', cb: (request: this) => void): this;
}

export interface IRouterConfig {
    /*
     * The WebSocketServer instance to attach to.
     */
    server: server;
}

export interface IRouterHandler {
    path: string;
    pathString: string;
    protocol: string;
    callback: (request: IRouterRequest) => void;
}

export class router extends events.EventEmitter {
    handlers: IRouterHandler[];

    constructor(config?: IRouterConfig);

    /** Attach to WebSocket server */
    attachServer(server: server): void;

    /** Detach from WebSocket server */
    detachServer(): void;

    mount(path: string | RegExp, protocol: string | null, callback: (request: IRouterRequest) => void): void;

    unmount(path: string | RegExp, protocol?: string): void;

    findHandlerIndex(pathString: string, protocol: string): number;

    pathToRegExp(path: string): RegExp;
    pathToRegEx(path: RegExp): RegExp;

    handleRequest(request: request): void;
}

export interface ICloseEvent {
    code: number;
    reason: string;
    wasClean: boolean;
}

export interface IMessageEvent {
    data: string | Buffer | ArrayBuffer;
}

export class w3cwebsocket {
    static CONNECTING: number;
    static OPEN: number;
    static CLOSING: number;
    static CLOSED: number;

    _url: string;
    _readyState: number;
    _protocol?: string | undefined;
    _extensions: IExtension[];
    _bufferedAmount: number;
    _binaryType: 'arraybuffer';
    _connection?: connection | undefined;
    _client: client;

    url: string;
    readyState: number;
    protocol?: string | undefined;
    extensions: IExtension[];
    bufferedAmount: number;

    binaryType: 'arraybuffer';

    CONNECTING: number;
    OPEN: number;
    CLOSING: number;
    CLOSED: number;

    onopen: () => void;
    onerror: (error: Error) => void;
    onclose: (event: ICloseEvent) => void;
    onmessage: (message: IMessageEvent) => void;

    constructor(
        url: string,
        protocols?: string | string[],
        origin?: string,
        headers?: http.OutgoingHttpHeaders,
        requestOptions?: object,
        IClientConfig?: IClientConfig,
    );

    send(data: ArrayBufferView | ArrayBuffer | Buffer | IStringified): void;
    close(code?: number, reason?: string): void;
}

export const deprecation: {
    disableWarnings: boolean;
    deprecationWarningMap: {[name: string]: string};
    warn(deprecationName: string): void;
};

export const version: string;
