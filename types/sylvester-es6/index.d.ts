// Type definitions for sylvester-es6 0.0.2
// Project: https://github.com/pithumke/sylvester-es6
// Definitions by: briwa <https://github.com/briwa>
//                 Stephane Alie <https://github.com/StephaneAlie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// === Sylvester ===
// Vector and Matrix mathematics modules for JavaScript
// Copyright (c) 2007 James Coglan
// Extended version of the library is courtesy of @pithumke (c) 2016

declare module 'sylvester-es6' {
    export class Vector {
        /**
         * Constructor function.
         *
         * @param {Vector|ReadonlyArray<number} elements The elements.
         */
        constructor(elements: Vector|ReadonlyArray<number>);

        static i: Vector;
        static j: Vector;
        static k: Vector;

        /**
         * Random vector of size n.
         *
         * @param {number} n The vector size.
         */
        static Random(n: number): Vector;

        /**
         * Vector filled with zeros.
         *
         * @param {number} n The vector size.
         */
        static Zero(n: number): Vector;

        /**
         * Gets an array containing the vector's elements.
         */
        elements: ReadonlyArray<number>;

        /**
         * Returns element i of the vector.
         */
        e(i: number): number;

        /**
         * Returns the number of elements the vector has.
         */
        dimensions(): number;

        /**
         * Returns the modulus ('length') of the vector.
         */
        modulus(): number;

        /**
         * Returns true if the vector is equal to the argument.
         *
         * @param {Vector|ReadonlyArray<number>} vector The vector to compare equality.
         */
        eql(vector: Vector|ReadonlyArray<number>): boolean;

        /**
         * Returns a copy of the vector.
         */
        dup(): Vector;

        /**
         * Maps the vector to another vector according to the given function.
         *
         * @param {Function} fn The function to apply to each element (x, i) => {}.
         */
        map(fn: (x: number, i: number) => any): Vector;

        /**
         * Calls the iterator for each element of the vector in turn.
         *
         * @param {Function} fn The function to apply to each element (x, i) => {}.
         */
        each(fn: (x: number, i: number) => any): void;

        /**
         * Returns a new vector created by normalizing the receiver.
         */
        toUnitVector(): Vector;

        /**
         * Returns the angle between the vector and the argument (also a vector).
         *
         * @param {Vector} vector The other vector to calculate the angle.
         */
        angleFrom(vector: Vector): number;

        /**
         * Returns true if the vector is parallel to the argument.
         *
         * @param {Vector} vector The other vector.
         */
        isParallelTo(vector: Vector): boolean;

        /**
         * Returns true if the vector is antiparallel to the argument.
         *
         * @param {Vector} vector The other vector.
         */
        isAntiparallelTo(vector: Vector): boolean;

        /**
         * Returns true iff the vector is perpendicular to the argument.
         *
         * @param {Vector} vector The other vector.
         */
        isPerpendicularTo(vector: Vector): boolean;

        /**
         * Returns the result of adding the argument to the vector.
         *
         * @param {Vector|ReadonlyArray<number>} vector The vector.
         */
        add(vector: Vector|ReadonlyArray<number>): Vector;

        /**
         * Returns the result of subtracting the argument from the vector.
         *
         * @param {Vector|ReadonlyArray<number>} vector The vector.
         */
        subtract(vector: Vector|ReadonlyArray<number>): Vector;

        /**
         * Returns the result of multiplying the elements of the vector by the argument.
         *
         * @param {number} k The value by which to multiply the vector.
         */
        multiply(k: number): Vector;

        /**
         * Returns the result of multiplying the elements of the vector by the argument (Alias for multiply(k)).
         *
         * @param {number} k The value by which to multiply the vector.
         */
        x(k: number): Vector;

        /**
         * Returns the scalar product of the vector with the argument. Both vectors must have equal dimensionality.
         *
         * @param: {Vector|ReadonlyArray<number>} vector The other vector.
         */
        dot(vector: Vector|ReadonlyArray<number>): number;

        /**
         * Returns the vector product of the vector with the argument. Both vectors must have dimensionality 3.
         *
         * @param {Vector|ReadonlyArray<number>} vector The other vector.
         */
        cross(vector: Vector|ReadonlyArray<number>): Vector;

        /**
         * Returns the (absolute) largest element of the vector.
         */
        max(): number;

        /**
         * Returns the index of the first match found.
         *
         * @param {number} x The value.
         */
        indexOf(x: number): number;

        /**
         * Returns a diagonal matrix with the vector's elements as its diagonal elements.
         */
        toDiagonalMatrix(): Matrix;

