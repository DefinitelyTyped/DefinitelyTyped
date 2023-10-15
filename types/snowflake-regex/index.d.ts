// Type definitions for snowflake-regex 1.0
// Project: https://github.com/Commandtechno/snowflake
// Definitions by: Ryan Arora <https://github.com/ryanArora>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface GenerateOptions {
    exact?: boolean;
    global?: boolean;
    multiline?: boolean;
}

declare const _exports: RegExp & { generate(options?: GenerateOptions): RegExp };
export = _exports;
