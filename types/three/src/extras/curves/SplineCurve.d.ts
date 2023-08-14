import { Vector2 } from './../../math/Vector2.js';
import { Curve } from './../core/Curve.js';

/**
 * Create a smooth **2D** spline curve from a series of points.
 * @example
 * ```typescript
 * // Create a sine-like wave
 * const curve = new THREE.SplineCurve([
 * new THREE.Vector2(-10, 0),
 * new THREE.Vector2(-5, 5),
 * new THREE.Vector2(0, 0),
 * new THREE.Vector2(5, -5),
 * new THREE.Vector2(10, 0)]);
 * const points = curve.getPoints(50);
 * const geometry = new THREE.BufferGeometry().setFromPoints(points);
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xff0000
 * });
 * // Create the final object to add to the scene
 * const splineObject = new THREE.Line(geometry, material);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/SplineCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/SplineCurve.js | Source}
 */
export class SplineCurve extends Curve<Vector2> {
    /**
     * This constructor creates a new {@link SplineCurve}.
     * @param points An array of {@link THREE.Vector2 | Vector2} points that define the curve. Default `[]`
     */
    constructor(points?: Vector2[]);

    /**
     * Read-only flag to check if a given object is of type {@link SplineCurve}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isSplineCurve = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `SplineCurve`
     */
    override readonly type: string | 'SplineCurve';

    /**
     * The array of {@link THREE.Vector2 | Vector2} points that define the curve.
     * @defaultValue `[]`
     */
    points: Vector2[];
}