        /**
         * Returns the result of rounding the elements of the vector.
         */
        round(): Vector;

        /**
         * Returns a copy of the vector with elements set to the given value if they differ from
         * it by less than Sylvester.precision.
         *
         * @param {number} x The value to snap to.
         */
        snapTo(x: number): Vector;

        /**
         * Returns the vector's distance from the argument, when considered as a point in space.
         *
         * @param {Vector|Line|Plane} obj The object to calculate the distance.
         */
        distanceFrom(obj: Vector|Line|Plane): number;

        /**
         * Returns true if the vector is point on the given line.
         *
         * @param {Line} line The line.
         */
        liesOn(line: Line): boolean;

        /**
         * Return true if the vector is a point in the given plane.
         *
         * @param {Plane} plane The plane.
         */
        liesIn(plane: Plane): boolean;

        /**
         * Rotates the vector about the given object. The object should be a point if the vector is 2D,
         * and a line if it is 3D. Be careful with line directions!
         *
         * @param {number} t The angle in radians.
         * @param {Vector|Line} obj The rotation axis.
         */
        rotate(t: number, obj: Vector|Line): Vector;

        /**
         * Returns the result of reflecting the point in the given point, line or plane.
         *
         * @param {Vector|Line|Plane} obj The object.
         */
        reflectionIn(obj: Vector|Line|Plane): Vector;

        /**
         * Utility to make sure vectors are 3D. If they are 2D, a zero z-component is added.
         */
        to3D(): Vector;

        /**
         * Returns a string representation of the vector.
         */
        inspect(): string;

        /**
         * Set vector's elements from an array.
         *
         * @param {Vector|ReadonlyArray<number>} els The elements.
         */
        setElements(els: Vector|ReadonlyArray<number>): Vector;
    }

    export class Vertex extends Vector {
        /**
         * The constructor function.
         *
         * @param {Vector|ReadonlyArray<number>} point The vector point.
         */
        constructor(point: Vector|ReadonlyArray<number>);

        /**
         * Convert points into an array of Vertex.
         *
         * @param {ReadonlyArray<Vector>|ReadonlyArray<ReadonlyArray<number>>} points The points to convert.
         */
        static convert(points: ReadonlyArray<Vector>|ReadonlyArray<ReadonlyArray<number>>): ReadonlyArray<Vertex>;

        /**
         * Returns true iff the vertex's internal angle is 0 <= x < 180
         * in the context of the given polygon object. Returns null if the
         * vertex does not exist in the polygon.
         *
         * @param {Polygon} polygon The polygon to check.
         */
        isConvex(polygon: Polygon): boolean | null;

        /**
         * Returns true iff the vertex's internal angle is 180 <= x < 360.
         *
         * @param {Polygon} polygon The polygon to check.
         */
        isReflex(polygon: Polygon): boolean | null;

        /**
         * Returns the type of the vertex.
         *
         * @param {Polygon} polygon The polygon to check.
         */
        type(polygon: Polygon): 'convex' | 'reflex' | null
    }

    export class Matrix {
        /**
         * Constructor function.
         *
         * @param {ReadonlyArray<number>|ReadonlyArray<ReadonlyArray<number>>|Vector|Matrix} elements The elements.
         */
        constructor(elements: ReadonlyArray<number>|ReadonlyArray<ReadonlyArray<number>>|Vector|Matrix);

        /**
         * Identity matrix of size n.
         *
         * @param {number} n The size.
         */
        static I(n: number): Matrix;

        /**
         * Diagonal matrix - all off-diagonal elements are zero
         *
         * @param {any} elements The elements.
         */
        static Diagonal(elements: ReadonlyArray<number>|ReadonlyArray<ReadonlyArray<number>>|Vector | Matrix): Matrix;

        /**
         * Rotation matrix about some axis. If no axis is supplied, assume we're after a 2D transform.
         *
         * @param {number} theta The angle in radians.
         * @param {Vector} a [Optional] The axis.
         */
        static Rotation(theta: number, a?: Vector): Matrix;

        static RotationX(t: number): Matrix;
        static RotationY(t: number): Matrix;
        static RotationZ(t: number): Matrix;

        /**
         * Random matrix of n rows, m columns.
         *
         * @param {number} n The number of rows.
         * @param {number} m The number of columns.
         */
        static Random(n: number, m: number): Matrix;

        /**
         * Matrix filled with zeros.
         *
         * @param {number} n The number of rows.
         * @param {number} m The number of columns.
         */
        static Zero(n: number, m: number): Matrix;

