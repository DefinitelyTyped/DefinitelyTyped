import { Vector2 } from "../../math/Vector2.js";
import { Path } from "./Path.js";

/**
 * Defines an arbitrary 2d {@link Shape} plane using paths with optional holes
 * @remarks
 * It can be used with {@link THREE.ExtrudeGeometry | ExtrudeGeometry}, {@link THREE.ShapeGeometry | ShapeGeometry}, to get points, or to get triangulated faces.
 * @example
 * ```typescript
 * const heartShape = new THREE.Shape();
 * heartShape.moveTo(25, 25);
 * heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0);
 * heartShape.bezierCurveTo(-30, 0, -30, 35, -30, 35);
 * heartShape.bezierCurveTo(-30, 55, -10, 77, 25, 95);
 * heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35);
 * heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0);
 * heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25);
 * const extrudeSettings = {
 *     depth: 8,
 *     bevelEnabled: true,
 *     bevelSegments: 2,
 *     steps: 2,
 *     bevelSize: 1,
 *     bevelThickness: 1
 * };
 * const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
 * const mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial());
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_shapes | geometry / shapes }
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_shapes | geometry / extrude / shapes }
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_extrude_shapes2 | geometry / extrude / shapes2 }
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Shape | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Shape.js | Source}
 */
export class Shape extends Path {
    /**
     * Creates a {@link Shape} from the points
     * @remarks
     * The first point defines the offset, then successive points are added to the {@link CurvePath.curves | curves} array as {@link THREE.LineCurve | LineCurves}.
     * If no points are specified, an empty {@link Shape} is created and the {@link .currentPoint} is set to the origin.
     * @param points Array of {@link Vector2 | Vector2s}.
     */
    constructor(points?: Vector2[]);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `Shape`
     */
    override readonly type: string | "Shape";

    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    uuid: string;

    /**
     * An array of {@link Path | paths} that define the holes in the shape.
     * @defaultValue `[]`
     */
    holes: Path[];

    /**
     * Call {@link THREE.Curve.getPoints | getPoints} on the {@link Shape} and the {@link holes} array
     * @param divisions The fineness of the result. Expects a `Integer`
     */
    extractPoints(divisions: number): {
        shape: Vector2[];
        holes: Vector2[][];
    };

    /**
     * Get an array of {@link Vector2 | Vector2's} that represent the holes in the shape.
     * @param divisions The fineness of the result. Expects a `Integer`
     */
    getPointsHoles(divisions: number): Vector2[][];
}
