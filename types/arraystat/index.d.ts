// Type definitions for arraystat 1.7
// Project: https://www.npmjs.com/package/arraystat
// Definitions by: Julian Wiche <https://github.com/dajuly20>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ArrayStatType {
    sum: number;
    nb: number;
    avg: number;
    stddev: number;
    min: number;
    q1: number;
    median: number;
    q3: number;
    max: number;
    range: number;
    histogram: Histogram[];
}

interface Histogram {
    min: number;
    max: number;
    nb: number;
}

/**
 * Executes a task as soon as possible.
 * @param task Function or any object that implements `call()`.
 */
declare function arraystat(data: number[]): ArrayStatType;
export = arraystat;
