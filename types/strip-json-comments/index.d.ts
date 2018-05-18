// Type definitions for strip-json-comments
// Project: https://github.com/sindresorhus/strip-json-comments
// Definitions by: Dylan R. E. Moonfire <https://github.com/dmoonfire>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8


interface StripJsonOptions {
    whitespace?: boolean;
}

declare function stripJsonComments(input: string, opts?: StripJsonOptions): string;
declare namespace stripJsonComments { }
export = stripJsonComments;
