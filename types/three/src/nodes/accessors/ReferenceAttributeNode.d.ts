import { BufferAttribute } from "../../core/BufferAttribute.js";
import { InterleavedBufferAttribute } from "../../core/InterleavedBufferAttribute.js";
import { Object3D } from "../../core/Object3D.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";

/**
 * This node binds a buffer attribute that is a property of the rendered object, like the
 * matrices of an instanced mesh. Unlike {@link BufferAttributeNode}, the attribute isn't part
 * of the program: each object binds its own attribute, so objects can share a program.
 * ```js
 * const matrix = referenceAttribute( 'instanceMatrix', 'mat4' );
 * const color = referenceAttribute( 'instanceColor' );
 * ```
 * Matrices are bound as columns. Storage buffer attributes are bound as storage buffers.
 *
 * @augments Node
 */
declare class ReferenceAttributeNode extends Node {
    /**
     * Constructs a new reference attribute node.
     *
     * @param {string} property - The name of the property the node refers to.
     * @param {?string} [nodeType=null] - The node type. Inferred from the attribute if not set.
     * @param {?Object} [object=null] - The object the property belongs to. The rendered object if not set.
     */
    constructor(property: string, nodeType?: string | null, object?: object | null);
    /**
     * The name of the property the node refers to.
     *
     * @type {string}
     */
    property: string;
    /**
     * The property name might have dots so nested properties can be referred.
     * The hierarchy of the names is stored inside this array.
     *
     * @type {Array<string>}
     */
    properties: Array<string>;
    /**
     * The object the property belongs to. If `null`, the rendered object is used.
     *
     * @type {?Object}
     * @default null
     */
    object: object | null;
    /**
     * Returns the value of the referred property of the given object.
     *
     * @param {Object} object - The object.
     * @return {?(BufferAttribute|InterleavedBufferAttribute)} The value of the referred property.
     */
    getValueFromReference(object: object): (BufferAttribute | InterleavedBufferAttribute) | null;
    /**
     * Returns the attribute the node binds when rendering the given object.
     *
     * @param {Object3D} object - The rendered object.
     * @return {?(BufferAttribute|InterleavedBufferAttribute)} The buffer attribute.
     */
    getAttribute(object: Object3D): (BufferAttribute | InterleavedBufferAttribute) | null;
    /**
     * Returns the node type, inferred from the attribute if not set.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {string} The node type.
     */
    generateNodeType(builder: NodeBuilder): string;
    /**
     * Sets up the attribute nodes.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {Node} The attribute node.
     */
    setup(builder: NodeBuilder): Node;
}

export default ReferenceAttributeNode;

/**
 * TSL function for creating a reference attribute node.
 *
 * @tsl
 * @function
 * @param {string} name - The name of the property the node refers to.
 * @param {?string} [type=null] - The node type. Inferred from the attribute if not set.
 * @param {?Object} [object=null] - The object the property belongs to. The rendered object if not set.
 * @returns {ReferenceAttributeNode}
 */
export const referenceAttribute: (name: string, type?: string | null, object?: object | null) => ReferenceAttributeNode;
