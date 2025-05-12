import { BufferGeometry } from "../core/BufferGeometry.js";

/**
 * A class for generating torus geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * });
 * const torus = new THREE.Mesh(geometry, material);
 * scene.add(torus);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TorusGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusGeometry.js | Source}
 */
export class TorusGeometry extends BufferGeometry {
    /**
     * @param radius Radius of the torus, from the center of the torus to the center of the tube. Default `1`.
     * @param tube Radius of the tube. Must be smaller than `radius`. Default is `0.4`.
     * @param radialSegments Default is `12`.
     * @param tubularSegments Default is `48`.
     * @param arc Central angle. Default is Math.PI * 2.
     */
    constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `TorusGeometry`
     */
    override readonly type: string | "TorusGeometry";

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly radius: number;
        readonly tube: number;
        readonly radialSegments: number;
        readonly tubularSegments: number;
        readonly arc: number;
    };

    /** @internal */
    static fromJSON(data: any): TorusGeometry;
}
