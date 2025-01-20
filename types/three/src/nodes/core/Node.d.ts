import { EventDispatcher } from "../../core/EventDispatcher.js";
import { NodeUpdateType } from "./constants.js";
import NodeBuilder from "./NodeBuilder.js";
import NodeFrame from "./NodeFrame.js";
interface NodeJSONMeta {
    textures: {
        [key: string]: unknown;
    };
    images: {
        [key: string]: unknown;
    };
    nodes: {
        [key: string]: NodeJSONIntermediateOutputData;
    };
}
interface NodeJSONMetadata {
    version: number;
    type: "Node";
    generator: "Node.toJSON";
}
interface NodeJSONInputNodes {
    [property: string]:
        | string[]
        | {
            [index: string]: string | undefined;
        }
        | string
        | undefined;
}
export interface NodeJSONInputData {
    inputNodes?: NodeJSONInputNodes | undefined;
    meta: {
        textures: {
            [key: string]: unknown;
        };
        nodes: {
            [key: string]: Node;
        };
    };
}
export interface NodeJSONIntermediateOutputData {
    uuid: string;
    type: string | undefined;
    meta?: NodeJSONMeta | undefined;
    metadata?: NodeJSONMetadata;
    inputNodes?: NodeJSONInputNodes | undefined;
    textures?: unknown[];
    images?: unknown[];
    nodes?: NodeJSONIntermediateOutputData[];
}
interface NodeJSONOutputData {
    uuid: string;
    type: string | undefined;
    metadata?: NodeJSONMetadata;
    inputNodes?: NodeJSONInputNodes | undefined;
    textures?: unknown[];
    images?: unknown[];
    nodes?: NodeJSONOutputData[];
}
/**
 * Base class for all nodes.
 *
 * @augments EventDispatcher
 */
