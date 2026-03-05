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

export interface NodeChild {
    property: string;
    index?: number | string;
    childNode: Node;
}

/**
 * Base class for all nodes.
 *
 * @augments EventDispatcher
 */
declare class NodeClass extends EventDispatcher<{ dispose: {} }> {
    static get type(): string;
    /**
     * Constructs a new node.
     *
     * @param {?string} nodeType - The node type.
     */
    constructor(nodeType?: string | null);
    /**
     * The node type. This represents the result type of the node (e.g. `float` or `vec3`).
     *
     * @type {?string}
     * @default null
     */
    nodeType: string | null;
    /**
     * The update type of the node's {@link Node#update} method. Possible values are listed in {@link NodeUpdateType}.
     *
     * @type {string}
     * @default 'none'
     */
    updateType: NodeUpdateType;
    /**
     * The update type of the node's {@link Node#updateBefore} method. Possible values are listed in {@link NodeUpdateType}.
     *
     * @type {string}
     * @default 'none'
     */
    updateBeforeType: NodeUpdateType;
    /**
     * The update type of the node's {@link Node#updateAfter} method. Possible values are listed in {@link NodeUpdateType}.
     *
     * @type {string}
     * @default 'none'
     */
    updateAfterType: NodeUpdateType;
    /**
     * The UUID of the node.
     *
     * @type {string}
     * @readonly
     */
    readonly uuid: string;
    /**
     * The version of the node. The version automatically is increased when {@link Node#needsUpdate} is set to `true`.
     *
     * @type {number}
     * @readonly
     * @default 0
     */
    readonly version: number;
    /**
     * The name of the node.
     *
     * @type {string}
     * @default ''
     */
    name: string;
    /**
     * Whether this node is global or not. This property is relevant for the internal
     * node caching system. All nodes which should be declared just once should
     * set this flag to `true` (a typical example is {@link AttributeNode}).
     *
     * @type {boolean}
     * @default false
     */
    global: boolean;
    /**
     * Create a list of parents for this node during the build process.
     *
     * @type {boolean}
     * @default false
     */
    parents: boolean;
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isNode: boolean;
    /**
     * The cache key of this node.
     *
     * @private
     * @type {?number}
     * @default null
     */
    private _cacheKey;
    /**
     * The cache key's version.
     *
     * @private
     * @type {number}
     * @default 0
     */
    private _cacheKeyVersion;
    /**
     * The stack trace of the node for debugging purposes.
     *
     * @type {?string}
     * @default null
     */
    stackTrace: string | null;
    /**
     * Set this property to `true` when the node should be regenerated.
     *
     * @type {boolean}
     * @default false
     * @param {boolean} value
     */
    set needsUpdate(value: boolean);
    /**
     * The type of the class. The value is usually the constructor name.
     *
     * @type {string}
     * @readonly
     */
    get type(): string;
    /**
     * Convenient method for defining {@link Node#update}.
     *
     * @param {Function} callback - The update method.
     * @param {string} updateType - The update type.
     * @return {Node} A reference to this node.
     */
    onUpdate(callback: (this: this, frame: NodeFrame) => unknown, updateType: NodeUpdateType): this;
    /**
     * The method can be implemented to update the node's internal state when it is used to render an object.
     * The {@link Node#updateType} property defines how often the update is executed.
     *
     * @abstract
     * @param {NodeFrame} frame - A reference to the current node frame.
     * @return {?boolean} An optional bool that indicates whether the implementation actually performed an update or not (e.g. due to caching).
     */
    update(frame: NodeFrame): boolean | undefined;
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
     * Nodes might refer to other objects like materials. This method allows to dynamically update the reference
     * to such objects based on a given state (e.g. the current node frame or builder).
     *
     * @param {any} state - This method can be invocated in different contexts so `state` can refer to any object type.
     * @return {any} The updated reference.
     */
    updateReference(state: NodeBuilder | NodeFrame): unknown;
    /**
     * By default this method returns the value of the {@link Node#global} flag. This method
     * can be overwritten in derived classes if an analytical way is required to determine the
     * global cache referring to the current shader-stage.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {boolean} Whether this node is global or not.
     */
    isGlobal(builder: NodeBuilder): boolean;
    /**
     * Generator function that can be used to iterate over the child nodes.
     *
     * @generator
     * @yields {Node} A child node.
     */
    getChildren(): Generator<Node<unknown>, void, unknown>;
    /**
     * Calling this method dispatches the `dispose` event. This event can be used
     * to register event listeners for clean up tasks.
     */
    dispose(): void;
    /**
     * Can be used to traverse through the node's hierarchy.
     *
     * @param {traverseCallback} callback - A callback that is executed per node.
     */
    traverse(callback: (node: Node) => void): void;
    /**
     * Returns the child nodes of this node.
     *
     * @private
     * @param {Set<Node>} [ignores=new Set()] - A set of nodes to ignore during the search to avoid circular references.
     * @returns {Array<Object>} An array of objects describing the child nodes.
     */
    private _getChildren;
    /**
     * Returns the cache key for this node.
     *
     * @param {boolean} [force=false] - When set to `true`, a recomputation of the cache key is forced.
     * @param {Set<Node>} [ignores=null] - A set of nodes to ignore during the computation of the cache key.
     * @return {number} The cache key of the node.
     */
    getCacheKey(force?: boolean, ignores?: Set<Node>): number;
    /**
     * Generate a custom cache key for this node.
     *
     * @return {number} The cache key of the node.
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
     * @return {string} The hash.
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
     * @return {string} The type of the node.
     */
    getElementType(builder: NodeBuilder): string;
    /**
     * Returns the node member type for the given name.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @param {string} name - The name of the member.
     * @return {string} The type of the node.
     */
    getMemberType(builder: NodeBuilder, name: string): string;
    /**
     * Returns the node's type.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {string} The type of the node.
     */
    getNodeType(builder: NodeBuilder): string;
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
     * Returns the number of elements in the node array.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {?number} The number of elements in the node array.
     */
    getArrayCount(builder: NodeBuilder): number | null;
    /**
     * Represents the setup stage which is the first step of the build process, see {@link Node#build} method.
     * This method is often overwritten in derived modules to prepare the node which is used as a node's output/result.
     * If an output node is prepared, then it must be returned in the `return` statement of the derived module's setup function.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {?Node} The output node.
     */
    setup(builder: NodeBuilder): Node | null | undefined;
    /**
     * Represents the analyze stage which is the second step of the build process, see {@link Node#build} method.
     * This stage analyzes the node hierarchy and ensures descendent nodes are built.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @param {?Node} output - The target output node.
     */
    analyze(builder: NodeBuilder, output?: Node | null): void;
    /**
     * Represents the generate stage which is the third step of the build process, see {@link Node#build} method.
     * This state builds the output node and returns the resulting shader string.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @param {?string} [output] - Can be used to define the output type.
     * @return {?string} The generated shader string.
     */
    generate(builder: NodeBuilder, output?: string | null): string | null | undefined;
    /**
     * The method can be implemented to update the node's internal state before it is used to render an object.
     * The {@link Node#updateBeforeType} property defines how often the update is executed.
     *
     * @abstract
     * @param {NodeFrame} frame - A reference to the current node frame.
     * @return {?boolean} An optional bool that indicates whether the implementation actually performed an update or not (e.g. due to caching).
     */
    updateBefore(frame: NodeFrame): boolean | undefined;
    /**
     * The method can be implemented to update the node's internal state after it was used to render an object.
     * The {@link Node#updateAfterType} property defines how often the update is executed.
     *
     * @abstract
     * @param {NodeFrame} frame - A reference to the current node frame.
     * @return {?boolean} An optional bool that indicates whether the implementation actually performed an update or not (e.g. due to caching).
     */
    updateAfter(frame: NodeFrame): boolean | undefined;
    before(node: Node): this;
    /**
     * This method performs the build of a node. The behavior and return value depend on the current build stage:
     * - **setup**: Prepares the node and its children for the build process. This process can also create new nodes. Returns the node itself or a variant.
     * - **analyze**: Analyzes the node hierarchy for optimizations in the code generation stage. Returns `null`.
     * - **generate**: Generates the shader code for the node. Returns the generated shader string.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @param {?(string|Node)} [output=null] - Can be used to define the output type.
     * @return {?(Node|string)} The result of the build process, depending on the build stage.
     */
    build(builder: NodeBuilder, output?: (string | Node) | null): (Node | string) | null;
    /**
     * Returns the child nodes as a JSON object.
     *
     * @return {Generator<Object>} An iterable list of serialized child objects as JSON.
     */
    getSerializeChildren(): NodeChild[];
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
     * @param {?Object} meta - An optional JSON object that already holds serialized data from other scene objects.
     * @return {Object} The serialized node.
     */
    toJSON(meta?: NodeJSONMeta | string): NodeJSONOutputData;
}

