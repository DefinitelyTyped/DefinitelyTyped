/**
 * Find self-intersections of the polygon.
 *
 * @param points Array of the [x, y] points making up the polygon.
 * @param findAllLines Find all the intersection lines.
 * @return Returns `true` if a self-intersection has been found.
 */
export function findSelfIntersections(points: readonly number[][], findAllLines?: boolean): boolean;

/**
 * Get the self-intersection lines.
 */
export function getSelfIntersectLines(): number[][];
