// Type definitions for ot 0.0
// Project: https://github.com/Operational-Transformation/ot.js
// Definitions by: Christian Alfoni <https://github.com/christianalfoni>
//                 Ives van Hoorne <https://github.com/CompuIves>
//                 Michaël De Boey <https://github.com/MichaelDeBoey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Range {
    constructor(anchor: number, head: number);
    transform(operation: TextOperation): Range;
    anchor: number;
    head: number;
}

export class Selection {
    createCursor(position: number): Selection;

    static Range: Range;
}

export type SerializedTextOperation = Array<string | number>;

export class TextOperation {
    delete(length: number): TextOperation;
    insert(str: string): TextOperation;
    retain(length: number): TextOperation;

    baseLength: number;
    targetLength: number;

    apply(code: string): string;
    compose(operation: TextOperation): TextOperation;

    static transform(left: TextOperation, right: TextOperation): TextOperation;
    static isRetain(operation: TextOperation): boolean;
    static isInsert(operation: TextOperation): boolean;
    static isDelete(operation: TextOperation): boolean;

    static fromJSON(operation: SerializedTextOperation): TextOperation;
    toJSON(): SerializedTextOperation;
}

export {};
