import { EllipseCurve } from './EllipseCurve';

/**
 * Alias for {@link THREE.EllipseCurve | EllipseCurve}.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/ArcCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/ArcCurve.js | Source}
 */
export class ArcCurve extends EllipseCurve {
    /**
     * This constructor creates a new {@link ArcCurve}.
     * @param aX The X center of the ellipse. Expects a `Float`. Default is `0`.
     * @param aY The Y center of the ellipse. Expects a `Float`. Default is `0`.
     * @param xRadius The radius of the ellipse in the x direction. Expects a `Float`. Default is `1`.
     * @param yRadius The radius of the ellipse in the y direction. Expects a `Float`. Default is `1`.
     * @param aStartAngle The start angle of the curve in radians starting from the positive X axis. Default is `0`.
     * @param aEndAngle The end angle of the curve in radians starting from the positive X axis. Default is `2 x Math.PI`.
     * @param aClockwise Whether the ellipse is drawn clockwise. Default is `false`.
     */
    constructor(
        aX?: number,
        aY?: number,
        aRadius?: number,
        aStartAngle?: number,
        aEndAngle?: number,
        aClockwise?: boolean,
    );

    /**
     * Read-only flag to check if a given object is of type {@link ArcCurve}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isArcCurve = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `ArcCurve`
     */
    override readonly type: string | 'ArcCurve';
}
