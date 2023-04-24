import { BufferGeometry } from './../core/BufferGeometry';

/**
 * A class for generating sphere geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.SphereGeometry(15, 32, 16);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * });
 * const sphere = new THREE.Mesh(geometry, material);
 * scene.add(sphere);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/SphereGeometry.js | Source}
 */
export class SphereGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link SphereGeometry}
     * @remarks
     * The geometry is created by sweeping and calculating vertexes
     * around the **Y** axis (horizontal sweep) and the **Z** axis (vertical sweep)
     * Thus, incomplete spheres (akin to `'sphere slices'`) can be created
     * through the use of different values of {@link phiStart}, {@link phiLength}, {@link thetaStart} and {@link thetaLength},
     * in order to define the points in which we start (or end) calculating those vertices.
     * @param radius Sphere radius. Expects a `Float`. Default `1`
     * @param widthSegments Number of horizontal segments. Minimum value is 3, and the Expects a `Integer`. Default `32`
     * @param heightSegments Number of vertical segments. Minimum value is 2, and the Expects a `Integer`. Default `16`
     * @param phiStart Specify horizontal starting angle. Expects a `Float`. Default `0`
     * @param phiLength Specify horizontal sweep angle size. Expects a `Float`. Default `Math.PI * 2`
     * @param thetaStart Specify vertical starting angle. Expects a `Float`. Default `0`
     * @param thetaLength Specify vertical sweep angle size. Expects a `Float`. Default `Math.PI`
     */
    constructor(
        radius?: number,
        widthSegments?: number,
        heightSegments?: number,
        phiStart?: number,
        phiLength?: number,
        thetaStart?: number,
        thetaLength?: number,
    );

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `SphereGeometry`
     */
    override readonly type: string | 'SphereGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly radius: number;
        readonly widthSegments: number;
        readonly heightSegments: number;
        readonly phiStart: number;
        readonly phiLength: number;
        readonly thetaStart: number;
        readonly thetaLength: number;
    };

    /** @internal */
    static fromJSON(data: {}): SphereGeometry;
}
