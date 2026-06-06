import { Vector3 } from "./Vector3";

/**
 * Class representing a 3D line segment.
 */
export class LineSegment {
    /**
     * The start point of the line segment.
     */
    from: Vector3;

    /**
     * The end point of the line segment.
     */
    to: Vector3;

    /**
     * Constructs a new line segment with the given values.
     *
     * @param [from=Vector3(0,0,0)] - The start point of the line segment.
     * @param [to=Vector3(0,0,0)] - The end point of the line segment.
     */
    constructor(from?: Vector3, to?: Vector3);

    /**
     * Sets the given values to this line segment.
     *
     * @param from - The start point of the line segment.
     * @param to - The end point of the line segment.
     * @return A reference to this line segment.
     */
    set(from: Vector3, to: Vector3): this;

    /**
     * Copies all values from the given line segment to this line segment.
     *
     * @param lineSegment - The line segment to copy.
     */
    copy(lineSegment: LineSegment): this;

    /**
     * Creates a new line segment and copies all values from this line segment.
     *
     * @return A new line segment.
     */
    clone(): LineSegment;

    /**
     * Computes the difference vector between the end and start point of this
     * line segment and stores the result in the given vector.
     *
     * @param result - The result vector.
     * @return The result vector.
     */
    delta(result: Vector3): Vector3;

    /**
     * Computes a position on the line segment according to the given t value
     * and stores the result in the given 3D vector. The t value has usually a range of
     * [0, 1] where 0 means start position and 1 the end position.
     *
     * @param t - A scalar value representing a position on the line segment.
     * @param result - The result vector.
     * @return The result vector.
     */
    at(t: number, result: Vector3): Vector3;

    /**
     * Computes the closest point on an infinite line defined by the line segment.
     * It's possible to clamp the closest point so it does not exceed the start and
     * end position of the line segment.
     *
     * @param point - A point in 3D space.
     * @param clampToLine - Indicates if the results should be clamped.
     * @param result - The result vector.
     * @return The closest point.
     */
    closestPointToPoint(point: Vector3, clampToLine: boolean, result: Vector3): Vector3;

    /**
     * Computes a scalar value which represents the closest point on an infinite line
     * defined by the line segment. It's possible to clamp this value so it does not
     * exceed the start and end position of the line segment.
     *
     * @param point - A point in 3D space.
     * @param clampToLine - Indicates if the results should be clamped.
     * @return A scalar representing the closest point.
     */
    closestPointToPointParameter(point: Vector3, clampToLine?: boolean): number;

    /**
     * Returns true if the given line segment is deep equal with this line segment.
     *
     * @param lineSegment - The line segment to test.
     * @return The result of the equality test.
     */
    equals(lineSegment: LineSegment): boolean;
}
