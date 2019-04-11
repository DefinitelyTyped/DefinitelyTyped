// Type definitions for Maker.js 0.9.33
// Project: https://github.com/Microsoft/maker.js
// Definitions by: Dan Marshall <https://github.com/danmarshall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="pdfkit" />
/// <reference types="bezier-js" />
/// <reference types="opentype.js" />

/**
 * Root module for Maker.js.
 *
 * Example: get a reference to Maker.js
 * ```
 * var makerjs = require('makerjs');
 * ```
 *
 */
declare namespace MakerJs {
    /**
     * Version info
     */
    var version: string;
    /**
     * Enumeration of environment types.
     */
    var environmentTypes: {
        BrowserUI: string;
        NodeJs: string;
        WebWorker: string;
        Unknown: string;
    };
    /**
     * Current execution environment type, should be one of environmentTypes.
     */
    var environment: string;
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
     * Create a string representation of a route array.
     *
     * @param route Array of strings which are segments of a route.
     * @returns String of the flattened array.
     */
    function createRouteKey(route: string[]): string;
    /**
     * Travel along a route inside of a model to extract a specific node in its tree.
     *
     * @param modelContext Model to travel within.
     * @param routeKeyOrRoute String of a flattened route, or a string array of route segments.
     * @returns Model or Path object within the modelContext tree.
     */
    function travel(modelContext: IModel, routeKeyOrRoute: string | string[]): {
        path: IPath | IModel;
        offset: IPoint;
    };
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
     * Test to see if a variable is a function.
     *
     * @param value The object to test.
     * @returns True if the object is a function type.
     */
    function isFunction(value: any): boolean;
    /**
     * Test to see if a variable is a number.
     *
     * @param value The object to test.
     * @returns True if the object is a number type.
     */
    function isNumber(value: any): boolean;
    /**
     * Test to see if a variable is an object.
     *
     * @param value The object to test.
     * @returns True if the object is an object type.
     */
    function isObject(value: any): boolean;
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
     * A measurement of extents, with a center point.
     */
    interface IMeasureWithCenter extends IMeasure {
        /**
         * The center point of the rectangle containing the item being measured.
         */
        center: IPoint;
    }
    /**
     * A map of measurements.
     */
    interface IMeasureMap {
        [key: string]: IMeasure;
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
     * A bezier seed defines the endpoints and control points of a bezier curve.
     */
    interface IPathBezierSeed extends IPathLine {
        /**
         * The bezier control points. One point for quadratic, 2 points for cubic.
         */
        controls: IPoint[];
        /**
         * T values of the parent if this is a child that represents a split.
         */
        parentRange?: IBezierRange;
    }
    /**
     * Bezier t values for an arc path segment in a bezier curve.
     */
    interface IBezierRange {
        /**
         * The bezier t-value at the starting point.
         */
        startT: number;
        /**
         * The bezier t-value at the end point.
         */
        endT: number;
    }
    /**
     * An arc path segment in a bezier curve.
     */
    interface IPathArcInBezierCurve extends IPathArc {
        bezierData: IBezierRange;
    }
    /**
     * Test to see if an object implements the required properties of an arc in a bezier curve.
     *
     * @param item The item to test.
     */
    function isPathArcInBezierCurve(item: any): boolean;
    /**
     * A map of functions which accept a path as a parameter.
     */
    interface IPathFunctionMap {
        /**
         * Key is the type of a path, value is a function which accepts a path object as its parameter.
         */
        [type: string]: (pathValue: IPath) => void;
    }
    /**
     * A map of functions which accept a path and an origin point as parameters.
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
        BezierSeed: string;
    };
    /**
     * Slope and y-intercept of a line.
     */
    interface ISlope {
        /**
         * Boolean to see if line has slope or is vertical.
         */
        hasSlope: boolean;
        /**
         * Optional value of non-vertical slope.
         */
        slope?: number;
        /**
         * Line used to calculate this slope.
         */
        line: IPathLine;
        /**
         * Optional value of y when x = 0.
         */
        yIntercept?: number;
    }
    /**
     * Options to pass to path.intersection()
     */
    interface IPathIntersectionBaseOptions {
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
     * Options to pass to path.intersection()
     */
    interface IPathIntersectionOptions extends IPathIntersectionBaseOptions {
        /**
         * Optional boolean to only return deep intersections, i.e. not on an end point or tangent.
         */
        path1Offset?: IPoint;
        /**
         * Optional output variable which will be set to true if the paths are overlapped.
         */
        path2Offset?: IPoint;
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
     * Options when matching points
     */
    interface IPointMatchOptions {
        /**
         * Max distance to consider two points as the same.
         */
        pointMatchingDistance?: number;
    }
    /**
     * Options to pass to model.combine.
     */
    interface ICombineOptions extends IPointMatchOptions {
        /**
         * Flag to remove paths which are not part of a loop.
         */
        trimDeadEnds?: boolean;
        /**
         * Point which is known to be outside of the model.
         */
        farPoint?: IPoint;
        /**
         * Cached measurements for model A.
         */
        measureA?: measure.Atlas;
        /**
         * Cached measurements for model B.
         */
        measureB?: measure.Atlas;
    }
    /**
     * Options to pass to model.findLoops.
     */
    interface IFindLoopsOptions extends IPointMatchOptions {
        /**
         * Flag to remove looped paths from the original model.
         */
        removeFromOriginal?: boolean;
    }
    /**
     * Options to pass to model.simplify()
     */
    interface ISimplifyOptions {
        /**
         * Optional
         */
        pointMatchingDistance?: number;
        /**
         * Optional
         */
        scalarMatchingDistance?: number;
    }
    /**
     * A path that may be indicated to "flow" in either direction between its endpoints.
     */
    interface IPathDirectional extends IPath {
        /**
         * The endpoints of the path.
         */
        endPoints: IPoint[];
        /**
         * Path flows forwards or reverse.
         */
        reversed?: boolean;
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
        /**
         * Optional exporter options for this model.
         */
        exporterOptions?: {
            [exporterName: string]: any;
        };
    }
    /**
     * Callback signature for model.walkPaths().
     */
    interface IModelPathCallback {
        (modelContext: IModel, pathId: string, pathContext: IPath): void;
    }
    /**
     * Test to see if an object implements the required properties of a model.
     */
    function isModel(item: any): boolean;
    /**
     * Reference to a path id within a model.
     */
    interface IRefPathIdInModel {
        modelContext: IModel;
        pathId: string;
    }
    /**
     * A route to either a path or a model, and the absolute offset of it.
     */
    interface IRouteOffset {
        layer: string;
        offset: IPoint;
        route: string[];
        routeKey: string;
    }
    /**
     * A path reference in a walk.
     */
    interface IWalkPath extends IRefPathIdInModel, IRouteOffset {
        pathContext: IPath;
    }
    /**
     * Callback signature for path in model.walk().
     */
    interface IWalkPathCallback {
        (context: IWalkPath): void;
    }
    /**
     * Callback for returning a boolean from an IWalkPath.
     */
    interface IWalkPathBooleanCallback {
        (context: IWalkPath): boolean;
    }
    /**
     * A link in a chain, with direction of flow.
     */
    interface IChainLink {
        /**
         * Reference to the path.
         */
        walkedPath: IWalkPath;
        /**
         * Path flows forwards or reverse.
         */
        reversed: boolean;
        /**
         * The endpoints of the path, in absolute coords.
         */
        endPoints: IPoint[];
        /**
         * Length of the path.
         */
        pathLength: number;
    }
    /**
     * A chain of paths which connect end to end.
     */
    interface IChain {
        /**
         * The links in this chain.
         */
        links: IChainLink[];
        /**
         * Flag if this chain forms a loop end to end.
         */
        endless?: boolean;
        /**
         * Total length of all paths in the chain.
         */
        pathLength: number;
    }
    /**
     * Test to see if an object implements the required properties of a chain.
     *
     * @param item The item to test.
     */
    function isChain(item: any): boolean;
    /**
     * Callback to model.findChains() with resulting array of chains and unchained paths.
     */
    interface IChainCallback {
        (chains: IChain[], loose: IWalkPath[], layer: string): void;
    }
    /**
     * Options to pass to model.findLoops.
     */
    interface IFindChainsOptions extends IPointMatchOptions {
        /**
         * Flag to separate chains by layers.
         */
        byLayers?: boolean;
        /**
         * Flag to not recurse models, look only within current model's immediate paths.
         */
        shallow?: boolean;
    }
    /**
     * Reference to a model within a model.
     */
    interface IRefModelInModel {
        parentModel: IModel;
        childId: string;
        childModel: IModel;
    }
    /**
     * A model reference in a walk.
     */
    interface IWalkModel extends IRefModelInModel, IRouteOffset {
    }
    /**
     * Callback signature for model.walk().
     */
    interface IWalkModelCallback {
        (context: IWalkModel): void;
    }
    /**
     * Callback signature for model.walk(), which may return false to halt any further walking.
     */
    interface IWalkModelCancellableCallback {
        (context: IWalkModel): boolean;
    }
    /**
     * Options to pass to model.walk().
     */
    interface IWalkOptions {
        onPath?: IWalkPathCallback;
        beforeChildWalk?: IWalkModelCancellableCallback;
        afterChildWalk?: IWalkModelCallback;
    }
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
        /**
         * Information about this kit, in plain text or markdown format.
         */
        notes?: string;
    }
}
declare namespace MakerJs.angle {
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
     * Total angle of an arc between its start and end angles.
     *
     * @param arc The arc to measure.
     * @returns Angle of arc.
     */
    function ofArcSpan(arc: IPathArc): number;
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
declare namespace MakerJs.point {
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
     * Get the average of two points.
     *
     * @param a First point.
     * @param b Second point.
     * @returns New point object which is the average of a and b.
     */
    function average(a: IPoint, b: IPoint): IPoint;
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
    function fromPathEnds(pathContext: IPath, pathOffset?: IPoint): IPoint[];
    /**
     * Calculates the intersection of slopes of two lines.
     *
     * @param lineA First line to use for slope.
     * @param lineB Second line to use for slope.
     * @param options Optional IPathIntersectionOptions.
     * @returns point of intersection of the two slopes, or null if the slopes did not intersect.
     */
    function fromSlopeIntersection(lineA: IPathLine, lineB: IPathLine, options?: IPathIntersectionBaseOptions): IPoint;
    /**
     * Get the middle point of a path.
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
     * Round the values of a point.
     *
     * @param pointContext The point to serialize.
     * @param accuracy Optional exemplar number of decimal places.
     * @returns A new point with the values rounded.
     */
    function rounded(pointContext: IPoint, accuracy?: number): IPoint;
    /**
     * Rotate a point.
     *
     * @param pointToRotate The point to rotate.
     * @param angleInDegrees The amount of rotation, in degrees.
     * @param rotationOrigin The center point of rotation.
     * @returns A new point.
     */
    function rotate(pointToRotate: IPoint, angleInDegrees: number, rotationOrigin?: IPoint): IPoint;
    /**
     * Scale a point's coordinates.
     *
     * @param pointToScale The point to scale.
     * @param scaleValue The amount of scaling.
     * @returns A new point.
     */
    function scale(pointToScale: IPoint, scaleValue: number): IPoint;
    /**
     * Distort a point's coordinates.
     *
     * @param pointToDistort The point to distort.
     * @param scaleX The amount of x scaling.
     * @param scaleY The amount of y scaling.
     * @returns A new point.
     */
    function distort(pointToDistort: IPoint, scaleX: number, scaleY: number): IPoint;
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
declare namespace MakerJs.path {
    /**
     * Create a clone of a path. This is faster than cloneObject.
     *
     * @param pathToClone The path to clone.
     * @returns Cloned path.
     */
    function clone(pathToClone: IPath): IPath;
    /**
     * Create a clone of a path, mirrored on either or both x and y axes.
     *
     * @param pathToMirror The path to mirror.
     * @param mirrorX Boolean to mirror on the x axis.
     * @param mirrorY Boolean to mirror on the y axis.
     * @returns Mirrored path.
     */
    function mirror(pathToMirror: IPath, mirrorX: boolean, mirrorY: boolean): IPath;
    /**
     * Move a path to an absolute point.
     *
     * @param pathToMove The path to move.
     * @param origin The new origin for the path.
     * @returns The original path (for cascading).
     */
    function move(pathToMove: IPath, origin: IPoint): IPath;
    /**
     * Move a path's origin by a relative amount.
     *
     * @param pathToMove The path to move.
     * @param delta The x & y adjustments as a point object.
     * @param subtract Optional boolean to subtract instead of add.
     * @returns The original path (for cascading).
     */
    function moveRelative(pathToMove: IPath, delta: IPoint, subtract?: boolean): IPath;
    /**
     * Move some paths relatively during a task execution, then unmove them.
     *
     * @param pathsToMove The paths to move.
     * @param deltas The x & y adjustments as a point object array.
     * @param task The function to call while the paths are temporarily moved.
     */
    function moveTemporary(pathsToMove: IPath[], deltas: IPoint[], task: Function): void;
    /**
     * Rotate a path.
     *
     * @param pathToRotate The path to rotate.
     * @param angleInDegrees The amount of rotation, in degrees.
     * @param rotationOrigin The center point of rotation.
     * @returns The original path (for cascading).
     */
    function rotate(pathToRotate: IPath, angleInDegrees: number, rotationOrigin?: IPoint): IPath;
    /**
     * Scale a path.
     *
     * @param pathToScale The path to scale.
     * @param scaleValue The amount of scaling.
     * @returns The original path (for cascading).
     */
    function scale(pathToScale: IPath, scaleValue: number): IPath;
    /**
     * Distort a path - scale x and y individually.
     *
     * @param pathToDistort The path to distort.
     * @param scaleX The amount of x scaling.
     * @param scaleY The amount of y scaling.
     * @returns A new IModel (for circles and arcs) or IPath (for lines and bezier seeds).
     */
    function distort(pathToDistort: IPath, scaleX: number, scaleY: number): IModel | IPath;
    /**
     * Connect 2 lines at their slope intersection point.
     *
     * @param lineA First line to converge.
     * @param lineB Second line to converge.
     * @param useOriginA Optional flag to converge the origin point of lineA instead of the end point.
     * @param useOriginB Optional flag to converge the origin point of lineB instead of the end point.
     */
    function converge(lineA: IPathLine, lineB: IPathLine, useOriginA?: boolean, useOriginB?: boolean): IPoint;
    /**
     * Get points along a path.
     *
     * @param pathContext Path to get points from.
     * @param numberOfPoints Number of points to divide the path.
     * @returns Array of points which are on the path spread at a uniform interval.
     */
    function toPoints(pathContext: IPath, numberOfPoints: number): IPoint[];
    /**
     * Get key points (a minimal a number of points) along a path.
     *
     * @param pathContext Path to get points from.
     * @param maxArcFacet Optional maximum length between points on an arc or circle.
     * @returns Array of points which are on the path.
     */
    function toKeyPoints(pathContext: IPath, maxArcFacet?: number): IPoint[];
    /**
     * Center a path at [0, 0].
     *
     * @param pathToCenter The path to center.
     */
    function center(pathToCenter: IPath): IPath;
    /**
     * Move a path so its bounding box begins at [0, 0].
     *
     * @param pathToZero The path to zero.
     */
    function zero(pathToZero: IPath): IPath;
}
declare namespace MakerJs.path {
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
declare namespace MakerJs.paths {
    /**
     * Class for arc path.
     */
    class Arc implements IPathArc {
        origin: IPoint;
        radius: number;
        startAngle: number;
        endAngle: number;
        type: string;
        /**
         * Class for arc path, created from origin point, radius, start angle, and end angle.
         *
         * @param origin The center point of the arc.
         * @param radius The radius of the arc.
         * @param startAngle The start angle of the arc.
         * @param endAngle The end angle of the arc.
         */
        constructor(origin: IPoint, radius: number, startAngle: number, endAngle: number);
        /**
         * Class for arc path, created from 2 points, radius, large Arc flag, and clockwise flag.
         *
         * @param pointA First end point of the arc.
         * @param pointB Second end point of the arc.
         * @param radius The radius of the arc.
         * @param largeArc Boolean flag to indicate clockwise direction.
         * @param clockwise Boolean flag to indicate clockwise direction.
         */
        constructor(pointA: IPoint, pointB: IPoint, radius: number, largeArc: boolean, clockwise: boolean);
        /**
         * Class for arc path, created from 2 points and optional boolean flag indicating clockwise.
         *
         * @param pointA First end point of the arc.
         * @param pointB Second end point of the arc.
         * @param clockwise Boolean flag to indicate clockwise direction.
         */
        constructor(pointA: IPoint, pointB: IPoint, clockwise?: boolean);
        /**
         * Class for arc path, created from 3 points.
         *
         * @param pointA First end point of the arc.
         * @param pointB Middle point on the arc.
         * @param pointC Second end point of the arc.
         */
        constructor(pointA: IPoint, pointB: IPoint, pointC: IPoint);
    }
    /**
     * Class for circle path.
     */
    class Circle implements IPathCircle {
        type: string;
        origin: IPoint;
        radius: number;
        /**
         * Class for circle path, created from radius. Origin will be [0, 0].
         *
         * Example:
         * ```
         * var c = new makerjs.paths.Circle(7);
         * ```
         *
         * @param radius The radius of the circle.
         */
        constructor(radius: number);
        /**
         * Class for circle path, created from origin point and radius.
         *
         * Example:
         * ```
         * var c = new makerjs.paths.Circle([10, 10], 7);
         * ```
         *
         * @param origin The center point of the circle.
         * @param radius The radius of the circle.
         */
        constructor(origin: IPoint, radius: number);
        /**
         * Class for circle path, created from 2 points.
         *
         * Example:
         * ```
         * var c = new makerjs.paths.Circle([5, 15], [25, 15]);
         * ```
         *
         * @param pointA First point on the circle.
         * @param pointB Second point on the circle.
         */
        constructor(pointA: IPoint, pointB: IPoint);
        /**
         * Class for circle path, created from 3 points.
         *
         * Example:
         * ```
         * var c = new makerjs.paths.Circle([0, 0], [0, 10], [20, 0]);
         * ```
         *
         * @param pointA First point on the circle.
         * @param pointB Second point on the circle.
         * @param pointC Third point on the circle.
         */
        constructor(pointA: IPoint, pointB: IPoint, pointC: IPoint);
    }
    /**
     * Class for line path.
     */
    class Line implements IPathLine {
        type: string;
        origin: IPoint;
        end: IPoint;
        /**
         * Class for line path, constructed from array of 2 points.
         *
         * @param points Array of 2 points.
         */
        constructor(points: IPoint[]);
        /**
         * Class for line path, constructed from 2 points.
         *
         * @param origin The origin point of the line.
         * @param end The end point of the line.
         */
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
declare namespace MakerJs.model {
    /**
     * Count the number of child models within a given model.
     *
     * @param modelContext The model containing other models.
     * @returns Number of child models.
     */
    function countChildModels(modelContext: IModel): number;
    /**
     * Get an unused id in the models map with the same prefix.
     *
     * @param modelContext The model containing the models map.
     * @param modelId The id to use directly (if unused), or as a prefix.
     */
    function getSimilarModelId(modelContext: IModel, modelId: string): string;
    /**
     * Get an unused id in the paths map with the same prefix.
     *
     * @param modelContext The model containing the paths map.
     * @param pathId The id to use directly (if unused), or as a prefix.
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
     * Center a model at [0, 0].
     *
     * @param modelToCenter The model to center.
     */
    function center(modelToCenter: IModel): IModel;
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
     * Move a model to an absolute point. Note that this is also accomplished by directly setting the origin property. This function exists for cascading.
     *
     * @param modelToMove The model to move.
     * @param origin The new position of the model.
     * @returns The original model (for cascading).
     */
    function move(modelToMove: IModel, origin: IPoint): IModel;
    /**
     * Move a model's origin by a relative amount.
     *
     * @param modelToMove The model to move.
     * @param delta The x & y adjustments as a point object.
     * @returns The original model (for cascading).
     */
    function moveRelative(modelToMove: IModel, delta: IPoint): IModel;
    /**
     * Prefix the ids of paths in a model.
     *
     * @param modelToPrefix The model to prefix.
     * @param prefix The prefix to prepend on paths ids.
     * @returns The original model (for cascading).
     */
    function prefixPathIds(modelToPrefix: IModel, prefix: string): IModel;
    /**
     * Rotate a model.
     *
     * @param modelToRotate The model to rotate.
     * @param angleInDegrees The amount of rotation, in degrees.
     * @param rotationOrigin The center point of rotation.
     * @returns The original model (for cascading).
     */
    function rotate(modelToRotate: IModel, angleInDegrees: number, rotationOrigin?: IPoint): IModel;
    /**
     * Scale a model.
     *
     * @param modelToScale The model to scale.
     * @param scaleValue The amount of scaling.
     * @param scaleOrigin Optional boolean to scale the origin point. Typically false for the root model.
     * @returns The original model (for cascading).
     */
    function scale(modelToScale: IModel, scaleValue: number, scaleOrigin?: boolean): IModel;
    /**
     * Convert a model to match a different unit system.
     *
     * @param modeltoConvert The model to convert.
     * @param destUnitType The unit system.
     * @returns The scaled model (for cascading).
     */
    function convertUnits(modeltoConvert: IModel, destUnitType: string): IModel;
    /**
     * Recursively walk through all paths for a given model.
     *
     * @param modelContext The model to walk.
     * @param callback Callback for each path.
     */
    function walkPaths(modelContext: IModel, callback: IModelPathCallback): void;
    /**
     * Recursively walk through all paths for a given model.
     *
     * @param modelContext The model to walk.
     * @param pathCallback Callback for each path.
     * @param modelCallbackBeforeWalk Callback for each model prior to recursion, which can cancel the recursion if it returns false.
     * @param modelCallbackAfterWalk Callback for each model after recursion.
     */
    function walk(modelContext: IModel, options: IWalkOptions): void;
    /**
     * Move a model so its bounding box begins at [0, 0].
     *
     * @param modelToZero The model to zero.
     */
    function zero(modelToZero: IModel): IModel;
}
declare namespace MakerJs.model {
    /**
     * Check to see if a path is inside of a model.
     *
     * @param pathContext The path to check.
     * @param modelContext The model to check against.
     * @param farPoint Optional point of reference which is outside the bounds of the modelContext.
     * @returns Boolean true if the path is inside of the modelContext.
     */
    function isPathInsideModel(pathContext: IPath, modelContext: IModel, pathOffset?: IPoint, farPoint?: IPoint, measureAtlas?: measure.Atlas): boolean;
    /**
     * Break a model's paths everywhere they intersect with another path.
     *
     * @param modelToBreak The model containing paths to be broken.
     * @param modelToIntersect Optional model containing paths to look for intersection, or else the modelToBreak will be used.
     */
    function breakPathsAtIntersections(modelToBreak: IModel, modelToIntersect?: IModel): void;
    /**
     * Combine 2 models.
     *
     * @param modelA First model to combine.
     * @param modelB Second model to combine.
     * @param includeAInsideB Flag to include paths from modelA which are inside of modelB.
     * @param includeAOutsideB Flag to include paths from modelA which are outside of modelB.
     * @param includeBInsideA Flag to include paths from modelB which are inside of modelA.
     * @param includeBOutsideA Flag to include paths from modelB which are outside of modelA.
     * @param keepDuplicates Flag to include paths which are duplicate in both models.
     * @param farPoint Optional point of reference which is outside the bounds of both models.
     */
    function combine(modelA: IModel, modelB: IModel, includeAInsideB?: boolean, includeAOutsideB?: boolean, includeBInsideA?: boolean, includeBOutsideA?: boolean, options?: ICombineOptions): void;
    /**
     * Combine 2 models, resulting in a intersection.
     *
     * @param modelA First model to combine.
     * @param modelB Second model to combine.
     */
    function combineIntersection(modelA: IModel, modelB: IModel): void;
    /**
     * Combine 2 models, resulting in a subtraction of B from A.
     *
     * @param modelA First model to combine.
     * @param modelB Second model to combine.
     */
    function combineSubtraction(modelA: IModel, modelB: IModel): void;
    /**
     * Combine 2 models, resulting in a union.
     *
     * @param modelA First model to combine.
     * @param modelB Second model to combine.
     */
    function combineUnion(modelA: IModel, modelB: IModel): void;
}
declare namespace MakerJs {
    /**
     * Compare keys to see if they are equal.
     */
    interface ICollectionKeyComparer<K> {
        (a: K, b: K): boolean;
    }
    /**
     * A collection for items that share a common key.
     */
    interface ICollection<K, T> {
        key: K;
        items: T[];
    }
    /**
     * Collects items that share a common key.
     */
    class Collector<K, T> {
        private comparer;
        collections: ICollection<K, T>[];
        constructor(comparer?: ICollectionKeyComparer<K>);
        addItemToCollection(key: K, item: T): void;
        findCollection(key: K, action?: (index: number) => void): T[];
        removeCollection(key: K): boolean;
        removeItemFromCollection(key: K, item: T): boolean;
        getCollectionsOfMultiple(cb: (key: K, items: T[]) => void): void;
    }
}
declare namespace MakerJs.model {
    /**
     * Simplify a model's paths by reducing redundancy: combine multiple overlapping paths into a single path. The model must be originated.
     *
     * @param modelContext The originated model to search for similar paths.
     * @param options Optional options object.
     * @returns The simplified model (for cascading).
     */
    function simplify(modelToSimplify: IModel, options?: ISimplifyOptions): IModel;
}
declare namespace MakerJs.path {
    /**
     * Expand path by creating a model which surrounds it.
     *
     * @param pathToExpand Path to expand.
     * @param expansion Distance to expand.
     * @param isolateCaps Optional flag to put the end caps into a separate model named "caps".
     * @returns Model which surrounds the path.
     */
    function expand(pathToExpand: IPath, expansion: number, isolateCaps?: boolean): IModel;
    /**
     * Represent an arc using straight lines.
     *
     * @param arc Arc to straighten.
     * @param bevel Optional flag to bevel the angle to prevent it from being too sharp.
     * @param prefix Optional string prefix to apply to path ids.
     * @param close Optional flag to make a closed geometry by connecting the endpoints.
     * @returns Model of straight lines with same endpoints as the arc.
     */
    function straighten(arc: IPathArc, bevel?: boolean, prefix?: string, close?: boolean): IModel;
}
declare namespace MakerJs.model {
    /**
     * Expand all paths in a model, then combine the resulting expansions.
     *
     * @param modelToExpand Model to expand.
     * @param distance Distance to expand.
     * @param joints Number of points at a joint between paths. Use 0 for round joints, 1 for pointed joints, 2 for beveled joints.
     * @returns Model which surrounds the paths of the original model.
     */
    function expandPaths(modelToExpand: IModel, distance: number, joints?: number, combineOptions?: ICombineOptions): IModel;
    /**
     * Outline a model by a specified distance. Useful for accommodating for kerf.
     *
     * @param modelToOutline Model to outline.
     * @param distance Distance to outline.
     * @param joints Number of points at a joint between paths. Use 0 for round joints, 1 for pointed joints, 2 for beveled joints.
     * @param inside Optional boolean to draw lines inside the model instead of outside.
     * @returns Model which surrounds the paths outside of the original model.
     */
    function outline(modelToOutline: IModel, distance: number, joints?: number, inside?: boolean): IModel;
}
declare namespace MakerJs.units {
    /**
     * Get a conversion ratio between a source unit and a destination unit.
     *
     * @param srcUnitType unitType converting from.
     * @param destUnitType unitType converting to.
     * @returns Numeric ratio of the conversion.
     */
    function conversionScale(srcUnitType: string, destUnitType: string): number;
}
declare namespace MakerJs.measure {
    /**
     * Find out if two angles are equal.
     *
     * @param angleA First angle.
     * @param angleB Second angle.
     * @returns true if angles are the same, false if they are not
     */
    function isAngleEqual(angleA: number, angleB: number, accuracy?: number): boolean;
    /**
     * Find out if two paths are equal.
     *
     * @param pathA First path.
     * @param pathB Second path.
     * @returns true if paths are the same, false if they are not
     */
    function isPathEqual(pathA: IPath, pathB: IPath, withinPointDistance?: number, pathAOffset?: IPoint, pathBOffset?: IPoint): boolean;
    /**
     * Find out if two points are equal.
     *
     * @param a First point.
     * @param b Second point.
     * @returns true if points are the same, false if they are not
     */
    function isPointEqual(a: IPoint, b: IPoint, withinDistance?: number): boolean;
    /**
     * Find out if point is on a slope.
     *
     * @param p Point to check.
     * @param b Slope.
     * @returns true if point is on the slope
     */
    function isPointOnSlope(p: IPoint, slope: ISlope, withinDistance?: number): boolean;
    /**
     * Check for slope equality.
     *
     * @param slopeA The ISlope to test.
     * @param slopeB The ISlope to check for equality.
     * @returns Boolean true if slopes are equal.
     */
    function isSlopeEqual(slopeA: ISlope, slopeB: ISlope): boolean;
}
declare namespace MakerJs.measure {
    /**
     * Increase a measurement by an additional measurement.
     *
     * @param baseMeasure The measurement to increase.
     * @param addMeasure The additional measurement.
     * @param addOffset Optional offset point of the additional measurement.
     * @returns The increased original measurement (for cascading).
     */
    function increase(baseMeasure: IMeasure, addMeasure: IMeasure): IMeasure;
    /**
     * Check for arc being concave or convex towards a given point.
     *
     * @param arc The arc to test.
     * @param towardsPoint The point to test.
     * @returns Boolean true if arc is concave towards point.
     */
    function isArcConcaveTowardsPoint(arc: IPathArc, towardsPoint: IPoint): boolean;
    /**
     * Check for arc overlapping another arc.
     *
     * @param arcA The arc to test.
     * @param arcB The arc to check for overlap.
     * @param excludeTangents Boolean to exclude exact endpoints and only look for deep overlaps.
     * @returns Boolean true if arcA is overlapped with arcB.
     */
    function isArcOverlapping(arcA: IPathArc, arcB: IPathArc, excludeTangents: boolean): boolean;
    /**
     * Check if a given number is between two given limits.
     *
     * @param valueInQuestion The number to test.
     * @param limitA First limit.
     * @param limitB Second limit.
     * @param exclusive Flag to exclude equaling the limits.
     * @returns Boolean true if value is between (or equal to) the limits.
     */
    function isBetween(valueInQuestion: number, limitA: number, limitB: number, exclusive: boolean): boolean;
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
     * Check if a given bezier seed is simply a line.
     *
     * @param seed The bezier seed to test.
     * @returns Boolean true if bezier seed has control points on the line slope and between the line endpoints.
     */
    function isBezierSeedLinear(seed: IPathBezierSeed): boolean;
    /**
     * Check for line overlapping another line.
     *
     * @param lineA The line to test.
     * @param lineB The line to check for overlap.
     * @param excludeTangents Boolean to exclude exact endpoints and only look for deep overlaps.
     * @returns Boolean true if lineA is overlapped with lineB.
     */
    function isLineOverlapping(lineA: IPathLine, lineB: IPathLine, excludeTangents: boolean): boolean;
    /**
     * Check for measurement overlapping another measurement.
     *
     * @param measureA The measurement to test.
     * @param measureB The measurement to check for overlap.
     * @returns Boolean true if measureA is overlapped with measureB.
     */
    function isMeasurementOverlapping(measureA: IMeasure, measureB: IMeasure): boolean;
    /**
     * Gets the slope of a line.
     */
    function lineSlope(line: IPathLine): ISlope;
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
    function pathExtents(pathToMeasure: IPath, addOffset?: IPoint): IMeasure;
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
     * @param atlas Optional atlas to save measurements.
     * @returns object with low and high points.
     */
    function modelExtents(modelToMeasure: IModel, atlas?: measure.Atlas): IMeasureWithCenter;
    /**
     * A list of maps of measurements.
     *
     * @param modelToMeasure The model to measure.
     * @param atlas Optional atlas to save measurements.
     * @returns object with low and high points.
     */
    class Atlas {
        modelContext: IModel;
        /**
         * Flag that models have been measured.
         */
        modelsMeasured: boolean;
        /**
         * Map of model measurements, mapped by routeKey.
         */
        modelMap: IMeasureMap;
        /**
         * Map of path measurements, mapped by routeKey.
         */
        pathMap: IMeasureMap;
        /**
         * Constructor.
         * @param modelContext The model to measure.
         */
        constructor(modelContext: IModel);
        measureModels(): void;
    }
    /**
     * A hexagon which surrounds a model.
     */
    interface IBoundingHex extends IModel {
        /**
         * Radius of the hexagon, which is also the length of a side.
         */
        radius: number;
    }
    /**
     * Measures the minimum bounding hexagon surrounding a model. The hexagon is oriented such that the right and left sides are vertical, and the top and bottom are pointed.
     *
     * @param modelToMeasure The model to measure.
     * @returns IBoundingHex object which is a hexagon model, with an additional radius property.
     */
    function boundingHexagon(modelToMeasure: IModel): IBoundingHex;
}
declare namespace MakerJs.exporter {
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
declare namespace MakerJs.importer {
    /**
     * Create a numeric array from a string of numbers. The numbers may be delimited by anything non-numeric.
     *
     * Example:
     * ```
     * var n = makerjs.importer.parseNumericList('5, 10, 15.20 25-30-35 4e1 .5');
     * ```
     *
     * @param s The string of numbers.
     * @returns Array of numbers.
     */
    function parseNumericList(s: string): number[];
}
declare namespace MakerJs.exporter {
    function toDXF(modelToExport: IModel, options?: IDXFRenderOptions): string;
    function toDXF(pathsToExport: IPath[], options?: IDXFRenderOptions): string;
    function toDXF(pathToExport: IPath, options?: IDXFRenderOptions): string;
    /**
     * DXF rendering options.
     */
    interface IDXFRenderOptions extends IExportOptions {
    }
}
declare namespace MakerJs.solvers {
    /**
     * Solves for the angle of a triangle when you know lengths of 3 sides.
     *
     * @param lengthA Length of side of triangle, opposite of the angle you are trying to find.
     * @param lengthB Length of any other side of the triangle.
     * @param lengthC Length of the remaining side of the triangle.
     * @returns Angle opposite of the side represented by the first parameter.
     */
    function solveTriangleSSS(lengthA: number, lengthB: number, lengthC: number): number;
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
declare namespace MakerJs.path {
    /**
     * Find the point(s) where 2 paths intersect.
     *
     * @param path1 First path to find intersection.
     * @param path2 Second path to find intersection.
     * @param options Optional IPathIntersectionOptions.
     * @returns IPathIntersection object, with points(s) of intersection (and angles, when a path is an arc or circle); or null if the paths did not intersect.
     */
    function intersection(path1: IPath, path2: IPath, options?: IPathIntersectionOptions): IPathIntersection;
}
declare namespace MakerJs.path {
    /**
     * Adds a round corner to the outside angle between 2 lines. The lines must meet at one point.
     *
     * @param lineA First line to fillet, which will be modified to fit the fillet.
     * @param lineB Second line to fillet, which will be modified to fit the fillet.
     * @returns Arc path object of the new fillet.
     */
    function dogbone(lineA: IPathLine, lineB: IPathLine, filletRadius: number, options?: IPointMatchOptions): IPathArc;
    /**
     * Adds a round corner to the inside angle between 2 paths. The paths must meet at one point.
     *
     * @param pathA First path to fillet, which will be modified to fit the fillet.
     * @param pathB Second path to fillet, which will be modified to fit the fillet.
     * @param filletRadius Radius of the fillet.
     * @param options Optional IPointMatchOptions object to specify pointMatchingDistance.
     * @returns Arc path object of the new fillet.
     */
    function fillet(pathA: IPath, pathB: IPath, filletRadius: number, options?: IPointMatchOptions): IPathArc;
}
declare namespace MakerJs.chain {
    /**
     * Adds a fillet between each link in a chain. Each path will be cropped to fit a fillet, and all fillets will be returned as paths in a returned model object.
     *
     * @param chainToFillet The chain to add fillets to.
     * @param filletRadius Radius of the fillet.
     * @returns Model object containing paths which fillet the joints in the chain.
     */
    function fillet(chainToFillet: IChain, filletRadius: number): IModel;
}
declare namespace MakerJs.kit {
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
declare namespace MakerJs.model {
    /**
     * Find a single chain within a model, across all layers. Shorthand of findChains; useful when you know there is only one chain to find in your model.
     *
     * @param modelContext The model to search for a chain.
     * @returns A chain object or null if chains were not found.
     */
    function findSingleChain(modelContext: IModel): IChain;
    /**
     * Find paths that have common endpoints and form chains.
     *
     * @param modelContext The model to search for chains.
     * @param options Optional options object.
     */
    function findChains(modelContext: IModel, callback: IChainCallback, options?: IFindChainsOptions): void;
}
declare namespace MakerJs.chain {
    /**
     * Shift the links of an endless chain.
     *
     * @param chainContext Chain to cycle through. Must be endless.
     * @param amount Optional number of links to shift. May be negative to cycle backwards.
     * @returns The chainContext for cascading.
     */
    function cycle(chainContext: IChain, amount?: number): IChain;
    /**
     * Reverse the links of a chain.
     *
     * @param chainContext Chain to reverse.
     * @returns The chainContext for cascading.
     */
    function reverse(chainContext: IChain): IChain;
    /**
     * Set the beginning of an endless chain to a known routeKey of a path.
     *
     * @param chainContext Chain to cycle through. Must be endless.
     * @param routeKey RouteKey of the desired path to start the chain with.
     * @returns The chainContext for cascading.
     */
    function startAt(chainContext: IChain, routeKey: string): IChain;
    /**
     * Get points along a chain of paths.
     *
     * @param chainContext Chain of paths to get points from.
     * @param distance Distance along the chain between points.
     * @param maxPoints Maximum number of points to retrieve.
     * @returns Array of points which are on the chain spread at a uniform interval.
     */
    function toPoints(chainContext: IChain, distance: number, maxPoints?: number): IPoint[];
    /**
     * Get key points (a minimal a number of points) along a chain of paths.
     *
     * @param chainContext Chain of paths to get points from.
     * @param maxArcFacet The maximum length between points on an arc or circle.
     * @returns Array of points which are on the chain.
     */
    function toKeyPoints(chainContext: IChain, maxArcFacet?: number): IPoint[];
}
declare namespace MakerJs.model {
    /**
     * Find paths that have common endpoints and form loops.
     *
     * @param modelContext The model to search for loops.
     * @param options Optional options object.
     * @returns A new model with child models ranked according to their containment within other found loops. The paths of models will be IPathDirectionalWithPrimeContext.
     */
    function findLoops(modelContext: IModel, options?: IFindLoopsOptions): IModel;
    /**
     * Remove all paths in a loop model from the model(s) which contained them.
     *
     * @param loopToDetach The model to search for loops.
     */
    function detachLoop(loopToDetach: IModel): void;
    /**
     * Remove paths from a model which have endpoints that do not connect to other paths.
     *
     * @param modelContext The model to search for dead ends.
     * @param options Optional options object.
     * @returns The input model (for cascading).
     */
    function removeDeadEnds(modelContext: IModel, pointMatchingDistance?: any, keep?: IWalkPathBooleanCallback): IModel;
}
declare namespace MakerJs.exporter {
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
declare namespace MakerJs.exporter {
    function toOpenJsCad(modelToExport: IModel, options?: IOpenJsCadOptions): string;
    function toOpenJsCad(pathsToExport: IPath[], options?: IOpenJsCadOptions): string;
    function toOpenJsCad(pathToExport: IPath, options?: IOpenJsCadOptions): string;
    /**
     * Executes a JavaScript string with the OpenJsCad engine - converts 2D to 3D.
     *
     * @param modelToExport Model object to export.
     * @param options Export options object.
     * @param options.extrusion Height of 3D extrusion.
     * @param options.resolution Size of facets.
     * @returns String of STL format of 3D object.
     */
    function toSTL(modelToExport: IModel, options?: IOpenJsCadOptions): string;
    /**
     * OpenJsCad export options.
     */
    interface IOpenJsCadOptions extends IFindLoopsOptions {
        /**
         * Optional depth of 3D extrusion.
         */
        extrusion?: number;
        /**
         * Optional size of curve facets.
         */
        facetSize?: number;
        /**
         * Optional override of function name, default is "main".
         */
        functionName?: string;
        /**
         * Optional options applied to specific first-child models by model id.
         */
        modelMap?: IOpenJsCadOptionsMap;
    }
    interface IOpenJsCadOptionsMap {
        [modelId: string]: IOpenJsCadOptions;
    }
}
declare namespace MakerJs.exporter {
    /**
     * Injects drawing into a PDFKit document.
     *
     * @param modelToExport Model object to export.
     * @param options Export options object.
     * @returns String of PDF file contents.
     */
    function toPDF(doc: PDFKit.PDFDocument, modelToExport: IModel, options?: IPDFRenderOptions): void;
    /**
     * PDF rendering options.
     */
    interface IPDFRenderOptions extends IExportOptions {
        /**
         * Rendered reference origin.
         */
        origin?: IPoint;
        /**
         * SVG color of the rendered paths.
         */
        stroke?: string;
    }
}
declare namespace MakerJs.exporter {
    /**
     * Map of SVG Path Data by layer name.
     */
    interface IPathDataByLayerMap {
        [layer: string]: string;
    }
    /**
     * Convert a chain to SVG path data.
     */
    function chainToSVGPathData(chain: IChain, offset: IPoint): string;
    /**
     * Convert a path to SVG path data.
     */
    function pathToSVGPathData(pathToExport: IPath, offset: IPoint, offset2: IPoint): string;
    /**
     * Convert a model to SVG path data.
     *
     * @param modelToExport Model to export.
     * @param byLayers Boolean flag (default true) to return a map of path data by layer.
     * @param origin Optional reference origin.
     * @returns String of SVG path data (if byLayers is false) or an object map of path data by layer .
     */
    function toSVGPathData(modelToExport: IModel, byLayers?: boolean, origin?: IPoint): IPathDataByLayerMap | string;
    function toSVG(modelToExport: IModel, options?: ISVGRenderOptions): string;
    function toSVG(pathsToExport: IPath[], options?: ISVGRenderOptions): string;
    function toSVG(pathToExport: IPath, options?: ISVGRenderOptions): string;
    /**
     * Map of MakerJs unit system to SVG unit system
     */
    interface svgUnitConversion {
        [unitType: string]: {
            svgUnitType: string;
            scaleConversion: number;
        };
    }
    /**
     * Map of MakerJs unit system to SVG unit system
     */
    var svgUnit: svgUnitConversion;
    /**
     * SVG rendering options.
     */
    interface ISVGRenderOptions extends IExportOptions {
        /**
         * Optional attributes to add to the root svg tag.
         */
        svgAttrs?: IXmlTagAttrs;
        /**
         * SVG fill color.
         */
        fill?: string;
        /**
         * SVG font size and font size units.
         */
        fontSize?: string;
        /**
         * SVG stroke width of paths. This may have a unit type suffix, if not, the value will be in the same unit system as the units property.
         */
        strokeWidth?: string;
        /**
         * SVG color of the rendered paths.
         */
        stroke?: string;
        /**
         * Scale of the SVG rendering.
         */
        scale?: number;
        /**
         *  Indicate that the id's of paths should be rendered as SVG text elements.
         */
        annotate?: boolean;
        /**
         * Rendered reference origin.
         */
        origin?: IPoint;
        /**
         * Use SVG < path > elements instead of < line >, < circle > etc.
         */
        useSvgPathOnly?: boolean;
        /**
         * Flag to use SVG viewbox.
         */
        viewBox?: boolean;
    }
}
declare namespace MakerJs.importer {
    function fromSVGPathData(pathData: string): IModel;
}
declare namespace MakerJs.models {
    class BezierCurve implements IModel {
        models: IModelMap;
        paths: IPathMap;
        origin: IPoint;
        type: string;
        seed: IPathBezierSeed;
        accuracy: number;
        constructor(points: IPoint[], accuracy?: number);
        constructor(seed: IPathBezierSeed, accuracy?: number);
        constructor(seed: IPathBezierSeed, isChild: boolean, accuracy?: number);
        constructor(origin: IPoint, control: IPoint, end: IPoint, accuracy?: number);
        constructor(origin: IPoint, controls: IPoint[], end: IPoint, accuracy?: number);
        constructor(origin: IPoint, control1: IPoint, control2: IPoint, end: IPoint, accuracy?: number);
        static typeName: string;
        static getBezierSeeds(curve: BezierCurve, options?: IFindChainsOptions): IPathBezierSeed[];
        static computeLength(seed: IPathBezierSeed): number;
        static computePoint(seed: IPathBezierSeed, t: number): IPoint;
    }
}
declare var Bezier: typeof BezierJs.Bezier;
declare namespace MakerJs.models {
    class Ellipse implements IModel {
        models: IModelMap;
        origin: IPoint;
        /**
         * Class for Ellipse created with 2 radii.
         *
         * @param radiusX The x radius of the ellipse.
         * @param radiusY The y radius of the ellipse.
         * @param accuracy Optional accuracy of the underlying BezierCurve.
         */
        constructor(radiusX: number, radiusY: number, accuracy?: number);
        /**
         * Class for Ellipse created at a specific origin and 2 radii.
         *
         * @param origin The center of the ellipse.
         * @param radiusX The x radius of the ellipse.
         * @param radiusY The y radius of the ellipse.
         * @param accuracy Optional accuracy of the underlying BezierCurve.
         */
        constructor(origin: IPoint, radiusX: number, radiusY: number, accuracy?: number);
        /**
         * Class for Ellipse created at a specific x, y and 2 radii.
         *
         * @param cx The x coordinate of the center of the ellipse.
         * @param cy The y coordinate of the center of the ellipse.
         * @param rX The x radius of the ellipse.
         * @param rY The y radius of the ellipse.
         * @param accuracy Optional accuracy of the underlying BezierCurve.
         */
        constructor(cx: number, cy: number, rx: number, ry: number, accuracy?: number);
    }
    class EllipticArc implements IModel {
        models: IModelMap;
        /**
         * Class for Elliptic Arc created by distorting a circular arc.
         *
         * @param arc The circular arc to use as the basis of the elliptic arc.
         * @param radiusX The x radius of the ellipse.
         * @param radiusY The y radius of the ellipse.
         * @param accuracy Optional accuracy of the underlying BezierCurve.
         */
        constructor(startAngle: number, endAngle: number, radiusX: number, radiusY: number, accuracy?: number);
        /**
         * Class for Elliptic Arc created by distorting a circular arc.
         *
         * @param arc The circular arc to use as the basis of the elliptic arc.
         * @param distortX The x scale of the ellipse.
         * @param distortY The y scale of the ellipse.
         * @param accuracy Optional accuracy of the underlying BezierCurve.
         */
        constructor(arc: IPathArc, distortX: number, distortY: number, accuracy?: number);
    }
}
declare namespace MakerJs.models {
    class ConnectTheDots implements IModel {
        paths: IPathMap;
        /**
         * Create a model by connecting points designated in a string. The model will be 'closed' - i.e. the last point will connect to the first point.
         *
         * Example:
         * ```
         * var c = new makerjs.models.ConnectTheDots('-10 0 10 0 0 20'); // 3 coordinates to form a triangle
         * ```
         *
         * @param numericList String containing a list of numbers which can be delimited by spaces, commas, or anything non-numeric (Note: [exponential notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential) is allowed).
         */
        constructor(numericList: string);
        /**
         * Create a model by connecting points designated in a string. The model will be 'closed' - i.e. the last point will connect to the first point.
         *
         * Example:
         * ```
         * var c = new makerjs.models.ConnectTheDots(false, '-10 0 10 0 0 20'); // 3 coordinates to form a polyline
         * ```
         *
         * @param isClosed Flag to specify if last point should connect to the first point.
         * @param numericList String containing a list of numbers which can be delimited by spaces, commas, or anything non-numeric (Note: [exponential notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential) is allowed).
         */
        constructor(isClosed: boolean, numericList: string);
        /**
         * Create a model by connecting points designated in a numeric array. The model will be 'closed' - i.e. the last point will connect to the first point.
         *
         * Example:
         * ```
         * var c = new makerjs.models.ConnectTheDots([-10, 0, 10, 0, 0, 20]); // 3 coordinates to form a triangle
         * ```
         *
         * @param coords Array of coordinates.
         */
        constructor(coords: number[]);
        /**
         * Create a model by connecting points designated in a numeric array. The model will be 'closed' - i.e. the last point will connect to the first point.
         *
         * Example:
         * ```
         * var c = new makerjs.models.ConnectTheDots(false, [-10, 0, 10, 0, 0, 20]); // 3 coordinates to form a polyline
         * ```
         *
         * @param isClosed Flag to specify if last point should connect to the first point.
         * @param coords Array of coordinates.
         */
        constructor(isClosed: boolean, coords: number[]);
        /**
         * Create a model by connecting points designated in an array of points. The model may be closed, or left open.
         *
         * Example:
         * ```
         * var c = new makerjs.models.ConnectTheDots(false, [[-10, 0], [10, 0], [0, 20]]); // 3 coordinates left open
         * ```
         *
         * @param isClosed Flag to specify if last point should connect to the first point.
         * @param points Array of IPoints.
         */
        constructor(isClosed: boolean, points: IPoint[]);
    }
}
declare namespace MakerJs.models {
    class Polygon implements IModel {
        paths: IPathMap;
        constructor(numberOfSides: number, radius: number, firstCornerAngleInDegrees?: number, circumscribed?: boolean);
        static circumscribedRadius(radius: number, angleInRadians: number): number;
        static getPoints(numberOfSides: number, radius: number, firstCornerAngleInDegrees?: number, circumscribed?: boolean): IPoint[];
    }
}
declare namespace MakerJs.models {
    class Holes implements IModel {
        paths: IPathMap;
        /**
         * Create an array of circles of the same radius from an array of center points.
         *
         * Example:
         * ```
         * //Create some holes from an array of points
         * var makerjs = require('makerjs');
         * var model = new makerjs.models.Holes(10, [[0, 0],[50, 0],[25, 40]]);
         * var svg = makerjs.exporter.toSVG(model);
         * document.write(svg);
         * ```
         *
         * @param holeRadius Hole radius.
         * @param points Array of points for origin of each hole.
         * @param ids Optional array of corresponding path ids for the holes.
         */
        constructor(holeRadius: number, points: IPoint[], ids?: string[]);
    }
}
declare namespace MakerJs.models {
    class BoltCircle implements IModel {
        paths: IPathMap;
        constructor(boltRadius: number, holeRadius: number, boltCount: number, firstBoltAngleInDegrees?: number);
    }
}
declare namespace MakerJs.models {
    class BoltRectangle implements IModel {
        paths: IPathMap;
        constructor(width: number, height: number, holeRadius: number);
    }
}
declare namespace MakerJs.models {
    class Dogbone implements IModel {
        paths: IPathMap;
        /**
         * Create a dogbone from width, height, corner radius, style, and bottomless flag.
         *
         * Example:
         * ```
         * var d = new makerjs.models.Dogbone(50, 100, 5);
         * ```
         *
         * @param width Width of the rectangle.
         * @param height Height of the rectangle.
         * @param radius Corner radius.
         * @param style Optional corner style: 0 (default) for dogbone, 1 for vertical, -1 for horizontal.
         * @param bottomless Optional flag to omit the bottom line and bottom corners (default false).
         */
        constructor(width: number, height: number, radius: number, style?: number, bottomless?: boolean);
    }
}
declare namespace MakerJs.models {
    class Dome implements IModel {
        paths: IPathMap;
        constructor(width: number, height: number, radius?: number);
    }
}
declare namespace MakerJs.models {
    class RoundRectangle implements IModel {
        origin: IPoint;
        paths: IPathMap;
        /**
         * Create a round rectangle from width, height, and corner radius.
         *
         * Example:
         * ```
         * var r = new makerjs.models.RoundRectangle(100, 50, 5);
         * ```
         *
         * @param width Width of the rectangle.
         * @param height Height of the rectangle.
         * @param radius Corner radius.
         */
        constructor(width: number, height: number, radius: number);
        /**
         * Create a round rectangle which will surround a model.
         *
         * Example:
         * ```
         * var b = new makerjs.models.BoltRectangle(30, 20, 1); //draw a bolt rectangle so we have something to surround
         * var r = new makerjs.models.RoundRectangle(b, 2.5);   //surround it
         * ```
         *
         * @param modelToSurround IModel object.
         * @param margin Distance from the model. This will also become the corner radius.
         */
        constructor(modelToSurround: IModel, margin: number);
    }
}
declare namespace MakerJs.models {
    class Oval implements IModel {
        paths: IPathMap;
        constructor(width: number, height: number);
    }
}
declare namespace MakerJs.models {
    class OvalArc implements IModel {
        paths: IPathMap;
        models: IModelMap;
        constructor(startAngle: number, endAngle: number, sweepRadius: number, slotRadius: number, selfIntersect?: boolean, isolateCaps?: boolean);
    }
}
declare namespace MakerJs.models {
    class Rectangle implements IModel {
        paths: IPathMap;
        origin: IPoint;
        /**
         * Create a rectangle from width and height.
         *
         * Example:
         * ```
         * //Create a rectangle from width and height
         * var makerjs = require('makerjs');
         * var model = new makerjs.models.Rectangle(50, 100);
         * var svg = makerjs.exporter.toSVG(model);
         * document.write(svg);
         * ```
         *
         * @param width Width of the rectangle.
         * @param height Height of the rectangle.
         */
        constructor(width: number, height: number);
        /**
         * Create a rectangle which will surround a model.
         *
         * Example:
         * ```
         * //Create a rectangle which will surround a model
         * var makerjs = require('makerjs');
         * var e = new makerjs.models.Ellipse(17, 10); // draw an ellipse so we have something to surround.
         * var r = new makerjs.models.Rectangle(e, 3); // draws a rectangle surrounding the ellipse by 3 units.
         * var svg = makerjs.exporter.toSVG({ models: { e: e, r: r }});
         * document.write(svg);
         * ```
         *
         * @param modelToSurround IModel object.
         * @param margin Optional distance from the model.
         */
        constructor(modelToSurround: IModel, margin?: number);
        /**
         * Create a rectangle from a measurement.
         *
         * Example:
         * ```
         * //Create a rectangle from a measurement.
         * var makerjs = require('makerjs');
         * var e = new makerjs.models.Ellipse(17, 10); // draw an ellipse so we have something to measure.
         * var m = makerjs.measure.modelExtents(e);    // measure the ellipse.
         * var r = new makerjs.models.Rectangle(m);    // draws a rectangle surrounding the ellipse.
         * var svg = makerjs.exporter.toSVG({ models: { e: e, r: r }});
         * document.write(svg);
         * ```
         *
         * @param measurement IMeasure object. See http://microsoft.github.io/maker.js/docs/api/modules/makerjs.measure.html#pathextents and http://microsoft.github.io/maker.js/docs/api/modules/makerjs.measure.html#modelextents to get measurements of paths and models.
         */
        constructor(measurement: IMeasure);
    }
}
declare namespace MakerJs.models {
    class Ring implements IModel {
        paths: IPathMap;
        constructor(outerRadius: number, innerRadius: number);
    }
}
declare namespace MakerJs.models {
    class SCurve implements IModel {
        paths: IPathMap;
        constructor(width: number, height: number);
    }
}
declare namespace MakerJs.models {
    class Slot implements IModel {
        paths: IPathMap;
        origin: IPoint;
        models: IModelMap;
        constructor(origin: IPoint, endPoint: IPoint, radius: number, isolateCaps?: boolean);
    }
}
declare namespace MakerJs.models {
    class Square implements IModel {
        paths: IPathMap;
        constructor(side: number);
    }
}
declare namespace MakerJs.models {
    class Star implements IModel {
        paths: IPathMap;
        constructor(numberOfPoints: number, outerRadius: number, innerRadius?: number, skipPoints?: number);
        static InnerRadiusRatio(numberOfPoints: number, skipPoints: number): number;
    }
}
declare namespace MakerJs.models {
    class Text implements IModel {
        models: IModelMap;
        constructor(font: opentype.Font, text: string, fontSize: number, combine?: boolean, centerCharacterOrigin?: boolean, bezierAccuracy?: number);
    }
}
