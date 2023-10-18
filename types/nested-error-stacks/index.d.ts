declare class NestedError extends Error {
    constructor(message?: any, nested?: Error);
}

export = NestedError;
