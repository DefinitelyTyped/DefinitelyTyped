import { Vector2 } from './../../math/Vector2.js';
import { CurvePath } from './CurvePath.js';

/**
 * A 2D {@link Path} representation.
 * @remarks
 * The class provides methods for creating paths and contours of 2D shapes similar to the 2D Canvas API.
 * @example
 * ```typescript
 * const {@link Path} = new THREE.Path();
 * path.lineTo(0, 0.8);
 * path.quadraticCurveTo(0, 1, 0.2, 1);
 * path.lineTo(1, 1);
 * const points = path.getPoints();
 * const geometry = new THREE.BufferGeometry().setFromPoints(points);
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xffffff
 * });
 * const line = new THREE.Line(geometry, material);
 * scene.add(line);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Path | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Path.js | Source}
 */
export class Path extends CurvePath<Vector2> {
    /**
     * Creates a {@link Path} from the points
     * @remarks
     * The first point defines the offset, then successive points are added to the {@link CurvePath.curves | curves} array as {@link LineCurve | LineCurves}.
     * If no points are specified, an empty {@link Path} is created and the {@link .currentPoint} is set to the origin.
     * @param points Array of {@link Vector2 | Vector2s}.
     */
    constructor(points?: Vector2[]);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `Path`
     */
    override readonly type: string | 'Path';

    /**
     * The current offset of the path. Any new {@link THREE.Curve | Curve} added will start here.
     * @defaultValue `new THREE.Vector2()`
     */
    currentPoint: Vector2;

    /**
     * Adds an absolutely positioned {@link THREE.EllipseCurve | EllipseCurve} to the path.
     * @param x Expects a `Float`
     * @param y X, The absolute center of the arc. Expects a `Float`
     * @param radius The radius of the arc. Expects a `Float`
     * @param startAngle The start angle in radians. Expects a `Float`
     * @param endAngle The end angle in radians. Expects a `Float`
     * @param clockwise Sweep the arc clockwise. . Default `false`
     */
    absarc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): this;

    /**
     * Adds an absolutely positioned {@link THREE.EllipseCurve | EllipseCurve} to the path.
     * @param x Expects a `Float`
     * @param y X, The absolute center of the ellipse. Expects a `Float`
     * @param xRadius The radius of the ellipse in the x axis. Expects a `Float`
     * @param yRadius The radius of the ellipse in the y axis. Expects a `Float`
     * @param startAngle The start angle in radians. Expects a `Float`
     * @param endAngle The end angle in radians. Expects a `Float`
     * @param clockwise Sweep the ellipse clockwise. . Default `false`
     * @param rotation The rotation angle of the ellipse in radians, counterclockwise from the positive X axis. Optional, Expects a `Float`. Default `0`
     */
    absellipse(
        aX: number,
        aY: number,
        xRadius: number,
        yRadius: number,
        aStartAngle: number,
        aEndAngle: number,
        aClockwise: boolean,
        aRotation: number,
    ): this;

    /**
     * Adds an {@link THREE.EllipseCurve | EllipseCurve} to the path, positioned relative to {@link .currentPoint}.
     * @param x Expects a `Float`
     * @param y X, The center of the arc offset from the last call. Expects a `Float`
     * @param radius The radius of the arc. Expects a `Float`
     * @param startAngle The start angle in radians. Expects a `Float`
     * @param endAngle The end angle in radians. Expects a `Float`
     * @param clockwise Sweep the arc clockwise. . Default `false`
     */
    arc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): this;

    /**
     * This creates a bezier curve from {@link .currentPoint} with (cp1X, cp1Y) and (cp2X, cp2Y) as control points and updates {@link .currentPoint} to x and y.
     * @param cp1X Expects a `Float`
     * @param cp1Y Expects a `Float`
     * @param cp2X Expects a `Float`
     * @param cp2Y Expects a `Float`
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    bezierCurveTo(aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number): this;

    /**
     * Adds an {@link THREE.EllipseCurve | EllipseCurve} to the path, positioned relative to {@link .currentPoint}.
     * @param x Expects a `Float`
     * @param y X, The center of the ellipse offset from the last call. Expects a `Float`
     * @param xRadius The radius of the ellipse in the x axis. Expects a `Float`
     * @param yRadius The radius of the ellipse in the y axis. Expects a `Float`
     * @param startAngle The start angle in radians. Expects a `Float`
     * @param endAngle The end angle in radians. Expects a `Float`
     * @param clockwise Sweep the ellipse clockwise. . Default `false`
     * @param rotation The rotation angle of the ellipse in radians, counterclockwise from the positive X axis. Optional, Expects a `Float`. Default `0`
     */
    ellipse(
        aX: number,
        aY: number,
        xRadius: number,
        yRadius: number,
        aStartAngle: number,
        aEndAngle: number,
        aClockwise: boolean,
        aRotation: number,
    ): this;

    /**
     * Connects a {@link THREE.LineCurve | LineCurve} from {@link .currentPoint} to x, y onto the path.
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    lineTo(x: number, y: number): this;

    /**
     * Move the {@link .currentPoint} to x, y.
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    moveTo(x: number, y: number): this;

    /**
     * Creates a quadratic curve from {@link .currentPoint} with cpX and cpY as control point and updates {@link .currentPoint} to x and y.
     * @param cpX Expects a `Float`
     * @param cpY Expects a `Float`
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): this;

    /**
     * Points are added to the {@link CurvePath.curves | curves} array as {@link THREE.LineCurve | LineCurves}.
     * @param vector2s
     */
    setFromPoints(vectors: Vector2[]): this;

    /**
     * Connects a new {@link THREE.SplineCurve | SplineCurve} onto the path.
     * @param points An array of {@link Vector2 | Vector2's}
     */
    splineThru(pts: Vector2[]): this;
}
