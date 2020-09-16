import { Oid } from './oid';
import { TreeEntry } from './tree-entry';
import { Repository } from './repository';
import { Object } from './object';
import { Treebuilder } from './tree-builder';
import { DiffFile } from './diff-file';
import { TreeUpdate } from './tree-update';
import { Diff } from './diff';

export namespace Tree {
    const enum WALK_MODE {
        WALK_PRE = 0,
        WALK_POST = 1
    }
}

export class Tree {
    static entryCmp(tree1: TreeEntry, tree2: TreeEntry): number;
    static entryDup(dest: TreeEntry, source: TreeEntry): number;
    static lookupPrefix(repo: Repository, id: Oid, len: number): Promise<Tree>;
    /**
     * Retrieves the tree pointed to by the oid
     */
    static lookup(repo: Repository, id: string | Oid | Tree, callback?: Function): Promise<Tree>;

    entryById(id: Oid): TreeEntry;
    _entryByIndex(idx: number): TreeEntry;
    /**
     * Get an entry by name; if the tree is a directory, the name is the filename.
     */
    entryByName(name: string): TreeEntry;
    _entryByName(filename: string): TreeEntry;
    entryByPath(path: string): Promise<TreeEntry>;
    entryCount(): number;

    free(): void;
    id(): Oid;
    owner(): Repository;
    /**
     * Diff two trees
     */
    diff(tree: Tree, callback?: Function): Promise<Diff>;
    /**
     * Diff two trees with options
     */
    diffWithOptions(tree: Tree, options?: Object, callback?: Function): Promise<Diff>;
    /**
     * Get an entry at the ith position.
     */
    entryByIndex(i: number): TreeEntry;
    /**
     * Get an entry at a path. Unlike by name, this takes a fully qualified path, like /foo/bar/baz.javascript
     */
    getEntry(filePath: string): Promise<TreeEntry>;
    /**
     * Return an array of the entries in this tree (excluding its children).
     */
    entries(): TreeEntry[];
    /**
     * Recursively walk the tree in breadth-first order. Fires an event for each entry.
     */
    walk(blobsOnly?: boolean): NodeJS.EventEmitter & {
        /**
         * Start walking the tree and emitting events. This should be called after event listeners have been attached.
         */
        start: () => void;
    };
    /**
     * Return the path of this tree, like /lib/foo/bar
     *
     *
     */
    path(): string;
    /**
     * Make builder. This is helpful for modifying trees.
     */
    builder(): Treebuilder;
    dup(): Promise<Tree>;
    createUpdated(repo: Repository, nUpdates: number, updates: TreeUpdate): Promise<Oid>;
}
