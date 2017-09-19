import { EventEmitter } from 'events';

import { Repository } from './repository';
import { Signature } from './signature';
import { Oid } from './oid';
import { Buf } from './buf';
import { Object } from './object';
import { Tree } from './tree';
import { TreeEntry } from './tree-entry';
import { Diff } from './diff';

export class Commit {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} updateRef
     * @param {Signature} author
     * @param {Signature} committer
     * @param {string} messageEncoding
     * @param {string} message
     * @param {Tree} tree
     * @param {number} parentCount
     * @param {any[]} parents
     * @returns {Oid}
     *
     * @memberof Commit
     */
    static create(repo: Repository, updateRef: string, author: Signature, committer: Signature, messageEncoding: string, message: string, tree: Tree, parentCount: number, parents: any[]): Oid;
    /**
     *
     *
     * @static
     * @param {Oid} id
     * @param {Repository} repo
     * @param {string} updateRef
     * @param {Signature} author
     * @param {Signature} committer
     * @param {string} messageEncoding
     * @param {string} message
     * @param {Tree} tree
     * @param {number} parentCount
     * @returns {number}
     *
     * @memberof Commit
     */
    static createV(id: Oid, repo: Repository, updateRef: string, author: Signature, committer: Signature, messageEncoding: string, message: string, tree: Tree, parentCount: number): number;
    /**
     * Retrieves the commit pointed to by the oid
     *
     * @static
     * @param {Repository} repo
     * @param {(string | Oid | Commit)} id
     * @returns {Promise<Commit>}
     *
     * @memberof Commit
     */
    static lookup(repo: Repository, id: string | Oid | Commit): Promise<Commit>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {Oid} id
     * @param {number} len
     * @returns {Promise<Commit>}
     *
     * @memberof Commit
     */
    static lookupPrefix(repo: Repository, id: Oid, len: number): Promise<Commit>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} commitContent
     * @param {string} signature
     * @param {string} signatureField
     * @returns {Promise<Oid>}
     *
     * @memberof Commit
     */
    static createWithSignature(repo: Repository, commitContent: string, signature: string, signatureField: string): Promise<Oid>;

    /**
     *
     *
     * @param {string} updateRef
     * @param {Signature} author
     * @param {Signature} committer
     * @param {string} messageEncoding
     * @param {string} message
     * @param {Tree} tree
     * @returns {Oid}
     *
     * @memberof Commit
     */
    amend(updateRef: string, author: Signature, committer: Signature, messageEncoding: string, message: string, tree: Tree): Oid;
    /**
     *
     *
     * @returns {Signature}
     *
     * @memberof Commit
     */
    author(): Signature;
    /**
     *
     *
     * @returns {Signature}
     *
     * @memberof Commit
     */
    committer(): Signature;
    /**
     *
     *
     *
     * @memberof Commit
     */
    free(): void;
    /**
     *
     *
     * @param {string} field
     * @returns {Promise<Buf>}
     *
     * @memberof Commit
     */
    headerField(field: string): Promise<Buf>;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof Commit
     */
    id(): Oid;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Commit
     */
    message(): string;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Commit
     */
    messageEncoding(): string;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Commit
     */
    messageRaw(): string;
    /**
     *
     *
     * @param {number} n
     * @returns {Promise<Commit>}
     *
     * @memberof Commit
     */
    nthGenAncestor(n: number): Promise<Commit>;
    /**
     *
     *
     * @returns {Repository}
     *
     * @memberof Commit
     */
    owner(): Repository;
    /**
     *
     *
     * @param {number} n
     * @returns {Promise<Commit>}
     *
     * @memberof Commit
     */
    parent(n: number): Promise<Commit>;
    /**
     *
     *
     * @param {number} n
     * @returns {Oid}
     *
     * @memberof Commit
     */
    parentId(n: number): Oid;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Commit
     */
    parentcount(): number;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Commit
     */
    rawHeader(): string;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Commit
     */
    summary(): string;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Commit
     */
    time(): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Commit
     */
    timeOffset(): number;
    /**
     *
     *
     * @param {Tree} treeOut
     * @returns {number}
     *
     * @memberof Commit
     */
    tree(treeOut: Tree): number;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof Commit
     */
    treeId(): Oid;
    /**
     * Retrieve the SHA.
     *
     * @returns {string}
     *
     * @memberof Commit
     */
    sha(): string;
    /**
     * Retrieve the commit time as a unix timestamp.
     *
     * @returns {number}
     *
     * @memberof Commit
     */
    timeMs(): number;
    /**
     * Retrieve the commit time as a Date object.
     *
     * @returns {Date}
     *
     * @memberof Commit
     */
    date(): Date;
    /**
     * Get the tree associated with this commit.
     *
     * @returns {Promise<Tree>}
     *
     * @memberof Commit
     */
    getTree(): Promise<Tree>;
    /**
     * Retrieve the entry represented by path for this commit. Path must be relative to repository root.
     *
     * @param {string} path
     * @returns {Promise<TreeEntry>}
     *
     * @memberof Commit
     */
    getEntry(path: string): Promise<TreeEntry>;
    /**
     * Walk the history from this commit backwards.
     * An EventEmitter is returned that will emit a "commit" event for each commit in the history, and one "end"
     * event when the walk is completed. Don't forget to call start() on the returned event.
     *
     * @returns {EventEmitter}
     *
     * @memberof Commit
     */
    history(): EventEmitter;
    /**
     * Retrieve the commit's parents as commit objects.
     *
     * @param {number} limit
     * @param {Function} callback
     * @returns {Promise<Commit[]>}
     *
     * @memberof Commit
     */
    getParents(limit: number, callback: Function): Promise<Commit[]>;
    /**
     * Retrieve the commit's parent shas.
     *
     * @param {Function} callback
     * @returns {Oid[]}
     *
     * @memberof Commit
     */
    parents(callback: Function): Oid[];
    /**
     * Generate an array of diff trees showing changes between this commit and its parent(s).
     *
     * @param {Function} callback
     * @returns {Promise<Diff[]>}
     *
     * @memberof Commit
     */
    getDiff(callback: Function): Promise<Diff[]>;
    /**
     * Generate an array of diff trees showing changes between this commit and its parent(s).
     *
     * @param {Object} options
     * @param {Function} callback
     * @returns {Promise<Diff[]>}
     *
     * @memberof Commit
     */
    getDiffWithOptions(options: Object, callback: Function): Promise<Diff[]>;
    /**
     * The sha of this commit
     *
     * @returns {string}
     *
     * @memberof Commit
     */
    toString(): string;
    /**
     *
     *
     * @returns {Promise<Commit>}
     *
     * @memberof Commit
     */
    dup(): Promise<Commit>;
    /**
     * consists of a summary
     *
     * @returns {string}
     *
     * @memberof Commit
     */
    body(): string;
}
