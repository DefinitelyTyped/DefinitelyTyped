// Type definitions for engine.io 3.1
// Project: https://github.com/socketio/engine.io
// Definitions by: KentarouTakeda <https://github.com/KentarouTakeda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import http = require('http');
import net = require('net');
import { EventEmitter } from "events";

declare namespace engine {
    type Message = string|Buffer|ArrayBuffer|ArrayBufferView;
    type Transport =  "polling"|"websocket";
    interface Packet {
        type: string;
        options?: MessageOptions;
        data?: Message;
    }
    type AllowRequestFunction = (req: http.IncomingMessage, fn: (err: string|null|undefined, success: boolean) => void) => void;

    interface ServerOptions {
        /**
         * how many ms without a pong packet to consider the connection closed (5000)
         */
        pingTimeout?: number;
        /**
         * how many ms before sending a new ping packet (25000)
         */
        pingInterval?: number;
        /**
         * how many ms before an uncompleted transport upgrade is cancelled (10000)
         */
        upgradeTimeout?: number;
        /**
         * how many bytes or characters a message can be, before closing the session (to avoid DoS). Default value is 10E6.
         */
        maxHttpBufferSize?: number;
        /**
         * A function that receives a given handshake or upgrade request as its first parameter,
         * and can decide whether to continue or not. The second argument is a function that needs
         * to be called with the decided information: fn(err, success), where success is a boolean
         * value where false means that the request is rejected, and err is an error code.
         */
        allowRequest?: AllowRequestFunction;
        /**
         * to allow connections to (['polling', 'websocket'])
         */
        transports?: Transport[];
        /**
         * whether to allow transport upgrades (true)
         */
        allowUpgrades?: boolean;
        /**
         * parameters of the WebSocket permessage-deflate extension (see ws module api docs). Set to false to disable. (true)
         */
        perMessageDeflate?: any;
        /**
         * parameters of the http compression for the polling transports (see zlib api docs). Set to false to disable. (true)
         */
        httpCompression?: any;
        /**
         * name of the HTTP cookie that contains the client sid to send as part of handshake response headers. Set to false to not send one. (io)
         */
        cookie?: string|boolean;
        /**
         * path of the above cookie option. If false, no path will be sent,
         * which means browsers will only send the cookie on the engine.io
         * attached path (/engine.io). Set false to not save io cookie
         * on all requests. (/)
         */
        cookiePath?: string|boolean;
        /**
         * If true HttpOnly io cookie cannot be accessed by client-side APIs,
         * such as JavaScript. (true) This option has no effect
         * if cookie or cookiePath is set to false.
         */
        cookieHttpOnly?: boolean;
        /**
         * what WebSocket server implementation to use. Specified module must
         * conform to the ws interface (see ws module api docs). Default value is ws.
         * An alternative c++ addon is also available by installing uws module.
         */
        wsEngine?: "ws"|"uws";
        /**
         * an optional packet which will be concatenated to the handshake packet emitted by Engine.IO.
         */
        initialPacket?: Message;
    }
    interface AttachOptions {
        /**
         * name of the path to capture (/engine.io).
         */
        path?: string;
        /**
         * destroy unhandled upgrade requests (true)
         */
        destroyUpgrade?: boolean;
        /**
         * milliseconds after which unhandled requests are ended (1000)
         */
        destroyUpgradeTimeout?: number;
        /**
         * whether to let engine.io handle the OPTIONS requests. You can also pass a custom function to handle the requests (true)
         */
        handlePreflightRequest?: boolean|((server: Server, req: http.IncomingMessage, res: http.ServerResponse) => void);
    }
    interface ServerAttachOptions extends ServerOptions, AttachOptions {}

    interface MessageOptions {
        compress?: boolean;
    }

    /**
     * The main server/manager. Inherits from EventEmitter.
     */
    class Server extends EventEmitter {
        /**
         * hash of connected clients by id.
         */
        clients: {[sid: string]: Socket};
        /**
         * number of connected clients.
         */
        clientsCount: number;

        /**
         * Initializes the server
         */
        constructor(opts?: ServerOptions);
        /**
         * Fired when a new connection is established.
         */
        on(ev: 'connection'|'drain', fn: (socket: Socket) => void): this;
        on(ev: 'flush', fn: (socket: Socket, buffer: Packet[]) => void): this;
        /**
         * Closes all clients
         */
        close(): this;
        readonly httpServer?: http.Server;
        /**
         * Called internally when a Engine request is intercepted.
         */
        handleRequest(req: http.IncomingMessage, res: http.ServerResponse): this;
        /**
         * Called internally when a Engine ws upgrade is intercepted.
         */
        handleUpgrade(req: http.IncomingMessage, socket: net.Socket, head: Buffer): this;
        /**
         * Attach this Server instance to an http.Server
         * Captures upgrade requests for a http.Server. In other words, makes a regular http.Server WebSocket-compatible.
         */
        attach(http: http.Server, opts?: AttachOptions): this;
        /**
         * Generate a socket id.
         * Overwrite this method to generate your custom socket id.
         */
        generateId(req: http.IncomingMessage): string;
    }

    /**
     * A representation of a client. Inherits from EventEmitter.
     */
    class Socket extends EventEmitter {
        /**
         * unique identifier
         */
        id: string;
        /**
         * engine parent reference
         */
        server: Server;
        /**
         * request that originated the Socket
         */
        request: http.IncomingMessage;
        /**
         * whether the transport has been upgraded
         */
        upgraded: boolean;
        /**
         * readyState
         */
        readyState: 'opening'|'open'|'closing'|'closed';

        /**
         * Sends a message, performing message = toString(arguments[0]) unless sending binary data, which is sent as is.
         */
        send(message: Message, opts?: MessageOptions, fn?: ((transport: any) => void)): void;

        /**
         * Disconnects the client
         */
        close(): this;

        /**
         * Fired when the client is disconnected.
         */
        on(ev: "close", fn: (reason: string, description?: Error) => void): this;
        /**
         * Fired when the client sends a message.
         */
        on(ev: "message", fn: (data: string|Buffer) => void): this;
        /**
         * Fired when an error occurs.
         */
        on(ev: "error", fn: (err: Error) => void): this;
        /**
         * Called when the write buffer is being flushed.
         */
        on(ev: "flush", fn: (buffer: Packet[]) => void): this;
        /**
         * Called when the write buffer is drained
         */
        on(ev: "drain", fn: () => void): this;
        /**
         * packet: Called when a socket received a packet (message, ping)
         * packetCreate: Called before a socket sends a packet (message, pong)
         */
        on(ev: "packet" | "packetCreate", fn: (packet: Packet) => void): this;
    }
    function attach(http: net.Server, opts?: ServerAttachOptions): Server;
    function listen(port: number, opts?: ServerOptions, fn?: () => void): Server;
    const protocol: number;
}

declare function engine(httpServer?: net.Server, opts?: engine.ServerOptions): engine.Server;

export = engine;
