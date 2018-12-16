// Type definitions for standard-error 1.1
// Project: https://github.com/moll/js-standard-error
// Definitions by: Labat Robin <https://github.com/roblabat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.2

export = StandardError;

declare class StandardError extends Error {
    [key: string]: any;

    constructor(message: string, props?: any);
    constructor(props: any);
}
