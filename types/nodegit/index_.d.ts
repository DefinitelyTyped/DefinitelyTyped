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
    static entryIsConflict(entry: IndexEntry): boolean;
    static entryStage(entry: IndexEntry): number;
    static open(indexPath: string): Promise<Index>;

    add(sourceEntry: IndexEntry): number;
    addAll(pathspec?: Strarray | string | string[], flags?: number, callback?: Function): Promise<number>;
    addByPath(path: string): Promise<number>;
    caps(): number;
    checksum(): Oid;
    clear(): number;
    conflictAdd(ancestorEntry: IndexEntry, ourEntry: IndexEntry, theirEntry: IndexEntry): number;
    conflictCleanup(): number;
    conflictGet(path: string): Promise<IndexEntry>;
    conflictRemove(path: string): number;
    entryCount(): number;
    getByIndex(n: number): IndexEntry;
    getByPath(path: string, stage?: number): IndexEntry;
    hasConflicts(): boolean;
    owner(): Repository;
    path(): string;
    read(force: number): number;
    readTree(tree: Tree): number;
    remove(path: string, stage: number): number;
    removeAll(pathspec: Strarray | string | string[], callback?: Function): Promise<number>;
    removeByPath(path: string): Promise<number>;
    removeDirectory(dir: string, stage: number): number;
    setCaps(caps: number): number;
    updateAll(pathspec: Strarray | string | string[], callback?: Function): Promise<number>;
    write(): number;
    writeTree(): Promise<Oid>;
    writeTreeTo(repo: Repository): Promise<Oid>;
    entries(): IndexEntry[];
    findPrefix(atPos: number, prefix: string): number;
    setVersion(version: number): number;
    version(): number;
}
