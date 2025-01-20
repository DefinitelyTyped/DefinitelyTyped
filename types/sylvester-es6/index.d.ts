// === Sylvester ===
// Vector and Matrix mathematics modules for JavaScript
// Copyright (c) 2007 James Coglan
// Extended version of the library is courtesy of @pithumke (c) 2016

export class Vector {
    /**
     * Constructor function.
     */
    constructor(elements: Vector | number[]);

    static i: Vector;
    static j: Vector;
    static k: Vector;

    /**
     * Random vector of size n.
     */
    static Random(n: number): Vector;

    /**
     * Vector filled with zeros.
     */
    static Zero(n: number): Vector;

    /**
     * Gets an array containing the vector's elements.
     */
    elements: number[];

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
     */
    eql(vector: Vector | number[]): boolean;

    /**
     * Returns a copy of the vector.
     */
    dup(): Vector;

    /**
     * Maps the vector to another vector according to the given function.
     */
    map(fn: (x: number, i: number) => any): Vector;

    /**
     * Calls the iterator for each element of the vector in turn.
     */
    each(fn: (x: number, i: number) => any): void;

    /**
     * Returns a new vector created by normalizing the receiver.
     */
    toUnitVector(): Vector;

    /**
     * Returns the angle between the vector and the argument (also a vector).
     */
    angleFrom(vector: Vector): number;

    /**
     * Returns true if the vector is parallel to the argument.
     */
    isParallelTo(vector: Vector): boolean;

    /**
     * Returns true if the vector is antiparallel to the argument.
     */
    isAntiparallelTo(vector: Vector): boolean;

    /**
     * Returns true iff the vector is perpendicular to the argument.
     */
    isPerpendicularTo(vector: Vector): boolean;

    /**
     * Returns the result of adding the argument to the vector.
     */
    add(vector: Vector | number[]): Vector;

    /**
     * Returns the result of subtracting the argument from the vector.
     */
    subtract(vector: Vector | number[]): Vector;

    /**
     * Returns the result of multiplying the elements of the vector by the argument.
     */
    multiply(k: number): Vector;

    /**
     * Returns the result of multiplying the elements of the vector by the argument (Alias for multiply(k)).
     */
    x(k: number): Vector;

    /**
     * Returns the scalar product of the vector with the argument. Both vectors must have equal dimensionality.
     *
     * @param vector The other vector.
     */
    dot(vector: Vector | number[]): number;

    /**
     * Returns the vector product of the vector with the argument. Both vectors must have dimensionality 3.
     */
    cross(vector: Vector | number[]): Vector;

    /**
     * Returns the (absolute) largest element of the vector.
     */
    max(): number;

    /**
     * Returns the index of the first match found.
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
     */
    snapTo(x: number): Vector;

    /**
     * Returns the vector's distance from the argument, when considered as a point in space.
     */
    distanceFrom(obj: Vector | Line | Plane): number;

    /**
     * Returns true if the vector is point on the given line.
     */
    liesOn(line: Line): boolean;

    /**
     * Return true if the vector is a point in the given plane.
     */
    liesIn(plane: Plane): boolean;

    /**
     * Rotates the vector about the given object. The object should be a point if the vector is 2D,
     * and a line if it is 3D. Be careful with line directions!
     */
    rotate(t: number | Matrix, obj: Vector | Line): Vector;

    /**
     * Returns the result of reflecting the point in the given point, line or plane.
     */
    reflectionIn(obj: Vector | Line | Plane): Vector;

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
     */
    setElements(els: Vector | number[]): Vector;
}

export class Vertex extends Vector {
    /**
     * The constructor function.
     */
    constructor(point: Vector | number[]);

    /**
     * Convert points into an array of Vertex.
     */
    static convert(points: Vector[] | number[][]): Vertex[];

    /**
     * Returns true iff the vertex's internal angle is 0 <= x < 180
     * in the context of the given polygon object. Returns null if the
     * vertex does not exist in the polygon.
     */
    isConvex(polygon: Polygon): boolean | null;

    /**
     * Returns true iff the vertex's internal angle is 180 <= x < 360.
     */
    isReflex(polygon: Polygon): boolean | null;

    /**
     * Returns the type of the vertex.
     */
    type(polygon: Polygon): "convex" | "reflex" | null;
}

export class Matrix {
    /**
     * Constructor function.
     */
    constructor(elements: number[] | number[][] | Vector | Matrix);

