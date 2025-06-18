import SocketCluster = require("socketcluster");

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
        cert?: string | undefined;
        /** Database configuration, can be an object or a path to a JSON configuration file. */
        dbOptions?: string | undefined;
        /** Hostname. */
        hostname?: string | undefined;
        /** The key file for running a HTTPS server (`protocol` must be set to "https"). */
        key?: string | undefined;
        logHTTPRequests?: boolean | undefined;
        /** The socket server log level. */
        logLevel?: LogLevel | undefined;
        /** The key passphrase for running a HTTPS server (`protocol` must be set to "https"). */
        passphrase?: string | undefined;
        /** Port. */
        port?: number | undefined;
        /** Protocol. */
        protocol?: "http" | "https" | undefined;
        /** The socket server websocket engine. */
        wsEngine?: string | undefined;
    }

    interface PortUsedError {
        on(status: string, cb: () => void): void;
        portAlreadyUsed: true;
    }
}

export = remotedev;
