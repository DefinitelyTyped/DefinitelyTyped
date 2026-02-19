import { Camera } from "../../../cameras/Camera.js";
import { Object3D } from "../../../core/Object3D.js";
import { Material } from "../../../materials/Material.js";
import Node from "../../../nodes/core/Node.js";
import NodeFrame from "../../../nodes/core/NodeFrame.js";
import ComputeNode from "../../../nodes/gpgpu/ComputeNode.js";
import LightsNode from "../../../nodes/lighting/LightsNode.js";
import { Scene } from "../../../scenes/Scene.js";
import { Texture } from "../../../textures/Texture.js";
import Backend from "../Backend.js";
import ChainMap from "../ChainMap.js";
import DataMap from "../DataMap.js";
import Renderer from "../Renderer.js";
import RenderObject from "../RenderObject.js";
import NodeBuilderState from "./NodeBuilderState.js";
import NodeUniformsGroup from "./NodeUniformsGroup.js";

declare module "../../../scenes/Scene.js" {
    interface Scene {
        environmentNode?: Node<"vec3"> | null | undefined;
        backgroundNode?: Node | null | undefined;
        fogNode?: Node | null | undefined;
    }
}

/**
 * This renderer module manages node-related objects and is the
 * primary interface between the renderer and the node system.
 *
 * @private
 * @augments DataMap
 */
