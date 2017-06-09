import { Oid } from './oid';
import { TreeEntry } from './tree-entry';
import { Repository } from './repository';
import { Object } from './object';
import { Treebuilder } from './tree-builder';
import { DiffFile } from './diff-file';

export namespace Tree {
    const enum WALK_MODE {
        WALK_PRE = 0,
        WALK_POST = 1
    }
}

export class Tree {
    static entryCmp(e1: TreeEntry, e2: TreeEntry): number;
    static entryDup(dest: TreeEntry, source: TreeEntry): number;
    static entryFilemode(entry: TreeEntry): number;
    static entryFilemodeRaw(entry: TreeEntry): number;
    static entryFree(entry: TreeEntry): void;
    static entryId(entry: TreeEntry): Oid;
    static entryName(entry: TreeEntry): string;
    static entryToObject(object_out: Object, repo: Repository, entry: TreeEntry): number;
    static entryType(entry: TreeEntry): number;
    static lookup(repo: Repository, id: string | Oid | Tree, callback: Function): Promise<Tree>;
    static lookupPrefix(repo: Repository, id: Oid, len: number): Promise<Tree>;

    entryById(id: Oid): TreeEntry;
    _entryByIndex(idx: number): TreeEntry;
    entryByName(name: string): TreeEntry;
    entryByPath(path: string): Promise<TreeEntry>;
    entryCount(): number;
    free(): void;
    id(): Oid;
    owner(): Repository;
    diff(tree: Tree, callback: Function): Promise<DiffFile[]>;
    diffWithOptions(tree: Tree, options: Object, callback: Function): Promise<DiffFile[]>;
    entryByIndex(i: number): TreeEntry;
    getEntry(filePath: string): TreeEntry;
    entries(): TreeEntry[];
    walk(blobsOnly?: boolean): NodeJS.EventEmitter;
    path(): string;
    builder(): Treebuilder;
}