declare const Node: {
    new<TNodeType>(nodeType?: TNodeType | null): Node<TNodeType>;
    new(nodeType?: string | null): Node;
    /**
     * Enables or disables the automatic capturing of stack traces for nodes.
     *
     * @type {boolean}
     * @default false
     */
    captureStackTrace: boolean;
};

export interface NodeElements {
}

export interface NodeExtensions<TNodeType> {
}

export type NumType = "float" | "int" | "uint";
export type IntegerType = "int" | "uint";
export type NumOrBoolType = NumType | "bool";
export type FloatVecType = "vec2" | "vec3" | "vec4";
export type MatType = "mat2" | "mat3" | "mat4";

export interface FloatExtensions {
}

export interface IntExtensions {
}

export interface UintExtensions {
}

export interface BoolExtensions {
}

export interface NumExtensions<TNum extends NumType> {
}

export interface IntegerExtensions<TInteger extends IntegerType> {
}

export interface NumOrBoolExtensions<TNumOrBool extends NumOrBoolType> {
}

export interface NumVec2Extensions<TNum extends NumType> {
}

export interface NumVec3Extensions<TNum extends NumType> {
}

export interface NumVec4Extensions<TNum extends NumType> {
}

export interface NumOrBoolVec2Extensions<TNumOrBool extends NumOrBoolType> {
}

