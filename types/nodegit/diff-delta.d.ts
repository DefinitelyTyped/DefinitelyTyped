import { DiffFile } from './diff-file';

export class DiffDelta {
    /**
     *
     *
     * @type {number}
     * @memberof DiffDelta
     */
    status: number;
    /**
     *
     *
     * @type {number}
     * @memberof DiffDelta
     */
    flags: number;
    /**
     *
     *
     * @type {number}
     * @memberof DiffDelta
     */
    similarity: number;
    /**
     *
     *
     * @type {number}
     * @memberof DiffDelta
     */
    nfiles: number;
    /**
     *
     *
     * @type {DiffFile}
     * @memberof DiffDelta
     */
    oldFile: DiffFile;
    /**
     *
     *
     * @type {DiffFile}
     * @memberof DiffDelta
     */
    newFile: DiffFile;
}
