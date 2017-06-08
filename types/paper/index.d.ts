// Type definitions for Paper.js v0.9.22
// Project: http://paperjs.org/
// Definitions by: Clark Stevenson <http://github.com/clark-stevenson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type NativeMouseEvent = MouseEvent;

declare module 'paper' {

    /**
     * The version of Paper.js, as a string.
     */
    export var version: string;

    /**
    * Gives access to paper's configurable settings.
    */
    export var settings: {

        applyMatrix: boolean;
        handleSize: number;
        hitTolerance: number;

    };

    /**
     * The currently active project.
     */
    export var project: Project;

    /**
     * The list of all open projects within the current Paper.js context.
     */
    export var projects: Project[];

    /**
     * The reference to the active project's view.
     * Read Only.
     */
    export var view: View;

    /**
     * The reference to the active tool.
     */
    export var tool: Tool;

    /**
     * The list of available tools.
     */
    export var tools: Tool[];

    /**
     * Injects the paper scope into any other given scope. Can be used for examle to inject the currently active PaperScope into the window's global scope, to emulate PaperScript-style globally accessible Paper classes and objects
     * Please note: Using this method may override native constructors (e.g. Path, RGBColor). This may cause problems when using Paper.js in conjunction with other libraries that rely on these constructors. Keep the library scoped if you encounter issues caused by this.
     * @param scope -
     */
    export function install(scope: any): void;

    /**
     * Sets up an empty project for us. If a canvas is provided, it also creates a View for it, both linked to this scope.
     * @param element - the HTML canvas element this scope should be associated with, or an ID string by which to find the element.
     */
    export function setup(canvas: HTMLCanvasElement | string): void;

    /**
     * Activates this PaperScope, so all newly created items will be placed in its active project.
     */
    export function activate(): void;

    /**
     * An affine transform performs a linear mapping from 2D coordinates to other 2D coordinates that preserves the "straightness" and "parallelness" of lines.
     * Such a coordinate transformation can be represented by a 3 row by 3 column matrix with an implied last row of [ 0 0 1 ]. This matrix transforms source coordinates (x,y) into destination coordinates (x',y') by considering them to be a column vector and multiplying the coordinate vector by the matrix according to the following process:
     * This class is optimized for speed and minimizes calculations based on its knowledge of the underlying matrix (as opposed to say simply performing matrix multiplication).
     */
    export class Matrix {

        /**
         * Creates a 2D affine transform.
         * @param a - the a property of the transform
         * @param c - the c property of the transform
         * @param b - the b property of the transform
         * @param d - the d property of the transform
         * @param tx - the tx property of the transform
         * @param ty - the ty property of the transform
         */
        constructor(a: number, c: number, b: number, d: number, tx: number, ty: number);

        /**
         * The value that affects the transformation along the x axis when scaling or rotating, positioned at (0, 0) in the transformation matrix.
         */
        a: number;

        /**
         * The value that affects the transformation along the y axis when rotating or skewing, positioned at (1, 0) in the transformation matrix.
         */
        c: number;

        /**
         * The value that affects the transformation along the x axis when rotating or skewing, positioned at (0, 1) in the transformation matrix.
         */
        b: number;

        /**
         * The value that affects the transformation along the y axis when scaling or rotating, positioned at (1, 1) in the transformation matrix.
         */
        d: number;

        /**
         * The distance by which to translate along the x axis, positioned at (2, 0) in the transformation matrix.
         */
        tx: number;

        /**
         * The distance by which to translate along the y axis, positioned at (2, 1) in the transformation matrix.
         */
        ty: number;

        /**
         * The transform values as an array, in the same sequence as they are passed to initialize(a, c,b,d,tx,ty).
         * Read only.
         */
        values: number;

        /**
         * The translation of the matrix as a vector.
         * Read only.
         */
        translation: Point;

        /**
         * The scaling values of the matrix, if it can be decomposed.
         * Read only.
         */
        scaling: Point;

        /**
         * The rotation angle of the matrix, if it can be decomposed.
         * Read only.
         */
        rotation: number;

        /**
         * Sets this transform to the matrix specified by the 6 values.
         * @param a - the a property of the transform
         * @param c - the c property of the transform
         * @param b - the b property of the transform
         * @param d - the d property of the transform
         * @param tx - the tx property of the transform
         * @param ty - the ty property of the transform
         */
        set(a: number, c: number, b: number, d: number, tx: number, ty: number): Matrix;

        /**
         * Returns a copy of this transform
         */
        clone(): Matrix;

        /**
         * Checks whether the two matrices describe the same transformation.
         * @param matrix - the matrix to compare this matrix to
         */
        equals(matrix: Matrix): boolean;

        /**
         * returns a string representation of this transform
         */
        toString(): string;

        /**
         * Resets the matrix by setting its values to the ones of the identity matrix that results in no transformation.
         */
        reset(): void;

        /**
         * Attempts to apply the matrix to the content of item that it belongs to, meaning its transformation is baked into the item's content or children.
         * @param recursively - controls whether to apply transformations recursively on children
         */
        apply(): boolean;

        /**
         * Concatenates this transform with a translate transformation.
         * @param point - the vector to translate by
         */
        translate(point: Point): Matrix;

        /**
         * Concatenates this transform with a translate transformation.
         * @param dx - the distance to translate in the x direction
         * @param dy - the distance to translate in the y direction
         */
        translate(dx: number, dy: number): Matrix;

        /**
         * Concatenates this transform with a scaling transformation.
         * @param scale - the scaling factor
         * @param center [optional] - the center for the scaling transformation
         */
        scale(scale: number, center?: Point): Matrix;

        /**
         * Concatenates this transform with a scaling transformation.
         * @param hor - the horizontal scaling factor
         * @param ver - the vertical scaling factor
         * @param center [optional] - the center for the scaling transformation
         */
        scale(hor: number, ver: number, center?: Point): Matrix;

        /**
         * Concatenates this transform with a rotation transformation around an anchor point.
         * @param angle - the angle of rotation measured in degrees
         * @param center - the anchor point to rotate around
         */
        rotate(angle: number, center: Point): Matrix;

        /**
         * Concatenates this transform with a rotation transformation around an anchor point.
         * @param angle - the angle of rotation measured in degrees
         * @param x - the x coordinate of the anchor point
         * @param y - the y coordinate of the anchor point
         */
        rotate(angle: number, x: number, y: number): Matrix;

        /**
         * Concatenates this transform with a shear transformation.
         * @param shear - the shear factor in x and y direction
         * @param center [optional] - the center for the shear transformation
         */
        shear(shear: Point, center?: Point): Matrix;

        /**
         * Concatenates this transform with a shear transformation.
         * @param hor - the horizontal shear factor
         * @param ver - the vertical shear factor
         * @param center [optional] - the center for the shear transformation
         */
        shear(hor: number, ver: number, center?: Point): Matrix;

        /**
         * Concatenates this transform with a skew transformation.
         * @param skew - the skew angles in x and y direction in degrees
         * @param center [optional] - the center for the skew transformation
         */
        skew(skew: Point, center?: Point): Matrix;

        /**
         * Concatenates this transform with a skew transformation.
         * @param hor - the horizontal skew angle in degrees
         * @param ver - the vertical skew angle in degrees
         * @param center [optional] - the center for the skew transformation
         */
        skew(hor: number, ver: number, center?: Point): Matrix;

        /**
         * Concatenates the given affine transform to this transform.
         * @param mx - the transform to concatenate
         */
        concatenate(mx: Matrix): Matrix;

        /**
         * Pre-concatenates the given affine transform to this transform.
         * @param mx - the transform to preconcatenate
         */
        preConcatenate(mx: Matrix): Matrix;

        /**
         * Returns a new instance of the result of the concatenation of the given affine transform with this transform.
         * @param mx - the transform to concatenate
         */
        chain(mx: Matrix): Matrix;

        /**
         * Returns whether this transform is the identity transform
         */
        isIdentity(): boolean;

        /**
         * Returns whether the transform is invertible. A transform is not invertible if the determinant is 0 or any value is non-finite or NaN.
         */
        isInvertible(): boolean;

        /**
         * Checks whether the matrix is singular or not. Singular matrices cannot be inverted.
         */
        isSingular(): boolean;

        /**
         * Transforms a point and returns the result.
         * @param point - the point to be transformed
         */
        transform(point: Point): Matrix;

        /**
         * Transforms an array of coordinates by this matrix and stores the results into the destination array, which is also returned.
         * @param src - the array containing the source points as x, y value pairs
         * @param dst - the array into which to store the transformed point pairs
         * @param count - the number of points to transform
         */
        transform(src: number[], dst: number[], count: number): number[];

        /**
         * Inverse transforms a point and returns the result.
         * @param point - the point to be transformed
         */
        inverseTransform(point: Point): Matrix;

        /**
         * Attempts to decompose the affine transformation described by this matrix into scaling, rotation and shearing, and returns an object with these properties if it succeeded, null otherwise.
         */
        decompose(): any;

        /**
         * Creates the inversion of the transformation of the matrix and returns it as a new insteance. If the matrix is not invertible (in which case isSingular() returns true), null is returned.
         */
        inverted(): Matrix;

        /**
         * Applies this matrix to the specified Canvas Context.
         * @param ctx -
         */
        applyToContext(ctx: CanvasRenderingContext2D): void;

    }
    /**
     * The Point object represents a point in the two dimensional space of the Paper.js project. It is also used to represent two dimensional vector objects.
     */
    export class Point {

        /**
         * Returns a new point object with the smallest x and y of the supplied points.
         * @param point1 -
         * @param point2 -
         */
        static min(point1: Point, point2: Point): Point;

        /**
         * Returns a new point object with the largest x and y of the supplied points.
         * @param point1 -
         * @param point2 -
         */
        static max(point1: Point, point2: Point): Point;

        /**
         * Returns a point object with random x and y values between 0 and 1.
         */
        static random(): Point;

        /**
         * Creates a Point object with the given x and y coordinates.
         * @param x - the x coordinate
         * @param y - the y coordinate
         */
        constructor(x: number, y: number);

        /**
         * Creates a Point object using the numbers in the given array as coordinates.
         * @param array - an array of numbers to use as coordinates
         */
        constructor(values: number[]);

        /**
         * Creates a Point object using the properties in the given object.
         * @param object - the object describing the point's properties
         */
        constructor(object: any);

        /**
         * Creates a Point object using the width and height values of the given Size object.
         * @param size - the size width and height to use
         */
        constructor(size: Size);

        /**
         * Creates a Point object using the coordinates of the given Point object.
         * @param point - the point to copy
         */
        constructor(point: Point);

        /**
         * The x coordinate of the point
         */
        x: number;

        /**
         * The y coordinate of the point
         */
        y: number;

        /**
         * The length of the vector that is represented by this point's coordinates.
         * Each point can be interpreted as a vector that points from the origin (x = 0, y = 0) to the point's location.
         * Setting the length changes the location but keeps the vector's angle.
         */
        length: number;

        /**
         * The vector's angle in degrees, measured from the x-axis to the vector.
         */
        angle: number;

        /**
         * The vector's angle in radians, measured from the x-axis to the vector.
         */
        angleInRadians: number;

        /**
         * The quadrant of the angle of the point.
         * Angles between 0 and 90 degrees are in quadrant 1. Angles between 90 and 180 degrees are in quadrant 2, angles between 180 and 270 degrees are in quadrant 3 and angles between 270 and 360 degrees are in quadrant 4.
         * Read only.
         */
        quadrant: number;

        /**
         * This property is only present if the point is an anchor or control point of a Segment or a Curve. In this case, it returns true it is selected, false otherwise
         */
        selected: boolean;

        /**
         * Checks whether the coordinates of the point are equal to that of the supplied point.
         * @param point - the point to check against
         */
        equals(point: Point): boolean;

        /**
         * Returns a copy of the point.
         */
        clone(): Point;

        /**
         * a string representation of the point
         */
        toString(): string;

        /**
         * Returns the smaller angle between two vectors. The angle is unsigned, no information about rotational direction is given.
         * @param point -
         */
        getAngle(Point: Point): number;

        /**
         * Returns the smaller angle between two vectors in radians. The angle is unsigned, no information about rotational direction is given.
         * @param point: Point
         */
        getAngleInRadians(point: Point): number;

        /**
         * Returns the angle between two vectors. The angle is directional and signed, giving information about the rotational direction.
         * Read more about angle units and orientation in the description of the angle property.
         * @param point -
         */
        getDirectedAngle(point: Point): number;

        /**
         * Returns the distance between the point and another point.
         * @param point -
         * @param squared [optional] - Controls whether the distance should remain squared, or its square root should be calculated. default: false
         */
        getDistance(point: Point, squared?: boolean): number;

        /**
         * Normalize modifies the length of the vector to 1 without changing its angle and returns it as a new point. The optional length parameter defines the length to normalize to.
         * The object itself is not modified!
         * @param length [optional] - The length of the normalized vector, default: 1
         */
        normalize(length?: number): Point;

        /**
         * Rotates the point by the given angle around an optional center point.
         * The object itself is not modified.
         * Read more about angle units and orientation in the description of the angle property.
         * @param angle - the rotation angle
         * @param center - the center point of the rotation
         */
        rotate(angle: number, center: Point): Point;

        /**
         * Transforms the point by the matrix as a new point. The object itself is not modified!
         * @param matrix -
         */
        transform(matrix: Matrix): Point;

        /**
         * Checks whether the point is inside the boundaries of the rectangle.
         * @param rect - the rectangle to check against
         */
        isInside(rect: Rectangle): boolean;

        /**
         * Checks if the point is within a given distance of another point.
         * @param point - the point to check against
         * @param tolerance - the maximum distance allowed
         */
        isClose(point: Point, tolerance: number): boolean;

        /**
         * Checks if the vector represented by this point is colinear (parallel) to another vector.
         * @param point - the vector to check against
         */
        isColinear(point: Point): boolean;

        /**
         * Checks if the vector represented by this point is orthogonal (perpendicular) to another vector.
         * @param point - the vector to check against
         */
        isOrthogonal(point: Point): boolean;

        /**
         * Checks if this point has both the x and y coordinate set to 0.
         */
        isZero(): boolean;

        /**
         * Checks if this point has an undefined value for at least one of its coordinates.
         */
        isNan(): boolean;

        /**
         * Returns the dot product of the point and another point.
         * @param point -
         */
        dot(point: Point): number;

        /**
         * Returns the cross product of the point and another point.
         * @param point -
         */
        cross(point: Point): number;

        /**
         * Returns the projection of the point on another point.
         * Both points are interpreted as vectors.
         * @param point -
         */
        project(point: Point): Point;

