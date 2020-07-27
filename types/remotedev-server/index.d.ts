// Type definitions for remotedev-server 0.3
// Project: https://github.com/zalmoxisus/remotedev-server
// Definitions by: Ciarán Ingle <https://github.com/inglec-arista>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.9

import SocketCluster = require('socketcluster');

declare function remotedev(argv: remotedev.Options): Promise<SocketCluster | remotedev.PortUsedError>;

declare namespace remotedev {
    enum LogLevel {
        NONE,
        ERROR,
        WARN,
        INFO,
    }

    interface Options {
        /** The cert file for running a HTTPS server (`protocol` must be set to "https"). */
        cert?: string;
        /** Database configuration, can be an object or a path to a JSON configuration file. */
        dbOptions?: string;
        /** Hostname. */
        hostname?: string;
        /** The key file for running a HTTPS server (`protocol` must be set to "https"). */
        key?: string;
        logHTTPRequests?: boolean;
        /** The socket server log level. */
        logLevel?: LogLevel;
        /** The key passphrase for running a HTTPS server (`protocol` must be set to "https"). */
        passphrase?: string;
        /** Port. */
        port?: number;
        /** Protocol. */
        protocol?: 'http' | 'https';
        /** The socket server websocket engine. */
        wsEngine?: string;
    }

    interface PortUsedError {
        on(status: string, cb: () => void): void;
        portAlreadyUsed: true;
    }
}

export = remotedev;
