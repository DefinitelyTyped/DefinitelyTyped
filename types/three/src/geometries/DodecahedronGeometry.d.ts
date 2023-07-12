import { PolyhedronGeometry } from './PolyhedronGeometry.js';

/**
 * A class for generating a dodecahedron geometries.
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/DodecahedronGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/DodecahedronGeometry.js | Source}
 */
export class DodecahedronGeometry extends PolyhedronGeometry {
    /**
     * Create a new instance of {@link DodecahedronGeometry}
     * @param radius Radius of the dodecahedron. Expects a `Float`. Default `1`
     * @param detail Setting this to a value greater than 0 adds vertices making it no longer a dodecahedron. Expects a `Integer`. Default `0`
     */
    constructor(radius?: number, detail?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `DodecahedronGeometry`
     */
    override readonly type: string | 'DodecahedronGeometry';

    /** @internal */
    static fromJSON(data: {}): DodecahedronGeometry;
}
