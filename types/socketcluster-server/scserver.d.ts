import { EventEmitter } from "events";
import { Secret } from "jsonwebtoken";
import { ServerOptions } from "https";
import { IncomingMessage, Server } from "http";
import { SCAuthEngine } from "sc-auth";
import { SCExchange, Client } from "sc-broker-cluster";
import WebSocket = require("ws");

import SCServerSocket = require("./scserversocket");

declare class SCServer extends EventEmitter {
    readonly MIDDLEWARE_HANDSHAKE_WS: "handshakeWS";
    readonly MIDDLEWARE_HANDSHAKE_SC: "handshakeSC";
    readonly MIDDLEWARE_AUTHENTICATE: "authenticate";
    readonly MIDDLEWARE_SUBSCRIBE: "subscribe";
    readonly MIDDLEWARE_PUBLISH_IN: "publishIn";
    readonly MIDDLEWARE_PUBLISH_OUT: "publishOut";
    readonly MIDDLEWARE_EMIT: "emit";

    options: SCServer.SCServerOptions;
    brokerEngine: Client;
    exchange: SCExchange;

    clients: {
        [id: string]: SCServerSocket;
    };
    clientsCount: number;

    pendingClients: {
        [id: string]: SCServerSocket;
    };
    pendingClientsCount: number;

    constructor(options?: SCServer.SCServerOptions);

    on(event: "connection", listener: SCServer.connectionListenerFunction): this;
    on(event: "ready", listener: () => void): this;
    on(event: "warning" | "error", listener: (error: Error) => void): this;
    on(event: "disconnection" | "connectionAbort" | "closure", listener: SCServer.disconnectionListenerFunction): this;
    on(event: "subscription", listener: SCServer.subscriptionListenerFunction): this;
    on(event: "unsubscription", listener: SCServer.unsubscriptionListenerFunction): this;
    on(event: "handshake", listener: SCServer.handshakeListenerFunction): this;
    on(event: "badSocketAuthToken", listener: SCServer.badSocketAuthTokenListenerFunction): this;

    addMiddleware(type: "handshakeWS", middlewareFn: (req: IncomingMessage, next: SCServer.nextMiddlewareFunction) => void): void;
    addMiddleware(type: "handshakeSC", middlewareFn: (req: SCServer.HandshakeSCRequest, next: SCServer.nextHandshakeSCMiddlewareFunction) => void): void;
    addMiddleware(type: "authenticate", middlewareFn: (req: SCServer.AuthenticateRequest, next: SCServer.nextAuthenticateMiddlewareFunction) => void): void;
    addMiddleware(type: "subscribe", middlewareFn: (req: SCServer.SubscribeRequest, next: SCServer.nextMiddlewareFunction) => void): void;
    addMiddleware(type: "publishIn", middlewareFn: (req: SCServer.PublishInRequest, next: SCServer.nextMiddlewareFunction) => void): void;
    addMiddleware(type: "publishOut", middlewareFn: (req: SCServer.PublishOutRequest, next: SCServer.nextMiddlewareFunction) => void): void;
    addMiddleware(type: "emit", middlewareFn: (req: SCServer.EmitRequest, next: SCServer.nextMiddlewareFunction) => void): void;

    removeMiddleware(type: "handshakeWS", middlewareFn: (req: IncomingMessage, next: SCServer.nextMiddlewareFunction) => void): void;
    removeMiddleware(type: "handshakeSC", middlewareFn: (req: SCServer.HandshakeSCRequest, next: SCServer.nextHandshakeSCMiddlewareFunction) => void): void;
    removeMiddleware(type: "authenticate", middlewareFn: (req: SCServer.AuthenticateRequest, next: SCServer.nextAuthenticateMiddlewareFunction) => void): void;
    removeMiddleware(type: "subscribe", middlewareFn: (req: SCServer.SubscribeRequest, next: SCServer.nextMiddlewareFunction) => void): void;
    removeMiddleware(type: "publishIn", middlewareFn: (req: SCServer.PublishInRequest, next: SCServer.nextMiddlewareFunction) => void): void;
    removeMiddleware(type: "publishOut", middlewareFn: (req: SCServer.PublishOutRequest, next: SCServer.nextMiddlewareFunction) => void): void;
    removeMiddleware(type: "emit", middlewareFn: (req: SCServer.EmitRequest, next: SCServer.nextMiddlewareFunction) => void): void;

    setAuthEngine(authEngine: SCAuthEngine): void;
    auth: SCAuthEngine;

    setCodecEngine(codecEngine: SCServer.SCCodecEngine): void;
    codec: SCServer.SCCodecEngine;

    close(cb?: (err?: Error) => void): void;

    getPath(): string;
    generateId(): string;

    verifyHandshake(info: SCServer.VerifyHandshakeInfo, cb: SCServer.verifyHandshakeFunction): void;
    verifyInboundEvent(socket: SCServerSocket, eventName: string, eventData: any, cb: (err: Error, eventData: any, ackData?: any) => void): void;
    verifyOutboundEvent(socket: SCServerSocket, eventName: string, eventData: any, options: {} | null, cb: (err: Error | null, eventData: any) => void): void;

