import { Camera } from "../../cameras/Camera.js";
import { BufferAttribute } from "../../core/BufferAttribute.js";
import { BufferGeometry } from "../../core/BufferGeometry.js";
import { InterleavedBuffer } from "../../core/InterleavedBuffer.js";
import { InterleavedBufferAttribute } from "../../core/InterleavedBufferAttribute.js";
import { Object3D } from "../../core/Object3D.js";
import { Material } from "../../materials/Material.js";
import NodeMaterialObserver from "../../materials/nodes/manager/NodeMaterialObserver.js";
import { LightsNode } from "../../nodes/Nodes.js";
import { Scene } from "../../scenes/Scene.js";
import BindGroup from "./BindGroup.js";
import BundleGroup from "./BundleGroup.js";
import ClippingContext from "./ClippingContext.js";
import Geometries from "./Geometries.js";
import NodeBuilderState from "./nodes/NodeBuilderState.js";
import Nodes from "./nodes/Nodes.js";
import RenderContext from "./RenderContext.js";
import Renderer from "./Renderer.js";
import RenderPipeline from "./RenderPipeline.js";
/**
 * A render object is the renderer's representation of single entity that gets drawn
 * with a draw command. There is no unique mapping of render objects to 3D objects in the
 * scene since render objects also depend from the used material, the current render context
 * and the current scene's lighting.
 *
 * In general, the basic process of the renderer is:
 *
 * - Analyze the 3D objects in the scene and generate render lists containing render items.
 * - Process the render lists by calling one or more render commands for each render item.
 * - For each render command, request a render object and perform the draw.
 *
 * The module provides an interface to get data required for the draw command like the actual
 * draw parameters or vertex buffers. It also holds a series of caching related methods since
 * creating render objects should only be done when necessary.
 *
 * @private
 */
