import { Vector3 } from '../../math/Vector3.js';
import { Curve } from '../core/Curve.js';

/**
 * A curve representing a **3D** line segment.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve3 | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve3.js | Source}
 */
export class LineCurve3 extends Curve<Vector3> {
    /**
     * This constructor creates a new {@link LineCurve3}.
     * @param v1 The start point. Default is `new THREE.Vector3()`.
     * @param v2 The end point. Default is `new THREE.Vector3()`.
     */
    constructor(v1?: Vector3, v2?: Vector3);

    /**
     * Read-only flag to check if a given object is of type {@link LineCurve3}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isLineCurve3 = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `LineCurve3`
     */
    override readonly type: string | 'LineCurve3';

    /**
     * The start point.
     * @defaultValue `new THREE.Vector3()`.
     */
    v1: Vector3;

    /**
     * The end point.
     * @defaultValue `new THREE.Vector3()`.
     */
    v2: Vector3;
}
