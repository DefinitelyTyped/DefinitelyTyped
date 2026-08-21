import type { SvgProperties } from "csstype";

/**
 * A generic type for a 3D generator function, capable of transforming data into 3D shapes.
 */
export interface Shape3DGenerator<ShapeInput, Shape = ShapeInput> {
    /**
     * Generates 3D shapes based on specified parameters and transformations.
     *
     * @param data The data representing the 3D shapes.
     * @returns An array of 3D shapes generated with the specified parameters and transformations.
     */
    (data: ShapeInput[]): Shape[];

    /**
     * Sets or retrieves the origin for rendering the 3D shapes.
     *
     * @param o The origin point for rendering the 3D shapes.
     * @returns If no argument is provided, returns the current origin. Otherwise, sets the origin and returns the function.
     */
    origin(o: Coordinate2D): Shape3DGenerator<ShapeInput, Shape>;
    origin(): Coordinate2D;

    /**
     * Sets or retrieves the scale factor for the 3D shapes.
     *
     * @param s The scale factor for the 3D shapes.
     * @returns If no argument is provided, returns the current scale factor. Otherwise, sets the scale factor and returns the function.
     */
    scale(s: number): Shape3DGenerator<ShapeInput, Shape>;
    scale(): number;

    /**
     * Sets or retrieves the rotation angle around the x-axis.
     *
     * @param ax The rotation angle around the x-axis.
     * @returns If no argument is provided, returns the current rotation angle around the x-axis. Otherwise, sets the rotation angle and returns the function.
     */
    rotateX(ax: number): Shape3DGenerator<ShapeInput, Shape>;
    rotateX(): number;

    /**
     * Sets or retrieves the rotation angle around the y-axis.
     *
     * @param ay The rotation angle around the y-axis.
     * @returns If no argument is provided, returns the current rotation angle around the y-axis. Otherwise, sets the rotation angle and returns the function.
     */
    rotateY(ay: number): Shape3DGenerator<ShapeInput, Shape>;
    rotateY(): number;

    /**
     * Sets or retrieves the rotation angle around the z-axis.
     *
     * @param az The rotation angle around the z-axis.
     * @returns If no argument is provided, returns the current rotation angle around the z-axis. Otherwise, sets the rotation angle and returns the function.
     */
    rotateZ(az: number): Shape3DGenerator<ShapeInput, Shape>;
    rotateZ(): number;

    /**
     * Sets or retrieves the rotation center for the 3D shapes.
     *
     * @param rc The rotation center for the 3D shapes.
     * @returns If no argument is provided, returns the current rotation center. Otherwise, sets the rotation center and returns the function.
     */
    rotationCenter(rc: Coordinate3D): Shape3DGenerator<ShapeInput, Shape>;
    rotationCenter(): Coordinate3D;

    /**
     * Sets or retrieves the x-coordinate for the 3D shapes.
     *
     * @param px The x-coordinate for the 3D shapes.
     * @returns If no argument is provided, returns the current x-coordinate. Otherwise, sets the x-coordinate and returns the function.
     */
    x(px: number | ((p: Point3D) => number)): Shape3DGenerator<ShapeInput, Shape>;
    x(): number;

    /**
     * Sets or retrieves the y-coordinate for the 3D shapes.
     *
     * @param py The y-coordinate for the 3D shapes.
     * @returns If no argument is provided, returns the current y-coordinate. Otherwise, sets the y-coordinate and returns the function.
     */
    y(py: number | ((p: Point3D) => number)): Shape3DGenerator<ShapeInput, Shape>;
    y(): number;

    /**
     * Sets or retrieves the z-coordinate for the 3D shapes.
     *
     * @param pz The z-coordinate for the 3D shapes.
     * @returns If no argument is provided, returns the current z-coordinate. Otherwise, sets the z-coordinate and returns the function.
     */
    z(pz: number | ((p: Point3D) => number)): Shape3DGenerator<ShapeInput, Shape>;
    z(): number;

    /**
     * !IMPORT! ONLY FOR gridplanes
     * Sets or retrieves the rows for 3d gridplanes.
     *
     * @param pz The z-coordinate for the 3D shapes.
     * @returns If no argument is provided, returns the current rows. Otherwise, sets the rows and returns the function.
     */
    rows(pz: number): Shape3DGenerator<ShapeInput, Shape>;
    rows(): number;

    /**
     * Comparator function to sort objects based on their centroid z-values.
     *
     * This function compares the z-values of the centroid property of two objects (a and b).
     * It returns a negative number if a should come before b, a positive number if a should come after b,
     * and 0 if a and b are considered equal in terms of sorting.
     *
     * @param a The first object to compare.
     * @param b The second object to compare.
     * @returns A negative, zero, or positive number indicating the sorting order.
     *
     * @example
     * // Sorting an array of objects based on centroid z-values
     * const sortedArray = unsortedArray.sort(sort);
     */
    sort(a: ShapeInput, b: ShapeInput): number;

    /**
     * A function that draws 3D shapes.
     */
    draw(shapes: ShapeInput[]): void;
}

export interface Coordinate2D {
    x: number;
    y: number;
}

export interface Coordinate3D {
    x: number;
    y: number;
    z: number;
}

/**
 * A point in 3D space represented by the <circle> element.
 * Each point has three coordinates which can be accessed via the x, y, and z accessors.
 */
export type Point3DInput = {
    x: number;
    y: number;
    z: number;
} & SvgProperties;

/**
 * A point in 3D space represented by the <circle> element.
 * Each point has three coordinates which can be accessed via the x, y, and z accessors.
 */
