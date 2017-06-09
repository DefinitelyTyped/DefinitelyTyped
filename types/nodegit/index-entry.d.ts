import { Oid } from './oid';

export interface IndexTime {
    /**
     *
     *
     * @type {number}
     * @memberof IndexTime
     */
    seconds: number;
    /**
     *
     *
     * @type {number}
     * @memberof IndexTime
     */
    nanoseconds: number;
}

export class IndexEntry {
    /**
     *
     *
     * @type {IndexTime}
     * @memberof IndexEntry
     */
    ctime: IndexTime;
    /**
     *
     *
     * @type {IndexTime}
     * @memberof IndexEntry
     */
    mtime: IndexTime;
    /**
     *
     *
     * @type {number}
     * @memberof IndexEntry
     */
    dev: number;
    /**
     *
     *
     * @type {number}
     * @memberof IndexEntry
     */
    ino: number;
    /**
     *
     *
     * @type {number}
     * @memberof IndexEntry
     */
    mode: number;
    /**
     *
     *
     * @type {number}
     * @memberof IndexEntry
     */
    uid: number;
    /**
     *
     *
     * @type {number}
     * @memberof IndexEntry
     */
    gid: number;
    /**
     *
     *
     * @type {number}
     * @memberof IndexEntry
     */
    fileSize: number;
    /**
     *
     *
     * @type {Oid}
     * @memberof IndexEntry
     */
    id: Oid;
    /**
     *
     *
     * @type {number}
     * @memberof IndexEntry
     */
    flags: number;
    /**
     *
     *
     * @type {number}
     * @memberof IndexEntry
     */
    flagsExtended: number;
    /**
     *
     *
     * @type {string}
     * @memberof IndexEntry
     */
    path: string;
}
