// Type definitions for nested-error-stacks 2.1
// Project: https://github.com/mdlavin/nested-error-stacks
// Definitions by: Wouter van Heeswijk <https://github.com/woutervh->
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class NestedError extends Error {
    constructor(message?: any, nested?: Error);
}

export = NestedError;
