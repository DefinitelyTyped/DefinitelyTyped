import { DiffFile } from './diff-file';

export class DiffDelta {
    status: number;
    flags: number;
    similarity: number;
    nfiles: number;
    oldFile: DiffFile;
    newFile: DiffFile;
}
