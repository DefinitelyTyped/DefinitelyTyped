/**
 * Solves the following problem:
 *  Given a list of points and the distances between each pair of points,
 *  what is the shortest possible route that visits each point exactly
 *  once and returns to the origin point?
 *
 * @param points The points that the path will have to visit.
 * @param [temp_coeff=0.999] changes the convergence speed of the algorithm: the closer to 1, the slower the algorithm and the better the solutions.
 * @param [callback=] An optional callback to be called after each iteration.
 *
 * @returns An array of indexes in the original array. Indicates in which order the different points are visited.
 *
 * @example
 * var points = [
 *       new salesman.Point(2,3)
 *       //other points
 *     ];
 * var solution = salesman.solve(points);
 * var ordered_points = solution.map(i => points[i]);
 * // ordered_points now contains the points, in the order they ought to be visited.
 */
export function solve(points: Point[], temp_coeff?: number, callback?: (order: number[]) => void): number[];

export class Point {
    /**
     * Represents a point in two dimensions.
     * @param x abscissa
     * @param y ordinate
     */
    constructor(x: number, y: number);
    x: number;
    y: number;
}
