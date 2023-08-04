import { CylinderGeometry } from './CylinderGeometry.js';

/**
 * A class for generating cone geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.ConeGeometry(5, 20, 32);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * });
 * const cone = new THREE.Mesh(geometry, material);
 * scene.add(cone);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ConeGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ConeGeometry.js | Source}
 */
export class ConeGeometry extends CylinderGeometry {
    /**
     * Create a new instance of {@link ConeGeometry}
     * @param radius Radius of the cone base. Expects a `Float`. Default `1`
     * @param height Height of the cone. Expects a `Float`. Default `1`
     * @param radialSegments Number of segmented faces around the circumference of the cone. Expects a `Integer`. Default `32`
     * @param heightSegments Number of rows of faces along the height of the cone. Expects a `Integer`. Default `1`
     * @param openEnded A Boolean indicating whether the base of the cone is open or capped. Default `false`, _meaning capped_.
     * @param thetaStart Start angle for first segment. Expects a `Float`. Default `0`, _(three o'clock position)_.
     * @param thetaLength The central angle, often called theta, of the circular sector. Expects a `Float`. Default `Math.PI * 2`, _which makes for a complete cone_.
     */
    constructor(
        radius?: number,
        height?: number,
        radialSegments?: number,
        heightSegments?: number,
        openEnded?: boolean,
        thetaStart?: number,
        thetaLength?: number,
    );

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `ConeGeometry`
     */
    override readonly type: string | 'ConeGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks {@link radiusTop} and {@link radiusBottom} are from base {@link THREE.CylinderGeometry} class.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    override readonly parameters: {
        readonly radius: number;
        readonly radiusTop: number;
        readonly radiusBottom: number;
        readonly height: number;
        readonly radialSegments: number;
        readonly heightSegments: number;
        readonly openEnded: boolean;
        readonly thetaStart: number;
        readonly thetaLength: number;
    };

    /** @internal */
    static fromJSON(data: {}): ConeGeometry;
}
