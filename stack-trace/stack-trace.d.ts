// Type definitions for node-stack-trace
// Project: https://github.com/felixge/node-stack-trace
// Definitions by: Exceptionless <https://github.com/exceptionless>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export interface StackFrame {
    getTypeName(): string;
    getFunctionName(): string;
    getMethodName(): string;
    getFileName(): string;
    getTypeName(): string;
    getLineNumber(): number;
    getColumnNumber(): number;
    isNative(): boolean;
}

declare export function get(belowFn?: () => void): StackFrame[];
declare export function parse(err: Error): StackFrame[];
