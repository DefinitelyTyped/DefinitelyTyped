import { BufferGeometry } from "../core/BufferGeometry.js";
import { Curve } from "../extras/core/Curve.js";
import { Shape } from "../extras/core/Shape.js";
import { Vector2 } from "../math/Vector2.js";
import { Vector3 } from "../math/Vector3.js";

export interface ExtrudeGeometryOptions {
    /**
     * Number of points on the curves.
     * @default 12
     */
    curveSegments?: number | undefined;

    /**
     * Number of points used for subdividing segments along the depth of the extruded spline.
     * @default 1
     */
    steps?: number | undefined;

    /**
     * Depth to extrude the shape.
     * @default 1
     */
    depth?: number | undefined;

    /**
     * Whether to beveling to the shape or not.
     * @default true
     */
    bevelEnabled?: boolean | undefined;

    /**
     * How deep into the original shape the bevel goes.
     * @default 0.2
     */
    bevelThickness?: number | undefined;

    /**
     * Distance from the shape outline that the bevel extends.
     * @default bevelThickness-0.1
     */
    bevelSize?: number | undefined;

    /**
     * Distance from the shape outline that the bevel starts.
     * @default 0
     */
    bevelOffset?: number | undefined;

    /**
     * Number of bevel layers.
     * @default 3
     */
    bevelSegments?: number | undefined;

    /**
     * A 3D spline path along which the shape should be extruded. Bevels not supported for path extrusion.
     * @default undefined
     */
    extrudePath?: Curve<Vector3> | undefined;

    /**
     * An object that provides UV generator functions for custom UV generation.
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
 *
 * ```js
 * const length = 12, width = 8;
 *
 * const shape = new THREE.Shape();
 * shape.moveTo( 0,0 );
 * shape.lineTo( 0, width );
 * shape.lineTo( length, width );
 * shape.lineTo( length, 0 );
 * shape.lineTo( 0, 0 );
 *
 * const geometry = new THREE.ExtrudeGeometry( shape );
 * const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
 * const mesh = new THREE.Mesh( geometry, material ) ;
 * scene.add( mesh );
 * ```
 *
 * @augments BufferGeometry
 * @demo scenes/geometry-browser.html#ExtrudeGeometry
 */
declare class ExtrudeGeometry extends BufferGeometry {
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
    override readonly type: string | "ExtrudeGeometry";

    /**
     * Holds the constructor parameters that have been
     * used to generate the geometry. Any modification
     * after instantiation does not change the geometry.
     *
     * @type {Object}
     */
    readonly parameters: {
        readonly shapes: Shape | Shape[];
        readonly options: ExtrudeGeometryOptions;
    };

    copy(source: ExtrudeGeometry): this;
}

export { ExtrudeGeometry };