        /**
         * Returns a new point with rounded x and y values. The object itself is not modified!
         */
        round(): Point;

        /**
         * Returns a new point with the nearest greater non-fractional values to the specified x and y values. The object itself is not modified!
         */
        ceil(): Point;

        /**
         * Returns a new point with the nearest smaller non-fractional values to the specified x and y values. The object itself is not modified!
         */
        floor(): Point;

        /**
         * Returns a new point with the absolute values of the specified x and y values. The object itself is not modified!
         */
        abs(): Point;

        /*
         * Returns a new point
         * @param point - The point you want to add with
         */
        add(point: Point): Point;
        add(point: number[]): Point;

        /*
         * Returns a new point
         * @param point - The point you want to subtract with
         */
        subtract(point: Point): Point;
        subtract(point: number[]): Point;

        /*
         * Returns the new multiplied point
         * @param point - The point you want to multiply with
         */
        multiply(point: Point): Point;
        multiply(point: number[]): Point;
        multiply(point: number): Point;

        /*
         * Returns the new divided point
         * @param point - The point you want to divide with
         */
        divide(point: Point): Point;
        divide(point: number[]): Point;
        divide(point: number): Point;

    }
    /**
     * A Rectangle specifies an area that is enclosed by it's top-left point (x, y), its width, and its height. It should not be confused with a rectangular path, it is not an item.
     */
    export class Rectangle {

        /**
         * Creates a Rectangle object.
         * @param point - the top-left point of the rectangle
         * @param size - the size of the rectangle
         */
        constructor(point: Point, size: Size);

        /**
         * Creates a rectangle object.
         * @param x - the left coordinate
         * @param y - the top coordinate
         * @param width - the width
         * @param height - the height
         */
        constructor(x: number, y: number, width: number, height: number);

        /**
         * Creates a Rectangle object.
         * @param object - an object containing properties to be set on the rectangle.
         */
        constructor(object: any);

        /**
         * Creates a rectangle object from the passed points. These do not necessarily need to be the top left and bottom right corners, the constructor figures out how to fit a rectangle between them.
         * @param from - The first point defining the rectangle
         * @param to - The second point defining the rectangle
         */
        constructor(from: Point, to: Point);

        /**
         * Creates a new rectangle object from the passed rectangle object.
         * @param rt - the rectangle to copy from
         */
        constructor(rt: Rectangle);

        /**
         * The x position of the rectangle.
         */
        x: number;

        /**
         * The y position of the rectangle.
         */
        y: number;

        /**
         * The width of the rectangle.
         */
        width: number;

        /**
         * The height of the rectangle.
         */
        height: number;

        /**
         * The top-left point of the rectangle
         */
        point: Point;

        /**
         * The size of the rectangle
         */
        size: Size;

        /**
         * The position of the left hand side of the rectangle. Note that this doesn't move the whole rectangle; the right hand side stays where it was.
         */
        left: number;

        /**
         * The top coordinate of the rectangle. Note that this doesn't move the whole rectangle: the bottom won't move.
         */
        top: number;

        /**
         * The position of the right hand side of the rectangle. Note that this doesn't move the whole rectangle; the left hand side stays where it was.
         */
        right: number;

        /**
         * The bottom coordinate of the rectangle. Note that this doesn't move the whole rectangle: the top won't move.
         */
        bottom: number;

        /**
         * The center point of the rectangle.
         */
        center: Point;

        /**
         * The top-left point of the rectangle.
         */
        topLeft: Point;

        /**
         * The top-right point of the rectangle.
         */
        topRight: Point;

        /**
         * The bottom-left point of the rectangle.
         */
        bottomLeft: Point;

        /**
         * The bottom-right point of the rectangle.
         */
        bottomRight: Point;

        /**
         * The left-center point of the rectangle.
         */
        leftCenter: Point;

        /**
         * The top-center point of the rectangle.
         */
        topCenter: Point;

        /**
         * The right-center point of the rectangle.
         */
        rightCenter: Point;

        /**
         * The bottom-center point of the rectangle.
         */
        bottomCenter: Point;

        /**
         * The area of the rectangle in square points.
         * Read only.
         */
        area: number;

        /**
         * Specifies whether an item's bounds are selected and will also mark the item as selected.
         * Paper.js draws the visual bounds of selected items on top of your project. This can be useful for debugging.
         */
        selected: boolean;

        /**
         * Returns a copy of the rectangle.
         */
        clone(): Rectangle;

        /**
         * Checks whether the coordinates and size of the rectangle are equal to that of the supplied rectangle.
         * @param rect - the rectangle to check against
         */
        equals(rect: Rectangle): boolean;

        /**
         * a string representation of this rectangle
         */
        toString(): string;

        /**
         * Returns true if the rectangle is empty, false otherwise
         */
        isEmpty(): boolean;

        /**
         * Tests if the specified point is inside the boundary of the rectangle.
         * @param point - the specified point
         */
        contains(point: Point): boolean;

        /**
         * Tests if the interior of the rectangle entirely contains the specified rectangle.
         * @param rect - The specified rectangle
         */
        contains(rect: Rectangle): boolean;

        /**
         * Tests if the interior of this rectangle intersects the interior of another rectangle. Rectangles just touching each other are considered as non-intersecting.
         * @param rect - the specified rectangle
         */
        intersects(rect: Rectangle): boolean;

        /**
         * Returns a new rectangle representing the intersection of this rectangle with the specified rectangle.
         * @param rect - The rectangle to be intersected with this rectangle
         */
        intersect(rect: Rectangle): Rectangle;

        /**
         * Returns a new rectangle representing the union of this rectangle with the specified rectangle.
         * @param rect - the rectangle to be combined with this rectangle
         */
        unite(rect: Rectangle): Rectangle;

        /**
         * Adds a point to this rectangle. The resulting rectangle is the smallest rectangle that contains both the original rectangle and the specified point.
         * After adding a point, a call to contains(point) with the added point as an argument does not necessarily return true.
         * The rectangle.contains(point) method does not return true for points on the right or bottom edges of a rectangle. Therefore, if the added point falls on the left or bottom edge of the enlarged rectangle, rectangle.contains(point) returns false for that point.
         * @param point - the point to add to the rectangle
         */
        include(point: Point): Point;

        /**
         * Expands the rectangle by the specified amount in horizontal and vertical directions.
         * @param amount - the amount to expand the rectangle in both directions
         */
        expand(amount: number | Size | Point): void;

        /**
         * Expands the rectangle by the specified amounts in horizontal and vertical directions.
         * @param hor - the amount to expand the rectangle in horizontal direction
         * @param ver - the amount to expand the rectangle in vertical direction
         */
        expand(hor: number, ver: number): void;

        /**
         * Scales the rectangle by the specified amount from its center.
         * @param amount - the amount to scale by
         */
        scale(amount: number): void;

        /**
         * Scales the rectangle in horizontal direction by the specified hor amount and in vertical direction by the specified ver amount from its center.
         * @param hor - the amount to scale the rectangle in horizontal direction
         * @param ver - the amount to scale the rectangle in vertical direction
         */
        scale(hor: number, ver: number): void;

    }
    /**
     * The Size object is used to describe the size or dimensions of something, through its width and height properties.
     */
    export class Size {

        /**
         * Returns a new size object with the smallest width and height of the supplied sizes.
         * @param size1 - the first size
         * @param size2 - the second size
         */
        static min(size1: Size, size2: Size): Size;

        /**
         * Returns a new size object with the largest width and height of the supplied sizes.
         * @param size1 - the first size
         * @param size2 - the second size
         */
        static max(size1: Size, size2: Size): Size;

        /**
         * Returns a size object with random width and height values between 0 and 1.
         */
        static random(): Size;

        /**
         * Creates a Size object with the given width and height values.
         * @param width - the width
         * @param height - the height
         */
        constructor(width: number, height: number);

        /**
         * Creates a Size object using the numbers in the given array as dimensions.
         * @param array - an array of numbers
         */
        constructor(array: number[]);

        /**
         * Creates a Size object using the properties in the given object.
         * @param object - the object literal containing properies (width:10, height:10 etc)
         */
        constructor(object: any);

        /**
         * Creates a Size object using the coordinates of the given Size object.
         * @param size - the size to duplicate from
         */
        constructor(size: Size);

        /**
         * Creates a Size object using the point.x and point.y values of the given Point object.
         * @param point - the point from which to create a size
         */
        constructor(point: Point);

        /**
         * The width of the size
         */
        width: number;

        /**
         * The height of the size
         */
        height: number;

        /**
         * WARNING - This seems undocumented/incorrect
         */
        equals(): boolean;

        /**
         * Returns a copy of the size.
         */
        clone(): Size;

        /**
         * a string representation of the size
         */
        toString(): string;

        /**
         * Checks if this size has both the width and height set to 0.
         */
        isZero(): boolean;

        /**
         * Checks if the width or the height of the size are NaN.
         */
        isNan(): boolean;

        /**
         * Returns a new size with rounded width and height values. The object itself is not modified!
         */
        round(): Size;

        /**
         * Returns a new size with the nearest greater non-fractional values to the specified width and height values. The object itself is not modified!
         */
        ceil(): Size;

        /**
         * Returns a new size with the nearest smaller non-fractional values to the specified width and height values. The object itself is not modified!
         */
        floor(): Size;

        /**
         * Returns a new size with the absolute values of the specified width and height values. The object itself is not modified!
         */
        abs(): Size;

        /*
         * Returns the new multiplied size
         * @param point - The size you want to multiply with
         */
        multiply(point: Size): Size;
        multiply(point: number[]): Size;
        multiply(point: number): Size;

        /*
         * Returns the new divided size
         * @param point - The size you want to divide with
         */
        divide(point: Size): Size;
        divide(point: number[]): Size;
        divide(point: number): Size;

    }
    export interface IFrameEvent {

        /**
         * the number of times the frame event was fired.
         */
        count: number;

        /**
         * the total amount of time passed since the first
         */
        time: number;

        /**
         *
         */
        delta: number;

    }
    /**
     * The PaperScope class represents the scope associated with a Paper context. When working with PaperScript, these scopes are automatically created for us, and through clever scoping the properties and methods of the active scope seem to become part of the global scope.
     * When working with normal JavaScript code, PaperScope objects need to be manually created and handled.
     * Paper classes can only be accessed through PaperScope objects. Thus in PaperScript they are global, while in JavaScript, they are available on the global paper object. For JavaScript you can use paperScope.install(scope) to install the Paper classes and objects on the global scope. Note that when working with more than one scope, this still works for classes, but not for objects like paperScope.project, since they are not updated in the injected scope if scopes are switched.
     * The global paper object is simply a reference to the currently active PaperScope.
     */
    export class PaperScope {

        /**
         * The version of Paper.js, as a string.
         */
        version: string;

        /**
        * Gives access to paper's configurable settings.
        */
        settings: {

            applyMatrix: boolean;
            handleSize: number;
            hitTolerance: number;

        };

        /**
         * The currently active project.
         */
        project: Project;

        /**
         * The list of all open projects within the current Paper.js context.
         */
        projects: Project[];

        /**
         * The reference to the active project's view.
         * Read Only.
         */
        view: View;

        /**
         * The reference to the active tool.
         */
        tool: Tool;

        /**
         * The list of available tools.
         */
        tools: Tool[];

        /**
         * Injects the paper scope into any other given scope. Can be used for examle to inject the currently active PaperScope into the window's global scope, to emulate PaperScript-style globally accessible Paper classes and objects
         * Please note: Using this method may override native constructors (e.g. Path, RGBColor). This may cause problems when using Paper.js in conjunction with other libraries that rely on these constructors. Keep the library scoped if you encounter issues caused by this.
         * @param scope -
         */
        install(scope: any): void;

        /**
         * Sets up an empty project for us. If a canvas is provided, it also creates a View for it, both linked to this scope.
         * @param element - the HTML canvas element this scope should be associated with, or an ID string by which to find the element.
         */
        setup(canvas: HTMLCanvasElement | string): void;

        /**
         * Activates this PaperScope, so all newly created items will be placed in its active project.
         */
        activate(): void;

        /**
         * Retrieves a PaperScope object with the given scope id.
         * @param id -
         */
        static get(id: string): PaperScope;

    }
    /**
     * The Item type allows you to access and modify the items in Paper.js projects. Its functionality is inherited by different project item types such as Path, CompoundPath, Group, Layer and Raster. They each add a layer of functionality that is unique to their type, but share the underlying properties and functions that they inherit from Item.
     */
    export class Item {

        /**
         * The tangential vector to the #curve at the given location.
         */
        tangent: Point;

        /**
         * The normal vector to the #curve at the given location.
         */
        normal: Point;

        /**
         * The curvature of the #curve at the given location.
         */
        curvature: number;

        /**
         * The unique id of the item.
         * Read Only.
         */
        id: number;

        /**
         * The class name of the item as a string.
         * String('Group', 'Layer', 'Path', 'CompoundPath', 'Shape', 'Raster', 'PlacedSymbol', 'PointText')
         */
        className: string;

        /**
         * The name of the item. If the item has a name, it can be accessed by name through its parent's children list.
         */
        name: string;

        /**
         * The path style of the item.
         */
        style: Style;

        /**
         * Specifies whether the item is visible. When set to false, the item won't be drawn.
         */
        visible: boolean;

        /**
         * The blend mode with which the item is composited onto the canvas. Both the standard canvas compositing modes, as well as the new CSS blend modes are supported. If blend-modes cannot be rendered natively, they are emulated. Be aware that emulation can have an impact on performance.
         * String('normal', 'multiply', 'screen', 'overlay', 'soft-light', 'hard-light', 'color-dodge', 'color-burn', 'darken', 'lighten', 'difference', 'exclusion', 'hue', 'saturation', 'luminosity', 'color', 'add', 'subtract', 'average', 'pin-light', 'negation', 'source-over', 'source-in', 'source-out', 'source-atop', 'destination-over', 'destination-in', 'destination-out', 'destination-atop', 'lighter', 'darker', 'copy', 'xor')
         */
        blendMode: string;

        /**
         * The opacity of the item as a value between 0 and 1.
         */
        opacity: number;

        /**
         * Specifies whether the item is selected. This will also return true for Group items if they are partially selected, e.g. groups containing selected or partially selected paths.
         * Paper.js draws the visual outlines of selected items on top of your project. This can be useful for debugging, as it allows you to see the construction of paths, position of path curves, individual segment points and bounding boxes of symbol and raster items.
         */
        selected: boolean;

        /**
         * Specifies whether the item defines a clip mask. This can only be set on paths, compound paths, and text frame objects, and only if the item is already contained within a clipping group.
         */
        clipMask: boolean;

