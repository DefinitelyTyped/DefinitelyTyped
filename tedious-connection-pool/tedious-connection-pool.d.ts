// Type definitions for tedious-connection-pool
// Project: https://github.com/pekim/tedious-connection-pool
// Definitions by: Cyprien Autexier <https://github.com/sandorfr>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../tedious/tedious.d.ts" />

declare module "tedious-connection-pool" {
    import tedious = require('tedious');

    module tcp {

        /**
         * Extends Tedious Connection with release function
         */
        export class PooledConnection extends tedious.Connection {
            /**
             * If the connection is issued from a connection pool returns the connection to the pool.
             */
            release():void;
        }

        /**
         * Acquire function callback signature
         */
        export interface ConnectionCallback {
            /**
             * Provides a connection or an error
             * @param err error if any
             * @param connection issued from the pool
             */
            (err:Error, connection:PooledConnection): void;
        }

        /**
         *  Pool Configuration interface
         */
        export interface PoolConfig {

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
    class tcp {

        /**
         * Connection Pool constructor
         * @param poolConfig the pool configuration
         * @param connectionConfig the connection configuration
         */
        constructor(poolConfig:tcp.PoolConfig, connectionConfig:tedious.ConnectionConfig);

        /**
         * acquires a connection from the pool
         * @param callback invoked when the connection is retrieved and ready
         */
        acquire(callback:tcp.ConnectionCallback):void;

        /**
         * listens for a specific connection pool event
         * @param event the event name
         * @param callback invoked when the event is raised
         */
        on(event:string, callback:Function):void;

        /**
         * closes opened connections
         */
        drain():void;
    }




    export = tcp;
}
