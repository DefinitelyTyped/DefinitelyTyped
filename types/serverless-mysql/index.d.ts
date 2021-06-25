// Type definitions for serverless-mysql 1.5
// Project: https://github.com/nordcloud/serverless-mysql#readme
// Definitions by: Levin Keller <https://github.com/levino>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

import * as MySQL from 'mysql'

// https://github.com/microsoft/TypeScript/issues/8335#issuecomment-215194561
declare namespace serverlessMysql {
    interface Config {
        /**
         * Function mysql library
         */
        library?: () => void

        /**
         * Function promise library
         */
        promise?: () => void

        /**
         * String or Function  Backoff algorithm to be used when retrying connections.
         * Possible values are full and decorrelated, or you can also specify your own algorithm.
         * See Connection Backoff for more information.   full
         */
        backoff?: string | (() => void)
        /**
         * Integer  Number of milliseconds added to random backoff values.  2
         */
        base?: number
        /**
         * Integer  Maximum number of milliseconds between connection retries.  100
         */
        cap?: number
        /**
         * Object  A mysql configuration object as defined here  {}
         */
        config?: MySQL.ConnectionConfig
        /**
         * Number  The percentage of total connections to use when connecting to your MySQL server.
         * A value of 0.75 would use 75% of your total available connections.  0.8
         */
        connUtilization?: number
        /**
         * Boolean  Flag indicating whether or not you want serverless-mysql to manage MySQL connections for you.  true
         */
        manageConns?: boolean
        /**
         * Integer  The number of milliseconds to cache lookups of @@max_connections.  15000
         */
        maxConnsFreq?: number
        /**
         * Integer  Maximum number of times to retry a connection before throwing an error.  50
         */
        maxRetries?: number
        /**
         * function  Event callback when the MySQL connection fires an error.
         */
        onError?: () => void
        /**
         * function  Event callback when MySQL connections are explicitly closed.
         */
        onClose?: () => void
        /**
         * function  Event callback when connections are succesfully established.
         */
        onConnect?: () => void
        /**
         * function  Event callback when connection fails.
         */
        onConnectError?: () => void
        /**
         * function  Event callback when connections are explicitly killed.
         */
        onKill?: () => void
        /**
         * function  Event callback when a connection cannot be killed.
         */
        onKillError?: () => void
        /**
         * function  Event callback when connections are retried.
         */
        onRetry?: () => void
        /**
         * Integer  The number of milliseconds to cache lookups of current connection usage.  0
         */
        usedConnsFreq?: number
        /**
         * Integer  The maximum number of seconds that a connection can stay idle before being recycled.  900
         */
        zombieMaxTimeout?: number
        /**
         * Integer  The minimum number of seconds that a connection must be idle before the module will recycle it.  3
         */
        zombieMinTimeout?: number
    }

    class Transaction {
        query(...args: any[]): this
        rollback(fn: () => void): this
        commit(): Promise<any[]>
    }

    interface ServerlessMysql {
        connect(wait?: number): Promise<void>
        config(config?: MySQL.ConnectionConfig): MySQL.ConnectionConfig
        query(...args: any[]): Promise<any>
        end(): Promise<void>
        escape(str: string): MySQL.EscapeFunctions
        quit(): void
        transaction(): Transaction
        getCounter(): number
        getClient(): MySQL.Connection
        getConfig(): MySQL.ConnectionConfig
        getErrorCount(): number
    }
}

declare function serverlessMysql(cfg?: serverlessMysql.Config): serverlessMysql.ServerlessMysql
export = serverlessMysql
