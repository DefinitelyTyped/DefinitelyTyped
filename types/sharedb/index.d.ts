// Type definitions for sharedb 1.0
// Project: https://github.com/share/sharedb
// Definitions by: Steve Oney <https://github.com/soney>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="lib/sharedb.d.ts" />

import * as ShareDB from './lib/sharedb';

interface PubSubOptions {
    prefix?: string;
}
interface Stream {
    id: string;
}

export = sharedb;

declare class sharedb {
    constructor(options?: {db?: any, pubsub?: sharedb.PubSub, disableDocAction?: boolean, disableSpaceDelimitedActions?: boolean});
    connect: () => sharedb.Connection;
    addProjection(name: string, collection: string, fields: {}): any;
    listen(stream: any): void;
    close(callback?: (err: Error) => any): void;
    use(action: sharedb.UseAction, fn: sharedb.UseCallback): void;
    static types: {
        register: (type: { name?: string, uri?: string, [key: string]: any}) => void;
    };
}

declare namespace sharedb {
    type UseAction = 'connect' | 'op' | 'doc' | 'query' | 'submit' | 'apply' | 'commit' | 'after submit' | 'receive';
    type UseCallback = ((request: {action: UseAction, agent: any, req: any, collection: string, id: string, query: any, op: ShareDB.RawOp}, callback: () => void) => void);

    abstract class DB {
        projectsSnapshots: boolean;
        disableSubscribe: boolean;
        close(callback?: () => void): void;
        commit(collection: string, id: string, op: Op, snapshot: any, options: any, callback: (...args: any[]) => any): void;
        getSnapshot(collection: string, id: string, fields: any, options: any, callback: (...args: any[]) => any): void;
        getSnapshotBulk(collection: string, ids: string, fields: any, options: any, callback: (...args: any[]) => any): void;
        getOps(collection: string, id: string, from: number, to: number, options: any, callback: (...args: any[]) => any): void;
        getOpsToSnapshot(collection: string, id: string, from: number, snapshot: number, options: any, callback: (...args: any[]) => any): void;
        getOpsBulk(collection: string, fromMap: any, toMap: any, options: any, callback: (...args: any[]) => any): void;
        getCommittedOpVersion(collection: string, id: string, snapshot: any, op: any, options: any, callback: (...args: any[]) => any): void;
        query(collection: string, query: Query, fields: any, options: any, callback: (...args: any[]) => any): void;
        queryPoll(collection: string, query: Query, options: any, callback: (...args: any[]) => any): void;
        queryPollDoc(collection: string, id: string, query: Query, options: any, callback: (...args: any[]) => any): void;
        canPollDoc(): boolean;
        skipPoll(): boolean;
    }

    class MemoryDB extends DB { }

    abstract class PubSub {
        private static shallowCopy(obj: any): any;
        protected prefix?: string;
        protected nextStreamId: number;
        protected streamsCount: number;
        protected streams: {
            [channel: string]: Stream;
        };
        protected subscribed: {
            [channel: string]: boolean;
        };
        protected constructor(options?: PubSubOptions);
        close(callback?: (err: Error|null) => void): void;
        publish(channels: string[], data: {[k: string]: any}, callback: (err: Error | null) => void): void;
        subscribe(channel: string, callback: (err: Error | null, stream?: Stream) => void): void;
        protected abstract _subscribe(channel: string, callback: (err: Error | null) => void): void;
        protected abstract _unsubscribe(channel: string, callback: (err: Error | null) => void): void;
        protected abstract _publish(channels: string[], data: any, callback: (err: Error | null) => void): void;
        protected _emit(channel: string, data: {[k: string]: any}): void;
        private _createStream(channel): void;
        private _removeStream(channel, stream): void;
    }

    class Connection {
        constructor(ws: WebSocket);
        get(collectionName: string, documentID: string): ShareDB.Doc;
        createFetchQuery(collectionName: string, query: string, options: {results?: ShareDB.Query[]}, callback: (err: Error, results: any) => any): ShareDB.Query;
        createSubscribeQuery(collectionName: string, query: string, options: {results?: ShareDB.Query[]}, callback: (err: Error, results: any) => any): ShareDB.Query;
    }
    type Doc = ShareDB.Doc;
    type Query = ShareDB.Query;
    type Error = ShareDB.Error;
    type Op = ShareDB.Op;
    type AddNumOp = ShareDB.AddNumOp;
    type ListMoveOp = ShareDB.ListMoveOp;
    type ListInsertOp = ShareDB.ListInsertOp;
    type ListDeleteOp = ShareDB.ListDeleteOp;
    type ListReplaceOp = ShareDB.ListReplaceOp;
    type StringInsertOp = ShareDB.StringInsertOp;
    type StringDeleteOp = ShareDB.StringDeleteOp;
    type ObjectInsertOp = ShareDB.ObjectInsertOp;
    type ObjectDeleteOp = ShareDB.ObjectDeleteOp;
    type ObjectReplaceOp = ShareDB.ObjectReplaceOp;
    type SubtypeOp = ShareDB.SubtypeOp;

    type Path = ShareDB.Path;
    type ShareDBSourceOptions = ShareDB.ShareDBSourceOptions;
}
