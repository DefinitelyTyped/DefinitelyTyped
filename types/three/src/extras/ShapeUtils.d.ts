export interface Vec2 {
    x: number;
    y: number;
}

/**
 * A class containing utility functions for shapes.
 * @remarks Note that these are all linear functions so it is necessary to calculate separately for x, y (and z, w if present) components of a vector.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/ShapeUtils | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/ShapeUtils.js | Source}
 */
export namespace ShapeUtils {
    /**
     * Calculate area of a ( 2D ) contour polygon.
     */
    function area(contour: Vec2[]): number;

    /**
     * Note that this is a linear function so it is necessary to calculate separately for x, y components of a polygon.
     * @remarks Used internally by {@link THREE.Path | Path}, {@link THREE.ExtrudeGeometry | ExtrudeGeometry} and {@link THREE.ShapeGeometry | ShapeGeometry}.
     */
    function isClockWise(pts: Vec2[]): boolean;

    /**
     * Used internally by {@link THREE.ExtrudeGeometry | ExtrudeGeometry} and {@link THREE.ShapeGeometry | ShapeGeometry} to calculate faces in shapes with holes.
     */
    function triangulateShape(contour: Vec2[], holes: Vec2[][]): number[][];
}
