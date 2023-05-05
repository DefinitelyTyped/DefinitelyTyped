// Type definitions for connect-sqlite3 0.9
// Project: https://github.com/rawberg/connect-sqlite3
// Definitions by: oof2win2 <https://github.com/oof2win2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.2
import { SessionData, Store } from 'express-session';

declare namespace connect {
    interface SQLiteStoreOptions {
        /**
         * Table of where sessions are stored
         * @default "sessions"
         */
        table?: string;

        /**
         * Database file name
         * @default "sessionsDB"
         */
        db?: string;

        /**
         * Directory where to save database in
         * @default "."
         */
        dir?: string;

        /**
         * Enables [WAL](https://www.sqlite.org/wal.html) mode (defaults to false)
         * @default "false"
         */
        concurrentDB?: string;
    }

    abstract class SQLiteStore extends Store {
        get(sid: string, callback: (err: any, session?: SessionData | null) => void): void;
        set(sid: string, session: SessionData, callback?: (err?: any) => void): void;
        destroy(sid: string, callback?: (err?: any) => void): void;
    }

    interface SQLiteStoreInitator {
        new (options?: SQLiteStoreOptions): SQLiteStore;
    }

    type ConnectParams =
        | {
              Store: abstract new () => Store;
          }
        | {
              session: {
                  Store: abstract new () => Store;
              };
          };

    function connect(connect: ConnectParams): SQLiteStoreInitator;
}
export = connect.connect;
