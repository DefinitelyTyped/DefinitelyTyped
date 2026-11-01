import { Camera, Object3D, StandardDrawingPipeline } from "three/webgpu";

export interface MeshletDrawingPipelineParameters {
    lodThreshold?: number | undefined;
    shadowLodThreshold?: number | undefined;
    minScreenRadius?: number | undefined;
    coarseScreenRadius?: number | undefined;
    debug?: boolean | undefined;
    occlusionCulling?: boolean | undefined;
    depthPrepass?: boolean | undefined;
}

/**
 * A GPU-driven drawing pipeline that renders compatible meshes as meshlets. Geometries are processed once into
 * clusters (meshlets) of 64 triangles with a chain of simplified levels of detail. Every frame, compute
 * shaders select the level of detail per object and cull the objects and clusters against the frustum,
 * and the visible clusters of all objects sharing geometry and material are drawn in one indirect draw
 * through the hardware rasterizer.
 *
 * The node graph of the material is evaluated on the pulled vertices (position, normal, model matrices and
 * the attributes of the geometry), so custom nodes, lights, shadows and the environment work as usual.
 * Supported are opaque and alpha-tested meshes using front side rendering whose material nodes don't change the geometry,
 * the coverage or the output of the draw. All other objects, and all objects in render calls using a custom
 * render object function like shadow passes, are drawn by the regular pipeline. Objects are drawn by the
 * regular pipeline until their geometry is processed.
 * Objects affected by clipping planes use the regular pipeline, including their depth-only passes.
 * Material properties are read from the source material, so uniform changes do not require rebuilding the
 * batches. Meshlets are regenerated when geometry attributes or indices are replaced or marked `needsUpdate`.
 * Meshes with an array of materials are processed per geometry group, with separate meshlets and levels of
 * detail for each index range. Compatible groups use the GPU-driven pipeline while the other groups use
 * the regular pipeline. Meshlets of a group are shared by all meshes using the same geometry and range. The
 * batches of the groups of the same objects share the transforms and instance data of the objects, which are
 * uploaded once.
 *
 * The transforms of the objects are compared with the last upload, only the objects and instances which changed
 * are uploaded. Objects exceeding {@link MeshletDrawingPipeline#maxInstances} are drawn by the regular pipeline: static
 * bundle groups and the objects drawn by the GPU-driven pipeline in the last frames have precedence.
 *
 * Positions deformed by the context of the render call, like a curved world in the context of a pass, are culled
 * by the bounds of the deformed positions which the context provides with a `getBoundingSphere( sphere, cameraPosition )`
 * function: it receives the bounding sphere in world space ( `vec4` center and radius ) and returns the bounding
 * sphere of the deformed positions. Cone culling is disabled, shadow passes use the real positions.
 *
 * ```js
 * scenePass.contextNode = overrideNodes( [ [ modelViewProjection, curvedProjection ] ], context( {
 * 	getBoundingSphere: ( sphere, cameraPosition ) => curvedSphere( sphere, cameraPosition )
 * } ) );
 * ```
 *
 * MRT outputs of the render call and of the materials are evaluated like for the regular meshes. The matrices
 * of the objects in the previous frame are kept on the GPU, so the velocity of temporal effects like TRAA
 * includes the motion of the objects and the instances.
 *
 * Objects are culled on the GPU, but the CPU still traverses the scene and uploads the transforms every frame.
 * The content of a static {@link BundleGroup} is kept on the GPU instead: the group is captured once, the
 * transforms of its meshes are uploaded once and the group is not traversed again until `needsUpdate` is set.
 * Changes inside of the group, like transforms or added objects, require `needsUpdate` as with render bundles.
 *
 * ```js
 * renderer.drawingPipeline = new MeshletDrawingPipeline();
 *
 * const city = new BundleGroup();
 * city.add( ...buildings );
 * scene.add( city );
 * ```
 *
 * This class is experimental and its interface might change.
 *
 * @augments StandardDrawingPipeline
 */