        /**
         * Gets a nested array containing the matrix's elements.
         */
        elements: ReadonlyArray<ReadonlyArray<number>>;

        /**
         * Returns element (i,j) of the matrix.
         *
         * @param {number} i The row index.
         * @param {number} j The column index.
         */
        e(i: number, j: number): any;

        /**
         * Returns row k of the matrix as a vector.
         *
         * @param {number} i The row index.
         */
        row(i: number): Vector;

        /**
         * Returns column k of the matrix as a vector.
         *
         * @param {number} j The column index.
         */
        col(j: number): Vector;

        /**
         * Returns the number of rows/columns the matrix has.
         *
         * @return {any} An object { rows: , cols: }.
         */
        dimensions(): any;

        /**
         * Returns the number of rows in the matrix.
         */
        rows(): number;

        /**
         * Returns the number of columns in the matrix.
         */
        cols(): number;

        /**
         * Returns true if the matrix is equal to the argument. You can supply a vector as the argument,
         * in which case the receiver must be a one-column matrix equal to the vector.
         *
         * @param {Vector|Matrix|ReadonlyArray<number>|ReadonlyArray<ReadonlyArray<number>>} matrix The argument to compare.
         */
        eql(matrix: Vector|Matrix|ReadonlyArray<number>|ReadonlyArray<ReadonlyArray<number>>): boolean;

        /**
         * Returns a copy of the matrix.
         */
        dup(): Matrix;

        /**
         * Maps the matrix to another matrix (of the same dimensions) according to the given function.
         *
         * @param {Function} fn The function.
         */
        map(fn: (x: number, i: number, j: number) => any): Matrix;

        /**
         * Returns true iff the argument has the same dimensions as the matrix.
         *
         * @param {Matrix} matrix The other matrix.
         */
        isSameSizeAs(matrix: Matrix): boolean;

        /**
         * Returns the result of adding another matrix to the matrix.
         *
         * @param {Matrix} matrix The matrix to add.
         */
        add(matrix: Matrix): Matrix;

        /**
         * Returns the result of adding a vector to the matrix.
         *
         * @param {Vector} vector The vector to add.
         */
        add(vector: Vector): Vector;

        /**
         * Returns the result of subtracting the argument from the matrix.
         *
         * @param {Matrix} matrix The matrix to substract.
         */
        subtract(matrix: Matrix): Matrix;

        /**
         * Returns true iff the matrix can multiply the argument from the left.
         *
         * @param {Matrix} matrix The matrix.
         */
        canMultiplyFromLeft(matrix: Matrix): boolean;

        /**
         * Returns the result of multiplying the matrix from the right by the argument. If the argument is a scalar
         * then just multiply all the elements. If the argument is a vector, a vector is returned, which saves you
         * having to remember calling col(1) on the result.
         *
         * @param {number|Matrix} matrix The multiplier.
         */
        multiply(matrix: number|Matrix): Matrix;

        /**
         * Returns the result of multiplying the matrix from the right by the argument. If the argument is a scalar
         * then just multiply all the elements. If the argument is a vector, a vector is returned, which saves you
         * having to remember calling col(1) on the result.
         *
         * @param {Vector} vector The multiplier.
         */
        multiply(vector: Vector): Vector;

        x(matrix: number|Matrix): Matrix;

        x(vector: Vector): Vector;

        /**
         * Returns a submatrix taken from the matrix. Argument order is: start row, start col, nrows, ncols.
         * Element selection wraps if the required index is outside the matrix's bounds, so you could use
         * this to perform row/column cycling or copy-augmenting.
         *
         * @param {number} a Starting row index.
         * @param {number} b Starting column index.
         * @param {number} c Number of rows.
         * @param {number} d Number of columns.
         */
        minor(a: number, b: number, c: number, d: number): Matrix;

        /**
         * Returns the transpose of the matrix.
         */
        transpose(): Matrix;

        /**
         * Returns true if the matrix is square.
         */
        isSquare(): boolean;

        /**
         * Returns the (absolute) largest element of the matrix.
         */
        max(): number;

        /**
         * Returns the indeces of the first match found by reading row-by-row from left to right.
         *
         * @param {number} x The value.
         *
         * @return {any} The element indeces i.e: { row:1, col:1 }
         */
        indexOf(x: number): any;

        /**
         * If the matrix is square, returns the diagonal elements as a vector; otherwise, returns null.
         */
        diagonal(): Vector;

