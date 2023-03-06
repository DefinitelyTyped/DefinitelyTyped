// Type definitions for @ngard/tiny-difference 1.0
// Project: https://github.com/NickGard/tiny-difference
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const tinyDifference: {
    difference<T = unknown>(first: T[], ...rest: T[][]): T[];
};

export = tinyDifference;