export class MeshletDrawingPipeline extends StandardDrawingPipeline {
    /**
     * Constructs a new meshlet drawing pipeline.
     *
     * @param {Object} [parameters] - The configuration parameter.
     */
    constructor(parameters?: MeshletDrawingPipelineParameters);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isMeshletDrawingPipeline: true;
    /**
     * The projected error in pixels below which a simpler level of detail is selected.
     *
     * @type {number}
     * @default 1
     */
    lodThreshold: number;
    /**
     * The projected error in shadow map texels below which a simpler level of detail is selected for the
     * shadow casters. The level of detail of shadow passes doesn't depend on the camera, so shadow maps
     * which are not updated every frame stay valid when the camera moves.
     *
     * @type {number}
     * @default 1
     */
    shadowLodThreshold: number;
    /**
     * The radius of the bounding sphere of objects on the screen in pixels, or in shadow map texels for shadow
     * casters, below which they are not drawn. Small objects contribute few pixels, culling them saves the work of
     * their clusters. `0` draws all objects.
     *
     * @type {number}
     * @default 0
     */
    minScreenRadius: number;
    /**
     * The radius of the bounding sphere of objects on the screen in pixels, or in shadow map texels for shadow
     * casters, below which they are drawn with their simplest level of detail, independent of the projected
     * error. `0` selects the level by the projected error only.
     *
     * @type {number}
     * @default 0
     */
    coarseScreenRadius: number;
    /**
     * The clusters and triangles drawn by the GPU-driven pipeline in the main view, read from the counters of the
     * culling without waiting for the GPU. The values are updated every interval of frames, the triangles include the degenerate triangles which pad the clusters.
     *
     * @type {{clusters: number, triangles: number}}
     * @readonly
     */
    readonly info: {
        clusters: number;
        triangles: number;
    };
    /**
     * Whether the clusters (meshlets) of the objects drawn by the GPU-driven pipeline should be shown
     * with a flat color each, instead of shading them with their material. Each object uses different
     * colors, and the clusters of all levels of detail are distinct.
     *
     * @type {boolean}
     * @default false
     */
    debug: boolean;
    /**
     * Whether the clusters hidden by other clusters of the GPU-driven pipeline should be culled. The clusters
     * visible in the last frame are rendered into a depth buffer first, the other clusters are tested
     * against its hierarchical depth. Shadow passes are not occlusion culled.
     *
     * @type {boolean}
     * @default true
     */
    occlusionCulling: boolean;
    /**
     * Whether the depth of the clusters drawn by the hardware rasterizer should be drawn before their material,
     * so the material is only evaluated once per pixel. Reduces the overdraw of expensive materials at the cost
     * of drawing the clusters twice.
     *
     * @type {boolean}
     * @default false
     */
    depthPrepass: boolean;
    /**
     * The maximum number of objects drawn by the GPU-driven pipeline per render list. The instances of instanced
     * meshes count as objects, once per geometry group. Limited by the maximum size of a storage buffer binding:
     * the world matrices of the objects and of the last frame use 128 bytes per object.
     *
     * @type {number}
     * @readonly
     */
    get maxInstances(): number;
    /**
     * Prepares the meshlets and geometry LODs before `Renderer.compileAsync()` projects
     * the scene. Shared geometries are processed once, including meshes outside the frustum.
     * Batches and their render and compute pipelines are then prepared by the renderer.
     *
     * @async
     * @param {Object3D} scene - The scene or object to precompile.
     * @param {Camera} camera - The camera.
     * @return {Promise} Resolves when the meshlets are ready.
     */
    prepareAsync(scene: Object3D, camera: Camera): Promise<void>;
    /**
     * Frees the GPU-related resources of the pipeline: the cullings, batches and views of all render lists and the
     * geometry pool. Called by {@link Renderer#dispose}. The pipeline can be used again, the resources are created again.
     */
    dispose(): void;
}