export type Point3D = Point3DInput & {
    rotated: Coordinate3D;
    centroid: Coordinate3D;
    /**
     * The projected point in 2D space.
     */
    projected: Coordinate2D;
};

/**
 * A line in 3D space represented by the <line> element, defined by a start and an endpoint.
 */
export type Line3DInput = {
    start: Point3DInput;
    end: Point3DInput;
} & SvgProperties;

/**
 * A line in 3D space represented by the <line> element, defined by a start and an endpoint.
 */
export type Line3D = {
    start: Point3D;
    end: Point3D;
    centroid: Coordinate3D;
} & SvgProperties;

/**
 * A line strip in 3D space, constructed from an array of lines, represented by the <path> element.
 * Every point will be connected to the next point in the input data array.
 */
export type LineStrips3DInput = Line3DInput[];

/**
 * A line strip in 3D space, constructed from an array of lines, represented by the <path> element.
 * Every point will be connected to the next point in the input data array.
 */
export type LineStrips3D = Line3D[];

/**
 * A triangle in 3D space, defined by three points in counter-clockwise order, represented by the <path> element.
 */
export type Triangle3DInput = [Point3DInput, Point3DInput, Point3DInput];

/**
 * A triangle in 3D space, defined by three points in counter-clockwise order, represented by the <path> element.
 */
export type Triangle3D = [Point3D, Point3D, Point3D] & {
    centroid: Coordinate3D;
    /**
     * True if the triangle is counter-clockwise
     */
    ccw: boolean;
};

/**
 * A plane in 3D space, defined by four points in counter-clockwise order, represented by the <path> element.
 */
export type Plane3DInput = [Point3DInput, Point3DInput, Point3DInput, Point3DInput];

/**
 * A plane in 3D space, defined by four points in counter-clockwise order, represented by the <path> element.
 */
export type Plane3D = [Point3D, Point3D, Point3D, Point3D] & {
    centroid: Coordinate3D;
    /**
     * True if the plane is counter-clockwise
     */
    ccw: boolean;
};

/**
 * A grid plane (multiple planes) in 3D space, constructed from an array of points, represented by x planes.
 * Note: A grid must always have the same number of points per row.
 */
export type GridPlane3DInput = Point3DInput[];

/**
 * A grid plane (multiple planes) in 3D space, constructed from an array of points, represented by x planes.
 * Note: A grid must always have the same number of points per row.
 */
export type GridPlane3D = Array<Plane3D & { plane: `plane-${number}` }>;

/**
 * A polygon in 3D space, defined by x points in counter-clockwise order, represented by the <path> element.
 */
export type Polygon3DInput = Point3DInput[];

/**
 * A polygon in 3D space, defined by x points in counter-clockwise order, represented by the <path> element.
 */
export type Polygon3D = Point3D[] & {
    centroid: Coordinate3D;
    /**
     * True if the polygon is counter-clockwise
     */
    ccw: boolean;
};

/**
 * A cube in 3D space, defined by 8 vertices, represented by 4 planes.
 */
export type Cube3DInput = [
    Point3DInput,
    Point3DInput,
    Point3DInput,
    Point3DInput,
    Point3DInput,
    Point3DInput,
    Point3DInput,
    Point3DInput,
];

/**
 * A cube in 3D space, defined by 8 vertices, represented by 4 planes.
 */
export type Cube3D = [Point3D, Point3D, Point3D, Point3D, Point3D, Point3D, Point3D, Point3D] & {
    centroid: Coordinate3D;
    faces: [Face, Face, Face, Face, Face, Face];
};

export type Face = Plane3D & { face: "front" | "back" | "left" | "right" | "top" | "bottom" };

/**
 * Creates a new 3D generator for drawing a shape specified by the shape method.
 */
export function _3d<Shape3DInput, Shape3D>(): Shape3DGenerator<Shape3DInput, Shape3D> & {
    /**
     * Sets or retrieves the shape for the 3D generator.
     *
     * @param s The shape for the 3D generator.
     * @returns If no argument is provided, returns the current shape. Otherwise, sets the shape and returns the function.
     */
    shape(s: ShapeKind, row?: number): Shape3DGenerator<Shape3DInput, Shape3D>;
    shape(): ShapeKind;
};

export type ShapeKind =
    | "CUBE"
    | "GRID"
    | "LINE"
    | "LINE_STRIP"
    | "PLANE"
    | "POINT"
    | "SURFACE"
    | "TRIANGLE";

/**
 * Creates a new 3D generator for drawing points.
 */
export function points3D(): Shape3DGenerator<Point3DInput, Point3D>;

/**
 * Creates a new 3D generator for drawing lines.
 */
export function lines3D(): Shape3DGenerator<Line3DInput, Line3D>;

/**
 * Creates a new 3D generator for drawing line strips.
 */
export function lineStrips3D(): Shape3DGenerator<LineStrips3DInput, LineStrips3D>;

/**
 * Creates a new 3D generator for drawing triangles.
 */
export function triangles3D(): Shape3DGenerator<Triangle3DInput, Triangle3D>;

/**
 * Creates a new 3D generator for drawing planes.
 */
export function planes3D(): Shape3DGenerator<Plane3DInput, Plane3D>;

/**
 * Creates a new 3D generator for drawing grid planes.
 */
export function gridPlanes3D(): Shape3DGenerator<GridPlane3DInput, GridPlane3D>;

/**
 * Creates a new 3D generator for drawing polygons.
 */
export function polygons3D(): Shape3DGenerator<Polygon3DInput, Polygon3D>;

/**
 * Creates a new 3D generator for drawing cubes.
 */
export function cubes3D(): Shape3DGenerator<Cube3DInput, Cube3D>;