    /**
     * Identity matrix of size n.
     */
    static I(n: number): Matrix;

    /**
     * Diagonal matrix - all off-diagonal elements are zero
     */
    static Diagonal(elements: number[] | number[][] | Vector | Matrix): Matrix;

    /**
     * Rotation matrix about some axis. If no axis is supplied, assume we're after a 2D transform.
     */
    static Rotation(theta: number, a?: Vector): Matrix;

    static RotationX(t: number): Matrix;
    static RotationY(t: number): Matrix;
    static RotationZ(t: number): Matrix;

    /**
     * Random matrix of n rows, m columns.
     */
    static Random(n: number, m: number): Matrix;

    /**
     * Matrix filled with zeros.
     */
    static Zero(n: number, m: number): Matrix;

    /**
     * Gets a nested array containing the matrix's elements.
     */
    elements: number[][];

    /**
     * Returns element (i,j) of the matrix.
     */
    e(i: number, j: number): any;

    /**
     * Returns row k of the matrix as a vector.
     */
    row(i: number): Vector;

    /**
     * Returns column k of the matrix as a vector.
     */
    col(j: number): Vector;

    /**
     * Returns the number of rows/columns the matrix has.
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
     */
    eql(matrix: Vector | Matrix | number[] | number[][]): boolean;

    /**
     * Returns a copy of the matrix.
     */
    dup(): Matrix;

    /**
     * Maps the matrix to another matrix (of the same dimensions) according to the given function.
     */
    map(fn: (x: number, i: number, j: number) => any): Matrix;

    /**
     * Returns true iff the argument has the same dimensions as the matrix.
     */
    isSameSizeAs(matrix: Matrix): boolean;

    /**
     * Returns the result of adding another matrix to the matrix.
     */
    add(matrix: Matrix): Matrix;

    /**
     * Returns the result of adding a vector to the matrix.
     */
    add(vector: Vector): Vector;

    /**
     * Returns the result of subtracting the argument from the matrix.
     */
    subtract(matrix: Matrix): Matrix;

    /**
     * Returns true iff the matrix can multiply the argument from the left.
     */
    canMultiplyFromLeft(matrix: Matrix): boolean;

    /**
     * Returns the result of multiplying the matrix from the right by the argument. If the argument is a scalar
     * then just multiply all the elements. If the argument is a vector, a vector is returned, which saves you
     * having to remember calling col(1) on the result.
     */
    multiply(matrix: number | Matrix): Matrix;

    /**
     * Returns the result of multiplying the matrix from the right by the argument. If the argument is a scalar
     * then just multiply all the elements. If the argument is a vector, a vector is returned, which saves you
     * having to remember calling col(1) on the result.
     */
    multiply(vector: Vector): Vector;

    x(matrix: number | Matrix): Matrix;

    x(vector: Vector): Vector;

    /**
     * Returns a submatrix taken from the matrix. Argument order is: start row, start col, nrows, ncols.
     * Element selection wraps if the required index is outside the matrix's bounds, so you could use
     * this to perform row/column cycling or copy-augmenting.
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
     * Returns the indices of the first match found by reading row-by-row from left to right.
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
     */
    augment(matrix: Vector | Matrix | number[] | number[][]): Matrix;

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
     */
    snapTo(x: number): Matrix;

    /**
     * Returns a string representation of the matrix.
     */
    inspect(): string;

    /**
     * Set the matrix's elements from an array. If the argument passed is a vector, the resulting matrix
     * will be a single column.
     */
    setElements(matrix: number[] | number[][] | Vector | Matrix): Matrix;
}

export class Line {
    /**
     * Constructor function.
     */
    constructor(anchor: number[] | Vector, direction: number[] | Vector);

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
     */
    eql(line: Line): boolean;

    /**
     * Returns a copy of the line.
     */
    dup(): Line;

    /**
     * Returns the result of translating the line by the given vector/array.
     */
    translate(vector: Vector | number[]): Line;

    /**
     * Returns true if the line is parallel to the argument. Here, 'parallel to' means that the argument's
     * direction is either parallel or antiparallel to the line's own direction. A line is parallel to a
     * plane if the two do not have a unique intersection.
     */
    isParallelTo(obj: Line | Plane): boolean;

    /**
     * Returns the line's perpendicular distance from the argument, which can be a point, a line or a plane.
     */
    distanceFrom(obj: Vector | Line | Plane): number;

    /**
     * Returns true if the argument is a point on the line.
     */
    contains(point: Vector): boolean;

