import { DiffBinaryFile } from './diff-binary-file';

export namespace DiffBinary {
    enum DIFF_BINARY {
        NONE = 0,
        LITERAL = 1,
        DELTA = 2
    }
}

export class DiffBinary {
    oldFile: DiffBinaryFile;
    newFile: DiffBinaryFile;
}
