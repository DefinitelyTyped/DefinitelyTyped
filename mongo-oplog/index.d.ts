// Type definitions for [cayasso/mongo-oplog]
// Project: https://github.com/cayasso/mongo-oplog
// Definitions by: FinalDes <https://github.com/FinalDes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare module "mongo-oplog" {
    export = MongoOplog;
}

declare function MongoOplog(url:string,option:any): MongoOplog.OplogTrigger;

declare namespace MongoOplog{
    interface OplogTrigger {
        tail(): any
        on(type: String, callback: (doc: any) => void): void;
        stop(callback: () => void): void
    }
}
