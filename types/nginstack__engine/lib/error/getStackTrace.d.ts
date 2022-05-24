export = getStackTrace;
declare function getStackTrace(error: Error): StackTraceElement[];
declare namespace getStackTrace {
    export { StackTraceElement };
}
interface StackTraceElement {
    functionName: string;
    fileName: string;
    lineNumber: number;
    columnNumber: number;
    tokenPosition: number;
    tokenLength: number;
    isNativeFunction: boolean;
    source: string;
}
