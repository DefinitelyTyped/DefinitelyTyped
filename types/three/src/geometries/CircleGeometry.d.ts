import { BufferGeometry } from '../core/BufferGeometry.js';

/**
 * {@link CircleGeometry} is a simple shape of Euclidean geometry
 * @remarks
 * It is constructed from a number of triangular segments that are oriented around a central point and extend as far out as a given radius
 * It is built counter-clockwise from a start angle and a given central angle
 * It can also be used to create regular polygons, where the number of segments determines the number of sides.
 * @example
 * ```typescript
 * const geometry = new THREE.CircleGeometry(5, 32);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * });
 * const circle = new THREE.Mesh(geometry, material);
 * scene.add(circle);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CircleGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CircleGeometry.js | Source}
 */
export class CircleGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link CircleGeometry}
     * @param radius Radius of the circle. Expects a `Float`. Default `1`
     * @param segments Number of segments (triangles). Expects a `Integer`. Minimum `3`. Default `32`
     * @param thetaStart Start angle for first segment. Expects a `Float`. Default `0`, _(three o'clock position)_.
     * @param thetaLength The central angle, often called theta, of the circular sector. Expects a `Float`. Default `Math.PI * 2`, _which makes for a complete circle_.
     */
    constructor(radius?: number, segments?: number, thetaStart?: number, thetaLength?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `CircleGeometry`
     */
    override readonly type: string | 'CircleGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly radius: number;
        readonly segments: number;
        readonly thetaStart: number;
        readonly thetaLength: number;
    };

    /** @internal */
    static fromJSON(data: {}): CircleGeometry;
}
