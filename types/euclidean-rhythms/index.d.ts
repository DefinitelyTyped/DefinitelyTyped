// Type definitions for euclidean-rhythms 2.0
// Project: https://github.com/mkontogiannis/euclidean-rhythms
// Definitions by: Thomas Stringer <https://github.com/tom-stringer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Generate Euclidean rhythm pattern for the given pulses and steps.
 * @param pulses number of pulses to distribute
 * @param steps number of total steps
 */
export function getPattern(pulses: number, steps: number): number[];

export as namespace euclideanRhythms;
