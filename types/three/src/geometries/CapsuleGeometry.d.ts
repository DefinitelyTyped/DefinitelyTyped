import { BufferGeometry } from '../core/BufferGeometry';

/**
 * {@link CapsuleGeometry} is a geometry class for a capsule with given radii and height
 * @remarks It is constructed using a lathe.
 * @example
 * ```typescript
 * const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * });
 * const capsule = new THREE.Mesh(geometry, material);
 * scene.add(capsule);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CapsuleGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CapsuleGeometry.js | Source}
 */
export class CapsuleGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link CapsuleGeometry}
     * @param radius Radius of the capsule. Expects a `Float`. Default `1`
     * @param length Length of the middle section. Expects a `Float`. Default `1`
     * @param capSubdivisions Number of curve segments used to build the caps. Expects a `Integer`. Default `4`
     * @param radialSegments Number of segmented faces around the circumference of the capsule. Expects a `Integer`. Default `8`
     */
    constructor(radius?: number, length?: number, capSegments?: number, radialSegments?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `CapsuleGeometry`
     */
    override readonly type: string | 'CapsuleGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly radius: number;
        readonly length: number;
        readonly capSegments: number;
        readonly radialSegments: number;
    };

    /** @internal */
    static fromJSON(data: {}): CapsuleGeometry;
}
