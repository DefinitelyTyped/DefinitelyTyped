declare interface Point {
    x: number;
    y: number;
}

declare interface Vector2 {
    x: number;
    y: number;
    t0: number;
    t1: number;
}

/**
 * A ray for the purposes of computing sight and collision
 * Given points A[x,y] and B[x,y]
 *
 * Slope-Intercept form:
 * y = a + bx
 * y = A.y + ((B.y - A.Y) / (B.x - A.x))x
 *
 * Parametric form:
 * R(t) = (1-t)A + tB
 */
declare class Ray {
    constructor(A: Point, B: Point);

    // Store points
    public A: Point;
    public B: Point;

    // Origins
    public y0: number;
    public x0: number;

    // Slopes
    public dx: number;
    public dy: number;

    /**
     * The slope of the ray, dy over dx
     * @type {number}
     */
    public slope: number;

    /**
     * The normalized angle of the ray in radians on the range (-PI, PI)
     * @type {number}
     */
    public angle: number;

    /**
     * The distance of the ray
     * @type {number}
     */
    public distance: number;

    /**
     * Return the value of the angle normalized to the range (0, 2*PI)
     * This is useful for testing whether an angle falls between two others
     * @type {number}
     */
    public readonly normAngle: number;

    public static fromAngle(x: number, y: number, radians: number, distance: number): Ray;

    public static fromArrays(A: [], B: []): Ray;

    /**
     * Project the Array by some proportion of it's initial distance.
     * Return the coordinates of that point along the path.
     * @param {number} t    The distance along the Ray
     * @return {Object}     The coordinates of the projected point
     */
    public project(t: number): Point;

    public shiftAngle(angleOffset: number, distance: number): Ray;

    /**
     * Find the point I[x,y] and distance t* on ray R(t) which intersects another ray
     * http://paulbourke.net/geometry/pointlineplane/
     */
    public intersectSegment(coords: [number]): Vector2;

    public static _getIntersection(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number,
        x4: number,
        y4: number,
    ): Vector2;
}
