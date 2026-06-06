/**
 * An implementation of the {@link Earcut} polygon triangulation algorithm
 * @remarks
 * The code is a port of {@link https://github.com/mapbox/earcut | mapbox/earcut}.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/Earcut | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/Earcut.js | Source}
 */
declare class Earcut {
    /**
     * Triangulates the given shape definition by returning an array of triangles
     * @remarks
     * A triangle is defined by three consecutive integers representing vertex indices.
     */
    static triangulate(data: number[], holeIndices?: number[], dim?: number): number[];
}

export { Earcut };
