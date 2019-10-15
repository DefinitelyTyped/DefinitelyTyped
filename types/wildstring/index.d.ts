// Type definitions for wildstring 1.0
// Project: https://github.com/deltreey/wildstring#readme
// Definitions by: Ciarán Ingle <https://github.com/inglec-arista>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const wildstring: {
    wildcard: string;

    caseSensitive: boolean;

    match: (pattern: string, string: string) => boolean;

    replace: (pattern: string, strings: string | ReadonlyArray<string>) => string;
};

export {};
export = wildstring;
