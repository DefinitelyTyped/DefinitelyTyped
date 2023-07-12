import { Curve } from './../extras/core/Curve.js';
import { Vector2 } from './../math/Vector2.js';
import { Vector3 } from './../math/Vector3.js';
import { Shape } from './../extras/core/Shape.js';
import { BufferGeometry } from './../core/BufferGeometry.js';

export interface ExtrudeGeometryOptions {
    /**
     * Number of points on the curves.
     * Expects a `Integer`.
     * @defaultValue `12`
     */
    curveSegments?: number | undefined;

    /**
     * Number of points used for subdividing segments along the depth of the extruded spline.
     * @defaultValue `1`
     */
    steps?: number | undefined;

    /**
     * Depth to extrude the shape.
     * @defaultValue `1`
     */
    depth?: number | undefined;

    /**
     * Turn on bevel. Applying beveling to the shape.
     * @defaultValue `true`
     */
    bevelEnabled?: boolean | undefined;

    /**
     * How deep into the original shape the bevel goes.
     * Expects a `Float`.
     * @defaultValue `0.2`
     */
    bevelThickness?: number | undefined;

    /**
     * Distance from the shape outline that the bevel extends
     * Expects a `Float`.
     * @defaultValue `bevelThickness - 0.1`
     */
    bevelSize?: number | undefined;

    /**
     * Distance from the shape outline that the bevel starts.
     * Expects a `Float`.
     * @defaultValue `0`
     */
    bevelOffset?: number | undefined;

    /**
     * Number of bevel layers/segments.
     * Expects a `Integer`.
     * @defaultValue `3`
     */
    bevelSegments?: number | undefined;

    /**
     * A 3D spline path along which the shape should be extruded.
     * @remarks Bevels not supported for path extrusion.
     */
    extrudePath?: Curve<Vector3> | undefined;

    /**
     * A object that provides UV generator functions.
     */
    UVGenerator?: UVGenerator | undefined;
}

export interface UVGenerator {
    generateTopUV(
        geometry: ExtrudeGeometry,
        vertices: number[],
        indexA: number,
        indexB: number,
        indexC: number,
    ): Vector2[];
    generateSideWallUV(
        geometry: ExtrudeGeometry,
        vertices: number[],
        indexA: number,
        indexB: number,
        indexC: number,
        indexD: number,
    ): Vector2[];
}

/**
 * Creates extruded geometry from a path shape.
 * @remarks This object extrudes a 2D shape to a 3D geometry.
 * @remarks When creating a Mesh with this geometry, if you'd like to have a separate material used for its face and its extruded sides, you can use an array of materials
 * @remarks The first material will be applied to the face; the second material will be applied to the sides.
 * @example
 * ```typescript
 * const length = 12, width = 8;
 * const shape = new THREE.Shape();
 * shape.moveTo(0, 0);
 * shape.lineTo(0, width);
 * shape.lineTo(length, width);
 * shape.lineTo(length, 0);
 * shape.lineTo(0, 0);
 * const extrudeSettings = {
 *     steps: 2,
 *     depth: 16,
 *     bevelEnabled: true,
 *     bevelThickness: 1,
 *     bevelSize: 1,
 *     bevelOffset: 0,
 *     bevelSegments: 1
 * };
 * const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * });
 * const mesh = new THREE.Mesh(geometry, material);
 * scene.add(mesh);
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ExtrudeGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ExtrudeGeometry.js | Source}
 */
export class ExtrudeGeometry extends BufferGeometry {
    /**
     * Create a new instance of {@link ExtrudeGeometry}
     * @param shapes Shape or an array of shapes. Default `new Shape([new Vector2(0.5, 0.5), new Vector2(-0.5, 0.5), new Vector2(-0.5, -0.5), new Vector2(0.5, -0.5)])`.
     * @param options Object that can contain the following parameters. @see {@link ExtrudeGeometryOptions} for defaults.
     */
    constructor(shapes?: Shape | Shape[], options?: ExtrudeGeometryOptions);

    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `ExtrudeGeometry`
     */
    override readonly type: string | 'ExtrudeGeometry';

    /**
     * An object with a property for each of the constructor parameters.
     * @remarks Any modification after instantiation does not change the geometry.
     */
    readonly parameters: {
        readonly shapes: Shape | Shape[];
        readonly options: ExtrudeGeometryOptions;
    };

    addShape(shape: Shape): void;

    /** @internal */
    static fromJSON(data: {}, shapes: unknown): ExtrudeGeometry;
}
