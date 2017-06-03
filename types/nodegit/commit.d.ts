import { Repository } from './repository';
import { Signature } from './signature';
import { Oid } from './oid';
import { Buf } from './buf';
import { Object } from './object';
import { Tree } from './tree';
import { TreeEntry } from './tree-entry';
import { Diff } from './diff';

export class Commit {
    static create(repo: Repository, update_ref: string, author: Signature, committer: Signature, message_encoding: string, message: string, tree: Tree, parent_count: number, parents: any[]): Oid;
    static createV(id: Oid, repo: Repository, update_ref: string, author: Signature, committer: Signature, message_encoding: string, message: string, tree: Tree, parent_count: number): number;
    static lookup(repo: Repository, id: string | Oid | Commit): Promise<Commit>;
    static lookupPrefix(repo: Repository, id: Oid, len: number): Promise<Commit>;

    amend(update_ref: string, author: Signature, committer: Signature, message_encoding: string, message: string, tree: Tree): Oid;
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
    tree(tree_out: Tree): number;
    treeId(): Oid;
    sha(): string;
    timeMs(): number;
    date(): Date;
    getTree(): Promise<Tree>;
    getEntry(path: string): Promise<TreeEntry>;
    history(): EventEmitter;
    getParents(limit: number, callback: Function): Promise<Commit[]>;
    parents(callback: Function): Oid[];
    getDiff(callback: Function): Promise<Diff[]>;
    getDiffWithOptions(options: Object, callback: Function): Promise<Diff[]>;
    toString(): string;
}
