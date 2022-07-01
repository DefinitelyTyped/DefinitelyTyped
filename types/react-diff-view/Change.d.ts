// Reflection of https://github.com/ecomfe/gitdiff-parser/blob/v0.2.1/index.d.ts#L1-L10
// which the library expects to use, but do not depend on.
export interface Change {
    content: string;
    type: 'insert' | 'delete' | 'normal';
    isInsert?: boolean;
    isDelete?: boolean;
    isNormal?: boolean;
    lineNumber?: number;
    oldLineNumber?: number;
    newLineNumber?: number;
}
