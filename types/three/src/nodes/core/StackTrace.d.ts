declare class StackTrace {
    readonly isStackTrace: true;

    stack: Array<{ fn: string; file: string; line: number; column: number }>;

    constructor(stackMessage?: Error | string | null);
}

export default StackTrace;
