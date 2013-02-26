// Type definitions for msnodesql 0.2
// Project: https://github.com/WindowsAzure/node-sqlserver
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


///<reference path='../node/node.d.ts' />

declare module "msnodesql" {
    export function open(connectionString: string, callback: Function): Connection;

    export function query(connectionString: string, query: string): StreamEvents;
    export function query(connectionString: string, query: string, callback: Callback): StreamEvents;
    export function query(connectionString: string, query: string, params, callback: Callback): StreamEvents;

    export function queryRaw(connectionString: string, query: string): StreamEvents;
    export function queryRaw(connectionString: string, query: string, callback: Callback): StreamEvents;
    export function queryRaw(connectionString: string, query: string, params, callback: Callback): StreamEvents;

    interface Callback {
        (err: Error, results: any[]): void;
    }

    interface Errback {
        (err: Error): void;
    }

    interface Connection {
        queryRaw(connectionString: string, query: string): StreamEvents;
        queryRaw(connectionString: string, query: string, callback: Callback): StreamEvents;
        queryRaw(connectionString: string, query: string, params, callback: Callback): StreamEvents;

        query(connectionString: string, query: string): StreamEvents;
        query(connectionString: string, query: string, callback: Callback): StreamEvents;
        query(connectionString: string, query: string, params, callback: Callback): StreamEvents;

        beginTransaction(callback?: Errback);
        commit(callback?: Errback);
        rollback(callback?: Errback);
        close(callback?: Errback);
    }

    interface StreamEvents extends EventEmitter { }
}