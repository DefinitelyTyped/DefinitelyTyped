// TypeScript Version: 2.1
// Type definitions for mongo-oplog v2.0.2
// Project: https://github.com/cayasso/mongo-oplog
// Definitions by: FinalDes <https://github.com/FinalDes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="eventemitter3" />

export function MongoOplog(url: string, filter: any): OplogTrigger;

export interface OplogTrigger {
    tail(): any; // return promise
    on(type: string, callback: (doc: any) => void): any; // return eventemitter3
    stop(callback: () => void): any; // return promise
}

declare module "mongo-oplog" {
    export = MongoOplog;
}
