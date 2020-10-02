// Type definitions for tedious-connection-pool 1.0
// Project: https://github.com/tediousjs/tedious-connection-pool
// Definitions by: Cyprien Autexier <https://github.com/sandorfr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import events = require('events');
import tedious = require('tedious');

declare namespace tcp {
    /**
     * Extends Tedious Connection with release function
     */
    class PooledConnection extends tedious.Connection {
        /**
         * If the connection is issued from a connection pool returns the connection to the pool.
         */
        release(): void;
    }

    /**
     * Provides a connection or an error
     * @param err error if any
     * @param connection issued from the pool
     */
    type ConnectionCallback = (err: Error, connection: PooledConnection) => void;

    /**
     *  Pool Configuration interface
     */
    interface PoolConfig {
        /**
         * Minimum concurrent connections
         */
        min?: number;

        /**
         * Maximum concurrent connections
         */
        max?: number;

        /**
         * Defines if logging is activated
         */
        log?: boolean;

        /**
         * Idle timeout
         */
        idleTimeout?: number;

        /**
         * Retry delay
         */
        retryDelay?: number;

        /**
         * Acquire timeout
         */
        acquireTimeout?: number;
    }
}

/**
 * Tedious Connection Pool Class
 */
declare class tcp extends events.EventEmitter {
    /**
     * Connection Pool constructor
     * @param poolConfig the pool configuration
     * @param connectionConfig the connection configuration
     */
    constructor(poolConfig: tcp.PoolConfig, connectionConfig: tedious.ConnectionConfig);

    /**
     * acquires a connection from the pool
     * @param callback invoked when the connection is retrieved and ready
     */
    acquire(callback: tcp.ConnectionCallback): void;

    /**
     * closes opened connections
     */
    drain(): void;
}

export = tcp;
