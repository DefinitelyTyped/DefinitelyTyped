import { EventEmitter } from 'events';

import { Repository } from './repository';
import { Signature } from './signature';
import { Oid } from './oid';
import { Buf } from './buf';
import { Object } from './object';
import { Tree } from './tree';
import { TreeEntry } from './tree-entry';
import { Diff } from './diff';

export interface HistoryEventEmitter extends EventEmitter {
    start(): void;
}

export class Commit {
    static create(repo: Repository, updateRef: string, author: Signature, committer: Signature, messageEncoding: string, message: string, tree: Tree, parentCount: number, parents: any[]): Oid;
    static createV(id: Oid, repo: Repository, updateRef: string, author: Signature, committer: Signature, messageEncoding: string, message: string, tree: Tree, parentCount: number): number;
    /**
     * Retrieves the commit pointed to by the oid
     *
     *
     */
    static lookup(repo: Repository, id: string | Oid | Commit): Promise<Commit>;
    static lookupPrefix(repo: Repository, id: Oid, len: number): Promise<Commit>;
    static createWithSignature(repo: Repository, commitContent: string, signature: string, signatureField: string): Promise<Oid>;

    amend(updateRef: string, author: Signature, committer: Signature, messageEncoding: string, message: string, tree: Tree | Oid): Promise<Oid>;
    author(): Signature;
    committer(): Signature;

    free(): void;
    headerField(field: string): Promise<Buf>;
    id(): Oid;
    message(): string;
    messageEncoding(): string;
    messageRaw(): string;
    nthGenAncestor(n: number): Promise<Commit>;
    owner(): Repository;
    parent(n: number): Promise<Commit>;
    parentId(n: number): Oid;
    parentcount(): number;
    rawHeader(): string;
    summary(): string;
    time(): number;
    timeOffset(): number;
    tree(treeOut: Tree): number;
    treeId(): Oid;
    /**
     * Retrieve the SHA.
     *
     *
     */
    sha(): string;
    /**
     * Retrieve the commit time as a unix timestamp.
     *
     *
     */
    timeMs(): number;
    /**
     * Retrieve the commit time as a Date object.
     *
     *
     */
    date(): Date;
    /**
     * Get the tree associated with this commit.
     *
     *
     */
    getTree(): Promise<Tree>;
    /**
     * Retrieve the entry represented by path for this commit. Path must be relative to repository root.
     *
     *
     */
    getEntry(path: string): Promise<TreeEntry>;
    /**
     * Walk the history from this commit backwards.
     * An EventEmitter is returned that will emit a "commit" event for each commit in the history, and one "end"
     * event when the walk is completed. Don't forget to call start() on the returned EventEmitter.
     *
     *
     */
    history(): HistoryEventEmitter;
    /**
     * Retrieve the commit's parents as commit objects.
     *
     *
     */
    getParents(limit: number, callback?: Function): Promise<Commit[]>;
    /**
     * Retrieve the commit's parent shas.
     *
     *
     */
    parents(): Oid[];
    /**
     * Generate an array of diff trees showing changes between this commit and its parent(s).
     *
     *
     */
    getDiff(callback?: Function): Promise<Diff[]>;
    /**
     * Generate an array of diff trees showing changes between this commit and its parent(s).
     *
     *
     */
    getDiffWithOptions(options: Object, callback?: Function): Promise<Diff[]>;
    /**
     * The sha of this commit
     *
     *
     */
    toString(): string;
    dup(): Promise<Commit>;
    /**
     * consists of a summary
     *
     *
     */
    body(): string;
}