    isAuthTokenExpired(token: SCServer.AuthToken): boolean;
}

export = SCServer;

declare namespace SCServer {
    interface AuthToken {
        [x: string]: any;
    }

    interface SCServerOptions {
        // The port on which to listen for outside connections/requests
        port?: number;

        // Number of worker processes
        workers?: number;

        // Number of broker processes
        brokers?: number;

        // Should be either 'dev' or 'prod' - This affects the shutdown procedure
        // when a 'SIGUSR2' signal is received by master. In 'dev', a SIGUSR2 will
        // trigger an immediate shutdown of workers. In 'prod' workers will
        // be terminated progressively in accordance with processTermTimeout.
        environment?: string;

        // Setting this to true will cause the master process to shut down when
        // it receives a SIGUSR2 signal (instead of just the workers).
        // If you're using nodemon, set this to true.
        killMasterOnSignal?: boolean;

        // A unique name for your app (this is used internally for
        // various things such as the directory name in which to store socket
        // file descriptors) - If you don't provide an appName, SC will
        // generate a random one (UUID v4)
        appName?: string;

        // This can be the name of an npm module or a path to a Node.js module
        // to use as the WebSocket server engine.
        // You can now set this to 'sc-uws' for a massive speedup of at least 2x!
        wsEngine?: any;

        // An ID to associate with this specific instance of SC
        // this may be useful if you are running an SC app on multiple
        // hosts - You can access the instanceId from the Broker object
        // (inside brokerController) - If you don't provide an instanceId,
        // SC will generate a random one (UUID v4)
        instanceId?: string;

        // A key which various SC processes will use to interact with
        // scBroker broker processes securely, defaults to a 256 bits
        // cryptographically random hex string
        secretKey?: string;

        // The key which SC will use to encrypt/decrypt authTokens, defaults
        // to a 256 bits cryptographically random hex string
        // The default JWT algorithm used is 'HS256'.
        // If you want to use RSA or ECDSA, you should provide a authPrivateKey
        // and authPublicKey instead of authKey.
        authKey?: Secret;

        // perMessageDeflate compression. Note that this option is passed directly to the wsEngine's
        // Server object. So if you're using 'ws' as the engine, you can pass an object instead of
        // a boolean. Search for perMessageDeflate here:
        // https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketserveroptions-callback
        // Note that by default, per-message deflate only kicks in for messages > 1024 bytes.
        perMessageDeflate?: boolean;

        // If using an RSA or ECDSA algorithm to sign the authToken, you will need
        // to provide an authPrivateKey and authPublicKey in PEM format (string or Buffer).
        authPrivateKey?: Secret;
        authPublicKey?: Secret;

        // The default expiry for auth tokens in seconds
        authDefaultExpiry?: number;

        // The algorithm to use to sign and verify JWT tokens.
        authAlgorithm?: string;

        // Crash workers when an error happens - This is the most sensible default
        crashWorkerOnError?: boolean;

        // Reboot workers when they crash - This is a necessity
        // in production but can be turned off for debugging
        rebootWorkerOnCrash?: boolean;

        // Kill/respawn a worker process if its memory consumption exceeds this
        // threshold (in bytes) - If this is null (default), this behavior
        // will be switched off
        killWorkerMemoryThreshold?: number;

        // Can be 'http' or 'https'
        protocol?: "http" | "https";

        // This is the same as the object provided to Node.js's https server
        protocolOptions?: ServerOptions;

        // A log level of 3 will log everything, 2 will show notices and errors,
        // 1 will only log errors, 0 will log nothing
        logLevel?: 0 | 1 | 2 | 3;

        // In milliseconds, how long a client has to connect to SC before timing out
        connectTimeout?: number;

        // In milliseconds - If the socket handshake hasn't been completed before
        // this timeout is reached, the new connection attempt will be terminated.
        handshakeTimeout?: number;

        // In milliseconds, the timeout for calling res(err, data) when
        // your emit() call expects an ACK response from the other side
        // (when callback is provided to emit)
        ackTimeout?: number;

        // In milliseconds, the timeout for calling res(err, data) when
        // your sendToWorker, sendToBroker or sendToMaster (IPC) call
        // expects an ACK response from the other process
        // (when callback is provided)
        ipcAckTimeout?: number;

        // In milliseconds - If the socket cannot upgrade transport
        // within this period, it will stop trying
        socketUpgradeTimeout?: number;

        // Origins which are allowed to connect to the real-time scServer
        origins?: string;

        // The maximum number of unique channels which a single
        // socket can subscribe to
        socketChannelLimit?: number;

        // The interval in milliseconds on which to
        // send a ping to the client to check that
        // it is still alive
        pingInterval?: number;

        // How many milliseconds to wait without receiving a ping
        // before closing the socket
        pingTimeout?: number;