declare class NodeManager extends DataMap {
    /**
     * Constructs a new nodes management component.
     *
     * @param {Renderer} renderer - The renderer.
     * @param {Backend} backend - The renderer's backend.
     */
    constructor(renderer: Renderer, backend: Backend);
    /**
     * The renderer.
     *
     * @type {Renderer}
     */
    renderer: Renderer;
    /**
     * The renderer's backend.
     *
     * @type {Backend}
     */
    backend: Backend;
    /**
     * The node frame.
     *
     * @type {Renderer}
     */
    nodeFrame: NodeFrame;
    /**
     * A cache for managing node builder states.
     *
     * @type {Map<number,NodeBuilderState>}
     */
    nodeBuilderCache: Map<number, NodeBuilderState>;
    /**
     * A cache for managing data cache key data.
     *
     * @type {ChainMap}
     */
    callHashCache: ChainMap;
    /**
     * A cache for managing node uniforms group data.
     *
     * @type {ChainMap}
     */
    groupsData: ChainMap;
    /**
     * A cache for managing node objects of
     * scene properties like fog or environments.
     *
     * @type {Object<string,WeakMap>}
     */
    cacheLib: {
        [x: string]: WeakMap<object, Node | undefined>;
    };
    /**
     * Returns `true` if the given node uniforms group must be updated or not.
     *
     * @param {NodeUniformsGroup} nodeUniformsGroup - The node uniforms group.
     * @return {boolean} Whether the node uniforms group requires an update or not.
     */
    updateGroup(nodeUniformsGroup: NodeUniformsGroup): boolean;
    /**
     * Returns the cache key for the given render object.
     *
     * @param {RenderObject} renderObject - The render object.
     * @return {number} The cache key.
     */
    getForRenderCacheKey(renderObject: RenderObject): number;
    /**
     * Returns a node builder state for the given render object.
     *
     * @param {RenderObject} renderObject - The render object.
     * @return {NodeBuilderState} The node builder state.
     */
    getForRender(renderObject: RenderObject): NodeBuilderState;
    /**
     * Deletes the given object from the internal data map
     *
     * @param {any} object - The object to delete.
     * @return {?Object} The deleted dictionary.
     */
    delete(object: unknown): unknown | null;
    /**
     * Returns a node builder state for the given compute node.
     *
     * @param {Node} computeNode - The compute node.
     * @return {NodeBuilderState} The node builder state.
     */
    getForCompute(computeNode: ComputeNode): NodeBuilderState;
    /**
     * Creates a node builder state for the given node builder.
     *
     * @private
     * @param {NodeBuilder} nodeBuilder - The node builder.
     * @return {NodeBuilderState} The node builder state.
     */
    private _createNodeBuilderState;
    /**
     * Returns an environment node for the current configured
     * scene environment.
     *
     * @param {Scene} scene - The scene.
     * @return {Node} A node representing the current scene environment.
     */
    getEnvironmentNode(scene: Scene): Node;
    /**
     * Returns a background node for the current configured
     * scene background.
     *
     * @param {Scene} scene - The scene.
     * @return {Node} A node representing the current scene background.
     */
    getBackgroundNode(scene: Scene): Node;
    /**
     * Returns a fog node for the current configured scene fog.
     *
     * @param {Scene} scene - The scene.
     * @return {Node} A node representing the current scene fog.
     */
    getFogNode(scene: Scene): Node;
    /**
     * Returns a cache key for the given scene and lights node.
     * This key is used by `RenderObject` as a part of the dynamic
     * cache key (a key that must be checked every time the render
     * objects is drawn).
     *
     * @param {Scene} scene - The scene.
     * @param {LightsNode} lightsNode - The lights node.
     * @return {number} The cache key.
     */
    getCacheKey(scene: Scene, lightsNode: LightsNode): number;
    /**
     * A boolean that indicates whether tone mapping should be enabled
     * or not.
     *
     * @type {boolean}
     */
    get isToneMappingState(): boolean;
    /**
     * If a scene background is configured, this method makes sure to
     * represent the background with a corresponding node-based implementation.
     *
     * @param {Scene} scene - The scene.
     */
    updateBackground(scene: Scene): void;
    /**
     * This method is part of the caching of nodes which are used to represents the
     * scene's background, fog or environment.
     *
     * @param {string} type - The type of object to cache.
     * @param {Object} object - The object.
     * @param {Function} callback - A callback that produces a node representation for the given object.
     * @param {boolean} [forceUpdate=false] - Whether an update should be enforced or not.
     * @return {Node} The node representation.
     */
    getCacheNode(type: string, object: object, callback: () => Node | undefined, forceUpdate?: boolean): Node;
    /**
     * If a scene fog is configured, this method makes sure to
     * represent the fog with a corresponding node-based implementation.
     *
     * @param {Scene} scene - The scene.
     */
    updateFog(scene: Scene): void;
    /**
     * If a scene environment is configured, this method makes sure to
     * represent the environment with a corresponding node-based implementation.
     *
     * @param {Scene} scene - The scene.
     */
    updateEnvironment(scene: Scene): void;
    getNodeFrame(
        renderer?: Renderer,
        scene?: Scene | null,
        object?: Object3D | null,
        camera?: Camera | null,
        material?: Material | null,
    ): NodeFrame;
    getNodeFrameForRender(renderObject: RenderObject): NodeFrame;
    /**
     * Returns the current output cache key.
     *
     * @return {string} The output cache key.
     */
    getOutputCacheKey(): string;
    /**
     * Checks if the output configuration (tone mapping and color space) for
     * the given target has changed.
     *
     * @param {Texture} outputTarget - The output target.
     * @return {boolean} Whether the output configuration has changed or not.
     */
    hasOutputChange(outputTarget: Texture): boolean;
    /**
     * Returns a node that represents the output configuration (tone mapping and
     * color space) for the current target.
     *
     * @param {Texture} outputTarget - The output target.
     * @return {Node} The output node.
     */
    getOutputNode(outputTarget: Texture): Node;
    /**
     * Triggers the call of `updateBefore()` methods
     * for all nodes of the given render object.
     *
     * @param {RenderObject} renderObject - The render object.
     */
    updateBefore(renderObject: RenderObject): void;
    /**
     * Triggers the call of `updateAfter()` methods
     * for all nodes of the given render object.
     *
     * @param {RenderObject} renderObject - The render object.
     */
    updateAfter(renderObject: RenderObject): void;
    /**
     * Triggers the call of `update()` methods
     * for all nodes of the given compute node.
     *
     * @param {Node} computeNode - The compute node.
     */
    updateForCompute(computeNode: ComputeNode): void;
    /**
     * Triggers the call of `update()` methods
     * for all nodes of the given compute node.
     *
     * @param {RenderObject} renderObject - The render object.
     */
    updateForRender(renderObject: RenderObject): void;
    /**
     * Returns `true` if the given render object requires a refresh.
     *
     * @param {RenderObject} renderObject - The render object.
     * @return {boolean} Whether the given render object requires a refresh or not.
     */
    needsRefresh(renderObject: RenderObject): boolean;
}

export default NodeManager;
