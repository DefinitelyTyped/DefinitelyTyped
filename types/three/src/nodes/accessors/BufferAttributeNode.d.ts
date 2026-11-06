import { Usage } from "../../constants.js";
import { BufferAttribute, TypedArray } from "../../core/BufferAttribute.js";
import { InterleavedBuffer } from "../../core/InterleavedBuffer.js";
import { InterleavedBufferAttribute } from "../../core/InterleavedBufferAttribute.js";
import { Object3D } from "../../core/Object3D.js";
import InputNode from "../core/InputNode.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";

/**
 * In earlier `three.js` versions it was only possible to define attribute data
 * on geometry level. With `BufferAttributeNode`, it is also possible to do this
 * on the node level.
 * ```js
 * const geometry = new THREE.PlaneGeometry();
 * const positionAttribute = geometry.getAttribute( 'position' );
 *
 * const colors = [];
 * for ( let i = 0; i < position.count; i ++ ) {
 * 	colors.push( 1, 0, 0 );
 * }
 *
 * material.colorNode = bufferAttribute( new THREE.Float32BufferAttribute( colors, 3 ) );
 * ```
 * This new approach is especially interesting when geometry data are generated via
 * compute shaders. The below line converts a storage buffer into an attribute node.
 * ```js
 * material.positionNode = positionBuffer.toAttribute();
 * ```
 * @augments InputNode
 */
declare class BufferAttributeNodeClass
    extends InputNode<unknown, TypedArray | InterleavedBuffer | InterleavedBufferAttribute | BufferAttribute>
{
    /**
     * Constructs a new buffer attribute node.
     *
     * @param {BufferAttribute|InterleavedBufferAttribute|InterleavedBuffer|TypedArray} value - The attribute data.
     * @param {?string} [bufferType=null] - The buffer type (e.g. `'vec3'`).
     * @param {number} [bufferStride=0] - The buffer stride.
     * @param {number} [bufferOffset=0] - The buffer offset.
     */
    constructor(
        value: BufferAttribute | InterleavedBufferAttribute | InterleavedBuffer | TypedArray,
        bufferType?: string | null,
        bufferStride?: number,
        bufferOffset?: number,
    );
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isBufferNode: boolean;
    /**
     * The buffer type (e.g. `'vec3'`).
     *
     * @type {?string}
     * @default null
     */
    bufferType: string | null;
    /**
     * The buffer stride.
     *
     * @type {number}
     * @default 0
     */
    bufferStride: number;
    /**
     * The buffer offset.
     *
     * @type {number}
     * @default 0
     */
    bufferOffset: number;
    /**
     * The usage property. Set this to `THREE.DynamicDrawUsage` via `.setUsage()`,
     * if you are planning to update the attribute data per frame.
     *
     * @type {number}
     * @default StaticDrawUsage
     */
    usage: Usage;
    /**
     * Whether the attribute is instanced or not.
     *
     * @type {boolean}
     * @default false
     */
    instanced: boolean;
    /**
     * A reference to the buffer attribute.
     *
     * @type {?BufferAttribute}
     * @default null
     */
    attribute: BufferAttribute | InterleavedBufferAttribute | null;
    /**
     * This method is overwritten since the attribute data might be shared
     * and thus the hash should be shared as well.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {string} The hash.
     */
    getHash(builder: NodeBuilder): string;
    /**
     * This method is overwritten since the node type is inferred from
     * the buffer attribute.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {string} The node type.
     */
    generateNodeType(builder: NodeBuilder): string;
    /**
     * Depending on which value was passed to the node, `setup()` behaves
     * differently. If no instance of `BufferAttribute` was passed, the method
     * creates an internal attribute and configures it respectively.
     *
     * @param {NodeBuilder} builder - The current node builder.
     */
    setup(builder: NodeBuilder): undefined;
    /**
     * Generates the code snippet of the buffer attribute node.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {string} The generated code snippet.
     */
    generate(builder: NodeBuilder): string;
    /**
     * Overwrites the default implementation to return a fixed value `'bufferAttribute'`.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {string} The input type.
     */
    getInputType(): string;
    /**
     * Sets the `usage` property to the given value.
     *
     * @param {number} value - The usage to set.
     * @return {BufferAttributeNode} A reference to this node.
     */
    setUsage(value: Usage): this;
    /**
     * Sets the `instanced` property to the given value.
     *
     * @param {boolean} value - The value to set.
     * @return {BufferAttributeNode} A reference to this node.
     */
    setInstanced(value: boolean): this;
    /**
     * Returns the buffer attribute to bind when rendering the given object. Nodes that
     * bind attributes of the rendered object, like {@link ReferenceAttributeNode}, overwrite it.
     *
     * @param {Object3D} object - The rendered object.
     * @return {?(BufferAttribute|InterleavedBufferAttribute)} The buffer attribute.
     */
    getObjectAttribute(object: Object3D): (BufferAttribute | InterleavedBufferAttribute) | null;
}

