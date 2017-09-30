// Type definitions for dargs 5.1
// Project: https://github.com/sindresorhus/dargs#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export = dargs;

declare function dargs(input: object, options?: dargs.Options): string[];

declare namespace dargs {
    interface Options {
        excludes?: ReadonlyArray<string | RegExp>;
        includes?: ReadonlyArray<string | RegExp>;
        aliases?: { [key: string]: string };
        useEquals?: boolean;
        ignoreFalse?: boolean;
        allowCamelCase?: boolean;
    }
}
