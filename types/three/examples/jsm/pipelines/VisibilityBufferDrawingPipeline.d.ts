import { MeshletDrawingPipeline } from "./MeshletDrawingPipeline.js";

export interface VisibilityBufferDrawingPipelineParameters {
    lodThreshold?: number | undefined;
    shadowLodThreshold?: number | undefined;
    maxRasterSize?: number | undefined;
    debug?: boolean | undefined;
    occlusionCulling?: boolean | undefined;
}

/**
 * A meshlet drawing pipeline with a hybrid rasterizer. Like {@link MeshletDrawingPipeline}, compute shaders select the
 * level of detail and cull objects and clusters, but the visible clusters are rasterized into a visibility
 * buffer: small triangles in software by a compute shader, large triangles by the hardware rasterizer. A
 * resolve pass shades the visibility buffer with the material of the meshes: its node graph is evaluated on
 * the reconstructed surface (position, normal, model matrices and the attributes of the geometry) with
 * analytic derivatives, so custom nodes, lights, shadows and the environment work as usual and the meshes
 * depth test against other objects.
 *
 * The visibility buffer stores the triangle in 16 bits, so only the levels of detail whose triangles fit
 * into this range are used. Geometries whose most detailed level doesn't fit are drawn by the hardware
 * pipeline of {@link MeshletDrawingPipeline}. The resolve only writes the color, so render calls with MRT, like the
 * velocity of TRAA, draw all clusters with the hardware pipeline. The position node of the material is evaluated
 * per corner of the triangles by the software rasterizer and by the resolve.
 *
 * ```js
 * renderer.drawingPipeline = new VisibilityBufferDrawingPipeline();
 * ```
 *
 * This class is experimental and its interface might change.
 *
 * @augments MeshletDrawingPipeline
 */
export class VisibilityBufferDrawingPipeline extends MeshletDrawingPipeline {
    /**
     * Constructs a new visibility buffer drawing pipeline.
     *
     * @param {Object} [parameters] - The configuration parameter.
     */
    constructor(parameters?: VisibilityBufferDrawingPipelineParameters);
    /**
     * The maximum screen-space size in pixels of triangles rasterized in software.
     * Larger triangles are drawn by the hardware rasterizer. The software rasterizer
     * loops over the pixels of a triangle in one thread, so it only pays off for small
     * triangles.
     *
     * @type {number}
     * @default 8
     */
    maxRasterSize: number;
}