        /**
         * A plain javascript object which can be used to store arbitrary data on the item.
         */
        data: any;

        /**
         * The item's position within the parent item's coordinate system. By default, this is the rectangle.center of the item's bounds rectangle.
         */
        position: Point;

        /**
         * The item's pivot point specified in the item coordinate system, defining the point around which all transformations are hinging. This is also the reference point for position. By default, it is set to null, meaning the rectangle.center of the item's bounds rectangle is used as pivot.
         */
        pivot: Point;

        /**
         * The bounding rectangle of the item excluding stroke width.
         */
        bounds: Rectangle;

        /**
         * The bounding rectangle of the item including stroke width.
         */
        strokeBounds: Rectangle;

        /**
         * The bounding rectangle of the item including handles.
         */
        handleBounds: Rectangle;

        /**
         * The current rotation angle of the item, as described by its matrix.
         */
        rotation: number;

        /**
         * The current scale factor of the item, as described by its matrix.
         */
        scaling: Point;

        /**
         * The item's transformation matrix, defining position and dimensions in relation to its parent item in which it is contained.
         */
        matrix: Matrix;

        /**
         * The item's global transformation matrix in relation to the global project coordinate space. Note that the view's transformations resulting from zooming and panning are not factored in.
         * Read Only.
         */
        globalMatrix: Matrix;

        /**
         * Controls whether the transformations applied to the item (e.g. through transform(matrix), rotate(angle), scale(scale), etc.) are stored in its matrix property, or whether they are directly applied to its contents or children (passed on to the segments in Path items, the children of Group items, etc.).
         */
        applyMatrix: boolean;

        /**
         * The project that this item belongs to.
         * Read only.
         */
        project: Project;

        /**
         * The view that this item belongs to.
         * Read Only.
         */
        view: View;

        /**
         * The layer that this item is contained within.
         * Read Only.
         */
        layer: Layer;

        /**
         * The item that this item is contained within.
         */
        parent: Item;

        /**
         * The children items contained within this item. Items that define a name can also be accessed by name.
         * Please note: The children array should not be modified directly using array functions. To remove single items from the children list, use item.remove(), to remove all items from the children list, use item.removeChildren(). To add items to the children list, use item.addChild(item) or item.insertChild(index, item).
         */
        children: Item[];

        /**
         * The first item contained within this item. This is a shortcut for accessing item.children[0].
         */
        firstChild: Item;

        /**
         * The last item contained within this item.This is a shortcut for accessing item.children[item.children.length - 1].
         */
        lastChild: Item;

        /**
         * The next item on the same level as this item.
         * Read Only.
         */
        nextSibling: Item;

        /**
         * The previous item on the same level as this item.
         * Read Only.
         */
        previousSibling: Item;

        /**
         * The index of this item within the list of its parent's children.
         * Read only.
         */
        index: number;

        /**
         * The color of the stroke.
         */
        strokeColor: Color | string;

        /**
         * The width of the stroke.
         */
        strokeWidth: number;

        /**
         * The shape to be used at the beginning and end of open Path items, when they have a stroke.
         * String('round', 'square', 'butt')
         */
        strokeCap: string;

        /**
         * The shape to be used at the segments and corners of Path items when they have a stroke.
         * String('miter', 'round', 'bevel')
         */
        strokeJoin: string;

        /**
         * The dash offset of the stroke.
         */
        dashOffset: number;

        /**
         * Specifies whether the stroke is to be drawn taking the current affine transformation into account (the default behavior), or whether it should appear as a non-scaling stroke.
         */
        strokeScaling: boolean;

        /**
         * Specifies an array containing the dash and gap lengths of the stroke.
         */
        dashArray: number[];

        /**
         * When two line segments meet at a sharp angle and miter joins have been specified for item.strokeJoin, it is possible for the miter to extend far beyond the item.strokeWidth of the path. The miterLimit imposes a limit on the ratio of the miter length to the item.strokeWidth.
         */
        miterLimit: number;

        /**
         * The winding-rule with which the shape gets filled. Please note that only modern browsers support winding-rules other than 'nonzero'.
         * String('nonzero', 'evenodd')
         */
        windingRule: string;

        /**
         * The fill color of the item.
         */
        fillColor: Color | string;

        /**
         * The fill rule.
         */
        fillRule: string;

        /**
         * The color the item is highlighted with when selected. If the item does not specify its own color, the color defined by its layer is used instead.
         */
        selectedColor: Color | string;

        /**
         * Item level handler function to be called on each frame of an animation.
         * The function receives an event object which contains information about the frame event:
         */
        onFrame: (event: IFrameEvent) => void;

        /**
         * The function to be called when the mouse button is pushed down on the item. The function receives a MouseEvent object which contains information about the mouse event.
         */
        onMouseDown: (event: MouseEvent) => void;

        /**
         * The function to be called when the mouse button is released over the item.
         * The function receives a MouseEvent object which contains information about the mouse event.
         */
        onMouseUp: (event: MouseEvent) => void;

        /**
         * The function to be called when the mouse clicks on the item. The function receives a MouseEvent object which contains information about the mouse event.
         */
        onClick: (event: MouseEvent) => void;

        /**
         * The function to be called when the mouse double clicks on the item. The function receives a MouseEvent object which contains information about the mouse event.
         */
        onDoubleClick: (event: MouseEvent) => void;

        /**
         * The function to be called repeatedly when the mouse moves on top of the item. The function receives a MouseEvent object which contains information about the mouse event.
         */
        onMouseMove: (event: MouseEvent) => void;

        /**
         * The function to be called when the mouse moves over the item. This function will only be called again, once the mouse moved outside of the item first. The function receives a MouseEvent object which contains information about the mouse event.
         */
        onMouseEnter: (event: MouseEvent) => void;

        /**
         * The function to be called when the mouse moves out of the item.
         * The function receives a MouseEvent object which contains information about the mouse event.
         */
        onMouseLeave: (event: MouseEvent) => void;

        /**
         * Sets those properties of the passed object literal on this item to the values defined in the object literal, if the item has property of the given name (or a setter defined for it).
         */
        set(props: any): Item;

        /**
         * Clones the item within the same project and places the copy above the item.
         * @param insert [optional] - specifies whether the copy should be inserted into the DOM. When set to true, it is inserted above the original. default: true
         */
        clone(insert?: boolean): Item;

        /**
         * When passed a project, copies the item to the project, or duplicates it within the same project. When passed an item, copies the item into the specified item.
         * @param item - the item or project to copy the item to
         */
        copyTo(item: Item): Item;

        /**
         * Rasterizes the item into a newly created Raster object. The item itself is not removed after rasterization.
         * @param resolution [optional] - the resolution of the raster in pixels per inch (DPI). If not specified, the value of view.resolution is used. default: view.resolution
         */
        rasterize(resolution: number): Raster;

        /**
         * Checks whether the item's geometry contains the given point.
         * @param point - The point to check for.
         */
        contains(point: Point): boolean;

        /**
         *
         * @param rect - the rectangle to check against
         */
        isInside(rect: Rectangle): boolean;

        /**
         *
         * @param item - the item to check against
         */
        intersects(item: Item): boolean;

        /**
         * Perform a hit-test on the items contained within the project at the location of the specified point.
         * The options object allows you to control the specifics of the hit-test and may contain a combination of the following values:
         * @param point - the point where the hit-test should be performed
         * @param options.tolerance -the tolerance of the hit-test in points. Can also be controlled through paperScope.settings.hitTolerance
         * @param options.class - only hit-test again a certain item class and its sub-classes: Group, Layer, Path, CompoundPath, Shape, Raster, PlacedSymbol, PointText, etc.
         * @param options.fill - hit-test the fill of items.
         * @param options.stroke - hit-test the stroke of path items, taking into account the setting of stroke color and width.
         * @param options.segments - hit-test for segment.point of Path items.
         * @param options.curves - hit-test the curves of path items, without taking the stroke color or width into account.
         * @param options.handles - hit-test for the handles.  (segment.handleIn / segment.handleOut) of path segments.
         * @param options.ends - only hit-test for the first or last segment points of open path items.
         * @param options.bounds - hit-test the corners and side-centers of the bounding rectangle of items (item.bounds).
         * @param options.center - hit-test the rectangle.center of the bounding rectangle of items (item.bounds).
         * @param options.guides - hit-test items that have Item#guide set to true.
         * @param options.selected - only hit selected items.
         */
        hitTest(point: Point, options?: { tolerance?: number; class?: string; fill?: boolean; stroke?: boolean; segments?: boolean; curves?: boolean; handles?: boolean; ends?: boolean; bounds?: boolean; center?: boolean; guides?: boolean; selected?: boolean; }): HitResult;

        /**
         * Checks whether the item matches the criteria described by the given object, by iterating over all of its properties and matching against their values through matches(name, compare).
         * See project.getItems(match) for a selection of illustrated examples.
         * @param match - the criteria to match against.
         */
        matches(match: any): boolean;

        /**
         * Checks whether the item matches the given criteria. Extended matching is possible by providing a compare function or a regular expression.
         * Matching points, colors only work as a comparison of the full object, not partial matching (e.g. only providing the x-coordinate to match all points with that x-value). Partial matching does work for item.data.
         * @param name - the name of the state to match against.
         * @param compare - the value, function or regular expression to compare against.
         */
        matches(name: string, compare: any): boolean;

        /**
         * Fetch the descendants (children or children of children) of this item that match the properties in the specified object.
         * Extended matching is possible by providing a compare function or regular expression. Matching points, colors only work as a comparison of the full object, not partial matching (e.g. only providing the x- coordinate to match all points with that x-value). Partial matching does work for item.data.
         * Matching items against a rectangular area is also possible, by setting either match.inside or match.overlapping to a rectangle describing the area in which the items either have to be fully or partly contained.
         * @param match.inside - the rectangle in which the items need to be fully contained.
         * @param match.overlapping - the rectangle with which the items need to at least partly overlap.
         */
        getItems(match: any): Item[];

        /**
         * Fetch the first descendant (child or child of child) of this item that matches the properties in the specified object.
         * Extended matching is possible by providing a compare function or regular expression. Matching points, colors only work as a comparison of the full object, not partial matching (e.g. only providing the x- coordinate to match all points with that x-value). Partial matching does work for item.data.
         * @param match - the criteria to match against
         */
        getItem(match: any): Item;

        /**
         * Exports (serializes) the project with all its layers and child items to a JSON data string.
         * @param options [optional] - default {asString: true, precision: 5}
         * @param options.asString - whether the JSON is returned as a Object or a String.
         * @param options.precision - the amount of fractional digits in numbers used in JSON data.
         */
        exportJSON(options?: { asString?: boolean; precision?: number }): string;

        /**
         * Imports (deserializes) the stored JSON data into the project.
         * Note that the project is not cleared first. You can call project.clear() to do so.
         */
        importJSON(json: string): void;

        /**
         * Exports the project with all its layers and child items as an SVG DOM, all contained in one top level SVG group node.
         * @param options [optional] the export options, default: { asString: false, precision: 5, matchShapes: false }
         * @param options.asString - whether a SVG node or a String is to be returned.
         * @param options.precision - the amount of fractional digits in numbers used in SVG data.
         * @param options.matchShapes - whether path items should tried to be converted to shape items, if their geometries can be made to match
         */
        exportSVG(options?: { asString?: boolean; precision?: number; matchShapes?: boolean }): SVGElement;

        /**
         * Converts the provided SVG content into Paper.js items and adds them to the active layer of this project.
         * Note that the project is not cleared first. You can call project.clear() to do so.
         * @param svg - the SVG content to import
         * @param options [optional] - the import options, default: { expandShapes: false }
         * @param options.expandShapes - whether imported shape items should be expanded to path items.
         */
        importSVG(svg: SVGElement | string, options?: any): Item;

        /**
         * Adds the specified item as a child of this item at the end of the its children list. You can use this function for groups, compound paths and layers.
         * @param item - the item to add as a child
         */
        addChild(item: Item): Item;

        /**
         * Inserts the specified item as a child of this item at the specified index in its children list. You can use this function for groups, compound paths and layers.
         * @param index - the index
         * @param item - the item to be inserted as a child
         */
        insertChild(index: number, item: Item): Item;

        /**
         * Adds the specified items as children of this item at the end of the its children list. You can use this function for groups, compound paths and layers.
         * @param items - The items to be added as children
         */
        addChildren(items: Item[]): Item[];

        /**
         * Inserts the specified items as children of this item at the specified index in its children list. You can use this function for groups, compound paths and layers.
         * @param index -
         * @param items - The items to be appended as children
         */
        insertChildren(index: number, items: Item[]): Item[];

        /**
         * Inserts this item above the specified item.
         * @param item - the item above which it should be inserted
         */
        insertAbove(item: Item): Item;

        /**
         * Inserts this item below the specified item.
         * @param item - the item below which it should be inserted
         */
        insertBelow(item: Item): Item;

        /**
         * Moves this item above the specified item. Returns true if the item
         * was moved.
         * @param item - the item above which it should be moved
         */
        moveAbove(item: Item): boolean;

        /**
         * Moves this item below the specified item. Returns true if the item
         * was moved.
         * @param item - the item below which it should be moved
         */
        moveBelow(item: Item): boolean;

        /**
         * Sends this item to the back of all other items within the same parent.
         */
        sendToBack(): void;

        /**
         * Brings this item to the front of all other items within the same parent.
         */
        bringToFront(): void;

        /**
         * If this is a group, layer or compound-path with only one child-item, the child-item is moved outside and the parent is erased. Otherwise, the item itself is returned unmodified.
         */
        reduce(): Item;

        /**
         * Removes the item and all its children from the project. The item is not destroyed and can be inserted again after removal.
         */
        remove(): boolean;

        /**
         * Replaces this item with the provided new item which will takes its place in the project hierarchy instead.
         * @param item - the item to replace this one with
         */
        replaceWith(item: Item): boolean;

        /**
         * Removes all of the item's children (if any).
         */
        removeChildren(): Item[];

        /**
         * Removes the children from the specified from index to the to index from the parent's children array.
         * @param from - the beginning index, inclusive
         * @param to [optional] - the ending index, exclusive, default: children.length
         */
        removeChildren(from: number, to?: number): Item[];

        /**
         * Reverses the order of the item's children
         */
        reverseChildren(): void;

        /**
         * Specifies whether the item has any content or not. The meaning of what content is differs from type to type. For example, a Group with no children, a TextItem with no text content and a Path with no segments all are considered empty.
         */
        isEmpty(): boolean;

        /**
         * Checks whether the item has a fill.
         */
        hasFill(): boolean;

        /**
         * Checks whether the item has a stroke.
         */
        hasStroke(): boolean;

