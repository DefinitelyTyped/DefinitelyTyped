import { HunkData } from './HunkData';

// Reflection of https://github.com/ecomfe/gitdiff-parser/blob/v0.2.1/index.d.ts#L21-L34
// which is the format the library expects but do not depend on.
export interface File {
    hunks: HunkData[];
    oldEndingNewLine: boolean;
    newEndingNewLine: boolean;
    oldMode: string;
    newMode: string;
    similarity?: number;
    oldRevision: string;
    newRevision: string;
    oldPath: string;
    newPath: string;
    isBinary?: boolean;
    type: 'add' | 'delete' | 'modify';
}
