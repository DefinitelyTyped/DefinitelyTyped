import { Vector2 } from "../../math/Vector2.js";
import { Curve } from "../core/Curve.js";

/**
 * Create a smooth **2D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:Bezier_curve.svg | cubic bezier curve},
 * defined by a start point, endpoint and two control points.
 * @example
 * ```typescript
 * const curve = new THREE.CubicBezierCurve(
 * new THREE.Vector2(-10, 0),
 * new THREE.Vector2(-5, 15),
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
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CubicBezierCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CubicBezierCurve.js | Source}
 */
export class CubicBezierCurve extends Curve<Vector2> {
    /**
     * This constructor creates a new {@link CubicBezierCurve}.
     * @param v0 The starting point. Default is `new THREE.Vector2()`.
     * @param v1 The first control point. Default is `new THREE.Vector2()`.
     * @param v2 The second control point. Default is `new THREE.Vector2()`.
     * @param v3 The ending point. Default is `new THREE.Vector2()`.
     */
    constructor(v0?: Vector2, v1?: Vector2, v2?: Vector2, v3?: Vector2);

    /**
     * Read-only flag to check if a given object is of type {@link CubicBezierCurve}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isCubicBezierCurve = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `CubicBezierCurve`
     */
    override readonly type: string | "CubicBezierCurve";

    /**
     * The starting point.
     * @defaultValue `new THREE.Vector2()`
     */
    v0: Vector2;

    /**
     * The first control point.
     * @defaultValue `new THREE.Vector2()`
     */
    v1: Vector2;

    /**
     * The second control point.
     * @defaultValue `new THREE.Vector2()`
     */
    v2: Vector2;

    /**
     * The ending point.
     * @defaultValue `new THREE.Vector2()`
     */
    v3: Vector2;
}
