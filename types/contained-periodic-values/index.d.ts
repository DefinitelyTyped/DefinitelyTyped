// Type definitions for contained-periodic-values 1.0
// Project: https://github.com/jmeas/contained-periodic-values.js
// Definitions by: Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Find how many values of a discrete periodic function contained in an interval.
 */
declare function containedPeriodicValues(start: number, end: number, value: number, period: number): number;

export = containedPeriodicValues;
