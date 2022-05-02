// Type definitions for robust-segment-intersect 1.0
// Project: https://github.com/mikolalysenko/robust-segment-intersect
// Definitions by: masx200 <https://github.com/masx200>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
