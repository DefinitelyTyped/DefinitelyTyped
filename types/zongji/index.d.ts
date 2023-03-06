// Type definitions for zongji 0.5
// Project: https://github.com/nevill/zongji
// Definitions by: Eric Hayes <https://github.com/ejhayes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import mysql = require('mysql');
declare namespace ZongJi {
    interface StartOptions {
        /**
         * Unique number to identify this replication slave instance. Must be specified if running more than one instance of ZongJi.
         * Must be used in start() method for effect.
         * @default 1
         */
        serverId?: number;
        /**
         * Pass true to only emit binlog events that occur after ZongJi's instantiation. Must be used in start() method for effect.
         * @default false
         */
        startAtEnd?: boolean;
        /**
         * Begin reading events from this binlog file. If specified together with position, will take precedence over startAtEnd.
         */
        filename?: string;
        /**
         * Begin reading events from this position. Must be included with filename.
         */
        position?: number;
        /**
         * Array of event names to include.
         */
        includeEvents?: EventTypes[];
        /**
         * Array of event names to exclude.
         */
        excludeEvents?: EventTypes[];
        /**
         * Object describing which databases and tables to include (Only for row events). Use database names as the key and pass
         * an array of table names or true (for the entire database).
         */
        includeSchema?: Schema;
        /**
         * Object describing which databases and tables to exclude.
         */
        excludeSchema?: Schema;
    }

    interface Schema {
        [schema: string]: boolean | string[];
    }

    type EventTypes =
        | 'unknown'
        | 'query'
        | 'intvar'
        | 'rotate'
        | 'format'
        | 'xid'
        | 'tablemap'
        | 'writerows'
        | 'updaterows'
        | 'deleterows';

    interface Event {
        /**
         * Event properties (varies by event)
         */
        [key: string]: unknown;
        /**
         * Log a description of the event to the console
         */
        dump: () => void;
        /**
         * Return the name of the event
         */
        getEventName: () => string;
    }
    class ZongJi {
        constructor(dsn: string | mysql.ConnectionConfig | mysql.Connection | mysql.Pool);
        /**
         * 'ready': This event occurred right after ZongJi successfully established a connection, setup slave status, and set binlog position.
         * 'stopped': Emitted when ZongJi connection is stopped (ZongJi#stop is called).
         */
        on(event: 'ready' | 'stopped', handler: () => void): void;
        /**
         * Once a binlog is received and passes the filter, it will bubble up with this event.
         */
        on(event: 'binlog', handler: (event: Event) => void): void;
        /**
         * Every error will be caught by this event.
         */
        on(event: 'error', handler: (err: mysql.MysqlError) => void): void;
        /**
         * Start receiving replication events.
         */
        start(options?: StartOptions): void;
        /**
         * Disconnect from MySQL server, stop receiving events.
         */
        stop(): void;
    }
}

export = ZongJi.ZongJi;
