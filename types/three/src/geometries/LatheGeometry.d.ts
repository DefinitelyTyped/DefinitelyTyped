import { Vector2 } from './../math/Vector2.js';
import { BufferGeometry } from './../core/BufferGeometry.js';

/**
 * Creates meshes with axial symmetry like vases
 * @remarks
 * The lathe rotates around the Y axis.
 * @example
 * ```typescript
 * const points = [];
 * for (let i = 0; i & lt; 10; i++) {
 *     points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2));
 * }
 * const geometry = new THREE.LatheGeometry(points);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * });
 * const lathe = new THREE.Mesh(geometry, material);
 * scene.add(lathe);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/LatheGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/LatheGeometry.js | Source}
 */
export class LatheGeometry extends BufferGeometry {
    /**
     * This creates a {@link LatheGeometry} based on the parameters.
     * @param points Array of Vector2s. The x-coordinate of each point must be greater than zero.
     *               Default `[new Vector2(0, -0.5), new Vector2(0.5, 0), new Vector2(0, 0.5)]` _which creates a simple diamond shape_.
     * @param segments The number of circumference segments to generate. Expects a `Integer`. Default `12`.
     * @param phiStart The starting angle in radians. Expects a `Float`. Default `0`.
     * @param phiLength The radian (0 to 2*PI) range of the lathed section 2*PI is a closed lathe, less than 2PI is a portion. Expects a `Float`. Default `Math.PI * 2`.
     */
    constructor(points?: Vector2[], segments?: number, phiStart?: number, phiLength?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `LatheGeometry`
     */
    override readonly type: string | 'LatheGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly points: Vector2[];
        readonly segments: number;
        readonly phiStart: number;
        readonly phiLength: number;
    };

    /** @internal */
    static fromJSON(data: {}): LatheGeometry;
}
