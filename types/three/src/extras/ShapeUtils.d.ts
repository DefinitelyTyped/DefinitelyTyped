import { Vector2Like } from "../math/Vector2.js";

/**
 * A class containing utility functions for shapes.
 * @remarks Note that these are all linear functions so it is necessary to calculate separately for x, y (and z, w if present) components of a vector.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/ShapeUtils | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/ShapeUtils.js | Source}
 */
export class ShapeUtils {
    /**
     * Calculate area of a ( 2D ) contour polygon.
     */
    static area(contour: readonly Vector2Like[]): number;

    /**
     * Note that this is a linear function so it is necessary to calculate separately for x, y components of a polygon.
     * @remarks Used internally by {@link THREE.Path | Path}, {@link THREE.ExtrudeGeometry | ExtrudeGeometry} and {@link THREE.ShapeGeometry | ShapeGeometry}.
     */
    static isClockWise(pts: readonly Vector2Like[]): boolean;

    /**
     * Used internally by {@link THREE.ExtrudeGeometry | ExtrudeGeometry} and {@link THREE.ShapeGeometry | ShapeGeometry} to calculate faces in shapes with holes.
     */
    static triangulateShape(contour: Vector2Like[], holes: Vector2Like[][]): number[][];
}
