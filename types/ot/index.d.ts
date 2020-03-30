// Type definitions for ot 0.0
// Project: https://github.com/Operational-Transformation/ot.js
// Definitions by: Ives van Hoorne <https://github.com/CompuIves>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
