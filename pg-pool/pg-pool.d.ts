// Type definitions for pg-pool
// Project: https://github.com/brianc/node-pg-pool
// Definitions by: Leo Liang <https://github.com/aleung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../pg/pg.d.ts" />

declare module "pg-pool" {
    import * as events from "events";
    import * as stream from "stream";
    import * as pg from "pg";

    export interface PoolConfig extends pg.ClientConfig {
      // properties from module 'node-pool'
      max?: number;
      min?: number;
      refreshIdle?: boolean;
      idleTimeoutMillis?: number;
      reapIntervalMillis?: number;
      returnToHead?: boolean;
    }

    export class Pool extends events.EventEmitter {

        constructor();

        // `new Pool('pg://user@localhost/mydb')` is not allowed.
        // But it passes type check because of issue:
        // https://github.com/Microsoft/TypeScript/issues/7485
        constructor(config: PoolConfig);

        connect(): Promise<pg.Client>;
        connect(callback: (err: Error, client: pg.Client, done: () => void) => void): void;

        end(): Promise<void>;

        query(queryText: string): Promise<pg.QueryResult>;
        query(queryText: string, values: any[]): Promise<pg.QueryResult>;

        query(queryText: string, callback: (err: Error, result: pg.QueryResult) => void): void;
        query(queryText: string, values: any[], callback: (err: Error, result: pg.QueryResult) => void): void;

        public on(event: "error", listener: (err: Error, client: pg.Client) => void): this;
        public on(event: "connect", listener: (client: pg.Client) => void): this;
        public on(event: "acquire", listener: (client: pg.Client) => void): this;
        public on(event: string, listener: Function): this;
    }

}
