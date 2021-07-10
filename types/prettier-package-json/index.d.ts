// Type definitions for prettier-package-json 2.1
// Project: https://github.com/cameronhunter/prettier-package-json
// Definitions by: Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export type CompareFn = (a: string, b: string) => number;

export interface Options {
    tabWidth?: number | undefined;
    useTabs?: boolean | undefined;
    expandUsers?: boolean | undefined;
    keyOrder?: ReadonlyArray<string> | CompareFn | undefined;
}

export function format(json: object, options?: Options): string;

export function check(json: string | object, options?: Options): boolean;