        /**
         * Checks whether the item has a shadow.
         */
        hasShadow(): boolean;

        /**
         * Checks if the item contains any children items.
         */
        hasChildren(): boolean;

        /**
         * Checks whether the item and all its parents are inserted into the DOM or not.
         */
        isInserted(): boolean;

        /**
         * Checks if this item is above the specified item in the stacking order of the project.
         * @param item - The item to check against
         */
        isAbove(item: Item): boolean;

        /**
         * Checks if the item is below the specified item in the stacking order of the project.
         * @param item - The item to check against
         */
        isBelow(item: Item): boolean;

        /**
         * Checks whether the specified item is the parent of the item.
         * @param item - The item to check against
         */
        isParent(item: Item): boolean;

        /**
         * Checks whether the specified item is a child of the item.
         * @param item - The item to check against
         */
        isChild(item: Item): boolean;

        /**
         * Checks if the item is contained within the specified item.
         * @param item - The item to check against
         */
        isDescendant(item: Item): boolean;

        /**
         * Checks if the item is an ancestor of the specified item.
         * @param item - the item to check against
         */
        isAncestor(item: Item): boolean;

        /**
         * Checks whether the item is grouped with the specified item.
         * @param item -
         */
        isGroupedWith(item: Item): boolean;

        /**
         * Translates (moves) the item by the given offset point.
         * @param delta - the offset to translate the item by
         */
        translate(delta: Point): Point;

        /**
         * Rotates the item by a given angle around the given point.
         * Angles are oriented clockwise and measured in degrees.
         * @param angle - the rotation angle
         * @param center [optional] - default: item.position
         */
        rotate(angle: number, center?: Point): void;

        /**
         * Gets the current rotation of the item.
         */
        getRotation(): number;

        /**
         * Scales the item by the given value from its center point, or optionally from a supplied point.
         * @param scale - the scale factor
         * @param center [optional] - default: item.position
         */
        scale(scale: number, center?: Point): void;

        /**
         * Scales the item by the given values from its center point, or optionally from a supplied point.
         * @param hor - the horizontal scale factor
         * @param ver - the vertical scale factor
         * @param center [optional] - default: item.position
         */
        scale(hor: number, ver: number, center?: Point): void;

        /**
         * Shears the item by the given value from its center point, or optionally by a supplied point.
         * @param shear - the horziontal and vertical shear factors as a point
         * @param center [optional] - default: item.position
         */
        shear(shear: number, center?: Point): void;

        /**
         * Shears the item by the given values from its center point, or optionally by a supplied point.
         * @param hor - the horizontal shear factor
         * @param ver - the vertical shear factor
         * @param center [optional] - default: item.position
         */
        shear(hor: number, ver: number, center?: Point): void;

        /**
         * Skews the item by the given angles from its center point, or optionally by a supplied point.
         * @param skew - the horziontal and vertical skew angles in degrees
         * @param center [optional] - default: item.position
         */
        skew(skew: Point, center?: Point): void;

        /**
         * Skews the item by the given angles from its center point, or optionally by a supplied point.
         * @param hor - the horizontal skew angle in degrees
         * @param ver - the vertical sskew angle in degrees
         * @param center [optional] - default: item.position
         */
        skew(hor: number, ver: number, center?: Point): void;

        /**
         * Transform the item.
         * @param matrix - the matrix by which the item shall be transformed.
         */
        transform(matrix: Matrix): void;

        /**
         * Converts the specified point from global project coordinate space to the item's own local coordinate space.
         * @param point - the point to be transformed
         */
        globalToLocal(point: Point): Point;

        /**
         * Converts the specified point from the item's own local coordinate space to the global project coordinate space.
         * @param point - the point to be transformed
         */
        localToGlobal(point: Point): Point;

        /**
         * Converts the specified point from the parent's coordinate space to item's own local coordinate space.
         * @param point - the point to be transformed
         */
        parentToLocal(point: Point): Point;

        /**
        * Converts the specified point from the item's own local coordinate space to the parent's coordinate space.
        * @param point - the point to be transformed
        */
        localToParent(point: Point): Point;

        /**
         * Transform the item so that its bounds fit within the specified rectangle, without changing its aspect ratio.
         * @param rectangle -
         * @param fill [optiona;] - default = false
         */
        fitBounds(rectangle: Rectangle, fill?: boolean): void;

        //I cannot use function: Function as it is a reserved keyword

        /**
         * Attach an event handler to the tool.
         * @param type - String('mousedown'|'mouseup'|'mousedrag'|'mousemove'|'keydown'|'keyup') the event type
         * @param function - The function to be called when the event occurs
         */
        on(type: string, callback: (event: ToolEvent) => void): Tool;

        /**
         * Attach one or more event handlers to the tool.
         * @param param - an object literal containing one or more of the following properties: mousedown, mouseup, mousedrag, mousemove, keydown, keyup
         */
        on(param: any): Tool;

        /**
         * Detach an event handler from the tool.
         * @param type - String('mousedown'|'mouseup'|'mousedrag'|'mousemove'|'keydown'|'keyup') the event type
         * @param function - The function to be detached
         */
        off(type: string, callback: (event: ToolEvent) => void): Tool;

        /**
         * Detach one or more event handlers from the tool.
         * @param param -  an object literal containing one or more of the following properties: mousedown, mouseup, mousedrag, mousemove, keydown, keyup
         */
        off(param: any): Tool;

        /**
         * Emit an event on the tool.
         * @param type - String('mousedown'|'mouseup'|'mousedrag'|'mousemove'|'keydown'|'keyup') the event type
         * @param event - an object literal containing properties describing the event.
         */
        emit(type: string, event: any): boolean;

        /**
         * Check if the tool has one or more event handlers of the specified type.
         * @param type - String('mousedown'|'mouseup'|'mousedrag'|'mousemove'|'keydown'|'keyup') the event type
         */
        responds(type: string): boolean;//I cannot use function: Function as it is a reserved keyword

        /**
         * Attaches an event handler to the item.
         * @param type - String('mousedown'|'mouseup'|'mousedrag'|'mousemove'|'keydown'|'keyup') the event type
         * @param function - The function to be called when the event occurs
         */
        on(type: string, callback: () => void): Item;

        /**
         * Attaches one or more event handlers to the item.
         * @param param - an object literal containing one or more of the following properties: mousedown, mouseup, mousedrag, mousemove, keydown, keyup
         */
        on(param: any): Item;

        /**
         * Detach an event handler from the item.
         * @param type - String('mousedown'|'mouseup'|'mousedrag'|'mousemove'|'keydown'|'keyup') the event type
         * @param function - The function to be detached
         */
        off(type: string, callback: (event: ToolEvent) => void): Item;

        /**
         * Detach one or more event handlers to the item.
         * @param param -  an object literal containing one or more of the following properties: mousedown, mouseup, mousedrag, mousemove, keydown, keyup
         */
        off(param: any): Item;

        /**
         * Emit an event on the item.
         * @param type - String('mousedown'|'mouseup'|'mousedrag'|'mousemove'|'keydown'|'keyup') the event type
         * @param event - an object literal containing properties describing the event.
         */
        emit(type: string, event: any): boolean;

        /**
         * Check if the item has one or more event handlers of the specified type..
         * @param type - String('mousedown'|'mouseup'|'mousedrag'|'mousemove'|'keydown'|'keyup') the event type
         */
        responds(type: string): boolean;

        /**
         * Removes the item when the events specified in the passed object literal occur.
         * @param object - The object literal can contain the following values
         * @param object.move - Remove the item when the next tool.onMouseMove event is fired
         * @param object.drag - Remove the item when the next tool.onMouseDrag event is fired
         * @param object.down - Remove the item when the next tool.onMouseDown event is fired
         * @param object.up - Remove the item when the next tool.onMouseUp event is fired
         */
        removeOn(object: { move?: boolean; drag?: boolean; down?: boolean; up?: boolean; }): void;

        /**
         * Removes the item when the next tool.onMouseMove event is fired.
         */
        removeOnMove(): void;

        /**
         * Removes the item when the next tool.onMouseDown event is fired.
         */
        removeOnDown(): void;

        /**
         * Removes the item when the next tool.onMouseDrag event is fired.
         */
        removeOnDrag(): void;

        /**
         * Removes the item when the next tool.onMouseUp event is fired.
         */
        removeOnUp(): void;

    }
    /**
     * A Group is a collection of items. When you transform a Group, its children are treated as a single unit without changing their relative positions.
     */
    export class Group extends Item {

        /**
         * Creates a new Group item and places it at the top of the active layer.
         * @param children [optional] - An array of Item Objects children that will be added to the newly created group.
         */
        constructor(children?: Item[]);

        /**
         * Creates a new Group item and places it at the top of the active layer.
         * @param object [optional] - an object literal containing the properties to be set on the group.
         */
        constructor(object?: any);

        /**
         * Specifies whether the group item is to be clipped.
         * When setting to true, the first child in the group is automatically defined as the clipping mask.
         */
        clipped: boolean;

    }
    /**
     * The Layer item represents a layer in a Paper.js project.
     * The layer which is currently active can be accessed through project.activeLayer.
     * An array of all layers in a project can be accessed through project.layers.
     */
    export class Layer extends Group {

        /**
         * Creates a new Layer item and places it at the end of the project.layers array. The newly created layer will be activated, so all newly created items will be placed within it.
         * @param children [optional] - An array of Items that will be added to the newly created layer.
         */
        constructor(children?: Item[]);
        /**
         * Creates a new Layer item and places it at the end of the project.layers array. The newly created layer will be activated, so all newly created items will be placed within it.
         * @param object [optional] - an object literal containing the properties to be set on the layer.
         */
        constructor(object?: any);

        /**
         * Activates the layer.
         */
        activate(): void;

    }
    export class Shape extends Item {

        /**
         * Creates a circular shape item.
         * @param center - the center point of the circle
         * @param radius - the radius of the circle
         */
        static Circle(center: Point, radius: number): Shape;

        /**
         * Creates a circular shape item from the properties described by an object literal.
         * @param object - an object literal containing properties descriving the shapes attributes
         */
        static Circle(object: any): Shape;

        /**
         * Creates a rectangular shape item, with optionally rounded corners.
         * @param rectangle - the rectangle object describing the geometry of the rectangular shape to be created.
         * @param radius [optional] - the size of the rounded corners, default: null
         */
        static Rectangle(rectangle: Rectangle, radius?: number): Shape;

        /**
         * Creates a rectangular shape item from a point and a size object.
         * @param point - the rectangle's top-left corner
         * @param size - the rectangle's size.
         */
        static Rectangle(point: Point, size: Size): Shape;

        /**
         * Creates a rectangular shape item from the passed points. These do not necessarily need to be the top left and bottom right corners, the constructor figures out how to fit a rectangle between them.
         * @param from - the first point defining the rectangle
         * @param to - the second point defining the rectangle
         */
        static Rectangle(from: Point, to: Point): Shape;

        /**
         * Creates a rectangular shape item from the properties described by an object literal.
         * @param object - an object literal containing properties describing the shape's attributes
         */
        static Rectangle(object: any): Shape;

        /**
         * Creates an elliptical shape item.
         * @param rectangle - the rectangle circumscribing the ellipse
         */
        static Ellipse(rectangle: Rectangle): Shape;

        /**
         * Creates an elliptical shape item from the properties described by an object literal.
         * @param object - an object literal containing properties describing the shape's attributes
         */
        static Ellipse(object: any): Shape;

        /**
         * The type of shape of the item as a string.
         */
        type: string;

        /**
         * The size of the shape.
         */
        size: Size;

        /**
         * The radius of the shape, as a number if it is a circle, or a size object for ellipses and rounded rectangles.
         */
        radius: number | Size;

    }
    /**
     * The Raster item represents an image in a Paper.js project.
     */
    export class Raster extends Item {

        /**
         * Creates a new raster item from the passed argument, and places it in the active layer. object can either be a DOM Image, a Canvas, or a string describing the URL to load the image from, or the ID of a DOM element to get the image from (either a DOM Image or a Canvas).
         * @param source [optional] - the source of the raster
         * @param position [optional] - the center position at which the raster item is placed
         */
        constructor(source?: HTMLImageElement | HTMLCanvasElement | string, position?: Point);
        constructor(config: any);

        /**
         * The size of the raster in pixels.
         */
        size: Size;

        /**
         * The width of the raster in pixels.
         */
        width: number;

        /**
         * The height of the raster in pixels.
         */
        height: number;

        /**
         * The resolution of the raster at its current size, in PPI (pixels per inch).
         * Read Only.
         */
        resolution: Size;

        /**
         * The HTMLImageElement of the raster, if one is associated.
         */
        image: HTMLImageElement | HTMLCanvasElement;

        /**
         * The Canvas object of the raster. If the raster was created from an image, accessing its canvas causes the raster to try and create one and draw the image into it. Depending on security policies, this might fail, in which case null is returned instead.
         */
        canvas: HTMLCanvasElement;

        /**
         * The Canvas 2D drawing context of the raster.
         */
        context: CanvasRenderingContext2D;

        /**
         * The source of the raster, which can be set using a DOM Image, a Canvas, a data url, a string describing the URL to load the image from, or the ID of a DOM element to get the image from (either a DOM Image or a Canvas). Reading this property will return the url of the source image or a data-url.
         */
        source: HTMLImageElement | HTMLCanvasElement | string;

        /**
         * Extracts a part of the Raster's content as a sub image, and returns it as a Canvas object.
         * @param rect - the boundaries of the sub image in pixel coordinates
         */
        getSubCanvas(rect: Rectangle): HTMLCanvasElement;

        /**
         * Extracts a part of the raster item's content as a new raster item, placed in exactly the same place as the original content.
         * @param rect - the boundaries of the sub raster in pixel coordinates
         */
        getSubRaster(rect: Rectangle): Raster;

        /**
         * Returns a Base 64 encoded data: URL representation of the raster.
         */
        toDataURL(): string;

        /**
         * Draws an image on the raster.
         * @param image - the image to draw
         * @param point - the offset of the image as a point in pixel coordinates
         */
        drawImage(image: HTMLImageElement | HTMLCanvasElement, point: Point): void;

        /**
         * Calculates the average color of the image within the given path, rectangle or point. This can be used for creating raster image effects.
         * @param object - the path, rectangle or point to get the average image color from
         */
        getAverageColor(object: Path | Rectangle | Point): Color;

        /**
         * Gets the color of a pixel in the raster.
         * @param x - the x offset of the pixel in pixel coordinates
         * @param y - the y offset of the pixel in pixel coordinates
         */
        getPixel(x: number, y: number): Color;

        /**
         * Gets the color of a pixel in the raster.
         * @param point - the offset of the pixel as a point in pixel coordinates
         */
        getPixel(point: Point): Color;

