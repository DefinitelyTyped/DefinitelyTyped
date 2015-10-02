// Type definitions for Maker.js
// Project: https://github.com/Microsoft/maker.js
// Definitions by: Dan Marshall <https://github.com/danmarshall>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/**
 * Root module for Maker.js.
 *
 * Example: get a reference to Maker.js
 * ```
 * var makerjs = require('makerjs');
 * ```
 *
 */
declare module MakerJs {
    /**
     * String-based enumeration of unit types: imperial, metric or otherwise.
     * A model may specify the unit system it is using, if any. When importing a model, it may have different units.
     * Unit conversion function is makerjs.units.conversionScale().
     * Important: If you add to this, you must also add a corresponding conversion ratio in the unit.ts file!
     */
    var unitType: {
        Centimeter: string;
        Foot: string;
        Inch: string;
        Meter: string;
        Millimeter: string;
    };
    /**
     * Numeric rounding
     *
     * Example: round to 3 decimal places
     * ```
     * makerjs.round(3.14159, .001); //returns 3.142
     * ```
     *
     * @param n The number to round off.
     * @param accuracy Optional exemplar of number of decimal places.
     */
    function round(n: number, accuracy?: number): number;
    /**
     * Clone an object.
     *
     * @param objectToClone The object to clone.
     * @returns A new clone of the original object.
     */
    function cloneObject<T>(objectToClone: T): T;
    /**
     * Copy the properties from one object to another object.
     *
     * Example:
     * ```
     * makerjs.extendObject({ abc: 123 }, { xyz: 789 }); //returns { abc: 123, xyz: 789 }
     * ```
     *
     * @param target The object to extend. It will receive the new properties.
     * @param other An object containing properties to merge in.
     * @returns The original object after merging.
     */
    function extendObject(target: Object, other: Object): Object;
    /**
     * An x-y point in a two-dimensional space.
     * Implemented as an array with 2 elements. The first element is x, the second element is y.
     *
     * Examples:
     * ```
     * var p: IPoint = [0, 0];   //typescript
     * var p = [0, 0];   //javascript
     * ```
     */
    interface IPoint {
        [index: number]: number;
    }
    /**
     * Test to see if an object implements the required properties of a point.
     *
     * @param item The item to test.
     */
    function isPoint(item: any): boolean;
    /**
     * A measurement of extents, the high and low points.
     */
    interface IMeasure {
        /**
         * The point containing both the lowest x and y values of the rectangle containing the item being measured.
         */
        low: IPoint;
        /**
         * The point containing both the highest x and y values of the rectangle containing the item being measured.
         */
        high: IPoint;
    }
    /**
     * A line, curved line or other simple two dimensional shape.
     */
    interface IPath {
        /**
         * The type of the path, e.g. "line", "circle", or "arc". These strings are enumerated in pathType.
         */
        "type": string;
        /**
         * The main point of reference for this path.
         */
        origin: IPoint;
        /**
         * Optional layer of this path.
         */
        layer?: string;
    }
    /**
     * Test to see if an object implements the required properties of a path.
     *
     * @param item The item to test.
     */
    function isPath(item: any): boolean;
    /**
     * A line path.
     *
     * Examples:
     * ```
     * var line: IPathLine = { type: 'line', origin: [0, 0], end: [1, 1] };   //typescript
     * var line = { type: 'line', origin: [0, 0], end: [1, 1] };   //javascript
     * ```
     */
    interface IPathLine extends IPath {
        /**
         * The end point defining the line. The start point is the origin.
         */
        end: IPoint;
    }
    /**
     * Test to see if an object implements the required properties of a line.
     *
     * @param item The item to test.
     */
    function isPathLine(item: any): boolean;
    /**
     * A circle path.
     *
     * Examples:
     * ```
     * var circle: IPathCircle = { type: 'circle', origin: [0, 0], radius: 7 };   //typescript
     * var circle = { type: 'circle', origin: [0, 0], radius: 7 };   //javascript
     * ```
     */
    interface IPathCircle extends IPath {
        /**
         * The radius of the circle.
         */
        radius: number;
    }
    /**
     * Test to see if an object implements the required properties of a circle.
     *
     * @param item The item to test.
     */
    function isPathCircle(item: any): boolean;
    /**
     * An arc path.
     *
     * Examples:
     * ```
     * var arc: IPathArc = { type: 'arc', origin: [0, 0], radius: 7, startAngle: 0, endAngle: 45 };   //typescript
     * var arc = { type: 'arc', origin: [0, 0], radius: 7, startAngle: 0, endAngle: 45 };   //javascript
     * ```
     */
    interface IPathArc extends IPathCircle {
        /**
         * The angle (in degrees) to begin drawing the arc, in polar (counter-clockwise) direction.
         */
        startAngle: number;
        /**
         * The angle (in degrees) to end drawing the arc, in polar (counter-clockwise) direction. May be less than start angle if it past 360.
         */
        endAngle: number;
    }
    /**
     * Test to see if an object implements the required properties of an arc.
     *
     * @param item The item to test.
     */
    function isPathArc(item: any): boolean;
    /**
     * A map of functions which accept a path as a parameter.
     * @private
     */
    interface IPathFunctionMap {
        /**
         * Key is the type of a path, value is a function which accepts a path object as its parameter.
         */
        [type: string]: (pathValue: IPath) => void;
    }
    /**
     * A map of functions which accept a path and an origin point as parameters.
     * @private
     */
    interface IPathOriginFunctionMap {
        /**
         * Key is the type of a path, value is a function which accepts a path object a point object as its parameters.
         */
        [type: string]: (id: string, pathValue: IPath, origin: IPoint, layer: string) => void;
    }
    /**
     * String-based enumeration of all paths types.
     *
     * Examples: use pathType instead of string literal when creating a circle.
     * ```
     * var circle: IPathCircle = { type: pathType.Circle, origin: [0, 0], radius: 7 };   //typescript
     * var circle = { type: pathType.Circle, origin: [0, 0], radius: 7 };   //javascript
     * ```
     */
    var pathType: {
        Line: string;
        Circle: string;
        Arc: string;
    };
    /**
     * Options to pass to path.intersection()
     */
    interface IPathIntersectionOptions {
        /**
         * Optional boolean to only return deep intersections, i.e. not on an end point or tangent.
         */
        excludeTangents?: boolean;
        /**
         * Optional output variable which will be set to true if the paths are overlapped.
         */
        out_AreOverlapped?: boolean;
    }
    /**
     * An intersection of two paths.
     */
    interface IPathIntersection {
        /**
         * Array of points where the two paths intersected. The length of the array may be either 1 or 2 points.
         */
        intersectionPoints: IPoint[];
        /**
         * This Array property will only be defined if the first parameter passed to pathIntersection is either an Arc or a Circle.
         * It contains the angles of intersection relative to the first path parameter.
         * The length of the array may be either 1 or 2.
         */
        path1Angles?: number[];
        /**
         * This Array property will only be defined if the second parameter passed to pathIntersection is either an Arc or a Circle.
         * It contains the angles of intersection relative to the second path parameter.
         * The length of the array may be either 1 or 2.
         */
        path2Angles?: number[];
    }
    /**
     * Path objects by id.
     */
    interface IPathMap {
        [id: string]: IPath;
    }
    /**
     * Model objects by id.
     */
    interface IModelMap {
        [id: string]: IModel;
    }
    /**
     * A model is a composite object which may contain an array of paths, or an array of models recursively.
     *
     * Example:
     * ```
     * var m = {
     *   paths: {
     *     "line1": { type: 'line', origin: [0, 0], end: [1, 1] },
     *     "line2": { type: 'line', origin: [0, 0], end: [-1, -1] }
     *   }
     * };
     * ```
     */
    interface IModel {
        /**
         * Optional origin location of this model.
         */
        origin?: IPoint;
        /**
         * A model may want to specify its type, but this value is not employed yet.
         */
        "type"?: string;
        /**
         * Optional array of path objects in this model.
         */
        paths?: IPathMap;
        /**
         * Optional array of models within this model.
         */
        models?: IModelMap;
        /**
         * Optional unit system of this model. See UnitType for possible values.
         */
        units?: string;
        /**
         * An author may wish to add notes to this model instance.
         */
        notes?: string;
        /**
         * Optional layer of this model.
         */
        layer?: string;
    }
    /**
     * Test to see if an object implements the required properties of a model.
     */
    function isModel(item: any): boolean;
}
declare module MakerJs.angle {
    /**
     * Find out if two angles are equal.
     *
     * @param a First angle.
     * @param b Second angle.
     * @returns true if angles are the same, false if they are not
     */
    function areEqual(angle1: number, angle2: number): boolean;
    /**
     * Ensures an angle is not greater than 360
     *
     * @param angleInDegrees Angle in degrees.
     * @retiurns Same polar angle but not greater than 360 degrees.
     */
    function noRevolutions(angleInDegrees: number): number;
    /**
     * Convert an angle from degrees to radians.
     *
     * @param angleInDegrees Angle in degrees.
     * @returns Angle in radians.
     */
    function toRadians(angleInDegrees: number): number;
    /**
     * Convert an angle from radians to degrees.
     *
     * @param angleInRadians Angle in radians.
     * @returns Angle in degrees.
     */
    function toDegrees(angleInRadians: number): number;
    /**
     * Get an arc's end angle, ensured to be greater than its start angle.
     *
     * @param arc An arc path object.
     * @returns End angle of arc.
     */
    function ofArcEnd(arc: IPathArc): number;
    /**
     * Get the angle in the middle of an arc's start and end angles.
     *
     * @param arc An arc path object.
     * @param ratio Optional number between 0 and 1 specifying percentage between start and end angles. Default is .5
     * @returns Middle angle of arc.
     */
    function ofArcMiddle(arc: IPathArc, ratio?: number): number;
    /**
     * Angle of a line path.
     *
     * @param line The line path to find the angle of.
     * @returns Angle of the line path, in degrees.
     */
    function ofLineInDegrees(line: IPathLine): number;
    /**
     * Angle of a line through a point, in degrees.
     *
     * @param pointToFindAngle The point to find the angle.
     * @param origin Point of origin of the angle.
     * @returns Angle of the line throught the point, in degrees.
     */
    function ofPointInDegrees(origin: IPoint, pointToFindAngle: IPoint): number;
    /**
     * Angle of a line through a point, in radians.
     *
     * @param pointToFindAngle The point to find the angle.
     * @param origin Point of origin of the angle.
     * @returns Angle of the line throught the point, in radians.
     */
    function ofPointInRadians(origin: IPoint, pointToFindAngle: IPoint): number;
    /**
     * Mirror an angle on either or both x and y axes.
     *
     * @param angleInDegrees The angle to mirror.
     * @param mirrorX Boolean to mirror on the x axis.
     * @param mirrorY Boolean to mirror on the y axis.
     * @returns Mirrored angle.
     */
    function mirror(angleInDegrees: number, mirrorX: boolean, mirrorY: boolean): number;
}
declare module MakerJs.point {
    /**
     * Add two points together and return the result as a new point object.
     *
     * @param a First point.
     * @param b Second point.
     * @param subtract Optional boolean to subtract instead of add.
     * @returns A new point object.
     */
    function add(a: IPoint, b: IPoint, subtract?: boolean): IPoint;
    /**
     * Find out if two points are equal.
     *
     * @param a First point.
     * @param b Second point.
     * @returns true if points are the same, false if they are not
     */
    function areEqual(a: IPoint, b: IPoint): boolean;
    /**
     * Find out if two points are equal after rounding.
     *
     * @param a First point.
     * @param b Second point.
     * @returns true if points are the same, false if they are not
     */
    function areEqualRounded(a: IPoint, b: IPoint, accuracy?: number): boolean;
    /**
     * Clone a point into a new point.
     *
     * @param pointToClone The point to clone.
     * @returns A new point with same values as the original.
     */
    function clone(pointToClone: IPoint): IPoint;
    /**
     * From an array of points, find the closest point to a given reference point.
     *
     * @param referencePoint The reference point.
     * @param pointOptions Array of points to choose from.
     * @returns The first closest point from the pointOptions.
     */
    function closest(referencePoint: IPoint, pointOptions: IPoint[]): IPoint;
    /**
     * Get a point from its polar coordinates.
     *
     * @param angleInRadians The angle of the polar coordinate, in radians.
     * @param radius The radius of the polar coordinate.
     * @returns A new point object.
     */
    function fromPolar(angleInRadians: number, radius: number): IPoint;
    /**
     * Get a point on a circle or arc path, at a given angle.
     * @param angleInDegrees The angle at which you want to find the point, in degrees.
     * @param circle A circle or arc.
     * @returns A new point object.
     */
    function fromAngleOnCircle(angleInDegrees: number, circle: IPathCircle): IPoint;
    /**
     * Get the two end points of an arc path.
     *
     * @param arc The arc path object.
     * @returns Array with 2 elements: [0] is the point object corresponding to the start angle, [1] is the point object corresponding to the end angle.
     */
    function fromArc(arc: IPathArc): IPoint[];
    /**
     * Get the two end points of a path.
     *
     * @param pathContext The path object.
     * @returns Array with 2 elements: [0] is the point object corresponding to the origin, [1] is the point object corresponding to the end.
     */
    function fromPathEnds(pathContext: IPath): IPoint[];
    /**
     * Get the middle point of a path. Currently only supports Arc and Line paths.
     *
     * @param pathContext The path object.
     * @param ratio Optional ratio (between 0 and 1) of point along the path. Default is .5 for middle.
     * @returns Point on the path, in the middle of the path.
     */
    function middle(pathContext: IPath, ratio?: number): IPoint;
    /**
     * Create a clone of a point, mirrored on either or both x and y axes.
     *
     * @param pointToMirror The point to mirror.
     * @param mirrorX Boolean to mirror on the x axis.
     * @param mirrorY Boolean to mirror on the y axis.
     * @returns Mirrored point.
     */
    function mirror(pointToMirror: IPoint, mirrorX: boolean, mirrorY: boolean): IPoint;
    /**
     * Rotate a point.
     *
     * @param pointToRotate The point to rotate.
     * @param angleInDegrees The amount of rotation, in degrees.
     * @param rotationOrigin The center point of rotation.
     * @returns A new point.
     */
    function rotate(pointToRotate: IPoint, angleInDegrees: number, rotationOrigin: IPoint): IPoint;
    /**
     * Scale a point's coordinates.
     *
     * @param pointToScale The point to scale.
     * @param scaleValue The amount of scaling.
     * @returns A new point.
     */
    function scale(pointToScale: IPoint, scaleValue: number): IPoint;
    /**
     * Subtract a point from another point, and return the result as a new point. Shortcut to Add(a, b, subtract = true).
     *
     * @param a First point.
     * @param b Second point.
     * @returns A new point object.
     */
    function subtract(a: IPoint, b: IPoint): IPoint;
    /**
     * A point at 0,0 coordinates.
     * NOTE: It is important to call this as a method, with the empty parentheses.
     *
     * @returns A new point.
     */
    function zero(): IPoint;
}
declare module MakerJs.path {
    /**
     * Find out if two paths are equal.
     *
     * @param a First path.
     * @param b Second path.
     * @returns true if paths are the same, false if they are not
     */
    function areEqual(path1: IPath, path2: IPath): boolean;
    /**
     * Create a clone of a path, mirrored on either or both x and y axes.
     *
     * @param pathToMirror The path to mirror.
     * @param mirrorX Boolean to mirror on the x axis.
     * @param mirrorY Boolean to mirror on the y axis.
     * @param newId Optional id to assign to the new path.
     * @returns Mirrored path.
     */
    function mirror(pathToMirror: IPath, mirrorX: boolean, mirrorY: boolean, newId?: string): IPath;
    /**
     * Move a path to an absolute point.
     *
     * @param pathToMove The path to move.
     * @param origin The new origin for the path.
     * @returns The original path (for chaining).
     */
    function move(pathToMove: IPath, origin: IPoint): IPath;
    /**
     * Move a path's origin by a relative amount.
     *
     * @param pathToMove The path to move.
     * @param delta The x & y adjustments as a point object.
     * @returns The original path (for chaining).
     */
    function moveRelative(pathToMove: IPath, delta: IPoint): IPath;
    /**
     * Rotate a path.
     *
     * @param pathToRotate The path to rotate.
     * @param angleInDegrees The amount of rotation, in degrees.
     * @param rotationOrigin The center point of rotation.
     * @returns The original path (for chaining).
     */
    function rotate(pathToRotate: IPath, angleInDegrees: number, rotationOrigin: IPoint): IPath;
    /**
     * Scale a path.
     *
     * @param pathToScale The path to scale.
     * @param scaleValue The amount of scaling.
     * @returns The original path (for chaining).
     */
    function scale(pathToScale: IPath, scaleValue: number): IPath;
}
declare module MakerJs.path {
    /**
     * Breaks a path in two. The supplied path will end at the supplied pointOfBreak,
     * a new path is returned which begins at the pointOfBreak and ends at the supplied path's initial end point.
     * For Circle, the original path will be converted in place to an Arc, and null is returned.
     *
     * @param pathToBreak The path to break.
     * @param pointOfBreak The point at which to break the path.
     * @returns A new path of the same type, when path type is line or arc. Returns null for circle.
     */
    function breakAtPoint(pathToBreak: IPath, pointOfBreak: IPoint): IPath;
}
declare module MakerJs.paths {
    /**
     * Class for arc path.
     *
     * @param origin The center point of the arc.
     * @param radius The radius of the arc.
     * @param startAngle The start angle of the arc.
     * @param endAngle The end angle of the arc.
     */
    class Arc implements IPathArc {
        origin: IPoint;
        radius: number;
        startAngle: number;
        endAngle: number;
        type: string;
        constructor(origin: IPoint, radius: number, startAngle: number, endAngle: number);
    }
    /**
     * Class for circle path.
     *
     * @param origin The center point of the circle.
     * @param radius The radius of the circle.
     */
    class Circle implements IPathCircle {
        origin: IPoint;
        radius: number;
        type: string;
        constructor(origin: IPoint, radius: number);
    }
    /**
     * Class for line path.
     *
     * @param origin The origin point of the line.
     * @param end The end point of the line.
     */
    class Line implements IPathLine {
        origin: IPoint;
        end: IPoint;
        type: string;
        constructor(origin: IPoint, end: IPoint);
    }
    /**
     * Class for chord, which is simply a line path that connects the endpoints of an arc.
     *
     * @param arc Arc to use as the basic for the chord.
     */
    class Chord implements IPathLine {
        type: string;
        origin: IPoint;
        end: IPoint;
        constructor(arc: IPathArc);
    }
    /**
     * Class for a parallel line path.
     *
     * @param toLine A line to be parallel to.
     * @param distance Distance between parallel and original line.
     * @param nearPoint Any point to determine which side of the line to place the parallel.
     */
    class Parallel implements IPathLine {
        type: string;
        origin: IPoint;
        end: IPoint;
        constructor(toLine: IPathLine, distance: number, nearPoint: IPoint);
    }
}
declare module MakerJs.model {
    /**
     * Get an unused id in the paths map with the same prefix.
     *
     * @param modelContext The model containing the paths map.
     * @param pathId The pathId to use directly (if unused), or as a prefix.
     */
    function getSimilarPathId(modelContext: IModel, pathId: string): string;
    /**
     * Moves all of a model's children (models and paths, recursively) in reference to a single common origin. Useful when points between children need to connect to each other.
     *
     * @param modelToOriginate The model to originate.
     * @param origin Optional offset reference point.
     */
    function originate(modelToOriginate: IModel, origin?: IPoint): IModel;
    /**
     * Create a clone of a model, mirrored on either or both x and y axes.
     *
     * @param modelToMirror The model to mirror.
     * @param mirrorX Boolean to mirror on the x axis.
     * @param mirrorY Boolean to mirror on the y axis.
     * @returns Mirrored model.
     */
    function mirror(modelToMirror: IModel, mirrorX: boolean, mirrorY: boolean): IModel;
    /**
     * Move a model to an absolute point. Note that this is also accomplished by directly setting the origin property. This function exists for chaining.
     *
     * @param modelToMove The model to move.
     * @param origin The new position of the model.
     * @returns The original model (for chaining).
     */
    function move(modelToMove: IModel, origin: IPoint): IModel;
    /**
     * Move a model's origin by a relative amount.
     *
     * @param modelToMove The model to move.
     * @param delta The x & y adjustments as a point object.
     * @returns The original model (for chaining).
     */
    function moveRelative(modelToMove: IModel, delta: IPoint): IModel;
    /**
     * Rotate a model.
     *
     * @param modelToRotate The model to rotate.
     * @param angleInDegrees The amount of rotation, in degrees.
     * @param rotationOrigin The center point of rotation.
     * @returns The original model (for chaining).
     */
    function rotate(modelToRotate: IModel, angleInDegrees: number, rotationOrigin: IPoint): IModel;
    /**
     * Scale a model.
     *
     * @param modelToScale The model to scale.
     * @param scaleValue The amount of scaling.
     * @param scaleOrigin Optional boolean to scale the origin point. Typically false for the root model.
     * @returns The original model (for chaining).
     */
    function scale(modelToScale: IModel, scaleValue: number, scaleOrigin?: boolean): IModel;
    /**
     * Convert a model to match a different unit system.
     *
     * @param modeltoConvert The model to convert.
     * @param destUnitType The unit system.
     * @returns The scaled model (for chaining).
     */
    function convertUnits(modeltoConvert: IModel, destUnitType: string): IModel;
    /**
     * Callback signature for walkPaths.
     */
    interface IModelPathCallback {
        (modelContext: IModel, pathId: string, pathContext: IPath): void;
    }
    /**
     * Recursively walk through all paths for a given model.
     *
     * @param modelContext The model to walk.
     * @param callback Callback for each path.
     */
    function walkPaths(modelContext: IModel, callback: IModelPathCallback): void;
}
declare module MakerJs.model {
    /**
     * Combine 2 models. The models should be originated.
     *
     * @param modelA First model to combine.
     * @param modelB Second model to combine.
     * @param includeAInsideB Flag to include paths from modelA which are inside of modelB.
     * @param includeAOutsideB Flag to include paths from modelA which are outside of modelB.
     * @param includeBInsideA Flag to include paths from modelB which are inside of modelA.
     * @param includeBOutsideA Flag to include paths from modelB which are outside of modelA.
     * @param farPoint Optional point of reference which is outside the bounds of both models.
     */
    function combine(modelA: IModel, modelB: IModel, includeAInsideB: boolean, includeAOutsideB: boolean, includeBInsideA: boolean, includeBOutsideA: boolean, farPoint?: IPoint): void;
}
declare module MakerJs.units {
    /**
     * Get a conversion ratio between a source unit and a destination unit.
     *
     * @param srcUnitType unitType converting from.
     * @param destUnitType unitType converting to.
     * @returns Numeric ratio of the conversion.
     */
    function conversionScale(srcUnitType: string, destUnitType: string): number;
}
declare module MakerJs.measure {
    /**
     * Total angle of an arc between its start and end angles.
     *
     * @param arc The arc to measure.
     * @returns Angle of arc.
     */
    function arcAngle(arc: IPathArc): number;
    /**
     * Check for arc being concave or convex towards a given point.
     *
     * @param arc The arc to test.
     * @param towardsPoint The point to test.
     * @returns Boolean true if arc is concave towards point.
     */
    function isArcConcaveTowardsPoint(arc: IPathArc, towardsPoint: IPoint): boolean;
    /**
     * Check if a given number is between two given limits.
     *
     * @param valueInQuestion The number to test.
     * @param limit1 First limit.
     * @param limit2 Second limit.
     * @param exclusive Flag to exclude equaling the limits.
     * @returns Boolean true if value is between (or equal to) the limits.
     */
    function isBetween(valueInQuestion: number, limit1: number, limit2: number, exclusive: boolean): boolean;
    /**
     * Check if a given angle is between an arc's start and end angles.
     *
     * @param angleInQuestion The angle to test.
     * @param arc Arc to test against.
     * @param exclusive Flag to exclude equaling the start or end angles.
     * @returns Boolean true if angle is between (or equal to) the arc's start and end angles.
     */
    function isBetweenArcAngles(angleInQuestion: number, arc: IPathArc, exclusive: boolean): boolean;
    /**
     * Check if a given point is between a line's end points.
     *
     * @param pointInQuestion The point to test.
     * @param line Line to test against.
     * @param exclusive Flag to exclude equaling the origin or end points.
     * @returns Boolean true if point is between (or equal to) the line's origin and end points.
     */
    function isBetweenPoints(pointInQuestion: IPoint, line: IPathLine, exclusive: boolean): boolean;
    /**
     * Calculates the distance between two points.
     *
     * @param a First point.
     * @param b Second point.
     * @returns Distance between points.
     */
    function pointDistance(a: IPoint, b: IPoint): number;
    /**
     * Calculates the smallest rectangle which contains a path.
     *
     * @param pathToMeasure The path to measure.
     * @returns object with low and high points.
     */
    function pathExtents(pathToMeasure: IPath): IMeasure;
    /**
     * Measures the length of a path.
     *
     * @param pathToMeasure The path to measure.
     * @returns Length of the path.
     */
    function pathLength(pathToMeasure: IPath): number;
    /**
     * Measures the smallest rectangle which contains a model.
     *
     * @param modelToMeasure The model to measure.
     * @returns object with low and high points.
     */
    function modelExtents(modelToMeasure: IModel): IMeasure;
}
declare module MakerJs.exporter {
    /**
     * @private
     */
    interface IExportOptions {
        /**
         * Unit system to embed in exported file.
         */
        units?: string;
    }
    /**
     * Try to get the unit system from a model
     * @private
     */
    function tryGetModelUnits(itemToExport: any): string;
    /**
     * Class to traverse an item 's models or paths and ultimately render each path.
     * @private
     */
    class Exporter {
        private map;
        private fixPoint;
        private fixPath;
        private beginModel;
        private endModel;
        /**
         * @param map Object containing properties: property name is the type of path, e.g. "line", "circle"; property value
         * is a function to render a path. Function parameters are path and point.
         * @param fixPoint Optional function to modify a point prior to export. Function parameter is a point; function must return a point.
         * @param fixPath Optional function to modify a path prior to output. Function parameters are path and offset point; function must return a path.
         */
        constructor(map: IPathOriginFunctionMap, fixPoint?: (pointToFix: IPoint) => IPoint, fixPath?: (pathToFix: IPath, origin: IPoint) => IPath, beginModel?: (id: string, modelContext: IModel) => void, endModel?: (modelContext: IModel) => void);
        /**
         * Export a path.
         *
         * @param pathToExport The path to export.
         * @param offset The offset position of the path.
         */
        exportPath(id: string, pathToExport: IPath, offset: IPoint, layer: string): void;
        /**
         * Export a model.
         *
         * @param modelToExport The model to export.
         * @param offset The offset position of the model.
         */
        exportModel(modelId: string, modelToExport: IModel, offset: IPoint): void;
        /**
         * Export an object.
         *
         * @param item The object to export. May be a path, an array of paths, a model, or an array of models.
         * @param offset The offset position of the object.
         */
        exportItem(itemId: string, itemToExport: any, origin: IPoint): void;
    }
}
declare module MakerJs.exporter {
    function toDXF(modelToExport: IModel, options?: IDXFRenderOptions): string;
    function toDXF(pathsToExport: IPath[], options?: IDXFRenderOptions): string;
    function toDXF(pathToExport: IPath, options?: IDXFRenderOptions): string;
    /**
     * DXF rendering options.
     */
    interface IDXFRenderOptions extends IExportOptions {
    }
}
declare module MakerJs.solvers {
    /**
     * Solves for the angle of a triangle when you know lengths of 3 sides.
     *
     * @param length1 Length of side of triangle, opposite of the angle you are trying to find.
     * @param length2 Length of any other side of the triangle.
     * @param length3 Length of the remaining side of the triangle.
     * @returns Angle opposite of the side represented by the first parameter.
     */
    function solveTriangleSSS(length1: number, length2: number, length3: number): number;
    /**
     * Solves for the length of a side of a triangle when you know length of one side and 2 angles.
     *
     * @param oppositeAngleInDegrees Angle which is opposite of the side you are trying to find.
     * @param lengthOfSideBetweenAngles Length of one side of the triangle which is between the provided angles.
     * @param otherAngleInDegrees An other angle of the triangle.
     * @returns Length of the side of the triangle which is opposite of the first angle parameter.
     */
    function solveTriangleASA(oppositeAngleInDegrees: number, lengthOfSideBetweenAngles: number, otherAngleInDegrees: number): number;
}
declare module MakerJs.path {
    /**
     * Find the point(s) where 2 paths intersect.
     *
     * @param path1 First path to find intersection.
     * @param path2 Second path to find intersection.
     * @param options Optional IPathIntersectionOptions.
     * @returns IPathIntersection object, with points(s) of intersection (and angles, when a path is an arc or circle); or null if the paths did not intersect.
     */
    function intersection(path1: IPath, path2: IPath, options?: IPathIntersectionOptions): IPathIntersection;
    /**
     * Calculates the intersection of slopes of two lines.
     *
     * @param line1 First line to use for slope.
     * @param line2 Second line to use for slope.
     * @param options Optional IPathIntersectionOptions.
     * @returns point of intersection of the two slopes, or null if the slopes did not intersect.
     */
    function slopeIntersectionPoint(line1: IPathLine, line2: IPathLine, options?: IPathIntersectionOptions): IPoint;
}
declare module MakerJs.path {
    /**
     * Adds a round corner to the outside angle between 2 lines. The lines must meet at one point.
     *
     * @param line1 First line to fillet, which will be modified to fit the fillet.
     * @param line2 Second line to fillet, which will be modified to fit the fillet.
     * @returns Arc path object of the new fillet.
     */
    function dogbone(line1: IPathLine, line2: IPathLine, filletRadius: number): IPathArc;
    /**
     * Adds a round corner to the inside angle between 2 paths. The paths must meet at one point.
     *
     * @param path1 First path to fillet, which will be modified to fit the fillet.
     * @param path2 Second path to fillet, which will be modified to fit the fillet.
     * @returns Arc path object of the new fillet.
     */
    function fillet(path1: IPath, path2: IPath, filletRadius: number): IPathArc;
}
declare module MakerJs.kit {
    /**
     * Describes a parameter and its limits.
     */
    interface IMetaParameter {
        /**
         * Display text of the parameter.
         */
        title: string;
        /**
         * Type of the parameter. Currently supports "range".
         */
        type: string;
        /**
         * Optional minimum value of the range.
         */
        min?: number;
        /**
         * Optional maximum value of the range.
         */
        max?: number;
        /**
         * Optional step value between min and max.
         */
        step?: number;
        /**
         * Initial sample value for this parameter.
         */
        value: any;
    }
    /**
     * An IKit is a model-producing class with some sample parameters. Think of it as a packaged model with instructions on how to best use it.
     */
    interface IKit {
        /**
         * The constructor. The kit must be "new-able" and it must produce an IModel.
         * It can have any number of any type of parameters.
         */
        new (...args: any[]): IModel;
        /**
         * Attached to the constructor is a property named metaParameters which is an array of IMetaParameter objects.
         * Each element of the array corresponds to a parameter of the constructor, in order.
         */
        metaParameters?: IMetaParameter[];
    }
    /**
     * Helper function to use the JavaScript "apply" function in conjunction with the "new" keyword.
     *
     * @param ctor The constructor for the class which is an IKit.
     * @param args The array of parameters passed to the constructor.
     * @returns A new instance of the class, which implements the IModel interface.
     */
    function construct(ctor: IKit, args: any): IModel;
    /**
     * Extract just the initial sample values from a kit.
     *
     * @param ctor The constructor for the class which is an IKit.
     * @returns Array of the inital sample values provided in the metaParameters array.
     */
    function getParameterValues(ctor: IKit): any[];
}
declare module MakerJs.exporter {
    /**
     * Attributes for an XML tag.
     * @private
     */
    interface IXmlTagAttrs {
        [name: string]: any;
    }
    /**
     * Class for an XML tag.
     * @private
     */
    class XmlTag {
        name: string;
        attrs: IXmlTagAttrs;
        /**
         * Text between the opening and closing tags.
         */
        innerText: string;
        /**
         * Boolean to indicate that the innerText has been escaped.
         */
        innerTextEscaped: boolean;
        /**
         * Escapes certain characters within a string so that it can appear in a tag or its attribute.
         *
         * @returns Escaped string.
         */
        static escapeString(value: string): string;
        /**
         * @param name Name of the XML tag.
         * @param attrs Optional attributes for the tag.
         */
        constructor(name: string, attrs?: IXmlTagAttrs);
        /**
         * Get the opening tag.
         *
         * @param selfClose Flag to determine if opening tag should be self closing.
         */
        getOpeningTag(selfClose: boolean): string;
        /**
         * Get the inner text.
         */
        getInnerText(): string;
        /**
         * Get the closing tag.
         */
        getClosingTag(): string;
        /**
         * Output the entire tag as a string.
         */
        toString(): string;
    }
}
declare module MakerJs.exporter {
    function toSVG(modelToExport: IModel, options?: ISVGRenderOptions): string;
    function toSVG(pathsToExport: IPath[], options?: ISVGRenderOptions): string;
    function toSVG(pathToExport: IPath, options?: ISVGRenderOptions): string;
    /**
     * SVG rendering options.
     */
    interface ISVGRenderOptions extends IExportOptions {
        /**
         * Optional attributes to add to the root svg tag.
         */
        svgAttrs?: IXmlTagAttrs;
        /**
         * SVG stroke width of paths. This may have a unit type suffix, if not, the value will be in the same unit system as the units property.
         */
        strokeWidth?: string;
        /**
         * SVG color of the rendered paths.
         */
        stroke: string;
        /**
         * Scale of the SVG rendering.
         */
        scale: number;
        /**
         *  Indicate that the id's of paths should be rendered as SVG text elements.
         */
        annotate: boolean;
        /**
         * Rendered reference origin.
         */
        origin: IPoint;
        /**
         * Use SVG < path > elements instead of < line >, < circle > etc.
         */
        useSvgPathOnly: boolean;
        /**
         * Flag to use SVG viewbox.
         */
        viewBox: boolean;
    }
}
declare module MakerJs.models {
    class ConnectTheDots implements IModel {
        paths: IPathMap;
        constructor(isClosed: boolean, points: IPoint[]);
    }
}
declare module MakerJs.models {
    class Polygon extends ConnectTheDots {
        constructor(numberOfSides: number, radius: number, firstCornerAngleInDegrees?: number);
        static getPoints(numberOfSides: number, radius: number, firstCornerAngleInDegrees?: number): IPoint[];
    }
}
declare module MakerJs.models {
    class BoltCircle implements IModel {
        paths: IPathMap;
        constructor(boltRadius: number, holeRadius: number, boltCount: number, firstBoltAngleInDegrees?: number);
    }
}
declare module MakerJs.models {
    class BoltRectangle implements IModel {
        paths: IPathMap;
        constructor(width: number, height: number, holeRadius: number);
    }
}
declare module MakerJs.models {
    class RoundRectangle implements IModel {
        paths: IPathMap;
        constructor(width: number, height: number, radius: number);
    }
}
declare module MakerJs.models {
    class Oval extends RoundRectangle {
        constructor(width: number, height: number);
    }
}
declare module MakerJs.models {
    class OvalArc implements IModel {
        paths: IPathMap;
        constructor(startAngle: number, endAngle: number, sweepRadius: number, slotRadius: number);
    }
}
declare module MakerJs.models {
    class Rectangle extends ConnectTheDots {
        constructor(width: number, height: number);
    }
}
declare module MakerJs.models {
    class Ring implements IModel {
        paths: IPathMap;
        constructor(outerRadius: number, innerRadius: number);
    }
}
declare module MakerJs.models {
    class SCurve implements IModel {
        paths: IPathMap;
        constructor(width: number, height: number);
    }
}
declare module MakerJs.models {
    class Square extends Rectangle {
        constructor(side: number);
    }
}
declare module MakerJs.models {
    class Star implements IModel {
        paths: IPathMap;
        constructor(numberOfPoints: number, outerRadius: number, innerRadius?: number, skipPoints?: number);
        static InnerRadiusRatio(numberOfPoints: number, skipPoints: number): number;
    }
}
