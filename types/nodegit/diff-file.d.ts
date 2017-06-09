import { Oid } from './oid';

export class DiffFile {
    /**
     * Returns the file's flags
     *
     * @returns {number}
     *
     * @memberof DiffFile
     */
    flags(): number;
    /**
     * Returns the file's Oid
     *
     * @returns {Oid}
     *
     * @memberof DiffFile
     */
    id(): Oid;
    /**
     * Returns the file's mode
     *
     * @returns {number}
     *
     * @memberof DiffFile
     */
    mode(): number;
    /**
     * Returns the file's path
     *
     * @returns {string}
     *
     * @memberof DiffFile
     */
    path(): string;
    /**
     * Returns the file's size
     *
     * @returns {number}
     *
     * @memberof DiffFile
     */
    size(): number;
}
