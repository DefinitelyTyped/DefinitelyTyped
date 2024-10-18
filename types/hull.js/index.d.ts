/**
 * Builds concave hull by a set of points.
 *
 * @param pointSet - Array of coordinates
 * @param concavity
 * @param format Points format
 */
declare function hull(pointSet: number[][] | object[], concavity?: number, format?: string[]): number[][] | object[];

export = hull;
