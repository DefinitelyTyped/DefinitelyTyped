// Type definitions for pretty 2.0
// Project: https://github.com/jonschlinkert/pretty
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

export interface PrettyOptions {
    ocd: boolean;
}

export function pretty(str: string, options?: PrettyOptions): string;