        /**
         * Sets the color of the specified pixel to the specified color
         * @param x - the x offset of the pixel in pixel coordinates
         * @param y - the y offset of the pixel in pixel coordinates
         * @param color - the color that the pixel will be set to
         */
        setPixel(x: number, y: number, color: Color): void;

        /**
         * Sets the color of the specified pixel to the specified color.
         * @param point - the offset of the pixel as a point in pixel coordinates
         * @param color - the color that the pixel will be set to
         */
        setPixel(point: Point, color: Color): void;

        /**
         *
         * @param size
         */
        createImageData(size: Size): ImageData;

        /**
         *
         * @param rect
         */
        getImageData(rect: Rectangle): ImageData;

        /**
         *
         *
         * @param data
         * @param point
         */
        getImageData(data: ImageData, point: Point): void;

    }
    /**
     * A PlacedSymbol represents an instance of a symbol which has been placed in a Paper.js project.
     */
    export class PlacedSymbol extends Item {

        /**
         * Creates a new PlacedSymbol Item.
         * @param symbol - the symbol to place
         * @param point [optional] - the center point of the placed symbol
         */
        constructor(symbol: Symbol, point?: Point);

        /**
         * The symbol that the placed symbol refers to.
         */
        symbol: Symbol;

    }
    /**
     * A HitResult object contains information about the results of a hit test. It is returned by item.hitTest(point) and project.hitTest(point).
     */
    export class HitResult {

        /**
         * Describes the type of the hit result. For example, if you hit a segment point, the type would be 'segment'.
         * type String('segment', 'handle-in', 'handle-out', 'curve', 'stroke', 'fill', 'bounds', 'center', 'pixel')
         */
        type: string;

        /**
         * If the HitResult has a hitResult.type of 'bounds', this property describes which corner of the bounding rectangle was hit.
         * type String('top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-center', 'top-center', 'right-center', 'bottom-center')
         */
        name: string;

        /**
         * The item that was hit.
         */
        item: Item;

        /**
         * If the HitResult has a type of 'curve' or 'stroke', this property gives more information about the exact position that was hit on the path.
         */
        location: CurveLocation;

        /**
         * If the HitResult has a type of 'pixel', this property refers to the color of the pixel on the Raster that was hit.
         */
        color: Color;

        /**
         * If the HitResult has a type of 'stroke', 'segment', 'handle-in' or 'handle-out', this property refers to the segment that was hit or that is closest to the hitResult.location on the curve.
         */
        segment: Segment;

        /**
         * Describes the actual coordinates of the segment, handle or bounding box corner that was hit
         */
        point: Point;

    }
    /**
     * The PathItem class is the base for any items that describe paths and offer standardised methods for drawing and path manipulation, such as Path and CompoundPath.
     */
    export class PathItem extends Item {

        /**
         * The path's geometry, formatted as SVG style path data.
         */
        pathData: string;

        /**
         * Returns all intersections between two PathItem items as an array of CurveLocation objects. CompoundPath items are also supported.
         * @param path - the other item to find the intersections with
         * @param sorted [optional] - specifies whether the returned CurveLocation objects should be sorted by path and offset, default: false
         */
        getIntersections(path: PathItem, sorted?: boolean): CurveLocation[];

        /**
         * Smooth bezier curves without changing the amount of segments or their points, by only smoothing and adjusting their handle points, for both open ended and closed paths.
         */
        smooth(): void;

        /**
         * On a normal empty Path, the point is simply added as the path's first segment. If called on a CompoundPath, a new Path is created as a child and the point is added as its first segment.
         * @param point - the path's first segment
         */
        moveTo(point: Point): void;

        /**
         * Draw a line from the current point to the given point
         * @param point - the end point of the line
         */
        lineTo(point: Point): void;

        /**
         * Adds a cubic bezier curve to the path, defined by two handles and a to point.
         * @param handle1 - The first control point handle for the curve
         * @param handle2 - The second control point handle for the curve
         * @param to - The end control point of the curve
         */
        cubicCurveTo(handle1: Point, handle2: Point, to: Point): void;

        /**
         * Adds a quadratic bezier curve to the path, defined by a handle and a to point.
         * @param handle - The control point for the curve
         * @param to - The end control point of the curve
         */
        quadraticCurveTo(handle: Point, to: Point): void;

        /**
         * Draws a curve from the position of the last segment point in the path that goes through the specified through point, to the specified to point by adding one segment to the path.
         * @param through - the point through which the curve should go
         * @param to - the point where the curve should end
         * @param parameter [optional] - default: 0.5
         */
        curveTo(through: Point, to: Point, parameter?: number): void;

        /**
         * Draws an arc from the position of the last segment point in the path that goes through the specified through point, to the specified to point by adding one or more segments to the path.
         * @param through - the point where the arc should pass through
         * @param to - the point where the arc should end
         */
        arcTo(through: Point, to: Point): void;

        /**
         * Draws an arc from the position of the last segment point in the path to the specified point by adding one or more segments to the path.
         * @param to - the point where the arc should end
         * @param closewise [optional] - specifies whether the arc should be drawn in clockwise direction. optional, default: true
         */
        arcTo(to: Point, clockwise?: boolean): void;

        /**
         * Closes the path. When closed, Paper.js connects the first and last segment of the path with an additional curve.
         * @param join - controls whether the method should attempt to merge the first segment with the last if they lie in the same location.
         */
        closePath(join: boolean): void;

        /**
         * If called on a CompoundPath, a new Path is created as a child and a point is added as its first segment relative to the position of the last segment of the current path.
         * @param to -
         */
        moveBy(to: Point): void;

        /**
         * Adds a segment relative to the last segment point of the path.
         * @param to - the vector which is added to the position of the last segment of the path, to get to the position of the new segment.
         */
        lineBy(to: Point): void;

        /**
         *
         * @param through -
         * @param to -
         * @param parameter [optional] - default 0.5
         */
        curveBy(through: Point, to: Point, parameter?: number): void;

        /**
         *
         * @param handle1 -
         * @param handle2 -
         * @param to -
         */
        cubicCurveBy(handle1: Point, handle2: Point, to: Point): void;

        /**
         *
         * @param handle -
         * @param to -
         */
        quadraticCurveBy(handle: Point, to: Point): void;

        /**
         *
         * @param through -
         * @param to -
         */
        arcBy(through: Point, to: Point): void;

        /**
         *
         * @param to -
         * @param clockwise [optional] - default: true
         */
        arcBy(to: Point, clockwise?: boolean): void;

        /**
         * Merges the geometry of the specified path from this path's geometry and returns the result as a new path item.
         * @param path - the path to unite with
         */
        unite(path: PathItem): PathItem;

        /**
         * Intersects the geometry of the specified path with this path's geometry and returns the result as a new path item.
         * @param path - the path to intersect with
         */
        intersect(path: PathItem): PathItem;

        /**
         * Subtracts the geometry of the specified path from this path's geometry and returns the result as a new path item.
         * @param - the path to subtract
         */
        subtract(path: PathItem): PathItem;

        /**
         * Excludes the intersection of the geometry of the specified path with this path's geometry and returns the result as a new group item.
         * @param - the path to exclude the intersection of
         */
        exclude(path: PathItem): PathItem;

        /**
         * Splits the geometry of this path along the geometry of the specified path returns the result as a new group item.
         * @param - the path to divide by
         */
        divide(path: PathItem): PathItem;

    }
    /**
     * The path item represents a path in a Paper.js project.
     */
    export class Path extends PathItem {

        /**
         * Creates a new path item and places it at the top of the active layer.
         * @param segments [optional] - An array of segments (or points to be converted to segments) that will be added to the path
         */
        constructor(segments?: Segment[] | Point[]);

        /**
         * Creates a new path item from an object description and places it at the top of the active layer.
         * @param object - an object literal containing properties describing the path's attributes
         */
        constructor(object?: any);

        /**
         * Creates a new path item from SVG path-data and places it at the top of the active layer.
         * @param pathData - the SVG path-data that describes the geometry of this path.
         */
        constructor(pathData?: string);

        /**
         * The segments contained within the path.
         * Array of Segment objects
         */
        segments: Segment[];

        /**
         * The first Segment contained within the path.
         * Read only.
         */
        firstSegment: Segment;

        /**
         * The last Segment contained within the path
         * Read only.
         */
        lastSegment: Segment;

        /**
         * The curves contained within the path.
         * Array of Curve objects
         */
        curves: Curve[];

        /**
         * The first Curve contained within the path.
         * Read only.
         */
        firstCurve: Curve;

        /**
         * The last Curve contained within the path.
         * Read only.
         */
        lastCurve: Curve;

        /**
         * Specifies whether the path is closed. If it is closed, Paper.js connects the first and last segments.
         */
        closed: boolean;

        /**
         * The approximate length of the path in points.
         * Read only.
         */
        length: number;

        /**
         * The area of the path in square points. Self-intersecting paths can contain sub-areas that cancel each other out.
         * Read only.
         */
        area: number;

        /**
         * Specifies whether the path and all its segments are selected. Cannot be true on an empty path.
         */
        fullySelected: boolean;

        /**
         * Specifies whether the path is oriented clock-wise.
         */
        clockwise: boolean;

        /**
         * Returns a point that is guaranteed to be inside the path.
         * Read only.
         */
        interiorPoint: Point;

        /**
         * Adds one or more segments to the end of the segments array of this path.
         * @param segment - the segment or point to be added.
         * Returns the added segment. This is not necessarily the same object, e.g. if the segment to be added already belongs to another path.
         */
        add(segment: Segment | Point): Segment;

        /**
         * Inserts one or more segments at a given index in the list of this path's segments.
         * @param index - the index at which to insert the segment.
         * @param segment - the segment or point to be inserted.
         * Returns the added segment. This is not necessarily the same object, e.g. if the segment to be added already belongs to another path.
         */
        insert(index: number, segment: Segment | Point): Segment;

        /**
         * Adds an array of segments (or types that can be converted to segments) to the end of the segments array.
         * @param segments - Array of Segment objects
         * Returns an array of the added segments. These segments are not necessarily the same objects, e.g. if the segment to be added already belongs to another path.
         */
        addSegments(segments: Segment[]): Segment[];

        /**
         * Inserts an array of segments at a given index in the path's segments array.
         * @param index - the index at which to insert the segments.
         * @param segments - the segments to be inserted.
         * Returns an array of the added segments. These segments are not necessarily the same objects, e.g. if the segment to be added already belongs to another path.
         */
        insertSegments(index: number, segments: Segment[]): Segment[];

        /**
         * Removes the segment at the specified index of the path's segments array.
         * @param index - the index of the segment to be removed
         * Returns the removed segment
         */
        removeSegment(index: number): Segment;

        /**
         * Removes all segments from the path's segments array.
         * Returns an array containing the removed segments
         */
        removeSegments(): Segment[];

        /**
         * Removes the segments from the specified from index to the to index from the path's segments array.
         * @param from - the beginning index, inclusive
         * @param to [optional = segments.length] - the ending index
         * Returns an array containing the removed segments
         */
        removeSegments(from: number, to?: number): Segment[];

        /**
         * Converts the curves in a path to straight lines with an even distribution of points. The distance between the produced segments is as close as possible to the value specified by the maxDistance parameter.
         * @param maxDistance - the maximum distance between the points
         */
        flatten(maxDistance: number): void;

        /**
         * Smooths a path by simplifying it. The path.segments array is analyzed and replaced by a more optimal set of segments, reducing memory usage and speeding up drawing.
         * @param tolerance [optional = 2.5] -
         */
        simplify(tolerance?: number): void;

        /**
         * Splits the path at the given offset. After splitting, the path will be open. If the path was open already, splitting will result in two paths.
         * @param offset - the offset at which to split the path as a number between 0 and path.length
         * Returns the newly created path after splitting, if any
         */
        split(offset: number): Path;

        /**
         * Splits the path at the given curve location. After splitting, the path will be open. If the path was open already, splitting will result in two paths.
         * @param location - the curve location at which to split the path
         * Returns the newly created path after splitting, if any
         */
        split(location: CurveLocation): Path;

        /**
         * Splits the path at the given curve index and parameter. After splitting, the path will be open. If the path was open already, splitting will result in two paths.
         * @param index - the index of the curve in the path.curves array at which to split
         * @param parameter - the parameter at which the curve will be split
         * Returns the newly created path after splitting, if any
         */
        split(index: number, parameter: number): Path;

        /**
         * Reverses the orientation of the path, by reversing all its segments.
         */
        reverse(): void;

        /**
         * Joins the path with the specified path, which will be removed in the process.
         * @param path - the path to join this path with
         * Returns the joined path
         */
        join(path: Path): Path;

        /**
         * Returns the curve location of the specified point if it lies on the path, null otherwise.
         * @param point - the point on the path.
         */
        getLocationOf(point: Point): CurveLocation;

        /**
         * Returns the length of the path from its beginning up to up to the specified point if it lies on the path, null otherwise.
         * @param point - the point on the path.
         */
        getOffsetOf(point: Point): number;

        /**
         * Returns the curve location of the specified offset on the path.
         * @param offset - the offset on the path, where 0 is at the beginning of the path and path.length at the end.
         * @param isParameter [optional=false] -
         */
        getLocationAt(offset: number, isParameter?: boolean): CurveLocation;

        /**
         * Calculates the point on the path at the given offset. Returns the point at the given offset
         * @param offset - the offset on the path, where 0 is at the beginning of the path and path.length at the end.
         * @param isParameter [optional=false] -
         */
        getPointAt(offset: number, isPatameter?: boolean): Point;

        /**
         * Calculates the tangent vector of the path at the given offset. Returns the tangent vector at the given offset
         * @param offset - the offset on the path, where 0 is at the beginning of the path and path.length at the end.
         * @param isParameter [optional=false] -
         */
        getTangentAt(offset: number, isPatameter?: boolean): Point;

        /**
         * Calculates the normal vector of the path at the given offset. Returns the normal vector at the given offset
         * @param offset - the offset on the path, where 0 is at the beginning of the path and path.length at the end.
         * @param isParameter [optional=false] -
         */
        getNormalAt(offset: number, isParameter?: boolean): Point;

        /**
         * Calculates the curvature of the path at the given offset. Curvatures indicate how sharply a path changes direction. A straight line has zero curvature, where as a circle has a constant curvature. The path's radius at the given offset is the reciprocal value of its curvature.
         * @param offset - the offset on the path, where 0 is at the beginning of the path and path.length at the end.
         * @param isParameter [optional=false] -
         * @param point - the point for which we search the nearest location
         */
        getCurvatureAt(offset: number, isParameter?: boolean, point?: Point): number;

