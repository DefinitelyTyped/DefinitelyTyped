import AsyncStreamEmitter = require('async-stream-emitter');
import { Secret } from 'jsonwebtoken';
import { Server } from 'http';
import { SCAuthEngine } from 'sc-auth';
import WebSocket = require('ws');
import WritableConsumableStream = require('writable-consumable-stream');
import ConsumableStream = require('consumable-stream');
import AGSimpleBroker = require('ag-simple-broker');

import AGServerSocket = require('./serversocket');

declare class AGServer extends AsyncStreamEmitter<any> {
    readonly MIDDLEWARE_HANDSHAKE: 'handshake';
    readonly MIDDLEWARE_INBOUND_RAW: 'inboundRaw';
    readonly MIDDLEWARE_INBOUND: 'inbound';
    readonly MIDDLEWARE_OUTBOUND: 'outbound';
    readonly SYMBOL_MIDDLEWARE_HANDSHAKE_STREAM: symbol;

    options: AGServer.AGServerOptions;
    origins: string;
    ackTimeout: number;
    handshakeTimeout: number;
    pingInterval: number;
    pingTimeout: number;
    pingTimeoutDisabled: boolean;
    allowClientPublish: boolean;
    perMessageDeflate?: boolean | {};
    httpServer: Server;
    socketChannelLimit?: number;
    protocolVersion: 1 | 2;
    strictHandshake: boolean;
    brokerEngine: AGSimpleBroker;
    middlewareEmitFailures: boolean;
    isReady: boolean;
    signatureKey?: Secret;
    verificationKey?: Secret;
    defaultVerificationOptions: {
        algorithms?: string[];
    };
    defaultSignatureOptions: {
        expiresIn: number;
        algorithm?: string;
    };
    exchange: AGSimpleBroker.SimpleExchange;

    clients: {
        [id: string]: AGServerSocket;
    };
    clientsCount: number;

    pendingClients: {
        [id: string]: AGServerSocket;
    };
    pendingClientsCount: number;

    wsServer: WebSocket.Server;

    constructor(options?: AGServer.AGServerOptions);

    emitError(error: Error): void;
    emitWarning(warning: Error): void;

    emit(eventName: 'error', data: { error: Error }): void;
    emit(eventName: 'warning', data: { warning: Error }): void;
    emit(eventName: 'handshake', data: { socket: AGServerSocket }): void;
    emit(eventName: 'authenticationStateChange', data: AGServer.AuthStateChangeData): void;
    emit(eventName: 'authentication', data: AGServer.AuthenticationData): void;
    emit(eventName: 'deauthentication', data: AGServer.DeauthenticationData): void;
    emit(eventName: 'badSocketAuthToken', data: AGServer.BadSocketAuthTokenData): void;
    emit(eventName: 'connection', data: AGServer.ConnectionData): void;
    emit(eventName: 'subscription', data: AGServer.SubscriptionData): void;
    emit(eventName: 'unsubscription', data: AGServer.UnsubscriptionData): void;
    emit(eventName: 'connectionAbort', data: AGServer.ConnectionAbortData): void;
    emit(eventName: 'disconnection', data: AGServer.DisconnectionData): void;
    emit(eventName: 'closure', data: AGServer.ClosureData): void;

    listener(eventName: 'error'): ConsumableStream<{ error: Error }>;
    listener(eventName: 'warning'): ConsumableStream<{ warning: Error }>;
    listener(eventName: 'handshake'): ConsumableStream<{ socket: AGServerSocket }>;
    listener(eventName: 'authenticationStateChange'): ConsumableStream<AGServer.AuthStateChangeData>;
    listener(eventName: 'authentication'): ConsumableStream<AGServer.AuthenticationData>;
    listener(eventName: 'deauthentication'): ConsumableStream<AGServer.DeauthenticationData>;
    listener(eventName: 'badSocketAuthToken'): ConsumableStream<AGServer.BadSocketAuthTokenData>;
    listener(eventName: 'connection'): ConsumableStream<AGServer.ConnectionData>;
    listener(eventName: 'subscription'): ConsumableStream<AGServer.SubscriptionData>;
    listener(eventName: 'unsubscription'): ConsumableStream<AGServer.UnsubscriptionData>;
    listener(eventName: 'connectionAbort'): ConsumableStream<AGServer.ConnectionAbortData>;
    listener(eventName: 'disconnection'): ConsumableStream<AGServer.DisconnectionData>;
    listener(eventName: 'closure'): ConsumableStream<AGServer.ClosureData>;

    setMiddleware(type: 'handshake', middleware: AGServer.handshakeMiddlewareFunction): void;
    setMiddleware(type: 'inboundRaw', middleware: AGServer.inboundRawMiddlewareFunction): void;
    setMiddleware(type: 'inbound', middleware: AGServer.inboundMiddlewareFunction): void;
    setMiddleware(type: 'outbound', middleware: AGServer.outboundMiddlewareFunction): void;

    removeMiddleware(type: AGServer.Middlewares): void;

    hasMiddleware(type: AGServer.Middlewares): boolean;

    setAuthEngine(authEngine: SCAuthEngine): void;
    auth: SCAuthEngine;

    setCodecEngine(codecEngine: AGServer.CodecEngine): void;
    codec: AGServer.CodecEngine;

    close(): Promise<void>;

    getPath(): string;
    generateId(): string;

    verifyHandshake: WebSocket.VerifyClientCallbackAsync;
}

export = AGServer;

