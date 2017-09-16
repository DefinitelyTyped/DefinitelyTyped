import { Oid } from './oid';
import { TreeEntry } from './tree-entry';
import { Repository } from './repository';
import { Object } from './object';
import { Treebuilder } from './tree-builder';
import { DiffFile } from './diff-file';
import { TreeUpdate } from './tree-update';

export namespace Tree {
    const enum WALK_MODE {
        WALK_PRE = 0,
        WALK_POST = 1
    }
}

export class Tree {
    /**
     *
     *
     * @static
     * @param {TreeEntry} tree1
     * @param {TreeEntry} tree2
     * @returns {number}
     *
     * @memberof Tree
     */
    static entryCmp(tree1: TreeEntry, tree2: TreeEntry): number;
    /**
     *
     *
     * @static
     * @param {TreeEntry} dest
     * @param {TreeEntry} source
     * @returns {number}
     *
     * @memberof Tree
     */
    static entryDup(dest: TreeEntry, source: TreeEntry): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {Oid} id
     * @param {number} len
     * @returns {Promise<Tree>}
     *
     * @memberof Tree
     */
    static lookupPrefix(repo: Repository, id: Oid, len: number): Promise<Tree>;
    /**
     * Retrieves the tree pointed to by the oid
     *
     * @static
     * @param {Repository} repo
     * @param {(string | Oid | Tree)} id
     * @param {Function} callback
     * @returns {Promise<Tree>}
     *
     * @memberof Tree
     */
    static lookup(repo: Repository, id: string | Oid | Tree, callback: Function): Promise<Tree>;

    /**
     *
     *
     * @param {Oid} id
     * @returns {TreeEntry}
     *
     * @memberof Tree
     */
    entryById(id: Oid): TreeEntry;
    /**
     *
     *
     * @param {number} idx
     * @returns {TreeEntry}
     *
     * @memberof Tree
     */
    _entryByIndex(idx: number): TreeEntry;
    /**
     * Get an entry by name; if the tree is a directory, the name is the filename.
     *
     * @param {string} name
     * @returns {TreeEntry}
     *
     * @memberof Tree
     */
    entryByName(name: string): TreeEntry;
    /**
     *
     *
     * @param {string} filename
     * @returns {TreeEntry}
     *
     * @memberof Tree
     */
    _entryByName(filename: string): TreeEntry;
    /**
     *
     *
     * @param {string} path
     * @returns {Promise<TreeEntry>}
     *
     * @memberof Tree
     */
    entryByPath(path: string): Promise<TreeEntry>;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Tree
     */
    entryCount(): number;
    /**
     *
     *
     *
     * @memberof Tree
     */
    free(): void;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof Tree
     */
    id(): Oid;
    /**
     *
     *
     * @returns {Repository}
     *
     * @memberof Tree
     */
    owner(): Repository;
    /**
     * Diff two trees
     *
     * @param {Tree} tree
     * @param {Function} callback
     * @returns {Promise<DiffFile[]>}
     *
     * @memberof Tree
     */
    diff(tree: Tree, callback: Function): Promise<DiffFile[]>;
    /**
     * Diff two trees with options
     *
     * @param {Tree} tree
     * @param {Object} options
     * @param {Function} callback
     * @returns {Promise<DiffFile[]>}
     *
     * @memberof Tree
     */
    diffWithOptions(tree: Tree, options: Object, callback: Function): Promise<DiffFile[]>;
    /**
     * Get an entry at the ith position.
     *
     * @param {number} i
     * @returns {TreeEntry}
     *
     * @memberof Tree
     */
    entryByIndex(i: number): TreeEntry;
    /**
     * Get an entry at a path. Unlike by name, this takes a fully qualified path, like /foo/bar/baz.javascript
     *
     * @param {string} filePath
     * @returns {TreeEntry}
     *
     * @memberof Tree
     */
    getEntry(filePath: string): TreeEntry;
    /**
     * Return an array of the entries in this tree (excluding its children).
     *
     * @returns {TreeEntry[]}
     *
     * @memberof Tree
     */
    entries(): TreeEntry[];
    /**
     * Recursively walk the tree in breadth-first order. Fires an event for each entry.
     *
     * @param {boolean} [blobsOnly]
     * @returns {NodeJS.EventEmitter}
     *
     * @memberof Tree
     */
    walk(blobsOnly?: boolean): NodeJS.EventEmitter;
    /**
     * Return the path of this tree, like /lib/foo/bar
     *
     * @returns {string}
     *
     * @memberof Tree
     */
    path(): string;
    /**
     * Make builder. This is helpful for modifying trees.
     *
     * @returns {Treebuilder}
     *
     * @memberof Tree
     */
    builder(): Treebuilder;
    /**
     *
     *
     * @returns {Promise<Tree>}
     *
     * @memberof Tree
     */
    dup(): Promise<Tree>;
    createUpdated(repo: Repository, nUpdates: number, updates: TreeUpdate): Promise<Oid>;
}
