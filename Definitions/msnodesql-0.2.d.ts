// Type definitions for msnodesql 0.2
// Project: https://github.com/WindowsAzure/node-sqlserver
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


///<reference path='node-0.8.d.ts' />

declare module "msnodesql" {
    export function open(connectionString: string, callback: Function): Connection;

    export function query(connectionString: string, query: string): StreamEvents;
    export function query(connectionString: string, query: string, callback: Function): StreamEvents;
    export function query(connectionString: string, query: string, params, callback: Function): StreamEvents;

    export function queryRaw(connectionString: string, query: string): StreamEvents;
    export function queryRaw(connectionString: string, query: string, callback: Function): StreamEvents;
    export function queryRaw(connectionString: string, query: string, params, callback: Function): StreamEvents;

    interface Connection { }
    interface StreamEvents extends EventEmitter  { }
}