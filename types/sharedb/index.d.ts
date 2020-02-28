// Type definitions for sharedb 1.0
// Project: https://github.com/share/sharedb
// Definitions by: Steve Oney <https://github.com/soney>
//                 Eric Hwang <https://github.com/ericyhwang>
//                 Peter Xu <https://github.com/pxpeterxu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference path="lib/sharedb.d.ts" />

import Agent = require('./lib/agent');
import * as ShareDB from './lib/sharedb';

interface PubSubOptions {
    prefix?: string;
}
interface Stream {
    id: string;
}

export = sharedb;

declare class sharedb {
    db: sharedb.DB;
    pubsub: sharedb.PubSub;
    extraDbs: {[extraDbName: string]: sharedb.ExtraDB};

    constructor(options?: {
        db?: any,
        pubsub?: sharedb.PubSub,
        extraDbs?: {[extraDbName: string]: sharedb.ExtraDB},
        disableDocAction?: boolean,
        disableSpaceDelimitedActions?: boolean
    });
    connect: (connection?: any, req?: any) => sharedb.Connection;
    /**
     * Registers a projection that can be used from clients just like a normal collection.
     *
     * @param name name of the projection
     * @param collection name of the backing collection
     * @param fields field whitelist for the projection
     */
    addProjection(name: string, collection: string, fields: ProjectionFields): void;
    listen(stream: any): void;
    close(callback?: BasicCallback): void;
    /**
     * Registers a server middleware function.
     *
     * @param action name of an action from https://github.com/share/sharedb#middlewares
     * @param fn listener invoked when the specified action occurs
     */
    use<A extends keyof sharedb.middleware.ActionContextMap>(
        action: A,
        fn: (context: sharedb.middleware.ActionContextMap[A], callback: (err?: any) => void) => void,
    ): void;
    static types: {
        register: (type: { name?: string, uri?: string, [key: string]: any}) => void;
    };
}

declare namespace sharedb {
    abstract class DB {
        projectsSnapshots: boolean;
        disableSubscribe: boolean;
        close(callback?: BasicCallback): void;
        commit(collection: string, id: string, op: Op, snapshot: any, options: any, callback: (...args: any[]) => any): void;
        getSnapshot(collection: string, id: string, fields: any, options: any, callback: (...args: any[]) => any): void;
        getSnapshotBulk(collection: string, ids: string, fields: any, options: any, callback: (...args: any[]) => any): void;
        getOps(collection: string, id: string, from: number | null, to: number | null, options: any, callback: (...args: any[]) => any): void;
        getOpsToSnapshot(collection: string, id: string, from: number | null, snapshot: number, options: any, callback: (...args: any[]) => any): void;
        getOpsBulk(collection: string, fromMap: any, toMap: any, options: any, callback: (...args: any[]) => any): void;
        getCommittedOpVersion(collection: string, id: string, snapshot: any, op: any, options: any, callback: (...args: any[]) => any): void;
        query: DBQueryMethod;
        queryPoll(collection: string, query: any, options: any, callback: (...args: any[]) => any): void;
        queryPollDoc(collection: string, id: string, query: any, options: any, callback: (...args: any[]) => any): void;
        canPollDoc(): boolean;
        skipPoll(): boolean;
    }

    class MemoryDB extends DB { }

    // The DBs in `extraDbs` are only ever used for queries, so they don't need the other DB methods.
    interface ExtraDB {
        query: DBQueryMethod;
        close(callback?: BasicCallback): void;
    }

    type DBQueryMethod = (collection: string, query: any, fields: ProjectionFields | undefined, options: any, callback: DBQueryCallback) => void;
    type DBQueryCallback = (err: Error | null, snapshots: ShareDB.Snapshot[], extra?: any) => void;

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

    namespace middleware {
        interface ActionContextMap {
            afterSubmit: SubmitContext;
            apply: ApplyContext;
            commit: CommitContext;
            connect: ConnectContext;
            doc: DocContext;  // Deprecated, use 'readSnapshots' instead.
            op: OpContext;
            query: QueryContext;
            readSnapshots: ReadSnapshotsContext;
            receive: ReceiveContext;
            reply: ReplyContext;
            submit: SubmitContext;
        }

        interface BaseContext {
            action: keyof ActionContextMap;
            agent: Agent;
            backend: sharedb;
        }

        interface ApplyContext extends BaseContext, SubmitRequest {
        }

        interface CommitContext extends BaseContext, SubmitRequest {
        }

        interface ConnectContext extends BaseContext {
            stream: any;
            req: any;  // Property always exists, value may be undefined
        }

        interface DocContext extends BaseContext {
            collection: string;
            id: string;
            snapshot: ShareDB.Snapshot;
        }

        interface OpContext extends BaseContext {
            collection: string;
            id: string;
            op: ShareDB.Op;
        }

        interface QueryContext extends BaseContext {
            index: string;
            collection: string;
            projection: Projection | undefined;
            fields: ProjectionFields | undefined;
            channel: string;
            query: any;
            options?: {[key: string]: any};
            db: DB | null;
            snapshotProjection: Projection | null;
        }

        interface ReadSnapshotsContext extends BaseContext {
            collection: string;
            snapshots: ShareDB.Snapshot[];
            snapshotType: SnapshotType;
        }

        interface ReceiveContext extends BaseContext {
            data: {[key: string]: any};  // ClientRequest, but before any validation
        }

        interface ReplyContext extends BaseContext {
            request: ShareDB.ClientRequest;
            reply: {[key: string]: any};
        }

        type SnapshotType = 'current' | 'byVersion' | 'byTimestamp';

        interface SubmitContext extends BaseContext, SubmitRequest {
        }
    }
}

interface Projection {
    target: string;
    fields: ProjectionFields;
}

interface ProjectionFields {
    [propertyName: string]: true;
}

interface SubmitRequest {
    index: string;
    projection: Projection | undefined;
    collection: string;
    id: string;
    op: sharedb.Op;
    options: any;
    start: number;

    saveMilestoneSnapshot: boolean | null;
    suppressPublish: boolean | null;
    maxRetries: number | null;
    retries: number;

    snapshot: ShareDB.Snapshot | null;
    ops: ShareDB.Op[];
    channels: string[] | null;
}

type BasicCallback = (err?: Error) => void;
