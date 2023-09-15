// Type definitions for lowercase-object-keys 1.0
// Project: https://github.com/pilmee/lowercase-object-keys#readme
// Definitions by: Rajas Paranjpe <https://github.com/ChocolateLoverRaj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

type LowercaseObjectKeysResult<T extends object> = {
    [K in keyof T as K extends string ? Lowercase<K> : K]: T[K];
};

declare function lowercaseObjectKeys<T extends object>(object: T): LowercaseObjectKeysResult<T>;

export = lowercaseObjectKeys;
