// Type definitions for ErrorStackParser v1.3.3
// Project: https://github.com/stacktracejs/error-stack-parser
// Definitions by: Eric Wendelin <https://www.eriwen.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module ErrorStackParser {
    export interface StackFrame {
        constructor(functionName: string, args: any, fileName: string, lineNumber: number, columnNumber: number, source: string): StackFrame;

        functionName?: string;
        args?: any[];
        fileName?: string;
        lineNumber?: number;
        columnNumber?: number;
        source?: string;
        toString(): string;
    }

    /**
     * Given an Error object, extract the most information from it.
     *
     * @param {Error} error object
     * @return {Array} of StackFrames
     */
    export function parse(error: Error): StackFrame[];
}