        /**
         * Make the matrix upper (right) triangular by Gaussian elimination. This method only adds multiples
         * of rows to other rows. No rows are scaled up or switched, and the determinant is preserved.
         */
        toRightTriangular(): Matrix;
        toUpperTriangular(): Matrix;

        /**
         * Returns the determinant for square matrices.
         */
        determinant(): number;
        det(): number;

        /**
         * Returns true if the matrix is singular.
         */
        isSingular(): boolean;

        /**
         * Returns the trace for square matrices.
         */
        trace(): number;
        tr(): number;

        /**
         * Returns the rank of the matrix.
         */
        rank(): number;
        rk(): number;

        /**
         * Returns the result of attaching the given argument to the right-hand side of the matrix.
         *
         * @param {Vector|Matrix|ReadonlyArray<number>|ReadonlyArray<ReadonlyArray<number>>} matrix The matrix or vector.
         */
        augment(matrix: Vector|Matrix|ReadonlyArray<number>|ReadonlyArray<ReadonlyArray<number>>): Matrix;

        /**
         * Returns the inverse (if one exists) using Gauss-Jordan.
         */
        inverse(): Matrix;
        inv(): Matrix;

        /**
         * Returns the result of rounding all the elements.
         */
        round(): Matrix;

        /**
         * Returns a copy of the matrix with elements set to the given value if they differ from it
         * by less than Sylvester.precision.
         *
         * @param {number} x The value.
         */
        snapTo(x: number): Matrix;

        /**
         * Returns a string representation of the matrix.
         */
        inspect(): string;

        /**
         * Set the matrix's elements from an array. If the argument passed is a vector, the resulting matrix
         * will be a single column.
         *
         * @param {ReadonlyArray<number>|ReadonlyArray<ReadonlyArray<number>>|Vector|Matrix} matrix The elements.
         */
        setElements(matrix: ReadonlyArray<number>|ReadonlyArray<ReadonlyArray<number>>|Vector|Matrix): Matrix;
    }

    export class Line {
        /**
         * Constructor function.
         *
         * @param ReadonlyArray<number>|Vector anchor The anchor vector.
         * @param ReadonlyArray<number>|Vector direction The direction vector.
         */
        constructor(anchor: ReadonlyArray<number>|Vector, direction: ReadonlyArray<number>|Vector);

        static X: Line;
        static Y: Line;
        static Z: Line;

        /**
         * Gets the 3D vector corresponding to a point on the line.
         */
        anchor: Vector;

        /**
         * Gets a normalized 3D vector representing the line's direction.
         */
        direction: Vector;

        /**
         * Returns true if the argument occupies the same space as the line.
         *
         * @param {Line} line The other line.
         */
        eql(line: Line): boolean;

        /**
         * Returns a copy of the line.
         */
        dup(): Line;

        /**
         * Returns the result of translating the line by the given vector/array.
         *
         * @param {Vector|ReadonlyArray<number>} vector The translation vector.
         */
        translate(vector: Vector|ReadonlyArray<number>): Line;

        /**
         * Returns true if the line is parallel to the argument. Here, 'parallel to' means that the argument's
         * direction is either parallel or antiparallel to the line's own direction. A line is parallel to a
         * plane if the two do not have a unique intersection.
         *
         * @param {Line|Plane} obj The object.
         */
        isParallelTo(obj: Line|Plane): boolean;

        /**
         * Returns the line's perpendicular distance from the argument, which can be a point, a line or a plane.
         *
         * @param {Vector|Line|Plane} obj The object.
         */
        distanceFrom(obj: Vector|Line|Plane): number;

        /**
         * Returns true if the argument is a point on the line.
         *
         * @param {Vector} point The point.
         */
        contains(point: Vector): boolean;

        /**
         * Returns true if the line lies in the given plane.
         *
         * @param {Plane} plane The plane.
         */
        liesIn(plane: Plane): boolean;

        /**
         * Returns true if the line has a unique point of intersection with the argument.
         *
         * @param {Line|Plane} obj The object.
         */
        intersects(obj: Line|Plane): boolean;

        /**
         * Returns the unique intersection point with the argument, if one exists.
         *
         * @param {Line|Plane} obj The object.
         */
        intersectionWith(obj: Line|Plane): Vector;

        /**
         * Returns the point on the line that is closest to the given point or line.
         *
         * @param {Vector|Line|ReadonlyArray<number>} obj The object.
         */
        pointClosestTo(obj: Vector|Line|ReadonlyArray<number>): Vector;