declare const BufferAttributeNode: {
    /**
     * Constructs a new buffer attribute node.
     *
     * @param {BufferAttribute|InterleavedBufferAttribute|InterleavedBuffer|TypedArray} value - The attribute data.
     * @param {?string} [bufferType=null] - The buffer type (e.g. `'vec3'`).
     * @param {number} [bufferStride=0] - The buffer stride.
     * @param {number} [bufferOffset=0] - The buffer offset.
     */
    new<TNodeType>(
        value: TypedArray | InterleavedBuffer | InterleavedBufferAttribute | BufferAttribute,
        bufferType?: string | null,
        bufferStride?: number,
        bufferOffset?: number,
    ): BufferAttributeNode<TNodeType>;
};

type BufferAttributeNode<TNodeType> =
    & InputNode<TNodeType, TypedArray | InterleavedBuffer | InterleavedBufferAttribute | BufferAttribute>
    & BufferAttributeNodeClass;

export default BufferAttributeNode;

/**
 * TSL function for creating a buffer attribute node.
 *
 * @function
 * @param {BufferAttribute|InterleavedBuffer|TypedArray} array - The attribute data.
 * @param {?string} [type=null] - The buffer type (e.g. `'vec3'`).
 * @param {number} [stride=0] - The buffer stride.
 * @param {number} [offset=0] - The buffer offset.
 * @returns {BufferAttributeNode|Node}
 */
export declare const bufferAttribute: <TNodeType>(
    array: BufferAttribute | InterleavedBufferAttribute | InterleavedBuffer | TypedArray,
    type?: TNodeType | null,
    stride?: number,
    offset?: number,
) => Node<TNodeType>;

/**
 * TSL function for creating a buffer attribute node but with dynamic draw usage.
 * Use this function if attribute data are updated per frame.
 *
 * @function
 * @param {BufferAttribute|InterleavedBuffer|TypedArray} array - The attribute data.
 * @param {?string} [type=null] - The buffer type (e.g. `'vec3'`).
 * @param {number} [stride=0] - The buffer stride.
 * @param {number} [offset=0] - The buffer offset.
 * @returns {BufferAttributeNode|Node}
 */
export declare const dynamicBufferAttribute: <TNodeType>(
    array: BufferAttribute | InterleavedBufferAttribute | InterleavedBuffer | TypedArray,
    type?: TNodeType | null,
    stride?: number,
    offset?: number,
) => Node<TNodeType>;

/**
 * TSL function for creating a buffer attribute node but with enabled instancing
 *
 * @function
 * @param {BufferAttribute|InterleavedBuffer|TypedArray} array - The attribute data.
 * @param {?string} [type=null] - The buffer type (e.g. `'vec3'`).
 * @param {number} [stride=0] - The buffer stride.
 * @param {number} [offset=0] - The buffer offset.
 * @returns {BufferAttributeNode|Node}
 */
export declare const instancedBufferAttribute: <TNodeType>(
    array: BufferAttribute | InterleavedBufferAttribute | InterleavedBuffer | TypedArray,
    type?: TNodeType | null,
    stride?: number,
    offset?: number,
) => Node<TNodeType>;

/**
 * TSL function for creating a buffer attribute node but with dynamic draw usage and enabled instancing
 *
 * @function
 * @param {BufferAttribute|InterleavedBuffer|TypedArray} array - The attribute data.
 * @param {?string} [type=null] - The buffer type (e.g. `'vec3'`).
 * @param {number} [stride=0] - The buffer stride.
 * @param {number} [offset=0] - The buffer offset.
 * @returns {BufferAttributeNode|Node}
 */
export declare const instancedDynamicBufferAttribute: <TNodeType>(
    array: BufferAttribute | InterleavedBufferAttribute | InterleavedBuffer | TypedArray,
    type?: TNodeType | null,
    stride?: number,
    offset?: number,
) => Node<TNodeType>;

declare module "./BufferNode.js" {
    interface BufferNodeExtensions<TNodeType, TValue> {
        toAttribute: () => BufferAttributeNode<TNodeType>;
    }
}
