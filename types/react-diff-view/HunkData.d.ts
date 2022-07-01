import { Change } from "./Change";

// Reflection of https://github.com/ecomfe/gitdiff-parser/blob/v0.2.1/index.d.ts#L12-L19
// which is the format the library expects but do not depend on.
export interface HunkData {
    content: string;
    oldStart: number;
    newStart: number;
    oldLines: number;
    newLines: number;
    changes: Change[];
}
