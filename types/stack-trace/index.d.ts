// Type definitions for node-stack-trace
// Project: https://github.com/felixge/node-stack-trace
// Definitions by: Exceptionless <https://github.com/exceptionless>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export interface StackFrame {
    getTypeName(): string;
    getFunctionName(): string;
    getMethodName(): string;
    getFileName(): string;
    getLineNumber(): number;
    getColumnNumber(): number;
    isNative(): boolean;
}

export declare function get(belowFn?: () => void): StackFrame[];
export declare function parse(err: Error): StackFrame[];
