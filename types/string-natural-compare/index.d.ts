// Type definitions for string-natural-compare 3.0
// Project: https://github.com/nwoltman/string-natural-compare
// Definitions by: Anton Rieder <https://github.com/aried3r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function naturalCompare(
    a: string,
    b: string,
    options?: { caseInsensitive?: boolean | undefined; alphabet?: string | undefined },
): number;

export = naturalCompare;
