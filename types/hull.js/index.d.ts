// Type definitions for hull.js 1.0
// Project: https://github.com/AndriiHeonia/hull
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Builds concave hull by a set of points.
 *
 * @param pointSet - Array of coordinates
 * @param concavity
 * @param format Points format
 */
declare function hull(pointSet: number[][] | object[], concavity?: number, format?: string[]): number[][] | object[];

export = hull;
