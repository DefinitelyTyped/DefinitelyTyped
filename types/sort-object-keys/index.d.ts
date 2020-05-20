// Type definitions for sort-object-keys 1.1
// Project: https://github.com/keithamus/sort-object-keys#readme
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = sortObjectByKeyNameList;

declare function sortObjectByKeyNameList<T>(
    object: T,
    sortWith?: ReadonlyArray<keyof T> | ((a: keyof T, b: keyof T) => number)
): T;
