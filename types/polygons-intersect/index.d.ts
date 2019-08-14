// Type definitions for polygons-intersect 1.0
// Project: https://github.com/DudaGod/polygons-intersect#readme
// Definitions by: Konrad Klockgether <https://github.com/Nielio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Finds all points where the polygons intersect each other.
 */
declare function intersection(
    poly1: Array<{ x: number, y: number }>,
    poly2: Array<{ x: number, y: number }>
): Array<{ x: number, y: number }>;

export = intersection;
