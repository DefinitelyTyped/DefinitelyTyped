import { Oid } from './oid';
import { IndexEntry } from './index-entry';
import { Repository } from './repository';
import { Tree } from './tree';
import { Strarray } from './str-array';

export namespace Index {
    const enum ADD_OPTION {
        ADD_DEFAULT = 0,
        ADD_FORCE = 1,
        ADD_DISABLE_PATHSPEC_MATCH = 2,
        ADD_CHECK_PATHSPEC = 4
    }

    const enum CAP {
        IGNORE_CASE = 1,
        NO_FILEMODE = 2,
        NO_SYMLINKS = 4,
        FROM_OWNER = -1
    }
}

export class Index {
    /**
     *
     *
     * @static
     * @param {IndexEntry} entry
     * @returns {number}
     *
     * @memberof Index
     */
    static entryIsConflict(entry: IndexEntry): number;
    /**
     *
     *
     * @static
     * @param {IndexEntry} entry
     * @returns {number}
     *
     * @memberof Index
     */
    static entryStage(entry: IndexEntry): number;
    /**
     *
     *
     * @static
     * @param {string} indexPath
     * @returns {Promise<Index>}
     *
     * @memberof Index
     */
    static open(indexPath: string): Promise<Index>;

    /**
     *
     *
     * @param {IndexEntry} sourceEntry
     * @returns {number}
     *
     * @memberof Index
     */
    add(sourceEntry: IndexEntry): number;
    /**
     *
     *
     * @param {Strarray} pathspec
     * @param {number} flags
     * @param {Function} callback
     * @param {void} payload
     * @returns {Promise<number>}
     *
     * @memberof Index
     */
    addAll(pathspec: Strarray, flags: number, callback: Function, payload: void): Promise<number>;
    /**
     *
     *
     * @param {string} path
     * @returns {number}
     *
     * @memberof Index
     */
    addByPath(path: string): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Index
     */
    caps(): number;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof Index
     */
    checksum(): Oid;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Index
     */
    clear(): number;
    /**
     *
     *
     * @param {IndexEntry} ancestorEntry
     * @param {IndexEntry} ourEntry
     * @param {IndexEntry} theirEntry
     * @returns {number}
     *
     * @memberof Index
     */
    conflictAdd(ancestorEntry: IndexEntry, ourEntry: IndexEntry, theirEntry: IndexEntry): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Index
     */
    conflictCleanup(): number;
    /**
     *
     *
     * @param {string} path
     * @returns {Promise<IndexEntry>}
     *
     * @memberof Index
     */
    conflictGet(path: string): Promise<IndexEntry>;
    /**
     *
     *
     * @param {string} path
     * @returns {number}
     *
     * @memberof Index
     */
    conflictRemove(path: string): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Index
     */
    entryCount(): number;
    /**
     *
     *
     * @param {number} n
     * @returns {IndexEntry}
     *
     * @memberof Index
     */
    getByIndex(n: number): IndexEntry;
    /**
     *
     *
     * @param {string} path
     * @param {number} stage
     * @returns {IndexEntry}
     *
     * @memberof Index
     */
    getByPath(path: string, stage: number): IndexEntry;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Index
     */
    hasConflicts(): number;
    /**
     *
     *
     * @returns {Repository}
     *
     * @memberof Index
     */
    owner(): Repository;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Index
     */
    path(): string;
    /**
     *
     *
     * @param {number} force
     * @returns {number}
     *
     * @memberof Index
     */
    read(force: number): number;
    /**
     *
     *
     * @param {Tree} tree
     * @returns {number}
     *
     * @memberof Index
     */
    readTree(tree: Tree): number;
    /**
     *
     *
     * @param {string} path
     * @param {number} stage
     * @returns {number}
     *
     * @memberof Index
     */
    remove(path: string, stage: number): number;
    /**
     *
     *
     * @param {Strarray} pathspec
     * @param {Function} callback
     * @param {void} payload
     * @returns {Promise<number>}
     *
     * @memberof Index
     */
    removeAll(pathspec: Strarray, callback: Function, payload: void): Promise<number>;
    /**
     *
     *
     * @param {string} path
     * @returns {number}
     *
     * @memberof Index
     */
    removeByPath(path: string): number;
    /**
     *
     *
     * @param {string} dir
     * @param {number} stage
     * @returns {number}
     *
     * @memberof Index
     */
    removeDirectory(dir: string, stage: number): number;
    /**
     *
     *
     * @param {number} caps
     * @returns {number}
     *
     * @memberof Index
     */
    setCaps(caps: number): number;
    /**
     *
     *
     * @param {Strarray} pathspec
     * @param {Function} callback
     * @param {void} payload
     * @returns {Promise<number>}
     *
     * @memberof Index
     */
    updateAll(pathspec: Strarray, callback: Function, payload: void): Promise<number>;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Index
     */
    write(): number;
    /**
     *
     *
     * @returns {Promise<Oid>}
     *
     * @memberof Index
     */
    writeTree(): Promise<Oid>;
    /**
     *
     *
     * @param {Repository} repo
     * @returns {Promise<Oid>}
     *
     * @memberof Index
     */
    writeTreeTo(repo: Repository): Promise<Oid>;
    /**
     *
     *
     * @returns {IndexEntry[]}
     *
     * @memberof Index
     */
    entries(): IndexEntry[];
    /**
     *
     *
     * @param {number} atPos
     * @param {string} prefix
     * @returns {number}
     *
     * @memberof Index
     */
    findPrefix(atPos: number, prefix: string): number;
    /**
     *
     *
     * @param {number} version
     * @returns {number}
     *
     * @memberof Index
     */
    setVersion(version: number): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Index
     */
    version(): number;
}
