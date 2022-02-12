// Type definitions for snowflake-regex 1.0
// Project: https://github.com/Commandtechno/snowflake
// Definitions by: Ryan Arora <https://github.com/ryanArora>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface GenerateOptions {
    exact?: boolean;
    global?: boolean;
    multiline?: boolean;
}
export function generate(options?: GenerateOptions): RegExp;

declare const regex: RegExp;
export default regex;
