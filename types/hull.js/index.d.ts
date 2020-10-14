// Type definitions for hull.js 1.0
// Project: https://github.com/AndriiHeonia/hull
// Definitions by: Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Builds concave hull by a set of points.
 *
 * @param pointSet - Array of coordinates
 * @param concavity
 * @param format Points format
 */
declare function hull(
    pointSet: number[][] | object[],
    concavity?: number,
    format?: string[]
): number[];

export = hull;
