declare namespace segmentsIntersect {
    type Coord = [number, number];
}

/**
 * Test if the closed line segment `[firstStart, firstEnd]` intersects
 * the closed line segment `[secondStart, secondEnd]`
 * @param firstStart An end point of the first line
 * @param firstEnd An end point of the first line
 * @param secondStart An end point of the second line
 * @param secondEnd An end point of the second line
 * @returns Whether the lines intersect
 */
declare function segmentsIntersect(
    firstStart: segmentsIntersect.Coord,
    firstEnd: segmentsIntersect.Coord,
    secondStart: segmentsIntersect.Coord,
    secondEnd: segmentsIntersect.Coord,
): boolean;

export = segmentsIntersect;