        /**
         * Returns the nearest point on the path to the specified point.
         * @param point - the point for which we search the nearest point
         */
        getNearestPoint(point: Point): Point;


    }
    module Path {
        export class Line extends Path {
            /**
             * Creates a linear path item from two points describing a line.
             * @param from - the line's starting point
             * @param to - the line's ending point
             */
            constructor(from: Point, to: Point);

            /**
             * Creates a linear path item from the properties described by an object literal.
             * @param object - an object literal containing properties describing the path's attributes
             */
            constructor(object: any);
        }

        export class Circle extends Path {
            /**
             * Creates a circular path item.
             * @param center - the center point of the circle
             * @param radius - the radius of the circle
             */
            constructor(center: Point, radius: number);

            /**
             * Creates a circular path item from the properties described by an object literal.
             * @param object - an object literal containing properties describing the path's attributes
             */
            constructor(object: any);
        }

        export class Rectangle extends Path {
            /**
             * Creates a rectangular path item, with optionally rounded corners.
             * @param rectangle - the rectangle object describing the geometry of the rectangular path to be created.
             * @param radius [optional] - the size of the rounded corners default: null
             */
            constructor(rectangle: Rectangle, radius?: number);

            /**
             * Creates a rectangular path item from a point and a size object.
             * @param point - the rectangle's top-left corner.
             * @param size - the rectangle's size.
             */
            constructor(point: Point, size: Size);

            /**
             * Creates a rectangular path item from the passed points. These do not necessarily need to be the top left and bottom right corners, the constructor figures out how to fit a rectangle between them.
             * @param from - the first point defining the rectangle
             * @param to - the second point defining the rectangle
             */
            constructor(from: Point, to: Point);

            /**
             * Creates a rectangular path item from the properties described by an object literal.
             * @param object - an object literal containing properties describing the path's attributes
             */
            constructor(object: any);
        }

        export class Ellipse extends Path {
            /**
             * Creates an elliptical path item.
             * @param rectangle - the rectangle circumscribing the ellipse
             */
            constructor(rectangle: Rectangle);

            /**
             * Creates an elliptical path item from the properties described by an object literal.
             * @param object - an object literal containing properties describing the path's attributes
             */
            constructor(object: any);
        }

        export class Arc extends Path {
            /**
             * Creates a circular arc path item
             * @param from - the starting point of the circular arc
             * @param through - the point the arc passes through
             * @param to - the end point of the arc
             */
            constructor(from: Point, through: Point, to: Point);

            /**
             * Creates an circular arc path item from the properties described by an object literal.
             * @param object - an object literal containing properties describing the path's attributes
             */
            constructor(object: any);
        }

        export class RegularPolygon extends Path {
            /**
             * Creates a regular polygon shaped path item.
             * @param center - the center point of the polygon
             * @param sides - the number of sides of the polygon
             * @param radius - the radius of the polygon
             */
            constructor(center: Point, sides: number, radius: number);

            /**
             * Creates a regular polygon shaped path item from the properties described by an object literal.
             * @param object - an object literal containing properties describing the path's attributes
             */
            constructor(object: any);
        }

        export class Star extends Path {
            /**
             * Creates a star shaped path item. The largest of radius1 and radius2 will be the outer radius of the star. The smallest of radius1 and radius2 will be the inner radius.
             * @param center - the center point of the star
             * @param points - the number of points of the star
             * @param radius1
             * @param radius2
             */
            constructor(center: Point, points: number, radius1: number, radius2: number);

            /**
             * Creates a star shaped path item from the properties described by an object literal.
             * @param object - an object literal containing properties describing the path's attributes
             */
            constructor(object: any);
        }
    }

    /**
     * A compound path contains two or more paths, holes are drawn where the paths overlap. All the paths in a compound path take on the style of the backmost path and can be accessed through its item.children list.
     */
    export class CompoundPath extends PathItem {

        /**
         * Creates a new compound path item from an object description and places it at the top of the active layer.
         * @param object - an object literal containing properties to be set on the path
         */
        constructor(object: any);

        /**
         * Creates a new compound path item from SVG path-data and places it at the top of the active layer.
         * @param pathData - the SVG path-data that describes the geometry of this path.
         */
        constructor(pathData: string);

        /**
         * Specifies whether the compound path is oriented clock-wise.
         */
        clockwise: boolean;

        /**
         * The first Segment contained within the path.
         * Read Only
         */
        firstSegment: Segment;

        /**
         * The last Segment contained within the path.
         * Read Only
         */
        lastSegment: Segment;

        /**
         * All the curves contained within the compound-path, from all its child Path items.
         * Read Only
         */
        curves: Curve[];

        /**
         * The first Curve contained within the path.
         * Read Only
         */
        firstCurve: Curve;

        /**
         * The last Curve contained within the path.
         * Read only.
         */
        lastCurve: Curve;

        /**
         * The area of the path in square points. Self-intersecting paths can contain sub-areas that cancel each other out.
         * Read Only.
         */
        area: number;

        /**
         * Reverses the orientation of all nested paths.
         */
        reverse(): void;

    }
    /**
     * The Segment object represents the points of a path through which its Curve objects pass. The segments of a path can be accessed through its path.segments array.
     * Each segment consists of an anchor point (segment.point) and optionaly an incoming and an outgoing handle (segment.handleIn and segment.handleOut), describing the tangents of the two Curve objects that are connected by this segment.
     */
    export class Segment {

        /**
         * Creates a new Segment object.
         * @param point [optional] - the anchor point of the segment default: {x: 0, y: 0}
         * @param handleIn [optional] - the handle point relative to the anchor point of the segment that describes the in tangent of the segment default: {x: 0, y: 0}
         * @param handleOut [optional] - the handle point relative to the anchor point of the segment that describes the out tangent of the segment default: {x: 0, y: 0}
         */
        constructor(point?: Point, handleIn?: Point, handleOut?: Point);

        /**
         * Creates a new Segment object.
         * @param object - an object literal containing properties to be set on the segment.
         */
        constructor(object?: any);

        /**
         * The anchor point of the segment.
         */
        point: Point;

        /**
         * The handle point relative to the anchor point of the segment that describes the in tangent of the segment.
         */
        handleIn: Point;

        /**
         * The handle point relative to the anchor point of the segment that describes the out tangent of the segment.
         */
        handleOut: Point;

        /**
         * Specifies whether the segment has no handles defined, meaning it connects two straight lines.
         */
        linear: boolean;

        /**
         * Specifies whether the point of the segment is selected.
         */
        selected: boolean;

        /**
         * The index of the segment in the path.segments array that the segment belongs to.
         * Read Only
         */
        index: number;

        /**
         * The path that the segment belongs to.
         * Read Only
         */
        path: Path;

        /**
         * The curve that the segment belongs to. For the last segment of an open path, the previous segment is returned.
         * Read only.
         */
        curve: Curve;

        /**
         * The curve location that describes this segment's position ont the path.
         * Read Only.
         */
        location: CurveLocation;

        /**
         * The next segment in the path.segments array that the segment belongs to. If the segments belongs to a closed path, the first segment is returned for the last segment of the path.
         * Read Only.
         */
        next: Segment;

        /**
         * The previous segment in the path.segments array that the segment belongs to. If the segments belongs to a closed path, the last segment is returned for the first segment of the path.
         * Read Only.
         */
        previous: Segment;

        /**
         * Returns true if the the two segments are the beginning of two lines and if these two lines are running parallel.
         * @param segment
         */
        isColinear(segment: Segment): boolean;

        /**
         * Returns true if the segment at the given index is the beginning of an orthogonal arc segment. The code looks at the length of the handles and their relation to the distance to the imaginary corner point. If the relation is kappa, then it's an arc.
         */
        isArc(): boolean;

        /**
         * Returns the reversed the segment, without modifying the segment itself.
         */
        reverse(): Segment;

        /**
         * Removes the segment from the path that it belongs to.
         */
        remove(): boolean;

        /**
         * A string representation of the segment
         */
        toString(): string;

        /**
         * Transform the segment by the specified matrix.
         * @param matrix - the matrix to transform the segment by
         */
        transform(matrix: Matrix): void;

    }
    /**
     * The Curve object represents the parts of a path that are connected by two following Segment objects. The curves of a path can be accessed through its path.curves array.
     * While a segment describe the anchor point and its incoming and outgoing handles, a Curve object describes the curve passing between two such segments. Curves and segments represent two different ways of looking at the same thing, but focusing on different aspects. Curves for example offer many convenient ways to work with parts of the path, finding lengths, positions or tangents at given offsets.
     */
    export class Curve {

        /**
         * Creates a new curve object.
         * @param segment1 -
         * @param segment2 -
         */
        constructor(segment1: Segment, segment2: Segment);

        /**
         * Creates a new curve object.
         * @param point1: Point
         * @param handle1: Point
         * @param handle2: Point
         * @param point2: Point
         */
        constructor(point1: Point, handle1: Point, handle2: Point, point2: Point);

        /**
         * The first anchor point of the curve.
         */
        point1: Point;

        /**
         * The second anchor point of the curve.
         */
        point2: Point;

        /**
         * The handle point that describes the tangent in the first anchor point.
         */
        handle1: Point;

        /**
         * The handle point that describes the tangent in the second anchor point.
         */
        handle2: Point;

        /**
         * The first segment of the curve.
         * Read Only.
         */
        segment1: Segment;

        /**
         * The second segment of the curve.
         * Read only.
         */
        segment2: Segment;

        /**
         * The path that the curve belongs to.
         * Read only.
         */
        path: Path;

        /**
         * The index of the curve in the path.curves array.
         * Read Only.
         */
        index: number;

        /**
         * The next curve in the path.curves array that the curve belongs to.
         * Read Only
         */
        next: Curve;

        /**
         * The previous curve in the path.curves array that the curve belongs to.
         * Read Only.
         */
        previous: Curve;

        /**
         * Specifies whether the points and handles of the curve are selected.
         */
        selected: boolean;

        /**
         * The approximated length of the curve in points.
         * Read Only.
         */
        length: number;

        /**
         * The bounding rectangle of the curve excluding stroke width.
         */
        bounds: Rectangle;

        /**
         * The bounding rectangle of the curve including stroke width.
         */
        strokeBounds: Rectangle;

        /**
         * The bounding rectangle of the curve including handles.
         */
        handleBounds: Rectangle;

        /**
         * Checks if this curve is linear, meaning it does not define any curve handle.
         */
        isLinear(): boolean;

        /**
         * TODO?
         */
        //isHorizontal(): boolean;

        /**
         * Divides the curve into two curves at the given offset. The curve itself is modified and becomes the first part, the second part is returned as a new curve. If the modified curve belongs to a path item, the second part is also added to the path.
         * @param offset [optional] - the offset on the curve at which to split, or the curve time parameter if isParameter is true  default: 0.5
         * @param isParameter [optional] - pass true if offset is a curve time parameter. default: false
         */
        divide(offset?: number, isParameter?: boolean): Curve;

        /**
         * Splits the path this curve belongs to at the given offset. After splitting, the path will be open. If the path was open already, splitting will result in two paths.
         * @param offset [optional] - the offset on the curve at which to split, or the curve time parameter if isParameter is true default: 0.5
         * @param isParameter [optional] - pass true if offset is a curve time parameter. default: false
         */
        split(offset?: number, isParameter?: boolean): Path;

        /**
         * Returns a reversed version of the curve, without modifying the curve itself.
         */
        reverse(): Curve;

        /**
         * Removes the curve from the path that it belongs to, by merging its two path segments.
         * returns true if the curve was removed, false otherwise
         */
        remove(): boolean;

        /**
         * Returns a copy of the curve.
         */
        clone(): Curve;

        /**
         * returns a string representation of the curve
         */
        toString(): string;

        /**
         * Calculates the curve time parameter of the specified offset on the path, relative to the provided start parameter. If offset is a negative value, the parameter is searched to the left of the start parameter. If no start parameter is provided, a default of 0 for positive values of offset and 1 for negative values of offset.
         * @param offset -
         * @param start [optional] -
         */
        getParameterAt(offset: Point, start?: number): number;

        /**
         * Returns the curve time parameter of the specified point if it lies on the curve, null otherwise.
         * @param point - the point on the curve.
         */
        getParameterOf(point: Point): number;

        /**
         * Calculates the curve location at the specified offset or curve time parameter.
         * @param offset - the offset on the curve, or the curve time parameter if isParameter is true
         * @param isParameter [optional] - pass true if offset is a curve time parameter.  default: false
         */
        getLocationAt(offset: Point, isParameter?: boolean): CurveLocation;

        /**
         * Returns the curve location of the specified point if it lies on the curve, null otherwise.
         * @param point - the point on the curve
         */
        getLocationOf(point: Point): CurveLocation;

        /**
         * Returns the length of the path from its beginning up to up to the specified point if it lies on the path, null otherwise.
         * @param point - the point on the path.
         */
        getOffsetOf(point: Point): number;

        /**
         * Calculates the point on the curve at the given offset.
         * @param offset - the offset on the curve, or the curve time parameter if isParameter is true
         * @param isParameter [optional] - pass true if offset is a curve time parameter. default: false
         */
        getPointAt(offset: number, isParameter?: boolean): Point;

        /**
         * Calculates the tangent vector of the curve at the given offset.
         * @param offset - the offset on the curve, or the curve time parameter if isParameter is true
         * @param isParameter [optional] - pass true if offset is a curve time parameter. default: false
         */
        getTangentAt(offset: number, isParameter?: boolean): Point;

        /**
         * Calculates the normal vector of the curve at the given offset.
         * @param offset - the offset on the curve, or the curve time parameter if isParameter is true
         * @param isParameter [optional] - pass true if offset is a curve time parameter. default: false
         */
        getNormalAt(offset: number, isParameter?: boolean): Point;

        /**
         * Calculates the curvature of the curve at the given offset. Curvatures indicate how sharply a curve changes direction. A straight line has zero curvature, where as a circle has a constant curvature. The curve's radius at the given offset is the reciprocal value of its curvature.
         * @param offset - the offset on the curve, or the curve time parameter if isParameter is true
         * @param isParameter - pass true if offset is a curve time parameter. default: false
         */
        getCurvatureAt(offset: number, isParameter?: boolean): Point;

    }
    /**
     * CurveLocation objects describe a location on Curve objects, as defined by the curve parameter, a value between 0 (beginning of the curve) and 1 (end of the curve). If the curve is part of a Path item, its index inside the path.curves array is also provided.
     * The class is in use in many places, such as path.getLocationAt(offset, isParameter), path.getLocationOf(point), Path#getNearestLocation(point),{@linkPathItem#getIntersections(path), etc.
     */
    export class CurveLocation {

