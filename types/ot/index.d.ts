// Type definitions for ot 0.0
// Project: https://github.com/Operational-Transformation/ot.js
// Definitions by: Christian Alfoni <https://github.com/christianalfoni>
//                 Ives van Hoorne <https://github.com/CompuIves>
//                 Michaël De Boey <https://github.com/MichaelDeBoey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Selection {
    ranges: Selection.Range[];

    equals(other: Selection): boolean;

    static createCursor(position: number): Selection;
}

export namespace Selection {
    class Range {
        anchor: number;
        head: number;

        constructor(anchor: number, head: number);

        equals(other: Range): boolean;
        isEmpty(): boolean;
        transform(operation: TextOperation): Range;

        static fromJSON(object: { anchor: number; head: number; }): Range;
    }
}

export type SerializedTextOperation = Array<string | number>;

export class TextOperation {
    baseLength: number;
    ops: SerializedTextOperation;
    targetLength: number;

    apply(code: string): string;
    compose(operation: TextOperation): TextOperation;
    delete(length: number): TextOperation;
    insert(str: string): TextOperation;
    retain(length: number): TextOperation;
    toJSON(): SerializedTextOperation;

    static fromJSON(operation: SerializedTextOperation): TextOperation;
    static isDelete(operation: string | number): boolean;
    static isInsert(operation: string | number): boolean;
    static isRetain(operation: string | number): boolean;
    static transform(left: TextOperation, right: TextOperation): TextOperation;
}

export const version: string;
