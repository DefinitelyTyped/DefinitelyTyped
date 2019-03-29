// Type definitions for camelcase-keys 4.1
// Project: https://github.com/sindresorhus/camelcase-keys#readme
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export = camelcaseKeys;
declare function camelcaseKeys(input: any, options?: { exclude?: string[] | RegExp[], deep?: boolean }): any;

declare namespace camelcaseKeys {
    interface Options {
        deep?: boolean;
        exclude?: Array<string | RegExp>;
    }
}