        // Maximum amount of milliseconds to wait before force-killing
        // a process after it was passed a 'SIGTERM' or 'SIGUSR2' signal
        processTermTimeout?: number;

        // Whether or not errors from child processes (workers and brokers)
        // should be passed to the current master process
        propagateErrors?: boolean;

        // Whether or not warnings from child processes (workers and brokers)
        // should be passed to the current master process
        propagateWarnings?: number;

        // Whether or not a 'warning' event should be emitted (and logged to console)
        // whenever an action is blocked by a middleware function
        middlewareEmitWarnings?: number;

        // Lets you specify a host name to bind to - Defaults to
        // 127.0.0.1 (localhost)
        host?: string;

        // The path to a file used to bootstrap worker processes
        workerController?: string;

        // The path to a file used to bootstrap broker processes
        brokerController?: string;

        // The path to a file used to bootstrap the workerCluster process
        workerClusterController?: string;

        // By default, SC will reboot all workers when it receives a 'SIGUSR2' signal -
        // This can be used for updating workers with fresh source code in production
        rebootOnSignal?: boolean;

        // If you run your master process (server.js) as super user, this option
        // lets you downgrade worker and broker processes to run under
        // the specified user (with fewer permissions than master) - You can provide
        // a Linux UID or username
        downgradeToUser?: number | string;

        // The URL path reserved by SocketCluster clients to interact with the server
        path?: string;

        // The root directory in which to store your socket files in Linux.
        socketRoot?: string;

        // Defaults to "rr", but can be set to "none"
        schedulingPolicy?: "rr" | "none";

        // Whether or not clients are allowed to publish messages to channels
        allowClientPublish?: boolean;

        // This option is passed to the Node.js HTTP server if provided
        tcpSynBacklog?: number;

        // SC keeps track of request per minutes internally - This allows you to change
        // how often this gets updated
        workerStatusInterval?: number;

        // This allows you to batch multiple messages together when passing them across
        // message brokers. This may improve the efficiency of your pub/sub operations.
        // This value is in milliseconds. 5 is generally a safe value to set this to.
        pubSubBatchDuration?: number;

        // The default clustering/brokering engine (Node.js module name) which provides the
        // SCWorker.exchange object and manages brokers behind the scenes.
        // You shouldn't need to change this unless you want to build your own
        // process clustering engine (which is difficult to do).
        brokerEngine?: string;

        wsEngineServerOptions?: WebSocket.ClientOptions;
        maxPayload?: number;
        pingTimeoutDisabled?: boolean;
        authSignAsync?: boolean;
        authVerifyAsync?: boolean;
        httpServer?: Server;

        [additionalOptions: string]: any;
    }

    interface SCServerSocketStatus {
        id: string;
        pingTimeout: number;
    }

    interface HandshakeSCRequest {
        socket: SCServerSocket;
    }

    interface AuthenticateRequest {
        socket: SCServerSocket;
        authToken: AuthToken;
    }

    interface SubscribeRequest {
        socket: SCServerSocket;
        authTokenExpiredError?: Error;
        channel?: string;
        waitForAuth?: boolean;
        data?: any;
    }

    interface PublishInRequest {
        socket: SCServerSocket;
        authTokenExpiredError?: Error;
        channel?: string;
        data?: any;
        ackData?: any;
    }

    interface PublishOutRequest {
        socket: SCServerSocket;
        channel?: string;
        data?: any;
        useCache?: boolean;
    }

    interface EmitRequest {
        socket: SCServerSocket;
        authTokenExpiredError?: Error;
        event: string;
        data?: any;
    }

    interface badAuthStatus {
        authError: Error;
        signedAuthToken: string;
    }

    type nextMiddlewareFunction = (error?: true | string | Error) => void;
    type nextHandshakeSCMiddlewareFunction = (error?: true | string | Error | null, statusCode?: number) => void;
    type nextAuthenticateMiddlewareFunction = (error?: true | string | Error | null, isBadToken?: boolean) => void;
    type connectionListenerFunction = (scSocket: SCServerSocket, serverSocketStatus: SCServerSocketStatus) => void;
    type disconnectionListenerFunction = (scSocket: SCServerSocket, code: number, data: any) => void;
    type subscriptionListenerFunction = (scSocket: SCServerSocket, name: string, options: { channel: string }) => void;
    type unsubscriptionListenerFunction = (scSocket: SCServerSocket, channel: string) => void;
    type handshakeListenerFunction = (scSocket: SCServerSocket) => void;
    type badSocketAuthTokenListenerFunction = (scSocket: SCServerSocket, status: badAuthStatus) => void;

    interface SCCodecEngine {
        decode: (input: any) => any;
        encode: (object: any) => any;
    }

    interface VerifyHandshakeInfo {
        req: IncomingMessage;
        origin?: string;
    }

    type verifyHandshakeFunction = (success: boolean, errorCode?: number, errorMessage?: string) => void;
}
