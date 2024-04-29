import { BufferGeometry } from "../core/BufferGeometry.js";

/**
 * A class for generating cylinder geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.CylinderGeometry(5, 5, 20, 32);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * });
 * const cylinder = new THREE.Mesh(geometry, material);
 * scene.add(cylinder);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CylinderGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CylinderGeometry.js | Source}
 */
export class CylinderGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link CylinderGeometry}
     * @param radiusTop Radius of the cylinder at the top. Default `1`
     * @param radiusBottom Radius of the cylinder at the bottom. Default `1`
     * @param height Height of the cylinder. Default `1`
     * @param radialSegments Number of segmented faces around the circumference of the cylinder. Default `32`
     * @param heightSegments Number of rows of faces along the height of the cylinder. Expects a `Integer`. Default `1`
     * @param openEnded A Boolean indicating whether the ends of the cylinder are open or capped. Default `false`, _meaning capped_.
     * @param thetaStart Start angle for first segment. Default `0`, _(three o'clock position)_.
     * @param thetaLength The central angle, often called theta, of the circular sector. Default `Math.PI * 2`, _which makes for a complete cylinder.
     */
    constructor(
        radiusTop?: number,
        radiusBottom?: number,
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
     * @defaultValue `CylinderGeometry`
     */
    override readonly type: string | "CylinderGeometry";

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
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
    static fromJSON(data: any): CylinderGeometry;
}
