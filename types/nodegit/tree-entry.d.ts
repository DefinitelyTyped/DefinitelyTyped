import { Tree } from './tree';
import { Oid } from './oid';
import { Blob } from './blob';
import { Repository } from './repository';

export namespace TreeEntry {
    const enum FILEMODE {
        UNREADABLE = 0,
        TREE = 16384,
        BLOB = 33188,
        EXECUTABLE = 33261,
        LINK = 40960,
        COMMIT = 57344,
    }
}

export class TreeEntry {
    filemode(): TreeEntry.FILEMODE;
    filemodeRaw(): TreeEntry.FILEMODE;
    free(): void;
    getBlob(): Promise<Blob>;
    getTree(): Promise<Tree>;
    id(): Oid;
    isBlob(): boolean;
    isFile(): boolean;
    isTree(): boolean;
    isDirectory(): boolean;
    isSubmodule(): boolean;
    /**
     * Retrieve the SHA for this TreeEntry.
     */
    sha(): string;
    name(): string;
    /**
     * Retrieve the SHA for this TreeEntry. Alias for sha
     */
    oid(): string;
    /**
     * Returns the path for this entry.
     */
    path(): string;
    /**
     * Alias for path
     */
    toString(): string;
    toObject(repo: Repository): Object;
    type(): number;
}