    /**
     * Returns true if the line lies in the given plane.
     */
    liesIn(plane: Plane): boolean;

    /**
     * Returns true if the line has a unique point of intersection with the argument.
     */
    intersects(obj: Line | Plane): boolean;

    /**
     * Returns the unique intersection point with the argument, if one exists.
     */
    intersectionWith(obj: Line | Plane): Vector;

    /**
     * Returns the point on the line that is closest to the given point or line.
     */
    pointClosestTo(obj: Vector | Line | number[]): Vector;

    /**
     * Returns a copy of the line rotated by t radians about the given line. Works by finding the argument's
     * closest point to this line's anchor point (call this C) and rotating the anchor about C. Also rotates
     * the line's direction about the argument's. Be careful with this - the rotation axis' direction
     * affects the outcome!
     */
    rotate(t: number, axis: Vector | Line): Line;

    /**
     * Returns the line's reflection in the given point or line.
     */
    reflectionIn(obj: Vector | Line | Plane): Line;

    /**
     * Set the line's anchor point and direction.
     */
    setVectors(anchor: number[] | Vector, direction: number[] | Vector): Line;
}

export class LineSegment {
    /**
     * Constructor function.
     */
    constructor(v1: Vector | number[], v2: Vector | number[]);

    /**
     * Whether a segment is equal to this segment.
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
     */
    translate(vector: Vector | number[]): LineSegment;

    /**
     * Returns true if the line is parallel to the argument. Here, 'parallel to' means that the argument's
     * direction is either parallel or antiparallel to the line's own direction. A line is parallel to a
     * plane if the two do not have a unique intersection.
     */
    isParallelTo(obj: Line | Plane): boolean;

    /**
     * Returns the vector's distance from the argument, when considered as a point in space.
     */
    distanceFrom(obj: Vector | Line | Plane): number;

    /**
     * Returns true if the argument is a point on the line.
     */
    contains(point: Vector | Line | Plane): boolean;

    /**
     * Returns true if the line has a unique point of intersection with the argument.
     */
    intersects(obj: Line | Plane): boolean;

    /**
     * Returns the unique intersection point with the argument, if one exists.
     */
    intersectionWith(obj: Line | Plane): Vector;

    /**
     * Returns the point on the line that is closest to the given point or line.
     */
    pointClosestTo(obj: Vector | Line | number[]): Vector;

    /**
     * Sets the initial point of the line segments
     */
    setPoints(startPoint: Vector | number[], endPoint: Vector | number[]): LineSegment | null;
}

export class Plane {
    /**
     * Constructor function.
     */
    constructor(anchor: number[] | Vector, v1: number[] | Vector, v2?: number[] | Vector);

    static XY: Plane;
    static YZ: Plane;
    static ZX: Plane;
    static YX: Plane;

    /**
     * Constructs a plane from a list of points.
     */
    static fromPoints(points: number[][] | Vector[]): Plane;

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
     */
    eql(plane: Plane): boolean;

    /**
     * Returns a copy of the plane.
     */
    dup(): Plane;

    /**
     * Returns the result of translating the plane by the given vector.
     */
    translate(vector: number[] | Vector): Plane;

    /**
     * Returns true if the plane is parallel to the argument. Will return true if the planes are equal,
     * or if you give a line and it lies in the plane.
     */
    isParallelTo(obj: Line | Plane): boolean;

    /**
     * Returns true if the receiver is perpendicular to the argument.
     */
    isPerpendicularTo(plane: Plane): boolean;

    /**
     * Returns the plane's distance from the given object (point, line or plane).
     *
     * @param obj The object.
     */
    distanceFrom(obj: Vector | Line | Plane): number;

    /**
     * Returns true if the plane contains the given point or line.
     */
    contains(obj: Vector | Line): boolean;

    /**
     * Returns true if the plane has a unique point/line of intersection with the argument.
     */
    intersects(obj: Line | Plane): boolean;

    /**
     * Returns the unique intersection with the argument, if one exists.
     */
    intersectionWith(line: Line): Vector;

    /**
     * Returns the unique intersection with the argument, if one exists.
     */
    intersectionWith(plane: Plane): Line;

    /**
     * Returns the point in the plane closest to the given point.
     */
    pointClosestTo(point: Vector | number[]): Vector;

    /**
     * Returns a copy of the plane, rotated by t radians about the given line. See notes on Line#rotate.
     */
    rotate(t: number, axis: Line): Plane;

