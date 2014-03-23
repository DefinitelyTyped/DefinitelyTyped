// Type definitions for websocket
// Project: https://github.com/Worlize/WebSocket-Node
// Definitions by: Paul Loyd <https://github.com/loyd>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "websocket" {
    import events = require('events');
    import http   = require('http');
    import net    = require('net');
    import url    = require('url');

    export interface IStringified {
        toString: (...args: any[]) => string;
    }

    export interface IConfig {
        /**
         * The maximum allowed received frame size in bytes.
         * Single frame messages will also be limited to this maximum.
         */
        maxReceivedFrameSize?: number;

        /** The maximum allowed aggregate message size (for fragmented messages) in bytes */
        maxReceivedMessageSize?: number;

        /**
         * Whether or not to fragment outgoing messages. If true, messages will be
         * automatically fragmented into chunks of up to `fragmentationThreshold` bytes.
         * @default true
         */
        fragmentOutgoingMessages?: boolean;

        /**
         * The maximum size of a frame in bytes before it is automatically fragmented.
         * @default 16KiB
         */
        fragmentationThreshold?: number;

        /**
         * If true, fragmented messages will be automatically assembled and the full
         * message will be emitted via a `message` event. If false, each frame will be
         * emitted on the `connection` object via a `frame` event and the application
         * will be responsible for aggregating multiple fragmented frames. Single-frame
         * messages will emit a `message` event in addition to the `frame` event.
         * @default true
         */
        assembleFragments?: boolean;

        /**
         * The number of milliseconds to wait after sending a close frame for an
         * `acknowledgement` to come back before giving up and just closing the socket.
         * @default 5000
         */
        closeTimeout?: number;
    }

    export interface IServerConfig extends IConfig {
        /** The http server instance to attach to */
        httpServer: http.Server;

        /**
         * The maximum allowed received frame size in bytes.
         * Single frame messages will also be limited to this maximum.
         * @default 64KiB
         */
        maxReceivedFrameSize?: number;

        /**
         * The maximum allowed aggregate message size (for fragmented messages) in bytes.
         * @default 1MiB
         */
        maxReceivedMessageSize?: number;

        /**
         * If true, the server will automatically send a ping to all clients every
         * `keepaliveInterval` milliseconds. Each client has an independent `keepalive`
         * timer, which is reset when any data is received from that client.
         * @default true
         */
        keepalive?: boolean;

        /**
         * The interval in milliseconds to send `keepalive` pings to connected clients.
         * @default 20000
         */
        keepaliveInterval?: number;

        /**
         * If true, the server will consider any connection that has not received any
         * data within the amount of time specified by `keepaliveGracePeriod` after a
         * `keepalive` ping has been sent. Ignored if `keepalive` is false.
         * @default true
         */
        dropConnectionOnKeepaliveTimeout?: boolean;

        /**
         * The amount of time to wait after sending a `keepalive` ping before closing
         * the connection if the connected peer does not respond. Ignored if `keepalive`
         * or `dropConnectionOnKeepaliveTimeout` are false. The grace period timer is
         * reset when any data is received from the client.
         * @default 10000
         */
        keepaliveGracePeriod?: number;

        /**
         * If this is true, websocket connections will be accepted regardless of the path
         * and protocol specified by the client. The protocol accepted will be the first 
         * that was requested by the client.
         * @default false
         */
        autoAcceptConnections?: boolean;

        /**
         * The Nagle Algorithm makes more efficient use of network resources by introducing a
         * small delay before sending small packets so that multiple messages can be batched
         * together before going onto the wire. This however comes at the cost of latency.
         * @default true
         */
        disableNagleAlgorithm?: boolean; 
    }

    export class server extends events.EventEmitter {
        config: IServerConfig;
        connections: connection[];

        constructor(serverConfig?: IServerConfig);

        /** Send binary message for each connection */
        broadcast(data: NodeBuffer): void;
        /** Send UTF-8 message for each connection */
        broadcast(data: IStringified): void;
        /** Send binary message for each connection */
        broadcastBytes(data: NodeBuffer): void;
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

        // Events
        on(event: string, listener: () => void): server;
        on(event: 'request', cb: (request: request) => void): server;
        on(event: 'connect', cb: (connection: connection) => void): server;
        on(event: 'close', cb: (connection: connection, reason: number, desc: string) => void): server;
        addListener(event: string, listener: () => void): server;
        addListener(event: 'request', cb: (request: request) => void): server;
        addListener(event: 'connect', cb: (connection: connection) => void): server;
        addListener(event: 'close', cb: (connection: connection, reason: number, desc: string) => void): server;
    }

    export interface ICookie {
        name: string;
        value: string;
        path?: string;
        domain?: string;
        expires?: Date;
        maxage?: number;
        secure?: boolean;
        httponly?: boolean;
    }

    export interface IExtension {
        name: string;
        value: string;
    }

    export class request extends events.EventEmitter {
        /** A reference to the original Node HTTP request object */
        httpRequest: http.ClientRequest;
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
        protocolFullCaseMap: {[key: string]: string};

        constructor(socket: net.Socket, httpRequest: http.ClientRequest, config: IServerConfig);

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
        on(event: string, listener: () => void): request;
        on(event: 'requestAccepted', cb: (connection: connection) => void): request;
        on(event: 'requestRejected', cb: () => void): request;
        addListener(event: string, listener: () => void): request;
        addListener(event: 'requestAccepted', cb: (connection: connection) => void): request;
        addListener(event: 'requestRejected', cb: () => void): request;
    }

    export interface IMessage {
        type: string;
        utf8Data?: string;
        binaryData?: NodeBuffer;
    }

    export interface IBufferList extends events.EventEmitter {
        encoding: string;
        length: number;
        write(buf: NodeBuffer): boolean;
        end(buf: NodeBuffer): void;

        /**
         * For each buffer, perform some action.
         * If fn's result is a true value, cut out early.
         */
        forEach(fn: (buf: NodeBuffer) => boolean): void;

        /** Create a single buffer out of all the chunks */
        join(start: number, end: number): NodeBuffer;

        /** Join all the chunks to existing buffer */
        joinInto(buf: NodeBuffer, offset: number, start: number, end: number): NodeBuffer;

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

        // Events
        on(event: string, listener: () => void): IBufferList;
        on(event: 'advance', cb: (n: number) => void): IBufferList;
        on(event: 'write', cb: (buf: NodeBuffer) => void): IBufferList;
        addListener(event: string, listener: () => void): IBufferList;
        addListener(event: 'advance', cb: (n: number) => void): IBufferList;
        addListener(event: 'write', cb: (buf: NodeBuffer) => void): IBufferList;
    }

    class connection extends events.EventEmitter {
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
        maskBytes: NodeBuffer;
        frameHeader: NodeBuffer;
        bufferList: IBufferList;
        currentFrame: frame;
        fragmentationSize: number;
        frameQueue: frame[];
        state: string;
        waitingForCloseResponse: boolean;
        closeTimeout: number;
        assembleFragments: number;
        maxReceivedMessageSize: number;
        outputPaused: boolean;
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

        constructor(socket: net.Socket, extensions: IExtension[], protocol: string,
                    maskOutgoingPackets: boolean, config: IConfig);

        /**
         * Close the connection. A close frame will be sent to the remote peer indicating
         * that we wish to close the connection, and we will then wait for up to
         * `config.closeTimeout` milliseconds for an acknowledgment from the remote peer
         * before terminating the underlying socket connection.
         */
        close(): void;

        /**
         * Send a close frame to the remote peer and immediately close the socket without
         * waiting for a response. This should generally be used only in error conditions.
         */
        drop(reasonCode?: number, description?: string): void;

        /**
         * Immediately sends the specified string as a UTF-8 WebSocket message to the remote
         * peer. If `config.fragmentOutgoingMessages` is true the message may be sent as
         * multiple fragments if it exceeds `config.fragmentationThreshold` bytes.
         */
        sendUTF(data: IStringified): void;

        /**
         * Immediately sends the specified Node Buffer object as a Binary WebSocket message
         * to the remote peer. If config.fragmentOutgoingMessages is true the message may be
         * sent as multiple fragments if it exceeds config.fragmentationThreshold bytes.
         */
        sendBytes(buffer: NodeBuffer): void;

        /** Auto-detect the data type and send UTF-8 or Binary message */
        send(data: NodeBuffer): void;
        send(data: IStringified): void;

        /** Sends a ping frame. Ping frames must not exceed 125 bytes in length. */
        ping(data: NodeBuffer): void;
        ping(data: IStringified): void;

        /**
         * Sends a pong frame. Pong frames may be sent unsolicited and such pong frames will
         * trigger no action on the receiving peer. Pong frames sent in response to a ping
         * frame must mirror the payload data of the ping frame exactly.
         * The `connection` object handles this internally for you, so there should
         * be no need to use this method to respond to pings.
         * Pong frames must not exceed 125 bytes in length.
         */
        pong(buffer: NodeBuffer): void;

        /**
         * Serializes a `frame` object into binary data and immediately sends it to
         * the remote peer. This is an advanced function, requiring you to manually compose
         * your own `frame`. You should probably use sendUTF or sendBytes instead.
         */
        sendFrame(frame: frame): void;

        /** Set or reset the `keepalive` timer when data is received */
        setKeepaliveTimer(): void;
        setGracePeriodTimer(): void;
        setCloseTimer(): void;
        clearCloseTimer(): void;
        processFrame(frame: frame): void;
        fragmentAndSend(frame: frame, cb?: (err: Error) => void): void;
        sendCloseFrame(reasonCode: number, reasonText: string, force: boolean): void;
        sendCloseFrame(): void;
        sendFrame(frame: frame, force: boolean, cb?: (msg: string) => void): void;
        sendFrame(frame: frame, cb?: (msg: string) => void): void;

        // Events
        on(event: string, listener: () => void): connection;
        on(event: 'message', cb: (data: IMessage) => void): connection;
        on(event: 'frame', cb: (frame: frame) => void): connection;
        on(event: 'close', cb: (code: number, desc: string) => void): connection;
        on(event: 'error', cb: (err: Error) => void): connection;
        addListener(event: string, listener: () => void): connection;
        addListener(event: 'message', cb: (data: IMessage) => void): connection;
        addListener(event: 'frame', cb: (frame: frame) => void): connection;
        addListener(event: 'close', cb: (code: number, desc: string) => void): connection;
        addListener(event: 'error', cb: (err: Error) => void): connection;
    }

    class frame {
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
        binaryPayload: NodeBuffer;

        maskBytes: NodeBuffer;
        frameHeader: NodeBuffer;
        config: IConfig;
        maxReceivedFrameSize: number;
        protocolError: boolean;
        frameTooLarge: boolean;
        invalidCloseFrameLength: boolean;
        closeStatus: number;

        addData(bufferList: IBufferList): boolean;
        throwAwayPayload(bufferList: IBufferList): boolean;
        toBuffer(nullMask: boolean): NodeBuffer;
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
        webSocketVersion?: number;

        /**
         * The maximum allowed received frame size in bytes.
         * Single frame messages will also be limited to this maximum.
         * @default 1MiB
         */
        maxReceivedFrameSize?: number;

        /**
         * The maximum allowed aggregate message size (for fragmented messages) in bytes.
         * @default 8MiB
         */
        maxReceivedMessageSize?: number;
    }

    class client extends events.EventEmitter {
        protocols: string[];
        origin: string;
        url: url.Url;
        secure: boolean;
        socket: net.Socket;
        response: http.ClientResponse;

        constructor(clientConfig?: IClientConfig);

        /**
         * Establish a connection. The remote server will select the best subprotocol that
         * it supports and send that back when establishing the connection.
         * 
         * @param [origin] can be used in user-agent scenarios to identify the page containing
         *                 any scripting content that caused the connection to be requested.
         * @param requestUrl should be a standard websocket url
         */
        connect(requestUrl: url.Url, protocols?: string[], origin?: string, headers?: any[]): void;
        connect(requestUrl: string,  protocols?: string[], origin?: string, headers?: any[]): void;
        connect(requestUrl: url.Url, protocols?: string,   origin?: string, headers?: any[]): void;
        connect(requestUrl: string,  protocols?: string,   origin?: string, headers?: any[]): void;

        // Events
        on(event: string, listener: () => void): client;
        on(event: 'connect', cb: (connection: connection) => void): client;
        on(event: 'connectFailed', cb: (err: Error) => void): client;
        addListener(event: string, listener: () => void): client;
        addListener(event: 'connect', cb: (connection: connection) => void): client;
        addListener(event: 'connectFailed', cb: (err: Error) => void): client;
    }

    export var version: string;
    export var constants: {
        DEBUG: boolean;
    };
}
