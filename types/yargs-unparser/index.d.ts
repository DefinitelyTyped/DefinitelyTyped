// Type definitions for yargs-unparser 2.0
// Project: https://github.com/yargs/yargs-unparser#readme
// Definitions by: Anton Golub <https://github.com/antongolub>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export type Argv = string[];
export interface Arguments {
    _: string[];
    [argName: string]: any;
}

export interface UnparserOptions {
    alias?: Record<string, string[]>;
    default?: Record<string, string>;
    command?: string;
}

export interface Unparser {
    (args: Arguments, opts?: UnparserOptions): Argv;
}

declare var yargsUnparser: Unparser;
export { yargsUnparser as default };
