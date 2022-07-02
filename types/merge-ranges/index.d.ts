// Type definitions for merge-ranges 1.0
// Project: https://github.com/jwarby/merge-ranges#readme
// Definitions by: Javier García Nieto <https://github.com/BERENGENITA>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function mergeRanges(ranges: Array<[Date, Date]>): Array<[Date, Date]>;
declare function mergeRanges(ranges: Array<[number, number]>): Array<[number, number]>;
export = mergeRanges;
