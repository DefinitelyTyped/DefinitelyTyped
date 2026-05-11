import { PolyhedronGeometry } from "./PolyhedronGeometry.js";

/**
 * A class for generating an octahedron geometry.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/OctahedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/OctahedronGeometry.js | Source}
 */
export class OctahedronGeometry extends PolyhedronGeometry {
    /**
     * Create a new instance of {@link OctahedronGeometry}
     * @param radius Radius of the octahedron. Expects a `Float`. Default `1`
     * @param detail Setting this to a value greater than zero add vertices making it no longer an octahedron. Expects a `Integer`. Default `0`
     */
    constructor(radius?: number, detail?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `OctahedronGeometry`
     */
    override readonly type: string | "OctahedronGeometry";

    /** @internal */
    static fromJSON(data: {}): OctahedronGeometry;
}