        /**
         * Returns a copy of the line rotated by t radians about the given line. Works by finding the argument's
         * closest point to this line's anchor point (call this C) and rotating the anchor about C. Also rotates
         * the line's direction about the argument's. Be careful with this - the rotation axis' direction
         * affects the outcome!
         *
         * @param {number} t The angle in radians.
         * @param {Vector|Line} axis The axis.
         */
        rotate(t: number, axis: Vector|Line): Line;

        /**
         * Returns the line's reflection in the given point or line.
         *
         * @param {Vector|Line|Plane} obj The object.
         */
        reflectionIn(obj: Vector|Line|Plane): Line;

        /**
         * Set the line's anchor point and direction.
         *
         * @param {ReadonlyArray<number>|Vector} anchor The anchor vector.
         * @param {ReadonlyArray<number>|Vector} direction The direction vector.
         */
        setVectors(anchor: ReadonlyArray<number>|Vector, direction: ReadonlyArray<number>|Vector): Line;
    }

    export class LineSegment {
        /**
         * Constructor function.
         *
         * @param {Vector|ReadonlyArray<number>} v1 The first vector.
         * @param {Vector|ReadonlyArray<number>} v2 The second vector.
         */
        constructor(v1: Vector|ReadonlyArray<number>, v2: Vector|ReadonlyArray<number>);

        /**
         * Whether a segment is equal to this segment.
         *
         * @param {LineSegment} segment The segment to check.
         */
        eql(segment: LineSegment): boolean;

        /**
         * Returns a duplicate of this segment.
         */
        dup(): LineSegment;

        /**
         * Returns the length of this segment.
         */
        length(): number;

        /**
         * Converts this segment into a single vector.
         */
        toVector(): Vector;

        /**
         * Returns the midpoint of this segment as a vector.
         */
        midpoint(): Vector;

        /**
         * Returns the plane that bisects this segment.
         */
        bisectingPlane(): Plane;

        /**
         * Translates this segment given a vector.
         *
         * @param {Vector|ReadonlyArray<number>} vector The vector to translate
         */
        translate(vector: Vector|ReadonlyArray<number>): LineSegment;

        /**
         * Returns true if the line is parallel to the argument. Here, 'parallel to' means that the argument's
         * direction is either parallel or antiparallel to the line's own direction. A line is parallel to a
         * plane if the two do not have a unique intersection.
         *
         * @param {Line|Plane} obj The object.
         */
        isParallelTo(obj: Line|Plane): boolean;

        /**
         * Returns the vector's distance from the argument, when considered as a point in space.
         *
         * @param {Vector|Line|Plane} obj The object to calculate the distance.
         */
        distanceFrom(obj: Vector|Line|Plane): number;

        /**
         * Returns true if the argument is a point on the line.
         *
         * @param {Vector|Line|Plane} point The point.
         */
        contains(point: Vector|Line|Plane): boolean;

        /**
         * Returns true if the line has a unique point of intersection with the argument.
         *
         * @param {Line|Plane} obj The object.
         */
        intersects(obj: Line|Plane): boolean;

        /**
         * Returns the unique intersection point with the argument, if one exists.
         *
         * @param {Line|Plane} obj The object.
         */
        intersectionWith(obj: Line|Plane): Vector;

        /**
         * Returns the point on the line that is closest to the given point or line.
         *
         * @param {Vector|Line|ReadonlyArray<number>} obj The object.
         */
        pointClosestTo(obj: Vector|Line|ReadonlyArray<number>): Vector;

        /**
         * Sets the initial point of the line segments
         *
         * @param {Vector|ReadonlyArray<number>} startPoint The start vector.
         * @param {Vector|ReadonlyArray<number>} endPoint The end vector.
         */
        setPoints(startPoint: Vector|ReadonlyArray<number>, endPoint: Vector|ReadonlyArray<number>): LineSegment | null;
    }

    export class Plane {
        /**
         * Constructor function.
         *
         * @param {ReadonlyArray<number>|Vector} anchor The anchor vector.
         * @param {ReadonlyArray<number>|Vector} normal The normal vector.
         */
        constructor(anchor: ReadonlyArray<number>|Vector, normal: ReadonlyArray<number>|Vector);

        /**
         * Constructor function.
         *
         * @param {ReadonlyArray<number>|Vector} anchor The anchor vector.
         * @param {ReadonlyArray<number>|Vector} v1 The first direction vector.
         * @param {ReadonlyArray<number>|Vecotr} v2 The second direction vector.
         */
        constructor(anchor: ReadonlyArray<number>|Vector, v1: ReadonlyArray<number>|Vector, v2: ReadonlyArray<number>|Vector);

