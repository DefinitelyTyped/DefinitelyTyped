import { Point, PointCompatible, PointLike } from './text-buffer';

/** Represents a region in a buffer in row/column coordinates. */
export class Range {
    // Properties
    /** A Point representing the start of the Range. */
    start: Point;

    /** A Point representing the end of the Range. */
    end: Point;

    // Construction
    /** Convert any range-compatible object to a Range. */
    static fromObject(object: RangeCompatible, copy?: boolean): Range;

    /** Construct a Range object. */
    constructor(pointA?: PointCompatible, pointB?: PointCompatible);

    /** Call this with the result of Range::serialize to construct a new Range. */
    static deserialize(array: object): Range;

    /** Returns a new range with the same start and end positions. */
    copy(): Range;

    /** Returns a new range with the start and end positions negated. */
    negate(): Range;

    // Serialization and Deserialization
    /** Returns a plain javascript object representation of the Range. */
    serialize(): number[][];

    // Range Details
    /** Is the start position of this range equal to the end position? */
    isEmpty(): boolean;

    /**
     *  Returns a boolean indicating whether this range starts and ends on the
     *  same row.
     */
    isSingleLine(): boolean;

    /** Get the number of rows in this range. */
    getRowCount(): number;

    /** Returns an array of all rows in the range. */
    getRows(): number[];

    // Operations
    /**
     *  Freezes the range and its start and end point so it becomes immutable
     *  and returns itself.
     */
    freeze(): Readonly<Range>;

    // NOTE: this function doesn't actually take a range-compatible parameter.
    /** Returns a new range that contains this range and the given range. */
    union(other: RangeLike): Range;

    /**
     *  Build and return a new range by translating this range's start and end
     *  points by the given delta(s).
     */
    translate(startDelta: PointCompatible, endDelta?: PointCompatible): Range;

    /**
     *  Build and return a new range by traversing this range's start and end
     *  points by the given delta.
     */
    traverse(delta: PointCompatible): Range;

    // Comparison
    /**
     *  Compare two Ranges.
     *  Returns -1 if this range starts before the argument or contains it.
     *  Returns 0 if this range is equivalent to the argument.
     *  Returns 1 if this range starts after the argument or is contained by it.
     */
    compare(otherRange: RangeCompatible): number;

    /**
     *  Returns a Boolean indicating whether this range has the same start and
     *  end points as the given Range.
     */
    isEqual(otherRange: RangeCompatible): boolean;

    // NOTE: this function doesn't actually take a range-compatible parameter.
    /**
     *  Returns a Boolean indicating whether this range starts and ends on the
     *  same row as the argument.
     */
    coversSameRows(otherRange: RangeLike): boolean;

    // NOTE: this function doesn't actually take a range-compatible parameter.
    /** Determines whether this range intersects with the argument. */
    intersectsWith(otherRange: RangeLike, exclusive?: boolean): boolean;

    /** Returns a boolean indicating whether this range contains the given range. */
    containsRange(otherRange: RangeCompatible, exclusive?: boolean): boolean;

    /** Returns a boolean indicating whether this range contains the given point. */
    containsPoint(point: PointCompatible, exclusive?: boolean): boolean;

    /**
     *  Returns a boolean indicating whether this range intersects the given
     *  row number.
     */
    intersectsRow(row: number): boolean;

    /**
     *  Returns a boolean indicating whether this range intersects the row range
     *  indicated by the given startRow and endRow numbers.
     */
    intersectsRowRange(startRow: number, endRow: number): boolean;

    // Conversion
    /** Returns a string representation of the range. */
    toString(): string;
}

/** The types usable when constructing a range via the Range::fromObject method. */
export type RangeCompatible =
    | RangeLike
    | [PointLike, PointLike]
    | [PointLike, [number, number]]
    | [[number, number], PointLike]
    | [[number, number], [number, number]];

/** The interface that should be implemented for all "range-compatible" objects. */
export interface RangeLike {
    /** A Point representing the start of the Range. */
    start: PointLike;

    /** A Point representing the end of the Range. */
    end: PointLike;
}
