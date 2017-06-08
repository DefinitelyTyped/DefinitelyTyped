import { Tree } from './tree';
import { Oid } from './oid';
import { Blob } from './blob';

export namespace TreeEntry {
    const enum FILEMODE {
        UNREADABLE = 0,
        TREE = 16384,
        BLOB = 33188,
        EXECUTABLE = 33261,
        LINK = 40960,
        COMMIT = 57344
    }
}

export class TreeEntry {
    isFile(): Boolean;
    isTree(): Boolean;
    isDirectory(): Boolean;
    isBlob(): Boolean;
    sha(): string;
    getTree(): Promise<Tree>;
    getBlob(): Promise<Blob>;
    path(): string;
    toString(): string;
    attr: number;
    oid: Oid;
    filenameLen: number;
    filename: string;
}
