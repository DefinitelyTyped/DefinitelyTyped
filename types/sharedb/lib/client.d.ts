/// <reference path="sharedb.d.ts" />
import * as ShareDB from './sharedb';
import Agent = require('./agent');

export class Connection extends ShareDB.TypedEmitter<ShareDB.ConnectionEventMap> {
    constructor(ws: ShareDB.Socket);

    // This direct reference from connection to agent is not used internal to
    // ShareDB, but it is handy for server-side only user code that may cache
    // state on the agent and read it in middleware
    agent: Agent | null;

    collections: Record<string, Record<string, Doc>>;
    queries: Record<string, Query>;

    seq: number;
    id: string | null; // Equals agent.src on the server
    nextQueryId: number;
    nextSnapshotRequestId: number;

    state: string;
    readonly canSend: boolean;
    debug: boolean;

    close(): void;
    get(collectionName: string, documentID: string): Doc;
    createFetchQuery<T = any>(collectionName: string, query: any, options?: {results?: Array<Doc<T>>} | null, callback?: (err: Error, results: Array<Doc<T>>) => void): Query<T>;
    createSubscribeQuery<T = any>(collectionName: string, query: any, options?: {results?: Array<Doc<T>>} | null, callback?: (err: Error, results: Array<Doc<T>>) => void): Query<T>;
    fetchSnapshot(collection: string, id: string, version: number, callback: (error: Error, snapshot: ShareDB.Snapshot) => void): void;
    fetchSnapshotByTimestamp(collection: string, id: string, timestamp: number, callback: (error: Error, snapshot: ShareDB.Snapshot) => void): void;
    getPresence(channel: string): Presence;
    getDocPresence(collection: string, id: string): Presence;

    /**
     * Returns whether anything in this client is either:
     * - In-flight, waiting on a response from the server
     * - Pending (locally queued)
     */
    hasPending(): boolean;

    /**
     * Invokes the callback once nothing on this client is in-flight or pending.
     *
     * @see hasPending
     */
    whenNothingPending(callback: () => void): void;

    /**
     * Manually send a JSON-serializable message to the server.
     *
     * WARNING - This is mostly for internal use within sharedb.
     *
     * Prefer to use methods like `Doc#submitOp`, `Doc#subscribe`, `Connection#createFetchQuery`,
     * etc., which will manage the necessary message exchanges.
     */
    send(message: Record<string, unknown>): void;

    ping(): void;
}
export type Doc<T = any> = ShareDB.Doc<T>;
export type Snapshot<T = any> = ShareDB.Snapshot<T>;
export type Query<T = any> = ShareDB.Query<T>;
export type Presence<T = any> = ShareDB.Presence<T>;
export type LocalPresence<T = any> = ShareDB.LocalPresence<T>;
export type Error = ShareDB.Error;
export type Op = ShareDB.Op;
export type AddNumOp = ShareDB.AddNumOp;
export type ListMoveOp = ShareDB.ListMoveOp;
export type ListInsertOp = ShareDB.ListInsertOp;
export type ListDeleteOp = ShareDB.ListDeleteOp;
export type ListReplaceOp = ShareDB.ListReplaceOp;
export type StringInsertOp = ShareDB.StringInsertOp;
export type StringDeleteOp = ShareDB.StringDeleteOp;
export type ObjectInsertOp = ShareDB.ObjectInsertOp;
export type ObjectDeleteOp = ShareDB.ObjectDeleteOp;
export type ObjectReplaceOp = ShareDB.ObjectReplaceOp;
export type SubtypeOp = ShareDB.SubtypeOp;

export type Path = ShareDB.Path;
export type ShareDBSourceOptions = ShareDB.ShareDBSourceOptions;

export const types: ShareDB.Types;
export const logger: ShareDB.Logger;