        static XY: Plane;
        static YZ: Plane;
        static ZX: Plane;
        static YX: Plane;

        /**
         * Constructs a plane from a list of points.
         * 
         * @param {ReadonlyArray<ReadonlyArray<number>>|ReadonlyArray<Vector>} points List of vectors.
         */
        static fromPoints(points: ReadonlyArray<ReadonlyArray<number>>|ReadonlyArray<Vector>): Plane;

        /**
         * Gets the 3D vector corresponding to a point in the plane.
         */
        anchor: Vector;

        /**
         * Gets a normalized 3D vector perpendicular to the plane.
         */
        normal: Vector;

        /**
         * Returns true if the plane occupies the same space as the argument.
         *
         * @param {Plane} plane The other plane.
         */
        eql(plane: Plane): boolean;

        /**
         * Returns a copy of the plane.
         */
        dup(): Plane;

        /**
         * Returns the result of translating the plane by the given vector.
         *
         * @param {ReadonlyArray<number>|Vector} vector The translation vector.
         */
        translate(vector: ReadonlyArray<number>|Vector): Plane;

        /**
         * Returns true if the plane is parallel to the argument. Will return true if the planes are equal,
         * or if you give a line and it lies in the plane.
         *
         * @param {Line|Plane} obj The object.
         */
        isParallelTo(obj: Line|Plane): boolean;

        /**
         * Returns true if the receiver is perpendicular to the argument.
         *
         * @param {Plane} plane The other plane.
         */
        isPerpendicularTo(plane: Plane): boolean;

        /**
         * Returns the plane's distance from the given object (point, line or plane).
         *
         * @parm {Vector|Line|Plane} obj The object.
         */
        distanceFrom(obj: Vector|Line|Plane): number;

        /**
         * Returns true if the plane contains the given point or line.
         *
         * @param {Vector|Line} obj The object.
         */
        contains(obj: Vector|Line): boolean;

        /**
         * Returns true if the plane has a unique point/line of intersection with the argument.
         *
         * @param {Line|Plane} obj The object.
         */
        intersects(obj: Line|Plane): boolean;

        /**
         * Returns the unique intersection with the argument, if one exists.
         *
         * @param {Line} line The line.
         */
        intersectionWith(line: Line): Vector;

        /**
         * Returns the unique intersection with the argument, if one exists.
         *
         * @param {Plane} plane The plane.
         */
        intersectionWith(plane: Plane): Line;

        /**
         * Returns the point in the plane closest to the given point.
         *
         * @param {Vector|ReadonlyArray<number>} point The point.
         */
        pointClosestTo(point: Vector|ReadonlyArray<number>): Vector;

        /**
         * Returns a copy of the plane, rotated by t radians about the given line. See notes on Line#rotate.
         *
         * @param {number} t The angle in radians.
         * @param {Line} axis The line axis.
         */
        rotate(t: number, axis: Line): Plane;

        /**
         * Returns the reflection of the plane in the given point, line or plane.
         *
         * @param {Vector|Line|Plane} obj The object.
         */
        reflectionIn(obj: Vector|Line|Plane): Plane;

        /**
         * Sets the anchor point and normal to the plane. Normal vector is normalised before storage.
         *
         * @param {ReadonlyArray<number>|Vector} anchor The anchor vector.
         * @param {ReadonlyArray<number>|Vector} normal The normal vector.
         */
        setVectors(anchor: ReadonlyArray<number>|Vector, normal: ReadonlyArray<number>|Vector): Plane;

        /**
         * Sets the anchor point and normal to the plane. The normal is calculated by assuming the three points
         * should lie in the same plane. Normal vector is normalised before storage.
         *
         * @param {ReadonlyArray<number>|Vector} anchor The anchor vector.
         * @param {ReadonlyArray<number>|Vector} v1 The first direction vector.
         * @param {ReadonlyArray<number>|Vector} v2 The second direction vector.
         */
        setVectors(anchor: ReadonlyArray<number>|Vector, v1: ReadonlyArray<number>|Vector, v2: ReadonlyArray<number>|Vector): Plane;
    }

    export class LinkedListNode {
        /**
         * Constructor function.
         *
         * @param {any} data Any kinds of data to store.
         */
        constructor (data: any);

        /**
         * Previous data.
         */
        prev: any;

        /**
         * Next data.
         */
        next: any;

        /**
         * Current data.
         */
        data: any;
    }

    export class LinkedList {
        /**
         * Creates a node given the data.
         */
        static Node(data: any): LinkedListNode

