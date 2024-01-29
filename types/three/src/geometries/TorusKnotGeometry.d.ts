import { BufferGeometry } from '../core/BufferGeometry.js';

/**
 * Creates a torus knot, the particular shape of which is defined by a pair of coprime integers, p and q
 * If p and q are not coprime, the result will be a torus link.
 * @example
 * ```typescript
 * const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * });
 * const torusKnot = new THREE.Mesh(geometry, material);
 * scene.add(torusKnot);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TorusKnotGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusKnotGeometry.js | Source}
 */
export class TorusKnotGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link TorusKnotGeometry}
     * @param radius Radius of the torus.. Default `1`.
     * @param tube Expects a `Float`. Default `0.4`.
     * @param tubularSegments Expects a `Integer`. Default `64`.
     * @param radialSegments Expects a `Integer`. Default `8`.
     * @param p This value determines, how many times the geometry winds around its axis of rotational symmetry. Expects a `Integer`. Default `2`.
     * @param q This value determines, how many times the geometry winds around a circle in the interior of the torus. Expects a `Integer`. Default `3`.
     */
    constructor(
        radius?: number,
        tube?: number,
        tubularSegments?: number,
        radialSegments?: number,
        p?: number,
        q?: number,
    );

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `TorusKnotGeometry`
     */
    override readonly type: string | 'TorusKnotGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly radius: number;
        readonly tube: number;
        readonly tubularSegments: number;
        readonly radialSegments: number;
        readonly p: number;
        readonly q: number;
    };

    /** @internal */
    static fromJSON(data: {}): TorusKnotGeometry;
}