        /**
         * Creates a new CurveLocation object.
         * @param curve -
         * @param parameter -
         * @param point -
         */
        constructor(curve: Curve, parameter: number, point: Point);

        /**
         * The segment of the curve which is closer to the described location.
         * Read Only
         */
        segment: Segment;

        /**
         * The curve that this location belongs to.
         * Read Only
         */
        curve: Curve;

        /**
         * The curve location on the intersecting curve, if this location is the result of a call to pathItem.getIntersections(path) / Curve#getIntersections(curve).
         * Read Only
         */
        intersection: CurveLocation;

        /**
         * The path this curve belongs to, if any.
         * Read Only
         */
        path: Path;

        /**
         * The index of the curve within the path.curves list, if the curve is part of a Path item.
         * Read Only.
         */
        index: number;

        /**
         * The length of the path from its beginning up to the location described by this object. If the curve is not part of a path, then the length within the curve is returned instead.
         * Read only.
         */
        offset: number;

        /**
         * The length of the curve from its beginning up to the location described by this object.
         * Read Only.
         */
        curveOffset: number;

        /**
         * The curve parameter, as used by various bezier curve calculations. It is value between 0 (beginning of the curve) and 1 (end of the curve).
         * Read only.
         */
        parameter: number;

        /**
         * The point which is defined by the curve and parameter.
         * Read only.
         */
        point: Point;

        /**
         * The distance from the queried point to the returned location.
         * Read Only.
         */
        distance: number;

        /**
         * Checks whether tow CurveLocation objects are describing the same location on a path, by applying the same tolerances as elsewhere when dealing with curve time parameters.
         * @param location CurveLocation
         */
        equals(location: CurveLocation): boolean;

        /**
         * Returns a string representation of the curve location
         */
        toString(): string;

    }
    /**
     * A Project object in Paper.js is what usually is referred to as the document: The top level object that holds all the items contained in the scene graph. As the term document is already taken in the browser context, it is called Project.
     * Projects allow the manipulation of the styles that are applied to all newly created items, give access to the selected items, and will in future versions offer ways to query for items in the scene graph defining specific requirements, and means to persist and load from different formats, such as SVG and PDF.
     * The currently active project can be accessed through the paperScope.project variable.
     * An array of all open projects is accessible through the paperScope.projects variable.
     */
    export class Project {

        /**
         * Creates a Paper.js project containing one empty Layer, referenced by project.activeLayer.
         * @param element - the HTML canvas element that should be used as the element for the view, or an ID string by which to find the element.
         */
        constructor(element: HTMLCanvasElement | string);

        /**
         * The reference to the project's view.
         * Read only.
         */
        view: View;

        /**
         * The currently active path style. All selected items and newly created items will be styled with this style.
         */
        currentStyle: Style;

        /**
         * The index of the project in the paperScope.projects list.
         * Read Only
         */
        index: number;

        /**
         * The layers contained within the project.
         */
        layers: Layer[];

        /**
         * The layer which is currently active. New items will be created on this layer by default.
         * Read Only.
         */
        activeLayer: Layer;

        /**
         * The symbols contained within the project.
         */
        symbols: Symbol[];

        /**
         * Activates this project, so all newly created items will be placed in it.
         */
        activate(): void;

        /**
         * Clears the project by removing all project.layers and project.symbols.
         */
        clear(): void;

        /**
         * Checks whether the project has any content or not.
         */
        isEmpty(): boolean;

        /**
         * Removes this project from the paperScope.projects list, and also removes its view, if one was defined.
         */
        remove(): void;

        /**
         * Selects all items in the project.
         */
        selectAll(): void;

        /**
         * Deselects all selected items in the project.
         */
        deselectAll(): void;

        /**
         * Perform a hit-test on the items contained within the project at the location of the specified point.
         * The options object allows you to control the specifics of the hit-test and may contain a combination of the following values:
         * @param point - the point where the hit-test should be performed
         * @param options.tolerance -the tolerance of the hit-test in points. Can also be controlled through paperScope.settings.hitTolerance
         * @param options.class - only hit-test again a certain item class and its sub-classes: Group, Layer, Path, CompoundPath, Shape, Raster, PlacedSymbol, PointText, etc.
         * @param options.fill - hit-test the fill of items.
         * @param options.stroke - hit-test the stroke of path items, taking into account the setting of stroke color and width.
         * @param options.segments - hit-test for segment.point of Path items.
         * @param options.curves - hit-test the curves of path items, without taking the stroke color or width into account.
         * @param options.handles - hit-test for the handles.  (segment.handleIn / segment.handleOut) of path segments.
         * @param options.ends - only hit-test for the first or last segment points of open path items.
         * @param options.bounds - hit-test the corners and side-centers of the bounding rectangle of items (item.bounds).
         * @param options.center - hit-test the rectangle.center of the bounding rectangle of items (item.bounds).
         * @param options.guides - hit-test items that have Item#guide set to true.
         * @param options.selected - only hit selected items.
         */
        hitTest(point: Point, options?: { tolerance?: number; class?: string; fill?: boolean; stroke?: boolean; segments?: boolean; curves?: boolean; handles?: boolean; ends?: boolean; bounds?: boolean; center?: boolean; guides?: boolean; selected?: boolean; }): HitResult;

        /**
         * Fetch items contained within the project whose properties match the criteria in the specified object.
         * Extended matching is possible by providing a compare function or regular expression. Matching points, colors only work as a comparison of the full object, not partial matching (e.g. only providing the x- coordinate to match all points with that x-value). Partial matching does work for item.data.
         * Matching items against a rectangular area is also possible, by setting either match.inside or match.overlapping to a rectangle describing the area in which the items either have to be fully or partly contained.
         */
        getItems(match: any): Item[];

        /**
         * Fetch the first item contained within the project whose properties match the criteria in the specified object.
         * Extended matching is possible by providing a compare function or regular expression. Matching points, colors only work as a comparison of the full object, not partial matching (e.g. only providing the x- coordinate to match all points with that x-value). Partial matching does work for item.data.
         */
        getItem(match: any): Item;

        /**
         * Exports (serializes) the project with all its layers and child items to a JSON data string.
         * @param options [optional] - default {asString: true, precision: 5}
         * @param options.asString - whether the JSON is returned as a Object or a String.
         * @param options.precision - the amount of fractional digits in numbers used in JSON data.
         */
        exportJSON(options?: { asString?: boolean; precision?: number }): string;

        /**
         * Imports (deserializes) the stored JSON data into the project.
         * Note that the project is not cleared first. You can call project.clear() to do so.
         */
        importJSON(json: string): void;

        /**
         * Exports the project with all its layers and child items as an SVG DOM, all contained in one top level SVG group node.
         * @param options [optional] the export options, default: { asString: false, precision: 5, matchShapes: false }
         * @param options.asString - whether a SVG node or a String is to be returned.
         * @param options.precision - the amount of fractional digits in numbers used in SVG data.
         * @param options.matchShapes - whether path items should tried to be converted to shape items, if their geometries can be made to match
         */
        exportSVG(options?: { asString?: boolean; precision?: number; matchShapes?: boolean }): SVGElement;

        /**
         * Converts the provided SVG content into Paper.js items and adds them to the active layer of this project.
         * Note that the project is not cleared first. You can call project.clear() to do so.
         * @param svg - the SVG content to import
         * @param options [optional] - the import options, default: { expandShapes: false }
         * @param options.expandShapes - whether imported shape items should be expanded to path items.
         */
        importSVG(svg: SVGElement | string, options?: any): Item;

    }
    /**
     * Symbols allow you to place multiple instances of an item in your project. This can save memory, since all instances of a symbol simply refer to the original item and it can speed up moving around complex objects, since internal properties such as segment lists and gradient positions don't need to be updated with every transformation.
     */
    export class Symbol {

        /**
         * Creates a Symbol item.
         * @param item - the source item which is copied as the definition of the symbol
         * @param dontCenter [optional] - default: false
         */
        constructor(item: Item, dontCenter?: boolean);

        /**
         * The project that this symbol belongs to.
         * Read Only.
         */
        project: Project;

        /**
         * The symbol definition.
         */
        definition: Item;

        /**
         * Places in instance of the symbol in the project.
         * @param position [optional] - The position of the placed symbol.
         */
        place(position?: Point): PlacedSymbol;

        /**
         * Returns a copy of the symbol.
         */
        clone(): Symbol;

    }
    /**
     * Style is used for changing the visual styles of items contained within a Paper.js project and is returned by item.style and project.currentStyle.
     * All properties of Style are also reflected directly in Item, i.e.: item.fillColor.
     * To set multiple style properties in one go, you can pass an object to item.style. This is a convenient way to define a style once and apply it to a series of items:
     */
    export class Style {

        /**
         * The view that this style belongs to.
         * Read only.
         */
        view: View;

        /**
         * The color of the stroke.
         */
        strokeColor: Color | string;

        /**
         * The width of the stroke.
         */
        strokeWidth: number;

        /**
         * The shape to be used at the beginning and end of open Path items, when they have a stroke.
         * String('round', 'square', 'butt'
         */
        strokeCap: string;

        /**
         * The shape to be used at the segments and corners of Path items when they have a stroke.
         * String('miter', 'round', 'bevel')
         */
        strokeJoin: string;

        /**
         * Specifies whether the stroke is to be drawn taking the current affine transformation into account (the default behavior), or whether it should appear as a non-scaling stroke.
         */
        strokeScaling: boolean;

        /**
         * The dash offset of the stroke.
         */
        dashOffset: number;

        /**
         * Specifies an array containing the dash and gap lengths of the stroke.
         */
        dashArray: number[];

        /**
         * The miter limit of the stroke. When two line segments meet at a sharp angle and miter joins have been specified for strokeJoin, it is possible for the miter to extend far beyond the strokeWidth of the path. The miterLimit imposes a limit on the ratio of the miter length to the strokeWidth.
         */
        miterLimit: number;

        /**
         * The fill color.
         */
        fillColor: Color | string;

        /**
         * The shadow color.
         */
        shadowColor: Color | string;

        /**
         * The shadow's blur radius.
         */
        shadowBlur: number;

        /**
         * The shadow's offset.
         */
        shadowOffset: Point;

        /**
         * The color the item is highlighted with when selected. If the item does not specify its own color, the color defined by its layer is used instead.
         */
        selectedColor: Color | string;

        /**
         * The font-family to be used in text content. default 'sans-serif'
         */
        fontFamily: string;

        /**
         * The font-weight to be used in text content.
         */
        fontWeight: string | number;

        /**
         * The font size of text content, as {@Number} in pixels, or as {@String} with optional units 'px', 'pt' and 'em'.
         */
        fontSize: string | number;

        /**
         * The text leading of text content.
         */
        leading: number | string;

        /**
         * The justification of text paragraphs. default "left"
         */
        justification: string;

    }
    export interface IHSBColor {

        /**
         * the hue of the color as a value in degrees between 0 and 360
         */
        hue?: number;
        /**
         * the saturation of the color as a value between 0 and 1
         */
        saturation?: number;
        /**
         * the brightness of the color as a value between 0 and 1
         */
        brightness?: number;
        /**
         * the alpha of the color as a value between 0 and 1
         */
        alpha?: number;

    }
    export interface IHSLColor {

        /**
         * the hue of the color as a value in degrees between 0 and 360
         */
        hue?: number;
        /**
         * the saturation of the color as a value between 0 and 1
         */
        saturation?: number;
        /**
         * the brightness of the color as a value between 0 and 1
         */
        lightness?: number;
        /**
         * the alpha of the color as a value between 0 and 1
         */
        alpha?: number;

    }
    export interface IGradientColor {
        /**
         * the gradient object that describes the color stops and type of gradient to be used.
         */
        gradient?: Gradient;
        /**
         * the origin point of the gradient
         */
        origin?: Point;
        /**
         * the destination point of the gradient stops: Array of GradientStop - the gradient stops describing the gradient, as an alternative to providing a gradient object
         */
        destination?: Point;
        /**
         * controls whether the gradient is radial, as an alternative to providing a gradient object
         */
        radial?: boolean;
    }
    /**
     * All properties and functions that expect color values in the form of instances of Color objects, also accept named colors and hex values as strings which are then converted to instances of Color internally.
     */
    export class Color {

        /**
         * Creates a RGB Color object.
         * @param red - the amount of red in the color as a value between 0 and 1
         * @param green - the amount of green in the color as a value between 0 and 1
         * @param blue - the amount of blue in the color as a value between 0 and 1
         * @param alpha [optional] - the alpha of the color as a value between 0 and 1
         */
        constructor(red: number, green: number, blue: number, alpha?: number);

        /**
         * Creates a gray Color object.
         * @param gray - the amount of gray in the color as a value between 0 and 1
         * @param alpha [optional] - the alpha of the color as a value between 0 and 1
         */
        constructor(gray: number, alpha?: number);

        /**
         * Creates a HSB, HSL or gradient Color object from the properties of the provided object:
         * @param object - an object describing the components and properties of the color.
         */
        constructor(object: IHSBColor | IHSLColor | IGradientColor);

        /**
         * Creates a gradient Color object.
         * @param gradient -
         * @param origin -
         * @param destination -
         * @param highlight [optional] -
         */
        constructor(color: Gradient, origin: Point, destination: Point, highlight?: Point);

        /**
         * The type of the color as a string.
         * String('rgb', 'gray', 'hsb', 'hsl')
         */
        type: string;

        /**
         * The color components that define the color, including the alpha value if defined.
         * Read Only.
         */
        components: number;

        /**
         * The color's alpha value as a number between 0 and 1.
         * All colors of the different subclasses support alpha values.
         */
        alpha: number;

        /**
         * The amount of red in the color as a value between 0 and 1.
         */
        red: number;

        /**
         * The amount of green in the color as a value between 0 and 1.
         */
        green: number;

        /**
         * The amount of blue in the color as a value between 0 and 1.
         */
        blue: number;

        /**
         * The amount of gray in the color as a value between 0 and 1.
         */
        gray: number;

        /**
         * The hue of the color as a value in degrees between 0 and 360.
         */
        hue: number;

        /**
         * The saturation of the color as a value between 0 and 1.
         */
        saturation: number;

        /**
         * The brightness of the color as a value between 0 and 1.
         */
        brightness: number;

        /**
         * The lightness of the color as a value between 0 and 1.
         * Note that all other components are shared with HSB.
         */
        lightness: number;

        /**
         * The gradient object describing the type of gradient and the stops.
         */
        gradient: Gradient;

        /**
         * The highlight point of the gradient.
         */
        highlight: Point;

        /**
         * Converts the color another type.
         * @param type - String('rgb'|'gray'|'hsb'|'hsl') the color type to convert to.
         */
        convert(type: string): Color;

