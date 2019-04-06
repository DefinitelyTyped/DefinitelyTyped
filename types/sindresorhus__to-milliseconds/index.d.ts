// Type definitions for @sindresorhus/to-milliseconds 1.0
// Project: https://github.com/sindresorhus/to-milliseconds
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = toMilliseconds;

declare function toMilliseconds(input: toMilliseconds.TimeSpec): number;

declare namespace toMilliseconds {
    interface TimeSpec {
        days?: number;
        hours?: number;
        minutes?: number;
        seconds?: number;
        milliseconds?: number;
        microseconds?: number;
        nanoseconds?: number;
    }
}
