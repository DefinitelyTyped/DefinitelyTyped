import { Curve } from './../extras/core/Curve.js';
import { Vector3 } from './../math/Vector3.js';
import { BufferGeometry } from './../core/BufferGeometry.js';

/**
 * Creates a tube that extrudes along a 3d curve.
 * @example
 * ```typescript
 * class CustomSinCurve extends THREE.Curve {
 *     constructor(scale = 1) {
 *         super();
 *         this.scale = scale;
 *     }
 *     getPoint(t, optionalTarget = new THREE.Vector3()) {
 *         const tx = t * 3 - 1.5;
 *         const ty = Math.sin(2 * Math.PI * t);
 *         const tz = 0;
 *         return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);
 *     }
 * }
 * const path = new CustomSinCurve(10);
 * const geometry = new THREE.TubeGeometry(path, 20, 2, 8, false);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * });
 * const mesh = new THREE.Mesh(geometry, material);
 * scene.add(mesh);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TubeGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TubeGeometry.js | Source}
 */
export class TubeGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link TubeGeometry}
     * @param path A 3D path that inherits from the {@link THREE.Curve | Curve} base class.
     *             Default {@link THREE.QuadraticBezierCurve3 | new THREE.QuadraticBezierCurve3(new Vector3(-1, -1, 0 ), new Vector3(-1, 1, 0), new Vector3(1, 1, 0))}.
     * @param tubularSegments The number of segments that make up the tube. Expects a `Integer`. Default `64`.
     * @param radius The radius of the tube. Expects a `Float`. Default `1`.
     * @param radialSegments The number of segments that make up the cross-section. Expects a `Integer`. Default `8`.
     * @param closed Is the tube open or closed. Default `false`.
     */
    constructor(
        path?: Curve<Vector3>,
        tubularSegments?: number,
        radius?: number,
        radialSegments?: number,
        closed?: boolean,
    );

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `TubeGeometry`
     */
    override readonly type: string | 'TubeGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly path: Curve<Vector3>;
        readonly tubularSegments: number;
        readonly radius: number;
        readonly radialSegments: number;
        readonly closed: boolean;
    };

    /**
     * An array of {@link THREE.Vector3 | Vector3} tangents
     */
    tangents: Vector3[];

    /**
     * An array of {@link THREE.Vector3 | Vector3} normals
     */
    normals: Vector3[];

    /**
     * An array of {@link THREE.Vector3 | Vector3} binormals
     */
    binormals: Vector3[];

    /** @internal */
    static fromJSON(data: {}): TubeGeometry;
}
