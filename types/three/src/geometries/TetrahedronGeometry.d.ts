import { PolyhedronGeometry } from "./PolyhedronGeometry.js";

/**
 * A class for generating a tetrahedron geometries.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TetrahedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TetrahedronGeometry.js | Source}
 */
export class TetrahedronGeometry extends PolyhedronGeometry {
    /**
     * Create a new instance of {@link TetrahedronGeometry}
     * @param radius Radius of the tetrahedron. Expects a `Float`. Default `1`
     * @param detail Setting this to a value greater than 0 adds vertices making it no longer a tetrahedron. Expects a `Integer`. Default `0`
     */
    constructor(radius?: number, detail?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `TetrahedronGeometry`
     */
    override readonly type: string | "TetrahedronGeometry";

    /** @internal */
    static fromJSON(data: {}): TetrahedronGeometry;
}
