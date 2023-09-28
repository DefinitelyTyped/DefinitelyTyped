import { Shape } from './../extras/core/Shape.js';
import { BufferGeometry } from './../core/BufferGeometry.js';

/**
 * Creates an one-sided polygonal geometry from one or more path shapes.
 * @example
 * ```typescript
 * const x = 0, y = 0;
 * const heartShape = new THREE.Shape();
 * heartShape.moveTo(x + 5, y + 5);
 * heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
 * heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
 * heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
 * heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
 * heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
 * heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);
 * const geometry = new THREE.ShapeGeometry(heartShape);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * });
 * const mesh = new THREE.Mesh(geometry, material);
 * scene.add(mesh);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ShapeGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ShapeGeometry.js | Source}
 */
export class ShapeGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link ShapeGeometry}
     * @param shapes Array of shapes or a single {@link THREE.Shape | Shape}. Default `new Shape([new Vector2(0, 0.5), new Vector2(-0.5, -0.5), new Vector2(0.5, -0.5)])`, _a single triangle shape_.
     * @param curveSegments Number of segments per shape. Expects a `Integer`. Default `12`
     */
    constructor(shapes?: Shape | Shape[], curveSegments?: number);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `ShapeGeometry`
     */
    override readonly type: string | 'ShapeGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly shapes: Shape | Shape[];
        readonly curveSegments: number;
    };

    /** @internal */
    static fromJSON(data: {}): ShapeGeometry;
}
