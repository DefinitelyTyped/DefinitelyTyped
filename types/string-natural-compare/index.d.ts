// Type definitions for string-natural-compare 3.0
// Project: https://github.com/nwoltman/string-natural-compare
// Definitions by: Anton Rieder <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function naturalCompare(
    a: string,
    b: string,
    options?: { caseInsensitive?: boolean; alphabet?: string },
): number;

export = naturalCompare;