    /**
     * Returns the reflection of the plane in the given point, line or plane.
     */
    reflectionIn(obj: Vector | Line | Plane): Plane;

    /**
     * Sets the anchor point and normal to the plane. The normal is calculated by assuming the three points
     * should lie in the same plane. Normal vector is normalised before storage.
     */
    setVectors(anchor: number[] | Vector, v1: number[] | Vector, v2?: number[] | Vector): Plane;
}

export class LinkedListNode {
    /**
     * Constructor function.
     */
    constructor(data: any);

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
    static Node(data: any): LinkedListNode;

    /**
     * Creates a circular linked list
     */
    static Circular(data: any): CircularLinkedList;

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
     */
    forEach(fn: (node: LinkedListNode, i: number) => any, context: any): void;
    each(fn: (node: LinkedListNode, i: number) => any, context: any): void;

    /**
     * Get the node at a given index.
     */
    at(i: number): LinkedListNode;

    /**
     * Get a random node in the list.
     */
    randomNode(): LinkedListNode;

    /**
     * Convert this linked list into an array.
     */
    toArray(): any[];
}

export class CircularLinkedList extends LinkedList {
    /**
     * Creates a linked list from an array
     */
    static fromArray(list: any[], useNodes: boolean): CircularLinkedList;

    /**
     * Appends a node into the list.
     */
    append(node: LinkedListNode): void;

    /**
     * Prepend a node into the list.
     */
    prepend(node: LinkedListNode): void;

    /**
     * Inserts a node after another node.
     */
    insertBefore(node: LinkedListNode, newNode: LinkedListNode): void;

    /**
     * Inserts a node before another node.
     */
    insertAfter(node: LinkedListNode, newNode: LinkedListNode): void;

    /**
     * Removes the given node.
     */
    remove(node: LinkedListNode): void;

    /**
     * Retrieves a node given a data. Returns `null` upon no matches.
     */
    withData(data: any): LinkedListNode | null;
}

export class Polygon {
    /**
     * Constructor function.
     */
    constructor(points: Vector[] | number[][], plane: Plane);

    /**
     * The vertices of the polygon.
     */
    vertices: CircularLinkedList;

    /**
     * Gets the data of the vertex given the index.
     */
    v(i: number): LinkedListNode;

    /**
     * Gets the node given the vertex.
     */
    nodeFor(vertex: any): LinkedListNode;

    /**
     * Returns a duplicate of this polygon.
     */
    dup(): Polygon;

    /**
     * Translate the polygon given a vector.
     */
    translate(vector: Vector | number[]): Polygon;

    /**
     * Rotates the polygon.
     */
    rotate(t: number, line: Line): Polygon;

    /**
     * Scale the polygon.
     */
    scale(k: number, point: number[]): Polygon;

    /**
     * Updates the plane properties of all the cached triangles belonging to the
     * polygon according to the given function.
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
     */
    projectionOn(plane: Plane): Polygon;

    /**
     * Removes a vertex from the polygon.
     */
    removeVertex(vertex: any): Polygon | null;

    /**
     * Whether the polygon contains a point.
     */
    contains(point: Vector | number[]): boolean;

    /**
     * Whether the polygon contains a point.
     */
    containsByWindingNumber(point: Vector | number[]): boolean;

    /**
     * Whether the point is an edge in the polygon.
     */
    hasEdgeContaining(point: Vector | number[]): boolean;

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
     */
    setVertices(points: Vector[] | number[][], plane: Plane): Polygon;

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
export const PRECISION: number;

/**
 * Converts a matrix into a MHTML.
 */
export function mht(m: Matrix): string;

/**
 * Creates a look-at matrix given the parameters.
 */
export function makeLookAt(
    ex: number,
    ey: number,
    ez: number,
    cx: number,
    cy: number,
    cz: number,
    ux: number,
    uy: number,
    uz: number,
): Matrix;

/**
 * Creates an ortho-matrix given the parameters.
 */
export function makeOrtho(
    left: number,
    right: number,
    bottom: number,
    top: number,
    znear: number,
    zfar: number,
): Matrix;

/**
 * Creates a perspective matrix given the parameters.
 */
export function makePerspective(
    fovy: number,
    aspect: number,
    znear: number,
    zfar: number,
): Matrix;

/**
 * Creates a frustum-matrix given the parameters.
 */
export function makeFrustum(
    left: number,
    right: number,
    bottom: number,
    top: number,
    znear: number,
    zfar: number,
): Matrix;