export interface NumOrBoolVec3Extensions<TNumOrBool extends NumOrBoolType> {
}

export interface NumOrBoolVec4Extensions<TNumOrBool extends NumOrBoolType> {
}

export interface Vec2Extensions {
}

export interface Vec3Extensions {
}

export interface Vec4Extensions {
}

export interface ColorExtensions {
}

export interface FloatVecExtensions<TVec extends FloatVecType> {
}

export interface Mat2Extensions {
}

export interface Mat3Extensions {
}

export interface Mat4Extensions {
}

export interface MatExtensions<TMat extends MatType> {
}

type Node<TNodeType = unknown> =
    & NodeClass
    & NodeElements
    & (unknown extends TNodeType ? {} : NodeExtensions<TNodeType>)
    & (TNodeType extends "float" ? NumOrBoolExtensions<"float"> & FloatExtensions & NumExtensions<"float">
        : TNodeType extends "int"
            ? NumOrBoolExtensions<"int"> & IntExtensions & NumExtensions<"int"> & IntegerExtensions<"int">
        : TNodeType extends "uint"
            ? NumOrBoolExtensions<"uint"> & UintExtensions & NumExtensions<"uint"> & IntegerExtensions<"uint">
        : TNodeType extends "bool" ? NumOrBoolExtensions<"bool"> & BoolExtensions
        : TNodeType extends "vec2" ?
                & NumOrBoolVec2Extensions<"float">
                & Vec2Extensions
                & NumVec2Extensions<"float">
                & FloatVecExtensions<"vec2">
        : TNodeType extends "ivec2" ? NumOrBoolVec2Extensions<"int"> & NumVec2Extensions<"int">
        : TNodeType extends "uvec2" ? NumOrBoolVec2Extensions<"uint"> & NumVec2Extensions<"uint">
        : TNodeType extends "bvec2" ? NumOrBoolVec2Extensions<"bool">
        : TNodeType extends "vec3" ?
                & NumOrBoolVec3Extensions<"float">
                & Vec3Extensions
                & NumVec3Extensions<"float">
                & FloatVecExtensions<"vec3">
        : TNodeType extends "ivec3" ? NumOrBoolVec3Extensions<"int"> & NumVec3Extensions<"int">
        : TNodeType extends "uvec3" ? NumOrBoolVec3Extensions<"uint"> & NumVec3Extensions<"uint">
        : TNodeType extends "bvec3" ? NumOrBoolVec3Extensions<"bool">
        : TNodeType extends "vec4" ?
                & NumOrBoolVec4Extensions<"float">
                & Vec4Extensions
                & NumVec4Extensions<"float">
                & FloatVecExtensions<"vec4">
        : TNodeType extends "ivec4" ? NumOrBoolVec4Extensions<"int"> & NumVec4Extensions<"int">
        : TNodeType extends "uvec4" ? NumOrBoolVec4Extensions<"uint"> & NumVec4Extensions<"uint">
        : TNodeType extends "bvec4" ? NumOrBoolVec4Extensions<"bool">
        : TNodeType extends "color" ? ColorExtensions
        : TNodeType extends "mat2" ? Mat2Extensions & MatExtensions<"mat2">
        : TNodeType extends "mat3" ? Mat3Extensions & MatExtensions<"mat3">
        : TNodeType extends "mat4" ? Mat4Extensions & MatExtensions<"mat4">
        : {})
    & {
        __TypeScript_NODE_TYPE__: TNodeType;
    };

export default Node;

export {};
