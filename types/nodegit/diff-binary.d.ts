import { DiffBinaryFile } from './diff-binary-file';

export namespace DiffBinary {
    const enum DIFF_BINARY {
        NONE = 0,
        LITERAL = 1,
        DELTA = 2
    }
}

export class DiffBinary {
    /**
     *
     *
     * @type {DiffBinaryFile}
     * @memberof DiffBinary
     */
    oldFile: DiffBinaryFile;
    /**
     *
     *
     * @type {DiffBinaryFile}
     * @memberof DiffBinary
     */
    newFile: DiffBinaryFile;
    /**
     *
     *
     * @type {DiffBinary.DIFF_BINARY}
     * @memberof DiffBinary
     */
    containsData: DiffBinary.DIFF_BINARY;
}
