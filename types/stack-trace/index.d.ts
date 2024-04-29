export interface StackFrame {
    getTypeName(): string;
    getFunctionName(): string;
    getMethodName(): string;
    getFileName(): string;
    getLineNumber(): number;
    getColumnNumber(): number;
    isNative(): boolean;
    isConstructor(): boolean;
}

export declare function get(belowFn?: () => void): StackFrame[];
export declare function parse(err: Error): StackFrame[];
