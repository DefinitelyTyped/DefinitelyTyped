import StackTrace from "./StackTrace.js";

declare class NodeError extends Error {
    stackTrace: StackTrace | null;

    constructor(message?: string, stackTrace?: StackTrace | null);
}

export default NodeError;
