// Type definitions for cayasso/mongo-oplog
// Project: https://github.com/cayasso/mongo-oplog
// Definitions by: FinalDes <https://github.com/FinalDes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="eventemitter3" />

declare function MongoOplog(url: string, filter: any): OplogTrigger;

declare interface OplogTrigger {
    tail(): any; // return promise
    on(type: String, callback: (doc: any) => void): any; // return eventemitter3
    stop(callback: () => void): any; // return promise
}

declare module "mongo-oplog" {
    export = MongoOplog;
}