declare namespace AGServer {
    interface AuthStateChangeData extends AGServerSocket.StateChangeData {
        socket: AGServerSocket;
    }

    interface AuthenticationData extends AGServerSocket.AuthenticateData {
        socket: AGServerSocket;
    }

    interface DeauthenticationData extends AGServerSocket.DeauthenticateData {
        socket: AGServerSocket;
    }

    interface BadSocketAuthTokenData extends AGServerSocket.BadAuthTokenData {
        socket: AGServerSocket;
    }

    interface ConnectionData extends AGServerSocket.ConnectData {
        socket: AGServerSocket;
    }

    interface SubscriptionData extends AGServerSocket.SubscribeData {
        socket: AGServerSocket;
    }

    interface UnsubscriptionData extends AGServerSocket.UnsubscribeData {
        socket: AGServerSocket;
    }

    interface ConnectionAbortData extends AGServerSocket.ConnectAbortData {
        socket: AGServerSocket;
    }

    interface DisconnectionData extends AGServerSocket.DisconnectData {
        socket: AGServerSocket;
    }

    interface ClosureData extends AGServerSocket.CloseData {
        socket: AGServerSocket;
    }

    interface AGServerOptions {
        // An instance of a Node.js HTTP server.
        // https://nodejs.org/api/http.html#http_class_http_server
        // This option should not be set if the server is created
        // with socketClusterServer.attach(...).
        httpServer?: Server;

        // This can be the name of an npm module or a path to a
        // Node.js module to use as the WebSocket server engine.
        wsEngine?: any;

        // Custom options to pass to the wsEngine when it is being
        // instantiated.
        wsEngineServerOptions?: WebSocket.ClientOptions;

        // The key which SC will use to encrypt/decrypt authTokens,
        // defaults to a 256 bits cryptographically random hex
        // string. The default JWT algorithm used is 'HS256'.
        // If you want to use RSA or ECDSA, you should provide an
        // authPrivateKey and authPublicKey instead of authKey.
        authKey?: Secret;

        // perMessageDeflate compression. Note that this option is
        // passed directly to the wsEngine's Server object.
        // So if you're using 'ws' as the engine, you can pass an
        // object instead of a boolean.
        // Note that by default, per-message deflate only kicks in
        // for messages > 1024 bytes.
        perMessageDeflate?: boolean | {};

        // If using an RSA or ECDSA algorithm to sign the
        // authToken, you will need to provide an authPrivateKey
        // and authPublicKey in PEM format (string or Buffer).
        authPrivateKey?: Secret;
        authPublicKey?: Secret;

        // The default expiry for auth tokens in seconds
        authDefaultExpiry?: number;

        // The algorithm to use to sign and verify JWT tokens.
        authAlgorithm?: string;

        // Can be 1 or 2. Version 1 is for maximum backwards
        // compatibility with SocketCluster clients.
        protocolVersion?: 1 | 2;

        // In milliseconds - If the socket handshake hasn't been
        // completed before this timeout is reached, the new
        // connection attempt will be terminated.
        handshakeTimeout?: number;

        // In milliseconds, the timeout for receiving a response
        // when using invoke() or invokePublish().
        ackTimeout?: number;

        // Origins which are allowed to connect to the server.
        origins?: string;

        // The maximum number of unique channels which a single
        // socket can subscribe to.
        socketChannelLimit?: number;

        // The interval in milliseconds on which to
        // send a ping to the client to check that
        // it is still alive.
        pingInterval?: number;

        // How many milliseconds to wait without receiving a ping
        // before closing the socket.
        pingTimeout?: number;

        // Whether or not an error should be emitted on
        // the socket whenever an action is blocked by a
        // middleware function
        middlewareEmitFailures?: boolean;

        // The URL path reserved by SocketCluster clients to
        // interact with the server.
        path?: string;

        // Whether or not clients are allowed to publish messages
        // to channels.
        allowClientPublish?: boolean;

        // Whether or not to batch all socket messages
        // for some time immediately after completing
        // a handshake. This can be useful in failure-recovery
        // scenarios (e.g. batch resubscribe).
        batchOnHandshake?: boolean;

        // If batchOnHandshake is true, this lets you specify
        // How long to enable batching (in milliseconds) following
        // a successful socket handshake.
        batchOnHandshakeDuration?: number;

        // If batchOnHandshake is true, this lets you specify
        // the size of each batch in milliseconds.
        batchInterval?: number;

        // Lets you specify the default cleanup behaviour for
        // when a socket becomes disconnected.
        // Can be either 'kill' or 'close'. Kill mode means
        // that all of the socket's streams will be killed and
        // so consumption will stop immediately.
        // Close mode means that consumers on the socket will
        // be able to finish processing their stream backlogs
        // bebfore they are ended.
        socketStreamCleanupMode?: 'kill' | 'close';

        authVerifyAlgorithms?: string[];
        authEngine?: SCAuthEngine;
        codecEngine?: CodecEngine;
        cloneData?: boolean;

        [additionalOptions: string]: any;
    }

    type handshakeMiddlewareFunction = (stream: WritableConsumableStream<any>) => void;
    type inboundRawMiddlewareFunction = (stream: WritableConsumableStream<any>) => void;
    type inboundMiddlewareFunction = (stream: WritableConsumableStream<any>) => void;
    type outboundMiddlewareFunction = (stream: WritableConsumableStream<any>) => void;

    type Middlewares = 'handshake' | 'inboundRaw' | 'inbound' | 'outbound';

    interface CodecEngine {
        decode: (input: any) => any;
        encode: (object: any) => any;
    }
}