        /**
         * Creates a circular linked list
         */
        static Circular(data: any): CircularLinkedList

        /**
         * Constructor function.
         */
        constructor();

        /**
         * The length of the linked list.
         */
        length: number;

        /**
         * The first element in the linked list.
         */
        first: LinkedListNode;

        /**
         * The last element in the linked list.
         */
        last: LinkedListNode;

        /**
         * Executes a function to each of the node.
         *
         * @param {Function} fn The function to execute.
         * @param {Object} context The context of the function.
         */
        forEach(fn: (node: LinkedListNode, i: number) => any, context: any): void;

        /**
         * An alias of `forEach`.
         */
        each: LinkedList['forEach']

        /**
         * Get the node at a given index.
         *
         * @param {Number} i The index.
         */
        at(i: number): LinkedListNode;

        /**
         * Get a random node in the list.
         */
        randomNode(): LinkedListNode;

        /**
         * Convert this linked list into an array.
         */
        toArray(): ReadonlyArray<any>;
    }

    export class CircularLinkedList extends LinkedList {
        /**
         * Creates a linked list from an array
         *
         * @param {Array} list The array that the list is based on.
         * @param {Boolean} useNodes Whether it should create using the nodes or not.
         */
        static fromArray(list: ReadonlyArray<any>, useNodes: boolean): CircularLinkedList

        /**
         * Appends a node into the list.
         *
         * @param {LinkedListNode} node The node to be appended.
         */
        append(node: LinkedListNode): void;

        /**
         * Prepend a node into the list.
         *
         * @param {LinkedListNode} node The node to be prepended.
         */
        prepend(node: LinkedListNode): void;

        /**
         * Inserts a node after another node.
         *
         * @param {LinkedListNode} node The node reference.
         * @param {LinkedListNode} newNode The new node to be inserted.
         */
        insertBefore(node: LinkedListNode, newNode: LinkedListNode): void;

        /**
         * Inserts a node before another node.
         *
         * @param {LinkedListNode} node The node reference.
         * @param {LinkedListNode} newNode The new node to be inserted.
         */
        insertAfter(node: LinkedListNode, newNode: LinkedListNode): void;

        /**
         * Removes the given node.
         *
         * @param {LinkedListNode} node The node to be removed.
         */
        remove(node: LinkedListNode): void;

        /**
         * Retrieves a node given a data. Returns `null` upon no matches.
         *
         * @param {any} data The data of the node.
         */
        withData(data: any): LinkedListNode | null;
    }

    export class Polygon {
        /**
         * Constructor function.
         *
         * @param {ReadonlyArray<Vector>|ReadonlyArray<ReadonlyArray<number>>} points The points for the polygon.
         * @param {Plane} plane The plane that constructs the polygon.
         */
        constructor(points: ReadonlyArray<Vector>|ReadonlyArray<ReadonlyArray<number>>, plane: Plane);

        /**
         * The vertices of the polygon.
         */
        vertices: CircularLinkedList;

        /**
         * Gets the data of the vertex given the index.
         *
         * @param {Number} i The index of the vertices.
         */
        v(i: number): LinkedListNode;

        /**
         * Gets the node given the vertex.
         *
         * @param {any} vertex The specified vertex.
         */
        nodeFor(vertex: any): LinkedListNode;

        /**
         * Returns a duplicate of this polygon.
         */
        dup(): Polygon;

        /**
         * Translate the polygon given a vector.
         *
         * @param {Vector|ReadonlyArray<number>} vector The specified vector.
         */
        translate(vector: Vector|ReadonlyArray<number>): Polygon;

        /**
         * Rotates the polygon.
         *
         * @param {Number} t The rotation degree.
         * @param {Line} line The rotation axis.
         */
        rotate(t: number, line: Line): Polygon;

        /**
         * Scale the polygon.
         *
         * @param {Number} k The scale factor.
         * @param {ReadonlyArray<number>} point The anchor point of the scale.
         */
        scale(k: number, point: ReadonlyArray<number>): Polygon;

        /**
         * Updates the plane properties of all the cached triangles belonging to the
         * polygon according to the given function.
         *
         * @param {Function} fn The function to update all the planes
         */
        updateTrianglePlanes(fn: (plane: Plane) => any): void;

        /**
         * Whether this polygon is a triangle or not.
         */
        isTriangle(): boolean;

        /**
         * Returns a collection of triangles used for calculating area and center of mass.
         */
        trianglesForSurfaceIntegral(): Polygon[];

        /**
         * Retursn the area of the polygon.
         */
        area(): number;

