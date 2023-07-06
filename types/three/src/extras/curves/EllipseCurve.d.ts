import { Curve } from './../core/Curve';
import { Vector2 } from '../../math/Vector2';

/**
 * Creates a 2d curve in the shape of an ellipse
 * @remarks
 * Setting the {@link xRadius} equal to the {@link yRadius} will result in a circle.
 * @example
 * ```typescript
 * const curve = new THREE.EllipseCurve(
 *   0,  0,  // ax, aY
 *   10, 10, // xRadius, yRadius
 *   0,  2 * Math.PI, // aStartAngle, aEndAngle
 *   false,  // aClockwise
 *   0       // aRotation
 *   );
 * const points = curve.getPoints(50);
 * const geometry = new THREE.BufferGeometry().setFromPoints(points);
 * const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
 * // Create the final object to add to the scene
 * const ellipse = new THREE.Line(geometry, material);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/EllipseCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/EllipseCurve.js | Source}
 */
export class EllipseCurve extends Curve<Vector2> {
    /**
     * This constructor creates a new {@link EllipseCurve}.
     * @param aX The X center of the ellipse. Expects a `Float`. Default is `0`.
     * @param aY The Y center of the ellipse. Expects a `Float`. Default is `0`.
     * @param xRadius The radius of the ellipse in the x direction. Expects a `Float`. Default is `1`.
     * @param yRadius The radius of the ellipse in the y direction. Expects a `Float`. Default is `1`.
     * @param aStartAngle The start angle of the curve in radians starting from the positive X axis. Default is `0`.
     * @param aEndAngle The end angle of the curve in radians starting from the positive X axis. Default is `2 x Math.PI`.
     * @param aClockwise Whether the ellipse is drawn clockwise. Default is `false`.
     * @param aRotation The rotation angle of the ellipse in radians, counterclockwise from the positive X axis. Default is `0`.
     */
    constructor(
        aX?: number,
        aY?: number,
        xRadius?: number,
        yRadius?: number,
        aStartAngle?: number,
        aEndAngle?: number,
        aClockwise?: boolean,
        aRotation?: number,
    );

    /**
     * Read-only flag to check if a given object is of type {@link EllipseCurve}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isEllipseCurve = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `EllipseCurve`
     */
    override readonly type: string | 'EllipseCurve';

    /**
     * The X center of the ellipse.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    aX: number;

    /**
     * The Y center of the ellipse.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    aY: number;

    /**
     * The radius of the ellipse in the x direction.
     * @defaultValue `1`
     */
    xRadius: number;

    /**
     * The radius of the ellipse in the y direction.
     * @defaultValue `1`
     */
    yRadius: number;

    /**
     * The start angle of the curve in radians starting from the middle right side.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    aStartAngle: number;

    /**
     * The end angle of the curve in radians starting from the middle right side.
     * @remarks Expects a `Float`
     * @defaultValue `2 * Math.PI`
     */
    aEndAngle: number;

    /**
     * Whether the ellipse is drawn clockwise.
     * @defaultValue `false``
     */
    aClockwise: boolean;

    /**
     * The rotation angle of the ellipse in radians, counterclockwise from the positive X axis (optional).
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    aRotation: number;
}
