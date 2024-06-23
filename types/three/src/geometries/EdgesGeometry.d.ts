import { BufferGeometry } from "../core/BufferGeometry.js";

/**
 * This can be used as a helper object to view the edges of a {@link THREE.BufferGeometry | geometry}.
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(100, 100, 100);
 * const edges = new THREE.EdgesGeometry(geometry);
 * const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
 *     color: 0xffffff
 * }));
 * scene.add(line);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers | helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/EdgesGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/EdgesGeometry.js | Source}
 */
export class EdgesGeometry<TBufferGeometry extends BufferGeometry = BufferGeometry> extends BufferGeometry {
    /**
     * Create a new instance of {@link EdgesGeometry}
     * @param geometry Any geometry object. Default `null`.
     * @param thresholdAngle An edge is only rendered if the angle (in degrees) between the face normals of the adjoining faces exceeds this value. Expects a `Integer`. Default `1` _degree_.
     */
    constructor(geometry?: TBufferGeometry | null, thresholdAngle?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `EdgesGeometry`
     */
    override readonly type: string | "EdgesGeometry";

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly geometry: TBufferGeometry | null;
        readonly thresholdAngle: number;
    };
}
