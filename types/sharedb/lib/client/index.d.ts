/// <reference path="../sharedb.d.ts" />
import * as ShareDB from "../sharedb";
import Agent = require("../agent");

export class Connection extends ShareDB.TypedEmitter<ShareDB.ConnectionEventMap> {
    constructor(ws: ShareDB.Socket);

    // This direct reference from connection to agent is not used internal to
    // ShareDB, but it is handy for server-side only user code that may cache
    // state on the agent and read it in middleware
    agent: Agent | null;

    collections: Record<string, Record<string, ShareDB.Doc>>;
    queries: Record<string, ShareDB.Query>;

    seq: number;
    id: string | null; // Equals agent.src on the server
    nextQueryId: number;
    nextSnapshotRequestId: number;

    state: string;
    readonly canSend: boolean;
    debug: boolean;

    close(): void;
    get(collectionName: string, documentID: string): ShareDB.Doc;
    createFetchQuery<T = any>(
        collectionName: string,
        query: any,
        options?: { results?: Array<ShareDB.Doc<T>> } | null,
        callback?: (err: Error, results: Array<ShareDB.Doc<T>>) => void,
    ): ShareDB.Query<T>;
    createSubscribeQuery<T = any>(
        collectionName: string,
        query: any,
        options?: { results?: Array<ShareDB.Doc<T>> } | null,
        callback?: (err: Error, results: Array<ShareDB.Doc<T>>) => void,
    ): ShareDB.Query<T>;
    fetchSnapshot(
        collection: string,
        id: string,
        version: number | null,
        callback: (error: Error, snapshot: ShareDB.Snapshot) => void,
    ): void;
    fetchSnapshotByTimestamp(
        collection: string,
        id: string,
        timestamp: number | null,
        callback: (error: Error, snapshot: ShareDB.Snapshot) => void,
    ): void;
    getPresence(channel: string): ShareDB.Presence;
    getDocPresence(collection: string, id: string): ShareDB.Presence;

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

export {
    AddNumOp,
    Doc,
    Error,
    ListDeleteOp,
    ListInsertOp,
    ListMoveOp,
    ListReplaceOp,
    LocalPresence,
    ObjectDeleteOp,
    ObjectInsertOp,
    ObjectReplaceOp,
    Op,
    Path,
    Presence,
    Query,
    ShareDBSourceOptions,
    Snapshot,
    StringDeleteOp,
    StringInsertOp,
    SubtypeOp,
} from "../sharedb";

export const types: ShareDB.Types;
export const logger: ShareDB.Logger;
