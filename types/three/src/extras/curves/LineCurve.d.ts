import { Vector2 } from './../../math/Vector2.js';
import { Curve } from './../core/Curve.js';

/**
 * A curve representing a **2D** line segment.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve.js | Source}
 */
export class LineCurve extends Curve<Vector2> {
    /**
     * This constructor creates a new {@link LineCurve}.
     * @param v1 The start point. Default is `new THREE.Vector2()`.
     * @param v2 The end point. Default is `new THREE.Vector2()`.
     */
    constructor(v1?: Vector2, v2?: Vector2);

    /**
     * Read-only flag to check if a given object is of type {@link LineCurve}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isLineCurve = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `LineCurve`
     */
    override readonly type: string | 'LineCurve';

    /**
     * The start point.
     * @defaultValue `new THREE.Vector2()`
     */
    v1: Vector2;

    /**
     * The end point
     * @defaultValue `new THREE.Vector2()`
     */
    v2: Vector2;
}
