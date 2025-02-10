import { Usage } from "../../constants.js";
import { BufferAttribute, TypedArray } from "../../core/BufferAttribute.js";
import { InterleavedBuffer } from "../../core/InterleavedBuffer.js";
import { InterleavedBufferAttribute } from "../../core/InterleavedBufferAttribute.js";
import InputNode from "../core/InputNode.js";
import NodeBuilder from "../core/NodeBuilder.js";
/** @module BufferAttributeNode **/
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
declare class BufferAttributeNode extends InputNode<TypedArray | InterleavedBuffer | BufferAttribute> {
    static get type(): string;
    readonly isBufferNode: true;
    bufferType: string | null;
    bufferStride: number;
    bufferOffset: number;
    usage: Usage;
    instanced: boolean;
    attribute: BufferAttribute | InterleavedBufferAttribute | null;
    /**
     * Constructs a new buffer attribute node.
     *
     * @param {BufferAttribute|InterleavedBuffer|TypedArray} value - The attribute data.
     * @param {String?} [bufferType=null] - The buffer type (e.g. `'vec3'`).
     * @param {Number} [bufferStride=0] - The buffer stride.
     * @param {Number} [bufferOffset=0] - The buffer offset.
     */
    constructor(
        value: TypedArray | InterleavedBuffer | BufferAttribute,
        bufferType?: string | null,
        bufferStride?: number,
        bufferOffset?: number,
    );
    /**
     * This method is overwritten since the attribute data might be shared
     * and thus the hash should be shared as well.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {String} The hash.
     */
    getHash(builder: NodeBuilder): string;
    /**
     * This method is overwritten since the node type is inferred from
     * the buffer attribute.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {String} The node type.
     */
    getNodeType(builder: NodeBuilder): string | null;
    /**
     * Depending on which value was passed to the node, `setup()` behaves
     * differently. If no instance of `BufferAttribute` was passed, the method
     * creates an internal attribute and configures it respectively.
     *
     * @param {NodeBuilder} builder - The current node builder.
     */
    setup(builder: NodeBuilder): void;
    /**
     * Generates the code snippet of the buffer attribute node.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {String} The generated code snippet.
     */
    generate(builder: NodeBuilder): string | null | undefined;
    /**
     * Overwrites the default implementation to return a fixed value `'bufferAttribute'`.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {String} The input type.
     */
    getInputType(): string;
    /**
     * Sets the `usage` property to the given value.
     *
     * @param {Number} value - The usage to set.
     * @return {BufferAttributeNode} A reference to this node.
     */
    setUsage(value: Usage): this;
    /**
     * Sets the `instanced` property to the given value.
     *
     * @param {Boolean} value - The value to set.
     * @return {BufferAttributeNode} A reference to this node.
     */
    setInstanced(value: boolean): this;
}
export default BufferAttributeNode;
/**
 * TSL function for creating a buffer attribute node.
 *
 * @function
 * @param {BufferAttribute|InterleavedBuffer|TypedArray} array - The attribute data.
 * @param {String?} [type=null] - The buffer type (e.g. `'vec3'`).
 * @param {Number} [stride=0] - The buffer stride.
 * @param {Number} [offset=0] - The buffer offset.
 * @returns {BufferAttributeNode}
 */
export declare const bufferAttribute: (
    array: TypedArray | InterleavedBuffer | BufferAttribute,
    type?: string | null,
    stride?: number,
    offset?: number,
) => import("../tsl/TSLCore.js").ShaderNodeObject<BufferAttributeNode>;
/**
 * TSL function for creating a buffer attribute node but with dynamic draw usage.
 * Use this function if attribute data are updated per frame.
 *
 * @function
 * @param {BufferAttribute|InterleavedBuffer|TypedArray} array - The attribute data.
 * @param {String?} [type=null] - The buffer type (e.g. `'vec3'`).
 * @param {Number} [stride=0] - The buffer stride.
 * @param {Number} [offset=0] - The buffer offset.
 * @returns {BufferAttributeNode}
 */
export declare const dynamicBufferAttribute: (
    array: TypedArray | InterleavedBuffer | BufferAttribute,
    type?: string | null,
    stride?: number,
    offset?: number,
) => import("../tsl/TSLCore.js").ShaderNodeObject<BufferAttributeNode>;
/**
 * TSL function for creating a buffer attribute node but with enabled instancing
 *
 * @function
 * @param {BufferAttribute|InterleavedBuffer|TypedArray} array - The attribute data.
 * @param {String?} [type=null] - The buffer type (e.g. `'vec3'`).
 * @param {Number} [stride=0] - The buffer stride.
 * @param {Number} [offset=0] - The buffer offset.
 * @returns {BufferAttributeNode}
 */
export declare const instancedBufferAttribute: (
    array: TypedArray | InterleavedBuffer | BufferAttribute,
    type?: string | null,
    stride?: number,
    offset?: number,
) => import("../tsl/TSLCore.js").ShaderNodeObject<BufferAttributeNode>;
/**
 * TSL function for creating a buffer attribute node but with dynamic draw usage and enabled instancing
 *
 * @function
 * @param {BufferAttribute|InterleavedBuffer|TypedArray} array - The attribute data.
 * @param {String?} [type=null] - The buffer type (e.g. `'vec3'`).
 * @param {Number} [stride=0] - The buffer stride.
 * @param {Number} [offset=0] - The buffer offset.
 * @returns {BufferAttributeNode}
 */
export declare const instancedDynamicBufferAttribute: (
    array: TypedArray | InterleavedBuffer | BufferAttribute,
    type?: string | null,
    stride?: number,
    offset?: number,
) => import("../tsl/TSLCore.js").ShaderNodeObject<BufferAttributeNode>;
