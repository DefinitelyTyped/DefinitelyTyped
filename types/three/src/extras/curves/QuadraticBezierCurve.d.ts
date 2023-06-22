import { Vector2 } from './../../math/Vector2';
import { Curve } from './../core/Curve';

/**
 * Create a smooth **2D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif | quadratic bezier curve},
 * defined by a start point, end point and a single control point.
 * @example
 * ```typescript
 * const curve = new THREE.QuadraticBezierCurve(
 * new THREE.Vector2(-10, 0),
 * new THREE.Vector2(20, 15),
 * new THREE.Vector2(10, 0));
 * const points = curve.getPoints(50);
 * const geometry = new THREE.BufferGeometry().setFromPoints(points);
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xff0000
 * });
 * // Create the final object to add to the scene
 * const curveObject = new THREE.Line(geometry, material);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/QuadraticBezierCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/QuadraticBezierCurve.js | Source}
 */
export class QuadraticBezierCurve extends Curve<Vector2> {
    /**
     * This constructor creates a new {@link QuadraticBezierCurve}.
     * @param v0 The start point. Default is `new THREE.Vector2()`.
     * @param v1 The control point. Default is `new THREE.Vector2()`.
     * @param v2 The end point. Default is `new THREE.Vector2()`.
     */
    constructor(v0?: Vector2, v1?: Vector2, v2?: Vector2);

    /**
     * Read-only flag to check if a given object is of type {@link LineCurve3}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isQuadraticBezierCurve = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `QuadraticBezierCurve`
     */
    override readonly type: string | 'QuadraticBezierCurve';

    /**
     * The start point.
     * @defaultValue `new THREE.Vector2()`
     */
    v0: Vector2;

    /**
     * The control point.
     * @defaultValue `new THREE.Vector2()`
     */
    v1: Vector2;

    /**
     * The end point.
     * @defaultValue `new THREE.Vector2()`
     */
    v2: Vector2;
}
