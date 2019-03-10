export declare class DisconnectedError extends Error {
    constructor(readyState: number);
    readyState: number;
}
export declare class UnexpectedActionError extends Error {
}
export declare class DuplicateCorrelationError extends Error {
}
export declare class NoAckError extends Error {
}
export declare class NotImplementedError extends Error {
}
export declare class NotSupportedError extends Error {
}
export declare class RuntimeError extends Error {
    constructor(data: any);
}