        /**
         * Returns the centroid of the polygon.
         */
        centroid(): Vector;

        /**
         * Returns a projection of the polygon given the plane.
         *
         * @param {Plane} plane The plane projection.
         */
        projectionOn(plane: Plane): Polygon;

        /**
         * Removes a vertex from the polygon.
         *
         * @param {any} vertex The vertex to be removed.
         */
        removeVertex(vertex: any): Polygon | null;

        /**
         * Whether the polygon contains a point.
         *
         * @param {Vector|ReadonlyArray<number>} point The point to check.
         */
        contains(point: Vector|ReadonlyArray<number>): boolean;

        /**
         * Whether the polygon contains a point.
         *
         * @param {Vector|ReadonlyArray<number>} point The point to check.
         */
        containsByWindingNumber(point: Vector|ReadonlyArray<number>): boolean;

        /**
         * Whether the point is an edge in the polygon.
         *
         * @param {Vector|ReadonlyArray<number>} point The point to check.
         */
        hasEdgeContaining(point: Vector|ReadonlyArray<number>): boolean;

        /**
         * Converts the polygon into triangles.
         */
        toTriangles(): Polygon[];

        /**
         * Implementation of ear clipping algorithm
         * Found in 'Triangulation by ear clipping', by David Eberly.
         * at http://www.geometrictools.com
         *
         * This will not deal with overlapping sections - contruct your polygons sensibly
         */
        triangulateByEarClipping(): Polygon[];

        /**
         * Set the vertices of the polygon.
         *
         * @param {ReadonlyArray<Vector>|ReadonlyArray<ReadonlyArray<number>>} points The points for the polygon.
         * @param {Plane} plane The plane for the polygon.
         */
        setVertices(points: ReadonlyArray<Vector>|ReadonlyArray<ReadonlyArray<number>>, plane: Plane): Polygon;

        /**
         * Populates the vertex type lists.
         */
        populateVertexTypeLists(): void;

        /**
         * Copies the vertices into the cache.
         */
        copyVertices(): void;

        /**
         * Clears the vertices caches.
         */
        clearCache(): void;

        /**
         * Sets the cache of this polygon.
         *
         * @param {String} key The cache key.
         * @param {any} value The cache value.
         */
        setCache(key: string, value: any): any;

        /**
         * Inspect the points on all vertices in the polygon.
         */
        inspect(): string;
    }

    /**
     * The level of the precision.
     */
    export var PRECISION: number;

    /**
     * Converts a matrix into a MHTML.
     *
     * @param {Matrix} m The matrix to convert.
     */
    export var mht: (m: Matrix) => string;

    /**
     * Creates a look-at matrix given the parameters.
     *
     * @param {Number} ex The first vector X position.
     * @param {Number} ey The first vector Y position.
     * @param {Number} ez The first vector Z position.
     * @param {Number} cx The second vector X position.
     * @param {Number} cy The second vector Y position.
     * @param {Number} cz The second vector Z position.
     * @param {Number} ux The third vector X position.
     * @param {Number} uy The third vector Y position.
     * @param {Number} uz The third vector Z position.
     */
    export var makeLookAt: (
        ex: number, ey: number, ez: number,
        cx: number, cy: number, cz: number,
        ux: number, uy: number, uz: number) => Matrix;

    /**
     * Creates an ortho-matrix given the parameters.
     *
     * @param {Number} left The left position.
     * @param {Number} right The right position.
     * @param {Number} bottom The bottom position.
     * @param {Number} top The top position.
     * @param {Number} znear The znear position.
     * @param {Number} zfar The zfar position.
     */
    export var makeOrtho: (
        left: number, right: number,
        bottom: number, top: number,
        znear: number, zfar: number) => Matrix;

    /**
     * Creates a perspective matrix given the parameters.
     *
     * @param {Number} fovy The fovy position.
     * @param {Number} aspect The aspect position.
     * @param {Number} znear The znear position.
     * @param {Number} zfar The zfar position.
     */
    export var makePerspective: (
        fovy: number, aspect: number,
        znear: number, zfar: number) => Matrix;

    /**
     * Creates a frustum-matrix given the parameters.
     *
     * @param {Number} left The left position.
     * @param {Number} right The right position.
     * @param {Number} bottom The bottom position.
     * @param {Number} top The top position.
     * @param {Number} znear The znear position.
     * @param {Number} zfar The zfar position.
     */
    export var makeFrustum: (
        left: number, right: number,
        bottom: number, top: number,
        znear: number, zfar: number) => Matrix;
}
