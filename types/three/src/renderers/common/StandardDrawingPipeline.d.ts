import { Camera } from "../../cameras/Camera.js";
import { BufferGeometry, GeometryGroup } from "../../core/BufferGeometry.js";
import { Object3D } from "../../core/Object3D.js";
import { Material } from "../../materials/Material.js";
import { Frustum } from "../../math/Frustum.js";
import { FrustumArray } from "../../math/FrustumArray.js";
import { Matrix4 } from "../../math/Matrix4.js";
import ClippingContext from "./ClippingContext.js";
import Renderer from "./Renderer.js";

/**
 * Decides which objects of a scene are rendered and how they are submitted to the render list.
 * The default implementation performs frustum culling and pushes every renderable object as a
 * separate render item. Subclasses can override the hooks {@link StandardDrawingPipeline#isCulled} and
 * {@link StandardDrawingPipeline#pushRenderItem} to implement other strategies like GPU-driven rendering.
 *
 * This class is experimental and its interface might change.
 */
declare class StandardDrawingPipeline {
    /**
     * The renderer this pipeline is assigned to. It is set when
     * the pipeline is assigned via {@link Renderer#drawingPipeline}.
     *
     * @type {?Renderer}
     * @default null
     */
    renderer: Renderer | null;
    /**
     * The frustum of the current camera.
     *
     * @protected
     * @type {Frustum}
     */
    protected _frustum: Frustum;
    /**
     * The frustum array of the current array camera, kept by the render context.
     *
     * @protected
     * @type {?FrustumArray}
     * @default null
     */
    protected _frustumArray: FrustumArray | null;
    /**
     * The view projection matrix of the current camera.
     *
     * @protected
     * @type {Matrix4}
     */
    protected _projScreenMatrix: Matrix4;
    /**
     * The number of render bundles being recorded in the current projection.
     *
     * @protected
     * @type {number}
     * @default 0
     */
    protected _bundleDepth: number;
    /**
     * Prepares resources needed to precompile the given scene. Subclasses can use this
     * hook to process geometry before the synchronous projection in `Renderer.compileAsync()`.
     *
     * @param {Object3D} scene - The scene or object to precompile.
     * @param {Camera} camera - The camera.
     * @return {Promise|undefined} Resolves when the resources are ready.
     */
    prepareAsync(scene: Object3D, camera: Camera): Promise<void> | undefined;
    /**
     * Frees the resources of the pipeline. Called by {@link Renderer#dispose}, subclasses holding GPU
     * resources release them here.
     */
    dispose(): void;
    /**
     * Prepares the pipeline for projecting a scene with the given camera.
     *
     * @param {Camera} camera - The camera.
     * @param {RenderContext} renderContext - The render context.
     */
    begin(camera: Camera, renderContext: unknown): void;
    /**
     * Begins the projection into the given render list.
     *
     * @param {RenderList} renderList - The render list.
     */
    beginRenderList(renderList: unknown): void;
    /**
     * Finishes the projection into the given render list.
     *
     * @param {RenderList} renderList - The render list.
     */
    finishRenderList(renderList: unknown): void;
    /**
     * Returns `true` if the given object is culled by the camera and should not be rendered.
     * Objects of render bundles are not culled, a bundle is recorded once and drawn with
     * any camera.
     *
     * @param {Object3D} object - The 3D object.
     * @param {Camera} camera - The camera.
     * @return {boolean} Whether the object is culled or not.
     */
    isCulled(object: Object3D, camera: Camera): boolean;
    /**
     * Pushes a render item to the render list.
     *
     * @param {RenderList} renderList - The current render list.
     * @param {Object3D} object - The 3D object.
     * @param {BufferGeometry} geometry - The 3D object's geometry.
     * @param {Material} material - The 3D object's material.
     * @param {number} groupOrder - The current group order.
     * @param {number} z - The 3D object's depth value (z value in clip space).
     * @param {?Object} group - Only relevant for objects using multiple materials. This represents a group entry from the respective `BufferGeometry`.
     * @param {ClippingContext} clippingContext - The current clipping context.
     */
    pushRenderItem(
        renderList: unknown,
        object: Object3D,
        geometry: BufferGeometry,
        material: Material,
        groupOrder: number,
        z: number,
        group: GeometryGroup | null,
        clippingContext: ClippingContext,
    ): void;
    /**
     * This method is used to traverse the scene graph and collect all renderable objects
     * and lights into the given render list. Call {@link StandardDrawingPipeline#begin} before.
     *
     * @param {Object3D} object - The 3D object to process (usually a scene).
     * @param {Camera} camera - The camera the object should be rendered with.
     * @param {number} groupOrder - The group order is derived from the `renderOrder` of groups and is used to group 3D objects within groups.
     * @param {RenderList} renderList - The current render list.
     * @param {ClippingContext} clippingContext - The current clipping context.
     */
    project(
        object: Object3D,
        camera: Camera,
        groupOrder: number,
        renderList: unknown,
        clippingContext: ClippingContext,
    ): void;
}

export default StandardDrawingPipeline;
