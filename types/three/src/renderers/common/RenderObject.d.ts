import { Camera } from "../../cameras/Camera.js";
import { BufferAttribute } from "../../core/BufferAttribute.js";
import { BufferGeometry } from "../../core/BufferGeometry.js";
import { InterleavedBuffer } from "../../core/InterleavedBuffer.js";
import { Object3D } from "../../core/Object3D.js";
import { Material } from "../../materials/Material.js";
import NodeMaterialObserver from "../../materials/nodes/manager/NodeMaterialObserver.js";
import LightsNode from "../../nodes/lighting/LightsNode.js";
import { Scene } from "../../scenes/Scene.js";
import BindGroup from "./BindGroup.js";
import BundleGroup from "./BundleGroup.js";
import ClippingContext from "./ClippingContext.js";
import Geometries from "./Geometries.js";
import NodeBuilderState from "./nodes/NodeBuilderState.js";
import NodeManager from "./nodes/NodeManager.js";
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
        nodes: NodeManager,
        geometries: Geometries,
        renderer: Renderer,
        object: Object3D,
        material: Material,
        scene: Scene,
        camera: Camera,
        lightsNode: LightsNode,
        renderContext: RenderContext,
        clippingContext: ClippingContext,
    );
    id: number;
    /**
     * Renderer component for managing nodes related logic.
     *
     * @type {Nodes}
     * @private
     */
    private _nodes;
    /**
     * Renderer component for managing geometries.
     *
     * @type {Geometries}
     * @private
     */
    private _geometries;
    /**
     * The renderer.
     *
     * @type {Renderer}
     */
    renderer: Renderer;
    /**
     * The 3D object.
     *
     * @type {Object3D}
     */
    object: Object3D;
    /**
     * The 3D object's material.
     *
     * @type {Material}
     */
    material: Material;
    /**
     * The scene the 3D object belongs to.
     *
     * @type {Scene}
     */
    scene: Scene;
    /**
     * The camera the 3D object should be rendered with.
     *
     * @type {Camera}
     */
    camera: Camera;
    /**
     * The lights node.
     *
     * @type {LightsNode}
     */
    lightsNode: LightsNode;
    /**
     * The render context.
     *
     * @type {RenderContext}
     */
    context: RenderContext;
    /**
     * The 3D object's geometry.
     *
     * @type {BufferGeometry}
     */
    geometry: BufferGeometry;
    /**
     * The render object's version.
     *
     * @type {number}
     */
    version: number;
    /**
     * The draw range of the geometry.
     *
     * @type {?Object}
     * @default null
     */
    drawRange: {
        start: number;
        count: number;
    } | null;
    /**
     * An array holding the buffer attributes
     * of the render object. This entails attribute
     * definitions on geometry and node level.
     *
     * @type {?Array<BufferAttribute>}
     * @default null
     */
    attributes: BufferAttribute[] | null;
    /**
     * An object holding the version of the
     * attributes. The keys are the attribute names
     * and the values are the attribute versions.
     *
     * @type {?Object<string, number>}
     * @default null
     */
    attributesId: {
        [x: string]: number;
    } | null;
    /**
     * A reference to a render pipeline the render
     * object is processed with.
     *
     * @type {RenderPipeline}
     * @default null
     */
    pipeline: RenderPipeline;
    /**
     * Only relevant for objects using
     * multiple materials. This represents a group entry
     * from the respective `BufferGeometry`.
     *
     * @type {?{start: number, count: number}}
     * @default null
     */
    group: {
        start: number;
        count: number;
    } | null;
    /**
     * An array holding the vertex buffers which can
     * be buffer attributes but also interleaved buffers.
     *
     * @type {?Array<BufferAttribute|InterleavedBuffer>}
     * @default null
     */
    vertexBuffers: Array<BufferAttribute | InterleavedBuffer> | null;
    /**
     * The parameters for the draw command.
     *
     * @type {?Object}
     * @default null
     */
    drawParams: {
        vertexCount: number;
        firstVertex: number;
        instanceCount: number;
        firstInstance: number;
    } | null;
    /**
     * If this render object is used inside a render bundle,
     * this property points to the respective bundle group.
     *
     * @type {?BundleGroup}
     * @default null
     */
    bundle: BundleGroup | null;
    /**
     * The clipping context.
     *
     * @type {ClippingContext}
     */
    clippingContext: ClippingContext;
    /**
     * The clipping context's cache key.
     *
     * @type {string}
     */
    clippingContextCacheKey: string;
    /**
     * The initial node cache key.
     *
     * @type {number}
     */
    initialNodesCacheKey: number;
    /**
     * The initial cache key.
     *
     * @type {number}
     */
    initialCacheKey: number;
    /**
     * The node builder state.
     *
     * @type {?NodeBuilderState}
     * @private
     * @default null
     */
    private _nodeBuilderState;
    /**
     * An array of bindings.
     *
     * @type {?Array<BindGroup>}
     * @private
     * @default null
     */
    private _bindings;
    /**
     * Reference to the node material observer.
     *
     * @type {?NodeMaterialObserver}
     * @private
     * @default null
     */
    private _monitor;
    /**
     * An event listener which is defined by `RenderObjects`. It performs
     * clean up tasks when `dispose()` on this render object.
     *
     * @method
     */
    onDispose: (() => void) | null;
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isRenderObject: boolean;
    /**
     * An event listener which is executed when `dispose()` is called on
     * the material of this render object.
     *
     * @method
     */
    onMaterialDispose: () => void;
    /**
     * An event listener which is executed when `dispose()` is called on
     * the geometry of this render object.
     *
     * @method
     */
    onGeometryDispose: () => void;
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
    getBindingGroup(name: string): BindGroup | null;
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
    getIndirect(): BufferAttribute | null;
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
    getChainArray(): unknown[];
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
    getAttributes(): BufferAttribute[];
    /**
     * Returns the vertex buffers of the render object.
     *
     * @return {Array<BufferAttribute|InterleavedBuffer>} An array with buffer attribute or interleaved buffers.
     */
    getVertexBuffers(): Array<BufferAttribute | InterleavedBuffer>;
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
