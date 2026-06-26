import { Color } from "../../math/Color.js";
import { Vector2 } from "../../math/Vector2.js";
import { Path } from "./Path.js";
import { Shape } from "./Shape.js";

/**
 * This class is used to convert a series of paths to an array of
 * shapes. It is specifically used in context of fonts and SVG.
 */
export class ShapePath {
    type: string;
    /**
     * The color of the shape.
     *
     * @type {Color}
     */
    color: Color;
    /**
     * The paths that have been generated for this shape.
     *
     * @type {Array<Path>}
     * @default null
     */
    subPaths: Array<Path>;
    /**
     * The current path that is being generated.
     *
     * @type {?Path}
     * @default null
     */
    currentPath: Path | null;
    /**
     * An object that can be used to store custom data about the shape path.
     * Mainly used by SVGLoader to store style information.
     *
     * @type {Object}
     */
    userData: Record<string, unknown>;
    /**
     * Creates a new path and moves it current point to the given one.
     *
     * @param {number} x - The x coordinate.
     * @param {number} y - The y coordinate.
     * @return {ShapePath} A reference to this shape path.
     */
    moveTo(x: number, y: number): this;
    /**
     * Adds an instance of {@link LineCurve} to the path by connecting
     * the current point with the given one.
     *
     * @param {number} x - The x coordinate of the end point.
     * @param {number} y - The y coordinate of the end point.
     * @return {ShapePath} A reference to this shape path.
     */
    lineTo(x: number, y: number): this;
    /**
     * Adds an instance of {@link QuadraticBezierCurve} to the path by connecting
     * the current point with the given one.
     *
     * @param {number} aCPx - The x coordinate of the control point.
     * @param {number} aCPy - The y coordinate of the control point.
     * @param {number} aX - The x coordinate of the end point.
     * @param {number} aY - The y coordinate of the end point.
     * @return {ShapePath} A reference to this shape path.
     */
    quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): this;
    /**
     * Adds an instance of {@link CubicBezierCurve} to the path by connecting
     * the current point with the given one.
     *
     * @param {number} aCP1x - The x coordinate of the first control point.
     * @param {number} aCP1y - The y coordinate of the first control point.
     * @param {number} aCP2x - The x coordinate of the second control point.
     * @param {number} aCP2y - The y coordinate of the second control point.
     * @param {number} aX - The x coordinate of the end point.
     * @param {number} aY - The y coordinate of the end point.
     * @return {ShapePath} A reference to this shape path.
     */
    bezierCurveTo(aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number): this;
    /**
     * Adds an instance of {@link SplineCurve} to the path by connecting
     * the current point with the given list of points.
     *
     * @param {Array<Vector2>} pts - An array of points in 2D space.
     * @return {ShapePath} A reference to this shape path.
     */
    splineThru(pts: Array<Vector2>): this;
    /**
     * Converts the paths into an array of shapes.
     *
     * @return {Array<Shape>} An array of shapes.
     */
    toShapes(): Array<Shape>;
}
