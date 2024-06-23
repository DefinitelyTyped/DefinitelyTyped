/// <reference types="node" />

import http = require("http");

declare namespace client {
    type Transport = "polling" | "websocket";
    type Message = string | ArrayBuffer | ArrayBufferView | Blob;
    interface MessageOptions {
        compress?: boolean | undefined;
    }
    interface SocketOptions {
        /**
         * http.Agent to use, defaults to false (NodeJS only)
         */
        agent?: http.Agent | false | undefined;
        /**
         * defaults to true, whether the client should try to upgrade the transport from long-polling to something better.
         */
        upgrade?: boolean | undefined;
        /**
         * forces JSONP for polling transport.
         */
        forceJSONP?: boolean | undefined;
        /**
         * determines whether to use JSONP when necessary for polling.
         * If disabled (by settings to false) an error will be emitted (saying "No transports available")
         * if no other transports are available. If another transport is available
         * for opening a connection (e.g. WebSocket) that transport will be used instead.
         */
        jsonp?: boolean | undefined;
        /**
         * forces base 64 encoding for polling transport even when XHR2 responseType is available and WebSocket even if the used standard supports binary.
         */
        forceBase64?: boolean | undefined;
        /**
         * enables XDomainRequest for IE8 to avoid loading bar flashing with click sound. default to false because XDomainRequest has a flaw of not sending cookie.
         */
        enablesXDR?: boolean | undefined;
        /**
         * whether to add the timestamp with each transport request. Note: polling requests are always stamped unless this option is explicitly set to false (false)
         */
        timestampRequests?: boolean | undefined;
        /**
         * timestamp parameter (t)
         */
        timestampParam?: string | undefined;
        /**
         * port the policy server listens on (843)
         */
        policyPort?: number | undefined;
        /**
         * path to connect to, default is /engine.io
         */
        path?: string | undefined;
        /**
         * a list of transports to try (in order).
         * Defaults to ['polling', 'websocket'].
         * Engine always attempts to connect directly with the first one, provided the feature detection test for it passes.
         */
        transports?: Transport[] | undefined;
        /**
         * hash of options, indexed by transport name, overriding the common options for the given transport
         */
        transportOptions?: { [key: string]: SocketOptions } | undefined;
        /**
         * defaults to false. If true and if the previous websocket connection to the server succeeded,
         * the connection attempt will bypass the normal upgrade process and will initially try websocket.
         * A connection attempt following a transport error will use the normal upgrade process.
         * It is recommended you turn this on only when using SSL/TLS connections,
         * or if you know that your network does not block websockets.
         */
        rememberUpgrade?: boolean | undefined;
        /**
         * Certificate, Private key and CA certificates to use for SSL. Can be used in Node.js client environment to manually specify certificate information.
         */
        pfx?: string | undefined;
        /**
         * Private key to use for SSL. Can be used in Node.js client environment to manually specify certificate information.
         */
        key?: string | undefined;
        /**
         * A string of passphrase for the private key or pfx. Can be used in Node.js client environment to manually specify certificate information.
         */
        passphrase?: string | undefined;
        /**
         * Public x509 certificate to use. Can be used in Node.js client environment to manually specify certificate information.
         */
        cert?: string | undefined;
        /**
         * An authority certificate or array of authority certificates to check the remote host against.
         * Can be used in Node.js client environment to manually specify certificate information.
         */
        ca?: string | string[] | undefined;
        /**
         * A string describing the ciphers to use or exclude. Consult the cipher format list for details on the format.
         * Can be used in Node.js client environment to manually specify certificate information.
         */
        ciphers?: string | undefined;
        /**
         * If true, the server certificate is verified against the list of supplied CAs.
         * An 'error' event is emitted if verification fails. Verification happens at the connection level,
         * before the HTTP request is sent. Can be used in Node.js client environment to manually specify certificate information.
         */
        rejectUnauthorized?: boolean | undefined;
        /**
         * parameters of the WebSocket permessage-deflate extension (see ws module api docs). Set to false to disable. (true)
         */
        perMessageDeflate?: any;
        /**
         * Headers that will be passed for each request to the server (via xhr-polling and via websockets).
         * These values then can be used during handshake or for special proxies. Can only be used in Node.js client environment.
         */
        extraHeaders?: { [header: string]: string } | undefined;
        /**
         * whether transport upgrades should be restricted to transports supporting binary data (false)
         */
        onlyBinaryUpgrades?: boolean | undefined;
        /**
         * Uses NodeJS implementation for websockets - even if there is a native Browser-Websocket available,
         * which is preferred by default over the NodeJS implementation. (This is useful when using hybrid platforms
         * like nw.js or electron) (false, NodeJS only)
         */
        forceNode?: boolean | undefined;
        /**
         * the local IP address to connect to
         */
        localAddress?: string | undefined;
    }

    interface UpgradeError extends Error {
        transport: string;
    }

    class Socket {
        protocol?: number | undefined;
        binaryType?: "arraybuffer" | "blob" | undefined;

        /*
         * open: Fired upon successful connection.
         * flush: Fired upon completing a buffer flush
         * drain: Fired after drain event of transport if writeBuffer is empty
         * ping: Fired upon flushing a ping packet (ie: actual packet write out)
         * pong: Fired upon receiving a pong packet.
         */
        on(ev: "open" | "flush" | "drain" | "ping" | "pong", cb: () => void): this;
        /*
         * Fired when data is received from the server.
         */
        on(ev: "message", cb: (data: string | ArrayBuffer) => void): this;
        /*
         * Fired upon disconnection. In compliance with the WebSocket API spec, this event may be fired even if the open event does not occur (i.e. due to connection error or close()).
         */
        on(ev: "close", cb: (mes: string, detail?: Error) => void): this;
        /*
         * Fired when an error occurs.
         */
        on(ev: "error", cb: (err: Error) => void): this;
        /*
         * Fired if an error occurs with a transport we're trying to upgrade to.
         */
        on(ev: "upgradeError", cb: (err: UpgradeError) => void): this;
        /*
         * Fired upon upgrade success, after the new transport is set
         */
        on(ev: "upgrade", cb: (transport: any) => void): this;

        /**
         * Sends a message to the server
         */
        send(message: Message, opts?: MessageOptions, cb?: () => void): this;

        /**
         * Disconnects the client.
         */
        close(): this;
    }
}

declare function client(url?: string, opts?: client.SocketOptions): client.Socket;

export = client;
