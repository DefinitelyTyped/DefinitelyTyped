import { Vector3 } from './../../math/Vector3';
import { Curve } from './../core/Curve';

export type CurveType = 'centripetal' | 'chordal' | 'catmullrom';

/**
 * Create a smooth **3D** spline curve from a series of points using the {@link https://en.wikipedia.org/wiki/Centripetal_Catmull-Rom_spline | Catmull-Rom} algorithm.
 * @example
 * ```typescript
 * //Create a closed wavey loop
 * const curve = new THREE.CatmullRomCurve3([
 * new THREE.Vector3(-10, 0, 10),
 * new THREE.Vector3(-5, 5, 5),
 * new THREE.Vector3(0, 0, 0),
 * new THREE.Vector3(5, -5, 5),
 * new THREE.Vector3(10, 0, 10)]);
 * const points = curve.getPoints(50);
 * const geometry = new THREE.BufferGeometry().setFromPoints(points);
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xff0000
 * });
 * // Create the final object to add to the scene
 * const curveObject = new THREE.Line(geometry, material);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_splines | WebGL / geometry / extrude / splines}
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CatmullRomCurve3 | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CatmullRomCurve3.js | Source}
 */
export class CatmullRomCurve3 extends Curve<Vector3> {
    /**
     * This constructor creates a new {@link CatmullRomCurve3}.
     * @param points An array of {@link THREE.Vector3 | Vector3} points
     * @param closed Whether the curve is closed. Default `false`
     * @param curveType Type of the curve. Default `centripetal`
     * @param tension Tension of the curve. Expects a `Float`. Default `0.5`
     */
    constructor(points?: Vector3[], closed?: boolean, curveType?: CurveType, tension?: number);

    /**
     * Read-only flag to check if a given object is of type {@link CatmullRomCurve3}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isCatmullRomCurve3 = true;

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `CatmullRomCurve3`
     */
    override readonly type: string | 'CatmullRomCurve3';

    /**
     * The curve will loop back onto itself when this is true.
     * @defaultValue `false`
     */
    closed: boolean;

    /**
     * The array of {@link THREE.Vector3 | Vector3} points that define the curve.
     * @remarks It needs at least two entries.
     * @defaultValue `[]`
     */
    points: Vector3[];

    /**
     * Possible values are `centripetal`, `chordal` and `catmullrom`.
     * @defaultValue `centripetal`
     */
    curveType: CurveType;

    /**
     * When {@link .curveType} is `catmullrom`, defines catmullrom's tension.
     * @remarks Expects a `Float`
     */
    tension: number;
}
