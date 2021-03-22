/** Represents a point in a buffer in row/column coordinates. */
export class Point {
    // Properties
    /** A zero-indexed number representing the row of the Point. */
    row: number;

    /** A zero-indexed number representing the column of the Point. */
    column: number;

    // Construction
    /**
     *  Create a Point from an array containing two numbers representing the
     *  row and column.
     */
    static fromObject(object: PointCompatible, copy?: boolean): Point;

    /** Construct a Point object */
    constructor(row?: number, column?: number);

    /** Returns a new Point with the same row and column. */
    copy(): Point;

    /** Returns a new Point with the row and column negated. */
    negate(): Point;

    // Comparison
    /** Returns the given Point that is earlier in the buffer. */
    static min(point1: PointCompatible, point2: PointCompatible): Point;

    /**
     *  Compare another Point to this Point instance.
     *  Returns -1 if this point precedes the argument.
     *  Returns 0 if this point is equivalent to the argument.
     *  Returns 1 if this point follows the argument.
     */
    compare(other: PointCompatible): number;

    /**
     *  Returns a boolean indicating whether this point has the same row and
     *  column as the given Point.
     */
    isEqual(other: PointCompatible): boolean;

    /** Returns a Boolean indicating whether this point precedes the given Point. */
    isLessThan(other: PointCompatible): boolean;

    /**
     *  Returns a Boolean indicating whether this point precedes or is equal to
     *  the given Point.
     */
    isLessThanOrEqual(other: PointCompatible): boolean;

    /** Returns a Boolean indicating whether this point follows the given Point. */
    isGreaterThan(other: PointCompatible): boolean;

    /**
     *  Returns a Boolean indicating whether this point follows or is equal to
     *  the given Point.
     */
    isGreaterThanOrEqual(other: PointCompatible): boolean;

    // Operations
    /** Makes this point immutable and returns itself. */
    freeze(): Readonly<Point>;

    /**
     *  Build and return a new point by adding the rows and columns of the
     *  given point.
     */
    translate(other: PointCompatible): Point;

    /**
     *  Build and return a new Point by traversing the rows and columns
     *  specified by the given point.
     */
    traverse(other: PointCompatible): Point;

    /** Returns an array of this point's row and column. */
    toArray(): [number, number];

    /** Returns an array of this point's row and column. */
    serialize(): [number, number];

    /** Returns a string representation of the point. */
    toString(): string;
}

/** The interface that should be implemented for all "point-compatible" objects. */
export interface PointLike {
    /** A zero-indexed number representing the row of the Point. */
    row: number;

    /** A zero-indexed number representing the column of the Point. */
    column: number;
}

/** The types usable when constructing a point via the Point::fromObject method. */
export type PointCompatible = PointLike | [number, number];