        /**
         * Checks if the color has an alpha value.
         */
        hasAlpha(): boolean;

        /**
         * Checks if the component color values of the color are the same as those of the supplied one.
         * @param color - the color to compare with
         */
        equals(color: Color): boolean;

        /**
         * a copy of the color object
         */
        clone(): Color;

        /**
         * a string representation of the color
         */
        toString(): string;

        /**
         * Returns the color as a CSS string.
         * @param hex - whether to return the color in hexadecial representation or as a CSS RGB / RGBA string.
         */
        toCSS(hex: boolean): string;

        /**
         * Transform the gradient color by the specified matrix.
         * @param matrix - the matrix to transform the gradient color by
         */
        transform(matrix: Matrix): void;

    }
    /**
     * The Gradient object.
     */
    export class Gradient {

        /**
         * The gradient stops on the gradient ramp.
         */
        stops: GradientStop[];

        /**
         * Specifies whether the gradient is radial or linear.
         */
        radial: boolean;

        /**
         * a copy of the gradient
         */
        clone(): Gradient;

        /**
         * Checks whether the gradient is equal to the supplied gradient.
         * @param gradient - the gradient to check against
         */
        equals(gradient: Gradient): boolean;

    }
    /**
     * The GradientStop object.
     */
    export class GradientStop {

        /**
         * Creates a GradientStop object.
         * @param color [optional] - the color of the stop, default: new Color(0, 0, 0)
         * @param rampPoint [optional] - the position of the stop on the gradient ramp as a value between 0 and 1, default: 0
         */
        constructor(color?: Color, rampPoint?: number);

        /**
         * The ramp-point of the gradient stop as a value between 0 and 1.
         */
        rampPoint: number;

        /**
         * The color of the gradient stop.
         */
        color: Color;

        /**
         * Returns a copy of the gradient-stop
         */
        clone(): GradientStop;

    }
    /**
     * The View object wraps an HTML element and handles drawing and user interaction through mouse and keyboard for it. It offer means to scroll the view, find the currently visible bounds in project coordinates, or the center, both useful for constructing artwork that should appear centered on screen.
     */
    export class View {

        /**
         * The underlying native element.
         * Read Only.
         */
        element: HTMLCanvasElement;

        /**
         * The ratio between physical pixels and device-independent pixels (DIPs) of the underlying canvas / device.
         * It is 1 for normal displays, and 2 or more for high-resolution displays.
         * Read only.
         */
        pixelRatio: number;

        /**
         * The resoltuion of the underlying canvas / device in pixel per inch (DPI).
         * It is 72 for normal displays, and 144 for high-resolution displays with a pixel-ratio of 2.
         * Read only.
         */
        resolution: number;

        /**
         * The size of the view. Changing the view's size will resize it's underlying element.
         */
        viewSize: Size;

        /**
         * The bounds of the currently visible area in project coordinates.
         * Read only.
         */
        bounds: Rectangle;

        /**
         * The size of the visible area in project coordinates.
         * Read only.
         */
        size: Size;

        /**
         * The center of the visible area in project coordinates.
         */
        center: Point;

        /**
         * The zoom factor by which the project coordinates are magnified.
         */
        zoom: number;

        /**
         * Handler function to be called on each frame of an animation.
         * The function receives an event object which contains information about the frame event:
         */
        onFrame: (event: IFrameEvent) => void;

        /**
         * Handler function that is called whenever a view is resized.
         */
        onResize: (event: Event) => void;

        /**
         * Removes this view from the project and frees the associated element.
         */
        remove(): void;

        /**
         * Checks whether the view is currently visible within the current browser viewport.
         */
        isVisible(): boolean;

        /**
         * Scrolls the view by the given vector.
         * @param point - the vector to scroll by
         */
        scrollBy(point: Point): void;

        /**
         * Makes all animation play by adding the view to the request animation loop.
         */
        play(): void;

        /**
         * Makes all animation pause by removing the view to the request animation loop.
         */
        pause(): void;

        /**
         * Updates the view if there are changes. Note that when using built-in event hanlders for interaction, animation and load events, this method is invoked for you automatically at the end.
         */
        update(): void;

        /**
         *
         * @param point -
         */
        projectToView(point: Point): Point;

        /**
         *
         * @param point -
         */
        viewToProject(point: Point): Point;

        //I cannot use function: Function as it is a reserved keyword

        /**
         * Attach an event handler to the view.
         * @param type - String('frame'|'resize') the event type
         * @param function - The function to be called when the event occurs
         */
        on(type: string, callback: (event: Event) => void): Item;

        /**
         * Attach one or more event handlers to the view.
         */
        on(param: any): Item;

        /**
         * Detach an event handler from the view.
         * @param type - String('frame'|'resize') the event type
         * @param function - The function to be detached
         */
        off(type: string, callback: (event: Event) => void): Item;

        /**
         * Detach one or more event handlers from the view.
         * @param param -  an object literal containing one or more of the following properties: frame, resize
         */
        off(param: any): Item;

        /**
         * Emit an event on the view.
         * @param type - String('frame'|'resize') the event type
         * @param event - an object literal containing properties describing the event.
         */
        emit(type: string, event: any): boolean;

        /**
         * Check if the view has one or more event handlers of the specified type.
         * @param type - String('frame'|'resize') the event type
         */
        responds(type: string): boolean;

        /**
         * Draws the view when using paper.js directly in JavaScript
         */
        draw(): void;

    }
    /**
     * The Tool object refers to a script that the user can interact with by using the mouse and keyboard and can be accessed through the global tool variable. All its properties are also available in the paper scope.
     * The global tool variable only exists in scripts that contain mouse handler functions (onMouseMove, onMouseDown, onMouseDrag, onMouseUp) or a keyboard handler function (onKeyDown, onKeyUp).
     */
    export class Tool {

        /**
         * The minimum distance the mouse has to drag before firing the onMouseDrag event, since the last onMouseDrag event.
         */
        minDistance: number;

        /**
         * The maximum distance the mouse has to drag before firing the onMouseDrag event, since the last onMouseDrag event.
         */
        maxDistance: number;

        /**
         *
         */
        fixedDistance: number;

        /**
         * The function to be called when the mouse button is pushed down. The function receives a ToolEvent object which contains information about the mouse event.
         */
        onMouseDown: (event: ToolEvent) => void;

        /**
         * The function to be called when the mouse position changes while the mouse is being dragged. The function receives a ToolEvent object which contains information about the mouse event.
         */
        onMouseDrag: (event: ToolEvent) => void;

        /**
         * The function to be called the mouse moves within the project view. The function receives a ToolEvent object which contains information about the mouse event.
         */
        onMouseMove: (event: ToolEvent) => void;

        /**
         * The function to be called when the mouse button is released. The function receives a ToolEvent object which contains information about the mouse event.
         */
        onMouseUp: (event: ToolEvent) => void;

        /**
         * The function to be called when the user presses a key on the keyboard.
         * The function receives a KeyEvent object which contains information about the keyboard event.
         * If the function returns false, the keyboard event will be prevented from bubbling up. This can be used for example to stop the window from scrolling, when you need the user to interact with arrow keys.
         */
        onKeyDown: (event: KeyEvent) => void;

        /**
         * The function to be called when the user releases a key on the keyboard.
         * The function receives a KeyEvent object which contains information about the keyboard event.
         * If the function returns false, the keyboard event will be prevented from bubbling up. This can be used for example to stop the window from scrolling, when you need the user to interact with arrow keys.
         */
        onKeyUp: (event: KeyEvent) => void;

        /**
         * Activates this tool, meaning paperScope.tool will point to it and it will be the one that recieves mouse events.
         */
        activate(): void;

        /**
         * Removes this tool from the paperScope.tools list.
         */
        remove(): void;

        //I cannot use function: Function as it is a reserved keyword

        /**
         * Attach an event handler to the tool.
         * @param type - String('mousedown'|'mouseup'|'mousedrag'|'mousemove'|'keydown'|'keyup') the event type
         * @param function - The function to be called when the event occurs
         */
        on(type: string, callback: (event: ToolEvent) => void): Tool;

        /**
         * Attach one or more event handlers to the tool.
         * @param param - an object literal containing one or more of the following properties: mousedown, mouseup, mousedrag, mousemove, keydown, keyup
         */
        on(param: any): Tool;

        /**
         * Detach an event handler from the tool.
         * @param type - String('mousedown'|'mouseup'|'mousedrag'|'mousemove'|'keydown'|'keyup') the event type
         * @param function - The function to be detached
         */
        off(type: string, callback: (event: ToolEvent) => void): Tool;

        /**
         * Detach one or more event handlers from the tool.
         * @param param -  an object literal containing one or more of the following properties: mousedown, mouseup, mousedrag, mousemove, keydown, keyup
         */
        off(param: any): Tool;

        /**
         * Emit an event on the tool.
         * @param type - String('mousedown'|'mouseup'|'mousedrag'|'mousemove'|'keydown'|'keyup') the event type
         * @param event - an object literal containing properties describing the event.
         */
        emit(type: string, event: any): boolean;

        /**
         * Check if the tool has one or more event handlers of the specified type.
         * @param type - String('mousedown'|'mouseup'|'mousedrag'|'mousemove'|'keydown'|'keyup') the event type
         */
        responds(type: string): boolean;

    }
    export class Event {

        /**
         * Read Only
         */
        modifiers: any;

    }
    /**
     * ToolEvent The ToolEvent object is received by the Tool's mouse event handlers tool.onMouseDown, tool.onMouseDrag, tool.onMouseMove and tool.onMouseUp. The ToolEvent object is the only parameter passed to these functions and contains information about the mouse event.
     */
    export class ToolEvent extends Event {

        /**
         * The type of tool event.
         * String('mousedown', 'mouseup', 'mousemove', 'mousedrag')
         */
        type: string;

        /**
         * The position of the mouse in project coordinates when the event was fired.
         */
        point: Point;

        /**
         * The position of the mouse in project coordinates when the previous event was fired.
         */
        lastPoint: Point;

        /**
         * The position of the mouse in project coordinates when the mouse button was last clicked.
         */
        downPoint: Point;

        /**
         * The point in the middle between lastPoint and point. This is a useful position to use when creating artwork based on the moving direction of the mouse, as returned by delta.
         */
        middlePoint: Point;

        /**
         * The difference between the current position and the last position of the mouse when the event was fired. In case of the mouseup event, the difference to the mousedown position is returned.
         */
        delta: Point;

        /**
         * The number of times the mouse event was fired.
         */
        count: number;

        /**
         * The item at the position of the mouse (if any). If the item is contained within one or more Group or CompoundPath items, the most top level group or compound path that it is contained within is returned.
         */
        item: Item;

        /**
         * a string representation of the tool event
         */
        toString(): string;

    }
    export class Key {

        /**
         * Checks whether the specified key is pressed.
         * @param key - One of: 'backspace', 'enter', 'shift', 'control', 'option', 'pause', 'caps-lock', 'escape', 'space', 'end', 'home', 'left', 'up', 'right', 'down', 'delete', 'command'
         */
        static isDown(key: string): boolean;

    }
    /**
     * The KeyEvent object is received by the Tool's keyboard handlers tool.onKeyDown, tool.onKeyUp. The KeyEvent object is the only parameter passed to these functions and contains information about the keyboard event.
     */
    export class KeyEvent extends Event {

        /**
         * The type of key event.
         * String('keydown', 'keyup')
         */
        type: string;

        /**
         * The string character of the key that caused this key event.
         */
        character: string;

        /**
         * The key that caused this key event.
         */
        key: string;

        /**
         * a string representation of the key event
         */
        toString(): string;

    }
    /**
     * The TextItem type allows you to create typography. Its functionality is inherited by different text item types such as PointText, and AreaText (coming soon). They each add a layer of functionality that is unique to their type, but share the underlying properties and functions that they inherit from TextItem.
     */
    export class TextItem extends Item {

        /**
         * The text contents of the text item.
         */
        content: string;

        /**
         * The font-family to be used in text content.
         */
        fontFamily: string;

        /**
         * The font-weight to be used in text content.
         */
        fontWeight: string | number;

        /**
         * The font size of text content, as {@Number} in pixels, or as {@String} with optional units 'px', 'pt' and 'em'.
         */
        fontSize: string | number;

        /**
         * The text leading of text content.
         */
        leading: string | number;

        /**
         * The justification of text paragraphs.
         * String('left', 'right', 'center')
         */
        justification: string;

    }
    /**
     * A PointText item represents a piece of typography in your Paper.js project which starts from a certain point and extends by the amount of characters contained in it.
     */
    export class PointText extends TextItem {

        /**
         * Creates a point text item
         * @param point - the position where the text will start
         */
        constructor(point: Point);

        /**
         * Creates a point text item from the properties described by an object literal.
         * @param object - an object literal containing properties describing the path's attributes
         */
        constructor(object: any);

        /**
         * The PointText's anchor point
         */
        point: Point;

    }

    /**
     * A Javascript MouseEvent wrapper
     */
    export class MouseEvent extends Event {
        constructor(type: string, event: NativeMouseEvent, point: Point, target: Item, delta: Point)

        /**
         * The JavaScript mouse event
         */
        event: NativeMouseEvent;

        /**
         * The position of the mouse in project coordinates when the event was
         * fired.
         */
        point: Point;

        /**
         * The last event's position of the mouse in project coordinates when
         * the event was fired.
         */
        lastPoint: Point;

        /**
         *
         */
        delta: Point;

        /**
         * The item that dispatched the event. It is different from
         * currentTarget when the event handler is called during the bubbling
         * phase of the event.
         */
        target: Item;

        /**
         * The current target for the event, as the event traverses the scene
         * graph. It always refers to the element the event handler has been
         * attached to as opposed to target which identifies the element on
         * which the event occurred.
         */
        currentTarget: Item;

        /**
         * Type of mouse event
         */
        type: 'mousedown' | 'mouseup' | 'mousedrag' | 'click' | 'doubleclick' | 'mousemove' | 'mouseenter' | 'mouseleave';

        /**
         * The time at which the event was created, in milliseconds since the
         * epoch.
         */
        timeStamp(): number;

        /**
         * Cancels the event if it is cancelable, without stopping further
         * propagation of the event.
         */
        preventDefault(): void;

        /**
         * Prevents further propagation of the current event.
         */
        stopPropagation(): void;

        /**
         * Cancels the event if it is cancelable, and stops stopping further
         * propagation of the event. This is has the same effect as calling
         * both stopPropagation() and preventDefault().
         *
         * Any handler can also return false to indicate that stop() should be
         * called right after.
         */
        stop(): void;
    }
}
