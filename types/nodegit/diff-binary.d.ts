import { DiffBinaryFile } from './diff-binary-file';

export namespace DiffBinary {
    const enum DIFF_BINARY {
        NONE = 0,
        LITERAL = 1,
        DELTA = 2,
    }
}

export class DiffBinary {
    oldFile: DiffBinaryFile;
    newFile: DiffBinaryFile;
    containsData: DiffBinary.DIFF_BINARY;
}
