/**
 * Returns the pole of inaccessibility for a polygon — the most distant internal
 * point from the polygon outline — as a `[x, y]` coordinate pair. The
 * `distance` property on the returned array holds the distance from the pole to
 * the nearest polygon edge (the "pole radius").
 *
 * @param polygon - Polygon rings: outer ring first, holes (if any) following.
 *   Each ring is an array of `[x, y]` coordinate pairs.
 * @param precision - Precision of the result in the same units as the polygon
 *   coordinates. Defaults to `1.0`.
 * @param debug - When `true`, logs progress to the console.
 * @example
 * const [x, y] = polylabel(polygon, 1.0);
 */
declare function polylabel(
    polygon: Array<Array<[number, number]>>,
    precision?: number,
    debug?: boolean,
): [number, number] & { distance: number };
declare namespace polylabel {}
export default polylabel;
