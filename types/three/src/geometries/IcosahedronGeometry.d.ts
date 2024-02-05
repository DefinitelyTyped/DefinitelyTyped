import { PolyhedronGeometry } from "./PolyhedronGeometry.js";

/**
 * A class for generating an icosahedron geometry.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/IcosahedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/IcosahedronGeometry.js | Source}
 */
export class IcosahedronGeometry extends PolyhedronGeometry {
    /**
     * Create a new instance of {@link IcosahedronGeometry}
     * @param radius Expects a `Float`. Default `1`
     * @param detail Setting this to a value greater than 0 adds more vertices making it no longer an icosahedron.
     *               When detail is greater than 1, it's effectively a sphere. Expects a `Integer`. Default `0`
     */
    constructor(radius?: number, detail?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `IcosahedronGeometry`
     */
    override readonly type: string | "IcosahedronGeometry";

    /** @internal */
    static fromJSON(data: {}): IcosahedronGeometry;
}
