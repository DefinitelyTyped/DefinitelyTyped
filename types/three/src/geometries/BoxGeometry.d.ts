import { BufferGeometry } from "../core/BufferGeometry.js";

/**
 * {@link BoxGeometry} is a geometry class for a rectangular cuboid with a given 'width', 'height', and 'depth'
 * @remarks On creation, the cuboid is centred on the origin, with each edge parallel to one of the axes.
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(1, 1, 1);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * });
 * const cube = new THREE.Mesh(geometry, material);
 * scene.add(cube);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/BoxGeometry.js | Source}
 */
export class BoxGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link BoxGeometry}
     * @param width Width; that is, the length of the edges parallel to the X axis. Optional; Expects a `Float`. Default `1`
     * @param height Height; that is, the length of the edges parallel to the Y axis. Optional; Expects a `Float`. Default `1`
     * @param depth Depth; that is, the length of the edges parallel to the Z axis. Optional; Expects a `Float`. Default `1`
     * @param widthSegments Number of segmented rectangular faces along the width of the sides. Optional; Expects a `Integer`. Default `1`
     * @param heightSegments Number of segmented rectangular faces along the height of the sides. Optional; Expects a `Integer`. Default `1`
     * @param depthSegments Number of segmented rectangular faces along the depth of the sides. Optional; Expects a `Integer`. Default `1`
     */
    constructor(
        width?: number,
        height?: number,
        depth?: number,
        widthSegments?: number,
        heightSegments?: number,
        depthSegments?: number,
    );

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `BoxGeometry`
     */
    override readonly type: string | "BoxGeometry";

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly width: number;
        readonly height: number;
        readonly depth: number;
        readonly widthSegments: number;
        readonly heightSegments: number;
        readonly depthSegments: number;
    };

    /** @internal */
    static fromJSON(data: {}): BoxGeometry;
}
