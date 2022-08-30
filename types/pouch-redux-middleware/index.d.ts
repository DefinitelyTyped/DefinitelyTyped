// Type definitions for pouch-redux-middleware 1.2
// Project: https://github.com/pgte/pouch-redux-middleware
// Definitions by: Adam Charron <https://github.com/charrondev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Dispatch, AnyAction, Middleware } from 'redux';
import * as PouchDB from 'pouchdb';

export type Document<T = {[field: string]: any}> = PouchDB.Core.IdMeta & T;

export interface Path<T extends {} = {[field: string]: any}> {
    path: string;
    db: PouchDB.Database<T>;
    scheduleRemove?(doc: Document<T>): void;
    scheduleInset?(doc: Document<T>): void;
    propagateDelete?(doc: Document<T>, dispatch: Dispatch<any>): void;
    propagateBatchInsert?(doc: Array<Document<T>>, dispatch: Dispatch<any>): void;
    propagateInsert?(doc: Document<T>, dispatch: Dispatch<any>): void;
    propagateUpdate?(doc: Document<T>, dispatch: Dispatch<any>): void;
    handleResponse?(err: Error, data: any, errorCallback: (err: Error) => void): void;
    initialBatchDispatched?(err?: Error): void;
    queue?(...args: any[]): any;
    docs?: any;
    actions: {
        remove(doc: Document<T>): AnyAction;
        update(doc: Document<T>): AnyAction;
        insert(doc: Document<T>): AnyAction;
        batchInsert(docs: Array<Document<T>>): AnyAction;
    };
}

export default function PouchMiddlewareFactory<T extends {} = {[field: string]: any}>(paths?: Array<Path<T>> | Path<T>): Middleware;
