// Type definitions for msnodesql 0.2.1
// Project: https://github.com/WindowsAzure/node-sqlserver
// Definitions by: Boris Yankov <https://github.com/borisyankov>, Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


///<reference types="node" />


import events = require('events');

export declare function open(connectionString: string, callback?: OpenCallback): Connection;

export declare function query(connectionString: string, query: string): StreamEvents;
export declare function query(connectionString: string, query: string, callback: QueryCallback<any>): StreamEvents;
export declare function query(connectionString: string, query: string, params: any[]): StreamEvents;
export declare function query(connectionString: string, query: string, params: any[], callback: QueryCallback<any>): StreamEvents;

export declare function query<T>(connectionString: string, query: string, callback: QueryCallback<T>): StreamEvents;
export declare function query<T>(connectionString: string, query: string, params: any[], callback: QueryCallback<T>): StreamEvents;

export declare function queryRaw(connectionString: string, query: string): StreamEvents;
export declare function queryRaw(connectionString: string, query: string, callback: QueryRawCallback): StreamEvents;
export declare function queryRaw(connectionString: string, query: string, params: any[]): StreamEvents;
export declare function queryRaw(connectionString: string, query: string, params: any[], callback: QueryRawCallback): StreamEvents;

interface OpenCallback {
    (err?: Error, connection?: Connection): void;
}

interface QueryCallback<T> {
    (err?: Error, results?: T[], more?: boolean): void;
}

interface QueryRawCallback {
    (err?: Error, results?: QueryRawResult, more?: boolean): void;
}

interface QueryRawResult {
    meta: QueryRawColumn[];
    rows: any[][];
}

interface QueryRawColumn {
    name?: string;
}

interface ErrorCallback {
    (err: Error): void;
}

interface Connection {
    query(query: string): StreamEvents;
    query(query: string, callback: QueryCallback<any>): StreamEvents;
    query(query: string, params: any[]): StreamEvents;
    query(query: string, params: any[], callback: QueryCallback<any>): StreamEvents;

    query<T>(query: string, callback: QueryCallback<T>): StreamEvents;
    query<T>(query: string, params: any[], callback: QueryCallback<T>): StreamEvents;

    queryRaw(query: string): StreamEvents;
    queryRaw(query: string, callback: QueryRawCallback): StreamEvents;
    queryRaw(query: string, params: any[]): StreamEvents;
    queryRaw(query: string, params: any[], callback: QueryRawCallback): StreamEvents;

    beginTransaction(callback?: ErrorCallback);
    commit(callback?: ErrorCallback);
    rollback(callback?: ErrorCallback);

    close(callback?: ErrorCallback);
    close(immediately: boolean, callback?: ErrorCallback);
}

interface StreamEvents extends events.EventEmitter { }
