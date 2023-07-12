import { Vector3 } from './../../math/Vector3.js';
import { Curve } from './../core/Curve.js';

/**
 * Create a smooth **3D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif | quadratic bezier curve},
 * defined by a start point, end point and a single control point.
 * @example
 * ```typescript
 * const curve = new THREE.QuadraticBezierCurve3(
 * new THREE.Vector3(-10, 0, 0),
 * new THREE.Vector3(20, 15, 0),
 * new THREE.Vector3(10, 0, 0));
 * const points = curve.getPoints(50);
 * const geometry = new THREE.BufferGeometry().setFromPoints(points);
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xff0000
 * });
 * // Create the final object to add to the scene
 * const curveObject = new THREE.Line(geometry, material);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/QuadraticBezierCurve3 | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/QuadraticBezierCurve3.js | Source}
 */
export class QuadraticBezierCurve3 extends Curve<Vector3> {
    /**
     * This constructor creates a new {@link QuadraticBezierCurve}.
     * @param v0 The start point. Default is `new THREE.Vector3()`.
     * @param v1 The control point. Default is `new THREE.Vector3()`.
     * @param v2 The end point. Default is `new THREE.Vector3()`.
     */
    constructor(v0?: Vector3, v1?: Vector3, v2?: Vector3);

    /**
     * Read-only flag to check if a given object is of type {@link QuadraticBezierCurve3}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isQuadraticBezierCurve3 = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `QuadraticBezierCurve3`
     */
    override readonly type: string | 'QuadraticBezierCurve3';

    /**
     * The start point.
     * @defaultValue `new THREE.Vector3()`
     */
    v0: Vector3;

    /**
     * The control point.
     * @defaultValue `new THREE.Vector3()`
     */
    v1: Vector3;

    /**
     * The end point.
     * @defaultValue `new THREE.Vector3()`
     */
    v2: Vector3;
}
