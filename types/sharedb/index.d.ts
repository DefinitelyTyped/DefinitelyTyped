// Type definitions for sharedb 1.0
// Project: https://github.com/share/sharedb
// Definitions by: Steve Oney <https://github.com/soney>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="lib/sharedb.d.ts" />

import { Doc, Query, Error, Action, RawOp, Op } from './lib/sharedb';

type UseCallback = ((request: {action: Action, agent: any, req: any, collection: string, id: string, query: any, op: RawOp}, callback: () => void) => void);

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
    use(action: Action, fn: UseCallback);
    types: {
        register: () => void
    };
}

declare namespace sharedb {
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

    class Connection {
        constructor(ws: WebSocket);
        get(collectionName: string, documentID: string): Doc;
        createFetchQuery(collectionName: string, query: string, options: {results?: Query[]}, callback: (err: Error, results: any) => any): Query;
        createSubscribeQuery(collectionName: string, query: string, options: {results?: Query[]}, callback: (err: Error, results: any) => any): Query;
    }
}