declare class RenderObject {
    _nodes: Nodes;
    _geometries: Geometries;
    id: number;
    renderer: Renderer;
    object: Object3D;
    material: Material;
    scene: Scene;
    camera: Camera;
    lightsNode: LightsNode;
    context: RenderContext;
    geometry: BufferGeometry;
    version: number;
    drawRange: {
        start: number;
        count: number;
    } | null;
    attributes: Array<BufferAttribute | InterleavedBufferAttribute> | null;
    attributesId: {
        [attributeName: string]: number;
    } | null;
    pipeline: RenderPipeline | null;
    group: {
        start: number;
        count: number;
    } | null;
    vertexBuffers: Array<BufferAttribute | InterleavedBuffer> | null;
    drawParams: {
        vertexCount: number;
        firstVertex: number;
        instanceCount: number;
        firstInstance: number;
    } | null;
    bundle: BundleGroup | null;
    clippingContext: ClippingContext | null;
    clippingContextCacheKey: string;
    initialNodesCacheKey: number;
    initialCacheKey: number;
    _nodeBuilderState: NodeBuilderState | null;
    _bindings: BindGroup[] | null;
    _monitor: NodeMaterialObserver | null;
    onDispose: (() => void) | null;
    readonly isRenderObject: true;
    onMaterialDispose: () => void;
    onGeometryDispose: () => void;
    /**
     * Constructs a new render object.
     *
     * @param {Nodes} nodes - Renderer component for managing nodes related logic.
     * @param {Geometries} geometries - Renderer component for managing geometries.
     * @param {Renderer} renderer - The renderer.
     * @param {Object3D} object - The 3D object.
     * @param {Material} material - The 3D object's material.
     * @param {Scene} scene - The scene the 3D object belongs to.
     * @param {Camera} camera - The camera the object should be rendered with.
     * @param {LightsNode} lightsNode - The lights node.
     * @param {RenderContext} renderContext - The render context.
     * @param {ClippingContext} clippingContext - The clipping context.
     */
    constructor(
        nodes: Nodes,
        geometries: Geometries,
        renderer: Renderer,
        object: Object3D,
        material: Material,
        scene: Scene,
        camera: Camera,
        lightsNode: LightsNode,
        renderContext: RenderContext,
        clippingContext: ClippingContext | null,
    );
    /**
     * Updates the clipping context.
     *
     * @param {ClippingContext} context - The clipping context to set.
     */
    updateClipping(context: ClippingContext): void;
    /**
     * Whether the clipping requires an update or not.
     *
     * @type {boolean}
     * @readonly
     */
    get clippingNeedsUpdate(): boolean;
    /**
     * The number of clipping planes defined in context of hardware clipping.
     *
     * @type {number}
     * @readonly
     */
    get hardwareClippingPlanes(): number;
    /**
     * Returns the node builder state of this render object.
     *
     * @return {NodeBuilderState} The node builder state.
     */
    getNodeBuilderState(): NodeBuilderState;
    /**
     * Returns the node material observer of this render object.
     *
     * @return {NodeMaterialObserver} The node material observer.
     */
    getMonitor(): NodeMaterialObserver;
    /**
     * Returns an array of bind groups of this render object.
     *
     * @return {Array<BindGroup>} The bindings.
     */
    getBindings(): BindGroup[];
    /**
     * Returns a binding group by group name of this render object.
     *
     * @param {string} name - The name of the binding group.
     * @return {?BindGroup} The bindings.
     */
    getBindingGroup(name: string): BindGroup | undefined;
    /**
     * Returns the index of the render object's geometry.
     *
     * @return {?BufferAttribute} The index. Returns `null` for non-indexed geometries.
     */
    getIndex(): BufferAttribute | null;
    /**
     * Returns the indirect buffer attribute.
     *
     * @return {?BufferAttribute} The indirect attribute. `null` if no indirect drawing is used.
     */
    getIndirect(): import("./IndirectStorageBufferAttribute.js").default | null;
    /**
     * Returns the byte offset into the indirect attribute buffer.
     *
     * @return {number|Array<number>} The byte offset into the indirect attribute buffer.
     */
    getIndirectOffset(): number | number[];
    /**
     * Returns an array that acts as a key for identifying the render object in a chain map.
     *
     * @return {Array<Object>} An array with object references.
     */
    getChainArray(): readonly [
        Object3D<import("../../core/Object3D.js").Object3DEventMap>,
        Material,
        RenderContext,
        LightsNode,
    ];
    /**
     * This method is used when the geometry of a 3D object has been exchanged and the
     * respective render object now requires an update.
     *
     * @param {BufferGeometry} geometry - The geometry to set.
     */
    setGeometry(geometry: BufferGeometry): void;
    /**
     * Returns the buffer attributes of the render object. The returned array holds
     * attribute definitions on geometry and node level.
     *
     * @return {Array<BufferAttribute>} An array with buffer attributes.
     */
    getAttributes(): (BufferAttribute | InterleavedBufferAttribute)[];
    /**
     * Returns the vertex buffers of the render object.
     *
     * @return {Array<BufferAttribute|InterleavedBuffer>} An array with buffer attribute or interleaved buffers.
     */
    getVertexBuffers(): (BufferAttribute | InterleavedBuffer)[] | null;
    /**
     * Returns the draw parameters for the render object.
     *
     * @return {?{vertexCount: number, firstVertex: number, instanceCount: number, firstInstance: number}} The draw parameters.
     */
    getDrawParameters(): {
        vertexCount: number;
        firstVertex: number;
        instanceCount: number;
        firstInstance: number;
    } | null;
    /**
     * Returns the render object's geometry cache key.
     *
     * The geometry cache key is part of the material cache key.
     *
     * @return {string} The geometry cache key.
     */
    getGeometryCacheKey(): string;
    /**
     * Returns the render object's material cache key.
     *
     * The material cache key is part of the render object cache key.
     *
     * @return {number} The material cache key.
     */
    getMaterialCacheKey(): number;
    /**
     * Whether the geometry requires an update or not.
     *
     * @type {boolean}
     * @readonly
     */
    get needsGeometryUpdate(): boolean;
    /**
     * Whether the render object requires an update or not.
     *
     * Note: There are two distinct places where render objects are checked for an update.
     *
     * 1. In `RenderObjects.get()` which is executed when the render object is request. This
     * method checks the `needsUpdate` flag and recreates the render object if necessary.
     * 2. In `Renderer._renderObjectDirect()` right after getting the render object via
     * `RenderObjects.get()`. The render object's NodeMaterialObserver is then used to detect
     * a need for a refresh due to material, geometry or object related value changes.
     *
     * TODO: Investigate if it's possible to merge both steps so there is only a single place
     * that performs the 'needsUpdate' check.
     *
     * @type {boolean}
     * @readonly
     */
    get needsUpdate(): boolean;
    /**
     * Returns the dynamic cache key which represents a key that is computed per draw command.
     *
     * @return {number} The cache key.
     */
    getDynamicCacheKey(): number;
    /**
     * Returns the render object's cache key.
     *
     * @return {number} The cache key.
     */
    getCacheKey(): number;
    /**
     * Frees internal resources.
     */
    dispose(): void;
}
export default RenderObject;
