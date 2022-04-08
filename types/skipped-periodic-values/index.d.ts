// Type definitions for skipped-periodic-values 1.0
// Project: https://github.com/jmeas/skipped-periodic-values.js
// Definitions by: Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Given a distance that ignores a periodic value, determine how many periodic values were skipped.
 */
declare function skippedPeriodicValues(start: number, distance: number, value: number, period: number): number;

export = skippedPeriodicValues;
