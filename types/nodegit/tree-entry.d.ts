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
        COMMIT = 57344
    }
}

export class TreeEntry {
    /**
     *
     *
     * @returns {TreeEntry.FILEMODE}
     *
     * @memberof TreeEntry
     */
    filemode(): TreeEntry.FILEMODE;
    /**
     *
     *
     * @returns {TreeEntry.FILEMODE}
     *
     * @memberof TreeEntry
     */
    filemodeRaw(): TreeEntry.FILEMODE;
    /**
     *
     *
     *
     * @memberof TreeEntry
     */
    free(): void;
    /**
     *
     *
     * @returns {Promise<Blob>}
     *
     * @memberof TreeEntry
     */
    getBlob(): Promise<Blob>;
    /**
     *
     *
     * @returns {Promise<Tree>}
     *
     * @memberof TreeEntry
     */
    getTree(): Promise<Tree>;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof TreeEntry
     */
    id(): Oid;
    /**
     *
     *
     * @returns {boolean}
     *
     * @memberof TreeEntry
     */
    isBlob(): boolean;
    /**
     *
     *
     * @returns {boolean}
     *
     * @memberof TreeEntry
     */
    isFile(): boolean;
    /**
     *
     *
     * @returns {boolean}
     *
     * @memberof TreeEntry
     */
    isTree(): boolean;
    /**
     *
     *
     * @returns {boolean}
     *
     * @memberof TreeEntry
     */
    isDirectory(): boolean;
    /**
     *
     *
     * @returns {boolean}
     *
     * @memberof TreeEntry
     */
    isSubmodule(): boolean;
    /**
     * Retrieve the SHA for this TreeEntry.
     *
     * @returns {string}
     *
     * @memberof TreeEntry
     */
    sha(): string;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof TreeEntry
     */
    name(): string;
    /**
     * Retrieve the SHA for this TreeEntry. Alias for sha
     *
     * @returns {string}
     *
     * @memberof TreeEntry
     */
    oid(): string;
    /**
     * Returns the path for this entry.
     *
     * @returns {string}
     *
     * @memberof TreeEntry
     */
    path(): string;
    /**
     * Alias for path
     *
     * @returns {string}
     *
     * @memberof TreeEntry
     */
    toString(): string;
    /**
     *
     *
     * @param {Repository} repo
     * @returns {Object}
     *
     * @memberof TreeEntry
     */
    toObject(repo: Repository): Object;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof TreeEntry
     */
    type(): number;
}
