// Type definitions for sharedb v1.0.0-beta.11
// Project: https://github.com/share/sharedb
// Definitions by: Steve Oney <http://from.so/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ShareDB {
    type DocumentID = string;
    type Path = ReadonlyArray<string|number>;
    type Snapshot = number;

    interface AddNumOp { p: Path, na: number; };

    interface ListInsertOp  { p: Path; li: any; };
    interface ListDeleteOp  { p: Path; ld: any; };
    interface ListReplaceOp { p: Path; li: any; ld: any; }:
    interface ListMoveOp    { p: Path; lm: any; }:

    interface ObjectInsertOp  { p: Path; oi: any; };
    interface ObjectDeleteOp  { p: Path; od: any; };
    interface ObjectReplaceOp { p: Path; oi: any; od: any; };

    interface StringInsertOp { p: Path; si: string; };
    interface StringDeleteOp { p: Path; sd: string; };

    interface SubtypeOp { p: Path; t: string; o: any; };

    type Op = AddNumOp | ListInsertOp | ListDeleteOp | ListReplaceOp | ListMoveOp | ObjectInsertOp | ObjectDeleteOp | ObjectReplaceOp | StringInsertOp | StringDeleteOp | SubtypeOp;

    interface RawOp {
        src: string;
        seq: number;
        v: number;
        op: Op[];
        m: any;
        c: string;
        d: string;
    }
    type OTType = 'ot-text' | 'ot-json0' | 'ot-text-tp2' | 'rich-text';
    type Action = 'connect'|'op'|'doc'|'query'|'submit'|'apply'|'commit'|'after submit'|'receive';
    interface Error {
        code: number;
        message: string;
    };
    interface ShareDBSourceOptions { source?: boolean; };
    interface ShareDBCreateOptions extends ShareDBSourceOptions {};
    interface ShareDBDelOptions extends ShareDBSourceOptions {};
    interface ShareDBSubmitOpOptions extends ShareDBSourceOptions {};

    type Callback = (err: ShareDB.Error) => any;

    class Doc {
        type: string;
        id: DocumentID;
        data: any;
        fetch: (callback: (err: ShareDB.Error)=>void) => void;
        subscribe: (callback: (err: ShareDB.Error)=>void) => void;
        on: (event: 'load'|'create'|'before op'|'op'|'del'|'error', callback: (...args: Array<any>) => any) => void;
        ingestSnapshot: (snapshot: Snapshot, callback: Callback) => void;
        destroy: () => void;
        create(data: any, callback?: Callback): void;
        create(data: any, type?: OTType, callback?: Callback): void;
        create(data: any, type?: OTType, options?: ShareDBCreateOptions, callback?: Callback): void;
        submitOp: (data: ReadonlyArray<Op>, options?: ShareDBSubmitOpOptions, callback?: Callback) => void;
        del: (options: ShareDBDelOptions, callback: (err: ShareDB.Error) => void) => void;
        removeListener: (eventName: string, listener: Function) => void;
    };

    class Query {
        ready: boolean;
        results: ShareDB.Doc[];
        extra: any;
        on: (event: 'ready'|'error'|'changed'|'insert'|'move'|'remove'|'extra', callback: (...args: any[]) => any) => any;
        destroy: () => void;
    };
}

declare module 'sharedb/lib/client' {
    type Doc = ShareDB.Doc;
    type Op = ShareDB.Op;
    type Action = ShareDB.Action;
    class Connection {
        constructor(ws: WebSocket);
        get(collectionName: string, documentID: ShareDB.DocumentID): ShareDB.Doc;
        createFetchQuery(collectionName: string, query: string, options: {results?: ShareDB.Query[]}, callback: (err: ShareDB.Error, results: any) => any): ShareDB.Query;
        createSubscribeQuery(collectionName: string, query: string, options: {results?: ShareDB.Query[]}, callback: (err: ShareDB.Error, results: any) => any): ShareDB.Query;
    }
}

declare module 'sharedb' {
    class ShareDBServer {
        constructor(options?: {db?: ShareDBServer.DB, pubsub?: ShareDBServer.PubSub, disableDocAction?: boolean, disableSpaceDelimitedActions?: boolean});
        connect: () => ShareDBServer.Connection;
        addProjection(name: string, collection: string, fields: {}): any;
        listen(stream: any): void;
        close(callback?: (err: ShareDBServer.Error) => any): void;
        use(action: ShareDB.Action, fn: ShareDBServer.UseCallback);
        types: {
            register: Function
        };
    }
    namespace ShareDBServer {
        type UseCallback = ((request: {action: ShareDB.Action,agent: any,req: any,collection: string,id: string,query: any,op: ShareDB.RawOp}, callback: Function) => void);
        interface Error {
            code: number;
            message: string;
        }

        interface DB { }

        class MemoryDB implements DB { }
        interface PubSubOptions {
            prefix?: string;
        }
        interface Stream {
            id: string;
        }
        abstract class PubSub {
            private static shallowCopy(obj: any);
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
            private _createStream(channel);
            private _removeStream(channel, stream);
        }
        type Doc = ShareDB.Doc;
        type Op = ShareDB.Op;
        type Action = ShareDB.Action;
        class Connection {
            constructor(ws: WebSocket);
            get(collectionName: string, documentID: ShareDB.DocumentID): ShareDB.Doc;
            createFetchQuery(collectionName: string, query: string, options: {results?: ShareDB.Query[]}, callback: (err: ShareDB.Error, results: any) => any): ShareDB.Query;
            createSubscribeQuery(collectionName: string, query: string, options: {results?: ShareDB.Query[]}, callback: (err: ShareDB.Error, results: any) => any): ShareDB.Query;
        }
    }
    export = ShareDBServer;
}