declare class Node extends EventDispatcher<{
    dispose: {};
}> {
    static get type(): string;
    nodeType: string | null;
    updateType: NodeUpdateType;
    updateBeforeType: NodeUpdateType;
    updateAfterType: NodeUpdateType;
    uuid: string;
    version: number;
    _cacheKey: number | null;
    _cacheKeyVersion: number;
    global: boolean;
    readonly isNode: true;
    readonly id: number;
    self?: this;
    /**
     * Constructs a new node.
     *
     * @param {String?} nodeType - The node type.
     */
    constructor(nodeType?: string | null);
    /**
     * Set this property to `true` when the node should be regenerated.
     *
     * @type {Boolean}
     * @default false
     * @param {boolean} value
     */
    set needsUpdate(value: boolean);
    /**
     * The type of the class. The value is usually the constructor name.
     *
     * @type {String}
     * @readonly
     */
    get type(): string | undefined;
    /**
     * Convenient method for defining {@link Node#update}.
     *
     * @param {Function} callback - The update method.
     * @param {String} updateType - The update type.
     * @return {Node} A reference to this node.
     */
    onUpdate(callback: (this: this, frame: NodeFrame) => unknown, updateType: NodeUpdateType): this;
    /**
     * Convenient method for defining {@link Node#update}. Similar to {@link Node#onUpdate}, but
     * this method automatically sets the update type to `FRAME`.
     *
     * @param {Function} callback - The update method.
     * @return {Node} A reference to this node.
     */
    onFrameUpdate(callback: (this: this, frame: NodeFrame) => void): this;
    /**
     * Convenient method for defining {@link Node#update}. Similar to {@link Node#onUpdate}, but
     * this method automatically sets the update type to `RENDER`.
     *
     * @param {Function} callback - The update method.
     * @return {Node} A reference to this node.
     */
    onRenderUpdate(callback: (this: this, frame: NodeFrame) => void): this;
    /**
     * Convenient method for defining {@link Node#update}. Similar to {@link Node#onUpdate}, but
     * this method automatically sets the update type to `OBJECT`.
     *
     * @param {Function} callback - The update method.
     * @return {Node} A reference to this node.
     */
    onObjectUpdate(callback: (this: this, frame: NodeFrame) => void): this;
    /**
     * Convenient method for defining {@link Node#updateReference}.
     *
     * @param {Function} callback - The update method.
     * @return {Node} A reference to this node.
     */
    onReference(callback: (this: this, frame: NodeBuilder | NodeFrame) => unknown): this;
    /**
     * The `this` reference might point to a Proxy so this method can be used
     * to get the reference to the actual node instance.
     *
     * @return {Node} A reference to the node.
     */
    getSelf(): this;
    /**
     * Nodes might refer to other objects like materials. This method allows to dynamically update the reference
     * to such objects based on a given state (e.g. the current node frame or builder).
     *
     * @param {Any} state - This method can be invocated in different contexts so `state` can refer to any object type.
     * @return {Any} The updated reference.
     */
    updateReference(state: NodeBuilder | NodeFrame): unknown;
    /**
     * By default this method returns the value of the {@link Node#global} flag. This method
     * can be overwritten in derived classes if an analytical way is required to determine the
     * global status.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {Boolean} Whether this node is global or not.
     */
    isGlobal(builder: NodeBuilder): boolean;
    /**
     * Generator function that can be used to iterate over the child nodes.
     *
     * @generator
     * @yields {Node} A child node.
     */
    getChildren(): Generator<Node, void, unknown>;
    /**
     * Calling this method dispatches the `dispose` event. This event can be used
     * to register event listeners for clean up tasks.
     */
    dispose(): void;
    /**
     * Callback for {@link Node#traverse}.
     *
     * @callback traverseCallback
     * @param {Node} node - The current node.
     */
    /**
     * Can be used to traverse through the node's hierarchy.
     *
     * @param {traverseCallback} callback - A callback that is executed per node.
     */
    traverse(callback: (node: Node) => void): void;
    /**
     * Returns the cache key for this node.
     *
     * @param {Boolean} [force=false] - When set to `true`, a recomputation of the cache key is forced.
     * @return {Number} The cache key of the node.
     */
    getCacheKey(force?: boolean): number;
    /**
     * Generate a custom cache key for this node.
     *
     * @return {Number} The cache key of the node.
     */
    customCacheKey(): number;
    /**
     * Returns the references to this node which is by default `this`.
     *
     * @return {Node} A reference to this node.
     */
    getScope(): this;
    /**
     * Returns the hash of the node which is used to identify the node. By default it's
     * the {@link Node#uuid} however derived node classes might have to overwrite this method
     * depending on their implementation.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {String} The hash.
     */
    getHash(builder: NodeBuilder): string;
    /**
     * Returns the update type of {@link Node#update}.
     *
     * @return {NodeUpdateType} The update type.
     */
    getUpdateType(): NodeUpdateType;
    /**
     * Returns the update type of {@link Node#updateBefore}.
     *
     * @return {NodeUpdateType} The update type.
     */
    getUpdateBeforeType(): NodeUpdateType;
    /**
     * Returns the update type of {@link Node#updateAfter}.
     *
     * @return {NodeUpdateType} The update type.
     */
    getUpdateAfterType(): NodeUpdateType;
    /**
     * Certain types are composed of multiple elements. For example a `vec3`
     * is composed of three `float` values. This method returns the type of
     * these elements.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {String} The type of the node.
     */
    getElementType(builder: NodeBuilder): "bool" | "int" | "float" | "vec2" | "vec3" | "vec4" | "uint" | null;
    /**
     * Returns the node's type.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {String} The type of the node.
     */
    getNodeType(builder: NodeBuilder): string | null;
    /**
     * This method is used during the build process of a node and ensures
     * equal nodes are not built multiple times but just once. For example if
     * `attribute( 'uv' )` is used multiple times by the user, the build
     * process makes sure to process just the first node.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {Node} The shared node if possible. Otherwise `this` is returned.
     */
    getShared(builder: NodeBuilder): Node;
    /**
     * Represents the setup stage which is the first step of the build process, see {@link Node#build} method.
     * This method is often overwritten in derived modules to prepare the node which is used as the output/result.
     * The output node must be returned in the `return` statement.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {Node?} The output node.
     */
    setup(builder: NodeBuilder): unknown;
    /**
     * Represents the analyze stage which is the second step of the build process, see {@link Node#build} method.
     * This stage analyzes the node hierarchy and ensures descendent nodes are built.
     *
     * @param {NodeBuilder} builder - The current node builder.
     */
    analyze(builder: NodeBuilder): void;
    /**
     * Represents the generate stage which is the third step of the build process, see {@link Node#build} method.
     * This state builds the output node and returns the resulting shader string.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @param {String?} output - Can be used to define the output type.
     * @return {String?} The generated shader string.
     */
    generate(builder: NodeBuilder, output?: string | null): string | null | undefined;
    /**
     * The method can be implemented to update the node's internal state before it is used to render an object.
     * The {@link Node#updateBeforeType} property defines how often the update is executed.
     *
     * @abstract
     * @param {NodeFrame} frame - A reference to the current node frame.
     * @return {Boolean?} An optional bool that indicates whether the implementation actually performed an update or not (e.g. due to caching).
     */
    updateBefore(frame: NodeFrame): void;
    /**
     * The method can be implemented to update the node's internal state after it was used to render an object.
     * The {@link Node#updateAfterType} property defines how often the update is executed.
     *
     * @abstract
     * @param {NodeFrame} frame - A reference to the current node frame.
     * @return {Boolean?} An optional bool that indicates whether the implementation actually performed an update or not (e.g. due to caching).
     */
    updateAfter(frame: NodeFrame): void;
    /**
     * The method can be implemented to update the node's internal state when it is used to render an object.
     * The {@link Node#updateType} property defines how often the update is executed.
     *
     * @abstract
     * @param {NodeFrame} frame - A reference to the current node frame.
     * @return {Boolean?} An optional bool that indicates whether the implementation actually performed an update or not (e.g. due to caching).
     */
    update(frame: NodeFrame): void;
    /**
     * This method performs the build of a node. The behavior of this method as well as its return value depend
     * on the current build stage (setup, analyze or generate).
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @param {String?} output - Can be used to define the output type.
     * @return {String?} When this method is executed in the setup or analyze stage, `null` is returned. In the generate stage, the generated shader string.
     */
    build(builder: NodeBuilder, output?: string | null): string | null;
    /**
     * Returns the child nodes as a JSON object.
     *
     * @return {Object} The serialized child objects as JSON.
     */
    getSerializeChildren(): Generator<import("./NodeUtils.js").NodeChild, void, unknown>;
    /**
     * Serializes the node to JSON.
     *
     * @param {Object} json - The output JSON object.
     */
    serialize(json: NodeJSONIntermediateOutputData): void;
    /**
     * Deserializes the node from the given JSON.
     *
     * @param {Object} json - The JSON object.
     */
    deserialize(json: NodeJSONInputData): void;
    /**
     * Serializes the node into the three.js JSON Object/Scene format.
     *
     * @param {Object?} meta - An optional JSON object that already holds serialized data from other scene objects.
     * @return {Object} The serialized node.
     */
    toJSON(meta?: NodeJSONMeta | string): NodeJSONOutputData;
}
export default Node;
