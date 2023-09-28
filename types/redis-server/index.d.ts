// Type definitions for redis-server 1.2
// Project: https://github.com/BrandonZacharie/node-redis-server
// Definitions by: Sander Timmermans <https://github.com/Noldaru>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = RedisServer;

declare namespace RedisServer {
    interface RedisServerOptions {
        /**
         * A Redis server binary path.
         */
        bin?: string;
        /**
         * A Redis server configuration file path.
         */
        conf?: string;
        /**
         * A port to bind a Redis server to.
         */
        port?: number;
        /**
         * An address of a Redis server to sync with.
         */
        slaveof?: string;
    }
}

declare class RedisServer {
    /**
     * Determine if the instance is starting a Redis server; `true` while a process is spawning,
     * and/or about to be spawned, until the contained Redis server either starts or errs.
     */
    isOpening: boolean;
    /**
     * Determine if the instance is running a Redis server; `true` once a process has spawned and
     * the contained Redis server is ready to service requests.
     */
    isRunning: boolean;
    /**
     * Determine if the instance is closing a Redis server; `true` while a process is being,
     * or about to be, killed until the contained Redis server either closes or errs.
     */
    isClosing: boolean;
    /**
     * @param options A number or string that is a port or an object for configuration.
     */
    constructor(options?: string | number | RedisServer.RedisServerOptions);
    /** Attempt to open a Redis server. Returns a `Promise`. */
    open(callback?: (err: Error | null) => void): Promise<void>;
    /**
     * Close the associated Redis server. Returns a `Promise`.
     *
     * NOTE: Disconnect clients prior to calling this method to avoid receiving connection errors
     * from clients.
     */
    close(callback?: (err: Error | null) => void): Promise<void>;
}
